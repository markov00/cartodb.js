// cartodb.js version: 3.0.04-dev
// uncompressed version: cartodb.uncompressed.js
// sha: 6525ec3acdc24525960964960a28ed8ca1b3faf3
(function() {
  var root = this;

  if(!true) {
    if(root.jQuery === undefined) {
      throw "jQuery should be loaded before include cartodb.js";
    }
  }

  // save current libraries
  var __prev = {
    jQuery: root.jQuery,
    $: root.$,
    L: root.L,
    Mustache: root.Mustache,
    Backbone: root.Backbone,
    _: root._
  };


  /*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.4";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2),e=w.isFunction(t);return w.map(n,function(n){return(e?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t,r){return w.isEmpty(t)?r?null:[]:w[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.findWhere=function(n,t){return w.where(n,t,!0)},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var k=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=k(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var F=function(n,t,r,e){var u={},i=k(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return F(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return F(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i},w.bind=function(n,t){if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));var r=o.call(arguments,2);return function(){return n.apply(t,r.concat(o.call(arguments)))}},w.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},w.bindAll=function(n){var t=o.call(arguments,1);return 0===t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var I=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=I(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&I(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return I(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),"function"!=typeof/./&&(w.isFunction=function(n){return"function"==typeof n}),w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return n===void 0},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=w.invert(M.escape);var S={escape:RegExp("["+w.keys(M.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(M.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(S[n],function(t){return M[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),D.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=++N+"";return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var T=/(.)^/,q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){var e;r=w.defaults({},r,w.templateSettings);var u=RegExp([(r.escape||T).source,(r.interpolate||T).source,(r.evaluate||T).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(B,function(n){return"\\"+q[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,w);var c=function(n){return e.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},w.chain=function(n){return w(n).chain()};var D=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],D.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return D.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/*
    json2.js
    2012-10-08

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
//     Backbone.js 0.9.2

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object (`window` in the browser, `global`
  // on the server).
  var root = this;

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to slice/splice.
  var slice = Array.prototype.slice;
  var splice = Array.prototype.splice;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '0.9.2';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // For Backbone's purposes, jQuery, Zepto, or Ender owns the `$` variable.
  var $ = root.jQuery || root.Zepto || root.ender;

  // Set the JavaScript library that will be used for DOM manipulation and
  // Ajax calls (a.k.a. the `$` variable). By default Backbone will use: jQuery,
  // Zepto, or Ender; but the `setDomLibrary()` method lets you inject an
  // alternate JavaScript library (or a mock library for testing your views
  // outside of a browser).
  Backbone.setDomLibrary = function(lib) {
    $ = lib;
  };

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // -----------------

  // Regular expression used to split event strings
  var eventSplitter = /\s+/;

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback functions
  // to an event; trigger`-ing an event fires all callbacks in succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind one or more space separated events, `events`, to a `callback`
    // function. Passing `"all"` will bind the callback to all events fired.
    on: function(events, callback, context) {

      var calls, event, node, tail, list;
      if (!callback) return this;
      events = events.split(eventSplitter);
      calls = this._callbacks || (this._callbacks = {});

      // Create an immutable callback list, allowing traversal during
      // modification.  The tail is an empty object that will always be used
      // as the next node.
      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {tail: tail, next: list ? list.next : node};
      }

      return this;
    },

    // Remove one or many callbacks. If `context` is null, removes all callbacks
    // with that function. If `callback` is null, removes all callbacks for the
    // event. If `events` is null, removes all bound callbacks for all events.
    off: function(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      // No events, or removing *all* events.
      if (!(calls = this._callbacks)) return;
      if (!(events || callback || context)) {
        delete this._callbacks;
        return this;
      }

      // Loop through the listed events and contexts, splicing them out of the
      // linked list of callbacks if appropriate.
      events = events ? events.split(eventSplitter) : _.keys(calls);
      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];
        if (!node || !(callback || context)) continue;
        // Create a new list, omitting the indicated callbacks.
        tail = node.tail;
        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;
          if ((callback && cb !== callback) || (context && ctx !== context)) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(events) {
      var event, node, calls, tail, args, all, rest;
      if (!(calls = this._callbacks)) return this;
      all = calls.all;
      events = events.split(eventSplitter);
      rest = slice.call(arguments, 1);

      // For each event, walk through the linked list of callbacks twice,
      // first to trigger the event, then to trigger any `"all"` callbacks.
      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
        if (node = all) {
          tail = node.tail;
          args = [event].concat(rest);
          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, args);
          }
        }
      }

      return this;
    }

  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Backbone.Model
  // --------------

  // Create a new model, with defined attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    attributes || (attributes = {});
    if (options && options.parse) attributes = this.parse(attributes);
    if (defaults = getValue(this, 'defaults')) {
      attributes = _.extend({}, defaults, attributes);
    }
    if (options && options.collection) this.collection = options.collection;
    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = _.uniqueId('c');
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(attributes, {silent: true});
    // Reset change tracking.
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._previousAttributes = _.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // A hash of attributes that have silently changed since the last time
    // `change` was called.  Will become pending attributes on the next call.
    _silent: null,

    // A hash of attributes that have changed since the last `'change'` event
    // began.
    _pending: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      var html;
      if (html = this._escapedAttributes[attr]) return html;
      var val = this.get(attr);
      return this._escapedAttributes[attr] = _.escape(val == null ? '' : '' + val);
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"` unless
    // you choose to silence it.
    set: function(key, value, options) {
      var attrs, attr, val;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (_.isObject(key) || key == null) {
        attrs = key;
        options = value;
      } else {
        attrs = {};
        attrs[key] = value;
      }

      // Extract attributes and options.
      options || (options = {});
      if (!attrs) return this;
      if (attrs instanceof Model) attrs = attrs.attributes;
      if (options.unset) for (attr in attrs) attrs[attr] = void 0;

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      var changes = options.changes = {};
      var now = this.attributes;
      var escaped = this._escapedAttributes;
      var prev = this._previousAttributes || {};

      // For each `set` attribute...
      for (attr in attrs) {
        val = attrs[attr];

        // If the new and current value differ, record the change.
        if (!_.isEqual(now[attr], val) || (options.unset && _.has(now, attr))) {
          delete escaped[attr];
          (options.silent ? this._silent : changes)[attr] = true;
        }

        // Update or delete the current value.
        options.unset ? delete now[attr] : now[attr] = val;

        // If the new and previous value differ, record the change.  If not,
        // then remove changes for this attribute.
        if (!_.isEqual(prev[attr], val) || (_.has(now, attr) != _.has(prev, attr))) {
          this.changed[attr] = val;
          if (!options.silent) this._pending[attr] = true;
        } else {
          delete this.changed[attr];
          delete this._pending[attr];
        }
      }

      // Fire the `"change"` events.
      if (!options.silent) this.change(options);
      return this;
    },

    // Remove an attribute from the model, firing `"change"` unless you choose
    // to silence it. `unset` is a noop if the attribute doesn't exist.
    unset: function(attr, options) {
      (options || (options = {})).unset = true;
      return this.set(attr, null, options);
    },

    // Clear all attributes on the model, firing `"change"` unless you choose
    // to silence it.
    clear: function(options) {
      (options || (options = {})).unset = true;
      return this.set(_.clone(this.attributes), options);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overriden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        if (!model.set(model.parse(resp, xhr), options)) return false;
        if (success) success(model, resp);
      };
      options.error = Backbone.wrapError(options.error, model, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, value, options) {
      var attrs, current;

      // Handle both `("key", value)` and `({key: value})` -style calls.
      if (_.isObject(key) || key == null) {
        attrs = key;
        options = value;
      } else {
        attrs = {};
        attrs[key] = value;
      }
      options = options ? _.clone(options) : {};

      // If we're "wait"-ing to set changed attributes, validate early.
      if (options.wait) {
        if (!this._validate(attrs, options)) return false;
        current = _.clone(this.attributes);
      }

      // Regular saves `set` attributes before persisting to the server.
      var silentOptions = _.extend({}, options, {silent: true});
      if (attrs && !this.set(attrs, options.wait ? silentOptions : options)) {
        return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        var serverAttrs = model.parse(resp, xhr);
        if (options.wait) {
          delete options.wait;
          serverAttrs = _.extend(attrs || {}, serverAttrs);
        }
        if (!model.set(serverAttrs, options)) return false;
        if (success) {
          success(model, resp);
        } else {
          model.trigger('sync', model, resp, options);
        }
      };

      // Finish configuring and sending the Ajax request.
      options.error = Backbone.wrapError(options.error, model, options);
      var method = this.isNew() ? 'create' : 'update';
      var xhr = (this.sync || Backbone.sync).call(this, method, this, options);
      if (options.wait) this.set(current, silentOptions);
      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var triggerDestroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      if (this.isNew()) {
        triggerDestroy();
        return false;
      }

      options.success = function(resp) {
        if (options.wait) triggerDestroy();
        if (success) {
          success(model, resp);
        } else {
          model.trigger('sync', model, resp, options);
        }
      };

      options.error = Backbone.wrapError(options.error, model, options);
      var xhr = (this.sync || Backbone.sync).call(this, 'delete', this, options);
      if (!options.wait) triggerDestroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base = getValue(this, 'urlRoot') || getValue(this.collection, 'url') || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, xhr) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return this.id == null;
    },

    // Call this method to manually fire a `"change"` event for this model and
    // a `"change:attribute"` event for each changed attribute.
    // Calling this will cause all objects observing the model to update.
    change: function(options) {
      options || (options = {});
      var changing = this._changing;
      this._changing = true;

      // Silent changes become pending changes.
      for (var attr in this._silent) this._pending[attr] = true;

      // Silent changes are triggered.
      var changes = _.extend({}, options.changes, this._silent);
      this._silent = {};
      for (var attr in changes) {
        this.trigger('change:' + attr, this, this.get(attr), options);
      }
      if (changing) return this;

      // Continue firing `"change"` events while there are pending changes.
      while (!_.isEmpty(this._pending)) {
        this._pending = {};
        this.trigger('change', this, options);
        // Pending and silent changes still remain.
        for (var attr in this.changed) {
          if (this._pending[attr] || this._silent[attr]) continue;
          delete this.changed[attr];
        }
        this._previousAttributes = _.clone(this.attributes);
      }

      this._changing = false;
      return this;
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (!arguments.length) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false, old = this._previousAttributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (!arguments.length || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Check if the model is currently in a valid state. It's only possible to
    // get into an *invalid* state if you're using silent changes.
    isValid: function() {
      return !this.validate(this.attributes);
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. If a specific `error` callback has
    // been passed, call that instead of firing the general `"error"` event.
    _validate: function(attrs, options) {
      if (options.silent || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validate(attrs, options);
      if (!error) return true;
      if (options && options.error) {
        options.error(this, error, options);
      } else {
        this.trigger('error', this, error, options);
      }
      return false;
    }

  });

  // Backbone.Collection
  // -------------------

  // Provides a standard collection class for our sets of models, ordered
  // or unordered. If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, {silent: true, parse: options.parse});
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Add a model, or list of models to the set. Pass **silent** to avoid
    // firing the `add` event for every new model.
    add: function(models, options) {
      var i, index, length, model, cid, id, cids = {}, ids = {}, dups = [];
      options || (options = {});
      models = _.isArray(models) ? models.slice() : [models];

      // Begin by turning bare objects into model references, and preventing
      // invalid models or duplicate models from being added.
      for (i = 0, length = models.length; i < length; i++) {
        if (!(model = models[i] = this._prepareModel(models[i], options))) {
          throw new Error("Can't add an invalid model to a collection");
        }
        cid = model.cid;
        id = model.id;
        if (cids[cid] || this._byCid[cid] || ((id != null) && (ids[id] || this._byId[id]))) {
          dups.push(i);
          continue;
        }
        cids[cid] = ids[id] = model;
      }

      // Remove duplicates.
      i = dups.length;
      while (i--) {
        models.splice(dups[i], 1);
      }

      // Listen to added models' events, and index models for lookup by
      // `id` and by `cid`.
      for (i = 0, length = models.length; i < length; i++) {
        (model = models[i]).on('all', this._onModelEvent, this);
        this._byCid[model.cid] = model;
        if (model.id != null) this._byId[model.id] = model;
      }

      // Insert models into the collection, re-sorting if needed, and triggering
      // `add` events unless silenced.
      this.length += length;
      index = options.at != null ? options.at : this.models.length;
      splice.apply(this.models, [index, 0].concat(models));
      if (this.comparator) this.sort({silent: true});
      if (options.silent) return this;
      for (i = 0, length = this.models.length; i < length; i++) {
        if (!cids[(model = this.models[i]).cid]) continue;
        options.index = i;
        model.trigger('add', model, this, options);
      }
      return this;
    },

    // Remove a model, or a list of models from the set. Pass silent to avoid
    // firing the `remove` event for every model removed.
    remove: function(models, options) {
      var i, l, index, model;
      options || (options = {});
      models = _.isArray(models) ? models.slice() : [models];
      for (i = 0, l = models.length; i < l; i++) {
        model = this.getByCid(models[i]) || this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byCid[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model);
      }
      return this;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, options);
      return model;
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      model = this._prepareModel(model, options);
      this.add(model, _.extend({at: 0}, options));
      return model;
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Get a model from the set by id.
    get: function(id) {
      if (id == null) return void 0;
      return this._byId[id.id != null ? id.id : id];
    },

    // Get a model from the set by client id.
    getByCid: function(cid) {
      return cid && this._byCid[cid.cid || cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of `filter`.
    where: function(attrs) {
      if (_.isEmpty(attrs)) return [];
      return this.filter(function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      options || (options = {});
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      var boundComparator = _.bind(this.comparator, this);
      if (this.comparator.length == 1) {
        this.models = this.sortBy(boundComparator);
      } else {
        this.models.sort(boundComparator);
      }
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.map(this.models, function(model){ return model.get(attr); });
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any `add` or `remove` events. Fires `reset` when finished.
    reset: function(models, options) {
      models  || (models = []);
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i]);
      }
      this._reset();
      this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `add: true` is passed, appends the
    // models to the collection instead of resetting.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === undefined) options.parse = true;
      var collection = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        collection[options.add ? 'add' : 'reset'](collection.parse(resp, xhr), options);
        if (success) success(collection, resp);
      };
      options.error = Backbone.wrapError(options.error, collection, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      var coll = this;
      options = options ? _.clone(options) : {};
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!options.wait) coll.add(model, options);
      var success = options.success;
      options.success = function(nextModel, resp, xhr) {
        if (options.wait) coll.add(nextModel, options);
        if (success) {
          success(nextModel, resp);
        } else {
          nextModel.trigger('sync', model, resp, options);
        }
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, xhr) {
      return resp;
    },

    // Proxy to _'s chain. Can't be proxied the same way the rest of the
    // underscore methods are proxied because it relies on the underscore
    // constructor.
    chain: function () {
      return _(this.models).chain();
    },

    // Reset all internal state. Called when the collection is reset.
    _reset: function(options) {
      this.length = 0;
      this.models = [];
      this._byId  = {};
      this._byCid = {};
    },

    // Prepare a model or hash of attributes to be added to this collection.
    _prepareModel: function(model, options) {
      options || (options = {});
      if (!(model instanceof Model)) {
        var attrs = model;
        options.collection = this;
        model = new this.model(attrs, options);
        if (!model._validate(model.attributes, options)) model = false;
      } else if (!model.collection) {
        model.collection = this;
      }
      return model;
    },

    // Internal method to remove a model's ties to a collection.
    _removeReference: function(model) {
      if (this == model.collection) {
        delete model.collection;
      }
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event == 'add' || event == 'remove') && collection != this) return;
      if (event == 'destroy') {
        this.remove(model, options);
      }
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find',
    'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any',
    'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex',
    'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf',
    'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
    };
  });

  // Backbone.Router
  // -------------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var namedParam    = /:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[-[\]{}()+?.,\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      Backbone.history || (Backbone.history = new History);
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (!callback) callback = this[name];
      Backbone.history.route(route, _.bind(function(fragment) {
        var args = this._extractParameters(route, fragment);
        callback && callback.apply(this, args);
        this.trigger.apply(this, ['route:' + name].concat(args));
        Backbone.history.trigger('route', this, name, args);
      }, this));
      return this;
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      var routes = [];
      for (var route in this.routes) {
        routes.unshift([route, this.routes[route]]);
      }
      for (var i = 0, l = routes.length; i < l; i++) {
        this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(namedParam, '([^\/]+)')
                   .replace(splatParam, '(.*?)');
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted parameters.
    _extractParameters: function(route, fragment) {
      return route.exec(fragment).slice(1);
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on URL fragments. If the
  // browser does not support `onhashchange`, falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');
  };

  // Cached regex for cleaning leading hashes and slashes .
  var routeStripper = /^[#\/]/;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(windowOverride) {
      var loc = windowOverride ? windowOverride.location : window.location;
      var match = loc.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || forcePushState) {
          fragment = window.location.pathname;
          var search = window.location.search;
          if (search) fragment += search;
        } else {
          fragment = this.getHash();
        }
      }
      if (!fragment.indexOf(this.options.root)) fragment = fragment.substr(this.options.root.length);
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && window.history && window.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      if (oldIE) {
        this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        $(window).bind('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        $(window).bind('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = window.location;
      var atRoot  = loc.pathname == this.options.root;

      // If we've started off with a route from a `pushState`-enabled browser,
      // but we're currently in a browser that doesn't support it...
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        window.location.replace(this.options.root + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;

      // Or if we've started out with a hash-based route, but we're currently
      // in a browser where it could be `pushState`-based instead...
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = this.getHash().replace(routeStripper, '');
        window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
      }

      if (!this.options.silent) {
        return this.loadUrl();
      }
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      $(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current == this.fragment && this.iframe) current = this.getFragment(this.getHash(this.iframe));
      if (current == this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(this.getHash());
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: options};
      var frag = (fragment || '').replace(routeStripper, '');
      if (this.fragment == frag) return;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        if (frag.indexOf(this.options.root) != 0) frag = this.options.root + frag;
        this.fragment = frag;
        window.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, frag);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this.fragment = frag;
        this._updateHash(window.location, frag, options.replace);
        if (this.iframe && (frag != this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a history entry on hash-tag change.
          // When replace is true, we don't want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, frag, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        window.location.assign(this.options.root + fragment);
      }
      if (options.trigger) this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        location.replace(location.toString().replace(/(javascript:|#).*$/, '') + '#' + fragment);
      } else {
        location.hash = fragment;
      }
    }
  });

  // Backbone.View
  // -------------

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be prefered to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view from the DOM. Note that the view isn't present in the
    // DOM by default, so calling this method may be a no-op.
    remove: function() {
      this.$el.remove();
      return this;
    },

    // For small amounts of DOM Elements, where a full-blown template isn't
    // needed, use **make** to manufacture elements, one at a time.
    //
    //     var el = this.make('li', {'class': 'row'}, this.model.escape('title'));
    //
    make: function(tagName, attributes, content) {
      var el = document.createElement(tagName);
      if (attributes) $(el).attr(attributes);
      if (content) $(el).html(content);
      return el;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = (element instanceof $) ? element : $(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = getValue(this, 'events')))) return;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) throw new Error('Method "' + events[key] + '" does not exist');
        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.bind(eventName, method);
        } else {
          this.$el.delegate(selector, eventName, method);
        }
      }
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.unbind('.delegateEvents' + this.cid);
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(model, collection, id, className)*, are
    // attached directly to the view.
    _configure: function(options) {
      if (this.options) options = _.extend({}, this.options, options);
      for (var i = 0, l = viewOptions.length; i < l; i++) {
        var attr = viewOptions[i];
        if (options[attr]) this[attr] = options[attr];
      }
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = getValue(this, 'attributes') || {};
        if (this.id) attrs.id = this.id;
        if (this.className) attrs['class'] = this.className;
        this.setElement(this.make(this.tagName, attrs), false);
      } else {
        this.setElement(this.el, false);
      }
    }

  });

  // The self-propagating extend function that Backbone classes use.
  var extend = function (protoProps, classProps) {
    var child = inherits(this, protoProps, classProps);
    child.extend = this.extend;
    return child;
  };

  // Set up inheritance for the model, collection, and view.
  Model.extend = Collection.extend = Router.extend = View.extend = extend;

  // Backbone.sync
  // -------------

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    options || (options = {});

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = getValue(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (!options.data && model && (method == 'create' || method == 'update')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(model.toJSON());
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (Backbone.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (Backbone.emulateHTTP) {
      if (type === 'PUT' || type === 'DELETE') {
        if (Backbone.emulateJSON) params.data._method = type;
        params.type = 'POST';
        params.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
        };
      }
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !Backbone.emulateJSON) {
      params.processData = false;
    }

    // Make the request, allowing the user to override any Ajax options.
    return $.ajax(_.extend(params, options));
  };

  // Wrap an optional error callback with a fallback error event.
  Backbone.wrapError = function(onError, originalModel, options) {
    return function(model, resp) {
      resp = model === originalModel ? resp : model;
      if (onError) {
        onError(originalModel, resp, options);
      } else {
        originalModel.trigger('error', originalModel, resp, options);
      }
    };
  };

  // Helpers
  // -------

  // Shared empty constructor function to aid in prototype-chain creation.
  var ctor = function(){};

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var inherits = function(parent, protoProps, staticProps) {
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ parent.apply(this, arguments); };
    }

    // Inherit class (static) properties from parent.
    _.extend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Add static properties to the constructor function, if supplied.
    if (staticProps) _.extend(child, staticProps);

    // Correctly set child's `prototype.constructor`.
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Helper function to get a value from a Backbone object as a property
  // or as a function.
  var getValue = function(object, prop) {
    if (!(object && object[prop])) return null;
    return _.isFunction(object[prop]) ? object[prop]() : object[prop];
  };

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

}).call(this);
/*
 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
 (c) 2010-2013, Vladimir Agafonkin
 (c) 2010-2011, CloudMade
*/
!function(t,e,i){var n=t.L,o={};o.version="0.6.2","object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),o.noConflict=function(){return t.L=n,this},t.L=o,o.Util={extend:function(t){var e,i,n,o,s=Array.prototype.slice.call(arguments,1);for(i=0,n=s.length;n>i;i++){o=s[i]||{};for(e in o)o.hasOwnProperty(e)&&(t[e]=o[e])}return t},bind:function(t,e){var i=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return t.apply(e,i||arguments)}},stamp:function(){var t=0,e="_leaflet_id";return function(i){return i[e]=i[e]||++t,i[e]}}(),invokeEach:function(t,e,i){var n,o;if("object"==typeof t){o=Array.prototype.slice.call(arguments,3);for(n in t)e.apply(i,[n,t[n]].concat(o));return!0}return!1},limitExecByInterval:function(t,e,i){var n,o;return function s(){var a=arguments;return n?(o=!0,void 0):(n=!0,setTimeout(function(){n=!1,o&&(s.apply(i,a),o=!1)},e),t.apply(i,a),void 0)}},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5);return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){return t.options=o.extend({},t.options,e),t.options},getParamString:function(t,e,i){var n=[];for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(e&&-1!==e.indexOf("?")?"&":"?")+n.join("&")},template:function(t,e){return t.replace(/\{ *([\w_]+) *\}/g,function(t,n){var o=e[n];if(o===i)throw new Error("No value provided for variable "+t);return"function"==typeof o&&(o=o(e)),o})},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var i,n,o=["webkit","moz","o","ms"];for(i=0;i<o.length&&!n;i++)n=t[o[i]+e];return n}function i(e){var i=+new Date,o=Math.max(0,16-(i-n));return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,a=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)};o.Util.requestAnimFrame=function(e,n,a,r){return e=o.bind(e,n),a&&s===i?(e(),void 0):s.call(t,e,r)},o.Util.cancelAnimFrame=function(e){e&&a.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},i=function(){};i.prototype=this.prototype;var n=new i;n.constructor=e,e.prototype=n;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s]);t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),t.options&&n.options&&(t.options=o.extend({},n.options,t.options)),o.extend(n,t),n._initHooks=[];var a=this;return e.__super__=a.prototype,n.callInitHooks=function(){if(!this._initHooksCalled){a.prototype.callInitHooks&&a.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,e=n._initHooks.length;e>t;t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){o.extend(this.prototype,t)},o.Class.mergeOptions=function(t){o.extend(this.prototype.options,t)},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i)};var s="_leaflet_events";o.Mixin={},o.Mixin.Events={addEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d=this[s]=this[s]||{},p=i&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)r={action:e,context:i||this},h=t[n],i?(l=h+"_idx",u=l+"_len",c=d[l]=d[l]||{},c[p]||(c[p]=[],d[u]=(d[u]||0)+1),c[p].push(r)):(d[h]=d[h]||[],d[h].push(r));return this},hasEventListeners:function(t){var e=this[s];return!!e&&(t in e&&e[t].length>0||t+"_idx"in e&&e[t+"_idx_len"]>0)},removeEventListener:function(t,e,i){if(!this[s])return this;if(!t)return this.clearAllEventListeners();if(o.Util.invokeEach(t,this.removeEventListener,this,e,i))return this;var n,a,r,h,l,u,c,d,p,_=this[s],m=i&&o.stamp(i);for(t=o.Util.splitWords(t),n=0,a=t.length;a>n;n++)if(r=t[n],u=r+"_idx",c=u+"_len",d=_[u],e){if(h=i&&d?d[m]:_[r]){for(l=h.length-1;l>=0;l--)h[l].action!==e||i&&h[l].context!==i||(p=h.splice(l,1),p[0].action=o.Util.falseFn);i&&d&&0===h.length&&(delete d[m],_[c]--)}}else delete _[r],delete _[u];return this},clearAllEventListeners:function(){return delete this[s],this},fireEvent:function(t,e){if(!this.hasEventListeners(t))return this;var i,n,a,r,h,l=o.Util.extend({},e,{type:t,target:this}),u=this[s];if(u[t])for(i=u[t].slice(),n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context||this,l);r=u[t+"_idx"];for(h in r)if(i=r[h].slice())for(n=0,a=i.length;a>n;n++)i[n].action.call(i[n].context||this,l);return this},addOneTimeEventListener:function(t,e,i){if(o.Util.invokeEach(t,this.addOneTimeEventListener,this,e,i))return this;var n=o.bind(function(){this.removeEventListener(t,e,i).removeEventListener(t,n,i)},this);return this.addEventListener(t,e,i).addEventListener(t,n,i)}},o.Mixin.Events.on=o.Mixin.Events.addEventListener,o.Mixin.Events.off=o.Mixin.Events.removeEventListener,o.Mixin.Events.once=o.Mixin.Events.addOneTimeEventListener,o.Mixin.Events.fire=o.Mixin.Events.fireEvent,function(){var n=!!t.ActiveXObject,s=n&&!t.XMLHttpRequest,a=n&&!e.querySelector,r=n&&!e.addEventListener,h=navigator.userAgent.toLowerCase(),l=-1!==h.indexOf("webkit"),u=-1!==h.indexOf("chrome"),c=-1!==h.indexOf("phantom"),d=-1!==h.indexOf("android"),p=-1!==h.search("android [23]"),_=typeof orientation!=i+"",m=t.navigator&&t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints,f="devicePixelRatio"in t&&t.devicePixelRatio>1||"matchMedia"in t&&t.matchMedia("(min-resolution:144dpi)")&&t.matchMedia("(min-resolution:144dpi)").matches,g=e.documentElement,v=n&&"transition"in g.style,y="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix,L="MozPerspective"in g.style,P="OTransition"in g.style,x=!t.L_DISABLE_3D&&(v||y||L||P)&&!c,T=!t.L_NO_TOUCH&&!c&&function(){var t="ontouchstart";if(m||t in g)return!0;var i=e.createElement("div"),n=!1;return i.setAttribute?(i.setAttribute(t,"return;"),"function"==typeof i[t]&&(n=!0),i.removeAttribute(t),i=null,n):!1}();o.Browser={ie:n,ie6:s,ie7:a,ielt9:r,webkit:l,android:d,android23:p,chrome:u,ie3d:v,webkit3d:y,gecko3d:L,opera3d:P,any3d:x,mobile:_,mobileWebkit:_&&l,mobileWebkit3d:_&&y,mobileOpera:_&&t.opera,touch:T,msTouch:m,retina:f}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(t){t=o.point(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t);var e=this.min,i=this.max,n=t.min,s=t.max,a=s.x>=e.x&&n.x<=i.x,r=s.y>=e.y&&n.y<=i.y;return a&&r},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i];if(!n&&t.currentStyle&&(n=t.currentStyle[i]),(!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null);n=o?o[i]:null}return"auto"===n?null:n},getViewportOffset:function(t){var i,n=0,s=0,a=t,r=e.body,h=e.documentElement,l=o.Browser.ie7;do{if(n+=a.offsetTop||0,s+=a.offsetLeft||0,n+=parseInt(o.DomUtil.getStyle(a,"borderTopWidth"),10)||0,s+=parseInt(o.DomUtil.getStyle(a,"borderLeftWidth"),10)||0,i=o.DomUtil.getStyle(a,"position"),a.offsetParent===r&&"absolute"===i)break;if("fixed"===i){n+=r.scrollTop||h.scrollTop||0,s+=r.scrollLeft||h.scrollLeft||0;break}if("relative"===i&&!a.offsetLeft){var u=o.DomUtil.getStyle(a,"width"),c=o.DomUtil.getStyle(a,"max-width"),d=a.getBoundingClientRect();("none"!==u||"none"!==c)&&(s+=d.left+a.clientLeft),n+=d.top+(r.scrollTop||h.scrollTop||0);break}a=a.offsetParent}while(a);a=t;do{if(a===r)break;n-=a.scrollTop||0,s-=a.scrollLeft||0,o.DomUtil.documentIsLtr()||!o.Browser.webkit&&!l||(s+=a.scrollWidth-a.clientWidth,l&&"hidden"!==o.DomUtil.getStyle(a,"overflow-y")&&"hidden"!==o.DomUtil.getStyle(a,"overflow")&&(s+=17)),a=a.parentNode}while(a);return new o.Point(s,n)},documentIsLtr:function(){return o.DomUtil._docIsLtrCached||(o.DomUtil._docIsLtrCached=!0,o.DomUtil._docIsLtr="ltr"===o.DomUtil.getStyle(e.body,"direction")),o.DomUtil._docIsLtr},create:function(t,i,n){var o=e.createElement(t);return o.className=i,n&&n.appendChild(o),o},hasClass:function(t,e){return t.className.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},addClass:function(t,e){o.DomUtil.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},removeClass:function(t,e){t.className=o.Util.trim((" "+t.className+" ").replace(" "+e+" "," "))},setOpacity:function(t,e){if("opacity"in t.style)t.style.opacity=e;else if("filter"in t.style){var i=!1,n="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(n)}catch(o){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"}},testProp:function(t){for(var i=e.documentElement.style,n=0;n<t.length;n++)if(t[n]in i)return t[n];return!1},getTranslateString:function(t){var e=o.Browser.webkit3d,i="translate"+(e?"3d":"")+"(",n=(e?",0":"")+")";return i+t.x+"px,"+t.y+"px"+n},getScaleString:function(t,e){var i=o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1*t))),n=" scale("+t+") ";return i+n},setPosition:function(t,e,i){t._leaflet_pos=e,!i&&o.Browser.any3d?(t.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(e),o.Browser.mobileWebkit3d&&(t.style.WebkitBackfaceVisibility="hidden")):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos}},o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),o.DomUtil.TRANSITION_END="webkitTransition"===o.DomUtil.TRANSITION||"OTransition"===o.DomUtil.TRANSITION?o.DomUtil.TRANSITION+"End":"transitionend",function(){var i=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);o.extend(o.DomUtil,{disableTextSelection:function(){if(o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault),i){var n=e.documentElement.style;this._userSelect=n[i],n[i]="none"}},enableTextSelection:function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault),i&&(e.documentElement.style[i]=this._userSelect,delete this._userSelect)},disableImageDrag:function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},enableImageDrag:function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)}})}(),o.LatLng=function(t,e){var i=parseFloat(t),n=parseFloat(e);if(isNaN(i)||isNaN(n))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=i,this.lng=n},o.extend(o.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),o.LatLng.prototype={equals:function(t){if(!t)return!1;t=o.latLng(t);var e=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return e<=o.LatLng.MAX_MARGIN},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){t=o.latLng(t);var e=6378137,i=o.LatLng.DEG_TO_RAD,n=(t.lat-this.lat)*i,s=(t.lng-this.lng)*i,a=this.lat*i,r=t.lat*i,h=Math.sin(n/2),l=Math.sin(s/2),u=h*h+l*l*Math.cos(a)*Math.cos(r);return 2*e*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))},wrap:function(t,e){var i=this.lng;return t=t||-180,e=e||180,i=(i+e)%(e-t)+(t>i||i===e?e:t),new o.LatLng(this.lat,i)}},o.latLng=function(t,e){return t instanceof o.LatLng?t:o.Util.isArray(t)?new o.LatLng(t[0],t[1]):t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon):new o.LatLng(t,e)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length;o>n;n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){return t?(t="number"==typeof t[0]||"string"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t),t instanceof o.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(t.lat,this._southWest.lat),this._southWest.lng=Math.min(t.lng,this._southWest.lng),this._northEast.lat=Math.max(t.lat,this._northEast.lat),this._northEast.lng=Math.max(t.lng,this._northEast.lng)):(this._southWest=new o.LatLng(t.lat,t.lng),this._northEast=new o.LatLng(t.lat,t.lng)):t instanceof o.LatLngBounds&&(this.extend(t._southWest),this.extend(t._northEast)),this):this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t;return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t);var e,i,n=this._southWest,s=this._northEast;return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t);var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),a=s.lat>=e.lat&&n.lat<=i.lat,r=s.lng>=e.lng&&n.lng<=i.lng;return a&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return t?(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast())):!1},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return!t||t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(t){var e=o.LatLng.DEG_TO_RAD,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=t.lng*e,a=n*e;return a=Math.log(Math.tan(Math.PI/4+a/2)),new o.Point(s,a)},unproject:function(t){var e=o.LatLng.RAD_TO_DEG,i=t.x*e,n=(2*Math.atan(Math.exp(t.y))-Math.PI/2)*e;return new o.LatLng(n,i)}},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)}},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e);return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},scale:function(t){return 256*Math.pow(2,t)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)}}),o.CRS.EPSG3857=o.extend({},o.CRS,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:new o.Transformation(.5/Math.PI,.5,-.5/Math.PI,.5),project:function(t){var e=this.projection.project(t),i=6378137;return e.multiplyBy(i)}}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/360,.5,-1/360,.5)}),o.Map=o.Class.extend({includes:o.Mixin.Events,options:{crs:o.CRS.EPSG3857,fadeAnimation:o.DomUtil.TRANSITION&&!o.Browser.android23,trackResize:!0,markerZoomAnimation:o.DomUtil.TRANSITION&&o.Browser.any3d},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0,this.callInitHooks(),this._addLayers(e.layers)},setView:function(t,e){return this._resetView(o.latLng(t),this._limitZoom(e)),this},setZoom:function(t,e){return this.setView(this.getCenter(),t,{zoom:e})},zoomIn:function(t,e){return this.setZoom(this._zoom+(t||1),e)},zoomOut:function(t,e){return this.setZoom(this._zoom-(t||1),e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),a=t instanceof o.Point?t:this.latLngToContainerPoint(t),r=a.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(r));return this.setView(h,e,{zoom:i})},fitBounds:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t);var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n)),a=n.subtract(i).divideBy(2),r=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(r.add(h).divideBy(2).add(a),s);return this.setView(l,s,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t,e){if(t=o.latLngBounds(t),this.options.maxBounds=t,!t)return this._boundsMinZoom=null,this.off("moveend",this._panInsideMaxBounds,this),this;var i=this.getBoundsZoom(t,!0);return this._boundsMinZoom=i,this._loaded&&(this._zoom<i?this.setView(t.getCenter(),i,e):this.panInsideBounds(t)),this.on("moveend",this._panInsideMaxBounds,this),this},panInsideBounds:function(t){t=o.latLngBounds(t);var e=this.getPixelBounds(),i=e.getBottomLeft(),n=e.getTopRight(),s=this.project(t.getSouthWest()),a=this.project(t.getNorthEast()),r=0,h=0;return n.y<a.y&&(h=Math.ceil(a.y-n.y)),n.x>a.x&&(r=Math.floor(a.x-n.x)),i.y>s.y&&(h=Math.floor(s.y-i.y)),i.x<s.x&&(r=Math.ceil(s.x-i.x)),r||h?this.panBy([r,h]):this},addLayer:function(t){var e=o.stamp(t);return this._layers[e]?this:(this._layers[e]=t,!t.options||isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[e]=t,this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,t.on("load",this._onTileLayerLoad,this)),this._loaded&&this._layerAdd(t),this)},removeLayer:function(t){var e=o.stamp(t);if(this._layers[e])return this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&this.fire("layerremove",{layer:t}),this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels()),this.options.zoomAnimation&&o.TileLayer&&t instanceof o.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,t.off("load",this._onTileLayerLoad,this)),this},hasLayer:function(t){return t?o.stamp(t)in this._layers:!1},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},invalidateSize:function(t){t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();if(this._sizeChanged=!0,this.options.maxBounds&&this.setMaxBounds(this.options.maxBounds),!this._loaded)return this;var i=this.getSize(),n=e.subtract(i).divideBy(2).round();return n.x||n.y?(t.animate&&t.pan?this.panBy(n):(t.pan&&this._rawPanBy(n),this.fire("move"),clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)),this.fire("resize",{oldSize:e,newSize:i})):this},addHandler:function(t,e){if(e){var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this}},remove:function(){return this._loaded&&this.fire("unload"),this._initEvents("off"),delete this._container._leaflet,this._clearPanes(),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this},getCenter:function(){return this._checkIfLoaded(),this._moved()?this.layerPointToLatLng(this._getCenterLayerPoint()):this._initialCenter},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new o.LatLngBounds(e,i)},getMinZoom:function(){var t=this._layersMinZoom===i?-1/0:this._layersMinZoom,e=this._boundsMinZoom===i?-1/0:this._boundsMinZoom;return this.options.minZoom===i?Math.max(t,e):this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t);var n,s=this.getMinZoom()-(e?1:0),a=this.getMaxZoom(),r=this.getSize(),h=t.getNorthWest(),l=t.getSouthEast(),u=!0;i=o.point(i||[0,0]);do s++,n=this.project(l,s).subtract(this.project(h,s)).add(i),u=e?n.x<r.x||n.y<r.y:r.contains(n);while(u&&a>=s);return u&&e?null:e?s:s-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var t=this._getTopLeftPoint();return new o.Bounds(t,t.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t){var e=this.options.crs;return e.scale(t)/e.scale(this._zoom)},getScaleZoom:function(t){return this._zoom+Math.log(t)/Math.LN2},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round();return e._subtract(this.getPixelOrigin())},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t);if(!e)throw new Error("Map container not found.");if(e._leaflet)throw new Error("Map container is already initialized.");e._leaflet=!0},_initLayout:function(){var t=this._container;o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(this.options.fadeAnimation?" leaflet-fade-anim":""));var e=o.DomUtil.getStyle(t,"position");"absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._mapPane=t.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=t.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),t.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),t.shadowPane=this._createPane("leaflet-shadow-pane"),t.overlayPane=this._createPane("leaflet-overlay-pane"),t.markerPane=this._createPane("leaflet-marker-pane"),t.popupPane=this._createPane("leaflet-popup-pane");var e=" leaflet-zoom-hide";this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,e),o.DomUtil.addClass(t.shadowPane,e),o.DomUtil.addClass(t.popupPane,e))},_createPane:function(t,e){return o.DomUtil.create("div",t,e||this._panes.objectsPane)},_clearPanes:function(){this._container.removeChild(this._mapPane)},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[];for(var e=0,i=t.length;i>e;e++)this.addLayer(t[e])},_resetView:function(t,e,i,n){var s=this._zoom!==e;n||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=e,this._initialCenter=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(t),i?this._initialTopLeftPoint._add(this._getMapPanePos()):o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var a=!this._loaded;this._loaded=!0,a&&(this.fire("load"),this.eachLayer(this._layerAdd,this)),this.fire("viewreset",{hard:!i}),this.fire("move"),(s||n)&&this.fire("zoomend"),this.fire("moveend",{hard:!i})},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_updateZoomLevels:function(){var t,e=1/0,n=-1/0,o=this._getZoomSpan();for(t in this._zoomBoundLayers){var s=this._zoomBoundLayers[t];isNaN(s.options.minZoom)||(e=Math.min(e,s.options.minZoom)),isNaN(s.options.maxZoom)||(n=Math.max(n,s.options.maxZoom))}t===i?this._layersMaxZoom=this._layersMinZoom=i:(this._layersMaxZoom=n,this._layersMinZoom=e),o!==this._getZoomSpan()&&this.fire("zoomlevelschange")},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){e=e||"on",o.DomEvent[e](this._container,"click",this._onMouseClick,this);var i,n,s=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(i=0,n=s.length;n>i;i++)o.DomEvent[e](this._container,s[i],this._fireMouseEvent,this);this.options.trackResize&&o.DomEvent[e](t,"resize",this._onResize,this)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(this.invalidateSize,this,!1,this._container)},_onMouseClick:function(t){!this._loaded||!t._simulated&&this.dragging&&this.dragging.moved()||o.DomEvent._skipped(t)||(this.fire("preclick"),this._fireMouseEvent(t))},_fireMouseEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e=t.type;if(e="mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,this.hasEventListeners(e)){"contextmenu"===e&&o.DomEvent.preventDefault(t);var i=this.mouseEventToContainerPoint(t),n=this.containerPointToLayerPoint(i),s=this.layerPointToLatLng(n);this.fire(e,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this.fire("tilelayersload")},_clearHandlers:function(){for(var t=0,e=this._handlers.length;e>t;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,this):this.on("load",t,e),this},_layerAdd:function(t){t.onAdd(this),this.fire("layeradd",{layer:t})},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(){return this.getPixelOrigin().subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewTopLeftPoint(i,e).add(this._getMapPanePos());return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom();return Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.TileLayer=o.Class.extend({includes:o.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:o.Browser.mobile,updateWhenIdle:o.Browser.mobile},initialize:function(t,e){e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomOffset++,e.minZoom>0&&e.minZoom--,this.options.maxZoom--),e.bounds&&(e.bounds=o.latLngBounds(e.bounds)),this._url=t;var i=this.options.subdomains;"string"==typeof i&&(this.options.subdomains=i.split(""))},onAdd:function(t){this._map=t,this._animated=t._zoomAnimated,this._initContainer(),t.on({viewreset:this._reset,moveend:this._update},this),this._animated&&t.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||(this._limitedUpdate=o.Util.limitExecByInterval(this._update,150,this),t.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this._container.parentNode.removeChild(this._container),t.off({viewreset:this._reset,moveend:this._update},this),this._animated&&t.off({zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this),this.options.updateWhenIdle||t.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var t=this._map._panes.tilePane;return this._container&&(t.appendChild(this._container),this._setAutoZIndex(t,Math.max)),this},bringToBack:function(){var t=this._map._panes.tilePane;return this._container&&(t.insertBefore(this._container,t.firstChild),this._setAutoZIndex(t,Math.min)),this},getAttribution:function(){return this.options.attribution
},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},redraw:function(){return this._map&&(this._reset({hard:!0}),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t,e){var i,n,o,s=t.children,a=-e(1/0,-1/0);for(n=0,o=s.length;o>n;n++)s[n]!==this._container&&(i=parseInt(s[n].style.zIndex,10),isNaN(i)||(a=e(a,i)));this.options.zIndex=this._container.style.zIndex=(isFinite(a)?a:0)+e(1,-1)},_updateOpacity:function(){var t,e=this._tiles;if(o.Browser.ielt9)for(t in e)o.DomUtil.setOpacity(e[t],this.options.opacity);else o.DomUtil.setOpacity(this._container,this.options.opacity)},_initContainer:function(){var t=this._map._panes.tilePane;if(!this._container){if(this._container=o.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),this._animated){var e="leaflet-tile-container leaflet-zoom-animated";this._bgBuffer=o.DomUtil.create("div",e,this._container),this._tileContainer=o.DomUtil.create("div",e,this._container)}else this._tileContainer=this._container;t.appendChild(this._container),this.options.opacity<1&&this._updateOpacity()}},_reset:function(t){for(var e in this._tiles)this.fire("tileunload",{tile:this._tiles[e]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),this._tileContainer.innerHTML="",this._animated&&t&&t.hard&&this._clearBgBuffer(),this._initContainer()},_getTileSize:function(){var t=this._map,e=t.getZoom(),i=this.options.maxNativeZoom,n=this.options.tileSize;return i&&e>i&&(n=Math.round(t.getZoomScale(e)/t.getZoomScale(i)*n)),n},_update:function(){if(this._map){var t=this._map,e=t.getPixelBounds(),i=t.getZoom(),n=this._getTileSize();if(!(i>this.options.maxZoom||i<this.options.minZoom)){var s=o.bounds(e.min.divideBy(n)._floor(),e.max.divideBy(n)._floor());this._addTilesFromCenterOut(s),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(s)}}},_addTilesFromCenterOut:function(t){var i,n,s,a=[],r=t.getCenter();for(i=t.min.y;i<=t.max.y;i++)for(n=t.min.x;n<=t.max.x;n++)s=new o.Point(n,i),this._tileShouldBeLoaded(s)&&a.push(s);var h=a.length;if(0!==h){a.sort(function(t,e){return t.distanceTo(r)-e.distanceTo(r)});var l=e.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=h,n=0;h>n;n++)this._addTile(a[n],l);this._tileContainer.appendChild(l)}},_tileShouldBeLoaded:function(t){if(t.x+":"+t.y in this._tiles)return!1;var e=this.options;if(!e.continuousWorld){var i=this._getWrapTileNum();if(e.noWrap&&(t.x<0||t.x>=i)||t.y<0||t.y>=i)return!1}if(e.bounds){var n=e.tileSize,o=t.multiplyBy(n),s=o.add([n,n]),a=this._map.unproject(o),r=this._map.unproject(s);if(e.continuousWorld||e.noWrap||(a=a.wrap(),r=r.wrap()),!e.bounds.intersects([a,r]))return!1}return!0},_removeOtherTiles:function(t){var e,i,n,o;for(o in this._tiles)e=o.split(":"),i=parseInt(e[0],10),n=parseInt(e[1],10),(i<t.min.x||i>t.max.x||n<t.min.y||n>t.max.y)&&this._removeTile(o)},_removeTile:function(t){var e=this._tiles[t];this.fire("tileunload",{tile:e,url:e.src}),this.options.reuseTiles?(o.DomUtil.removeClass(e,"leaflet-tile-loaded"),this._unusedTiles.push(e)):e.parentNode===this._tileContainer&&this._tileContainer.removeChild(e),o.Browser.android||(e.onload=null,e.src=o.Util.emptyImageUrl),delete this._tiles[t]},_addTile:function(t,e){var i=this._getTilePos(t),n=this._getTile();o.DomUtil.setPosition(n,i,o.Browser.chrome||o.Browser.android23),this._tiles[t.x+":"+t.y]=n,this._loadTile(n,t),n.parentNode!==this._tileContainer&&e.appendChild(n)},_getZoomForUrl:function(){var t=this.options,e=this._map.getZoom();return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getTilePos:function(t){var e=this._map.getPixelOrigin(),i=this._getTileSize();return t.multiplyBy(i).subtract(e)},getTileUrl:function(t){return o.Util.template(this._url,o.extend({s:this._getSubdomain(t),z:t.z,x:t.x,y:t.y},this.options))},_getWrapTileNum:function(){return Math.pow(2,this._getZoomForUrl())},_adjustTilePoint:function(t){var e=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(t.x=(t.x%e+e)%e),this.options.tms&&(t.y=e-t.y-1),t.z=this._getZoomForUrl()},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var t=this._unusedTiles.pop();return this._resetTile(t),t}return this._createTile()},_resetTile:function(){},_createTile:function(){var t=o.DomUtil.create("img","leaflet-tile");return t.style.width=t.style.height=this._getTileSize()+"px",t.galleryimg="no",t.onselectstart=t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity!==i&&o.DomUtil.setOpacity(t,this.options.opacity),t},_loadTile:function(t,e){t._layer=this,t.onload=this._tileOnLoad,t.onerror=this._tileOnError,this._adjustTilePoint(e),t.src=this.getTileUrl(e)},_tileLoaded:function(){this._tilesToLoad--,this._tilesToLoad||(this.fire("load"),this._animated&&(clearTimeout(this._clearBgBufferTimer),this._clearBgBufferTimer=setTimeout(o.bind(this._clearBgBuffer,this),500)))},_tileOnLoad:function(){var t=this._layer;this.src!==o.Util.emptyImageUrl&&(o.DomUtil.addClass(this,"leaflet-tile-loaded"),t.fire("tileload",{tile:this,url:this.src})),t._tileLoaded()},_tileOnError:function(){var t=this._layer;t.fire("tileerror",{tile:this,url:this.src});var e=t.options.errorTileUrl;e&&(this.src=e),t._tileLoaded()}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.Canvas=o.TileLayer.extend({options:{async:!1},initialize:function(t){o.setOptions(this,t)},redraw:function(){this._map&&(this._reset({hard:!0}),this._update());for(var t in this._tiles)this._redrawTile(this._tiles[t]);return this},_redrawTile:function(t){this.drawTile(t,t._tilePoint,this._map._zoom)},_createTile:function(){var t=o.DomUtil.create("canvas","leaflet-tile");return t.width=t.height=this.options.tileSize,t.onselectstart=t.onmousemove=o.Util.falseFn,t},_loadTile:function(t,e){t._layer=this,t._tilePoint=e,this._redrawTile(t),this.options.async||this.tileDrawn(t)},drawTile:function(){},tileDrawn:function(t){this._tileOnLoad.call(t)}}),o.tileLayer.canvas=function(t){return new o.TileLayer.Canvas(t)},o.Icon=o.Class.extend({options:{className:""},initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n;return n=e&&"IMG"===e.tagName?this._createImg(i,e):this._createImg(i),this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i,n=this.options,s=o.point(n[e+"Size"]);i="shadow"===e?o.point(n.shadowAnchor||n.iconAnchor):o.point(n.iconAnchor),!i&&s&&(i=s.divideBy(2,!0)),t.className="leaflet-marker-"+e+" "+n.className,i&&(t.style.marginLeft=-i.x+"px",t.style.marginTop=-i.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return o.Browser.ie6?(i||(i=e.createElement("div")),i.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+t+'")'):(i||(i=e.createElement("img")),i.src=t),i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]?this.options[t+"RetinaUrl"]:this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]},_getIconUrl:function(t){var e=t+"Url";if(this.options[e])return this.options[e];o.Browser.retina&&"icon"===t&&(t+="-2x");var i=o.Icon.Default.imagePath;if(!i)throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return i+"/marker-"+t+".png"}}),o.Icon.Default.imagePath=function(){var t,i,n,o,s,a=e.getElementsByTagName("script"),r=/[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(t=0,i=a.length;i>t;t++)if(n=a[t].src,o=n.match(r))return s=n.split(r)[0],(s?s+"/":"")+"images"}(),o.Marker=o.Class.extend({includes:o.Mixin.Events,options:{icon:new o.Icon.Default,title:"",clickable:!0,draggable:!1,keyboard:!0,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._map=t,t.on("viewreset",this.update,this),this._initIcon(),this.update(),t.options.zoomAnimation&&t.options.markerZoomAnimation&&t.on("zoomanim",this._animateZoom,this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){this.dragging&&this.dragging.disable(),this._removeIcon(),this._removeShadow(),this.fire("remove"),t.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update(),this},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e=this._map,i=e.options.zoomAnimation&&e.options.markerZoomAnimation,n=i?"leaflet-zoom-animated":"leaflet-zoom-hide",s=t.icon.createIcon(this._icon),a=!1;s!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(s.title=t.title)),o.DomUtil.addClass(s,n),t.keyboard&&(s.tabIndex="0"),this._icon=s,this._initInteraction(),t.riseOnHover&&o.DomEvent.on(s,"mouseover",this._bringToFront,this).on(s,"mouseout",this._resetZIndex,this);var r=t.icon.createShadow(this._shadow),h=!1;r!==this._shadow&&(this._removeShadow(),h=!0),r&&o.DomUtil.addClass(r,n),this._shadow=r,t.opacity<1&&this._updateOpacity();var l=this._map._panes;a&&l.markerPane.appendChild(this._icon),r&&h&&l.shadowPane.appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&o.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),this._map._panes.markerPane.removeChild(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&this._map._panes.shadowPane.removeChild(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPos(e)},_initInteraction:function(){if(this.options.clickable){var t=this._icon,e=["dblclick","mousedown","mouseover","mouseout","contextmenu"];o.DomUtil.addClass(t,"leaflet-clickable"),o.DomEvent.on(t,"click",this._onMouseClick,this),o.DomEvent.on(t,"keypress",this._onKeyPress,this);for(var i=0;i<e.length;i++)o.DomEvent.on(t,e[i],this._fireMouseEvent,this);o.Handler.MarkerDrag&&(this.dragging=new o.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(t){var e=this.dragging&&this.dragging.moved();(this.hasEventListeners(t.type)||e)&&o.DomEvent.stopPropagation(t),e||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(t.type,{originalEvent:t,latlng:this._latlng})},_onKeyPress:function(t){13===t.keyCode&&this.fire("click",{originalEvent:t,latlng:this._latlng})},_fireMouseEvent:function(t){this.fire(t.type,{originalEvent:t,latlng:this._latlng}),"contextmenu"===t.type&&this.hasEventListeners(t.type)&&o.DomEvent.preventDefault(t),"mousedown"!==t.type?o.DomEvent.stopPropagation(t):o.DomEvent.preventDefault(t)},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){o.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&o.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],className:"leaflet-div-icon",html:!1},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options;return i.innerHTML=n.html!==!1?n.html:"",n.bgPos&&(i.style.backgroundPosition=-n.bgPos.x+"px "+-n.bgPos.y+"px"),this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Popup=o.Class.extend({includes:o.Mixin.Events,options:{minWidth:50,maxWidth:300,maxHeight:null,autoPan:!0,closeButton:!0,offset:[0,7],autoPanPadding:[5,5],keepInView:!1,className:"",zoomAnimation:!0},initialize:function(t,e){o.setOptions(this,t),this._source=e,this._animated=o.Browser.any3d&&this.options.zoomAnimation,this._isOpen=!1},onAdd:function(t){this._map=t,this._container||this._initLayout(),this._updateContent();var e=t.options.fadeAnimation;e&&o.DomUtil.setOpacity(this._container,0),t._panes.popupPane.appendChild(this._container),t.on(this._getEvents(),this),this._update(),e&&o.DomUtil.setOpacity(this._container,1),this.fire("open"),t.fire("popupopen",{popup:this}),this._source&&this._source.fire("popupopen",{popup:this})},addTo:function(t){return t.addLayer(this),this},openOn:function(t){return t.openPopup(this),this},onRemove:function(t){t._panes.popupPane.removeChild(this._container),o.Util.falseFn(this._container.offsetWidth),t.off(this._getEvents(),this),t.options.fadeAnimation&&o.DomUtil.setOpacity(this._container,0),this._map=null,this.fire("close"),t.fire("popupclose",{popup:this}),this._source&&this._source.fire("popupclose",{popup:this})},setLatLng:function(t){return this._latlng=o.latLng(t),this._update(),this},setContent:function(t){return this._content=t,this._update(),this},_getEvents:function(){var t={viewreset:this._updatePosition};return this._animated&&(t.zoomanim=this._zoomAnimation),("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t,e="leaflet-popup",i=e+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),n=this._container=o.DomUtil.create("div",i);this.options.closeButton&&(t=this._closeButton=o.DomUtil.create("a",e+"-close-button",n),t.href="#close",t.innerHTML="&#215;",o.DomEvent.disableClickPropagation(t),o.DomEvent.on(t,"click",this._onCloseButtonClick,this));var s=this._wrapper=o.DomUtil.create("div",e+"-content-wrapper",n);o.DomEvent.disableClickPropagation(s),this._contentNode=o.DomUtil.create("div",e+"-content",s),o.DomEvent.on(this._contentNode,"mousewheel",o.DomEvent.stopPropagation),o.DomEvent.on(this._contentNode,"MozMousePixelScroll",o.DomEvent.stopPropagation),o.DomEvent.on(s,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",e+"-tip-container",n),this._tip=o.DomUtil.create("div",e+"-tip",this._tipContainer)},_update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var n=t.offsetHeight,s=this.options.maxHeight,a="leaflet-popup-scrolled";s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,a)):o.DomUtil.removeClass(t,a),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=this._animated,i=o.point(this.options.offset);e&&o.DomUtil.setPosition(this._container,t),this._containerBottom=-i.y-(e?0:t.y),this._containerLeft=-Math.round(this._containerWidth/2)+i.x+(e?0:t.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);o.DomUtil.setPosition(this._container,e)},_adjustPan:function(){if(this.options.autoPan){var t=this._map,e=this._container.offsetHeight,i=this._containerWidth,n=new o.Point(this._containerLeft,-e-this._containerBottom);this._animated&&n._add(o.DomUtil.getPosition(this._container));var s=t.layerPointToContainerPoint(n),a=o.point(this.options.autoPanPadding),r=t.getSize(),h=0,l=0;s.x+i>r.x&&(h=s.x+i-r.x+a.x),s.x-h<0&&(h=s.x-a.x),s.y+e>r.y&&(l=s.y+e-r.y+a.y),s.y-l<0&&(l=s.y-a.y),(h||l)&&t.fire("autopanstart").panBy([h,l])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.include({openPopup:function(t,e,i){if(this.closePopup(),!(t instanceof o.Popup)){var n=t;t=new o.Popup(i).setLatLng(e).setContent(n)}return t._isOpen=!0,this._popup=t,this.addLayer(t)},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&(this.removeLayer(t),t._isOpen=!1),this}}),o.Marker.include({openPopup:function(){return this._popup&&this._map&&!this._map.hasLayer(this._popup)&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(){return this._popup&&(this._popup._isOpen?this.closePopup():this.openPopup()),this},bindPopup:function(t,e){var i=o.point(this.options.icon.options.popupAnchor||[0,0]);return i=i.add(o.Popup.prototype.options.offset),e&&e.offset&&(i=i.add(e.offset)),e=o.extend({offset:i},e),this._popup||this.on("click",this.togglePopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),t instanceof o.Popup?(o.setOptions(t,e),this._popup=t):this._popup=new o.Popup(e,this).setContent(t),this},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.togglePopup).off("remove",this.closePopup).off("move",this._movePopup)),this},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.LayerGroup=o.Class.extend({initialize:function(t){this._layers={};var e,i;if(t)for(e=0,i=t.length;i>e;e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return t?t in this._layers||this.getLayerId(t)in this._layers:!1},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1);for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n);return this},onAdd:function(t){this._map=t,this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t),this._map=null},addTo:function(t){return t.addLayer(this),this},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];for(var e in this._layers)t.push(this._layers[e]);return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({includes:o.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"},addLayer:function(t){return this.hasLayer(t)?this:(t.on(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.addLayer.call(this,t),this._popupContent&&t.bindPopup&&t.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.off(o.FeatureGroup.EVENTS,this._propagateEvent,this),o.LayerGroup.prototype.removeLayer.call(this,t),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:t})):this},bindPopup:function(t,e){return this._popupContent=t,this._popupOptions=e,this.invoke("bindPopup",t,e)},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds;return this.eachLayer(function(e){t.extend(e instanceof o.Marker?e.getLatLng():e.getBounds())}),t},_propagateEvent:function(t){t.layer||(t.layer=t.target),t.target=this,this.fire(t.type,t)}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Path=o.Class.extend({includes:[o.Mixin.Events],statics:{CLIP_PADDING:o.Browser.mobile?Math.max(0,Math.min(.5,(1280/Math.max(t.innerWidth,t.innerHeight)-1)/2)):.5},options:{stroke:!0,color:"#0033ff",dashArray:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(t){o.setOptions(this,t)},onAdd:function(t){this._map=t,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),t.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(t){return t.addLayer(this),this},onRemove:function(t){t._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,o.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),t.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(t){return o.setOptions(this,t),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),o.Map.include({_updatePathViewport:function(){var t=o.Path.CLIP_PADDING,e=this.getSize(),i=o.DomUtil.getPosition(this._mapPane),n=i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),s=n.add(e.multiplyBy(1+2*t)._round());this._pathViewport=new o.Bounds(n,s)}}),o.Path.SVG_NS="http://www.w3.org/2000/svg",o.Browser.svg=!(!e.createElementNS||!e.createElementNS(o.Path.SVG_NS,"svg").createSVGRect),o.Path=o.Path.extend({statics:{SVG:o.Browser.svg},bringToFront:function(){var t=this._map._pathRoot,e=this._container;return e&&t.lastChild!==e&&t.appendChild(e),this},bringToBack:function(){var t=this._map._pathRoot,e=this._container,i=t.firstChild;return e&&i!==e&&t.insertBefore(e,i),this},getPathString:function(){},_createElement:function(t){return e.createElementNS(o.Path.SVG_NS,t)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this.options.pointerEvents&&this._path.setAttribute("pointer-events",this.options.pointerEvents),this.options.clickable||this.options.pointerEvents||this._path.setAttribute("pointer-events","none"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray")):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var t=this.getPathString();t||(t="M0 0"),this._path.setAttribute("d",t)},_initEvents:function(){if(this.options.clickable){(o.Browser.svg||!o.Browser.vml)&&this._path.setAttribute("class","leaflet-clickable"),o.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var t=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],e=0;e<t.length;e++)o.DomEvent.on(this._container,t[e],this._fireMouseEvent,this)}},_onMouseClick:function(t){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(t)},_fireMouseEvent:function(t){if(this.hasEventListeners(t.type)){var e=this._map,i=e.mouseEventToContainerPoint(t),n=e.containerPointToLayerPoint(i),s=e.layerPointToLatLng(n);this.fire(t.type,{latlng:s,layerPoint:n,containerPoint:i,originalEvent:t}),"contextmenu"===t.type&&o.DomEvent.preventDefault(t),"mousemove"!==t.type&&o.DomEvent.stopPropagation(t)}}}),o.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=o.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&o.Browser.any3d?(this._pathRoot.setAttribute("class"," leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):this._pathRoot.setAttribute("class"," leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(t){var e=this.getZoomScale(t.zoom),i=this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);this._pathRoot.style[o.DomUtil.TRANSFORM]=o.DomUtil.getTranslateString(i)+" scale("+e+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max,n=i.x-e.x,s=i.y-e.y,a=this._pathRoot,r=this._panes.overlayPane;o.Browser.mobileWebkit&&r.removeChild(a),o.DomUtil.setPosition(a,e),a.setAttribute("width",n),a.setAttribute("height",s),a.setAttribute("viewBox",[e.x,e.y,n,s].join(" ")),o.Browser.mobileWebkit&&r.appendChild(a)}}}),o.Path.include({bindPopup:function(t,e){return t instanceof o.Popup?this._popup=t:((!this._popup||e)&&(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(t){return this._popup&&(t=t||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:t})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(t){this._popup.setLatLng(t.latlng),this._map.openPopup(this._popup)}}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.Path=o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?o.Path:o.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(t){return o.setOptions(this,t),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(t){t.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&(this._map.off("click",this._onClick,this),this._map.off("mousemove",this._onMouseMove,this)),this._requestUpdate(),this._map=null},_requestUpdate:function(){this._map&&!o.Path._updateRequest&&(o.Path._updateRequest=o.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){o.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var t=this.options;t.stroke&&(this._ctx.lineWidth=t.weight,this._ctx.strokeStyle=t.color),t.fill&&(this._ctx.fillStyle=t.fillColor||t.color)},_drawPath:function(){var t,e,i,n,s,a;for(this._ctx.beginPath(),t=0,i=this._parts.length;i>t;t++){for(e=0,n=this._parts[t].length;n>e;e++)s=this._parts[t][e],a=(0===e?"move":"line")+"To",this._ctx[a](s.x,s.y);this instanceof o.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var t=this._ctx,e=this.options;this._drawPath(),t.save(),this._updateStyle(),e.fill&&(t.globalAlpha=e.fillOpacity,t.fill()),e.stroke&&(t.globalAlpha=e.opacity,t.stroke()),t.restore()}},_initEvents:function(){this.options.clickable&&(this._map.on("mousemove",this._onMouseMove,this),this._map.on("click",this._onClick,this))},_onClick:function(t){this._containsPoint(t.layerPoint)&&this.fire("click",t)},_onMouseMove:function(t){this._map&&!this._map._animatingZoom&&(this._containsPoint(t.layerPoint)?(this._ctx.canvas.style.cursor="pointer",this._mouseInside=!0,this.fire("mouseover",t)):this._mouseInside&&(this._ctx.canvas.style.cursor="",this._mouseInside=!1,this.fire("mouseout",t)))}}),o.Map.include(o.Path.SVG&&!t.L_PREFER_CANVAS||!o.Browser.canvas?{}:{_initPathRoot:function(){var t,i=this._pathRoot;i||(i=this._pathRoot=e.createElement("canvas"),i.style.position="absolute",t=this._canvasCtx=i.getContext("2d"),t.lineCap="round",t.lineJoin="round",this._panes.overlayPane.appendChild(i),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var t=this._pathViewport,e=t.min,i=t.max.subtract(e),n=this._pathRoot;o.DomUtil.setPosition(n,e),n.width=i.x,n.height=i.y,n.getContext("2d").translate(-e.x,-e.y)}}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n);s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1);var a,r=[];for(a=0;n>a;a++)s[a]&&r.push(t[a]);return r},_simplifyDPStep:function(t,e,i,n,o){var s,a,r,h=0;for(a=n+1;o-1>=a;a++)r=this._sqClosestPointOnSegment(t[a],t[n],t[o],!0),r>h&&(s=a,h=r);h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length;s>n;n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n);return s-1>o&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n){var o,s,a,r=n?this._lastCode:this._getBitCode(t,i),h=this._getBitCode(e,i);for(this._lastCode=h;;){if(!(r|h))return[t,e];if(r&h)return!1;o=r||h,s=this._getEdgeIntersection(t,e,o,i),a=this._getBitCode(s,i),o===r?(t=s,r=a):(e=s,h=a)}},_getEdgeIntersection:function(t,e,i,n){var s=e.x-t.x,a=e.y-t.y,r=n.min,h=n.max;return 8&i?new o.Point(t.x+s*(h.y-t.y)/a,h.y):4&i?new o.Point(t.x+s*(r.y-t.y)/a,r.y):2&i?new o.Point(h.x,t.y+a*(h.x-t.x)/s):1&i?new o.Point(r.x,t.y+a*(r.x-t.x)/s):void 0},_getBitCode:function(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,a=e.x,r=e.y,h=i.x-a,l=i.y-r,u=h*h+l*l;
return u>0&&(s=((t.x-a)*h+(t.y-r)*l)/u,s>1?(a=i.x,r=i.y):s>0&&(a+=h*s,r+=l*s)),h=t.x-a,l=t.y-r,n?h*h+l*l:new o.Point(a,r)}},o.Polyline=o.Path.extend({initialize:function(t,e){o.Path.prototype.initialize.call(this,e),this._latlngs=this._convertLatLngs(t)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var t=0,e=this._latlngs.length;e>t;t++)this._originalPoints[t]=this._map.latLngToLayerPoint(this._latlngs[t])},getPathString:function(){for(var t=0,e=this._parts.length,i="";e>t;t++)i+=this._getPathPartStr(this._parts[t]);return i},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._latlngs=this._convertLatLngs(t),this.redraw()},addLatLng:function(t){return this._latlngs.push(o.latLng(t)),this.redraw()},spliceLatLngs:function(){var t=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs,!0),this.redraw(),t},closestLayerPoint:function(t){for(var e,i,n=1/0,s=this._parts,a=null,r=0,h=s.length;h>r;r++)for(var l=s[r],u=1,c=l.length;c>u;u++){e=l[u-1],i=l[u];var d=o.LineUtil._sqClosestPointOnSegment(t,e,i,!0);n>d&&(n=d,a=o.LineUtil._sqClosestPointOnSegment(t,e,i))}return a&&(a.distance=Math.sqrt(n)),a},getBounds:function(){return new o.LatLngBounds(this.getLatLngs())},_convertLatLngs:function(t,e){var i,n,s=e?t:[];for(i=0,n=t.length;n>i;i++){if(o.Util.isArray(t[i])&&"number"!=typeof t[i][0])return;s[i]=o.latLng(t[i])}return s},_initEvents:function(){o.Path.prototype._initEvents.call(this)},_getPathPartStr:function(t){for(var e,i=o.Path.VML,n=0,s=t.length,a="";s>n;n++)e=t[n],i&&e._round(),a+=(n?"L":"M")+e.x+" "+e.y;return a},_clipPoints:function(){var t,e,i,n=this._originalPoints,s=n.length;if(this.options.noClip)return this._parts=[n],void 0;this._parts=[];var a=this._parts,r=this._map._pathViewport,h=o.LineUtil;for(t=0,e=0;s-1>t;t++)i=h.clipSegment(n[t],n[t+1],r,t),i&&(a[e]=a[e]||[],a[e].push(i[0]),(i[1]!==n[t+1]||t===s-2)&&(a[e].push(i[1]),e++))},_simplifyPoints:function(){for(var t=this._parts,e=o.LineUtil,i=0,n=t.length;n>i;i++)t[i]=e.simplify(t[i],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),o.Path.prototype._updatePath.call(this))}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e){var i,n,s,a,r,h,l,u,c,d=[1,4,2,8],p=o.LineUtil;for(n=0,l=t.length;l>n;n++)t[n]._code=p._getBitCode(t[n],e);for(a=0;4>a;a++){for(u=d[a],i=[],n=0,l=t.length,s=l-1;l>n;s=n++)r=t[n],h=t[s],r._code&u?h._code&u||(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)):(h._code&u&&(c=p._getEdgeIntersection(h,r,u,e),c._code=p._getBitCode(c,e),i.push(c)),i.push(r));t=i}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},initialize:function(t,e){var i,n,s;if(o.Polyline.prototype.initialize.call(this,t,e),t&&o.Util.isArray(t[0])&&"number"!=typeof t[0][0])for(this._latlngs=this._convertLatLngs(t[0]),this._holes=t.slice(1),i=0,n=this._holes.length;n>i;i++)s=this._holes[i]=this._convertLatLngs(this._holes[i]),s[0].equals(s[s.length-1])&&s.pop();t=this._latlngs,t.length>=2&&t[0].equals(t[t.length-1])&&t.pop()},projectLatlngs:function(){if(o.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var t,e,i,n;for(t=0,i=this._holes.length;i>t;t++)for(this._holePoints[t]=[],e=0,n=this._holes[t].length;n>e;e++)this._holePoints[t][e]=this._map.latLngToLayerPoint(this._holes[t][e])}},_clipPoints:function(){var t=this._originalPoints,e=[];if(this._parts=[t].concat(this._holePoints),!this.options.noClip){for(var i=0,n=this._parts.length;n>i;i++){var s=o.PolyUtil.clipPolygon(this._parts[i],this._map._pathViewport);s.length&&e.push(s)}this._parts=e}},_getPathPartStr:function(t){var e=o.Polyline.prototype._getPathPartStr.call(this,t);return e+(o.Browser.svg?"z":"x")}}),o.polygon=function(t,e){return new o.Polygon(t,e)},function(){function t(t){return o.FeatureGroup.extend({initialize:function(t,e){this._layers={},this._options=e,this.setLatLngs(t)},setLatLngs:function(e){var i=0,n=e.length;for(this.eachLayer(function(t){n>i?t.setLatLngs(e[i++]):this.removeLayer(t)},this);n>i;)this.addLayer(new t(e[i++],this._options));return this},getLatLngs:function(){var t=[];return this.eachLayer(function(e){t.push(e.getLatLngs())}),t}})}o.MultiPolyline=t(o.Polyline),o.MultiPolygon=t(o.Polygon),o.multiPolyline=function(t,e){return new o.MultiPolyline(t,e)},o.multiPolygon=function(t,e){return new o.MultiPolygon(t,e)}}(),o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.Circle=o.Path.extend({initialize:function(t,e,i){o.Path.prototype.initialize.call(this,i),this._latlng=o.latLng(t),this._mRadius=e},options:{fill:!0},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw()},setRadius:function(t){return this._mRadius=t,this.redraw()},projectLatlngs:function(){var t=this._getLngRadius(),e=this._latlng,i=this._map.latLngToLayerPoint([e.lat,e.lng-t]);this._point=this._map.latLngToLayerPoint(e),this._radius=Math.max(this._point.x-i.x,1)},getBounds:function(){var t=this._getLngRadius(),e=360*(this._mRadius/40075017),i=this._latlng;return new o.LatLngBounds([i.lat-e,i.lng-t],[i.lat+e,i.lng+t])},getLatLng:function(){return this._latlng},getPathString:function(){var t=this._point,e=this._radius;return this._checkIfEmpty()?"":o.Browser.svg?"M"+t.x+","+(t.y-e)+"A"+e+","+e+",0,1,1,"+(t.x-.1)+","+(t.y-e)+" z":(t._round(),e=Math.round(e),"AL "+t.x+","+t.y+" "+e+","+e+" 0,"+23592600)},getRadius:function(){return this._mRadius},_getLatRadius:function(){return 360*(this._mRadius/40075017)},_getLngRadius:function(){return this._getLatRadius()/Math.cos(o.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var t=this._map._pathViewport,e=this._radius,i=this._point;return i.x-e>t.max.x||i.y-e>t.max.y||i.x+e<t.min.x||i.y+e<t.min.y}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.CircleMarker=o.Circle.extend({options:{radius:10,weight:2},initialize:function(t,e){o.Circle.prototype.initialize.call(this,t,null,e),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){o.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Polyline.include(o.Path.CANVAS?{_containsPoint:function(t,e){var i,n,s,a,r,h,l,u=this.options.weight/2;for(o.Browser.touch&&(u+=10),i=0,a=this._parts.length;a>i;i++)for(l=this._parts[i],n=0,r=l.length,s=r-1;r>n;s=n++)if((e||0!==n)&&(h=o.LineUtil.pointToSegmentDistance(t,l[s],l[n]),u>=h))return!0;return!1}}:{}),o.Polygon.include(o.Path.CANVAS?{_containsPoint:function(t){var e,i,n,s,a,r,h,l,u=!1;if(o.Polyline.prototype._containsPoint.call(this,t,!0))return!0;for(s=0,h=this._parts.length;h>s;s++)for(e=this._parts[s],a=0,l=e.length,r=l-1;l>a;r=a++)i=e[a],n=e[r],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u);return u}}:{}),o.Circle.include(o.Path.CANVAS?{_drawPath:function(){var t=this._point;this._ctx.beginPath(),this._ctx.arc(t.x,t.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(t){var e=this._point,i=this.options.stroke?this.options.weight/2:0;return t.distanceTo(e)<=this._radius+i}}:{}),o.CircleMarker.include(o.Path.CANVAS?{_updateStyle:function(){o.Path.prototype._updateStyle.call(this)}}:{}),o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features;if(s){for(e=0,i=s.length;i>e;e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(s[e]);return this}var a=this.options;if(!a.filter||a.filter(t)){var r=o.GeoJSON.geometryToLayer(t,a.pointToLayer,a.coordsToLatLng);return r.feature=o.GeoJSON.asFeature(t),r.defaultOptions=r.options,this.resetStyle(r),a.onEachFeature&&a.onEachFeature(t,r),this.addLayer(r)}},resetStyle:function(t){var e=this.options.style;e&&(o.Util.extend(t.options,t.defaultOptions),this._setLayerStyle(t,e))},setStyle:function(t){this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e,i){var n,s,a,r,h,l="Feature"===t.type?t.geometry:t,u=l.coordinates,c=[];switch(i=i||this.coordsToLatLng,l.type){case"Point":return n=i(u),e?e(t,n):new o.Marker(n);case"MultiPoint":for(a=0,r=u.length;r>a;a++)n=i(u[a]),h=e?e(t,n):new o.Marker(n),c.push(h);return new o.FeatureGroup(c);case"LineString":return s=this.coordsToLatLngs(u,0,i),new o.Polyline(s);case"Polygon":return s=this.coordsToLatLngs(u,1,i),new o.Polygon(s);case"MultiLineString":return s=this.coordsToLatLngs(u,1,i),new o.MultiPolyline(s);case"MultiPolygon":return s=this.coordsToLatLngs(u,2,i),new o.MultiPolygon(s);case"GeometryCollection":for(a=0,r=l.geometries.length;r>a;a++)h=this.geometryToLayer({geometry:l.geometries[a],type:"Feature",properties:t.properties},e,i),c.push(h);return new o.FeatureGroup(c);default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0])},coordsToLatLngs:function(t,e,i){var n,o,s,a=[];for(o=0,s=t.length;s>o;o++)n=e?this.coordsToLatLngs(t[o],e-1,i):(i||this.coordsToLatLng)(t[o]),a.push(n);return a},latLngToCoords:function(t){return[t.lng,t.lat]},latLngsToCoords:function(t){for(var e=[],i=0,n=t.length;n>i;i++)e.push(o.GeoJSON.latLngToCoords(t[i]));return e},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}});var a={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}};o.Marker.include(a),o.Circle.include(a),o.CircleMarker.include(a),o.Polyline.include({toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"LineString",coordinates:o.GeoJSON.latLngsToCoords(this.getLatLngs())})}}),o.Polygon.include({toGeoJSON:function(){var t,e,i,n=[o.GeoJSON.latLngsToCoords(this.getLatLngs())];if(n[0].push(n[0][0]),this._holes)for(t=0,e=this._holes.length;e>t;t++)i=o.GeoJSON.latLngsToCoords(this._holes[t]),i.push(i[0]),n.push(i);return o.GeoJSON.getFeature(this,{type:"Polygon",coordinates:n})}}),function(){function t(t,e){t.include({toGeoJSON:function(){var t=[];return this.eachLayer(function(e){t.push(e.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:e,coordinates:t})}})}t(o.MultiPolyline,"MultiLineString"),t(o.MultiPolygon,"MultiPolygon")}(),o.LayerGroup.include({toGeoJSON:function(){var t=[];return this.eachLayer(function(e){e.toGeoJSON&&t.push(o.GeoJSON.asFeature(e.toGeoJSON()))}),{type:"FeatureCollection",features:t}}}),o.geoJson=function(t,e){return new o.GeoJSON(t,e)},o.DomEvent={addListener:function(t,e,i,n){var s,a,r,h=o.stamp(i),l="_leaflet_"+e+h;return t[l]?this:(s=function(e){return i.call(n||t,e||o.DomEvent._getEvent())},o.Browser.msTouch&&0===e.indexOf("touch")?this.addMsTouchListener(t,e,s,h):(o.Browser.touch&&"dblclick"===e&&this.addDoubleTapListener&&this.addDoubleTapListener(t,s,h),"addEventListener"in t?"mousewheel"===e?(t.addEventListener("DOMMouseScroll",s,!1),t.addEventListener(e,s,!1)):"mouseenter"===e||"mouseleave"===e?(a=s,r="mouseenter"===e?"mouseover":"mouseout",s=function(e){return o.DomEvent._checkMouse(t,e)?a(e):void 0},t.addEventListener(r,s,!1)):"click"===e&&o.Browser.android?(a=s,s=function(t){return o.DomEvent._filterClick(t,a)},t.addEventListener(e,s,!1)):t.addEventListener(e,s,!1):"attachEvent"in t&&t.attachEvent("on"+e,s),t[l]=s,this))},removeListener:function(t,e,i){var n=o.stamp(i),s="_leaflet_"+e+n,a=t[s];return a?(o.Browser.msTouch&&0===e.indexOf("touch")?this.removeMsTouchListener(t,e,n):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,n):"removeEventListener"in t?"mousewheel"===e?(t.removeEventListener("DOMMouseScroll",a,!1),t.removeEventListener(e,a,!1)):"mouseenter"===e||"mouseleave"===e?t.removeEventListener("mouseenter"===e?"mouseover":"mouseout",a,!1):t.removeEventListener(e,a,!1):"detachEvent"in t&&t.detachEvent("on"+e,a),t[s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,this},disableClickPropagation:function(t){for(var e=o.DomEvent.stopPropagation,i=o.Draggable.START.length-1;i>=0;i--)o.DomEvent.addListener(t,o.Draggable.START[i],e);return o.DomEvent.addListener(t,"click",o.DomEvent._fakeStop).addListener(t,"dblclick",e)},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,i){var n=o.Browser.ie7,s=e.body,a=e.documentElement,r=t.pageX?t.pageX-s.scrollLeft-a.scrollLeft:t.clientX,h=t.pageY?t.pageY-s.scrollTop-a.scrollTop:t.clientY,l=new o.Point(r,h),u=i.getBoundingClientRect(),c=u.left-i.clientLeft,d=u.top-i.clientTop;return o.DomUtil.documentIsLtr()||!o.Browser.webkit&&!n||(c+=i.scrollWidth-i.clientWidth,n&&"hidden"!==o.DomUtil.getStyle(i,"overflow-y")&&"hidden"!==o.DomUtil.getStyle(i,"overflow")&&(c+=17)),l._subtract(new o.Point(c,d))},getWheelDelta:function(t){var e=0;return t.wheelDelta&&(e=t.wheelDelta/120),t.detail&&(e=-t.detail/3),e},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type];return this._skipEvents[t.type]=!1,e},_checkMouse:function(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch(n){return!1}return i!==t},_getEvent:function(){var e=t.event;if(!e)for(var i=arguments.callee.caller;i&&(e=i.arguments[0],!e||t.Event!==e.constructor);)i=i.caller;return e},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick;return n&&n>100&&1e3>n||t.target._simulatedClick&&!t._simulated?(o.DomEvent.stop(t),void 0):(o.DomEvent._lastClick=i,e(t))}},o.DomEvent.on=o.DomEvent.addListener,o.DomEvent.off=o.DomEvent.removeListener,o.Draggable=o.Class.extend({includes:o.Mixin.Events,statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e){this._element=t,this._dragStartTarget=e||t},enable:function(){if(!this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.on(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var t=o.Draggable.START.length-1;t>=0;t--)o.DomEvent.off(this._dragStartTarget,o.Draggable.START[t],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(t){if(!t.shiftKey&&(1===t.which||1===t.button||t.touches)&&(o.DomEvent.stopPropagation(t),!o.Draggable._disabled)){o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection();var i=t.touches?t.touches[0]:t,n=i.target;o.Browser.touch&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._moved=!1,this._moving||(this._startPoint=new o.Point(i.clientX,i.clientY),this._startPos=this._newPos=o.DomUtil.getPosition(this._element),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this))}},_onMove:function(t){if(!(t.touches&&t.touches.length>1)){var i=t.touches&&1===t.touches.length?t.touches[0]:t,n=new o.Point(i.clientX,i.clientY),s=n.subtract(this._startPoint);(s.x||s.y)&&(o.DomEvent.preventDefault(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(s),o.Browser.touch||o.DomUtil.addClass(e.body,"leaflet-dragging")),this._newPos=this._startPos.add(s),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget))}},_updatePosition:function(){this.fire("predrag"),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(){o.Browser.touch||o.DomUtil.removeClass(e.body,"leaflet-dragging");for(var t in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[t],this._onMove).off(e,o.Draggable.END[t],this._onUp);o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend")),this._moving=!1}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:o.Browser.touch?32:18,easeLinearity:.25,worldCopyJump:!1}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),t.on("viewreset",this._onViewReset,this),this._onViewReset())}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var t=this._map;t._panAnim&&t._panAnim.stop(),t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var t=this._lastTime=+new Date,e=this._lastPos=this._draggable._newPos;this._positions.push(e),this._times.push(t),t-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var t=this._map.getSize()._divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.project([0,180]).x},_onPreDrag:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,a=Math.abs(o+i)<Math.abs(s+i)?o:s;this._draggable._newPos.x=a},_onDragEnd:function(){var t=this._map,e=t.options,i=+new Date-this._lastTime,n=!e.inertia||i>e.inertiaThreshold||!this._positions[0];if(t.fire("dragend"),n)t.fire("moveend");else{var s=this._lastPos.subtract(this._positions[0]),a=(this._lastTime+i-this._times[0])/1e3,r=e.easeLinearity,h=s.multiplyBy(r/a),l=h.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,l),c=h.multiplyBy(u/l),d=u/(e.inertiaDeceleration*r),p=c.multiplyBy(-d/2).round();p.x&&p.y?o.Util.requestAnimFrame(function(){t.panBy(p,{duration:d,easeLinearity:r,noMoveStart:!0})}):t.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick)},_onDoubleClick:function(t){this.setZoomAround(t.containerPoint,this._zoom+1)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),o.DomEvent.on(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll),o.DomEvent.off(this._map._container,"MozMousePixelScroll",o.DomEvent.preventDefault)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t);this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var i=Math.max(40-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),i),o.DomEvent.preventDefault(t),o.DomEvent.stopPropagation(t)},_performZoom:function(){var t=this._map,e=this._delta,i=t.getZoom();e=e>0?Math.ceil(e):Math.floor(e),e=Math.max(Math.min(e,4),-4),e=t._limitZoom(i+e)-i,this._delta=0,this._startTime=null,e&&t.setZoomAround(this._lastMousePos,i+e)}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msTouch?"MSPointerDown":"touchstart",_touchend:o.Browser.msTouch?"MSPointerUp":"touchend",addDoubleTapListener:function(t,i,n){function s(t){var e;if(o.Browser.msTouch?(_.push(t.pointerId),e=_.length):e=t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i);h=t.touches?t.touches[0]:t,l=n>0&&u>=n,r=i}}function a(t){if(o.Browser.msTouch){var e=_.indexOf(t.pointerId);if(-1===e)return;_.splice(e,1)}if(l){if(o.Browser.msTouch){var n,s={};for(var a in h)n=h[a],s[a]="function"==typeof n?n.bind(h):n;h=s}h.type="dblclick",i(h),r=null}}var r,h,l=!1,u=250,c="_leaflet_",d=this._touchstart,p=this._touchend,_=[];t[c+d+n]=s,t[c+p+n]=a;var m=o.Browser.msTouch?e.documentElement:t;return t.addEventListener(d,s,!1),m.addEventListener(p,a,!1),o.Browser.msTouch&&m.addEventListener("MSPointerCancel",a,!1),this},removeDoubleTapListener:function(t,i){var n="_leaflet_";return t.removeEventListener(this._touchstart,t[n+this._touchstart+i],!1),(o.Browser.msTouch?e.documentElement:t).removeEventListener(this._touchend,t[n+this._touchend+i],!1),o.Browser.msTouch&&e.documentElement.removeEventListener("MSPointerCancel",t[n+this._touchend+i],!1),this}}),o.extend(o.DomEvent,{_msTouches:[],_msDocumentListener:!1,addMsTouchListener:function(t,e,i,n){switch(e){case"touchstart":return this.addMsTouchListenerStart(t,e,i,n);case"touchend":return this.addMsTouchListenerEnd(t,e,i,n);case"touchmove":return this.addMsTouchListenerMove(t,e,i,n);default:throw"Unknown touch event type"}},addMsTouchListenerStart:function(t,i,n,o){var s="_leaflet_",a=this._msTouches,r=function(t){for(var e=!1,i=0;i<a.length;i++)if(a[i].pointerId===t.pointerId){e=!0;break}e||a.push(t),t.touches=a.slice(),t.changedTouches=[t],n(t)};if(t[s+"touchstart"+o]=r,t.addEventListener("MSPointerDown",r,!1),!this._msDocumentListener){var h=function(t){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a.splice(e,1);break}};e.documentElement.addEventListener("MSPointerUp",h,!1),e.documentElement.addEventListener("MSPointerCancel",h,!1),this._msDocumentListener=!0}return this},addMsTouchListenerMove:function(t,e,i,n){function o(t){if(t.pointerType!==t.MSPOINTER_TYPE_MOUSE||0!==t.buttons){for(var e=0;e<a.length;e++)if(a[e].pointerId===t.pointerId){a[e]=t;break}t.touches=a.slice(),t.changedTouches=[t],i(t)}}var s="_leaflet_",a=this._msTouches;return t[s+"touchmove"+n]=o,t.addEventListener("MSPointerMove",o,!1),this},addMsTouchListenerEnd:function(t,e,i,n){var o="_leaflet_",s=this._msTouches,a=function(t){for(var e=0;e<s.length;e++)if(s[e].pointerId===t.pointerId){s.splice(e,1);break}t.touches=s.slice(),t.changedTouches=[t],i(t)};return t[o+"touchend"+n]=a,t.addEventListener("MSPointerUp",a,!1),t.addEventListener("MSPointerCancel",a,!1),this},removeMsTouchListener:function(t,e,i){var n="_leaflet_",o=t[n+e+i];switch(e){case"touchstart":t.removeEventListener("MSPointerDown",o,!1);break;case"touchmove":t.removeEventListener("MSPointerMove",o,!1);break;case"touchend":t.removeEventListener("MSPointerUp",o,!1),t.removeEventListener("MSPointerCancel",o,!1)}return this}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToLayerPoint(t.touches[0]),s=i.mouseEventToLayerPoint(t.touches[1]),a=i._getCenterLayerPoint();this._startCenter=n.add(s)._divideBy(2),this._startDist=n.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=a.subtract(this._startCenter),i._panAnim&&i._panAnim.stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){var e=this._map;if(t.touches&&2===t.touches.length&&this._zooming){var i=e.mouseEventToLayerPoint(t.touches[0]),n=e.mouseEventToLayerPoint(t.touches[1]);this._scale=i.distanceTo(n)/this._startDist,this._delta=i._add(n)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(this._moved||(o.DomUtil.addClass(e._mapPane,"leaflet-touching"),e.fire("movestart").fire("zoomstart"),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest),this._animRequest=o.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),o.DomEvent.preventDefault(t))}},_updateOnMove:function(){var t=this._map,e=this._getScaleOrigin(),i=t.layerPointToLatLng(e),n=t.getScaleZoom(this._scale);t._animateZoom(i,n,this._startCenter,this._scale,this._delta)},_onTouchEnd:function(){if(!this._moved||!this._zooming)return this._zooming=!1,void 0;var t=this._map;this._zooming=!1,o.DomUtil.removeClass(t._mapPane,"leaflet-touching"),o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd);var i=this._getScaleOrigin(),n=t.layerPointToLatLng(i),s=t.getZoom(),a=t.getScaleZoom(this._scale)-s,r=a>0?Math.ceil(a):Math.floor(a),h=t._limitZoom(s+r),l=t.getZoomScale(h)/this._scale;t._animateZoom(n,h,i,l)},_getScaleOrigin:function(){var t=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(t)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,clearTimeout(this._holdTimeout),void 0;var i=t.touches[0],n=i.target;this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),o.DomEvent.on(e,"touchmove",this._onMove,this).on(e,"touchend",this._onUp,this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,"touchmove",this._onMove,this).off(e,"touchend",this._onUp,this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target;"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0];this._newPos=new o.Point(e.clientX,e.clientY)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents");o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.msTouch&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown)},_onMouseDown:function(t){return!t.shiftKey||1!==t.which&&1!==t.button?!1:(o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startLayerPoint=this._map.mouseEventToLayerPoint(t),this._box=o.DomUtil.create("div","leaflet-zoom-box",this._pane),o.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",o.DomEvent.on(e,"mousemove",this._onMouseMove,this).on(e,"mouseup",this._onMouseUp,this).on(e,"keydown",this._onKeyDown,this),this._map.fire("boxzoomstart"),void 0)},_onMouseMove:function(t){var e=this._startLayerPoint,i=this._box,n=this._map.mouseEventToLayerPoint(t),s=n.subtract(e),a=new o.Point(Math.min(n.x,e.x),Math.min(n.y,e.y));o.DomUtil.setPosition(i,a),i.style.width=Math.max(0,Math.abs(s.x)-4)+"px",i.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_finish:function(){this._pane.removeChild(this._box),this._container.style.cursor="",o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,"mousemove",this._onMouseMove).off(e,"mouseup",this._onMouseUp).off(e,"keydown",this._onKeyDown)},_onMouseUp:function(t){this._finish();var e=this._map,i=e.mouseEventToLayerPoint(t);if(!this._startLayerPoint.equals(i)){var n=new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint),e.layerPointToLatLng(i));e.fitBounds(n),e.fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61],zoomOut:[189,109,173]},initialize:function(t){this._map=t,this._setPanOffset(t.options.keyboardPanOffset),this._setZoomOffset(t.options.keyboardZoomOffset)},addHooks:function(){var t=this._map._container;-1===t.tabIndex&&(t.tabIndex="0"),o.DomEvent.on(t,"focus",this._onFocus,this).on(t,"blur",this._onBlur,this).on(t,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var t=this._map._container;o.DomEvent.off(t,"focus",this._onFocus,this).off(t,"blur",this._onBlur,this).off(t,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollTop||n.scrollLeft;this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(t){var e,i,n=this._panKeys={},o=this.keyCodes;for(e=0,i=o.left.length;i>e;e++)n[o.left[e]]=[-1*t,0];for(e=0,i=o.right.length;i>e;e++)n[o.right[e]]=[t,0];for(e=0,i=o.down.length;i>e;e++)n[o.down[e]]=[0,t];for(e=0,i=o.up.length;i>e;e++)n[o.up[e]]=[0,-1*t]},_setZoomOffset:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes;for(e=0,i=o.zoomIn.length;i>e;e++)n[o.zoomIn[e]]=t;for(e=0,i=o.zoomOut.length;i>e;e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){var e=t.keyCode,i=this._map;if(e in this._panKeys){if(i._panAnim&&i._panAnim._inProgress)return;i.panBy(this._panKeys[e]),i.options.maxBounds&&i.panInsideBounds(i.options.maxBounds)}else{if(!(e in this._zoomKeys))return;i.setZoom(i.getZoom()+this._zoomKeys[e])}o.DomEvent.stop(t)}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new o.Draggable(t,t)),this._draggable.on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this),this._draggable.enable()
},removeHooks:function(){this._draggable.off("dragstart",this._onDragStart,this).off("drag",this._onDrag,this).off("dragend",this._onDragEnd,this),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var t=this._marker,e=t._shadow,i=o.DomUtil.getPosition(t._icon),n=t._map.layerPointToLatLng(i);e&&o.DomUtil.setPosition(e,i),t._latlng=n,t.fire("move",{latlng:n}).fire("drag")},_onDragEnd:function(){this._marker.fire("moveend").fire("dragend")}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i];return o.DomUtil.addClass(e,"leaflet-control"),-1!==i.indexOf("bottom")?n.insertBefore(e,n.firstChild):n.appendChild(e),this},removeFrom:function(t){var e=this.getPosition(),i=t._controlCorners[e];return i.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(t),this}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.removeFrom(this),this},_initControlPos:function(){function t(t,s){var a=i+t+" "+i+s;e[t+s]=o.DomUtil.create("div",a,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){this._container.removeChild(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar");return this._map=t,this._zoomInButton=this._createButton("+","Zoom in",e+"-in",i,this._zoomIn,this),this._zoomOutButton=this._createButton("-","Zoom out",e+"-out",i,this._zoomOut,this),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},_zoomIn:function(t){this._map.zoomIn(t.shiftKey?3:1)},_zoomOut:function(t){this._map.zoomOut(t.shiftKey?3:1)},_createButton:function(t,e,i,n,s,a){var r=o.DomUtil.create("a",i,n);r.innerHTML=t,r.href="#",r.title=e;var h=o.DomEvent.stopPropagation;return o.DomEvent.on(r,"click",h).on(r,"mousedown",h).on(r,"dblclick",h).on(r,"click",o.DomEvent.preventDefault).on(r,"click",s,a),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),t._zoom===t.getMinZoom()&&o.DomUtil.addClass(this._zoomOutButton,e),t._zoom===t.getMaxZoom()&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){return this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent.disableClickPropagation(this._container),t.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(t){t.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):void 0},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):void 0},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}},_onLayerAdd:function(t){t.layer.getAttribution&&this.addAttribution(t.layer.getAttribution())},_onLayerRemove:function(t){t.layer.getAttribution&&this.removeAttribution(t.layer.getAttribution())}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new o.Control.Attribution).addTo(this))}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(t){this._map=t;var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options;return this._addScales(n,e,i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e+"-line",i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e+"-line",i))},_update:function(){var t=this._map.getBounds(),e=t.getCenter().lat,i=6378137*Math.PI*Math.cos(e*Math.PI/180),n=i*(t.getNorthEast().lng-t.getSouthWest().lng)/180,o=this._map.getSize(),s=this.options,a=0;o.x>0&&(a=n*(s.maxWidth/o.x)),this._updateScales(s,a)},_updateScales:function(t,e){t.metric&&e&&this._updateMetric(e),t.imperial&&e&&this._updateImperial(e)},_updateMetric:function(t){var e=this._getRoundNum(t);this._mScale.style.width=this._getScaleWidth(e/t)+"px",this._mScale.innerHTML=1e3>e?e+" m":e/1e3+" km"},_updateImperial:function(t){var e,i,n,o=3.2808399*t,s=this._iScale;o>5280?(e=o/5280,i=this._getRoundNum(e),s.style.width=this._getScaleWidth(i/e)+"px",s.innerHTML=i+" mi"):(n=this._getRoundNum(o),s.style.width=this._getScaleWidth(n/o)+"px",s.innerHTML=n+" ft")},_getScaleWidth:function(t){return Math.round(this.options.maxWidth*t)-10},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(t,e,i){o.setOptions(this,i),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),t.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(t){t.off("layeradd",this._onLayerChange).off("layerremove",this._onLayerChange)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._update(),this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._update(),this},removeLayer:function(t){var e=o.stamp(t);return delete this._layers[e],this._update(),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t);e.setAttribute("aria-haspopup",!0),o.Browser.touch?o.DomEvent.on(e,"click",o.DomEvent.stopPropagation):(o.DomEvent.disableClickPropagation(e),o.DomEvent.on(e,"mousewheel",o.DomEvent.stopPropagation));var i=this._form=o.DomUtil.create("form",t+"-list");if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,"mouseover",this._expand,this).on(e,"mouseout",this._collapse,this);var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e);n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this._expand,this):o.DomEvent.on(n,"focus",this._expand,this),this._map.on("click",this._collapse,this)}else this._expand();this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_addLayer:function(t,e,i){var n=o.stamp(t);this._layers[n]={layer:t,name:e,overlay:i},this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var t,e,i=!1,n=!1;for(t in this._layers)e=this._layers[t],this._addItem(e),n=n||e.overlay,i=i||!e.overlay;this._separator.style.display=n&&i?"":"none"}},_onLayerChange:function(t){var e=this._layers[o.stamp(t.layer)];if(e){this._handlingClick||this._update();var i=e.overlay?"layeradd"===t.type?"overlayadd":"overlayremove":"layeradd"===t.type?"baselayerchange":null;i&&this._map.fire(i,e)}},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"';i&&(n+=' checked="checked"'),n+="/>";var o=e.createElement("div");return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer);t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this);var a=e.createElement("span");a.innerHTML=" "+t.name,n.appendChild(i),n.appendChild(a);var r=t.overlay?this._overlaysList:this._baseLayersList;return r.appendChild(n),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=n.length;for(this._handlingClick=!0,t=0;o>t;t++)e=n[t],i=this._layers[e.layerId],e.checked&&!this._map.hasLayer(i.layer)?this._map.addLayer(i.layer):!e.checked&&this._map.hasLayer(i.layer)&&this._map.removeLayer(i.layer);this._handlingClick=!1},_expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Class.extend({includes:o.Mixin.Events,run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._newPos=e,this.fire("start"),t.style[o.DomUtil.TRANSITION]="all "+(i||.25)+"s cubic-bezier(0,0,"+(n||.5)+",1)",o.DomEvent.on(t,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),o.DomUtil.setPosition(t,e),o.Util.falseFn(t.offsetWidth),this._stepTimer=setInterval(o.bind(this._onStep,this),50)},stop:function(){this._inProgress&&(o.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),o.Util.falseFn(this._el.offsetWidth))},_onStep:function(){var t=this._getPos();return t?(this._el._leaflet_pos=t,this.fire("step"),void 0):(this._onTransitionEnd(),void 0)},_transformRe:/([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,_getPos:function(){var e,i,n,s=this._el,a=t.getComputedStyle(s);if(o.Browser.any3d){if(n=a[o.DomUtil.TRANSFORM].match(this._transformRe),!n)return;e=parseFloat(n[1]),i=parseFloat(n[2])}else e=parseFloat(a.left),i=parseFloat(a.top);return new o.Point(e,i,!0)},_onTransitionEnd:function(){o.DomEvent.off(this._el,o.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[o.DomUtil.TRANSITION]="",this._el._leaflet_pos=this._newPos,clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),o.Map.include({setView:function(t,e,n){if(e=this._limitZoom(e),t=o.latLng(t),n=n||{},this._panAnim&&this._panAnim.stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate},n.pan));var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan);if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this;if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t);this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor();return(e&&e.animate)===!0||this.getSize().contains(i)?(this.panBy(i,e),!0):!1}}),o.PosAnimation=o.DomUtil.TRANSITION?o.PosAnimation:o.PosAnimation.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var t=+new Date-this._startTime,e=1e3*this._duration;e>t?this._runFrame(this._easeOut(t/e)):(this._runFrame(1),this._complete())},_runFrame:function(t){var e=this._startPos.add(this._offset.multiplyBy(t));o.DomUtil.setPosition(this._el,e),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4}),o.DomUtil.TRANSITION&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation&&o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.android23&&!o.Browser.mobileOpera,this._zoomAnimated&&o.DomEvent.on(this._mapPane,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),o.Map.include(o.DomUtil.TRANSITION?{_catchTransitionEnd:function(){this._animatingZoom&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(e),o=this._getCenterOffset(t)._divideBy(1-1/n),s=this._getCenterLayerPoint()._add(o);return i.animate===!0||this.getSize().contains(o)?(this.fire("movestart").fire("zoomstart"),this._animateZoom(t,e,s,n,null,!0),!0):!1},_animateZoom:function(t,e,i,n,s,a){this._animatingZoom=!0,o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this._animateToCenter=t,this._animateToZoom=e,o.Draggable&&(o.Draggable._disabled=!0),this.fire("zoomanim",{center:t,zoom:e,origin:i,scale:n,delta:s,backwards:a})},_onZoomTransitionEnd:function(){this._animatingZoom=!1,o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),o.Draggable&&(o.Draggable._disabled=!1)}}:{}),o.TileLayer.include({_animateZoom:function(t){this._animating||(this._animating=!0,this._prepareBgBuffer());var e=this._bgBuffer,i=o.DomUtil.TRANSFORM,n=t.delta?o.DomUtil.getTranslateString(t.delta):e.style[i],s=o.DomUtil.getScaleString(t.scale,t.origin);e.style[i]=t.backwards?s+" "+n:n+" "+s},_endZoomAnim:function(){var t=this._tileContainer,e=this._bgBuffer;t.style.visibility="",t.parentNode.appendChild(t),o.Util.falseFn(e.offsetWidth),this._animating=!1},_clearBgBuffer:function(){var t=this._map;!t||t._animatingZoom||t.touchZoom._zooming||(this._bgBuffer.innerHTML="",this._bgBuffer.style[o.DomUtil.TRANSFORM]="")},_prepareBgBuffer:function(){var t=this._tileContainer,e=this._bgBuffer,i=this._getLoadedTilesPercentage(e),n=this._getLoadedTilesPercentage(t);return e&&i>.5&&.5>n?(t.style.visibility="hidden",this._stopLoadingImages(t),void 0):(e.style.visibility="hidden",e.style[o.DomUtil.TRANSFORM]="",this._tileContainer=e,e=this._bgBuffer=t,this._stopLoadingImages(e),clearTimeout(this._clearBgBufferTimer),void 0)},_getLoadedTilesPercentage:function(t){var e,i,n=t.getElementsByTagName("img"),o=0;for(e=0,i=n.length;i>e;e++)n[e].complete&&o++;return o/i},_stopLoadingImages:function(t){var e,i,n,s=Array.prototype.slice.call(t.getElementsByTagName("img"));for(e=0,i=s.length;i>e;e++)n=s[e],n.complete||(n.onload=o.Util.falseFn,n.onerror=o.Util.falseFn,n.src=o.Util.emptyImageUrl,n.parentNode.removeChild(n))}}),o.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(t){if(t=this._locateOptions=o.extend(this._defaultLocateOptions,t),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=180*t.coords.accuracy/40075017,a=s/Math.cos(o.LatLng.DEG_TO_RAD*e),r=o.latLngBounds([e-s,i-a],[e+s,i+a]),h=this._locateOptions;if(h.setView){var l=Math.min(this.getBoundsZoom(r),h.maxZoom);this.setView(n,l)}var u={latlng:n,bounds:r};for(var c in t.coords)"number"==typeof t.coords[c]&&(u[c]=t.coords[c]);this.fire("locationfound",u)}})}(window,document);/* wax - 7.0.0dev10 - v6.0.4-148-gcfdd624 */


!function (name, context, definition) {
  //if (typeof module !== 'undefined') module.exports = definition(name, context);
  //else if (typeof define === 'function' && typeof define.amd  === 'object') define(definition);
  //else context[name] = definition(name, context);
  context[name] = definition(name, context);
}('bean', this, function (name, context) {
  var win = window
    , old = context[name]
    , overOut = /over|out/
    , namespaceRegex = /[^\.]*(?=\..*)\.|.*/
    , nameRegex = /\..*/
    , addEvent = 'addEventListener'
    , attachEvent = 'attachEvent'
    , removeEvent = 'removeEventListener'
    , detachEvent = 'detachEvent'
    , doc = document || {}
    , root = doc.documentElement || {}
    , W3C_MODEL = root[addEvent]
    , eventSupport = W3C_MODEL ? addEvent : attachEvent
    , slice = Array.prototype.slice
    , mouseTypeRegex = /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i
    , mouseWheelTypeRegex = /mouse.*(wheel|scroll)/i
    , textTypeRegex = /^text/i
    , touchTypeRegex = /^touch|^gesture/i
    , ONE = { one: 1 } // singleton for quick matching making add() do one()

    , nativeEvents = (function (hash, events, i) {
        for (i = 0; i < events.length; i++)
          hash[events[i]] = 1
        return hash
      })({}, (
          'click dblclick mouseup mousedown contextmenu ' +                  // mouse buttons
          'mousewheel mousemultiwheel DOMMouseScroll ' +                     // mouse wheel
          'mouseover mouseout mousemove selectstart selectend ' +            // mouse movement
          'keydown keypress keyup ' +                                        // keyboard
          'orientationchange ' +                                             // mobile
          'focus blur change reset select submit ' +                         // form elements
          'load unload beforeunload resize move DOMContentLoaded readystatechange ' + // window
          'error abort scroll ' +                                            // misc
          (W3C_MODEL ? // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
                       // that doesn't actually exist, so make sure we only do these on newer browsers
            'show ' +                                                          // mouse buttons
            'input invalid ' +                                                 // form elements
            'touchstart touchmove touchend touchcancel ' +                     // touch
            'gesturestart gesturechange gestureend ' +                         // gesture
            'MSPointerUp MSPointerDown MSPointerCancel MSPointerMove ' +       // MS Pointer events
            'MSPointerOver MSPointerOut ' +                                    // MS Pointer events
            'message readystatechange pageshow pagehide popstate ' +           // window
            'hashchange offline online ' +                                     // window
            'afterprint beforeprint ' +                                        // printing
            'dragstart dragenter dragover dragleave drag drop dragend ' +      // dnd
            'loadstart progress suspend emptied stalled loadmetadata ' +       // media
            'loadeddata canplay canplaythrough playing waiting seeking ' +     // media
            'seeked ended durationchange timeupdate play pause ratechange ' +  // media
            'volumechange cuechange ' +                                        // media
            'checking noupdate downloading cached updateready obsolete ' +     // appcache
            '' : '')
        ).split(' ')
      )

    , customEvents = (function () {
        function isDescendant(parent, node) {
          while ((node = node.parentNode) !== null) {
            if (node === parent) return true
          }
          return false
        }

        function check(event) {
          var related = event.relatedTarget
          if (!related) return related === null
          return (related !== this && related.prefix !== 'xul' && !/document/.test(this.toString()) && !isDescendant(this, related))
        }

        return {
            mouseenter: { base: 'mouseover', condition: check }
          , mouseleave: { base: 'mouseout', condition: check }
          , mousewheel: { base: /Firefox/.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel' }
        }
      })()

    , fixEvent = (function () {
        var commonProps = 'altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which'.split(' ')
          , mouseProps = commonProps.concat('button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '))
          , mouseWheelProps = mouseProps.concat('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis'.split(' ')) // 'axis' is FF specific
          , keyProps = commonProps.concat('char charCode key keyCode keyIdentifier keyLocation'.split(' '))
          , textProps = commonProps.concat(['data'])
          , touchProps = commonProps.concat('touches targetTouches changedTouches scale rotation'.split(' '))
          , preventDefault = 'preventDefault'
          , createPreventDefault = function (event) {
              return function () {
                if (event[preventDefault])
                  event[preventDefault]()
                else
                  event.returnValue = false
              }
            }
          , stopPropagation = 'stopPropagation'
          , createStopPropagation = function (event) {
              return function () {
                if (event[stopPropagation])
                  event[stopPropagation]()
                else
                  event.cancelBubble = true
              }
            }
          , createStop = function (synEvent) {
              return function () {
                synEvent[preventDefault]()
                synEvent[stopPropagation]()
                synEvent.stopped = true
              }
            }
          , copyProps = function (event, result, props) {
              var i, p
              for (i = props.length; i--;) {
                p = props[i]
                if (!(p in result) && p in event) result[p] = event[p]
              }
            }

        return function (event, isNative) {
          var result = { originalEvent: event, isNative: isNative }
          if (!event)
            return result

          var props
            , type = event.type
            , target = event.target || event.srcElement

          result[preventDefault] = createPreventDefault(event)
          result[stopPropagation] = createStopPropagation(event)
          result.stop = createStop(result)
          result.target = target && target.nodeType === 3 ? target.parentNode : target

          if (isNative) { // we only need basic augmentation on custom events, the rest is too expensive
            if (type.indexOf('key') !== -1) {
              props = keyProps
              result.keyCode = event.which || event.keyCode
            } else if (mouseTypeRegex.test(type)) {
              props = mouseProps
              result.rightClick = event.which === 3 || event.button === 2
              result.pos = { x: 0, y: 0 }
              if (event.pageX || event.pageY) {
                result.clientX = event.pageX
                result.clientY = event.pageY
              } else if (event.clientX || event.clientY) {
                result.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft
                result.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
              }
              if (overOut.test(type))
                result.relatedTarget = event.relatedTarget || event[(type === 'mouseover' ? 'from' : 'to') + 'Element']
            } else if (touchTypeRegex.test(type)) {
              props = touchProps
            } else if (mouseWheelTypeRegex.test(type)) {
              props = mouseWheelProps
            } else if (textTypeRegex.test(type)) {
              props = textProps
            }
            copyProps(event, result, props || commonProps)
          }
          return result
        }
      })()

      // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
    , targetElement = function (element, isNative) {
        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
      }

      // we use one of these per listener, of any type
    , RegEntry = (function () {
        function entry(element, type, handler, original, namespaces) {
          this.element = element
          this.type = type
          this.handler = handler
          this.original = original
          this.namespaces = namespaces
          this.custom = customEvents[type]
          this.isNative = nativeEvents[type] && element[eventSupport]
          this.eventType = W3C_MODEL || this.isNative ? type : 'propertychange'
          this.customType = !W3C_MODEL && !this.isNative && type
          this.target = targetElement(element, this.isNative)
          this.eventSupport = this.target[eventSupport]
        }

        entry.prototype = {
            // given a list of namespaces, is our entry in any of them?
            inNamespaces: function (checkNamespaces) {
              var i, j
              if (!checkNamespaces)
                return true
              if (!this.namespaces)
                return false
              for (i = checkNamespaces.length; i--;) {
                for (j = this.namespaces.length; j--;) {
                  if (checkNamespaces[i] === this.namespaces[j])
                    return true
                }
              }
              return false
            }

            // match by element, original fn (opt), handler fn (opt)
          , matches: function (checkElement, checkOriginal, checkHandler) {
              return this.element === checkElement &&
                (!checkOriginal || this.original === checkOriginal) &&
                (!checkHandler || this.handler === checkHandler)
            }
        }

        return entry
      })()

    , registry = (function () {
        // our map stores arrays by event type, just because it's better than storing
        // everything in a single array. uses '$' as a prefix for the keys for safety
        var map = {}

          // generic functional search of our registry for matching listeners,
          // `fn` returns false to break out of the loop
          , forAll = function (element, type, original, handler, fn) {
              if (!type || type === '*') {
                // search the whole registry
                for (var t in map) {
                  if (t.charAt(0) === '$')
                    forAll(element, t.substr(1), original, handler, fn)
                }
              } else {
                var i = 0, l, list = map['$' + type], all = element === '*'
                if (!list)
                  return
                for (l = list.length; i < l; i++) {
                  if (all || list[i].matches(element, original, handler))
                    if (!fn(list[i], list, i, type))
                      return
                }
              }
            }

          , has = function (element, type, original) {
              // we're not using forAll here simply because it's a bit slower and this
              // needs to be fast
              var i, list = map['$' + type]
              if (list) {
                for (i = list.length; i--;) {
                  if (list[i].matches(element, original, null))
                    return true
                }
              }
              return false
            }

          , get = function (element, type, original) {
              var entries = []
              forAll(element, type, original, null, function (entry) { return entries.push(entry) })
              return entries
            }

          , put = function (entry) {
              (map['$' + entry.type] || (map['$' + entry.type] = [])).push(entry)
              return entry
            }

          , del = function (entry) {
              forAll(entry.element, entry.type, null, entry.handler, function (entry, list, i) {
                list.splice(i, 1)
                if (list.length === 0)
                  delete map['$' + entry.type]
                return false
              })
            }

            // dump all entries, used for onunload
          , entries = function () {
              var t, entries = []
              for (t in map) {
                if (t.charAt(0) === '$')
                  entries = entries.concat(map[t])
              }
              return entries
            }

        return { has: has, get: get, put: put, del: del, entries: entries }
      })()

      // add and remove listeners to DOM elements
    , listener = W3C_MODEL ? function (element, type, fn, add) {
        element[add ? addEvent : removeEvent](type, fn, false)
      } : function (element, type, fn, add, custom) {
        if (custom && add && element['_on' + custom] === null)
          element['_on' + custom] = 0
        element[add ? attachEvent : detachEvent]('on' + type, fn)
      }

    , nativeHandler = function (element, fn, args) {
        return function (event) {
          event = fixEvent(event || ((this.ownerDocument || this.document || this).parentWindow || win).event, true)
          return fn.apply(element, [event].concat(args))
        }
      }

    , customHandler = function (element, fn, type, condition, args, isNative) {
        return function (event) {
          if (condition ? condition.apply(this, arguments) : W3C_MODEL ? true : event && event.propertyName === '_on' + type || !event) {
            if (event)
              event = fixEvent(event || ((this.ownerDocument || this.document || this).parentWindow || win).event, isNative)
            fn.apply(element, event && (!args || args.length === 0) ? arguments : slice.call(arguments, event ? 0 : 1).concat(args))
          }
        }
      }

    , once = function (rm, element, type, fn, originalFn) {
        // wrap the handler in a handler that does a remove as well
        return function () {
          rm(element, type, originalFn)
          fn.apply(this, arguments)
        }
      }

    , removeListener = function (element, orgType, handler, namespaces) {
        var i, l, entry
          , type = (orgType && orgType.replace(nameRegex, ''))
          , handlers = registry.get(element, type, handler)

        for (i = 0, l = handlers.length; i < l; i++) {
          if (handlers[i].inNamespaces(namespaces)) {
            if ((entry = handlers[i]).eventSupport)
              listener(entry.target, entry.eventType, entry.handler, false, entry.type)
            // TODO: this is problematic, we have a registry.get() and registry.del() that
            // both do registry searches so we waste cycles doing this. Needs to be rolled into
            // a single registry.forAll(fn) that removes while finding, but the catch is that
            // we'll be splicing the arrays that we're iterating over. Needs extra tests to
            // make sure we don't screw it up. @rvagg
            registry.del(entry)
          }
        }
      }

    , addListener = function (element, orgType, fn, originalFn, args) {
        var entry
          , type = orgType.replace(nameRegex, '')
          , namespaces = orgType.replace(namespaceRegex, '').split('.')

        if (registry.has(element, type, fn))
          return element // no dupe
        if (type === 'unload')
          fn = once(removeListener, element, type, fn, originalFn) // self clean-up
        if (customEvents[type]) {
          if (customEvents[type].condition)
            fn = customHandler(element, fn, type, customEvents[type].condition, true)
          type = customEvents[type].base || type
        }
        entry = registry.put(new RegEntry(element, type, fn, originalFn, namespaces[0] && namespaces))
        entry.handler = entry.isNative ?
          nativeHandler(element, entry.handler, args) :
          customHandler(element, entry.handler, type, false, args, false)
        if (entry.eventSupport)
          listener(entry.target, entry.eventType, entry.handler, true, entry.customType)
      }

    , del = function (selector, fn, $) {
        return function (e) {
          var target, i, array = typeof selector === 'string' ? $(selector, this) : selector
          for (target = e.target; target && target !== this; target = target.parentNode) {
            for (i = array.length; i--;) {
              if (array[i] === target) {
                return fn.apply(target, arguments)
              }
            }
          }
        }
      }

    , remove = function (element, typeSpec, fn) {
        var k, m, type, namespaces, i
          , rm = removeListener
          , isString = typeSpec && typeof typeSpec === 'string'

        if (isString && typeSpec.indexOf(' ') > 0) {
          // remove(el, 't1 t2 t3', fn) or remove(el, 't1 t2 t3')
          typeSpec = typeSpec.split(' ')
          for (i = typeSpec.length; i--;)
            remove(element, typeSpec[i], fn)
          return element
        }
        type = isString && typeSpec.replace(nameRegex, '')
        if (type && customEvents[type])
          type = customEvents[type].type
        if (!typeSpec || isString) {
          // remove(el) or remove(el, t1.ns) or remove(el, .ns) or remove(el, .ns1.ns2.ns3)
          if (namespaces = isString && typeSpec.replace(namespaceRegex, ''))
            namespaces = namespaces.split('.')
          rm(element, type, fn, namespaces)
        } else if (typeof typeSpec === 'function') {
          // remove(el, fn)
          rm(element, null, typeSpec)
        } else {
          // remove(el, { t1: fn1, t2, fn2 })
          for (k in typeSpec) {
            if (typeSpec.hasOwnProperty(k))
              remove(element, k, typeSpec[k])
          }
        }
        return element
      }

    , add = function (element, events, fn, delfn, $) {
        var type, types, i, args
          , originalFn = fn
          , isDel = fn && typeof fn === 'string'

        if (events && !fn && typeof events === 'object') {
          for (type in events) {
            if (events.hasOwnProperty(type))
              add.apply(this, [ element, type, events[type] ])
          }
        } else {
          args = arguments.length > 3 ? slice.call(arguments, 3) : []
          types = (isDel ? fn : events).split(' ')
          isDel && (fn = del(events, (originalFn = delfn), $)) && (args = slice.call(args, 1))
          // special case for one()
          this === ONE && (fn = once(remove, element, events, fn, originalFn))
          for (i = types.length; i--;) addListener(element, types[i], fn, originalFn, args)
        }
        return element
      }

    , one = function () {
        return add.apply(ONE, arguments)
      }

    , fireListener = W3C_MODEL ? function (isNative, type, element) {
        var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents')
        evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1)
        element.dispatchEvent(evt)
      } : function (isNative, type, element) {
        element = targetElement(element, isNative)
        // if not-native then we're using onpropertychange so we just increment a custom property
        isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++
      }

    , fire = function (element, type, args) {
        var i, j, l, names, handlers
          , types = type.split(' ')

        for (i = types.length; i--;) {
          type = types[i].replace(nameRegex, '')
          if (names = types[i].replace(namespaceRegex, ''))
            names = names.split('.')
          if (!names && !args && element[eventSupport]) {
            fireListener(nativeEvents[type], type, element)
          } else {
            // non-native event, either because of a namespace, arguments or a non DOM element
            // iterate over all listeners and manually 'fire'
            handlers = registry.get(element, type)
            args = [false].concat(args)
            for (j = 0, l = handlers.length; j < l; j++) {
              if (handlers[j].inNamespaces(names))
                handlers[j].handler.apply(element, args)
            }
          }
        }
        return element
      }

    , clone = function (element, from, type) {
        var i = 0
          , handlers = registry.get(from, type)
          , l = handlers.length

        for (;i < l; i++)
          handlers[i].original && add(element, handlers[i].type, handlers[i].original)
        return element
      }

    , bean = {
          add: add
        , one: one
        , remove: remove
        , clone: clone
        , fire: fire
        , noConflict: function () {
            context[name] = old
            return this
          }
      }

  if (win[attachEvent]) {
    // for IE, clean up on unload to avoid leaks
    var cleanup = function () {
      var i, entries = registry.entries()
      for (i in entries) {
        if (entries[i].type && entries[i].type !== 'unload')
          remove(entries[i].element, entries[i].type)
      }
      win[detachEvent]('onunload', cleanup)
      win.CollectGarbage && win.CollectGarbage()
    }
    win[attachEvent]('onunload', cleanup)
  }

  return bean
})
// Copyright Google Inc.
// Licensed under the Apache Licence Version 2.0
// Autogenerated at Tue Oct 11 13:36:46 EDT 2011
// @provides html4
var html4 = {};
html4.atype = {
  NONE: 0,
  URI: 1,
  URI_FRAGMENT: 11,
  SCRIPT: 2,
  STYLE: 3,
  ID: 4,
  IDREF: 5,
  IDREFS: 6,
  GLOBAL_NAME: 7,
  LOCAL_NAME: 8,
  CLASSES: 9,
  FRAME_TARGET: 10
};
html4.ATTRIBS = {
  '*::class': 9,
  '*::dir': 0,
  '*::id': 4,
  '*::lang': 0,
  '*::onclick': 2,
  '*::ondblclick': 2,
  '*::onkeydown': 2,
  '*::onkeypress': 2,
  '*::onkeyup': 2,
  '*::onload': 2,
  '*::onmousedown': 2,
  '*::onmousemove': 2,
  '*::onmouseout': 2,
  '*::onmouseover': 2,
  '*::onmouseup': 2,
  '*::style': 3,
  '*::title': 0,
  'a::accesskey': 0,
  'a::coords': 0,
  'a::href': 1,
  'a::hreflang': 0,
  'a::name': 7,
  'a::onblur': 2,
  'a::onfocus': 2,
  'a::rel': 0,
  'a::rev': 0,
  'a::shape': 0,
  'a::tabindex': 0,
  'a::target': 10,
  'a::type': 0,
  'area::accesskey': 0,
  'area::alt': 0,
  'area::coords': 0,
  'area::href': 1,
  'area::nohref': 0,
  'area::onblur': 2,
  'area::onfocus': 2,
  'area::shape': 0,
  'area::tabindex': 0,
  'area::target': 10,
  'bdo::dir': 0,
  'blockquote::cite': 1,
  'br::clear': 0,
  'button::accesskey': 0,
  'button::disabled': 0,
  'button::name': 8,
  'button::onblur': 2,
  'button::onfocus': 2,
  'button::tabindex': 0,
  'button::type': 0,
  'button::value': 0,
  'canvas::height': 0,
  'canvas::width': 0,
  'caption::align': 0,
  'col::align': 0,
  'col::char': 0,
  'col::charoff': 0,
  'col::span': 0,
  'col::valign': 0,
  'col::width': 0,
  'colgroup::align': 0,
  'colgroup::char': 0,
  'colgroup::charoff': 0,
  'colgroup::span': 0,
  'colgroup::valign': 0,
  'colgroup::width': 0,
  'del::cite': 1,
  'del::datetime': 0,
  'dir::compact': 0,
  'div::align': 0,
  'dl::compact': 0,
  'font::color': 0,
  'font::face': 0,
  'font::size': 0,
  'form::accept': 0,
  'form::action': 1,
  'form::autocomplete': 0,
  'form::enctype': 0,
  'form::method': 0,
  'form::name': 7,
  'form::onreset': 2,
  'form::onsubmit': 2,
  'form::target': 10,
  'h1::align': 0,
  'h2::align': 0,
  'h3::align': 0,
  'h4::align': 0,
  'h5::align': 0,
  'h6::align': 0,
  'hr::align': 0,
  'hr::noshade': 0,
  'hr::size': 0,
  'hr::width': 0,
  'iframe::align': 0,
  'iframe::frameborder': 0,
  'iframe::height': 0,
  'iframe::marginheight': 0,
  'iframe::marginwidth': 0,
  'iframe::width': 0,
  'img::align': 0,
  'img::alt': 0,
  'img::border': 0,
  'img::height': 0,
  'img::hspace': 0,
  'img::ismap': 0,
  'img::name': 7,
  'img::src': 1,
  'img::usemap': 11,
  'img::vspace': 0,
  'img::width': 0,
  'input::accept': 0,
  'input::accesskey': 0,
  'input::align': 0,
  'input::alt': 0,
  'input::autocomplete': 0,
  'input::checked': 0,
  'input::disabled': 0,
  'input::ismap': 0,
  'input::maxlength': 0,
  'input::name': 8,
  'input::onblur': 2,
  'input::onchange': 2,
  'input::onfocus': 2,
  'input::onselect': 2,
  'input::readonly': 0,
  'input::size': 0,
  'input::src': 1,
  'input::tabindex': 0,
  'input::type': 0,
  'input::usemap': 11,
  'input::value': 0,
  'ins::cite': 1,
  'ins::datetime': 0,
  'label::accesskey': 0,
  'label::for': 5,
  'label::onblur': 2,
  'label::onfocus': 2,
  'legend::accesskey': 0,
  'legend::align': 0,
  'li::type': 0,
  'li::value': 0,
  'map::name': 7,
  'menu::compact': 0,
  'ol::compact': 0,
  'ol::start': 0,
  'ol::type': 0,
  'optgroup::disabled': 0,
  'optgroup::label': 0,
  'option::disabled': 0,
  'option::label': 0,
  'option::selected': 0,
  'option::value': 0,
  'p::align': 0,
  'pre::width': 0,
  'q::cite': 1,
  'select::disabled': 0,
  'select::multiple': 0,
  'select::name': 8,
  'select::onblur': 2,
  'select::onchange': 2,
  'select::onfocus': 2,
  'select::size': 0,
  'select::tabindex': 0,
  'table::align': 0,
  'table::bgcolor': 0,
  'table::border': 0,
  'table::cellpadding': 0,
  'table::cellspacing': 0,
  'table::frame': 0,
  'table::rules': 0,
  'table::summary': 0,
  'table::width': 0,
  'tbody::align': 0,
  'tbody::char': 0,
  'tbody::charoff': 0,
  'tbody::valign': 0,
  'td::abbr': 0,
  'td::align': 0,
  'td::axis': 0,
  'td::bgcolor': 0,
  'td::char': 0,
  'td::charoff': 0,
  'td::colspan': 0,
  'td::headers': 6,
  'td::height': 0,
  'td::nowrap': 0,
  'td::rowspan': 0,
  'td::scope': 0,
  'td::valign': 0,
  'td::width': 0,
  'textarea::accesskey': 0,
  'textarea::cols': 0,
  'textarea::disabled': 0,
  'textarea::name': 8,
  'textarea::onblur': 2,
  'textarea::onchange': 2,
  'textarea::onfocus': 2,
  'textarea::onselect': 2,
  'textarea::readonly': 0,
  'textarea::rows': 0,
  'textarea::tabindex': 0,
  'tfoot::align': 0,
  'tfoot::char': 0,
  'tfoot::charoff': 0,
  'tfoot::valign': 0,
  'th::abbr': 0,
  'th::align': 0,
  'th::axis': 0,
  'th::bgcolor': 0,
  'th::char': 0,
  'th::charoff': 0,
  'th::colspan': 0,
  'th::headers': 6,
  'th::height': 0,
  'th::nowrap': 0,
  'th::rowspan': 0,
  'th::scope': 0,
  'th::valign': 0,
  'th::width': 0,
  'thead::align': 0,
  'thead::char': 0,
  'thead::charoff': 0,
  'thead::valign': 0,
  'tr::align': 0,
  'tr::bgcolor': 0,
  'tr::char': 0,
  'tr::charoff': 0,
  'tr::valign': 0,
  'ul::compact': 0,
  'ul::type': 0
};
html4.eflags = {
  OPTIONAL_ENDTAG: 1,
  EMPTY: 2,
  CDATA: 4,
  RCDATA: 8,
  UNSAFE: 16,
  FOLDABLE: 32,
  SCRIPT: 64,
  STYLE: 128
};
html4.ELEMENTS = {
  'a': 0,
  'abbr': 0,
  'acronym': 0,
  'address': 0,
  'applet': 16,
  'area': 2,
  'b': 0,
  'base': 18,
  'basefont': 18,
  'bdo': 0,
  'big': 0,
  'blockquote': 0,
  'body': 49,
  'br': 2,
  'button': 0,
  'canvas': 0,
  'caption': 0,
  'center': 0,
  'cite': 0,
  'code': 0,
  'col': 2,
  'colgroup': 1,
  'dd': 1,
  'del': 0,
  'dfn': 0,
  'dir': 0,
  'div': 0,
  'dl': 0,
  'dt': 1,
  'em': 0,
  'fieldset': 0,
  'font': 0,
  'form': 0,
  'frame': 18,
  'frameset': 16,
  'h1': 0,
  'h2': 0,
  'h3': 0,
  'h4': 0,
  'h5': 0,
  'h6': 0,
  'head': 49,
  'hr': 2,
  'html': 49,
  'i': 0,
  'iframe': 4,
  'img': 2,
  'input': 2,
  'ins': 0,
  'isindex': 18,
  'kbd': 0,
  'label': 0,
  'legend': 0,
  'li': 1,
  'link': 18,
  'map': 0,
  'menu': 0,
  'meta': 18,
  'nobr': 0,
  'noembed': 4,
  'noframes': 20,
  'noscript': 20,
  'object': 16,
  'ol': 0,
  'optgroup': 0,
  'option': 1,
  'p': 1,
  'param': 18,
  'pre': 0,
  'q': 0,
  's': 0,
  'samp': 0,
  'script': 84,
  'select': 0,
  'small': 0,
  'span': 0,
  'strike': 0,
  'strong': 0,
  'style': 148,
  'sub': 0,
  'sup': 0,
  'table': 0,
  'tbody': 1,
  'td': 1,
  'textarea': 8,
  'tfoot': 1,
  'th': 1,
  'thead': 1,
  'title': 24,
  'tr': 1,
  'tt': 0,
  'u': 0,
  'ul': 0,
  'var': 0
};
html4.ueffects = {
  NOT_LOADED: 0,
  SAME_DOCUMENT: 1,
  NEW_DOCUMENT: 2
};
html4.URIEFFECTS = {
  'a::href': 2,
  'area::href': 2,
  'blockquote::cite': 0,
  'body::background': 1,
  'del::cite': 0,
  'form::action': 2,
  'img::src': 1,
  'input::src': 1,
  'ins::cite': 0,
  'q::cite': 0
};
html4.ltypes = {
  UNSANDBOXED: 2,
  SANDBOXED: 1,
  DATA: 0
};
html4.LOADERTYPES = {
  'a::href': 2,
  'area::href': 2,
  'blockquote::cite': 2,
  'body::background': 1,
  'del::cite': 2,
  'form::action': 2,
  'img::src': 1,
  'input::src': 1,
  'ins::cite': 2,
  'q::cite': 2
};;
// Copyright (C) 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 * An HTML sanitizer that can satisfy a variety of security policies.
 *
 * <p>
 * The HTML sanitizer is built around a SAX parser and HTML element and
 * attributes schemas.
 *
 * @author mikesamuel@gmail.com
 * @requires html4
 * @overrides window
 * @provides html, html_sanitize
 */

/**
 * @namespace
 */
var html = (function (html4) {
  var lcase;
  // The below may not be true on browsers in the Turkish locale.
  if ('script' === 'SCRIPT'.toLowerCase()) {
    lcase = function (s) { return s.toLowerCase(); };
  } else {
    /**
     * {@updoc
     * $ lcase('SCRIPT')
     * # 'script'
     * $ lcase('script')
     * # 'script'
     * }
     */
    lcase = function (s) {
      return s.replace(
          /[A-Z]/g,
          function (ch) {
            return String.fromCharCode(ch.charCodeAt(0) | 32);
          });
    };
  }

  var ENTITIES = {
    lt   : '<',
    gt   : '>',
    amp  : '&',
    nbsp : '\240',
    quot : '"',
    apos : '\''
  };
  
  // Schemes on which to defer to uripolicy. Urls with other schemes are denied
  var WHITELISTED_SCHEMES = /^(?:https?|mailto|data)$/i;

  var decimalEscapeRe = /^#(\d+)$/;
  var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
  /**
   * Decodes an HTML entity.
   *
   * {@updoc
   * $ lookupEntity('lt')
   * # '<'
   * $ lookupEntity('GT')
   * # '>'
   * $ lookupEntity('amp')
   * # '&'
   * $ lookupEntity('nbsp')
   * # '\xA0'
   * $ lookupEntity('apos')
   * # "'"
   * $ lookupEntity('quot')
   * # '"'
   * $ lookupEntity('#xa')
   * # '\n'
   * $ lookupEntity('#10')
   * # '\n'
   * $ lookupEntity('#x0a')
   * # '\n'
   * $ lookupEntity('#010')
   * # '\n'
   * $ lookupEntity('#x00A')
   * # '\n'
   * $ lookupEntity('Pi')      // Known failure
   * # '\u03A0'
   * $ lookupEntity('pi')      // Known failure
   * # '\u03C0'
   * }
   *
   * @param name the content between the '&' and the ';'.
   * @return a single unicode code-point as a string.
   */
  function lookupEntity(name) {
    name = lcase(name);  // TODO: &pi; is different from &Pi;
    if (ENTITIES.hasOwnProperty(name)) { return ENTITIES[name]; }
    var m = name.match(decimalEscapeRe);
    if (m) {
      return String.fromCharCode(parseInt(m[1], 10));
    } else if (!!(m = name.match(hexEscapeRe))) {
      return String.fromCharCode(parseInt(m[1], 16));
    }
    return '';
  }

  function decodeOneEntity(_, name) {
    return lookupEntity(name);
  }

  var nulRe = /\0/g;
  function stripNULs(s) {
    return s.replace(nulRe, '');
  }

  var entityRe = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g;
  /**
   * The plain text of a chunk of HTML CDATA which possibly containing.
   *
   * {@updoc
   * $ unescapeEntities('')
   * # ''
   * $ unescapeEntities('hello World!')
   * # 'hello World!'
   * $ unescapeEntities('1 &lt; 2 &amp;&AMP; 4 &gt; 3&#10;')
   * # '1 < 2 && 4 > 3\n'
   * $ unescapeEntities('&lt;&lt <- unfinished entity&gt;')
   * # '<&lt <- unfinished entity>'
   * $ unescapeEntities('/foo?bar=baz&copy=true')  // & often unescaped in URLS
   * # '/foo?bar=baz&copy=true'
   * $ unescapeEntities('pi=&pi;&#x3c0;, Pi=&Pi;\u03A0') // FIXME: known failure
   * # 'pi=\u03C0\u03c0, Pi=\u03A0\u03A0'
   * }
   *
   * @param s a chunk of HTML CDATA.  It must not start or end inside an HTML
   *   entity.
   */
  function unescapeEntities(s) {
    return s.replace(entityRe, decodeOneEntity);
  }

  var ampRe = /&/g;
  var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
  var ltRe = /</g;
  var gtRe = />/g;
  var quotRe = /\"/g;
  var eqRe = /\=/g;  // Backslash required on JScript.net

  /**
   * Escapes HTML special characters in attribute values as HTML entities.
   *
   * {@updoc
   * $ escapeAttrib('')
   * # ''
   * $ escapeAttrib('"<<&==&>>"')  // Do not just escape the first occurrence.
   * # '&#34;&lt;&lt;&amp;&#61;&#61;&amp;&gt;&gt;&#34;'
   * $ escapeAttrib('Hello <World>!')
   * # 'Hello &lt;World&gt;!'
   * }
   */
  function escapeAttrib(s) {
    // Escaping '=' defangs many UTF-7 and SGML short-tag attacks.
    return s.replace(ampRe, '&amp;').replace(ltRe, '&lt;').replace(gtRe, '&gt;')
        .replace(quotRe, '&#34;').replace(eqRe, '&#61;');
  }

  /**
   * Escape entities in RCDATA that can be escaped without changing the meaning.
   * {@updoc
   * $ normalizeRCData('1 < 2 &&amp; 3 > 4 &amp;& 5 &lt; 7&8')
   * # '1 &lt; 2 &amp;&amp; 3 &gt; 4 &amp;&amp; 5 &lt; 7&amp;8'
   * }
   */
  function normalizeRCData(rcdata) {
    return rcdata
        .replace(looseAmpRe, '&amp;$1')
        .replace(ltRe, '&lt;')
        .replace(gtRe, '&gt;');
  }


  // TODO(mikesamuel): validate sanitizer regexs against the HTML5 grammar at
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html

  /** token definitions. */
  var INSIDE_TAG_TOKEN = new RegExp(
      // Don't capture space.
      '^\\s*(?:'
      // Capture an attribute name in group 1, and value in group 3.
      // We capture the fact that there was an attribute in group 2, since
      // interpreters are inconsistent in whether a group that matches nothing
      // is null, undefined, or the empty string.
      + ('(?:'
         + '([a-z][a-z-]*)'                    // attribute name
         + ('('                                // optionally followed
            + '\\s*=\\s*'
            + ('('
               // A double quoted string.
               + '\"[^\"]*\"'
               // A single quoted string.
               + '|\'[^\']*\''
               // The positive lookahead is used to make sure that in
               // <foo bar= baz=boo>, the value for bar is blank, not "baz=boo".
               + '|(?=[a-z][a-z-]*\\s*=)'
               // An unquoted value that is not an attribute name.
               // We know it is not an attribute name because the previous
               // zero-width match would've eliminated that possibility.
               + '|[^>\"\'\\s]*'
               + ')'
               )
            + ')'
            ) + '?'
         + ')'
         )
      // End of tag captured in group 3.
      + '|(\/?>)'
      // Don't capture cruft
      + '|[\\s\\S][^a-z\\s>]*)',
      'i');

  var OUTSIDE_TAG_TOKEN = new RegExp(
      '^(?:'
      // Entity captured in group 1.
      + '&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);'
      // Comment, doctypes, and processing instructions not captured.
      + '|<\!--[\\s\\S]*?--\>|<!\\w[^>]*>|<\\?[^>*]*>'
      // '/' captured in group 2 for close tags, and name captured in group 3.
      + '|<(\/)?([a-z][a-z0-9]*)'
      // Text captured in group 4.
      + '|([^<&>]+)'
      // Cruft captured in group 5.
      + '|([<&>]))',
      'i');

  /**
   * Given a SAX-like event handler, produce a function that feeds those
   * events and a parameter to the event handler.
   *
   * The event handler has the form:{@code
   * {
   *   // Name is an upper-case HTML tag name.  Attribs is an array of
   *   // alternating upper-case attribute names, and attribute values.  The
   *   // attribs array is reused by the parser.  Param is the value passed to
   *   // the saxParser.
   *   startTag: function (name, attribs, param) { ... },
   *   endTag:   function (name, param) { ... },
   *   pcdata:   function (text, param) { ... },
   *   rcdata:   function (text, param) { ... },
   *   cdata:    function (text, param) { ... },
   *   startDoc: function (param) { ... },
   *   endDoc:   function (param) { ... }
   * }}
   *
   * @param {Object} handler a record containing event handlers.
   * @return {Function} that takes a chunk of html and a parameter.
   *   The parameter is passed on to the handler methods.
   */
  function makeSaxParser(handler) {
    return function parse(htmlText, param) {
      htmlText = String(htmlText);
      var htmlLower = null;

      var inTag = false;  // True iff we're currently processing a tag.
      var attribs = [];  // Accumulates attribute names and values.
      var tagName = void 0;  // The name of the tag currently being processed.
      var eflags = void 0;  // The element flags for the current tag.
      var openTag = void 0;  // True if the current tag is an open tag.

      if (handler.startDoc) { handler.startDoc(param); }

      while (htmlText) {
        var m = htmlText.match(inTag ? INSIDE_TAG_TOKEN : OUTSIDE_TAG_TOKEN);
        htmlText = htmlText.substring(m[0].length);

        if (inTag) {
          if (m[1]) { // attribute
            // setAttribute with uppercase names doesn't work on IE6.
            var attribName = lcase(m[1]);
            var decodedValue;
            if (m[2]) {
              var encodedValue = m[3];
              switch (encodedValue.charCodeAt(0)) {  // Strip quotes
                case 34: case 39:
                  encodedValue = encodedValue.substring(
                      1, encodedValue.length - 1);
                  break;
              }
              decodedValue = unescapeEntities(stripNULs(encodedValue));
            } else {
              // Use name as value for valueless attribs, so
              //   <input type=checkbox checked>
              // gets attributes ['type', 'checkbox', 'checked', 'checked']
              decodedValue = attribName;
            }
            attribs.push(attribName, decodedValue);
          } else if (m[4]) {
            if (eflags !== void 0) {  // False if not in whitelist.
              if (openTag) {
                if (handler.startTag) {
                  handler.startTag(tagName, attribs, param);
                }
              } else {
                if (handler.endTag) {
                  handler.endTag(tagName, param);
                }
              }
            }

            if (openTag
                && (eflags & (html4.eflags.CDATA | html4.eflags.RCDATA))) {
              if (htmlLower === null) {
                htmlLower = lcase(htmlText);
              } else {
                htmlLower = htmlLower.substring(
                    htmlLower.length - htmlText.length);
              }
              var dataEnd = htmlLower.indexOf('</' + tagName);
              if (dataEnd < 0) { dataEnd = htmlText.length; }
              if (dataEnd) {
                if (eflags & html4.eflags.CDATA) {
                  if (handler.cdata) {
                    handler.cdata(htmlText.substring(0, dataEnd), param);
                  }
                } else if (handler.rcdata) {
                  handler.rcdata(
                    normalizeRCData(htmlText.substring(0, dataEnd)), param);
                }
                htmlText = htmlText.substring(dataEnd);
              }
            }

            tagName = eflags = openTag = void 0;
            attribs.length = 0;
            inTag = false;
          }
        } else {
          if (m[1]) {  // Entity
            if (handler.pcdata) { handler.pcdata(m[0], param); }
          } else if (m[3]) {  // Tag
            openTag = !m[2];
            inTag = true;
            tagName = lcase(m[3]);
            eflags = html4.ELEMENTS.hasOwnProperty(tagName)
                ? html4.ELEMENTS[tagName] : void 0;
          } else if (m[4]) {  // Text
            if (handler.pcdata) { handler.pcdata(m[4], param); }
          } else if (m[5]) {  // Cruft
            if (handler.pcdata) {
              var ch = m[5];
              handler.pcdata(
                  ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&amp;',
                  param);
            }
          }
        }
      }

      if (handler.endDoc) { handler.endDoc(param); }
    };
  }

  /**
   * Returns a function that strips unsafe tags and attributes from html.
   * @param {Function} sanitizeAttributes
   *     maps from (tagName, attribs[]) to null or a sanitized attribute array.
   *     The attribs array can be arbitrarily modified, but the same array
   *     instance is reused, so should not be held.
   * @return {Function} from html to sanitized html
   */
  function makeHtmlSanitizer(sanitizeAttributes) {
    var stack;
    var ignoring;
    return makeSaxParser({
        startDoc: function (_) {
          stack = [];
          ignoring = false;
        },
        startTag: function (tagName, attribs, out) {
          if (ignoring) { return; }
          if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
          var eflags = html4.ELEMENTS[tagName];
          if (eflags & html4.eflags.FOLDABLE) {
            return;
          } else if (eflags & html4.eflags.UNSAFE) {
            ignoring = !(eflags & html4.eflags.EMPTY);
            return;
          }
          attribs = sanitizeAttributes(tagName, attribs);
          // TODO(mikesamuel): relying on sanitizeAttributes not to
          // insert unsafe attribute names.
          if (attribs) {
            if (!(eflags & html4.eflags.EMPTY)) {
              stack.push(tagName);
            }

            out.push('<', tagName);
            for (var i = 0, n = attribs.length; i < n; i += 2) {
              var attribName = attribs[i],
                  value = attribs[i + 1];
              if (value !== null && value !== void 0) {
                out.push(' ', attribName, '="', escapeAttrib(value), '"');
              }
            }
            out.push('>');
          }
        },
        endTag: function (tagName, out) {
          if (ignoring) {
            ignoring = false;
            return;
          }
          if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
          var eflags = html4.ELEMENTS[tagName];
          if (!(eflags & (html4.eflags.UNSAFE | html4.eflags.EMPTY
                          | html4.eflags.FOLDABLE))) {
            var index;
            if (eflags & html4.eflags.OPTIONAL_ENDTAG) {
              for (index = stack.length; --index >= 0;) {
                var stackEl = stack[index];
                if (stackEl === tagName) { break; }
                if (!(html4.ELEMENTS[stackEl]
                      & html4.eflags.OPTIONAL_ENDTAG)) {
                  // Don't pop non optional end tags looking for a match.
                  return;
                }
              }
            } else {
              for (index = stack.length; --index >= 0;) {
                if (stack[index] === tagName) { break; }
              }
            }
            if (index < 0) { return; }  // Not opened.
            for (var i = stack.length; --i > index;) {
              var stackEl = stack[i];
              if (!(html4.ELEMENTS[stackEl]
                    & html4.eflags.OPTIONAL_ENDTAG)) {
                out.push('</', stackEl, '>');
              }
            }
            stack.length = index;
            out.push('</', tagName, '>');
          }
        },
        pcdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        rcdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        cdata: function (text, out) {
          if (!ignoring) { out.push(text); }
        },
        endDoc: function (out) {
          for (var i = stack.length; --i >= 0;) {
            out.push('</', stack[i], '>');
          }
          stack.length = 0;
        }
      });
  }

  // From RFC3986
  var URI_SCHEME_RE = new RegExp(
        "^" +
      "(?:" +
        "([^:\/?#]+)" +         // scheme
      ":)?"
      );

  /**
   * Strips unsafe tags and attributes from html.
   * @param {string} htmlText to sanitize
   * @param {Function} opt_uriPolicy -- a transform to apply to uri/url
   *     attribute values.  If no opt_uriPolicy is provided, no uris
   *     are allowed ie. the default uriPolicy rewrites all uris to null
   * @param {Function} opt_nmTokenPolicy : string -> string? -- a transform to
   *     apply to names, ids, and classes. If no opt_nmTokenPolicy is provided,
   *     all names, ids and classes are passed through ie. the default
   *     nmTokenPolicy is an identity transform
   * @return {string} html
   */
  function sanitize(htmlText, opt_uriPolicy, opt_nmTokenPolicy) {
    var out = [];
    makeHtmlSanitizer(
      function sanitizeAttribs(tagName, attribs) {
        for (var i = 0; i < attribs.length; i += 2) {
          var attribName = attribs[i];
          var value = attribs[i + 1];
          var atype = null, attribKey;
          if ((attribKey = tagName + '::' + attribName,
               html4.ATTRIBS.hasOwnProperty(attribKey))
              || (attribKey = '*::' + attribName,
                  html4.ATTRIBS.hasOwnProperty(attribKey))) {
            atype = html4.ATTRIBS[attribKey];
          }
          if (atype !== null) {
            switch (atype) {
              case html4.atype.NONE: break;
              case html4.atype.SCRIPT:
              case html4.atype.STYLE:
                value = null;
                break;
              case html4.atype.ID:
              case html4.atype.IDREF:
              case html4.atype.IDREFS:
              case html4.atype.GLOBAL_NAME:
              case html4.atype.LOCAL_NAME:
              case html4.atype.CLASSES:
                value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                break;
              case html4.atype.URI:
                var parsedUri = ('' + value).match(URI_SCHEME_RE);
                if (!parsedUri) {
                  value = null;
                } else if (!parsedUri[1] ||
                    WHITELISTED_SCHEMES.test(parsedUri[1])) {
                  value = opt_uriPolicy && opt_uriPolicy(value);
                } else {
                  value = null;
                }
                break;
              case html4.atype.URI_FRAGMENT:
                if (value && '#' === value.charAt(0)) {
                  value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
                  if (value) { value = '#' + value; }
                } else {
                  value = null;
                }
                break;
              default:
                value = null;
                break;
            }
          } else {
            value = null;
          }
          attribs[i + 1] = value;
        }
        return attribs;
      })(htmlText, out);
    return out.join('');
  }

  return {
    escapeAttrib: escapeAttrib,
    makeHtmlSanitizer: makeHtmlSanitizer,
    makeSaxParser: makeSaxParser,
    normalizeRCData: normalizeRCData,
    sanitize: sanitize,
    unescapeEntities: unescapeEntities
  };
})(html4);

var html_sanitize = html.sanitize;

// Exports for closure compiler.  Note this file is also cajoled
// for domado and run in an environment without 'window'
if (typeof window !== 'undefined') {
  window['html'] = html;
  window['html_sanitize'] = html_sanitize;
}
// Loosen restrictions of Caja's
// html-sanitizer to allow for styling
html4.ATTRIBS['*::style'] = 0;
html4.ELEMENTS['style'] = 0;

html4.ATTRIBS['a::target'] = 0;

html4.ELEMENTS['video'] = 0;
html4.ATTRIBS['video::src'] = 0;
html4.ATTRIBS['video::poster'] = 0;
html4.ATTRIBS['video::controls'] = 0;

html4.ELEMENTS['audio'] = 0;
html4.ATTRIBS['audio::src'] = 0;
html4.ATTRIBS['video::autoplay'] = 0;
html4.ATTRIBS['video::controls'] = 0;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Mustache = (typeof module !== "undefined" && module.exports) || {};

(function (exports) {

  exports.name = "mustache.js";
  exports.version = "0.5.0-dev";
  exports.tags = ["{{", "}}"];
  exports.parse = parse;
  exports.compile = compile;
  exports.render = render;
  exports.clearCache = clearCache;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var _toString = Object.prototype.toString;
  var _isArray = Array.isArray;
  var _forEach = Array.prototype.forEach;
  var _trim = String.prototype.trim;

  var isArray;
  if (_isArray) {
    isArray = _isArray;
  } else {
    isArray = function (obj) {
      return _toString.call(obj) === "[object Array]";
    };
  }

  var forEach;
  if (_forEach) {
    forEach = function (obj, callback, scope) {
      return _forEach.call(obj, callback, scope);
    };
  } else {
    forEach = function (obj, callback, scope) {
      for (var i = 0, len = obj.length; i < len; ++i) {
        callback.call(scope, obj[i], i, obj);
      }
    };
  }

  var spaceRe = /^\s*$/;

  function isWhitespace(string) {
    return spaceRe.test(string);
  }

  var trim;
  if (_trim) {
    trim = function (string) {
      return string == null ? "" : _trim.call(string);
    };
  } else {
    var trimLeft, trimRight;

    if (isWhitespace("\xA0")) {
      trimLeft = /^\s+/;
      trimRight = /\s+$/;
    } else {
      // IE doesn't match non-breaking spaces with \s, thanks jQuery.
      trimLeft = /^[\s\xA0]+/;
      trimRight = /[\s\xA0]+$/;
    }

    trim = function (string) {
      return string == null ? "" :
        String(string).replace(trimLeft, "").replace(trimRight, "");
    };
  }

  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHTML(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return escapeMap[s] || s;
    });
  }

  /**
   * Adds the `template`, `line`, and `file` properties to the given error
   * object and alters the message to provide more useful debugging information.
   */
  function debug(e, template, line, file) {
    file = file || "<template>";

    var lines = template.split("\n"),
        start = Math.max(line - 3, 0),
        end = Math.min(lines.length, line + 3),
        context = lines.slice(start, end);

    var c;
    for (var i = 0, len = context.length; i < len; ++i) {
      c = i + start + 1;
      context[i] = (c === line ? " >> " : "    ") + context[i];
    }

    e.template = template;
    e.line = line;
    e.file = file;
    e.message = [file + ":" + line, context.join("\n"), "", e.message].join("\n");

    return e;
  }

  /**
   * Looks up the value of the given `name` in the given context `stack`.
   */
  function lookup(name, stack, defaultValue) {
    if (name === ".") {
      return stack[stack.length - 1];
    }

    var names = name.split(".");
    var lastIndex = names.length - 1;
    var target = names[lastIndex];

    var value, context, i = stack.length, j, localStack;
    while (i) {
      localStack = stack.slice(0);
      context = stack[--i];

      j = 0;
      while (j < lastIndex) {
        context = context[names[j++]];

        if (context == null) {
          break;
        }

        localStack.push(context);
      }

      if (context && typeof context === "object" && target in context) {
        value = context[target];
        break;
      }
    }

    // If the value is a function, call it in the current context.
    if (typeof value === "function") {
      value = value.call(localStack[localStack.length - 1]);
    }

    if (value == null)  {
      return defaultValue;
    }

    return value;
  }

  function renderSection(name, stack, callback, inverted) {
    var buffer = "";
    var value =  lookup(name, stack);

    if (inverted) {
      // From the spec: inverted sections may render text once based on the
      // inverse value of the key. That is, they will be rendered if the key
      // doesn't exist, is false, or is an empty list.
      if (value == null || value === false || (isArray(value) && value.length === 0)) {
        buffer += callback();
      }
    } else if (isArray(value)) {
      forEach(value, function (value) {
        stack.push(value);
        buffer += callback();
        stack.pop();
      });
    } else if (typeof value === "object") {
      stack.push(value);
      buffer += callback();
      stack.pop();
    } else if (typeof value === "function") {
      var scope = stack[stack.length - 1];
      var scopedRender = function (template) {
        return render(template, scope);
      };
      buffer += value.call(scope, callback(), scopedRender) || "";
    } else if (value) {
      buffer += callback();
    }

    return buffer;
  }

  /**
   * Parses the given `template` and returns the source of a function that,
   * with the proper arguments, will render the template. Recognized options
   * include the following:
   *
   *   - file     The name of the file the template comes from (displayed in
   *              error messages)
   *   - tags     An array of open and close tags the `template` uses. Defaults
   *              to the value of Mustache.tags
   *   - debug    Set `true` to log the body of the generated function to the
   *              console
   *   - space    Set `true` to preserve whitespace from lines that otherwise
   *              contain only a {{tag}}. Defaults to `false`
   */
  function parse(template, options) {
    options = options || {};

    var tags = options.tags || exports.tags,
        openTag = tags[0],
        closeTag = tags[tags.length - 1];

    var code = [
      'var buffer = "";', // output buffer
      "\nvar line = 1;", // keep track of source line number
      "\ntry {",
      '\nbuffer += "'
    ];

    var spaces = [],      // indices of whitespace in code on the current line
        hasTag = false,   // is there a {{tag}} on the current line?
        nonSpace = false; // is there a non-space char on the current line?

    // Strips all space characters from the code array for the current line
    // if there was a {{tag}} on it and otherwise only spaces.
    var stripSpace = function () {
      if (hasTag && !nonSpace && !options.space) {
        while (spaces.length) {
          code.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var sectionStack = [], updateLine, nextOpenTag, nextCloseTag;

    var setTags = function (source) {
      tags = trim(source).split(/\s+/);
      nextOpenTag = tags[0];
      nextCloseTag = tags[tags.length - 1];
    };

    var includePartial = function (source) {
      code.push(
        '";',
        updateLine,
        '\nvar partial = partials["' + trim(source) + '"];',
        '\nif (partial) {',
        '\n  buffer += render(partial,stack[stack.length - 1],partials);',
        '\n}',
        '\nbuffer += "'
      );
    };

    var openSection = function (source, inverted) {
      var name = trim(source);

      if (name === "") {
        throw debug(new Error("Section name may not be empty"), template, line, options.file);
      }

      sectionStack.push({name: name, inverted: inverted});

      code.push(
        '";',
        updateLine,
        '\nvar name = "' + name + '";',
        '\nvar callback = (function () {',
        '\n  return function () {',
        '\n    var buffer = "";',
        '\nbuffer += "'
      );
    };

    var openInvertedSection = function (source) {
      openSection(source, true);
    };

    var closeSection = function (source) {
      var name = trim(source);
      var openName = sectionStack.length != 0 && sectionStack[sectionStack.length - 1].name;

      if (!openName || name != openName) {
        throw debug(new Error('Section named "' + name + '" was never opened'), template, line, options.file);
      }

      var section = sectionStack.pop();

      code.push(
        '";',
        '\n    return buffer;',
        '\n  };',
        '\n})();'
      );

      if (section.inverted) {
        code.push("\nbuffer += renderSection(name,stack,callback,true);");
      } else {
        code.push("\nbuffer += renderSection(name,stack,callback);");
      }

      code.push('\nbuffer += "');
    };

    var sendPlain = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += lookup("' + trim(source) + '",stack,"");',
        '\nbuffer += "'
      );
    };

    var sendEscaped = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += escapeHTML(lookup("' + trim(source) + '",stack,""));',
        '\nbuffer += "'
      );
    };

    var line = 1, c, callback;
    for (var i = 0, len = template.length; i < len; ++i) {
      if (template.slice(i, i + openTag.length) === openTag) {
        i += openTag.length;
        c = template.substr(i, 1);
        updateLine = '\nline = ' + line + ';';
        nextOpenTag = openTag;
        nextCloseTag = closeTag;
        hasTag = true;

        switch (c) {
        case "!": // comment
          i++;
          callback = null;
          break;
        case "=": // change open/close tags, e.g. {{=<% %>=}}
          i++;
          closeTag = "=" + closeTag;
          callback = setTags;
          break;
        case ">": // include partial
          i++;
          callback = includePartial;
          break;
        case "#": // start section
          i++;
          callback = openSection;
          break;
        case "^": // start inverted section
          i++;
          callback = openInvertedSection;
          break;
        case "/": // end section
          i++;
          callback = closeSection;
          break;
        case "{": // plain variable
          closeTag = "}" + closeTag;
          // fall through
        case "&": // plain variable
          i++;
          nonSpace = true;
          callback = sendPlain;
          break;
        default: // escaped variable
          nonSpace = true;
          callback = sendEscaped;
        }

        var end = template.indexOf(closeTag, i);

        if (end === -1) {
          throw debug(new Error('Tag "' + openTag + '" was not closed properly'), template, line, options.file);
        }

        var source = template.substring(i, end);

        if (callback) {
          callback(source);
        }

        // Maintain line count for \n in source.
        var n = 0;
        while (~(n = source.indexOf("\n", n))) {
          line++;
          n++;
        }

        i = end + closeTag.length - 1;
        openTag = nextOpenTag;
        closeTag = nextCloseTag;
      } else {
        c = template.substr(i, 1);

        switch (c) {
        case '"':
        case "\\":
          nonSpace = true;
          code.push("\\" + c);
          break;
        case "\r":
          // Ignore carriage returns.
          break;
        case "\n":
          spaces.push(code.length);
          code.push("\\n");
          stripSpace(); // Check for whitespace on the current line.
          line++;
          break;
        default:
          if (isWhitespace(c)) {
            spaces.push(code.length);
          } else {
            nonSpace = true;
          }

          code.push(c);
        }
      }
    }

    if (sectionStack.length != 0) {
      throw debug(new Error('Section "' + sectionStack[sectionStack.length - 1].name + '" was not closed properly'), template, line, options.file);
    }

    // Clean up any whitespace from a closing {{tag}} that was at the end
    // of the template without a trailing \n.
    stripSpace();

    code.push(
      '";',
      "\nreturn buffer;",
      "\n} catch (e) { throw {error: e, line: line}; }"
    );

    // Ignore `buffer += "";` statements.
    var body = code.join("").replace(/buffer \+= "";\n/g, "");

    if (options.debug) {
      if (typeof console != "undefined" && console.log) {
        console.log(body);
      } else if (typeof print === "function") {
        print(body);
      }
    }

    return body;
  }

  /**
   * Used by `compile` to generate a reusable function for the given `template`.
   */
  function _compile(template, options) {
    var args = "view,partials,stack,lookup,escapeHTML,renderSection,render";
    var body = parse(template, options);
    var fn = new Function(args, body);

    // This anonymous function wraps the generated function so we can do
    // argument coercion, setup some variables, and handle any errors
    // encountered while executing it.
    return function (view, partials) {
      partials = partials || {};

      var stack = [view]; // context stack

      try {
        return fn(view, partials, stack, lookup, escapeHTML, renderSection, render);
      } catch (e) {
        throw debug(e.error, template, e.line, options.file);
      }
    };
  }

  // Cache of pre-compiled templates.
  var _cache = {};

  /**
   * Clear the cache of compiled templates.
   */
  function clearCache() {
    _cache = {};
  }

  /**
   * Compiles the given `template` into a reusable function using the given
   * `options`. In addition to the options accepted by Mustache.parse,
   * recognized options include the following:
   *
   *   - cache    Set `false` to bypass any pre-compiled version of the given
   *              template. Otherwise, a given `template` string will be cached
   *              the first time it is parsed
   */
  function compile(template, options) {
    options = options || {};

    // Use a pre-compiled version from the cache if we have one.
    if (options.cache !== false) {
      if (!_cache[template]) {
        _cache[template] = _compile(template, options);
      }

      return _cache[template];
    }

    return _compile(template, options);
  }

  /**
   * High-level function that renders the given `template` using the given
   * `view` and `partials`. If you need to use any of the template options (see
   * `compile` above), you must compile in a separate step, and then call that
   * compiled function.
   */
  function render(template, view, partials) {
    return compile(template)(view, partials);
  }

})(Mustache);
/*!
  * Reqwest! A general purpose XHR connection manager
  * (c) Dustin Diaz 2012
  * https://github.com/ded/reqwest
  * license MIT
  */
;(function (name, context, definition) {
  context[name] = definition()
})('reqwest', this, function () {

  var win = window
    , doc = document
    , twoHundo = /^20\d$/
    , byTag = 'getElementsByTagName'
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , head = doc[byTag]('head')[0]
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          contentType: 'application/x-www-form-urlencoded'
        , requestedWith: xmlHttpRequest
        , accept: {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , xml:  'application/xml, text/xml'
            , html: 'text/html'
            , text: 'text/plain'
            , json: 'application/json, text/javascript'
            , js:   'application/javascript, text/javascript'
          }
      }

    , xhr = win[xmlHttpRequest]
        ? function () {
            return new XMLHttpRequest()
          }
        : function () {
            return new ActiveXObject('Microsoft.XMLHTTP')
          }

  function handleReadyState (r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (twoHundo.test(r.request.status))
          success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders (http, o) {
    var headers = o.headers || {}
      , h

    headers.Accept = headers.Accept
      || defaultHeaders.accept[o.type]
      || defaultHeaders.accept['*']

    // breaks cross-origin requests with legacy browsers
    if (!o.crossOrigin && !headers[requestedWith]) headers[requestedWith] = defaultHeaders.requestedWith
    if (!headers[contentType]) headers[contentType] = o.contentType || defaultHeaders.contentType
    for (h in headers)
      headers.hasOwnProperty(h) && http.setRequestHeader(h, headers[h])
  }

  function setCredentials (http, o) {
    if (typeof o.withCredentials !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o.withCredentials
    }
  }

  function generalCallback (data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp (o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o.jsonpCallback || 'callback' // the 'callback' key
      , cbval = o.jsonpCallbackName || reqwest.getcallbackPrefix(reqId)
      // , cbval = o.jsonpCallbackName || ('reqwest_' + reqId) // the 'callback' value
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1
      , isIE9 = navigator.userAgent.indexOf('MSIE 9.0') !== -1;

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    win[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10 && !isIE9) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      //
      // if this hack is used in IE10 jsonp callback are never called
      script.event = 'onclick'
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      o.success && o.success(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        o.error && o.error({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest (fn, err) {
    var o = this.o
      , method = (o.method || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o.url
      // convert non-string objects to query-string form unless o.processData is false
      , data = (o.processData !== false && o.data && typeof o.data !== 'string')
        ? reqwest.toQueryString(o.data)
        : (o.data || null)
      , http

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o.type == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o.type == 'jsonp') return handleJsonp(o, fn, err, url)

    http = xhr()
    http.open(method, url, true)
    setHeaders(http, o)
    setCredentials(http, o)
    http.onreadystatechange = handleReadyState(this, fn, err)
    o.before && o.before(http)
    http.send(data)
    return http
  }

  function Reqwest (o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType (url) {
    var m = url.match(/\.(json|jsonp|html|xml)(\?|$)/)
    return m ? m[1] : 'js'
  }

  function init (o, fn) {

    this.url = typeof o == 'string' ? o : o.url
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this
      , type = o.type || setType(this.url)

    fn = fn || function () {}

    if (o.timeout) {
      this.timeout = setTimeout(function () {
        self.abort()
      }, o.timeout)
    }

    if (o.success) {
      this._fulfillmentHandlers.push(function () {
        o.success.apply(o, arguments)
      })
    }

    if (o.error) {
      this._errorHandlers.push(function () {
        o.error.apply(o, arguments)
      })
    }

    if (o.complete) {
      this._completeHandlers.push(function () {
        o.complete.apply(o, arguments)
      })
    }

    function complete (resp) {
      o.timeout && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      var r = resp.responseText
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = win.JSON ? win.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      while (self._fulfillmentHandlers.length > 0) {
        self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function error (resp, msg, t) {
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      if (this._fulfilled) {
        success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  }

  function reqwest (o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize (s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial (el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o.disabled)
            cb(n, normalize(o.attributes.value && o.attributes.value.specified ? o.value : o.text))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement () {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString () {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash () {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o) {
    var qs = '', i
      , enc = encodeURIComponent
      , push = function (k, v) {
          qs += enc(k) + '=' + enc(v) + '&'
        }
      , k, v

    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) push(o[i].name, o[i].value)
    } else {
      for (k in o) {
        if (!Object.hasOwnProperty.call(o, k)) continue
        v = o[k]
        if (isArray(v)) {
          for (i = 0; i < v.length; i++) push(k, v[i])
        } else push(k, o[k])
      }
    }

    // spaces should be + according to spec
    return qs.replace(/&$/, '').replace(/%20/g, '+')
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o.type && (o.method = o.type) && delete o.type
      o.dataType && (o.type = o.dataType)
      o.jsonpCallback && (o.jsonpCallbackName = o.jsonpCallback) && delete o.jsonpCallback
      o.jsonp && (o.jsonpCallback = o.jsonp)
    }
    return new Reqwest(o, fn)
  }

  return reqwest
})
;wax = wax || {};

// Attribution
// -----------
wax.attribution = function() {
    var a = {};

    var container = document.createElement('div');
    container.className = 'map-attribution';

    a.content = function(x) {
        if (typeof x === 'undefined') return container.innerHTML;
        container.innerHTML = wax.u.sanitize(x);
        return this;
    };

    a.element = function() {
        return container;
    };

    a.init = function() {
        return this;
    };

    return a;
};
wax = wax || {};

// Attribution
// -----------
wax.bwdetect = function(options, callback) {
    var detector = {},
        threshold = options.threshold || 400,
        // test image: 30.29KB
        testImage = 'http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache=' + (+new Date()),
        // High-bandwidth assumed
        // 1: high bandwidth (.png, .jpg)
        // 0: low bandwidth (.png128, .jpg70)
        bw = 1,
        // Alternative versions
        auto = options.auto === undefined ? true : options.auto;

    function bwTest() {
        wax.bw = -1;
        var im = new Image();
        im.src = testImage;
        var first = true;
        var timeout = setTimeout(function() {
            if (first && wax.bw == -1) {
                detector.bw(0);
                first = false;
            }
        }, threshold);
        im.onload = function() {
            if (first && wax.bw == -1) {
                clearTimeout(timeout);
                detector.bw(1);
                first = false;
            }
        };
    }

    detector.bw = function(x) {
        if (!arguments.length) return bw;
        var oldBw = bw;
        if (wax.bwlisteners && wax.bwlisteners.length) (function () {
            listeners = wax.bwlisteners;
            wax.bwlisteners = [];
            for (i = 0; i < listeners; i++) {
                listeners[i](x);
            }
        })();
        wax.bw = x;

        if (bw != (bw = x)) callback(x);
    };

    detector.add = function() {
        if (auto) bwTest();
        return this;
    };

    if (wax.bw == -1) {
      wax.bwlisteners = wax.bwlisteners || [];
      wax.bwlisteners.push(detector.bw);
    } else if (wax.bw !== undefined) {
        detector.bw(wax.bw);
    } else {
        detector.add();
    }
    return detector;
};
// Formatter
// ---------
//
// This code is no longer the recommended code path for Wax -
// see `template.js`, a safe implementation of Mustache templates.
wax.formatter = function(x) {
    var formatter = {},
        f;

    // Prevent against just any input being used.
    if (x && typeof x === 'string') {
        try {
            // Ugly, dangerous use of eval.
            eval('f = ' + x);
        } catch (e) {
            if (console) console.log(e);
        }
    } else if (x && typeof x === 'function') {
        f = x;
    } else {
        f = function() {};
    }

    // Wrap the given formatter function in order to
    // catch exceptions that it may throw.
    formatter.format = function(options, data) {
        try {
            return wax.u.sanitize(f(options, data));
        } catch (e) {
            if (console) console.log(e);
        }
    };

    return formatter;
};
// GridInstance
// ------------
// GridInstances are queryable, fully-formed
// objects for acquiring features from events.
//
// This code ignores format of 1.1-1.2
wax.gi = function(grid_tile, options) {
    options = options || {};
    // resolution is the grid-elements-per-pixel ratio of gridded data.
    // The size of a tile element. For now we expect tiles to be squares.
    var instance = {},
        resolution = options.resolution || 4,
        tileSize = options.tileSize || 256;

    // Resolve the UTF-8 encoding stored in grids to simple
    // number values.
    // See the [utfgrid spec](https://github.com/mapbox/utfgrid-spec)
    // for details.
    function resolveCode(key) {
        if (key >= 93) key--;
        if (key >= 35) key--;
        key -= 32;
        return key;
    }

    instance.grid_tile = function() {
        return grid_tile;
    };

    instance.getKey = function(x, y) {
        if (!(grid_tile && grid_tile.grid)) return;
        if ((y < 0) || (x < 0)) return;
        if ((Math.floor(y) >= tileSize) ||
            (Math.floor(x) >= tileSize)) return;
        // Find the key in the grid. The above calls should ensure that
        // the grid's array is large enough to make this work.
        return resolveCode(grid_tile.grid[
           Math.floor((y) / resolution)
        ].charCodeAt(
           Math.floor((x) / resolution)
        ));
    };

    // Lower-level than tileFeature - has nothing to do
    // with the DOM. Takes a px offset from 0, 0 of a grid.
    instance.gridFeature = function(x, y) {
        // Find the key in the grid. The above calls should ensure that
        // the grid's array is large enough to make this work.
        var key = this.getKey(x, y),
            keys = grid_tile.keys;

        if (keys &&
            keys[key] &&
            grid_tile.data[keys[key]]) {
            return grid_tile.data[keys[key]];
        }
    };

    // Get a feature:
    // * `x` and `y`: the screen coordinates of an event
    // * `tile_element`: a DOM element of a tile, from which we can get an offset.
    instance.tileFeature = function(x, y, tile_element) {
        if (!grid_tile) return;
        // IE problem here - though recoverable, for whatever reason
        var offset = wax.u.offset(tile_element);
            feature = this.gridFeature(x - offset.left, y - offset.top);
        return feature;
    };

    return instance;
};
// GridManager
// -----------
// Generally one GridManager will be used per map.
//
// It takes one options object, which current accepts a single option:
// `resolution` determines the number of pixels per grid element in the grid.
// The default is 4.
wax.gm = function() {

    var resolution = 4,
        grid_tiles = {},
        manager = {},
        tilejson,
        formatter;

    var gridUrl = function(url) {
        if (url) {
            return url.replace(/(\.png|\.jpg|\.jpeg)(\d*)/, '.grid.json');
        }
    };

    function templatedGridUrl(template) {
        if (typeof template === 'string') template = [template];
        return function templatedGridFinder(url) {
            if (!url) return;
            var rx = new RegExp(manager.tileRegexp())
            var xyz = rx.exec(url);
            if (!xyz) return;
            return template[parseInt(xyz[2], 10) % template.length]
                .replace(/\{z\}/g, xyz[1])
                .replace(/\{x\}/g, xyz[2])
                .replace(/\{y\}/g, xyz[3]);
        };
    }

    // return the regexp to catch the tile number given the url
    manager.tileRegexp = function() {
      var tileTemplate = tilejson.tiles[0];
      // remove params
      var p = tileTemplate.indexOf('?');
      if(p !== -1) {
        tileTemplate = tileTemplate.substr(0, p);
      }
      // remove from the url all the special characters
      // replacing them by a dot (dont mind the character)
      tileTemplate = tileTemplate.
                        replace(/[\(\)\?\$\*\+\^]/g,'.')

      // the browser removes the port in the case it matchs with
      // the default port of the protocol
      if(tileTemplate.indexOf('https') === 0) {
        tileTemplate = tileTemplate.replace(':443', '[:0-9]*')
      } else if(tileTemplate.indexOf('http') === 0) {
        tileTemplate = tileTemplate.replace(':80', '[:0-9]*')
      }

      var r = '';
      if(tilejson.tiles.length > 1) {
        var t0 = tilejson.tiles[0];
        var t1 = tilejson.tiles[1];
        //search characters where differs
        for(var i = 0; i < t0.length; ++i) {
          if(t0.charAt(i) != t1.charAt(i)) {
            r += '.';
          } else {
            r += tileTemplate.charAt(i) || '';
          }
        }
      } else {
        r = tileTemplate;
      }

      // replace the first {x}{y}{z} by (\\d+)
      return r
        .replace(/\{x\}/,'(\\d+)')
        .replace(/\{y\}/,'(\\d+)')
        .replace(/\{z\}/,'(\\d+)')
    }

    manager.formatter = function(x) {
        if (!arguments.length) return formatter;
        formatter =  wax.formatter(x);
        return manager;
    };

    manager.template = function(x) {
        if (!arguments.length) return formatter;
        formatter = wax.template(x);
        return manager;
    };

    manager.gridUrl = function(x) {
        // Getter-setter
        if (!arguments.length) return gridUrl;

        // Handle tilesets that don't support grids
        if (!x) {
            gridUrl = function() { return null; };
        } else {
            gridUrl = typeof x === 'function' ?
                x : templatedGridUrl(x);
        }
        return manager;
    };

    manager.getGrid = function(url, callback) {
        var gurl = gridUrl(url);
        if (!formatter || !gurl) return callback(null, null);

        wax.request.get(gurl, function(err, t) {
            if (err) return callback(err, null);
            callback(null, wax.gi(t, {
                formatter: formatter,
                resolution: resolution
            }));
        });
        return manager;
    };

    manager.tilejson = function(x) {
        if (!arguments.length) return tilejson;
        // prefer templates over formatters
        if (x.template) {
            manager.template(x.template);
        } else if (x.formatter) {
            manager.formatter(x.formatter);
        } else {
            // In this case, we cannot support grids
            formatter = undefined;
        }
        manager.gridUrl(x.grids);
        if (x.resolution) resolution = x.resolution;
        tilejson = x;
        return manager;
    };

    return manager;
};
wax = wax || {};

// Hash
// ----
wax.hash = function(options) {
    options = options || {};

    var s0, // old hash
        hash = {},
        lat = 90 - 1e-8;  // allowable latitude range

    function getState() {
        return location.hash.substring(1);
    }

    function pushState(state) {
        var l = window.location;
        l.replace(l.toString().replace((l.hash || /$/), '#' + state));
    }

    function parseHash(s) {
        var args = s.split('/');
        for (var i = 0; i < args.length; i++) {
            args[i] = Number(args[i]);
            if (isNaN(args[i])) return true;
        }
        if (args.length < 3) {
            // replace bogus hash
            return true;
        } else if (args.length == 3) {
            options.setCenterZoom(args);
        }
    }

    function move() {
        var s1 = options.getCenterZoom();
        if (s0 !== s1) {
            s0 = s1;
            // don't recenter the map!
            pushState(s0);
        }
    }

    function stateChange(state) {
        // ignore spurious hashchange events
        if (state === s0) return;
        if (parseHash(s0 = state)) {
            // replace bogus hash
            move();
        }
    }

    var _move = wax.u.throttle(move, 500);

    hash.add = function() {
        stateChange(getState());
        options.bindChange(_move);
        return hash;
    };

    hash.remove = function() {
        options.unbindChange(_move);
        return hash;
    };

    return hash;
};
wax = wax || {};

wax.interaction = function() {
    var gm = wax.gm(),
        interaction = {},
        _downLock = false,
        _clickTimeout = null,
        // Active feature
        // Down event
        _d,
        // Touch tolerance
        tol = 4,
        grid,
        attach,
        detach,
        parent,
        map,
        tileGrid;

    var defaultEvents = {
        mousemove: onMove,
        touchstart: onDown,
        mousedown: onDown
    };

    var touchEnds = {
        touchend: onUp,
        touchmove: onUp,
        touchcancel: touchCancel
    };

    var pointerEnds = {
        MSPointerUp: onUp,
        MSPointerMove: onUp,
        MSPointerCancel: touchCancel
    };

    // Abstract getTile method. Depends on a tilegrid with
    // grid[ [x, y, tile] ] structure.
    function getTile(e) {
        var g = grid();
        var regExp = new RegExp(gm.tileRegexp());
        for (var i = 0; i < g.length; i++) {
            if (e) {
                var isInside = ((g[i][0] <= e.y) &&
                     ((g[i][0] + 256) > e.y) &&
                      (g[i][1] <= e.x) &&
                     ((g[i][1] + 256) > e.x));
                if(isInside && regExp.exec(g[i][2].src)) {
                    return g[i][2];
                }
            }
        }
        return false;
    }

    // Clear the double-click timeout to prevent double-clicks from
    // triggering popups.
    function killTimeout() {
        if (_clickTimeout) {
            window.clearTimeout(_clickTimeout);
            _clickTimeout = null;
            return true;
        } else {
            return false;
        }
    }

    function onMove(e) {
        // If the user is actually dragging the map, exit early
        // to avoid performance hits.
        if (_downLock) return;

        var _e = (e.type != "MSPointerMove" ? e : e.originalEvent);
        var pos = wax.u.eventoffset(_e);

        interaction.screen_feature(pos, function(feature) {
            if (feature) {
                bean.fire(interaction, 'on', {
                    parent: parent(),
                    data: feature,
                    formatter: gm.formatter().format,
                    e: e
                });
            } else {
                bean.fire(interaction, 'off');
            }
        });
    }

    // A handler for 'down' events - which means `mousedown` and `touchstart`
    function onDown(e) {

        // Prevent interaction offset calculations happening while
        // the user is dragging the map.
        //
        // Store this event so that we can compare it to the
        // up event
        _downLock = true;
        var _e = (e.type != "MSPointerDown" ? e : e.originalEvent); 
        _d = wax.u.eventoffset(_e);
        if (e.type === 'mousedown') {
            bean.add(document.body, 'click', onUp);
            // track mouse up to remove lockDown when the drags end
            bean.add(document.body, 'mouseup', dragEnd);

        // Only track single-touches. Double-touches will not affect this
        // control
        } else if (e.type === 'touchstart' && e.touches.length === 1) {
            // Don't make the user click close if they hit another tooltip
            bean.fire(interaction, 'off');
            // Touch moves invalidate touches
            bean.add(parent(), touchEnds);
        } else if (e.originalEvent.type === "MSPointerDown" && e.originalEvent.touches.length === 1) {
          // Don't make the user click close if they hit another tooltip
            bean.fire(interaction, 'off');
            // Touch moves invalidate touches
            bean.add(parent(), pointerEnds);
        }

    }

    function dragEnd() {
        _downLock = false;
    }

    function touchCancel() {
        bean.remove(parent(), touchEnds);
        bean.remove(parent(), pointerEnds);
        _downLock = false;
    }

    function onUp(e) {
        var evt = {},
            _e = (e.type != "MSPointerMove" && e.type != "MSPointerUp" ? e : e.originalEvent),
            pos = wax.u.eventoffset(_e);
        _downLock = false;

        for (var key in _e) {
          evt[key] = _e[key];
        }

        // for (var key in e) {
        //   evt[key] = e[key];
        // }


        evt.changedTouches = [];

        bean.remove(document.body, 'mouseup', onUp);
        bean.remove(parent(), touchEnds);
        bean.remove(parent(), pointerEnds);

        if (e.type === 'touchend') {
            // If this was a touch and it survived, there's no need to avoid a double-tap
            // but also wax.u.eventoffset will have failed, since this touch
            // event doesn't have coordinates
            interaction.click(e, _d);
        } else if (evt.type === "MSPointerMove" || evt.type === "MSPointerUp") {
            interaction.click(evt, pos);
        } else if (Math.round(pos.y / tol) === Math.round(_d.y / tol) &&
            Math.round(pos.x / tol) === Math.round(_d.x / tol)) {
            // Contain the event data in a closure.
            // Ignore double-clicks by ignoring clicks within 300ms of
            // each other.
            if(!_clickTimeout) {
              _clickTimeout = window.setTimeout(function() {
                  _clickTimeout = null;
                  interaction.click(evt, pos);
              }, 150);
            } else {
              killTimeout();
            }
        }
        return onUp;
    }

    // Handle a click event. Takes a second
    interaction.click = function(e, pos) {
        interaction.screen_feature(pos, function(feature) {
            if (feature) bean.fire(interaction, 'on', {
                parent: parent(),
                data: feature,
                formatter: gm.formatter().format,
                e: e
            });
        });
    };

    interaction.screen_feature = function(pos, callback) {
        var tile = getTile(pos);
        if (!tile) callback(null);
        gm.getGrid(tile.src, function(err, g) {
            if (err || !g) return callback(null);
            var feature = g.tileFeature(pos.x, pos.y, tile);
            callback(feature);
        });
    };

    // set an attach function that should be
    // called when maps are set
    interaction.attach = function(x) {
        if (!arguments.length) return attach;
        attach = x;
        return interaction;
    };

    interaction.detach = function(x) {
        if (!arguments.length) return detach;
        detach = x;
        return interaction;
    };

    // Attach listeners to the map
    interaction.map = function(x) {
        if (!arguments.length) return map;
        map = x;
        if (attach) attach(map);
        bean.add(parent(), defaultEvents);
        bean.add(parent(), 'touchstart', onDown);
        bean.add(parent(), 'MSPointerDown', onDown);
        return interaction;
    };

    // set a grid getter for this control
    interaction.grid = function(x) {
        if (!arguments.length) return grid;
        grid = x;
        return interaction;
    };

    // detach this and its events from the map cleanly
    interaction.remove = function(x) {
        if (detach) detach(map);
        bean.remove(parent(), defaultEvents);
        bean.fire(interaction, 'remove');
        return interaction;
    };

    // get or set a tilejson chunk of json
    interaction.tilejson = function(x) {
        if (!arguments.length) return gm.tilejson();
        gm.tilejson(x);
        return interaction;
    };

    // return the formatter, which has an exposed .format
    // function
    interaction.formatter = function() {
        return gm.formatter();
    };

    // ev can be 'on', 'off', fn is the handler
    interaction.on = function(ev, fn) {
        bean.add(interaction, ev, fn);
        return interaction;
    };

    // ev can be 'on', 'off', fn is the handler
    interaction.off = function(ev, fn) {
        bean.remove(interaction, ev, fn);
        return interaction;
    };

    // Return or set the gridmanager implementation
    interaction.gridmanager = function(x) {
        if (!arguments.length) return gm;
        gm = x;
        return interaction;
    };

    // parent should be a function that returns
    // the parent element of the map
    interaction.parent  = function(x) {
        parent = x;
        return interaction;
    };

    return interaction;
};
var wax = wax || {};

wax.location = function() {

    var t = {};

    function on(o) {
        if ((o.e.type === 'mousemove' || !o.e.type)) {
            return;
        } else {
            var loc = o.formatter({ format: 'location' }, o.data);
            if (loc) {
                window.location.href = loc;
            }
        }
    }

    t.events = function() {
        return {
            on: on
        };
    };

    return t;

};
// Wax GridUtil
// ------------

// Wax header
var wax = wax || {};

// Request
// -------
// Request data cache. `callback(data)` where `data` is the response data.
wax.request = {
    cache: {},
    locks: {},
    promises: {},
    get: function(url, callback) {
        // Cache hit.
        if (this.cache[url]) {
            return callback(this.cache[url][0], this.cache[url][1]);
        // Cache miss.
        } else {
            this.promises[url] = this.promises[url] || [];
            this.promises[url].push(callback);
            // Lock hit.
            if (this.locks[url]) return;
            // Request.
            var that = this;
            this.locks[url] = true;
            reqwest({
                url: url + (~url.indexOf('?') ? '&' : '?') + 'callback=grid',
                type: 'jsonp',
                jsonpCallback: 'callback',
                success: function(data) {
                    that.locks[url] = false;
                    that.cache[url] = [null, data];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                },
                error: function(err) {
                    that.locks[url] = false;
                    that.cache[url] = [err, null];
                    for (var i = 0; i < that.promises[url].length; i++) {
                        that.promises[url][i](that.cache[url][0], that.cache[url][1]);
                    }
                }
            });
        }
    }
};
// Templating
// ---------
wax.template = function(x) {
    var template = {};

    // Clone the data object such that the '__[format]__' key is only
    // set for this instance of templating.
    template.format = function(options, data) {
        var clone = {};
        for (var key in data) {
            clone[key] = data[key];
        }
        if (options.format) {
            clone['__' + options.format + '__'] = true;
        }
        return wax.u.sanitize(Mustache.to_html(x, clone));
    };

    return template;
};
if (!wax) var wax = {};

// A wrapper for reqwest jsonp to easily load TileJSON from a URL.
wax.tilejson = function(url, callback) {
    reqwest({
        url: url + (~url.indexOf('?') ? '&' : '?') + 'callback=grid',
        type: 'jsonp',
        jsonpCallback: 'callback',
        success: callback,
        error: callback
    });
};
var wax = wax || {};

// Utils are extracted from other libraries or
// written from scratch to plug holes in browser compatibility.
wax.u = {
    // From Bonzo
    offset: function(el) {
        // TODO: window margins
        //
        // Okay, so fall back to styles if offsetWidth and height are botched
        // by Firefox.
        var width = el.offsetWidth || parseInt(el.style.width, 10),
            height = el.offsetHeight || parseInt(el.style.height, 10),
            doc_body = document.body,
            top = 0,
            left = 0;

        var calculateOffset = function(el) {
            if (el === doc_body || el === document.documentElement) return;
            top += el.offsetTop;
            left += el.offsetLeft;

            var style = el.style.transform ||
                el.style.WebkitTransform ||
                el.style.OTransform ||
                el.style.MozTransform ||
                el.style.msTransform;

            if (style) {
                var match;
                if (match = style.match(/translate\((.+)px, (.+)px\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                } else if (match = style.match(/translate3d\((.+)px, (.+)px, (.+)px\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                } else if (match = style.match(/matrix3d\(([\-\d,\s]+)\)/)) {
                    var pts = match[1].split(',');
                    top += parseInt(pts[13], 10);
                    left += parseInt(pts[12], 10);
                } else if (match = style.match(/matrix\(.+, .+, .+, .+, (.+), (.+)\)/)) {
                    top += parseInt(match[2], 10);
                    left += parseInt(match[1], 10);
                }
            }
        };

        // from jquery, offset.js
        if ( typeof el.getBoundingClientRect !== "undefined" ) {
          var body = document.body;
          var doc = el.ownerDocument.documentElement;
          var clientTop  = document.clientTop  || body.clientTop  || 0;
          var clientLeft = document.clientLeft || body.clientLeft || 0;
          var scrollTop  = window.pageYOffset || doc.scrollTop;
          var scrollLeft = window.pageXOffset || doc.scrollLeft;

          var box = el.getBoundingClientRect();
          top = box.top + scrollTop  - clientTop;
          left = box.left + scrollLeft - clientLeft;

        } else {
          calculateOffset(el);
          try {
              while (el = el.offsetParent) { calculateOffset(el); }
          } catch(e) {
              // Hello, internet explorer.
          }
        }

        // Offsets from the body
        top += doc_body.offsetTop;
        left += doc_body.offsetLeft;
        // Offsets from the HTML element
        top += doc_body.parentNode.offsetTop;
        left += doc_body.parentNode.offsetLeft;

        // Firefox and other weirdos. Similar technique to jQuery's
        // `doesNotIncludeMarginInBodyOffset`.
        var htmlComputed = document.defaultView ?
            window.getComputedStyle(doc_body.parentNode, null) :
            doc_body.parentNode.currentStyle;
        if (doc_body.parentNode.offsetTop !==
            parseInt(htmlComputed.marginTop, 10) &&
            !isNaN(parseInt(htmlComputed.marginTop, 10))) {
            top += parseInt(htmlComputed.marginTop, 10);
            left += parseInt(htmlComputed.marginLeft, 10);
        }

        return {
            top: top,
            left: left,
            height: height,
            width: width
        };
    },

    '$': function(x) {
        return (typeof x === 'string') ?
            document.getElementById(x) :
            x;
    },

    // From quirksmode: normalize the offset of an event from the top-left
    // of the page.
    eventoffset: function(e) {
        var posx = 0;
        var posy = 0;
        if (!e) { e = window.event; }
        if (e.type == "MSPointerMove" || e.type == "MSPointerDown" || e.type == "MSPointerUp") {
          return {
            x: e.pageX + window.pageXOffset,
            y: e.pageY + window.pageYOffset
          }
        }
        if (e.pageX || e.pageY) {
            // Good browsers
            return {
                x: e.pageX,
                y: e.pageY
            };
        } else if (e.clientX || e.clientY) {
            // Internet Explorer
            return {
                x: e.clientX,
                y: e.clientY
            };
        } else if (e.touches && e.touches.length === 1) {
            // Touch browsers
            return {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            };
        }
    },

    // Ripped from underscore.js
    // Internal function used to implement `_.throttle` and `_.debounce`.
    limit: function(func, wait, debounce) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var throttler = function() {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    },

    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time.
    throttle: function(func, wait) {
        return this.limit(func, wait, false);
    },

    sanitize: function(content) {
        if (!content) return '';

        function urlX(url) {
            // Data URIs are subject to a bug in Firefox
            // https://bugzilla.mozilla.org/show_bug.cgi?id=255107
            // which let them be a vector. But WebKit does 'the right thing'
            // or at least 'something' about this situation, so we'll tolerate
            // them.
            if (/^(https?:\/\/|data:image)/.test(url)) {
                return url;
            }
        }

        function idX(id) { return id; }

        return html_sanitize(content, urlX, idX);
    }
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.hash = function(map) {
    return wax.hash({
        getCenterZoom: function () {
            var center = map.getCenter(),
                zoom = map.getZoom(),
                precision = Math.max(
                    0,
                    Math.ceil(Math.log(zoom) / Math.LN2));

            return [
                zoom,
                center.lat.toFixed(precision),
                center.lng.toFixed(precision)
            ].join('/');
        },

        setCenterZoom: function (args) {
            map.setView(new L.LatLng(args[1], args[2]), args[0]);
        },

        bindChange: function (fn) {
            map.on('moveend', fn);
        },

        unbindChange: function (fn) {
            map.off('moveend', fn);
        }
    });
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.interaction = function() {
    var dirty = false, _grid, map;

    function setdirty() { dirty = true; }

    function grid() {
        // TODO: don't build for tiles outside of viewport
        // Touch interaction leads to intermediate
        //var zoomLayer = map.createOrGetLayer(Math.round(map.getZoom())); //?what is this doing?
        // Calculate a tile grid and cache it, by using the `.tiles`
        // element on this map.
        if (!dirty && _grid) {
            return _grid;
        } else {
            return (_grid = (function(layers) {
                var o = [];
                for (var layerId in layers) {
                    // This only supports tiled layers
                    if (layers[layerId]._tiles) {
                        for (var tile in layers[layerId]._tiles) {
                            var _tile = layers[layerId]._tiles[tile];
                            // avoid adding tiles without src, grid url can't be found for them
                            if(_tile.src) {
                              var offset = wax.u.offset(_tile);
                              o.push([offset.top, offset.left, _tile]);
                            }
                        }
                    }
                }
                return o;
            })(map._layers));
        }
    }

    function attach(x) {
        if (!arguments.length) return map;
        map = x;
        var l = ['moveend'];
        for (var i = 0; i < l.length; i++) {
            map.on(l[i], setdirty);
        }
    }

    function detach(x) {
        if (!arguments.length) return map;
        map = x;
        var l = ['moveend'];
        for (var i = 0; i < l.length; i++) {
            map.off(l[i], setdirty);
        }
    }

    return wax.interaction()
        .attach(attach)
        .detach(detach)
        .parent(function() {
          return map._container;
        })
        .grid(grid);
};
wax = wax || {};
wax.leaf = wax.leaf || {};

wax.leaf.connector = L.TileLayer.extend({
    initialize: function(options) {
        options = options || {};
        options.minZoom = options.minzoom || 0;
        options.maxZoom = options.maxzoom || 22;
        L.TileLayer.prototype.initialize.call(this, options.tiles[0], options);
    }
});
wax = wax || {};
wax.g = wax.g || {};

// Attribution
// -----------
// Attribution wrapper for Google Maps.
wax.g.attribution = function(map, tilejson) {
    tilejson = tilejson || {};
    var a, // internal attribution control
        attribution = {};

    attribution.element = function() {
        return a.element();
    };

    attribution.appendTo = function(elem) {
        wax.u.$(elem).appendChild(a.element());
        return this;
    };

    attribution.init = function() {
        a = wax.attribution();
        a.content(tilejson.attribution);
        a.element().className = 'map-attribution map-g';
        return this;
    };

    return attribution.init();
};
wax = wax || {};
wax.g = wax.g || {};

// Bandwidth Detection
// ------------------
wax.g.bwdetect = function(map, options) {
    options = options || {};
    var lowpng = options.png || '.png128',
        lowjpg = options.jpg || '.jpg70';

    // Create a low-bandwidth map type.
    if (!map.mapTypes['mb-low']) {
        var mb = map.mapTypes.mb;
        var tilejson = {
            tiles: [],
            scheme: mb.options.scheme,
            blankImage: mb.options.blankImage,
            minzoom: mb.minZoom,
            maxzoom: mb.maxZoom,
            name: mb.name,
            description: mb.description
        };
        for (var i = 0; i < mb.options.tiles.length; i++) {
            tilejson.tiles.push(mb.options.tiles[i]
                .replace('.png', lowpng)
                .replace('.jpg', lowjpg));
        }
        m.mapTypes.set('mb-low', new wax.g.connector(tilejson));
    }

    return wax.bwdetect(options, function(bw) {
      map.setMapTypeId(bw ? 'mb' : 'mb-low');
    });
};
wax = wax || {};
wax.g = wax.g || {};

wax.g.hash = function(map) {
    return wax.hash({
        getCenterZoom: function() {
            var center = map.getCenter(),
                zoom = map.getZoom(),
                precision = Math.max(
                    0,
                    Math.ceil(Math.log(zoom) / Math.LN2));
            return [zoom.toFixed(2),
                center.lat().toFixed(precision),
                center.lng().toFixed(precision)
            ].join('/');
        },
        setCenterZoom: function setCenterZoom(args) {
            map.setCenter(new google.maps.LatLng(args[1], args[2]));
            map.setZoom(args[0]);
        },
        bindChange: function(fn) {
            google.maps.event.addListener(map, 'idle', fn);
        },
        unbindChange: function(fn) {
            google.maps.event.removeListener(map, 'idle', fn);
        }
    });
};
wax = wax || {};
wax.g = wax.g || {};

wax.g.interaction = function() {
    var dirty = false, _grid, map;
    var tileloadListener = null,
        idleListener = null;

    function setdirty() { dirty = true; }

    function grid() {

        if (!dirty && _grid) {
            return _grid;
        } else {
            _grid = [];
            var zoom = map.getZoom();
            var mapOffset = wax.u.offset(map.getDiv());
            var get = function(mapType) {
                if (!mapType.interactive) return;
                for (var key in mapType.cache) {
                    if (key.split('/')[0] != zoom) continue;
                    var tileOffset = wax.u.offset(mapType.cache[key]);
                    _grid.push([
                        tileOffset.top,
                        tileOffset.left,
                        mapType.cache[key]
                    ]);
                }
            };
            // Iterate over base mapTypes and overlayMapTypes.
            for (var i in map.mapTypes) get(map.mapTypes[i]);
            map.overlayMapTypes.forEach(get);
        }
        return _grid;
    }

    function attach(x) {
        if (!arguments.length) return map;
        map = x;
        tileloadListener = google.maps.event.addListener(map, 'tileloaded',
            setdirty);
        idleListener = google.maps.event.addListener(map, 'idle',
            setdirty);
    }

    function detach(x) {
        if(tileloadListener)
          google.maps.event.removeListener(tileloadListener);
        if(idleListener)
          google.maps.event.removeListener(idleListener);
    }



    return wax.interaction()
        .attach(attach)
        .detach(detach)
        .parent(function() {
          return map.getDiv();
        })
        .grid(grid);
};
// Wax for Google Maps API v3
// --------------------------

// Wax header
var wax = wax || {};
wax.g = wax.g || {};

// Wax Google Maps MapType: takes an object of options in the form
//
//     {
//       name: '',
//       filetype: '.png',
//       layerName: 'world-light',
//       alt: '',
//       zoomRange: [0, 18],
//       baseUrl: 'a url',
//     }
wax.g.connector = function(options) {
    options = options || {};

    this.options = {
        tiles: options.tiles,
        scheme: options.scheme || 'xyz',
        blankImage: options.blankImage || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
    };

    this.opacity = options.opacity || 0;
    this.minZoom = options.minzoom || 0;
    this.maxZoom = options.maxzoom || 22;

    this.name = options.name || '';
    this.description = options.description || '';

    // non-configurable options
    this.interactive = true;
    this.tileSize = new google.maps.Size(256, 256);

    // DOM element cache
    this.cache = {};
};

// Get a tile element from a coordinate, zoom level, and an ownerDocument.
wax.g.connector.prototype.getTile = function(coord, zoom, ownerDocument) {
    var key = zoom + '/' + coord.x + '/' + coord.y;
    if (!this.cache[key]) {
        var img = this.cache[key] = new Image(256, 256);
        this.cache[key].src = this.getTileUrl(coord, zoom);
        this.cache[key].setAttribute('gTileKey', key);
        this.cache[key].setAttribute("style","opacity: "+this.opacity+"; filter: alpha(opacity="+(this.opacity*100)+");");
        this.cache[key].onerror = function() { img.style.display = 'none'; };
    }
    return this.cache[key];
};

// Remove a tile that has fallen out of the map's viewport.
//
// TODO: expire cache data in the gridmanager.
wax.g.connector.prototype.releaseTile = function(tile) {
    var key = tile.getAttribute('gTileKey');
    if (this.cache[key]) delete this.cache[key];
    if (tile.parentNode) tile.parentNode.removeChild(tile);
};

// Get a tile url, based on x, y coordinates and a z value.
wax.g.connector.prototype.getTileUrl = function(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    var mod = Math.pow(2, z),
        y = (this.options.scheme === 'tms') ?
            (mod - 1) - coord.y :
            coord.y,
        x = (coord.x % mod);

    x = (x < 0) ? (coord.x % mod) + mod : x;

    if (y < 0) return this.options.blankImage;

    return this.options.tiles
        [parseInt(x + y, 10) %
            this.options.tiles.length]
                .replace(/\{z\}/g, z)
                .replace(/\{x\}/g, x)
                .replace(/\{y\}/g, y);
};
var GeoJSON = function( geojson, options ){

  var _geometryToGoogleMaps = function( geojsonGeometry, opts, geojsonProperties ){

    var googleObj;

    switch ( geojsonGeometry.type ){
      case "Point":
        opts.position = new google.maps.LatLng(geojsonGeometry.coordinates[1], geojsonGeometry.coordinates[0]);
        googleObj = new google.maps.Marker(opts);
        if (geojsonProperties) {
          googleObj.set("geojsonProperties", geojsonProperties);
        }
        break;

      case "MultiPoint":
        googleObj = [];
        for (var i = 0; i < geojsonGeometry.coordinates.length; i++){
          opts.position = new google.maps.LatLng(geojsonGeometry.coordinates[i][1], geojsonGeometry.coordinates[i][0]);
          googleObj.push(new google.maps.Marker(opts));
        }
        if (geojsonProperties) {
          for (var k = 0; k < googleObj.length; k++){
            googleObj[k].set("geojsonProperties", geojsonProperties);
          }
        }
        break;

      case "LineString":
        var path = [];
        for (var i = 0; i < geojsonGeometry.coordinates.length; i++){
          var coord = geojsonGeometry.coordinates[i];
          var ll = new google.maps.LatLng(coord[1], coord[0]);
          path.push(ll);
        }
        opts.path = path;
        googleObj = new google.maps.Polyline(opts);
        if (geojsonProperties) {
          googleObj.set("geojsonProperties", geojsonProperties);
        }
        break;

      case "MultiLineString":
        googleObj = [];
        for (var i = 0; i < geojsonGeometry.coordinates.length; i++){
          var path = [];
          for (var j = 0; j < geojsonGeometry.coordinates[i].length; j++){
            var coord = geojsonGeometry.coordinates[i][j];
            var ll = new google.maps.LatLng(coord[1], coord[0]);
            path.push(ll);
          }
          opts.path = path;
          googleObj.push(new google.maps.Polyline(opts));
        }
        if (geojsonProperties) {
          for (var k = 0; k < googleObj.length; k++){
            googleObj[k].set("geojsonProperties", geojsonProperties);
          }
        }
        break;

      case "Polygon":
        var paths = [];
        var exteriorDirection;
        var interiorDirection;
        for (var i = 0; i < geojsonGeometry.coordinates.length; i++){
          var path = [];
          for (var j = 0; j < geojsonGeometry.coordinates[i].length; j++){
            var ll = new google.maps.LatLng(geojsonGeometry.coordinates[i][j][1], geojsonGeometry.coordinates[i][j][0]);
            path.push(ll);
          }
          if(!i){
            exteriorDirection = _ccw(path);
            paths.push(path);
          }else if(i == 1){
            interiorDirection = _ccw(path);
            if(exteriorDirection == interiorDirection){
              paths.push(path.reverse());
            }else{
              paths.push(path);
            }
          }else{
            if(exteriorDirection == interiorDirection){
              paths.push(path.reverse());
            }else{
              paths.push(path);
            }
          }
        }
        opts.paths = paths;
        googleObj = new google.maps.Polygon(opts);
        if (geojsonProperties) {
          googleObj.set("geojsonProperties", geojsonProperties);
        }
        break;

      case "MultiPolygon":
        googleObj = [];
        for (var i = 0; i < geojsonGeometry.coordinates.length; i++){
          var paths = [];
          var exteriorDirection;
          var interiorDirection;
          for (var j = 0; j < geojsonGeometry.coordinates[i].length; j++){
            var path = [];
            for (var k = 0; k < geojsonGeometry.coordinates[i][j].length - 1; k++){
              var ll = new google.maps.LatLng(geojsonGeometry.coordinates[i][j][k][1], geojsonGeometry.coordinates[i][j][k][0]);
              path.push(ll);
            }
            if(!j){
              exteriorDirection = _ccw(path);
              paths.push(path);
            }else if(j == 1){
              interiorDirection = _ccw(path);
              if(exteriorDirection == interiorDirection){
                paths.push(path.reverse());
              }else{
                paths.push(path);
              }
            }else{
              if(exteriorDirection == interiorDirection){
                paths.push(path.reverse());
              }else{
                paths.push(path);
              }
            }
          }
          opts.paths = paths;
          googleObj.push(new google.maps.Polygon(opts));
        }
        if (geojsonProperties) {
          for (var k = 0; k < googleObj.length; k++){
            googleObj[k].set("geojsonProperties", geojsonProperties);
          }
        }
        break;

      case "GeometryCollection":
        googleObj = [];
        if (!geojsonGeometry.geometries){
          googleObj = _error("Invalid GeoJSON object: GeometryCollection object missing \"geometries\" member.");
        }else{
          for (var i = 0; i < geojsonGeometry.geometries.length; i++){
            googleObj.push(_geometryToGoogleMaps(geojsonGeometry.geometries[i], opts, geojsonProperties || null));
          }
        }
        break;

      default:
        googleObj = _error("Invalid GeoJSON object: Geometry object must be one of \"Point\", \"LineString\", \"Polygon\" or \"MultiPolygon\".");
    }

    return googleObj;

  };

  var _error = function( message ){

    return {
type: "Error",
        message: message
    };

  };

  var _ccw = function( path ){
    var isCCW;
    var a = 0;
    for (var i = 0; i < path.length-2; i++){
      a += ((path[i+1].lat() - path[i].lat()) * (path[i+2].lng() - path[i].lng()) - (path[i+2].lat() - path[i].lat()) * (path[i+1].lng() - path[i].lng()));
    }
    if(a > 0){
      isCCW = true;
    }
    else{
      isCCW = false;
    }
    return isCCW;
  };

  var obj;

  var opts = options || {};

  switch ( geojson.type ){

    case "FeatureCollection":
      if (!geojson.features){
        obj = _error("Invalid GeoJSON object: FeatureCollection object missing \"features\" member.");
      }else{
        obj = [];
        for (var i = 0; i < geojson.features.length; i++){
          obj.push(_geometryToGoogleMaps(geojson.features[i].geometry, opts, geojson.features[i].properties));
        }
      }
      break;

    case "GeometryCollection":
      if (!geojson.geometries){
        obj = _error("Invalid GeoJSON object: GeometryCollection object missing \"geometries\" member.");
      }else{
        obj = [];
        for (var i = 0; i < geojson.geometries.length; i++){
          obj.push(_geometryToGoogleMaps(geojson.geometries[i], opts));
        }
      }
      break;

    case "Feature":
      if (!( geojson.properties && geojson.geometry )){
        obj = _error("Invalid GeoJSON object: Feature object missing \"properties\" or \"geometry\" member.");
      }else{
        obj = _geometryToGoogleMaps(geojson.geometry, opts, geojson.properties);
      }
      break;

    case "Point": case "MultiPoint": case "LineString": case "MultiLineString": case "Polygon": case "MultiPolygon":
      obj = geojson.coordinates
        ? obj = _geometryToGoogleMaps(geojson, opts)
        : _error("Invalid GeoJSON object: Geometry object missing \"coordinates\" member.");
      break;

    default:
      obj = _error("Invalid GeoJSON object: GeoJSON object must be one of \"Point\", \"LineString\", \"Polygon\", \"MultiPolygon\", \"Feature\", \"FeatureCollection\" or \"GeometryCollection\".");

  }

  return obj;

};
/*!
 * jScrollPane - v2.0.0beta12 - 2012-09-27
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */

// Script: jScrollPane - cross browser customisable scrollbars
//
// *Version: 2.0.0beta12, Last updated: 2012-09-27*
//
// Project Home - http://jscrollpane.kelvinluck.com/
// GitHub       - http://github.com/vitch/jScrollPane
// Source       - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.js
// (Minified)   - http://github.com/vitch/jScrollPane/raw/master/script/jquery.jscrollpane.min.js
//
// About: License
//
// Copyright (c) 2012 Kelvin Luck
// Dual licensed under the MIT or GPL Version 2 licenses.
// http://jscrollpane.kelvinluck.com/MIT-LICENSE.txt
// http://jscrollpane.kelvinluck.com/GPL-LICENSE.txt
//
// About: Examples
//
// All examples and demos are available through the jScrollPane example site at:
// http://jscrollpane.kelvinluck.com/
//
// About: Support and Testing
//
// This plugin is tested on the browsers below and has been found to work reliably on them. If you run
// into a problem on one of the supported browsers then please visit the support section on the jScrollPane
// website (http://jscrollpane.kelvinluck.com/) for more information on getting support. You are also
// welcome to fork the project on GitHub if you can contribute a fix for a given issue. 
//
// jQuery Versions - tested in 1.4.2+ - reported to work in 1.3.x
// Browsers Tested - Firefox 3.6.8, Safari 5, Opera 10.6, Chrome 5.0, IE 6, 7, 8
//
// About: Release History
//
// 2.0.0beta12 - (2012-09-27) fix for jQuery 1.8+
// 2.0.0beta11 - (2012-05-14)
// 2.0.0beta10 - (2011-04-17) cleaner required size calculation, improved keyboard support, stickToBottom/Left, other small fixes
// 2.0.0beta9 - (2011-01-31) new API methods, bug fixes and correct keyboard support for FF/OSX
// 2.0.0beta8 - (2011-01-29) touchscreen support, improved keyboard support
// 2.0.0beta7 - (2011-01-23) scroll speed consistent (thanks Aivo Paas)
// 2.0.0beta6 - (2010-12-07) scrollToElement horizontal support
// 2.0.0beta5 - (2010-10-18) jQuery 1.4.3 support, various bug fixes
// 2.0.0beta4 - (2010-09-17) clickOnTrack support, bug fixes
// 2.0.0beta3 - (2010-08-27) Horizontal mousewheel, mwheelIntent, keyboard support, bug fixes
// 2.0.0beta2 - (2010-08-21) Bug fixes
// 2.0.0beta1 - (2010-08-17) Rewrite to follow modern best practices and enable horizontal scrolling, initially hidden
//               elements and dynamically sized elements.
// 1.x - (2006-12-31 - 2010-07-31) Initial version, hosted at googlecode, deprecated

(function($,window,undefined){

  $.fn.jScrollPane = function(settings)
  {
    // JScrollPane "class" - public methods are available through $('selector').data('jsp')
    function JScrollPane(elem, s)
    {
      var settings, jsp = this, pane, paneWidth, paneHeight, container, contentWidth, contentHeight,
        percentInViewH, percentInViewV, isScrollableV, isScrollableH, verticalDrag, dragMaxY,
        verticalDragPosition, horizontalDrag, dragMaxX, horizontalDragPosition,
        verticalBar, verticalTrack, scrollbarWidth, verticalTrackHeight, verticalDragHeight, arrowUp, arrowDown,
        horizontalBar, horizontalTrack, horizontalTrackWidth, horizontalDragWidth, arrowLeft, arrowRight,
        reinitialiseInterval, originalPadding, originalPaddingTotalWidth, previousContentWidth,
        wasAtTop = true, wasAtLeft = true, wasAtBottom = false, wasAtRight = false,
        originalElement = elem.clone(false, false).empty(),
        mwEvent = $.fn.mwheelIntent ? 'mwheelIntent.jsp' : 'mousewheel.jsp';

      originalPadding = elem.css('paddingTop') + ' ' +
                elem.css('paddingRight') + ' ' +
                elem.css('paddingBottom') + ' ' +
                elem.css('paddingLeft');
      originalPaddingTotalWidth = (parseInt(elem.css('paddingLeft'), 10) || 0) +
                    (parseInt(elem.css('paddingRight'), 10) || 0);

      function initialise(s)
      {

        var /*firstChild, lastChild, */isMaintainingPositon, lastContentX, lastContentY,
            hasContainingSpaceChanged, originalScrollTop, originalScrollLeft,
            maintainAtBottom = false, maintainAtRight = false;

        settings = s;

        if (pane === undefined) {
          originalScrollTop = elem.scrollTop();
          originalScrollLeft = elem.scrollLeft();

          elem.css(
            {
              overflow: 'hidden',
              padding: 0
            }
          );
          // TODO: Deal with where width/ height is 0 as it probably means the element is hidden and we should
          // come back to it later and check once it is unhidden...
          paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
          paneHeight = elem.innerHeight();

          elem.width(paneWidth);
          
          pane = $('<div class="jspPane" />').css('padding', originalPadding).append(elem.children());
          container = $('<div class="jspContainer" />')
            .css({
              'width': paneWidth + 'px',
              'height': paneHeight + 'px'
            }
          ).append(pane).appendTo(elem);

          /*
          // Move any margins from the first and last children up to the container so they can still
          // collapse with neighbouring elements as they would before jScrollPane 
          firstChild = pane.find(':first-child');
          lastChild = pane.find(':last-child');
          elem.css(
            {
              'margin-top': firstChild.css('margin-top'),
              'margin-bottom': lastChild.css('margin-bottom')
            }
          );
          firstChild.css('margin-top', 0);
          lastChild.css('margin-bottom', 0);
          */
        } else {
          elem.css('width', '');

          maintainAtBottom = settings.stickToBottom && isCloseToBottom();
          maintainAtRight  = settings.stickToRight  && isCloseToRight();

          hasContainingSpaceChanged = elem.innerWidth() + originalPaddingTotalWidth != paneWidth || elem.outerHeight() != paneHeight;

          if (hasContainingSpaceChanged) {
            paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
            paneHeight = elem.innerHeight();
            container.css({
              width: paneWidth + 'px',
              height: paneHeight + 'px'
            });
          }

          // If nothing changed since last check...
          if (!hasContainingSpaceChanged && previousContentWidth == contentWidth && pane.outerHeight() == contentHeight) {
            elem.width(paneWidth);
            return;
          }
          previousContentWidth = contentWidth;
          
          pane.css('width', '');
          elem.width(paneWidth);

          container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();
        }

        pane.css('overflow', 'auto');
        if (s.contentWidth) {
          contentWidth = s.contentWidth;
        } else {
          contentWidth = pane[0].scrollWidth;
        }
        contentHeight = pane[0].scrollHeight;
        pane.css('overflow', '');

        percentInViewH = contentWidth / paneWidth;
        percentInViewV = contentHeight / paneHeight;
        isScrollableV = percentInViewV > 1;

        isScrollableH = percentInViewH > 1;

        //console.log(paneWidth, paneHeight, contentWidth, contentHeight, percentInViewH, percentInViewV, isScrollableH, isScrollableV);

        if (!(isScrollableH || isScrollableV)) {
          elem.removeClass('jspScrollable');
          pane.css({
            top: 0,
            width: container.width() - originalPaddingTotalWidth
          });
          removeMousewheel();
          removeFocusHandler();
          removeKeyboardNav();
          removeClickOnTrack();
        } else {
          elem.addClass('jspScrollable');

          isMaintainingPositon = settings.maintainPosition && (verticalDragPosition || horizontalDragPosition);
          if (isMaintainingPositon) {
            lastContentX = contentPositionX();
            lastContentY = contentPositionY();
          }

          initialiseVerticalScroll();
          initialiseHorizontalScroll();
          resizeScrollbars();

          if (isMaintainingPositon) {
            scrollToX(maintainAtRight  ? (contentWidth  - paneWidth ) : lastContentX, false);
            scrollToY(maintainAtBottom ? (contentHeight - paneHeight) : lastContentY, false);
          }

          initFocusHandler();
          initMousewheel();
          initTouch();
          
          if (settings.enableKeyboardNavigation) {
            initKeyboardNav();
          }
          if (settings.clickOnTrack) {
            initClickOnTrack();
          }
          
          observeHash();
          if (settings.hijackInternalLinks) {
            hijackInternalLinks();
          }
        }

        if (settings.autoReinitialise && !reinitialiseInterval) {
          reinitialiseInterval = setInterval(
            function()
            {
              initialise(settings);
            },
            settings.autoReinitialiseDelay
          );
        } else if (!settings.autoReinitialise && reinitialiseInterval) {
          clearInterval(reinitialiseInterval);
        }

        originalScrollTop && elem.scrollTop(0) && scrollToY(originalScrollTop, false);
        originalScrollLeft && elem.scrollLeft(0) && scrollToX(originalScrollLeft, false);

        elem.trigger('jsp-initialised', [isScrollableH || isScrollableV]);
      }

      function initialiseVerticalScroll()
      {
        if (isScrollableV) {

          container.append(
            $('<div class="jspVerticalBar" />').append(
              $('<div class="jspCap jspCapTop" />'),
              $('<div class="jspTrack" />').append(
                $('<div class="jspDrag" />').append(
                  $('<div class="jspDragTop" />'),
                  $('<div class="jspDragBottom" />')
                )
              ),
              $('<div class="jspCap jspCapBottom" />')
            )
          );

          verticalBar = container.find('>.jspVerticalBar');
          verticalTrack = verticalBar.find('>.jspTrack');
          verticalDrag = verticalTrack.find('>.jspDrag');

          if (settings.showArrows) {
            arrowUp = $('<a class="jspArrow jspArrowUp" />').bind(
              'mousedown.jsp', getArrowScroll(0, -1)
            ).bind('click.jsp', nil);
            arrowDown = $('<a class="jspArrow jspArrowDown" />').bind(
              'mousedown.jsp', getArrowScroll(0, 1)
            ).bind('click.jsp', nil);
            if (settings.arrowScrollOnHover) {
              arrowUp.bind('mouseover.jsp', getArrowScroll(0, -1, arrowUp));
              arrowDown.bind('mouseover.jsp', getArrowScroll(0, 1, arrowDown));
            }

            appendArrows(verticalTrack, settings.verticalArrowPositions, arrowUp, arrowDown);
          }

          verticalTrackHeight = paneHeight;
          container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(
            function()
            {
              verticalTrackHeight -= $(this).outerHeight();
            }
          );


          verticalDrag.hover(
            function()
            {
              verticalDrag.addClass('jspHover');
            },
            function()
            {
              verticalDrag.removeClass('jspHover');
            }
          ).bind(
            'mousedown.jsp',
            function(e)
            {
              // Stop IE from allowing text selection
              $('html').bind('dragstart.jsp selectstart.jsp', nil);

              verticalDrag.addClass('jspActive');

              var startY = e.pageY - verticalDrag.position().top;

              $('html').bind(
                'mousemove.jsp',
                function(e)
                {
                  positionDragY(e.pageY - startY, false);
                }
              ).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
              return false;
            }
          );
          sizeVerticalScrollbar();
        }
      }

      function sizeVerticalScrollbar()
      {
        verticalTrack.height(verticalTrackHeight + 'px');
        verticalDragPosition = 0;
        scrollbarWidth = settings.verticalGutter + verticalTrack.outerWidth();

        // Make the pane thinner to allow for the vertical scrollbar
        pane.width(paneWidth - scrollbarWidth - originalPaddingTotalWidth);

        // Add margin to the left of the pane if scrollbars are on that side (to position
        // the scrollbar on the left or right set it's left or right property in CSS)
        try {
          if (verticalBar.position().left === 0) {
            pane.css('margin-left', scrollbarWidth + 'px');
          }
        } catch (err) {
        }
      }

      function initialiseHorizontalScroll()
      {
        if (isScrollableH) {

          container.append(
            $('<div class="jspHorizontalBar" />').append(
              $('<div class="jspCap jspCapLeft" />'),
              $('<div class="jspTrack" />').append(
                $('<div class="jspDrag" />').append(
                  $('<div class="jspDragLeft" />'),
                  $('<div class="jspDragRight" />')
                )
              ),
              $('<div class="jspCap jspCapRight" />')
            )
          );

          horizontalBar = container.find('>.jspHorizontalBar');
          horizontalTrack = horizontalBar.find('>.jspTrack');
          horizontalDrag = horizontalTrack.find('>.jspDrag');

          if (settings.showArrows) {
            arrowLeft = $('<a class="jspArrow jspArrowLeft" />').bind(
              'mousedown.jsp', getArrowScroll(-1, 0)
            ).bind('click.jsp', nil);
            arrowRight = $('<a class="jspArrow jspArrowRight" />').bind(
              'mousedown.jsp', getArrowScroll(1, 0)
            ).bind('click.jsp', nil);
            if (settings.arrowScrollOnHover) {
              arrowLeft.bind('mouseover.jsp', getArrowScroll(-1, 0, arrowLeft));
              arrowRight.bind('mouseover.jsp', getArrowScroll(1, 0, arrowRight));
            }
            appendArrows(horizontalTrack, settings.horizontalArrowPositions, arrowLeft, arrowRight);
          }

          horizontalDrag.hover(
            function()
            {
              horizontalDrag.addClass('jspHover');
            },
            function()
            {
              horizontalDrag.removeClass('jspHover');
            }
          ).bind(
            'mousedown.jsp',
            function(e)
            {
              // Stop IE from allowing text selection
              $('html').bind('dragstart.jsp selectstart.jsp', nil);

              horizontalDrag.addClass('jspActive');

              var startX = e.pageX - horizontalDrag.position().left;

              $('html').bind(
                'mousemove.jsp',
                function(e)
                {
                  positionDragX(e.pageX - startX, false);
                }
              ).bind('mouseup.jsp mouseleave.jsp', cancelDrag);
              return false;
            }
          );
          horizontalTrackWidth = container.innerWidth();
          sizeHorizontalScrollbar();
        }
      }

      function sizeHorizontalScrollbar()
      {
        container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(
          function()
          {
            horizontalTrackWidth -= $(this).outerWidth();
          }
        );

        horizontalTrack.width(horizontalTrackWidth + 'px');
        horizontalDragPosition = 0;
      }

      function resizeScrollbars()
      {
        if (isScrollableH && isScrollableV) {
          var horizontalTrackHeight = horizontalTrack.outerHeight(),
            verticalTrackWidth = verticalTrack.outerWidth();
          verticalTrackHeight -= horizontalTrackHeight;
          $(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(
            function()
            {
              horizontalTrackWidth += $(this).outerWidth();
            }
          );
          horizontalTrackWidth -= verticalTrackWidth;
          paneHeight -= verticalTrackWidth;
          paneWidth -= horizontalTrackHeight;
          horizontalTrack.parent().append(
            $('<div class="jspCorner" />').css('width', horizontalTrackHeight + 'px')
          );
          sizeVerticalScrollbar();
          sizeHorizontalScrollbar();
        }
        // reflow content
        if (isScrollableH) {
          pane.width((container.outerWidth() - originalPaddingTotalWidth) + 'px');
        }
        contentHeight = pane.outerHeight();
        percentInViewV = contentHeight / paneHeight;

        if (isScrollableH) {
          horizontalDragWidth = Math.ceil(1 / percentInViewH * horizontalTrackWidth);
          if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
            horizontalDragWidth = settings.horizontalDragMaxWidth;
          } else if (horizontalDragWidth < settings.horizontalDragMinWidth) {
            horizontalDragWidth = settings.horizontalDragMinWidth;
          }
          horizontalDrag.width(horizontalDragWidth + 'px');
          dragMaxX = horizontalTrackWidth - horizontalDragWidth;
          _positionDragX(horizontalDragPosition); // To update the state for the arrow buttons
        }
        if (isScrollableV) {
          verticalDragHeight = Math.ceil(1 / percentInViewV * verticalTrackHeight);
          if (verticalDragHeight > settings.verticalDragMaxHeight) {
            verticalDragHeight = settings.verticalDragMaxHeight;
          } else if (verticalDragHeight < settings.verticalDragMinHeight) {
            verticalDragHeight = settings.verticalDragMinHeight;
          }
          verticalDrag.height(verticalDragHeight + 'px');
          dragMaxY = verticalTrackHeight - verticalDragHeight;
          _positionDragY(verticalDragPosition); // To update the state for the arrow buttons
        }
      }

      function appendArrows(ele, p, a1, a2)
      {
        var p1 = "before", p2 = "after", aTemp;
        
        // Sniff for mac... Is there a better way to determine whether the arrows would naturally appear
        // at the top or the bottom of the bar?
        if (p == "os") {
          p = /Mac/.test(navigator.platform) ? "after" : "split";
        }
        if (p == p1) {
          p2 = p;
        } else if (p == p2) {
          p1 = p;
          aTemp = a1;
          a1 = a2;
          a2 = aTemp;
        }

        ele[p1](a1)[p2](a2);
      }

      function getArrowScroll(dirX, dirY, ele)
      {
        return function()
        {
          arrowScroll(dirX, dirY, this, ele);
          this.blur();
          return false;
        };
      }

      function arrowScroll(dirX, dirY, arrow, ele)
      {
        arrow = $(arrow).addClass('jspActive');

        var eve,
          scrollTimeout,
          isFirst = true,
          doScroll = function()
          {
            if (dirX !== 0) {
              jsp.scrollByX(dirX * settings.arrowButtonSpeed);
            }
            if (dirY !== 0) {
              jsp.scrollByY(dirY * settings.arrowButtonSpeed);
            }
            scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.arrowRepeatFreq);
            isFirst = false;
          };

        doScroll();

        eve = ele ? 'mouseout.jsp' : 'mouseup.jsp';
        ele = ele || $('html');
        ele.bind(
          eve,
          function()
          {
            arrow.removeClass('jspActive');
            scrollTimeout && clearTimeout(scrollTimeout);
            scrollTimeout = null;
            ele.unbind(eve);
          }
        );
      }

      function initClickOnTrack()
      {
        removeClickOnTrack();
        if (isScrollableV) {
          verticalTrack.bind(
            'mousedown.jsp',
            function(e)
            {
              if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                var clickedTrack = $(this),
                  offset = clickedTrack.offset(),
                  direction = e.pageY - offset.top - verticalDragPosition,
                  scrollTimeout,
                  isFirst = true,
                  doScroll = function()
                  {
                    var offset = clickedTrack.offset(),
                      pos = e.pageY - offset.top - verticalDragHeight / 2,
                      contentDragY = paneHeight * settings.scrollPagePercent,
                      dragY = dragMaxY * contentDragY / (contentHeight - paneHeight);
                    if (direction < 0) {
                      if (verticalDragPosition - dragY > pos) {
                        jsp.scrollByY(-contentDragY);
                      } else {
                        positionDragY(pos);
                      }
                    } else if (direction > 0) {
                      if (verticalDragPosition + dragY < pos) {
                        jsp.scrollByY(contentDragY);
                      } else {
                        positionDragY(pos);
                      }
                    } else {
                      cancelClick();
                      return;
                    }
                    scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                    isFirst = false;
                  },
                  cancelClick = function()
                  {
                    scrollTimeout && clearTimeout(scrollTimeout);
                    scrollTimeout = null;
                    $(document).unbind('mouseup.jsp', cancelClick);
                  };
                doScroll();
                $(document).bind('mouseup.jsp', cancelClick);
                return false;
              }
            }
          );
        }
        
        if (isScrollableH) {
          horizontalTrack.bind(
            'mousedown.jsp',
            function(e)
            {
              if (e.originalTarget === undefined || e.originalTarget == e.currentTarget) {
                var clickedTrack = $(this),
                  offset = clickedTrack.offset(),
                  direction = e.pageX - offset.left - horizontalDragPosition,
                  scrollTimeout,
                  isFirst = true,
                  doScroll = function()
                  {
                    var offset = clickedTrack.offset(),
                      pos = e.pageX - offset.left - horizontalDragWidth / 2,
                      contentDragX = paneWidth * settings.scrollPagePercent,
                      dragX = dragMaxX * contentDragX / (contentWidth - paneWidth);
                    if (direction < 0) {
                      if (horizontalDragPosition - dragX > pos) {
                        jsp.scrollByX(-contentDragX);
                      } else {
                        positionDragX(pos);
                      }
                    } else if (direction > 0) {
                      if (horizontalDragPosition + dragX < pos) {
                        jsp.scrollByX(contentDragX);
                      } else {
                        positionDragX(pos);
                      }
                    } else {
                      cancelClick();
                      return;
                    }
                    scrollTimeout = setTimeout(doScroll, isFirst ? settings.initialDelay : settings.trackClickRepeatFreq);
                    isFirst = false;
                  },
                  cancelClick = function()
                  {
                    scrollTimeout && clearTimeout(scrollTimeout);
                    scrollTimeout = null;
                    $(document).unbind('mouseup.jsp', cancelClick);
                  };
                doScroll();
                $(document).bind('mouseup.jsp', cancelClick);
                return false;
              }
            }
          );
        }
      }

      function removeClickOnTrack()
      {
        if (horizontalTrack) {
          horizontalTrack.unbind('mousedown.jsp');
        }
        if (verticalTrack) {
          verticalTrack.unbind('mousedown.jsp');
        }
      }

      function cancelDrag()
      {
        $('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');

        if (verticalDrag) {
          verticalDrag.removeClass('jspActive');
        }
        if (horizontalDrag) {
          horizontalDrag.removeClass('jspActive');
        }
      }

      function positionDragY(destY, animate)
      {
        if (!isScrollableV) {
          return;
        }
        if (destY < 0) {
          destY = 0;
        } else if (destY > dragMaxY) {
          destY = dragMaxY;
        }

        // can't just check if(animate) because false is a valid value that could be passed in...
        if (animate === undefined) {
          animate = settings.animateScroll;
        }
        if (animate) {
          jsp.animate(verticalDrag, 'top', destY, _positionDragY);
        } else {
          verticalDrag.css('top', destY);
          _positionDragY(destY);
        }

      }

      function _positionDragY(destY)
      {
        if (destY === undefined) {
          destY = verticalDrag.position().top;
        }

        container.scrollTop(0);
        verticalDragPosition = destY;

        var isAtTop = verticalDragPosition === 0,
          isAtBottom = verticalDragPosition == dragMaxY,
          percentScrolled = destY/ dragMaxY,
          destTop = -percentScrolled * (contentHeight - paneHeight);

        if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
          wasAtTop = isAtTop;
          wasAtBottom = isAtBottom;
          elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
        }
        
        updateVerticalArrows(isAtTop, isAtBottom);
        pane.css('top', destTop);
        elem.trigger('jsp-scroll-y', [-destTop, isAtTop, isAtBottom]).trigger('scroll');
      }

      function positionDragX(destX, animate)
      {
        if (!isScrollableH) {
          return;
        }
        if (destX < 0) {
          destX = 0;
        } else if (destX > dragMaxX) {
          destX = dragMaxX;
        }

        if (animate === undefined) {
          animate = settings.animateScroll;
        }
        if (animate) {
          jsp.animate(horizontalDrag, 'left', destX,  _positionDragX);
        } else {
          horizontalDrag.css('left', destX);
          _positionDragX(destX);
        }
      }

      function _positionDragX(destX)
      {
        if (destX === undefined) {
          destX = horizontalDrag.position().left;
        }

        container.scrollTop(0);
        horizontalDragPosition = destX;

        var isAtLeft = horizontalDragPosition === 0,
          isAtRight = horizontalDragPosition == dragMaxX,
          percentScrolled = destX / dragMaxX,
          destLeft = -percentScrolled * (contentWidth - paneWidth);

        if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
          wasAtLeft = isAtLeft;
          wasAtRight = isAtRight;
          elem.trigger('jsp-arrow-change', [wasAtTop, wasAtBottom, wasAtLeft, wasAtRight]);
        }
        
        updateHorizontalArrows(isAtLeft, isAtRight);
        pane.css('left', destLeft);
        elem.trigger('jsp-scroll-x', [-destLeft, isAtLeft, isAtRight]).trigger('scroll');
      }

      function updateVerticalArrows(isAtTop, isAtBottom)
      {
        if (settings.showArrows) {
          arrowUp[isAtTop ? 'addClass' : 'removeClass']('jspDisabled');
          arrowDown[isAtBottom ? 'addClass' : 'removeClass']('jspDisabled');
        }
      }

      function updateHorizontalArrows(isAtLeft, isAtRight)
      {
        if (settings.showArrows) {
          arrowLeft[isAtLeft ? 'addClass' : 'removeClass']('jspDisabled');
          arrowRight[isAtRight ? 'addClass' : 'removeClass']('jspDisabled');
        }
      }

      function scrollToY(destY, animate)
      {
        var percentScrolled = destY / (contentHeight - paneHeight);
        positionDragY(percentScrolled * dragMaxY, animate);
      }

      function scrollToX(destX, animate)
      {
        var percentScrolled = destX / (contentWidth - paneWidth);
        positionDragX(percentScrolled * dragMaxX, animate);
      }

      function scrollToElement(ele, stickToTop, animate)
      {
        var e, eleHeight, eleWidth, eleTop = 0, eleLeft = 0, viewportTop, viewportLeft, maxVisibleEleTop, maxVisibleEleLeft, destY, destX;

        // Legal hash values aren't necessarily legal jQuery selectors so we need to catch any
        // errors from the lookup...
        try {
          e = $(ele);
        } catch (err) {
          return;
        }
        eleHeight = e.outerHeight();
        eleWidth= e.outerWidth();

        container.scrollTop(0);
        container.scrollLeft(0);
        
        // loop through parents adding the offset top of any elements that are relatively positioned between
        // the focused element and the jspPane so we can get the true distance from the top
        // of the focused element to the top of the scrollpane...
        while (!e.is('.jspPane')) {
          eleTop += e.position().top;
          eleLeft += e.position().left;
          e = e.offsetParent();
          if (/^body|html$/i.test(e[0].nodeName)) {
            // we ended up too high in the document structure. Quit!
            return;
          }
        }

        viewportTop = contentPositionY();
        maxVisibleEleTop = viewportTop + paneHeight;
        if (eleTop < viewportTop || stickToTop) { // element is above viewport
          destY = eleTop - settings.verticalGutter;
        } else if (eleTop + eleHeight > maxVisibleEleTop) { // element is below viewport
          destY = eleTop - paneHeight + eleHeight + settings.verticalGutter;
        }
        if (destY) {
          scrollToY(destY, animate);
        }
        
        viewportLeft = contentPositionX();
              maxVisibleEleLeft = viewportLeft + paneWidth;
              if (eleLeft < viewportLeft || stickToTop) { // element is to the left of viewport
                  destX = eleLeft - settings.horizontalGutter;
              } else if (eleLeft + eleWidth > maxVisibleEleLeft) { // element is to the right viewport
                  destX = eleLeft - paneWidth + eleWidth + settings.horizontalGutter;
              }
              if (destX) {
                  scrollToX(destX, animate);
              }

      }

      function contentPositionX()
      {
        return -pane.position().left;
      }

      function contentPositionY()
      {
        return -pane.position().top;
      }

      function isCloseToBottom()
      {
        var scrollableHeight = contentHeight - paneHeight;
        return (scrollableHeight > 20) && (scrollableHeight - contentPositionY() < 10);
      }

      function isCloseToRight()
      {
        var scrollableWidth = contentWidth - paneWidth;
        return (scrollableWidth > 20) && (scrollableWidth - contentPositionX() < 10);
      }

      function initMousewheel()
      {
        container.unbind(mwEvent).bind(
          mwEvent,
          function (event, delta, deltaX, deltaY) {
            var dX = horizontalDragPosition, dY = verticalDragPosition;
            jsp.scrollBy(deltaX * settings.mouseWheelSpeed, -deltaY * settings.mouseWheelSpeed, false);
            // return true if there was no movement so rest of screen can scroll
            return dX == horizontalDragPosition && dY == verticalDragPosition;
          }
        );
      }

      function removeMousewheel()
      {
        container.unbind(mwEvent);
      }

      function nil()
      {
        return false;
      }

      function initFocusHandler()
      {
        pane.find(':input,a').unbind('focus.jsp').bind(
          'focus.jsp',
          function(e)
          {
            scrollToElement(e.target, false);
          }
        );
      }

      function removeFocusHandler()
      {
        pane.find(':input,a').unbind('focus.jsp');
      }
      
      function initKeyboardNav()
      {
        var keyDown, elementHasScrolled, validParents = [];
        isScrollableH && validParents.push(horizontalBar[0]);
        isScrollableV && validParents.push(verticalBar[0]);
        
        // IE also focuses elements that don't have tabindex set.
        pane.focus(
          function()
          {
            elem.focus();
          }
        );
        
        elem.attr('tabindex', 0)
          .unbind('keydown.jsp keypress.jsp')
          .bind(
            'keydown.jsp',
            function(e)
            {
              if (e.target !== this && !(validParents.length && $(e.target).closest(validParents).length)){
                return;
              }
              var dX = horizontalDragPosition, dY = verticalDragPosition;
              switch(e.keyCode) {
                case 40: // down
                case 38: // up
                case 34: // page down
                case 32: // space
                case 33: // page up
                case 39: // right
                case 37: // left
                  keyDown = e.keyCode;
                  keyDownHandler();
                  break;
                case 35: // end
                  scrollToY(contentHeight - paneHeight);
                  keyDown = null;
                  break;
                case 36: // home
                  scrollToY(0);
                  keyDown = null;
                  break;
              }

              elementHasScrolled = e.keyCode == keyDown && dX != horizontalDragPosition || dY != verticalDragPosition;
              return !elementHasScrolled;
            }
          ).bind(
            'keypress.jsp', // For FF/ OSX so that we can cancel the repeat key presses if the JSP scrolls...
            function(e)
            {
              if (e.keyCode == keyDown) {
                keyDownHandler();
              }
              return !elementHasScrolled;
            }
          );
        
        if (settings.hideFocus) {
          elem.css('outline', 'none');
          if ('hideFocus' in container[0]){
            elem.attr('hideFocus', true);
          }
        } else {
          elem.css('outline', '');
          if ('hideFocus' in container[0]){
            elem.attr('hideFocus', false);
          }
        }
        
        function keyDownHandler()
        {
          var dX = horizontalDragPosition, dY = verticalDragPosition;
          switch(keyDown) {
            case 40: // down
              jsp.scrollByY(settings.keyboardSpeed, false);
              break;
            case 38: // up
              jsp.scrollByY(-settings.keyboardSpeed, false);
              break;
            case 34: // page down
            case 32: // space
              jsp.scrollByY(paneHeight * settings.scrollPagePercent, false);
              break;
            case 33: // page up
              jsp.scrollByY(-paneHeight * settings.scrollPagePercent, false);
              break;
            case 39: // right
              jsp.scrollByX(settings.keyboardSpeed, false);
              break;
            case 37: // left
              jsp.scrollByX(-settings.keyboardSpeed, false);
              break;
          }

          elementHasScrolled = dX != horizontalDragPosition || dY != verticalDragPosition;
          return elementHasScrolled;
        }
      }
      
      function removeKeyboardNav()
      {
        elem.attr('tabindex', '-1')
          .removeAttr('tabindex')
          .unbind('keydown.jsp keypress.jsp');
      }

      function observeHash()
      {
        if (location.hash && location.hash.length > 1) {
          var e,
            retryInt,
            hash = escape(location.hash.substr(1)) // hash must be escaped to prevent XSS
            ;
          try {
            e = $('#' + hash + ', a[name="' + hash + '"]');
          } catch (err) {
            return;
          }

          if (e.length && pane.find(hash)) {
            // nasty workaround but it appears to take a little while before the hash has done its thing
            // to the rendered page so we just wait until the container's scrollTop has been messed up.
            if (container.scrollTop() === 0) {
              retryInt = setInterval(
                function()
                {
                  if (container.scrollTop() > 0) {
                    scrollToElement(e, true);
                    $(document).scrollTop(container.position().top);
                    clearInterval(retryInt);
                  }
                },
                50
              );
            } else {
              scrollToElement(e, true);
              $(document).scrollTop(container.position().top);
            }
          }
        }
      }

      function hijackInternalLinks()
      {
        // only register the link handler once
        if ($(document.body).data('jspHijack')) {
          return;
        }

        // remember that the handler was bound
        $(document.body).data('jspHijack', true);

        // use live handler to also capture newly created links
        $(document.body).delegate('a[href*=#]', 'click', function(event) {
          // does the link point to the same page?
          // this also takes care of cases with a <base>-Tag or Links not starting with the hash #
          // e.g. <a href="index.html#test"> when the current url already is index.html
          var href = this.href.substr(0, this.href.indexOf('#')),
            locationHref = location.href,
            hash,
            element,
            container,
            jsp,
            scrollTop,
            elementTop;
          if (location.href.indexOf('#') !== -1) {
            locationHref = location.href.substr(0, location.href.indexOf('#'));
          }
          if (href !== locationHref) {
            // the link points to another page
            return;
          }

          // check if jScrollPane should handle this click event
          hash = escape(this.href.substr(this.href.indexOf('#') + 1));

          // find the element on the page
          element;
          try {
            element = $('#' + hash + ', a[name="' + hash + '"]');
          } catch (e) {
            // hash is not a valid jQuery identifier
            return;
          }

          if (!element.length) {
            // this link does not point to an element on this page
            return;
          }

          container = element.closest('.jspScrollable');
          jsp = container.data('jsp');

          // jsp might be another jsp instance than the one, that bound this event
          // remember: this event is only bound once for all instances.
          jsp.scrollToElement(element, true);

          if (container[0].scrollIntoView) {
            // also scroll to the top of the container (if it is not visible)
            scrollTop = $(window).scrollTop();
            elementTop = element.offset().top;
            if (elementTop < scrollTop || elementTop > scrollTop + $(window).height()) {
              container[0].scrollIntoView();
            }
          }

          // jsp handled this event, prevent the browser default (scrolling :P)
          event.preventDefault();
        });
      }
      
      // Init touch on iPad, iPhone, iPod, Android
      function initTouch()
      {
        var startX,
          startY,
          touchStartX,
          touchStartY,
          moved,
          moving = false;
  
        container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
          'touchstart.jsp',
          function(e)
          {
            var touch = e.originalEvent.touches[0];
            startX = contentPositionX();
            startY = contentPositionY();
            touchStartX = touch.pageX;
            touchStartY = touch.pageY;
            moved = false;
            moving = true;
          }
        ).bind(
          'touchmove.jsp',
          function(ev)
          {
            if(!moving) {
              return;
            }
            
            var touchPos = ev.originalEvent.touches[0],
              dX = horizontalDragPosition, dY = verticalDragPosition;
            
            jsp.scrollTo(startX + touchStartX - touchPos.pageX, startY + touchStartY - touchPos.pageY);
            
            moved = moved || Math.abs(touchStartX - touchPos.pageX) > 5 || Math.abs(touchStartY - touchPos.pageY) > 5;
            
            // return true if there was no movement so rest of screen can scroll
            return dX == horizontalDragPosition && dY == verticalDragPosition;
          }
        ).bind(
          'touchend.jsp',
          function(e)
          {
            moving = false;
            /*if(moved) {
              return false;
            }*/
          }
        ).bind(
          'click.jsp-touchclick',
          function(e)
          {
            if(moved) {
              moved = false;
              return false;
            }
          }
        );
      }
      
      function destroy(){
        var currentY = contentPositionY(),
          currentX = contentPositionX();
        elem.removeClass('jspScrollable').unbind('.jsp');
        elem.replaceWith(originalElement.append(pane.children()));
        originalElement.scrollTop(currentY);
        originalElement.scrollLeft(currentX);

        // clear reinitialize timer if active
        if (reinitialiseInterval) {
          clearInterval(reinitialiseInterval);
        }
      }

      // Public API
      $.extend(
        jsp,
        {
          // Reinitialises the scroll pane (if it's internal dimensions have changed since the last time it
          // was initialised). The settings object which is passed in will override any settings from the
          // previous time it was initialised - if you don't pass any settings then the ones from the previous
          // initialisation will be used.
          reinitialise: function(s)
          {
            s = $.extend({}, settings, s);
            initialise(s);
          },
          // Scrolls the specified element (a jQuery object, DOM node or jQuery selector string) into view so
          // that it can be seen within the viewport. If stickToTop is true then the element will appear at
          // the top of the viewport, if it is false then the viewport will scroll as little as possible to
          // show the element. You can also specify if you want animation to occur. If you don't provide this
          // argument then the animateScroll value from the settings object is used instead.
          scrollToElement: function(ele, stickToTop, animate)
          {
            scrollToElement(ele, stickToTop, animate);
          },
          // Scrolls the pane so that the specified co-ordinates within the content are at the top left
          // of the viewport. animate is optional and if not passed then the value of animateScroll from
          // the settings object this jScrollPane was initialised with is used.
          scrollTo: function(destX, destY, animate)
          {
            scrollToX(destX, animate);
            scrollToY(destY, animate);
          },
          // Scrolls the pane so that the specified co-ordinate within the content is at the left of the
          // viewport. animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          scrollToX: function(destX, animate)
          {
            scrollToX(destX, animate);
          },
          // Scrolls the pane so that the specified co-ordinate within the content is at the top of the
          // viewport. animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          scrollToY: function(destY, animate)
          {
            scrollToY(destY, animate);
          },
          // Scrolls the pane to the specified percentage of its maximum horizontal scroll position. animate
          // is optional and if not passed then the value of animateScroll from the settings object this
          // jScrollPane was initialised with is used.
          scrollToPercentX: function(destPercentX, animate)
          {
            scrollToX(destPercentX * (contentWidth - paneWidth), animate);
          },
          // Scrolls the pane to the specified percentage of its maximum vertical scroll position. animate
          // is optional and if not passed then the value of animateScroll from the settings object this
          // jScrollPane was initialised with is used.
          scrollToPercentY: function(destPercentY, animate)
          {
            scrollToY(destPercentY * (contentHeight - paneHeight), animate);
          },
          // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
          // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
          scrollBy: function(deltaX, deltaY, animate)
          {
            jsp.scrollByX(deltaX, animate);
            jsp.scrollByY(deltaY, animate);
          },
          // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
          // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
          scrollByX: function(deltaX, animate)
          {
            var destX = contentPositionX() + Math[deltaX<0 ? 'floor' : 'ceil'](deltaX),
              percentScrolled = destX / (contentWidth - paneWidth);
            positionDragX(percentScrolled * dragMaxX, animate);
          },
          // Scrolls the pane by the specified amount of pixels. animate is optional and if not passed then
          // the value of animateScroll from the settings object this jScrollPane was initialised with is used.
          scrollByY: function(deltaY, animate)
          {
            var destY = contentPositionY() + Math[deltaY<0 ? 'floor' : 'ceil'](deltaY),
              percentScrolled = destY / (contentHeight - paneHeight);
            positionDragY(percentScrolled * dragMaxY, animate);
          },
          // Positions the horizontal drag at the specified x position (and updates the viewport to reflect
          // this). animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          positionDragX: function(x, animate)
          {
            positionDragX(x, animate);
          },
          // Positions the vertical drag at the specified y position (and updates the viewport to reflect
          // this). animate is optional and if not passed then the value of animateScroll from the settings
          // object this jScrollPane was initialised with is used.
          positionDragY: function(y, animate)
          {
            positionDragY(y, animate);
          },
          // This method is called when jScrollPane is trying to animate to a new position. You can override
          // it if you want to provide advanced animation functionality. It is passed the following arguments:
          //  * ele          - the element whose position is being animated
          //  * prop         - the property that is being animated
          //  * value        - the value it's being animated to
          //  * stepCallback - a function that you must execute each time you update the value of the property
          // You can use the default implementation (below) as a starting point for your own implementation.
          animate: function(ele, prop, value, stepCallback)
          {
            var params = {};
            params[prop] = value;
            ele.animate(
              params,
              {
                'duration'  : settings.animateDuration,
                'easing'  : settings.animateEase,
                'queue'   : false,
                'step'    : stepCallback
              }
            );
          },
          // Returns the current x position of the viewport with regards to the content pane.
          getContentPositionX: function()
          {
            return contentPositionX();
          },
          // Returns the current y position of the viewport with regards to the content pane.
          getContentPositionY: function()
          {
            return contentPositionY();
          },
          // Returns the width of the content within the scroll pane.
          getContentWidth: function()
          {
            return contentWidth;
          },
          // Returns the height of the content within the scroll pane.
          getContentHeight: function()
          {
            return contentHeight;
          },
          // Returns the horizontal position of the viewport within the pane content.
          getPercentScrolledX: function()
          {
            return contentPositionX() / (contentWidth - paneWidth);
          },
          // Returns the vertical position of the viewport within the pane content.
          getPercentScrolledY: function()
          {
            return contentPositionY() / (contentHeight - paneHeight);
          },
          // Returns whether or not this scrollpane has a horizontal scrollbar.
          getIsScrollableH: function()
          {
            return isScrollableH;
          },
          // Returns whether or not this scrollpane has a vertical scrollbar.
          getIsScrollableV: function()
          {
            return isScrollableV;
          },
          // Gets a reference to the content pane. It is important that you use this method if you want to
          // edit the content of your jScrollPane as if you access the element directly then you may have some
          // problems (as your original element has had additional elements for the scrollbars etc added into
          // it).
          getContentPane: function()
          {
            return pane;
          },
          // Scrolls this jScrollPane down as far as it can currently scroll. If animate isn't passed then the
          // animateScroll value from settings is used instead.
          scrollToBottom: function(animate)
          {
            positionDragY(dragMaxY, animate);
          },
          // Hijacks the links on the page which link to content inside the scrollpane. If you have changed
          // the content of your page (e.g. via AJAX) and want to make sure any new anchor links to the
          // contents of your scroll pane will work then call this function.
          hijackInternalLinks: $.noop,
          // Removes the jScrollPane and returns the page to the state it was in before jScrollPane was
          // initialised.
          destroy: function()
          {
              destroy();
          }
        }
      );
      
      initialise(s);
    }

    // Pluginifying code...
    settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
    
    // Apply default speed
    $.each(['mouseWheelSpeed', 'arrowButtonSpeed', 'trackClickSpeed', 'keyboardSpeed'], function() {
      settings[this] = settings[this] || settings.speed;
    });

    return this.each(
      function()
      {
        var elem = $(this), jspApi = elem.data('jsp');
        if (jspApi) {
          jspApi.reinitialise(settings);
        } else {
          $("script",elem).filter('[type="text/javascript"],:not([type])').remove();
          jspApi = new JScrollPane(elem, settings);
          elem.data('jsp', jspApi);
        }
      }
    );
  };

  $.fn.jScrollPane.defaults = {
    showArrows          : false,
    maintainPosition      : true,
    stickToBottom       : false,
    stickToRight        : false,
    clickOnTrack        : true,
    autoReinitialise      : false,
    autoReinitialiseDelay   : 500,
    verticalDragMinHeight   : 0,
    verticalDragMaxHeight   : 99999,
    horizontalDragMinWidth    : 0,
    horizontalDragMaxWidth    : 99999,
    contentWidth        : undefined,
    animateScroll       : false,
    animateDuration       : 300,
    animateEase         : 'linear',
    hijackInternalLinks     : false,
    verticalGutter        : 4,
    horizontalGutter      : 4,
    mouseWheelSpeed       : 0,
    arrowButtonSpeed      : 0,
    arrowRepeatFreq       : 50,
    arrowScrollOnHover      : false,
    trackClickSpeed       : 0,
    trackClickRepeatFreq    : 70,
    verticalArrowPositions    : 'split',
    horizontalArrowPositions  : 'split',
    enableKeyboardNavigation  : true,
    hideFocus         : false,
    keyboardSpeed       : 0,
    initialDelay                : 300,        // Delay before starting repeating
    speed           : 30,   // Default speed when others falsey
    scrollPagePercent     : .8    // Percent of visible area scrolled when pageUp/Down or track area pressed
  };

})(jQuery,this);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);/**
 * @author trixta
 * @version 1.2
 */
(function($){

var mwheelI = {
      pos: [-260, -260]
    },
  minDif  = 3,
  doc   = document,
  root  = doc.documentElement,
  body  = doc.body,
  longDelay, shortDelay
;

function unsetPos(){
  if(this === mwheelI.elem){
    mwheelI.pos = [-260, -260];
    mwheelI.elem = false;
    minDif = 3;
  }
}

$.event.special.mwheelIntent = {
  setup: function(){
    var jElm = $(this).bind('mousewheel', $.event.special.mwheelIntent.handler);
    if( this !== doc && this !== root && this !== body ){
      jElm.bind('mouseleave', unsetPos);
    }
    jElm = null;
        return true;
    },
  teardown: function(){
        $(this)
      .unbind('mousewheel', $.event.special.mwheelIntent.handler)
      .unbind('mouseleave', unsetPos)
    ;
        return true;
    },
    handler: function(e, d){
    var pos = [e.clientX, e.clientY];
    if( this === mwheelI.elem || Math.abs(mwheelI.pos[0] - pos[0]) > minDif || Math.abs(mwheelI.pos[1] - pos[1]) > minDif ){
            mwheelI.elem = this;
      mwheelI.pos = pos;
      minDif = 250;
      
      clearTimeout(shortDelay);
      shortDelay = setTimeout(function(){
        minDif = 10;
      }, 200);
      clearTimeout(longDelay);
      longDelay = setTimeout(function(){
        minDif = 3;
      }, 1500);
      e = $.extend({}, e, {type: 'mwheelIntent'});
            return $.event.handle.apply(this, arguments);
    }
    }
};
$.fn.extend({
  mwheelIntent: function(fn) {
    return fn ? this.bind("mwheelIntent", fn) : this.trigger("mwheelIntent");
  },
  
  unmwheelIntent: function(fn) {
    return this.unbind("mwheelIntent", fn);
  }
});

$(function(){
  body = doc.body;
  //assume that document is always scrollable, doesn't hurt if not
  $(doc).bind('mwheelIntent.mwheelIntentDefault', $.noop);
});
})(jQuery);//fgnass.github.com/spin.js#v1.2.5
(function(a,b,c){function g(a,c){var d=b.createElement(a||"div"),e;for(e in c)d[e]=c[e];return d}function h(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function j(a,b,c,d){var g=["opacity",b,~~(a*100),c,d].join("-"),h=.01+c/d*100,j=Math.max(1-(1-a)/b*(100-h),a),k=f.substring(0,f.indexOf("Animation")).toLowerCase(),l=k&&"-"+k+"-"||"";return e[g]||(i.insertRule("@"+l+"keyframes "+g+"{"+"0%{opacity:"+j+"}"+h+"%{opacity:"+a+"}"+(h+.01)+"%{opacity:1}"+(h+b)%100+"%{opacity:"+a+"}"+"100%{opacity:"+j+"}"+"}",0),e[g]=1),g}function k(a,b){var e=a.style,f,g;if(e[b]!==c)return b;b=b.charAt(0).toUpperCase()+b.slice(1);for(g=0;g<d.length;g++){f=d[g]+b;if(e[f]!==c)return f}}function l(a,b){for(var c in b)a.style[k(a,c)||c]=b[c];return a}function m(a){for(var b=1;b<arguments.length;b++){var d=arguments[b];for(var e in d)a[e]===c&&(a[e]=d[e])}return a}function n(a){var b={x:a.offsetLeft,y:a.offsetTop};while(a=a.offsetParent)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}var d=["webkit","Moz","ms","O"],e={},f,i=function(){var a=g("style");return h(b.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),o={lines:12,length:7,width:5,radius:10,rotate:0,color:"#000",speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto"},p=function q(a){if(!this.spin)return new q(a);this.opts=m(a||{},q.defaults,o)};p.defaults={},m(p.prototype,{spin:function(a){this.stop();var b=this,c=b.opts,d=b.el=l(g(0,{className:c.className}),{position:"relative",zIndex:c.zIndex}),e=c.radius+c.length+c.width,h,i;a&&(a.insertBefore(d,a.firstChild||null),i=n(a),h=n(d),l(d,{left:(c.left=="auto"?i.x-h.x+(a.offsetWidth>>1):c.left+e)+"px",top:(c.top=="auto"?i.y-h.y+(a.offsetHeight>>1):c.top+e)+"px"})),d.setAttribute("aria-role","progressbar"),b.lines(d,b.opts);if(!f){var j=0,k=c.fps,m=k/c.speed,o=(1-c.opacity)/(m*c.trail/100),p=m/c.lines;!function q(){j++;for(var a=c.lines;a;a--){var e=Math.max(1-(j+a*p)%m*o,c.opacity);b.opacity(d,c.lines-a,e,c)}b.timeout=b.el&&setTimeout(q,~~(1e3/k))}()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=c),this},lines:function(a,b){function e(a,d){return l(g(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:d,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*c+b.rotate)+"deg) translate("+b.radius+"px"+",0)",borderRadius:(b.width>>1)+"px"})}var c=0,d;for(;c<b.lines;c++)d=l(g(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:f&&j(b.opacity,b.trail,c,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&h(d,l(e("#000","0 0 4px #000"),{top:"2px"})),h(a,h(d,e(b.color,"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),!function(){function a(a,b){return g("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}var b=l(g("group"),{behavior:"url(#default#VML)"});!k(b,"transform")&&b.adj?(i.addRule(".spin-vml","behavior:url(#default#VML)"),p.prototype.lines=function(b,c){function f(){return l(a("group",{coordsize:e+" "+e,coordorigin:-d+" "+ -d}),{width:e,height:e})}function k(b,e,g){h(i,h(l(f(),{rotation:360/c.lines*b+"deg",left:~~e}),h(l(a("roundrect",{arcsize:1}),{width:d,height:c.width,left:c.radius,top:-c.width>>1,filter:g}),a("fill",{color:c.color,opacity:c.opacity}),a("stroke",{opacity:0}))))}var d=c.length+c.width,e=2*d,g=-(c.width+c.length)*2+"px",i=l(f(),{position:"absolute",top:g,left:g}),j;if(c.shadow)for(j=1;j<=c.lines;j++)k(j,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(j=1;j<=c.lines;j++)k(j);return h(b,i)},p.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}):f=k(b,"animation")}(),a.Spinner=p})(window,document);
var LZMA = (function () {
	var action_compress   = 1,
		action_decompress = 2,
		action_update	  = 3;
	
	function update_progress(percent, callback_num) {
		///TODO: Calculate ETA.
		postMessage({
			action: 3,
			callback_num: callback_num,
			result: percent
		});
	}
	
	var $moduleName, $moduleBase;
	
	var _,
		N8000000000000000_longLit = [0, -9223372036854775808],
		N1_longLit = [4294967295, -4294967296],
		P0_longLit = [0, 0],
		P1_longLit = [1, 0],
		P4_longLit = [4, 0],
		P1000_longLit = [4096, 0],
		Pffffff_longLit = [16777215, 0],
		P1000000_longLit = [16777216, 0],
		Pff000000_longLit = [4278190080, 0],
		Pffffffff_longLit = [4294967295, 0],
		P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];

	function getClass_18() {
		return Ljava_lang_Object_2_classLit;
	}
	
	function Object_0() {
	}
	
	_ = Object_0.prototype = {};
	_.getClass$ = getClass_18;
	_.typeMarker$ = nullMethod;
	_.typeId$ = 1;
	function getClass_22() {
		return Ljava_lang_Throwable_2_classLit;
	}
	
	function Throwable() {
	}
	
	_ = Throwable.prototype = new Object_0();
	_.getClass$ = getClass_22;
	_.typeId$ = 3;
	_.detailMessage = null;
	function getClass_13() {
		return Ljava_lang_Exception_2_classLit;
	}
	
	function Exception() {
	}
	
	_ = Exception.prototype = new Throwable();
	_.getClass$ = getClass_13;
	_.typeId$ = 4;
	function $RuntimeException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}
	
	function getClass_19() {
		return Ljava_lang_RuntimeException_2_classLit;
	}
	
	function RuntimeException() {
	}
	
	_ = RuntimeException.prototype = new Exception();
	_.getClass$ = getClass_19;
	_.typeId$ = 5;
	function $JavaScriptException(this$static, e) {
		return this$static;
	}
	
	function getClass_0() {
		return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
	}
	
	function JavaScriptException() {
	}
	
	_ = JavaScriptException.prototype = new RuntimeException();
	_.getClass$ = getClass_0;
	_.typeId$ = 6;
	function $append(a, x) {
		a[a.explicitLength++] = x;
	}
	
	function $appendNonNull(a, x) {
		a[a.explicitLength++] = x;
	}
	
	function $toString(a) {
		var s_0, s;
		s_0 = (s = a.join('') , a.length = a.explicitLength = 0 , s);
		a[a.explicitLength++] = s_0;
		return s_0;
	}
	
	function createFromSeed(seedType, length_0) {
		var array = new Array(length_0);
		if (seedType > 0) {
			var value = [null, 0, false, [0, 0]][seedType];
			for (var i = 0; i < length_0; ++i) {
				array[i] = value;
			}
		}
		return array;
	}
	
	function getClass_2() {
		return this.arrayClass$;
	}
	
	function initDim(arrayClass, typeId, queryId, length_0, seedType) {
		var result;
		result = createFromSeed(seedType, length_0);
		$clinit_4();
		wrapArray(result, expandoNames_0, expandoValues_0);
		result.arrayClass$ = arrayClass;
		result.typeId$ = typeId;
		result.queryId$ = queryId;
		return result;
	}
	
	function initValues(arrayClass, typeId, queryId, array) {
		$clinit_4();
		wrapArray(array, expandoNames_0, expandoValues_0);
		array.arrayClass$ = arrayClass;
		array.typeId$ = typeId;
		array.queryId$ = queryId;
		return array;
	}
	
	function setCheck(array, index, value) {
		if (value != null) {
			if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
			throw new ArrayStoreException();
			}
			if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
			throw new ArrayStoreException();
			}
		}
		return array[index] = value;
	}
	
	function Array_0() {
	}
	
	_ = Array_0.prototype = new Object_0();
	_.getClass$ = getClass_2;
	_.typeId$ = 0;
	_.arrayClass$ = null;
	_.length = 0;
	_.queryId$ = 0;
	function $clinit_4() {
		$clinit_4 = nullMethod;
		expandoNames_0 = [];
		expandoValues_0 = [];
		initExpandos(new Array_0(), expandoNames_0, expandoValues_0);
	}
	
	function initExpandos(protoType, expandoNames, expandoValues) {
		var i = 0, value;
		for (var name_0 in protoType) {
			if (value = protoType[name_0]) {
			expandoNames[i] = name_0;
			expandoValues[i] = value;
			++i;
			}
		}
	}
	
	function wrapArray(array, expandoNames, expandoValues) {
		$clinit_4();
		for (var i = 0, c = expandoNames.length; i < c; ++i) {
			array[expandoNames[i]] = expandoValues[i];
		}
	}
	
	var expandoNames_0, expandoValues_0;
	function canCast(srcId, dstId) {
		return srcId && !!typeIdArray[srcId][dstId];
	}
	
	function canCastUnsafe(srcId, dstId) {
		return srcId && typeIdArray[srcId][dstId];
	}
	
	function dynamicCast(src, dstId) {
		if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
			throw new ClassCastException();
		}
		return src;
	}
	
	function instanceOf(src, dstId) {
		return src != null && canCast(src.typeId$, dstId);
	}
	
	function round_int(x) {
		return ~~Math.max(Math.min(x, 2147483647), -2147483648);
	}
	
	var typeIdArray = [
			{},
			{},
			{1:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1, 10:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1, 11:1},
			{2:1},
			{2:1},
			{2:1},
			{4:1},
			{5:1},
			{6:1},
			{7:1},
			{8:1},
			{9:1}
		];

	function caught(e) {
		if (e != null && canCast(e.typeId$, 2)) {
			return e;
		}
		return $JavaScriptException(new JavaScriptException(), e);
	}
	
	function add(a, b) {
		var newHigh, newLow;
		newHigh = a[1] + b[1];
		newLow = a[0] + b[0];
		return create(newLow, newHigh);
	}
	
	function addTimes(accum, a, b) {
		if (a == 0) {
			return accum;
		}
		if (b == 0) {
			return accum;
		}
		return add(accum, create(a * b, 0));
	}
	
	function and(a, b) {
		return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) & ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) & lowBits_0(b));
	}
	
	function compare(a, b) {
		var nega, negb;
		if (a[0] == b[0] && a[1] == b[1]) {
			return 0;
		}
		nega = a[1] < 0;
		negb = b[1] < 0;
		if (nega && !negb) {
			return -1;
		}
		if (!nega && negb) {
			return 1;
		}
		if (sub(a, b)[1] < 0) {
			return -1;
		}
		else {
			return 1;
		}
	}
	
	function create(valueLow, valueHigh) {
		var diffHigh, diffLow;
		valueHigh %= 1.8446744073709552E19;
		valueLow %= 1.8446744073709552E19;
		diffHigh = valueHigh % 4294967296;
		diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
		valueHigh = valueHigh - diffHigh + diffLow;
		valueLow = valueLow - diffLow + diffHigh;
		while (valueLow < 0) {
			valueLow += 4294967296;
			valueHigh -= 4294967296;
		}
		while (valueLow > 4294967295) {
			valueLow -= 4294967296;
			valueHigh += 4294967296;
		}
		valueHigh = valueHigh % 1.8446744073709552E19;
		while (valueHigh > 9223372032559808512) {
			valueHigh -= 1.8446744073709552E19;
		}
		while (valueHigh < -9223372036854775808) {
			valueHigh += 1.8446744073709552E19;
		}
		return [valueLow, valueHigh];
	}
	
	function div(a, b) {
		var approx, deltaRem, deltaResult, halfa, rem, result;
		if (b[0] == 0 && b[1] == 0) {
			throw $ArithmeticException(new ArithmeticException(), '/ by zero');
		}
		if (a[0] == 0 && a[1] == 0) {
			return $clinit_10() , ZERO;
		}
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			if (eq(b, ONE) || eq(b, NEG_ONE)) {
				return MIN_VALUE;
			}
			halfa = shr(a, 1);
			approx = shl(div(halfa, b), 1);
			rem = sub(a, mul(b, approx));
			return add(approx, div(rem, b));
		}
		if (eq(b, MIN_VALUE)) {
			return ZERO;
		}
		if (a[1] < 0) {
			if (b[1] < 0) {
				return div(neg(a), neg(b));
			} else {
				return neg(div(neg(a), b));
			}
		}
		if (b[1] < 0) {
			return neg(div(a, neg(b)));
		}
		result = ZERO;
		rem = a;
		while (compare(rem, b) >= 0) {
			deltaResult = fromDouble(Math.floor(toDoubleRoundDown(rem) / toDoubleRoundUp(b)));
			if (deltaResult[0] == 0 && deltaResult[1] == 0) {
				deltaResult = ONE;
			}
			deltaRem = mul(deltaResult, b);
			result = add(result, deltaResult);
			rem = sub(rem, deltaRem);
		}
		return result;
	}
	
	function eq(a, b) {
		return a[0] == b[0] && a[1] == b[1];
	}
	
	function fromDouble(value) {
		if (isNaN(value)) {
			return $clinit_10() , ZERO;
		}
		if (value < -9223372036854775808) {
			return $clinit_10() , MIN_VALUE;
		}
		if (value >= 9223372036854775807) {
			return $clinit_10() , MAX_VALUE;
		}
		if (value > 0) {
			return create(Math.floor(value), 0);
		} else {
			return create(Math.ceil(value), 0);
		}
	}
	
	function fromInt(value) {
		var rebase, result;
		if (value > -129 && value < 128) {
			rebase = value + 128;
			result = ($clinit_9() , boxedValues)[rebase];
			if (result == null) {
				result = boxedValues[rebase] = internalFromInt(value);
			}
			return result;
		}
		return internalFromInt(value);
	}
	
	function internalFromInt(value) {
		if (value >= 0) {
			return [value, 0];
		} else {
			return [value + 4294967296, -4294967296];
		}
	}
	
	function lowBits_0(a) {
		if (a[0] >= 2147483648) {
			return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
		} else {
			return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
		}
	}
	
	function makeFromBits(highBits, lowBits) {
		var high, low;
		high = highBits * 4294967296;
		low = lowBits;
		if (lowBits < 0) {
			low += 4294967296;
		}
		return [low, high];
	}
	
	function mul(a, b) {
		var a1, a2, a3, a4, b1, b2, b3, b4, res;
		if (a[0] == 0 && a[1] == 0) {
			return $clinit_10() , ZERO;
		}
		if (b[0] == 0 && b[1] == 0) {
			return $clinit_10() , ZERO;
		}
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			return multByMinValue(b);
		}
		if (eq(b, MIN_VALUE)) {
			return multByMinValue(a);
		}
		if (a[1] < 0) {
			if (b[1] < 0) {
				return mul(neg(a), neg(b));
			} else {
				return neg(mul(neg(a), b));
			}
		}
		if (b[1] < 0) {
			return neg(mul(a, neg(b)));
		}
		if (compare(a, TWO_PWR_24) < 0 && compare(b, TWO_PWR_24) < 0) {
			return create((a[1] + a[0]) * (b[1] + b[0]), 0);
		}
		a3 = a[1] % 281474976710656;
		a4 = a[1] - a3;
		a1 = a[0] % 65536;
		a2 = a[0] - a1;
		b3 = b[1] % 281474976710656;
		b4 = b[1] - b3;
		b1 = b[0] % 65536;
		b2 = b[0] - b1;
		res = ZERO;
		res = addTimes(res, a4, b1);
		res = addTimes(res, a3, b2);
		res = addTimes(res, a3, b1);
		res = addTimes(res, a2, b3);
		res = addTimes(res, a2, b2);
		res = addTimes(res, a2, b1);
		res = addTimes(res, a1, b4);
		res = addTimes(res, a1, b3);
		res = addTimes(res, a1, b2);
		res = addTimes(res, a1, b1);
		return res;
	}
	
	function multByMinValue(a) {
		if ((lowBits_0(a) & 1) == 1) {
			return $clinit_10() , MIN_VALUE;
		} else {
			return $clinit_10() , ZERO;
		}
	}
	
	function neg(a) {
		var newHigh, newLow;
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			return MIN_VALUE;
		}
		newHigh = -a[1];
		newLow = -a[0];
		if (newLow > 4294967295) {
			newLow -= 4294967296;
			newHigh += 4294967296;
		}
		if (newLow < 0) {
			newLow += 4294967296;
			newHigh -= 4294967296;
		}
		return [newLow, newHigh];
	}
	
	function pwrAsDouble(n) {
		if (n <= 30) {
			return 1 << n;
		} else {
			return pwrAsDouble(30) * pwrAsDouble(n - 30);
		}
	}
	
	function shl(a, n) {
		var diff, newHigh, newLow, twoToN;
		n &= 63;
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			if (n == 0) {
				return a;
			} else {
				return ZERO;
			}
		}
		if (a[1] < 0) {
			return neg(shl(neg(a), n));
		}
		twoToN = pwrAsDouble(n);
		newHigh = a[1] * twoToN % 1.8446744073709552E19;
		newLow = a[0] * twoToN;
		diff = newLow - newLow % 4294967296;
		newHigh += diff;
		newLow -= diff;
		if (newHigh >= 9223372036854775807) {
			newHigh -= 1.8446744073709552E19;
		}
		return [newLow, newHigh];
	}
	
	function shr(a, n) {
		var newHigh, newLow, shiftFact;
		n &= 63;
		shiftFact = pwrAsDouble(n);
		newHigh = a[1] / shiftFact;
		newLow = Math.floor(a[0] / shiftFact);
		return create(newLow, newHigh);
	}
	
	function shru(a, n) {
		var sr;
		n &= 63;
		sr = shr(a, n);
		if (a[1] < 0) {
			sr = add(sr, shl(($clinit_10() , TWO), 63 - n));
		}
		return sr;
	}
	
	function sub(a, b) {
		var newHigh, newLow;
		newHigh = a[1] - b[1];
		newLow = a[0] - b[0];
		return create(newLow, newHigh);
	}
	
	function toDoubleRoundDown(a) {
		var diff, magnitute, toSubtract;
		magnitute = round_int(Math.log(a[1]) / ($clinit_10() , LN_2));
		if (magnitute <= 48) {
			return a[1] + a[0];
		} else {
			diff = magnitute - 48;
			toSubtract = (1 << diff) - 1;
			return a[1] + (a[0] - toSubtract);
		}
	}
	
	function toDoubleRoundUp(a) {
		var diff, magnitute, toAdd;
		magnitute = round_int(Math.log(a[1]) / ($clinit_10() , LN_2));
		if (magnitute <= 48) {
			return a[1] + a[0];
		} else {
			diff = magnitute - 48;
			toAdd = (1 << diff) - 1;
			return a[1] + (a[0] + toAdd);
		}
	}
	
	function toString_0(a) {
		var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
		if (a[0] == 0 && a[1] == 0) {
			return '0';
		}
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			return '-9223372036854775808';
		}
		if (a[1] < 0) {
			return '-' + toString_0(neg(a));
		}
		rem = a;
		res = '';
		while (!(rem[0] == 0 && rem[1] == 0)) {
			tenPowerLong = fromInt(1000000000);
			remDivTenPower = div(rem, tenPowerLong);
			digits = '' + lowBits_0(sub(rem, mul(remDivTenPower, tenPowerLong)));
			rem = remDivTenPower;
			if (!(rem[0] == 0 && rem[1] == 0)) {
				zeroesNeeded = 9 - digits.length;
				for (; zeroesNeeded > 0; --zeroesNeeded) {
					digits = '0' + digits;
				}
			}
			res = digits + res;
		}
		return res;
	}
	
	function $clinit_9() {
		$clinit_9 = nullMethod;
		boxedValues = initDim(_3_3D_classLit, 0, 9, 256, 0);
	}
	
	var boxedValues;
	function $clinit_10() {
		$clinit_10 = nullMethod;
		LN_2 = Math.log(2);
		MAX_VALUE = P7fffffffffffffff_longLit;
		MIN_VALUE = N8000000000000000_longLit;
		NEG_ONE = fromInt(-1);
		ONE = fromInt(1);
		TWO = fromInt(2);
		TWO_PWR_24 = P1000000_longLit;
		ZERO = fromInt(0);
	}
	
	var LN_2, MAX_VALUE, MIN_VALUE, NEG_ONE, ONE, TWO, TWO_PWR_24, ZERO;
	function getClass_6() {
		return Ljava_io_InputStream_2_classLit;
	}
	
	function InputStream() {
	}
	
	_ = InputStream.prototype = new Object_0();
	_.getClass$ = getClass_6;
	_.typeId$ = 0;
	function $ByteArrayInputStream(this$static, buf) {
		$ByteArrayInputStream_0(this$static, buf, 0, buf.length);
		return this$static;
	}
	
	function $ByteArrayInputStream_0(this$static, buf, off, len) {
		this$static.buf = buf;
		this$static.pos = off;
		this$static.count = off + len;
		if (this$static.count > buf.length)
			this$static.count = buf.length;
		return this$static;
	}
	
	function $read(this$static) {
		if (this$static.pos >= this$static.count)
			return -1;
		return this$static.buf[this$static.pos++] & 255;
	}
	
	function $read_0(this$static, buf, off, len) {
		if (this$static.pos >= this$static.count)
			return -1;
		len = min(len, this$static.count - this$static.pos);
		arraycopy(this$static.buf, this$static.pos, buf, off, len);
		this$static.pos += len;
		return len;
	}
	
	function getClass_3() {
		return Ljava_io_ByteArrayInputStream_2_classLit;
	}
	
	function ByteArrayInputStream() {
	}
	
	_ = ByteArrayInputStream.prototype = new InputStream();
	_.getClass$ = getClass_3;
	_.typeId$ = 0;
	_.buf = null;
	_.count = 0;
	_.pos = 0;
	function getClass_7() {
		return Ljava_io_OutputStream_2_classLit;
	}
	
	function OutputStream() {
	}
	
	_ = OutputStream.prototype = new Object_0();
	_.getClass$ = getClass_7;
	_.typeId$ = 0;
	function $ByteArrayOutputStream(this$static) {
		this$static.buf = initDim(_3B_classLit, 0, -1, 32, 1);
		return this$static;
	}
	
	function $ensureCapacity(this$static, len) {
		var newbuf;
		if (len <= this$static.buf.length)
			return;
		len = max(len, this$static.buf.length * 2);
		newbuf = initDim(_3B_classLit, 0, -1, len, 1);
		arraycopy(this$static.buf, 0, newbuf, 0, this$static.buf.length);
		this$static.buf = newbuf;
	}
	
	function $toByteArray(this$static) {
		var data;
		data = initDim(_3B_classLit, 0, -1, this$static.count, 1);
		arraycopy(this$static.buf, 0, data, 0, this$static.count);
		return data;
	}
	
	function $write(this$static, b) {
		$ensureCapacity(this$static, this$static.count + 1);
		this$static.buf[this$static.count++] = b << 24 >> 24;
	}
	
	function $write_0(this$static, buf, off, len) {
		$ensureCapacity(this$static, this$static.count + len);
		arraycopy(buf, off, this$static.buf, this$static.count, len);
		this$static.count += len;
	}
	
	function getClass_4() {
		return Ljava_io_ByteArrayOutputStream_2_classLit;
	}
	
	function ByteArrayOutputStream() {
	}
	
	_ = ByteArrayOutputStream.prototype = new OutputStream();
	_.getClass$ = getClass_4;
	_.typeId$ = 0;
	_.buf = null;
	_.count = 0;
	function $IOException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}
	
	function getClass_5() {
		return Ljava_io_IOException_2_classLit;
	}
	
	function IOException() {
	}
	
	_ = IOException.prototype = new Exception();
	_.getClass$ = getClass_5;
	_.typeId$ = 7;
	function $ArithmeticException(this$static, explanation) {
		this$static.detailMessage = explanation;
		return this$static;
	}
	
	function getClass_8() {
		return Ljava_lang_ArithmeticException_2_classLit;
	}
	
	function ArithmeticException() {
	}
	
	_ = ArithmeticException.prototype = new RuntimeException();
	_.getClass$ = getClass_8;
	_.typeId$ = 8;
	function $ArrayStoreException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}
	
	function getClass_9() {
		return Ljava_lang_ArrayStoreException_2_classLit;
	}
	
	function ArrayStoreException() {
	}
	
	_ = ArrayStoreException.prototype = new RuntimeException();
	_.getClass$ = getClass_9;
	_.typeId$ = 9;
	function createForArray(packageName, className) {
		var clazz;
		clazz = new Class();
		clazz.typeName = packageName + className;
		return clazz;
	}
	
	function createForClass(packageName, className) {
		var clazz;
		clazz = new Class();
		clazz.typeName = packageName + className;
		return clazz;
	}
	
	function createForEnum(packageName, className) {
		var clazz;
		clazz = new Class();
		clazz.typeName = packageName + className;
		return clazz;
	}
	
	function getClass_11() {
		return Ljava_lang_Class_2_classLit;
	}
	
	function Class() {
	}
	
	_ = Class.prototype = new Object_0();
	_.getClass$ = getClass_11;
	_.typeId$ = 0;
	_.typeName = null;
	function getClass_10() {
		return Ljava_lang_ClassCastException_2_classLit;
	}
	
	function ClassCastException() {
	}
	
	_ = ClassCastException.prototype = new RuntimeException();
	_.getClass$ = getClass_10;
	_.typeId$ = 12;
	function getClass_12() {
		return Ljava_lang_Enum_2_classLit;
	}
	
	function Enum() {
	}
	
	_ = Enum.prototype = new Object_0();
	_.getClass$ = getClass_12;
	_.typeId$ = 0;
	function $IllegalArgumentException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}
	
	function getClass_14() {
		return Ljava_lang_IllegalArgumentException_2_classLit;
	}
	
	function IllegalArgumentException() {
	}
	
	_ = IllegalArgumentException.prototype = new RuntimeException();
	_.getClass$ = getClass_14;
	_.typeId$ = 13;
	function getClass_15() {
		return Ljava_lang_IllegalStateException_2_classLit;
	}
	
	function IllegalStateException() {
	}
	
	_ = IllegalStateException.prototype = new RuntimeException();
	_.getClass$ = getClass_15;
	_.typeId$ = 14;
	function getClass_16() {
		return Ljava_lang_IndexOutOfBoundsException_2_classLit;
	}
	
	function IndexOutOfBoundsException() {
	}
	
	_ = IndexOutOfBoundsException.prototype = new RuntimeException();
	_.getClass$ = getClass_16;
	_.typeId$ = 15;
	function max(x, y) {
		return x > y?x:y;
	}
	
	function min(x, y) {
		return x < y?x:y;
	}
	
	function getClass_17() {
		return Ljava_lang_NullPointerException_2_classLit;
	}
	
	function NullPointerException() {
	}
	
	_ = NullPointerException.prototype = new RuntimeException();
	_.getClass$ = getClass_17;
	_.typeId$ = 16;
	function $equals(this$static, other) {
		if (other == null) {
			return false;
		}
		return String(this$static) == other;
	}
	
	function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin) {
		var srcIdx;
		for (srcIdx = srcBegin; srcIdx < srcEnd; ++srcIdx) {
			dst[dstBegin++] = this$static.charCodeAt(srcIdx);
		}
	}
	
	function getClass_21() {
		return Ljava_lang_String_2_classLit;
	}
	
	_ = String.prototype;
	_.getClass$ = getClass_21;
	_.typeId$ = 2;
	function $StringBuilder(this$static) {
		var array;
		this$static.data = (array = [] , array.explicitLength = 0 , array);
		return this$static;
	}
	
	function getClass_20() {
		return Ljava_lang_StringBuilder_2_classLit;
	}
	
	function StringBuilder() {
	}
	
	_ = StringBuilder.prototype = new Object_0();
	_.getClass$ = getClass_20;
	_.typeId$ = 0;
	function arraycopy(src, srcOfs, dest, destOfs, len) {
		var destArray, destEnd, destTypeName, destlen, i, srcArray, srcTypeName, srclen;
		
		if (src == null || dest == null) {
			throw new NullPointerException();
		}
		
		srcTypeName  = (src.typeMarker$  == nullMethod || src.typeId$  == 2 ? src.getClass$()  : Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
		destTypeName = (dest.typeMarker$ == nullMethod || dest.typeId$ == 2 ? dest.getClass$() : Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
		
		if (srcTypeName.charCodeAt(0) != 91 || destTypeName.charCodeAt(0) != 91) {
			throw $ArrayStoreException(new ArrayStoreException(), 'Must be array types');
		}
		if (srcTypeName.charCodeAt(1) != destTypeName.charCodeAt(1)) {
			throw $ArrayStoreException(new ArrayStoreException(), 'Array types must match');
		}
		
		srclen  = src.length;
		destlen = dest.length;
		if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
			throw new IndexOutOfBoundsException();
		}
		if ((srcTypeName.charCodeAt(1) == 76 || srcTypeName.charCodeAt(1) == 91) && !$equals(srcTypeName, destTypeName)) {
			srcArray  = dynamicCast(src, 3);
			destArray = dynamicCast(dest, 3);
			if ((src == null ? null : src) === (dest == null ? null : dest) && srcOfs < destOfs) {
				srcOfs += len;
				for (destEnd = destOfs + len; destEnd-- > destOfs;) {
					setCheck(destArray, destEnd, srcArray[--srcOfs]);
				}
			} else {
				for (destEnd = destOfs + len; destOfs < destEnd;) {
					setCheck(destArray, destOfs++, srcArray[srcOfs++]);
				}
			}
		} else {
			for (i = 0; i < len; ++i) {
				dest[destOfs + i] = src[srcOfs + i]
			}
		}
	}
	
	
	function $configure(this$static, encoder) {
	if (!$SetDictionarySize_0(encoder, 1 << this$static.dictionarySize))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	if (!$SetNumFastBytes(encoder, this$static.fb))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	if (!$SetMatchFinder(encoder, this$static.matchFinder))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	if (!$SetLcLpPb_0(encoder, this$static.lc, this$static.lp, this$static.pb))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	}
	
	function getClass_23() {
		return Lorg_dellroad_lzma_client_CompressionMode_2_classLit;
	}
	
	function CompressionMode() {
	}
	
	_ = CompressionMode.prototype = new Enum();
	_.getClass$ = getClass_23;
	_.typeId$ = 0;
	_.dictionarySize = 0;
	_.fb = 0;
	_.lc = 0;
	_.lp = 0;
	_.matchFinder = 0;
	_.pb = 0;
	
	function $execute(this$static) {
		var $e0;
		try {
			return $processChunk(this$static.chunker);
		}
		catch ($e0) {
			$e0 = caught($e0);
			if (instanceOf($e0, 10)) {
				return false;
			} else {
				throw $e0;
			}
		}
	}
	
	function $init(this$static, input, output, length_0, mode) {
		var encoder, i;
		if (!mode)
			throw $IllegalArgumentException(new IllegalArgumentException(), 'null mode');
		if (compare(length_0, N1_longLit) < 0)
			throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid length ' + toString_0(length_0));
		this$static.length_0 = length_0;
		encoder = $Encoder(new Encoder());
		$configure(mode, encoder);
		encoder._writeEndMark = true;
		$WriteCoderProperties(encoder, output);
		for (i = 0; i < 64; i += 8)
			$write(output, lowBits_0(shr(length_0, i)) & 255);
		this$static.chunker = (encoder._needReleaseMFStream = false , (encoder._inStream = input , encoder._finished = false , $Create_2(encoder) , encoder._rangeEncoder.Stream = output , $Init_4(encoder) , $FillDistancesPrices(encoder) , $FillAlignPrices(encoder) , encoder._lenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._lenEncoder, 1 << encoder._posStateBits) , encoder._repMatchLenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._repMatchLenEncoder, 1 << encoder._posStateBits) , encoder.nowPos64 = P0_longLit , undefined) , $Chunker_0(new Chunker(), encoder));
	}
	
	function getClass_26() {
		return Lorg_dellroad_lzma_client_LZMACompressor_2_classLit;
	}
	
	function LZMACompressor() {
	}
	
	_ = LZMACompressor.prototype = new Object_0();
	_.getClass$ = getClass_26;
	_.typeId$ = 0;
	_.chunker = null;
	
	function $LZMAByteArrayCompressor(this$static, data, mode) {
		var $e0;
		this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
		try {
			$init(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output, fromInt(data.length), mode);
		} catch ($e0) {
			$e0 = caught($e0);
			if (instanceOf($e0, 10)) {
				throw $RuntimeException(new RuntimeException(), 'impossible exception');
			} else {
				throw $e0;
			}
		}
		return this$static;
	}
	
	function getClass_24() {
		return Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit;
	}
	
	function LZMAByteArrayCompressor() {
	}
	
	_ = LZMAByteArrayCompressor.prototype = new LZMACompressor();
	_.getClass$ = getClass_24;
	_.typeId$ = 0;
	_.output = null;
	function $execute_0(this$static) {
		var $e0, e;
		try {
			return $processChunk(this$static.chunker);
		}
		catch ($e0) {
			$e0 = caught($e0);
			if (instanceOf($e0, 10)) {
				e = $e0;
				this$static.exception = e;
				return false;
			} else {
				throw $e0;
			}
		}
	}
	
	function $init_0(this$static, input, output) {
		var decoder,
			hex_length = "",
			i,
			properties,
			r,
			tmp_length;
		
		properties = initDim(_3B_classLit, 0, -1, 5, 1);
		for (i = 0; i < properties.length; ++i) {
			r = $read(input);
			if (r == -1)
				throw $IOException(new IOException(), 'truncated input');
			properties[i] = r << 24 >> 24;
		}
		decoder = $Decoder(new Decoder());
		if (!$SetDecoderProperties(decoder, properties))
			throw $IOException(new IOException(), 'corrupted input');
		
		for (i = 0; i < 64; i += 8) {
			r = $read(input);
			if (r == -1)
				throw $IOException(new IOException(), 'truncated input');
			r = r.toString(16);
			if (r.length == 1) r = "0" + r;
			hex_length = r + "" + hex_length;
		}
		
		/// Was the length set in the header (if it was compressed from a stream, the length is all f's).
		if (hex_length.toLowerCase() == "ffffffffffffffffff" || hex_length == 0) {
			/// The length is unknown, so set to -1.
			this$static.length_0 = N1_longLit;
		} else {
			///NOTE: If there is a problem with the decoder because of the length, you can always set the length to -1 (N1_longLit) which means unknown.
			tmp_length = parseInt(hex_length, 16);
			/// If the length is too long to handle, just set it to unknown.
			if (tmp_length > 4294967295) {
				this$static.length_0 = N1_longLit;
			} else {
				this$static.length_0 = fromDouble(tmp_length);
			}
		}
		
		this$static.chunker = $CodeInChunks(decoder, input, output, this$static.length_0);
	}
	
	function getClass_27() {
		return Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit;
	}
	
	function LZMADecompressor() {
	}
	
	_ = LZMADecompressor.prototype = new Object_0();
	_.getClass$ = getClass_27;
	_.typeId$ = 0;
	_.chunker = null;
	_.exception = null;
	_.length_0 = P0_longLit;
	function $LZMAByteArrayDecompressor(this$static, data) {
		this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
		$init_0(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output);
		return this$static;
	}
	
	function getClass_25() {
		return Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit;
	}
	
	function LZMAByteArrayDecompressor() {
	}
	
	_ = LZMAByteArrayDecompressor.prototype = new LZMADecompressor();
	_.getClass$ = getClass_25;
	_.typeId$ = 0;
	_.output = null;
	function $Create_4(this$static, keepSizeBefore, keepSizeAfter, keepSizeReserv) {
		var blockSize;
		this$static._keepSizeBefore = keepSizeBefore;
		this$static._keepSizeAfter = keepSizeAfter;
		blockSize = keepSizeBefore + keepSizeAfter + keepSizeReserv;
		if (this$static._bufferBase == null || this$static._blockSize != blockSize) {
			this$static._bufferBase = null;
			this$static._blockSize = blockSize;
			this$static._bufferBase = initDim(_3B_classLit, 0, -1, this$static._blockSize, 1);
		}
		this$static._pointerToLastSafePosition = this$static._blockSize - keepSizeAfter;
	}
	
	function $GetIndexByte(this$static, index) {
		return this$static._bufferBase[this$static._bufferOffset + this$static._pos + index];
	}
	
	function $GetMatchLen(this$static, index, distance, limit) {
		var i, pby;
		if (this$static._streamEndWasReached) {
			if (this$static._pos + index + limit > this$static._streamPos) {
				limit = this$static._streamPos - (this$static._pos + index);
			}
		}
		++distance;
		pby = this$static._bufferOffset + this$static._pos + index;
		for (i = 0; i < limit && this$static._bufferBase[pby + i] == this$static._bufferBase[pby + i - distance]; ++i) {
		}
		return i;
	}
	
	function $GetNumAvailableBytes(this$static) {
		return this$static._streamPos - this$static._pos;
	}
	
	function $MoveBlock(this$static) {
		var i, numBytes, offset;
		offset = this$static._bufferOffset + this$static._pos - this$static._keepSizeBefore;
		if (offset > 0) {
			--offset;
		}
		numBytes = this$static._bufferOffset + this$static._streamPos - offset;
		for (i = 0; i < numBytes; ++i) {
			this$static._bufferBase[i] = this$static._bufferBase[offset + i];
		}
		this$static._bufferOffset -= offset;
	}
	
	function $MovePos_1(this$static) {
		var pointerToPostion;
		++this$static._pos;
		if (this$static._pos > this$static._posLimit) {
			pointerToPostion = this$static._bufferOffset + this$static._pos;
			if (pointerToPostion > this$static._pointerToLastSafePosition) {
				$MoveBlock(this$static);
			}
			$ReadBlock(this$static);
		}
	}
	
	function $ReadBlock(this$static) {
		var numReadBytes, pointerToPostion, size;
		if (this$static._streamEndWasReached)
			return;
		while (true) {
			size = -this$static._bufferOffset + this$static._blockSize - this$static._streamPos;
			if (size == 0)
				return;
			numReadBytes = $read_0(this$static._stream, this$static._bufferBase, this$static._bufferOffset + this$static._streamPos, size);
			if (numReadBytes == -1) {
				this$static._posLimit = this$static._streamPos;
				pointerToPostion = this$static._bufferOffset + this$static._posLimit;
				if (pointerToPostion > this$static._pointerToLastSafePosition) {
					this$static._posLimit = this$static._pointerToLastSafePosition - this$static._bufferOffset;
				}
				this$static._streamEndWasReached = true;
				return;
			}
			this$static._streamPos += numReadBytes;
			if (this$static._streamPos >= this$static._pos + this$static._keepSizeAfter) {
				this$static._posLimit = this$static._streamPos - this$static._keepSizeAfter;
			}
		}
	}
	
	function $ReduceOffsets(this$static, subValue) {
		this$static._bufferOffset += subValue;
		this$static._posLimit -= subValue;
		this$static._pos -= subValue;
		this$static._streamPos -= subValue;
	}
	
	function getClass_40() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit;
	}
	
	function InWindow() {
	}
	
	_ = InWindow.prototype = new Object_0();
	_.getClass$ = getClass_40;
	_.typeId$ = 0;
	_._blockSize = 0;
	_._bufferBase = null;
	_._bufferOffset = 0;
	_._keepSizeAfter = 0;
	_._keepSizeBefore = 0;
	_._pointerToLastSafePosition = 0;
	_._pos = 0;
	_._posLimit = 0;
	_._stream = null;
	_._streamEndWasReached = false;
	_._streamPos = 0;
	function $clinit_60() {
		$clinit_60 = nullMethod;
		var i, j, r;
		CrcTable = initDim(_3I_classLit, 0, -1, 256, 1);
		for (i = 0; i < 256; ++i) {
			r = i;
			for (j = 0; j < 8; ++j)
			if ((r & 1) != 0) {
				r = r >>> 1 ^ -306674912;
			} else {
				r >>>= 1;
			}
			CrcTable[i] = r;
		}
	}
	
	function $Create_3(this$static, historySize, keepAddBufferBefore, matchMaxLen, keepAddBufferAfter) {
		var cyclicBufferSize, hs, windowReservSize;
		if (historySize > 1073741567) {
			return false;
		}

		this$static._cutValue = 16 + (matchMaxLen >> 1);
		windowReservSize = ~~((historySize + keepAddBufferBefore + matchMaxLen + keepAddBufferAfter) / 2) + 256;
		$Create_4(this$static, historySize + keepAddBufferBefore, matchMaxLen + keepAddBufferAfter, windowReservSize);
		this$static._matchMaxLen = matchMaxLen;
		cyclicBufferSize = historySize + 1;
		if (this$static._cyclicBufferSize != cyclicBufferSize) {
			this$static._son = initDim(_3I_classLit, 0, -1, (this$static._cyclicBufferSize = cyclicBufferSize) * 2, 1);
		}

		hs = 65536;
		if (this$static.HASH_ARRAY) {
			hs = historySize - 1;
			hs |= hs >> 1;
			hs |= hs >> 2;
			hs |= hs >> 4;
			hs |= hs >> 8;
			hs >>= 1;
			hs |= 65535;
			if (hs > 16777216)
			hs >>= 1;
			this$static._hashMask = hs;
			++hs;
			hs += this$static.kFixHashSize;
		}

		if (hs != this$static._hashSizeSum) {
			this$static._hash = initDim(_3I_classLit, 0, -1, this$static._hashSizeSum = hs, 1);
		}
		return true;
	}
	
	function $GetMatches(this$static, distances) {
		var count, cur, curMatch, curMatch2, curMatch3, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, maxLen, offset, pby1, ptr0, ptr1, temp;
		if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos) {
			lenLimit = this$static._matchMaxLen;
		} else {
			lenLimit = this$static._streamPos - this$static._pos;
			if (lenLimit < this$static.kMinMatchCheck) {
				$MovePos_0(this$static);
				return 0;
			}
		}
		offset = 0;
		matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
		cur = this$static._bufferOffset + this$static._pos;
		maxLen = 1;
		hash2Value = 0;
		hash3Value = 0;
		if (this$static.HASH_ARRAY) {
			temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
			hash2Value = temp & 1023;
			temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
			hash3Value = temp & 65535;
			hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
		} else {
			hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
		}

		curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
		if (this$static.HASH_ARRAY) {
			curMatch2 = this$static._hash[hash2Value];
			curMatch3 = this$static._hash[1024 + hash3Value];
			this$static._hash[hash2Value] = this$static._pos;
			this$static._hash[1024 + hash3Value] = this$static._pos;
			if (curMatch2 > matchMinPos) {
				if (this$static._bufferBase[this$static._bufferOffset + curMatch2] == this$static._bufferBase[cur]) {
					distances[offset++] = maxLen = 2;
					distances[offset++] = this$static._pos - curMatch2 - 1;
				}
			}
			if (curMatch3 > matchMinPos) {
				if (this$static._bufferBase[this$static._bufferOffset + curMatch3] == this$static._bufferBase[cur]) {
					if (curMatch3 == curMatch2) {
						offset -= 2;
					}
					distances[offset++] = maxLen = 3;
					distances[offset++] = this$static._pos - curMatch3 - 1;
					curMatch2 = curMatch3;
				}
			}
			if (offset != 0 && curMatch2 == curMatch) {
				offset -= 2;
				maxLen = 1;
			}
		}
		this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
		ptr0 = (this$static._cyclicBufferPos << 1) + 1;
		ptr1 = this$static._cyclicBufferPos << 1;
		len0 = len1 = this$static.kNumHashDirectBytes;
		if (this$static.kNumHashDirectBytes != 0) {
			if (curMatch > matchMinPos) {
				if (this$static._bufferBase[this$static._bufferOffset + curMatch + this$static.kNumHashDirectBytes] != this$static._bufferBase[cur + this$static.kNumHashDirectBytes]) {
					distances[offset++] = maxLen = this$static.kNumHashDirectBytes;
					distances[offset++] = this$static._pos - curMatch - 1;
				}
			}
		}
		count = this$static._cutValue;
		while (true) {
			if (curMatch <= matchMinPos || count-- == 0) {
				this$static._son[ptr0] = this$static._son[ptr1] = 0;
				break;
			}
			delta = this$static._pos - curMatch;
			cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
			pby1 = this$static._bufferOffset + curMatch;
			len = len0 < len1?len0:len1;
			if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
				while (++len != lenLimit) {
					if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len]) {
						break;
					}
				}
				if (maxLen < len) {
					distances[offset++] = maxLen = len;
					distances[offset++] = delta - 1;
					if (len == lenLimit) {
					this$static._son[ptr1] = this$static._son[cyclicPos];
					this$static._son[ptr0] = this$static._son[cyclicPos + 1];
					break;
					}
				}
			}
			if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
				this$static._son[ptr1] = curMatch;
				ptr1 = cyclicPos + 1;
				curMatch = this$static._son[ptr1];
				len1 = len;
			} else {
				this$static._son[ptr0] = curMatch;
				ptr0 = cyclicPos;
				curMatch = this$static._son[ptr0];
				len0 = len;
			}
		}
		$MovePos_0(this$static);
		return offset;
	}
	
	function $Init_5(this$static) {
		var i;
		this$static._bufferOffset = 0;
		this$static._pos = 0;
		this$static._streamPos = 0;
		this$static._streamEndWasReached = false;
		$ReadBlock(this$static);
		for (i = 0; i < this$static._hashSizeSum; ++i) {
			this$static._hash[i] = 0;
		}
		this$static._cyclicBufferPos = 0;
		$ReduceOffsets(this$static, -1);
	}
	
	function $MovePos_0(this$static) {
		var subValue;
		if (++this$static._cyclicBufferPos >= this$static._cyclicBufferSize) {
			this$static._cyclicBufferPos = 0;
		}
		$MovePos_1(this$static);
		if (this$static._pos == 1073741823) {
			subValue = this$static._pos - this$static._cyclicBufferSize;
			$NormalizeLinks(this$static._son, this$static._cyclicBufferSize * 2, subValue);
			$NormalizeLinks(this$static._hash, this$static._hashSizeSum, subValue);
			$ReduceOffsets(this$static, subValue);
		}
	}
	
	function $NormalizeLinks(items, numItems, subValue) {
		var i, value;
		for (i = 0; i < numItems; ++i) {
			value = items[i];
			if (value <= subValue) {
				value = 0;
			} else {
				value -= subValue;
			}
			items[i] = value;
		}
	}
	
	function $SetType(this$static, numHashBytes) {
		this$static.HASH_ARRAY = numHashBytes > 2;
		if (this$static.HASH_ARRAY) {
			this$static.kNumHashDirectBytes = 0;
			this$static.kMinMatchCheck = 4;
			this$static.kFixHashSize = 66560;
		} else {
			this$static.kNumHashDirectBytes = 2;
			this$static.kMinMatchCheck = 3;
			this$static.kFixHashSize = 0;
		}
	}
	
	function $Skip(this$static, num) {
		var count, cur, curMatch, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, pby1, ptr0, ptr1, temp;
		do {
			if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos) {
				lenLimit = this$static._matchMaxLen;
			} else {
				lenLimit = this$static._streamPos - this$static._pos;
				if (lenLimit < this$static.kMinMatchCheck) {
					$MovePos_0(this$static);
					continue;
				}
			}
			matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
			cur = this$static._bufferOffset + this$static._pos;
			if (this$static.HASH_ARRAY) {
				temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
				hash2Value = temp & 1023;
				this$static._hash[hash2Value] = this$static._pos;
				temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
				hash3Value = temp & 65535;
				this$static._hash[1024 + hash3Value] = this$static._pos;
				hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
			} else {
				hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
			}
			curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
			this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
			ptr0 = (this$static._cyclicBufferPos << 1) + 1;
			ptr1 = this$static._cyclicBufferPos << 1;
			len0 = len1 = this$static.kNumHashDirectBytes;
			count = this$static._cutValue;
			while (true) {
				if (curMatch <= matchMinPos || count-- == 0) {
					this$static._son[ptr0] = this$static._son[ptr1] = 0;
					break;
				}
				delta = this$static._pos - curMatch;
				cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
				pby1 = this$static._bufferOffset + curMatch;
				len = len0 < len1?len0:len1;
				if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
					while (++len != lenLimit) {
						if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len]) {
							break;
						}
					}
					if (len == lenLimit) {
						this$static._son[ptr1] = this$static._son[cyclicPos];
						this$static._son[ptr0] = this$static._son[cyclicPos + 1];
						break;
					}
				}
				if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
					this$static._son[ptr1] = curMatch;
					ptr1 = cyclicPos + 1;
					curMatch = this$static._son[ptr1];
					len1 = len;
				} else {
					this$static._son[ptr0] = curMatch;
					ptr0 = cyclicPos;
					curMatch = this$static._son[ptr0];
					len0 = len;
				}
			}
			$MovePos_0(this$static);
		}
		while (--num != 0);
	}
	
	function getClass_39() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit;
	}
	
	function BinTree() {
	}
	
	_ = BinTree.prototype = new InWindow();
	_.getClass$ = getClass_39;
	_.typeId$ = 0;
	_.HASH_ARRAY = true;
	_._cutValue = 255;
	_._cyclicBufferPos = 0;
	_._cyclicBufferSize = 0;
	_._hash = null;
	_._hashMask = 0;
	_._hashSizeSum = 0;
	_._matchMaxLen = 0;
	_._son = null;
	_.kFixHashSize = 66560;
	_.kMinMatchCheck = 4;
	_.kNumHashDirectBytes = 0;
	var CrcTable;
	function $CopyBlock(this$static, distance, len) {
		var pos;
		pos = this$static._pos - distance - 1;
		if (pos < 0) {
			pos += this$static._windowSize;
		}
		for (; len != 0; --len) {
			if (pos >= this$static._windowSize) {
				pos = 0;
			}
			this$static._buffer[this$static._pos++] = this$static._buffer[pos++];
			if (this$static._pos >= this$static._windowSize) {
				$Flush_0(this$static);
			}
		}
	}
	
	function $Create_5(this$static, windowSize) {
		if (this$static._buffer == null || this$static._windowSize != windowSize) {
			this$static._buffer = initDim(_3B_classLit, 0, -1, windowSize, 1);
		}
		this$static._windowSize = windowSize;
		this$static._pos = 0;
		this$static._streamPos = 0;
	}
	
	function $Flush_0(this$static) {
		var size;
		size = this$static._pos - this$static._streamPos;
		if (size == 0) {
			return;
		}
		$write_0(this$static._stream, this$static._buffer, this$static._streamPos, size);
		if (this$static._pos >= this$static._windowSize) {
			this$static._pos = 0;
		}
		this$static._streamPos = this$static._pos;
	}
	
	function $GetByte(this$static, distance) {
		var pos;
		pos = this$static._pos - distance - 1;
		if (pos < 0) {
			pos += this$static._windowSize;
		}
		return this$static._buffer[pos];
	}
	
	function $Init_7(this$static, solid) {
		if (!solid) {
			this$static._streamPos = 0;
			this$static._pos = 0;
		}
	}
	
	function $PutByte(this$static, b) {
		this$static._buffer[this$static._pos++] = b;
		if (this$static._pos >= this$static._windowSize) {
			$Flush_0(this$static);
		}
	}
	
	function $ReleaseStream(this$static) {
		$Flush_0(this$static);
		this$static._stream = null;
	}
	
	function $SetStream_0(this$static, stream) {
		$Flush_0(this$static);
		this$static._stream = null;
		this$static._stream = stream;
	}
	
	function getClass_41() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit;
	}
	
	function OutWindow() {
	}
	
	_ = OutWindow.prototype = new Object_0();
	_.getClass$ = getClass_41;
	_.typeId$ = 0;
	_._buffer = null;
	_._pos = 0;
	_._stream = null;
	_._streamPos = 0;
	_._windowSize = 0;
	function GetLenToPosState(len) {
		len -= 2;
		if (len < 4) {
			return len;
		}
		return 3;
	}
	
	function StateUpdateChar(index) {
		if (index < 4) {
			return 0;
		}
		if (index < 10) {
			return index - 3;
		}
		return index - 6;
	}
	
	function $Chunker_0(this$static, encoder) {
		this$static.encoder = encoder;
		this$static.decoder = null;
		this$static.alive = true;
		return this$static;
	}
	
	function $Chunker(this$static, decoder) {
		this$static.decoder = decoder;
		this$static.encoder = null;
		this$static.alive = true;
		return this$static;
	}
	
	function $processChunk(this$static) {
		var exception;
		if (!this$static.alive) {
			throw new IllegalStateException();
		}
		exception = true;
		try {
			if (this$static.encoder) {
				$processEncoderChunk(this$static);
			} else {
				$processDecoderChunk(this$static);
			}
			exception = false;
			return this$static.alive;
		} finally {
			if (exception) {
				this$static.alive = false;
			}
		}
	}
	
	function $processDecoderChunk(this$static) {
		var result;
		result = $CodeOneChunk(this$static.decoder);
		if (result == -1) {
			throw $IOException(new IOException(), 'corrupted input');
		}
		this$static.inBytesProcessed = N1_longLit;
		this$static.outBytesProcessed = this$static.decoder.nowPos64;
		if (result == 1 || compare(this$static.decoder.outSize, P0_longLit) >= 0 && compare(this$static.decoder.nowPos64, this$static.decoder.outSize) >= 0) {
			$CodeFinish(this$static.decoder);
			this$static.alive = false;
		}
	}
	
	function $processEncoderChunk(this$static) {
		$CodeOneBlock(this$static.encoder, this$static.encoder.processedInSize, this$static.encoder.processedOutSize, this$static.encoder.finished);
		this$static.inBytesProcessed = this$static.encoder.processedInSize[0];
		if (this$static.encoder.finished[0]) {
			$ReleaseStreams(this$static.encoder);
			this$static.alive = false;
		}
	}
	
	function getClass_28() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit;
	}
	
	function Chunker() {
	}
	
	_ = Chunker.prototype = new Object_0();
	_.getClass$ = getClass_28;
	_.typeId$ = 0;
	_.alive = false;
	_.decoder = null;
	_.encoder = null;
	function $CodeFinish(this$static) {
		$Flush_0(this$static.m_OutWindow);
		$ReleaseStream(this$static.m_OutWindow);
		this$static.m_RangeDecoder.Stream = null;
	}
	
	function $CodeInChunks(this$static, inStream, outStream, outSize) {
		this$static.m_RangeDecoder.Stream = inStream;
		$SetStream_0(this$static.m_OutWindow, outStream);
		$Init_1(this$static);
		this$static.state = 0;
		this$static.rep0 = 0;
		this$static.rep1 = 0;
		this$static.rep2 = 0;
		this$static.rep3 = 0;
		this$static.outSize = outSize;
		this$static.nowPos64 = P0_longLit;
		this$static.prevByte = 0;
		return $Chunker(new Chunker(), this$static);
	}
	
	function $CodeOneChunk(this$static) {
	var decoder2, distance, len, numDirectBits, posSlot, posState;
	posState = lowBits_0(this$static.nowPos64) & this$static.m_PosStateMask;
	if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsMatchDecoders, (this$static.state << 4) + posState) == 0) {
		decoder2 = $GetDecoder(this$static.m_LiteralDecoder, lowBits_0(this$static.nowPos64), this$static.prevByte);
		if (this$static.state < 7) {
		this$static.prevByte = $DecodeNormal(decoder2, this$static.m_RangeDecoder);
		}
		else {
		this$static.prevByte = $DecodeWithMatchByte(decoder2, this$static.m_RangeDecoder, $GetByte(this$static.m_OutWindow, this$static.rep0));
		}
		$PutByte(this$static.m_OutWindow, this$static.prevByte);
		this$static.state = StateUpdateChar(this$static.state);
		this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
	} else {
		if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepDecoders, this$static.state) == 1) {
			len = 0;
			if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG0Decoders, this$static.state) == 0) {
				if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRep0LongDecoders, (this$static.state << 4) + posState) == 0) {
					this$static.state = this$static.state < 7?9:11;
					len = 1;
				}
			} else {
				if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG1Decoders, this$static.state) == 0) {
					distance = this$static.rep1;
				} else {
					if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG2Decoders, this$static.state) == 0) {
						distance = this$static.rep2;
					} else {
						distance = this$static.rep3;
						this$static.rep3 = this$static.rep2;
					}
					this$static.rep2 = this$static.rep1;
				}
				this$static.rep1 = this$static.rep0;
				this$static.rep0 = distance;
			}
			if (len == 0) {
				len = $Decode(this$static.m_RepLenDecoder, this$static.m_RangeDecoder, posState) + 2;
				this$static.state = this$static.state < 7?8:11;
			}
		} else {
			this$static.rep3 = this$static.rep2;
			this$static.rep2 = this$static.rep1;
			this$static.rep1 = this$static.rep0;
			len = 2 + $Decode(this$static.m_LenDecoder, this$static.m_RangeDecoder, posState);
			this$static.state = this$static.state < 7?7:10;
			posSlot = $Decode_0(this$static.m_PosSlotDecoder[GetLenToPosState(len)], this$static.m_RangeDecoder);
			if (posSlot >= 4) {
				numDirectBits = (posSlot >> 1) - 1;
				this$static.rep0 = (2 | posSlot & 1) << numDirectBits;
				if (posSlot < 14) {
					this$static.rep0 += ReverseDecode(this$static.m_PosDecoders, this$static.rep0 - posSlot - 1, this$static.m_RangeDecoder, numDirectBits);
				} else {
					this$static.rep0 += $DecodeDirectBits(this$static.m_RangeDecoder, numDirectBits - 4) << 4;
					this$static.rep0 += $ReverseDecode(this$static.m_PosAlignDecoder, this$static.m_RangeDecoder);
					if (this$static.rep0 < 0) {
						if (this$static.rep0 == -1) {
							return 1;
						}
						return -1;
					}
				}
			} else 
				this$static.rep0 = posSlot;
			}
			if (compare(fromInt(this$static.rep0), this$static.nowPos64) >= 0 || this$static.rep0 >= this$static.m_DictionarySizeCheck) {
				return -1;
			}
			$CopyBlock(this$static.m_OutWindow, this$static.rep0, len);
			this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
			this$static.prevByte = $GetByte(this$static.m_OutWindow, 0);
		}
		return 0;
	}
	
	function $Decoder(this$static) {
		var i;
		this$static.m_OutWindow = new OutWindow();
		this$static.m_RangeDecoder = new Decoder_0();
		this$static.m_IsMatchDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static.m_IsRepDecoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRepG0Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRepG1Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRepG2Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRep0LongDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static.m_PosSlotDecoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 4, 0);
		this$static.m_PosDecoders = initDim(_3S_classLit, 0, -1, 114, 1);
		this$static.m_PosAlignDecoder = $BitTreeDecoder(new BitTreeDecoder(), 4);
		this$static.m_LenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
		this$static.m_RepLenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
		this$static.m_LiteralDecoder = new Decoder$LiteralDecoder();
		for (i = 0; i < 4; ++i) {
			this$static.m_PosSlotDecoder[i] = $BitTreeDecoder(new BitTreeDecoder(), 6);
		}
		return this$static;
	}
	
	function $Init_1(this$static) {
		var i;
		$Init_7(this$static.m_OutWindow, false);
		InitBitModels(this$static.m_IsMatchDecoders);
		InitBitModels(this$static.m_IsRep0LongDecoders);
		InitBitModels(this$static.m_IsRepDecoders);
		InitBitModels(this$static.m_IsRepG0Decoders);
		InitBitModels(this$static.m_IsRepG1Decoders);
		InitBitModels(this$static.m_IsRepG2Decoders);
		InitBitModels(this$static.m_PosDecoders);
		$Init_0(this$static.m_LiteralDecoder);
		for (i = 0; i < 4; ++i) {
			InitBitModels(this$static.m_PosSlotDecoder[i].Models);
		}
		$Init(this$static.m_LenDecoder);
		$Init(this$static.m_RepLenDecoder);
		InitBitModels(this$static.m_PosAlignDecoder.Models);
		$Init_8(this$static.m_RangeDecoder);
	}
	
	function $SetDecoderProperties(this$static, properties) {
		var dictionarySize, i, lc, lp, pb, remainder, val;
		if (properties.length < 5)
			return false;
		val = properties[0] & 255;
		lc = val % 9;
		remainder = ~~(val / 9);
		lp = remainder % 5;
		pb = ~~(remainder / 5);
		dictionarySize = 0;
		for (i = 0; i < 4; ++i) {
			dictionarySize += (properties[1 + i] & 255) << i * 8;
		}
		if (!$SetLcLpPb(this$static, lc, lp, pb)) {
			return false;
		}
		return $SetDictionarySize(this$static, dictionarySize);
	}
	
	function $SetDictionarySize(this$static, dictionarySize) {
		if (dictionarySize < 0) {
			return false;
		}
		if (this$static.m_DictionarySize != dictionarySize) {
			this$static.m_DictionarySize = dictionarySize;
			this$static.m_DictionarySizeCheck = max(this$static.m_DictionarySize, 1);
			$Create_5(this$static.m_OutWindow, max(this$static.m_DictionarySizeCheck, 4096));
		}
		return true;
	}
	
	function $SetLcLpPb(this$static, lc, lp, pb) {
		var numPosStates;
		if (lc > 8 || lp > 4 || pb > 4) {
			return false;
		}
		$Create_0(this$static.m_LiteralDecoder, lp, lc);
		numPosStates = 1 << pb;
		$Create(this$static.m_LenDecoder, numPosStates);
		$Create(this$static.m_RepLenDecoder, numPosStates);
		this$static.m_PosStateMask = numPosStates - 1;
		return true;
	}
	
	function getClass_32() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit;
	}
	
	function Decoder() {
	}
	
	_ = Decoder.prototype = new Object_0();
	_.getClass$ = getClass_32;
	_.typeId$ = 0;
	_.m_DictionarySize = -1;
	_.m_DictionarySizeCheck = -1;
	_.m_PosStateMask = 0;
	_.nowPos64 = P0_longLit;
	_.outSize = P0_longLit;
	_.prevByte = 0;
	_.rep0 = 0;
	_.rep1 = 0;
	_.rep2 = 0;
	_.rep3 = 0;
	_.state = 0;
	function $Create(this$static, numPosStates) {
		for (; this$static.m_NumPosStates < numPosStates; ++this$static.m_NumPosStates) {
			this$static.m_LowCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
			this$static.m_MidCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
		}
	}
	
	function $Decode(this$static, rangeDecoder, posState) {
		var symbol;
		if ($DecodeBit(rangeDecoder, this$static.m_Choice, 0) == 0) {
			return $Decode_0(this$static.m_LowCoder[posState], rangeDecoder);
		}
		symbol = 8;
		if ($DecodeBit(rangeDecoder, this$static.m_Choice, 1) == 0) {
			symbol += $Decode_0(this$static.m_MidCoder[posState], rangeDecoder);
		} else {
			symbol += 8 + $Decode_0(this$static.m_HighCoder, rangeDecoder);
		}
		return symbol;
	}
	
	function $Decoder$LenDecoder(this$static) {
		this$static.m_Choice = initDim(_3S_classLit, 0, -1, 2, 1);
		this$static.m_LowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 16, 0);
		this$static.m_MidCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 16, 0);
		this$static.m_HighCoder = $BitTreeDecoder(new BitTreeDecoder(), 8);
		return this$static;
	}
	
	function $Init(this$static) {
		var posState;
		InitBitModels(this$static.m_Choice);
		for (posState = 0; posState < this$static.m_NumPosStates; ++posState) {
			InitBitModels(this$static.m_LowCoder[posState].Models);
			InitBitModels(this$static.m_MidCoder[posState].Models);
		}
		InitBitModels(this$static.m_HighCoder.Models);
	}
	
	function getClass_29() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit;
	}
	
	function Decoder$LenDecoder() {
	}
	
	_ = Decoder$LenDecoder.prototype = new Object_0();
	_.getClass$ = getClass_29;
	_.typeId$ = 0;
	_.m_NumPosStates = 0;
	function $Create_0(this$static, numPosBits, numPrevBits) {
	var i, numStates;
	if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits)
		return;
	this$static.m_NumPosBits = numPosBits;
	this$static.m_PosMask = (1 << numPosBits) - 1;
	this$static.m_NumPrevBits = numPrevBits;
	numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
	this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit, 0, 4, numStates, 0);
	for (i = 0; i < numStates; ++i)
		this$static.m_Coders[i] = $Decoder$LiteralDecoder$Decoder2(new Decoder$LiteralDecoder$Decoder2());
	}
	
	function $GetDecoder(this$static, pos, prevByte) {
		return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
	}
	
	function $Init_0(this$static) {
		var i, numStates;
		numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
		for (i = 0; i < numStates; ++i) {
			InitBitModels(this$static.m_Coders[i].m_Decoders);
		}
	}
	
	function getClass_31() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit;
	}
	
	function Decoder$LiteralDecoder() {
	}
	
	_ = Decoder$LiteralDecoder.prototype = new Object_0();
	_.getClass$ = getClass_31;
	_.typeId$ = 0;
	_.m_Coders = null;
	_.m_NumPosBits = 0;
	_.m_NumPrevBits = 0;
	_.m_PosMask = 0;
	function $DecodeNormal(this$static, rangeDecoder) {
		var symbol;
		symbol = 1;
		do {
			symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
		} while (symbol < 256);
		return symbol << 24 >> 24;
	}
	
	function $DecodeWithMatchByte(this$static, rangeDecoder, matchByte) {
		var bit, matchBit, symbol;
		symbol = 1;
		do {
			matchBit = matchByte >> 7 & 1;
			matchByte <<= 1;
			bit = $DecodeBit(rangeDecoder, this$static.m_Decoders, (1 + matchBit << 8) + symbol);
			symbol = symbol << 1 | bit;
			if (matchBit != bit) {
				while (symbol < 256) {
					symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
				}
			break;
			}
		} while (symbol < 256);
		return symbol << 24 >> 24;
	}
	
	function $Decoder$LiteralDecoder$Decoder2(this$static) {
		this$static.m_Decoders = initDim(_3S_classLit, 0, -1, 768, 1);
		return this$static;
	}
	
	function getClass_30() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit;
	}
	
	function Decoder$LiteralDecoder$Decoder2() {
	}
	
	_ = Decoder$LiteralDecoder$Decoder2.prototype = new Object_0();
	_.getClass$ = getClass_30;
	_.typeId$ = 17;
	function $clinit_59() {
		$clinit_59 = nullMethod;
		var c, j, k, slotFast;
		g_FastPos = initDim(_3B_classLit, 0, -1, 2048, 1);
		c = 2;
		g_FastPos[0] = 0;
		g_FastPos[1] = 1;
		for (slotFast = 2; slotFast < 22; ++slotFast) {
			k = 1 << (slotFast >> 1) - 1;
			for (j = 0; j < k; ++j , ++c)
			g_FastPos[c] = slotFast << 24 >> 24;
		}
	}
	
	function $Backward(this$static, cur) {
		var backCur, backMem, posMem, posPrev;
		this$static._optimumEndIndex = cur;
		posMem = this$static._optimum[cur].PosPrev;
		backMem = this$static._optimum[cur].BackPrev;
		do {
			if (this$static._optimum[cur].Prev1IsChar) {
				$MakeAsChar(this$static._optimum[posMem]);
				this$static._optimum[posMem].PosPrev = posMem - 1;
				if (this$static._optimum[cur].Prev2) {
					this$static._optimum[posMem - 1].Prev1IsChar = false;
					this$static._optimum[posMem - 1].PosPrev = this$static._optimum[cur].PosPrev2;
					this$static._optimum[posMem - 1].BackPrev = this$static._optimum[cur].BackPrev2;
				}
			}
			posPrev = posMem;
			backCur = backMem;
			backMem = this$static._optimum[posPrev].BackPrev;
			posMem = this$static._optimum[posPrev].PosPrev;
			this$static._optimum[posPrev].BackPrev = backCur;
			this$static._optimum[posPrev].PosPrev = cur;
			cur = posPrev;
		} while (cur > 0);
		this$static.backRes = this$static._optimum[0].BackPrev;
		this$static._optimumCurrentIndex = this$static._optimum[0].PosPrev;
		return this$static._optimumCurrentIndex;
	}
	
	function $BaseInit(this$static) {
		var i;
		this$static._state = 0;
		this$static._previousByte = 0;
		for (i = 0; i < 4; ++i) {
			this$static._repDistances[i] = 0;
		}
	}
	
	function $CodeOneBlock(this$static, inSize, outSize, finished) {
		var baseVal, complexState, curByte, distance, footerBits, i, len, lenToPosState, matchByte, pos, posReduced, posSlot, posState, progressPosValuePrev, subCoder;
		inSize[0] = P0_longLit;
		outSize[0] = P0_longLit;
		finished[0] = true;
		if (this$static._inStream) {
			this$static._matchFinder._stream = this$static._inStream;
			$Init_5(this$static._matchFinder);
			this$static._needReleaseMFStream = true;
			this$static._inStream = null;
		}
		if (this$static._finished) {
			return;
		}
		this$static._finished = true;
		progressPosValuePrev = this$static.nowPos64;
		if (eq(this$static.nowPos64, P0_longLit)) {
			if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
				$Flush(this$static, lowBits_0(this$static.nowPos64));
				return;
			}
			$ReadMatchDistances(this$static);
			posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
			$Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 0);
			this$static._state = StateUpdateChar(this$static._state);
			curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
			$Encode_1($GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte), this$static._rangeEncoder, curByte);
			this$static._previousByte = curByte;
			--this$static._additionalOffset;
			this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
		}
		if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
			$Flush(this$static, lowBits_0(this$static.nowPos64));
			return;
		}
		while (true) {
			len = $GetOptimum(this$static, lowBits_0(this$static.nowPos64));
			pos = this$static.backRes;
			posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
			complexState = (this$static._state << 4) + posState;
			if (len == 1 && pos == -1) {
				$Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 0);
				curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
				subCoder = $GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte);
				if (this$static._state < 7) {
					$Encode_1(subCoder, this$static._rangeEncoder, curByte);
				} else {
					matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - this$static._additionalOffset);
					$EncodeMatched(subCoder, this$static._rangeEncoder, matchByte, curByte);
				}
				this$static._previousByte = curByte;
				this$static._state = StateUpdateChar(this$static._state);
			} else {
				$Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 1);
				if (pos < 4) {
					$Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 1);
					if (pos == 0) {
						$Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 0);
						if (len == 1) {
							$Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 0);
						} else {
							$Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 1);
						}
					} else {
						$Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 1);
						if (pos == 1) {
							$Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 0);
						} else {
							$Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 1);
							$Encode_3(this$static._rangeEncoder, this$static._isRepG2, this$static._state, pos - 2);
						}
					}
					if (len == 1) {
						this$static._state = this$static._state < 7?9:11;
					} else {
						$Encode_0(this$static._repMatchLenEncoder, this$static._rangeEncoder, len - 2, posState);
						this$static._state = this$static._state < 7?8:11;
					}
					distance = this$static._repDistances[pos];
					if (pos != 0) {
						for (i = pos; i >= 1; --i) {
							this$static._repDistances[i] = this$static._repDistances[i - 1];
						}
						this$static._repDistances[0] = distance;
					}
				} else {
					$Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
					this$static._state = this$static._state < 7?7:10;
					$Encode_0(this$static._lenEncoder, this$static._rangeEncoder, len - 2, posState);
					pos -= 4;
					posSlot = GetPosSlot(pos);
					lenToPosState = GetLenToPosState(len);
					$Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, posSlot);
					if (posSlot >= 4) {
						footerBits = (posSlot >> 1) - 1;
						baseVal = (2 | posSlot & 1) << footerBits;
						posReduced = pos - baseVal;
						if (posSlot < 14) {
							ReverseEncode(this$static._posEncoders, baseVal - posSlot - 1, this$static._rangeEncoder, footerBits, posReduced);
						} else {
							$EncodeDirectBits(this$static._rangeEncoder, posReduced >> 4, footerBits - 4);
							$ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, posReduced & 15);
							++this$static._alignPriceCount;
						}
					}
					distance = pos;
					for (i = 3; i >= 1; --i) {
						this$static._repDistances[i] = this$static._repDistances[i - 1];
					}
					this$static._repDistances[0] = distance;
					++this$static._matchPriceCount;
				}
				this$static._previousByte = $GetIndexByte(this$static._matchFinder, len - 1 - this$static._additionalOffset);
			}
			this$static._additionalOffset -= len;
			this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
			if (this$static._additionalOffset == 0) {
				if (this$static._matchPriceCount >= 128) {
					$FillDistancesPrices(this$static);
				}
				if (this$static._alignPriceCount >= 16) {
					$FillAlignPrices(this$static);
				}
				inSize[0] = this$static.nowPos64;
				outSize[0] = $GetProcessedSizeAdd(this$static._rangeEncoder);
				if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
					$Flush(this$static, lowBits_0(this$static.nowPos64));
					return;
				}
				if (compare(sub(this$static.nowPos64, progressPosValuePrev), P1000_longLit) >= 0) {
					this$static._finished = false;
					finished[0] = false;
					return;
				}
			}
		}
	}
	
	function $Create_2(this$static) {
		var bt, numHashBytes;
		if (!this$static._matchFinder) {
			bt = ($clinit_60() , new BinTree());
			numHashBytes = 4;
			if (this$static._matchFinderType == 0) {
				numHashBytes = 2;
			}
			$SetType(bt, numHashBytes);
			this$static._matchFinder = bt;
		}
		$Create_1(this$static._literalEncoder, this$static._numLiteralPosStateBits, this$static._numLiteralContextBits);
		if (this$static._dictionarySize == this$static._dictionarySizePrev && this$static._numFastBytesPrev == this$static._numFastBytes) {
			return;
		}
		$Create_3(this$static._matchFinder, this$static._dictionarySize, 4096, this$static._numFastBytes, 274);
		this$static._dictionarySizePrev = this$static._dictionarySize;
		this$static._numFastBytesPrev = this$static._numFastBytes;
	}
	
	function $Encoder(this$static) {
		var i;
		$clinit_59();
		this$static._repDistances = initDim(_3I_classLit, 0, -1, 4, 1);
		this$static._optimum = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit, 0, 6, 4096, 0);
		this$static._rangeEncoder = ($clinit_66() , new Encoder_0());
		this$static._isMatch = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static._isRep = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRepG0 = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRepG1 = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRepG2 = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRep0Long = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static._posSlotEncoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 4, 0);
		this$static._posEncoders = initDim(_3S_classLit, 0, -1, 114, 1);
		this$static._posAlignEncoder = $BitTreeEncoder(new BitTreeEncoder(), 4);
		this$static._lenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
		this$static._repMatchLenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
		this$static._literalEncoder = new Encoder$LiteralEncoder();
		this$static._matchDistances = initDim(_3I_classLit, 0, -1, 548, 1);
		this$static._posSlotPrices = initDim(_3I_classLit, 0, -1, 256, 1);
		this$static._distancesPrices = initDim(_3I_classLit, 0, -1, 512, 1);
		this$static._alignPrices = initDim(_3I_classLit, 0, -1, 16, 1);
		this$static.reps = initDim(_3I_classLit, 0, -1, 4, 1);
		this$static.repLens = initDim(_3I_classLit, 0, -1, 4, 1);
		this$static.processedInSize = initDim(_3J_classLit, 0, -1, 1, 3);
		this$static.processedOutSize = initDim(_3J_classLit, 0, -1, 1, 3);
		this$static.finished = initDim(_3Z_classLit, 0, -1, 1, 2);
		this$static.properties = initDim(_3B_classLit, 0, -1, 5, 1);
		this$static.tempPrices = initDim(_3I_classLit, 0, -1, 128, 1);
		for (i = 0; i < 4096; ++i) {
			this$static._optimum[i] = new Encoder$Optimal();
		}
		for (i = 0; i < 4; ++i) {
			this$static._posSlotEncoder[i] = $BitTreeEncoder(new BitTreeEncoder(), 6);
		}
		return this$static;
	}
	
	function $FillAlignPrices(this$static) {
		var i;
		for (i = 0; i < 16; ++i) {
			this$static._alignPrices[i] = $ReverseGetPrice(this$static._posAlignEncoder, i);
		}
		this$static._alignPriceCount = 0;
	}
	
	function $FillDistancesPrices(this$static) {
		var baseVal, encoder, footerBits, i, lenToPosState, posSlot, st, st2;
		for (i = 4; i < 128; ++i) {
			posSlot = GetPosSlot(i);
			footerBits = (posSlot >> 1) - 1;
			baseVal = (2 | posSlot & 1) << footerBits;
			this$static.tempPrices[i] = ReverseGetPrice(this$static._posEncoders, baseVal - posSlot - 1, footerBits, i - baseVal);
		}
		for (lenToPosState = 0; lenToPosState < 4; ++lenToPosState) {
			encoder = this$static._posSlotEncoder[lenToPosState];
			st = lenToPosState << 6;
			for (posSlot = 0; posSlot < this$static._distTableSize; ++posSlot) {
				this$static._posSlotPrices[st + posSlot] = $GetPrice_1(encoder, posSlot);
			}
			for (posSlot = 14; posSlot < this$static._distTableSize; ++posSlot) {
				this$static._posSlotPrices[st + posSlot] += (posSlot >> 1) - 1 - 4 << 6;
			}
			st2 = lenToPosState * 128;
			for (i = 0; i < 4; ++i) {
				this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + i];
			}
			for (; i < 128; ++i) {
				this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + GetPosSlot(i)] + this$static.tempPrices[i];
			}
		}
		this$static._matchPriceCount = 0;
	}
	
	function $Flush(this$static, nowPos) {
		$ReleaseMFStream(this$static);
		$WriteEndMarker(this$static, nowPos & this$static._posStateMask);
		$FlushData(this$static._rangeEncoder);
	}
	
	function $GetOptimum(this$static, position) {
		var cur, curAnd1Price, curAndLenCharPrice, curAndLenPrice, curBack, curPrice, currentByte, distance, i, len, lenEnd, lenMain, lenRes, lenTest, lenTest2, lenTestTemp, matchByte, matchPrice, newLen, nextIsChar, nextMatchPrice, nextOptimum, nextRepMatchPrice, normalMatchPrice, numAvailableBytes, numAvailableBytesFull, numDistancePairs, offs, offset, opt, optimum, pos, posPrev, posState, posStateNext, price_4, repIndex, repLen, repMatchPrice, repMaxIndex, shortRepPrice, startLen, state, state2, t, price, price_0, price_1, price_2, price_3;
		if (this$static._optimumEndIndex != this$static._optimumCurrentIndex) {
			lenRes = this$static._optimum[this$static._optimumCurrentIndex].PosPrev - this$static._optimumCurrentIndex;
			this$static.backRes = this$static._optimum[this$static._optimumCurrentIndex].BackPrev;
			this$static._optimumCurrentIndex = this$static._optimum[this$static._optimumCurrentIndex].PosPrev;
			return lenRes;
		}
		this$static._optimumCurrentIndex = this$static._optimumEndIndex = 0;
		if (this$static._longestMatchWasFound) {
			lenMain = this$static._longestMatchLength;
			this$static._longestMatchWasFound = false;
		} else {
			lenMain = $ReadMatchDistances(this$static);
		}
		numDistancePairs = this$static._numDistancePairs;
		numAvailableBytes = $GetNumAvailableBytes(this$static._matchFinder) + 1;
		if (numAvailableBytes < 2) {
			this$static.backRes = -1;
			return 1;
		}
		if (numAvailableBytes > 273) {
			numAvailableBytes = 273;
		}
		repMaxIndex = 0;
		for (i = 0; i < 4; ++i) {
			this$static.reps[i] = this$static._repDistances[i];
			this$static.repLens[i] = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[i], 273);
			if (this$static.repLens[i] > this$static.repLens[repMaxIndex]) {
				repMaxIndex = i;
			}
		}
		if (this$static.repLens[repMaxIndex] >= this$static._numFastBytes) {
			this$static.backRes = repMaxIndex;
			lenRes = this$static.repLens[repMaxIndex];
			$MovePos(this$static, lenRes - 1);
			return lenRes;
		}
		if (lenMain >= this$static._numFastBytes) {
			this$static.backRes = this$static._matchDistances[numDistancePairs - 1] + 4;
			$MovePos(this$static, lenMain - 1);
			return lenMain;
		}
		currentByte = $GetIndexByte(this$static._matchFinder, -1);
		matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - 1);
		if (lenMain < 2 && currentByte != matchByte && this$static.repLens[repMaxIndex] < 2) {
			this$static.backRes = -1;
			return 1;
		}
		this$static._optimum[0].State = this$static._state;
		posState = position & this$static._posStateMask;
		this$static._optimum[1].Price = ($clinit_66() , ProbPrices[this$static._isMatch[(this$static._state << 4) + posState] >>> 2]) + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, this$static._previousByte), this$static._state >= 7, matchByte, currentByte);
		$MakeAsChar(this$static._optimum[1]);
		matchPrice = ProbPrices[2048 - this$static._isMatch[(this$static._state << 4) + posState] >>> 2];
		repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[this$static._state] >>> 2];
		if (matchByte == currentByte) {
			shortRepPrice = repMatchPrice + $GetRepLen1Price(this$static, this$static._state, posState);
			if (shortRepPrice < this$static._optimum[1].Price) {
				this$static._optimum[1].Price = shortRepPrice;
				$MakeAsShortRep(this$static._optimum[1]);
			}
		}
		lenEnd = lenMain >= this$static.repLens[repMaxIndex]?lenMain:this$static.repLens[repMaxIndex];
		if (lenEnd < 2) {
			this$static.backRes = this$static._optimum[1].BackPrev;
			return 1;
		}
		this$static._optimum[1].PosPrev = 0;
		this$static._optimum[0].Backs0 = this$static.reps[0];
		this$static._optimum[0].Backs1 = this$static.reps[1];
		this$static._optimum[0].Backs2 = this$static.reps[2];
		this$static._optimum[0].Backs3 = this$static.reps[3];
		len = lenEnd;
		do {
			this$static._optimum[len--].Price = 268435455;
		} while (len >= 2);
		for (i = 0; i < 4; ++i) {
			repLen = this$static.repLens[i];
			if (repLen < 2) {
				continue;
			}
			price_4 = repMatchPrice + $GetPureRepPrice(this$static, i, this$static._state, posState);
			do {
				curAndLenPrice = price_4 + $GetPrice(this$static._repMatchLenEncoder, repLen - 2, posState);
				optimum = this$static._optimum[repLen];
				if (curAndLenPrice < optimum.Price) {
					optimum.Price = curAndLenPrice;
					optimum.PosPrev = 0;
					optimum.BackPrev = i;
					optimum.Prev1IsChar = false;
				}
			} while (--repLen >= 2);
		}
		normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[this$static._state] >>> 2];
		len = this$static.repLens[0] >= 2?this$static.repLens[0] + 1:2;
		if (len <= lenMain) {
			offs = 0;
			while (len > this$static._matchDistances[offs]) {
				offs += 2;
			}
			for (;; ++len) {
				distance = this$static._matchDistances[offs + 1];
				curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, distance, len, posState);
				optimum = this$static._optimum[len];
				if (curAndLenPrice < optimum.Price) {
					optimum.Price = curAndLenPrice;
					optimum.PosPrev = 0;
					optimum.BackPrev = distance + 4;
					optimum.Prev1IsChar = false;
				}
				if (len == this$static._matchDistances[offs]) {
					offs += 2;
					if (offs == numDistancePairs) {
						break;
					}
				}
			}
		}
		cur = 0;
		while (true) {
			++cur;
			if (cur == lenEnd) {
				return $Backward(this$static, cur);
			}
			newLen = $ReadMatchDistances(this$static);
			numDistancePairs = this$static._numDistancePairs;
			if (newLen >= this$static._numFastBytes) {
				this$static._longestMatchLength = newLen;
				this$static._longestMatchWasFound = true;
				return $Backward(this$static, cur);
			}
			++position;
			posPrev = this$static._optimum[cur].PosPrev;
			if (this$static._optimum[cur].Prev1IsChar) {
				--posPrev;
				if (this$static._optimum[cur].Prev2) {
					state = this$static._optimum[this$static._optimum[cur].PosPrev2].State;
					if (this$static._optimum[cur].BackPrev2 < 4) {
						state = (state < 7) ? 8 : 11;
					} else {
						state = (state < 7) ? 7 : 10;
					}
				} else {
					state = this$static._optimum[posPrev].State;
				}
				state = StateUpdateChar(state);
			} else {
				state = this$static._optimum[posPrev].State;
			}
			if (posPrev == cur - 1) {
				if (this$static._optimum[cur].BackPrev == 0) {
					state = state < 7?9:11;
				} else {
					state = StateUpdateChar(state);
				}
			} else {
				if (this$static._optimum[cur].Prev1IsChar && this$static._optimum[cur].Prev2) {
					posPrev = this$static._optimum[cur].PosPrev2;
					pos = this$static._optimum[cur].BackPrev2;
					state = state < 7?8:11;
				} else {
					pos = this$static._optimum[cur].BackPrev;
					if (pos < 4) {
						state = state < 7?8:11;
					} else {
						state = state < 7?7:10;
					}
				}
				opt = this$static._optimum[posPrev];
				if (pos < 4) {
					if (pos == 0) {
						this$static.reps[0] = opt.Backs0;
						this$static.reps[1] = opt.Backs1;
						this$static.reps[2] = opt.Backs2;
						this$static.reps[3] = opt.Backs3;
					} else if (pos == 1) {
						this$static.reps[0] = opt.Backs1;
						this$static.reps[1] = opt.Backs0;
						this$static.reps[2] = opt.Backs2;
						this$static.reps[3] = opt.Backs3;
					} else if (pos == 2) {
						this$static.reps[0] = opt.Backs2;
						this$static.reps[1] = opt.Backs0;
						this$static.reps[2] = opt.Backs1;
						this$static.reps[3] = opt.Backs3;
					} else {
						this$static.reps[0] = opt.Backs3;
						this$static.reps[1] = opt.Backs0;
						this$static.reps[2] = opt.Backs1;
						this$static.reps[3] = opt.Backs2;
					}
				} else {
					this$static.reps[0] = pos - 4;
					this$static.reps[1] = opt.Backs0;
					this$static.reps[2] = opt.Backs1;
					this$static.reps[3] = opt.Backs2;
				}
			}
			this$static._optimum[cur].State = state;
			this$static._optimum[cur].Backs0 = this$static.reps[0];
			this$static._optimum[cur].Backs1 = this$static.reps[1];
			this$static._optimum[cur].Backs2 = this$static.reps[2];
			this$static._optimum[cur].Backs3 = this$static.reps[3];
			curPrice = this$static._optimum[cur].Price;
			currentByte = $GetIndexByte(this$static._matchFinder, -1);
			matchByte = $GetIndexByte(this$static._matchFinder, -this$static.reps[0] - 1 - 1);
			posState = position & this$static._posStateMask;
			curAnd1Price = curPrice + ProbPrices[this$static._isMatch[(state << 4) + posState] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, $GetIndexByte(this$static._matchFinder, -2)), state >= 7, matchByte, currentByte);
			nextOptimum = this$static._optimum[cur + 1];
			nextIsChar = false;
			if (curAnd1Price < nextOptimum.Price) {
				nextOptimum.Price = curAnd1Price;
				nextOptimum.PosPrev = cur;
				nextOptimum.BackPrev = -1;
				nextOptimum.Prev1IsChar = false;
				nextIsChar = true;
			}
			matchPrice = curPrice + ProbPrices[2048 - this$static._isMatch[(state << 4) + posState] >>> 2];
			repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[state] >>> 2];
			if (matchByte == currentByte && !(nextOptimum.PosPrev < cur && nextOptimum.BackPrev == 0)) {
				shortRepPrice = repMatchPrice + (ProbPrices[this$static._isRepG0[state] >>> 2] + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2]);
				if (shortRepPrice <= nextOptimum.Price) {
					nextOptimum.Price = shortRepPrice;
					nextOptimum.PosPrev = cur;
					nextOptimum.BackPrev = 0;
					nextOptimum.Prev1IsChar = false;
					nextIsChar = true;
				}
			}
			numAvailableBytesFull = $GetNumAvailableBytes(this$static._matchFinder) + 1;
			numAvailableBytesFull = 4095 - cur < numAvailableBytesFull?4095 - cur:numAvailableBytesFull;
			numAvailableBytes = numAvailableBytesFull;
			if (numAvailableBytes < 2) {
				continue;
			}
			if (numAvailableBytes > this$static._numFastBytes) {
				numAvailableBytes = this$static._numFastBytes;
			}
			if (!nextIsChar && matchByte != currentByte) {
				t = min(numAvailableBytesFull - 1, this$static._numFastBytes);
				lenTest2 = $GetMatchLen(this$static._matchFinder, 0, this$static.reps[0], t);
				if (lenTest2 >= 2) {
					state2 = StateUpdateChar(state);
					posStateNext = position + 1 & this$static._posStateMask;
					nextRepMatchPrice = curAnd1Price + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
					offset = cur + 1 + lenTest2;
					while (lenEnd < offset) {
						this$static._optimum[++lenEnd].Price = 268435455;
					}
					curAndLenPrice = nextRepMatchPrice + (price = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price + $GetPureRepPrice(this$static, 0, state2, posStateNext));
					optimum = this$static._optimum[offset];
					if (curAndLenPrice < optimum.Price) {
						optimum.Price = curAndLenPrice;
						optimum.PosPrev = cur + 1;
						optimum.BackPrev = 0;
						optimum.Prev1IsChar = true;
						optimum.Prev2 = false;
					}
				}
			}
			startLen = 2;
			for (repIndex = 0; repIndex < 4; ++repIndex) {
				lenTest = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[repIndex], numAvailableBytes);
				if (lenTest < 2) {
					continue;
				}
				lenTestTemp = lenTest;
				do {
					while (lenEnd < cur + lenTest) {
						this$static._optimum[++lenEnd].Price = 268435455;
					}
					curAndLenPrice = repMatchPrice + (price_0 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_0 + $GetPureRepPrice(this$static, repIndex, state, posState));
					optimum = this$static._optimum[cur + lenTest];
					if (curAndLenPrice < optimum.Price) {
						optimum.Price = curAndLenPrice;
						optimum.PosPrev = cur;
						optimum.BackPrev = repIndex;
						optimum.Prev1IsChar = false;
					}
				} while (--lenTest >= 2);
				lenTest = lenTestTemp;
				if (repIndex == 0) {
					startLen = lenTest + 1;
				}
				if (lenTest < numAvailableBytesFull) {
					t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
					lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, this$static.reps[repIndex], t);
					if (lenTest2 >= 2) {
						state2 = state < 7?8:11;
						posStateNext = position + lenTest & this$static._posStateMask;
						curAndLenCharPrice = repMatchPrice + (price_1 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_1 + $GetPureRepPrice(this$static, repIndex, state, posState)) + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - 1 - (this$static.reps[repIndex] + 1)), $GetIndexByte(this$static._matchFinder, lenTest - 1));
						state2 = StateUpdateChar(state2);
						posStateNext = position + lenTest + 1 & this$static._posStateMask;
						nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
						nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
						offset = lenTest + 1 + lenTest2;
						while (lenEnd < cur + offset) {
							this$static._optimum[++lenEnd].Price = 268435455;
						}
						curAndLenPrice = nextRepMatchPrice + (price_2 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_2 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
						optimum = this$static._optimum[cur + offset];
						if (curAndLenPrice < optimum.Price) {
							optimum.Price = curAndLenPrice;
							optimum.PosPrev = cur + lenTest + 1;
							optimum.BackPrev = 0;
							optimum.Prev1IsChar = true;
							optimum.Prev2 = true;
							optimum.PosPrev2 = cur;
							optimum.BackPrev2 = repIndex;
						}
					}
				}
			}
			if (newLen > numAvailableBytes) {
				newLen = numAvailableBytes;
				for (numDistancePairs = 0; newLen > this$static._matchDistances[numDistancePairs]; numDistancePairs += 2) {
				}
				this$static._matchDistances[numDistancePairs] = newLen;
				numDistancePairs += 2;
			}
			if (newLen >= startLen) {
			normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[state] >>> 2];
			while (lenEnd < cur + newLen) {
				this$static._optimum[++lenEnd].Price = 268435455;
			}
			offs = 0;
			while (startLen > this$static._matchDistances[offs]) {
				offs += 2;
			}
			for (lenTest = startLen;; ++lenTest) {
				curBack = this$static._matchDistances[offs + 1];
				curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, curBack, lenTest, posState);
				optimum = this$static._optimum[cur + lenTest];
				if (curAndLenPrice < optimum.Price) {
					optimum.Price = curAndLenPrice;
					optimum.PosPrev = cur;
					optimum.BackPrev = curBack + 4;
					optimum.Prev1IsChar = false;
				}
				if (lenTest == this$static._matchDistances[offs]) {
					if (lenTest < numAvailableBytesFull) {
						t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
						lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, curBack, t);
						if (lenTest2 >= 2) {
							state2 = state < 7?7:10;
							posStateNext = position + lenTest & this$static._posStateMask;
							curAndLenCharPrice = curAndLenPrice + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - (curBack + 1) - 1), $GetIndexByte(this$static._matchFinder, lenTest - 1));
							state2 = StateUpdateChar(state2);
							posStateNext = position + lenTest + 1 & this$static._posStateMask;
							nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
							nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
							offset = lenTest + 1 + lenTest2;
							while (lenEnd < cur + offset) {
								this$static._optimum[++lenEnd].Price = 268435455;
							}
							curAndLenPrice = nextRepMatchPrice + (price_3 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_3 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
							optimum = this$static._optimum[cur + offset];
							if (curAndLenPrice < optimum.Price) {
								optimum.Price = curAndLenPrice;
								optimum.PosPrev = cur + lenTest + 1;
								optimum.BackPrev = 0;
								optimum.Prev1IsChar = true;
								optimum.Prev2 = true;
								optimum.PosPrev2 = cur;
								optimum.BackPrev2 = curBack + 4;
							}
						}
					}
					offs += 2;
					if (offs == numDistancePairs)
						break;
					}
				}
			}
		}
	}
	
	function $GetPosLenPrice(this$static, pos, len, posState) {
		var lenToPosState, price;
		lenToPosState = GetLenToPosState(len);
		if (pos < 128) {
			price = this$static._distancesPrices[lenToPosState * 128 + pos];
		} else {
			price = this$static._posSlotPrices[(lenToPosState << 6) + GetPosSlot2(pos)] + this$static._alignPrices[pos & 15];
		}
		return price + $GetPrice(this$static._lenEncoder, len - 2, posState);
	}
	
	function $GetPureRepPrice(this$static, repIndex, state, posState) {
		var price;
		if (repIndex == 0) {
			price = ($clinit_66() , ProbPrices[this$static._isRepG0[state] >>> 2]);
			price += ProbPrices[2048 - this$static._isRep0Long[(state << 4) + posState] >>> 2];
		} else {
			price = ($clinit_66() , ProbPrices[2048 - this$static._isRepG0[state] >>> 2]);
			if (repIndex == 1) {
				price += ProbPrices[this$static._isRepG1[state] >>> 2];
			} else {
				price += ProbPrices[2048 - this$static._isRepG1[state] >>> 2];
				price += GetPrice(this$static._isRepG2[state], repIndex - 2);
			}
		}
		return price;
	}
	
	function $GetRepLen1Price(this$static, state, posState) {
		return ($clinit_66() , ProbPrices[this$static._isRepG0[state] >>> 2]) + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2];
	}
	
	function $Init_4(this$static) {
		var i;
		$BaseInit(this$static);
		$Init_9(this$static._rangeEncoder);
		InitBitModels_0(this$static._isMatch);
		InitBitModels_0(this$static._isRep0Long);
		InitBitModels_0(this$static._isRep);
		InitBitModels_0(this$static._isRepG0);
		InitBitModels_0(this$static._isRepG1);
		InitBitModels_0(this$static._isRepG2);
		InitBitModels_0(this$static._posEncoders);
		$Init_3(this$static._literalEncoder);
		for (i = 0; i < 4; ++i) {
			InitBitModels(this$static._posSlotEncoder[i].Models);
		}
		$Init_2(this$static._lenEncoder, 1 << this$static._posStateBits);
		$Init_2(this$static._repMatchLenEncoder, 1 << this$static._posStateBits);
		InitBitModels(this$static._posAlignEncoder.Models);
		this$static._longestMatchWasFound = false;
		this$static._optimumEndIndex = 0;
		this$static._optimumCurrentIndex = 0;
		this$static._additionalOffset = 0;
	}
	
	function $MovePos(this$static, num) {
		if (num > 0) {
			$Skip(this$static._matchFinder, num);
			this$static._additionalOffset += num;
		}
	}
	
	function $ReadMatchDistances(this$static) {
		var lenRes;
		lenRes = 0;
		this$static._numDistancePairs = $GetMatches(this$static._matchFinder, this$static._matchDistances);
		if (this$static._numDistancePairs > 0) {
			lenRes = this$static._matchDistances[this$static._numDistancePairs - 2];
			if (lenRes == this$static._numFastBytes)
			lenRes += $GetMatchLen(this$static._matchFinder, lenRes - 1, this$static._matchDistances[this$static._numDistancePairs - 1], 273 - lenRes);
		}
		++this$static._additionalOffset;
		return lenRes;
	}
	
	function $ReleaseMFStream(this$static) {
		if (!!this$static._matchFinder && this$static._needReleaseMFStream) {
			this$static._matchFinder._stream = null;
			this$static._needReleaseMFStream = false;
		}
	}
	
	function $ReleaseStreams(this$static) {
		$ReleaseMFStream(this$static);
		this$static._rangeEncoder.Stream = null;
	}
	
	function $SetDictionarySize_0(this$static, dictionarySize) {
		var dicLogSize;
		if (dictionarySize < 1 || dictionarySize > 536870912) {
			return false;
		}
		this$static._dictionarySize = dictionarySize;
		for (dicLogSize = 0; dictionarySize > 1 << dicLogSize; ++dicLogSize) {
		}
		this$static._distTableSize = dicLogSize * 2;
		return true;
	}
	
	function $SetLcLpPb_0(this$static, lc, lp, pb) {
		if (lp < 0 || lp > 4 || lc < 0 || lc > 8 || pb < 0 || pb > 4) {
			return false;
		}
		this$static._numLiteralPosStateBits = lp;
		this$static._numLiteralContextBits = lc;
		this$static._posStateBits = pb;
		this$static._posStateMask = (1 << this$static._posStateBits) - 1;
		return true;
	}
	
	function $SetMatchFinder(this$static, matchFinderIndex) {
		var matchFinderIndexPrev;
		if (matchFinderIndex < 0 || matchFinderIndex > 2) {
			return false;
		}
		matchFinderIndexPrev = this$static._matchFinderType;
		this$static._matchFinderType = matchFinderIndex;
		if (!!this$static._matchFinder && matchFinderIndexPrev != this$static._matchFinderType) {
			this$static._dictionarySizePrev = -1;
			this$static._matchFinder = null;
		}
		return true;
	}
	
	function $SetNumFastBytes(this$static, numFastBytes) {
		if (numFastBytes < 5 || numFastBytes > 273) {
			return false;
		}
		this$static._numFastBytes = numFastBytes;
		return true;
	}
	
	function $WriteCoderProperties(this$static, outStream) {
		var i;
		this$static.properties[0] = (this$static._posStateBits * 5 + this$static._numLiteralPosStateBits) * 9 + this$static._numLiteralContextBits << 24 >> 24;
		for (i = 0; i < 4; ++i) {
			this$static.properties[1 + i] = this$static._dictionarySize >> 8 * i << 24 >> 24;
		}
		$write_0(outStream, this$static.properties, 0, 5);
	}
	
	function $WriteEndMarker(this$static, posState) {
		var lenToPosState;
		if (!this$static._writeEndMark) {
			return;
		}
		$Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 1);
		$Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
		this$static._state = this$static._state < 7?7:10;
		$Encode_0(this$static._lenEncoder, this$static._rangeEncoder, 0, posState);
		lenToPosState = GetLenToPosState(2);
		$Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, 63);
		$EncodeDirectBits(this$static._rangeEncoder, 67108863, 26);
		$ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, 15);
	}
	
	function GetPosSlot(pos) {
		if (pos < 2048) {
			return g_FastPos[pos];
		}
		if (pos < 2097152) {
			return g_FastPos[pos >> 10] + 20;
		}
		return g_FastPos[pos >> 20] + 40;
	}
	
	function GetPosSlot2(pos) {
		if (pos < 131072) {
			return g_FastPos[pos >> 6] + 12;
		}
		if (pos < 134217728) {
			return g_FastPos[pos >> 16] + 32;
		}
		return g_FastPos[pos >> 26] + 52;
	}
	
	function getClass_38() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit;
	}
	
	function Encoder() {
	}
	
	_ = Encoder.prototype = new Object_0();
	_.getClass$ = getClass_38;
	_.typeId$ = 0;
	_._additionalOffset = 0;
	_._alignPriceCount = 0;
	_._dictionarySize = 4194304;
	_._dictionarySizePrev = -1;
	_._distTableSize = 44;
	_._finished = false;
	_._inStream = null;
	_._longestMatchLength = 0;
	_._longestMatchWasFound = false;
	_._matchFinder = null;
	_._matchFinderType = 1;
	_._matchPriceCount = 0;
	_._needReleaseMFStream = false;
	_._numDistancePairs = 0;
	_._numFastBytes = 32;
	_._numFastBytesPrev = -1;
	_._numLiteralContextBits = 3;
	_._numLiteralPosStateBits = 0;
	_._optimumCurrentIndex = 0;
	_._optimumEndIndex = 0;
	_._posStateBits = 2;
	_._posStateMask = 3;
	_._previousByte = 0;
	_._state = 0;
	_._writeEndMark = false;
	_.backRes = 0;
	_.nowPos64 = P0_longLit;
	var g_FastPos;
	function $Encode(this$static, rangeEncoder, symbol, posState) {
		if (symbol < 8) {
			$Encode_3(rangeEncoder, this$static._choice, 0, 0);
			$Encode_2(this$static._lowCoder[posState], rangeEncoder, symbol);
		} else {
			symbol -= 8;
			$Encode_3(rangeEncoder, this$static._choice, 0, 1);
			if (symbol < 8) {
				$Encode_3(rangeEncoder, this$static._choice, 1, 0);
				$Encode_2(this$static._midCoder[posState], rangeEncoder, symbol);
			} else {
				$Encode_3(rangeEncoder, this$static._choice, 1, 1);
				$Encode_2(this$static._highCoder, rangeEncoder, symbol - 8);
			}
		}
	}
	
	function $Encoder$LenEncoder(this$static) {
		var posState;
		this$static._choice = initDim(_3S_classLit, 0, -1, 2, 1);
		this$static._lowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 16, 0);
		this$static._midCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 16, 0);
		this$static._highCoder = $BitTreeEncoder(new BitTreeEncoder(), 8);
		for (posState = 0; posState < 16; ++posState) {
			this$static._lowCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
			this$static._midCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
		}
		return this$static;
	}
	
	function $Init_2(this$static, numPosStates) {
		var posState;
		InitBitModels_0(this$static._choice);
		for (posState = 0; posState < numPosStates; ++posState) {
			InitBitModels(this$static._lowCoder[posState].Models);
			InitBitModels(this$static._midCoder[posState].Models);
		}
		InitBitModels(this$static._highCoder.Models);
	}
	
	function $SetPrices(this$static, posState, numSymbols, prices, st) {
		var a0, a1, b0, b1, i;
		a0 = ($clinit_66() , ProbPrices[this$static._choice[0] >>> 2]);
		a1 = ProbPrices[2048 - this$static._choice[0] >>> 2];
		b0 = a1 + ProbPrices[this$static._choice[1] >>> 2];
		b1 = a1 + ProbPrices[2048 - this$static._choice[1] >>> 2];
		i = 0;
		for (i = 0; i < 8; ++i) {
			if (i >= numSymbols)
			return;
			prices[st + i] = a0 + $GetPrice_1(this$static._lowCoder[posState], i);
		}
		for (; i < 16; ++i) {
			if (i >= numSymbols)
			return;
			prices[st + i] = b0 + $GetPrice_1(this$static._midCoder[posState], i - 8);
		}
		for (; i < numSymbols; ++i) {
			prices[st + i] = b1 + $GetPrice_1(this$static._highCoder, i - 8 - 8);
		}
	}
		
	function getClass_33() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit;
	}
	
	function Encoder$LenEncoder() {
	}
	
	_ = Encoder$LenEncoder.prototype = new Object_0();
	_.getClass$ = getClass_33;
	_.typeId$ = 0;
	function $Encode_0(this$static, rangeEncoder, symbol, posState) {
		$Encode(this$static, rangeEncoder, symbol, posState);
		if (--this$static._counters[posState] == 0) {
			$SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
			this$static._counters[posState] = this$static._tableSize;
		}
	}
	
	function $Encoder$LenPriceTableEncoder(this$static) {
		$Encoder$LenEncoder(this$static);
		this$static._prices = initDim(_3I_classLit, 0, -1, 4352, 1);
		this$static._counters = initDim(_3I_classLit, 0, -1, 16, 1);
		return this$static;
	}
	
	function $GetPrice(this$static, symbol, posState) {
		return this$static._prices[posState * 272 + symbol];
	}
	
	function $UpdateTables(this$static, numPosStates) {
		var posState;
		for (posState = 0; posState < numPosStates; ++posState) {
			$SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
			this$static._counters[posState] = this$static._tableSize;
		}
	}
	
	function getClass_34() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit;
	}
	
	function Encoder$LenPriceTableEncoder() {
	}
	
	_ = Encoder$LenPriceTableEncoder.prototype = new Encoder$LenEncoder();
	_.getClass$ = getClass_34;
	_.typeId$ = 0;
	_._tableSize = 0;
	function $Create_1(this$static, numPosBits, numPrevBits) {
		var i, numStates;
		if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits) {
			return;
		}
		this$static.m_NumPosBits = numPosBits;
		this$static.m_PosMask = (1 << numPosBits) - 1;
		this$static.m_NumPrevBits = numPrevBits;
		numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
		this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit, 0, 5, numStates, 0);
		for (i = 0; i < numStates; ++i) {
			this$static.m_Coders[i] = $Encoder$LiteralEncoder$Encoder2(new Encoder$LiteralEncoder$Encoder2());
		}
	}
	
	function $GetSubCoder(this$static, pos, prevByte) {
		return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
	}
	
	function $Init_3(this$static) {
		var i, numStates;
		numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
		for (i = 0; i < numStates; ++i) {
			InitBitModels_0(this$static.m_Coders[i].m_Encoders);
		}
	}
	
	function getClass_36() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit;
	}
	
	function Encoder$LiteralEncoder() {
	}
	
	_ = Encoder$LiteralEncoder.prototype = new Object_0();
	_.getClass$ = getClass_36;
	_.typeId$ = 0;
	_.m_Coders = null;
	_.m_NumPosBits = 0;
	_.m_NumPrevBits = 0;
	_.m_PosMask = 0;
	function $Encode_1(this$static, rangeEncoder, symbol) {
		var bit, context, i;
		context = 1;
		for (i = 7; i >= 0; --i) {
			bit = symbol >> i & 1;
			$Encode_3(rangeEncoder, this$static.m_Encoders, context, bit);
			context = context << 1 | bit;
		}
	}
	
	function $EncodeMatched(this$static, rangeEncoder, matchByte, symbol) {
		var bit, context, i, matchBit, same, state;
		context = 1;
		same = true;
		for (i = 7; i >= 0; --i) {
			bit = symbol >> i & 1;
			state = context;
			if (same) {
				matchBit = matchByte >> i & 1;
				state += 1 + matchBit << 8;
				same = matchBit == bit;
			}
			$Encode_3(rangeEncoder, this$static.m_Encoders, state, bit);
			context = context << 1 | bit;
		}
	}
	
	function $Encoder$LiteralEncoder$Encoder2(this$static) {
		this$static.m_Encoders = initDim(_3S_classLit, 0, -1, 768, 1);
		return this$static;
	}
	
	function $GetPrice_0(this$static, matchMode, matchByte, symbol) {
		var bit, context, i, matchBit, price;
		price = 0;
		context = 1;
		i = 7;
		if (matchMode) {
			for (; i >= 0; --i) {
				matchBit = matchByte >> i & 1;
				bit = symbol >> i & 1;
				price += GetPrice(this$static.m_Encoders[(1 + matchBit << 8) + context], bit);
				context = context << 1 | bit;
				if (matchBit != bit) {
					--i;
					break;
				}
			}
		}
		for (; i >= 0; --i) {
			bit = symbol >> i & 1;
			price += GetPrice(this$static.m_Encoders[context], bit);
			context = context << 1 | bit;
		}
		return price;
	}
	
	function getClass_35() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit;
	}
	
	function Encoder$LiteralEncoder$Encoder2() {
	}
	
	_ = Encoder$LiteralEncoder$Encoder2.prototype = new Object_0();
	_.getClass$ = getClass_35;
	_.typeId$ = 18;
	function $MakeAsChar(this$static) {
		this$static.BackPrev = -1;
		this$static.Prev1IsChar = false;
	}
	
	function $MakeAsShortRep(this$static) {
		this$static.BackPrev = 0;
		this$static.Prev1IsChar = false;
	}
	
	function getClass_37() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit;
	}
	
	function Encoder$Optimal() {
	}
	
	_ = Encoder$Optimal.prototype = new Object_0();
	_.getClass$ = getClass_37;
	_.typeId$ = 19;
	_.BackPrev = 0;
	_.BackPrev2 = 0;
	_.Backs0 = 0;
	_.Backs1 = 0;
	_.Backs2 = 0;
	_.Backs3 = 0;
	_.PosPrev = 0;
	_.PosPrev2 = 0;
	_.Prev1IsChar = false;
	_.Prev2 = false;
	_.Price = 0;
	_.State = 0;
	function $BitTreeDecoder(this$static, numBitLevels) {
		this$static.NumBitLevels = numBitLevels;
		this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
		return this$static;
	}
	
	function $Decode_0(this$static, rangeDecoder) {
		var bitIndex, m;
		m = 1;
		for (bitIndex = this$static.NumBitLevels; bitIndex != 0; --bitIndex) {
			m = (m << 1) + $DecodeBit(rangeDecoder, this$static.Models, m);
		}
		return m - (1 << this$static.NumBitLevels);
	}
	
	function $ReverseDecode(this$static, rangeDecoder) {
		var bit, bitIndex, m, symbol;
		m = 1;
		symbol = 0;
		for (bitIndex = 0; bitIndex < this$static.NumBitLevels; ++bitIndex) {
			bit = $DecodeBit(rangeDecoder, this$static.Models, m);
			m <<= 1;
			m += bit;
			symbol |= bit << bitIndex;
		}
		return symbol;
	}
	
	function ReverseDecode(Models, startIndex, rangeDecoder, NumBitLevels) {
		var bit, bitIndex, m, symbol;
		m = 1;
		symbol = 0;
		for (bitIndex = 0; bitIndex < NumBitLevels; ++bitIndex) {
			bit = $DecodeBit(rangeDecoder, Models, startIndex + m);
			m <<= 1;
			m += bit;
			symbol |= bit << bitIndex;
		}
		return symbol;
	}
	
	function getClass_42() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit;
	}
	
	function BitTreeDecoder() {
	}
	
	_ = BitTreeDecoder.prototype = new Object_0();
	_.getClass$ = getClass_42;
	_.typeId$ = 20;
	_.Models = null;
	_.NumBitLevels = 0;
	function $BitTreeEncoder(this$static, numBitLevels) {
		this$static.NumBitLevels = numBitLevels;
		this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
		return this$static;
	}
	
	function $Encode_2(this$static, rangeEncoder, symbol) {
		var bit, bitIndex, m;
		m = 1;
		for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
			--bitIndex;
			bit = symbol >>> bitIndex & 1;
			$Encode_3(rangeEncoder, this$static.Models, m, bit);
			m = m << 1 | bit;
		}
	}
	
	function $GetPrice_1(this$static, symbol) {
		var bit, bitIndex, m, price;
		price = 0;
		m = 1;
		for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
			--bitIndex;
			bit = symbol >>> bitIndex & 1;
			price += GetPrice(this$static.Models[m], bit);
			m = (m << 1) + bit;
		}
		return price;
	}
	
	function $ReverseEncode(this$static, rangeEncoder, symbol) {
		var bit, i, m;
		m = 1;
		for (i = 0; i < this$static.NumBitLevels; ++i) {
			bit = symbol & 1;
			$Encode_3(rangeEncoder, this$static.Models, m, bit);
			m = m << 1 | bit;
			symbol >>= 1;
		}
	}
	
	function $ReverseGetPrice(this$static, symbol) {
		var bit, i, m, price;
		price = 0;
		m = 1;
		for (i = this$static.NumBitLevels; i != 0; --i) {
			bit = symbol & 1;
			symbol >>>= 1;
			price += GetPrice(this$static.Models[m], bit);
			m = m << 1 | bit;
		}
		return price;
	}
	
	function ReverseEncode(Models, startIndex, rangeEncoder, NumBitLevels, symbol) {
		var bit, i, m;
		m = 1;
		for (i = 0; i < NumBitLevels; ++i) {
			bit = symbol & 1;
			$Encode_3(rangeEncoder, Models, startIndex + m, bit);
			m = m << 1 | bit;
			symbol >>= 1;
		}
	}
	
	function ReverseGetPrice(Models, startIndex, NumBitLevels, symbol) {
		var bit, i, m, price;
		price = 0;
		m = 1;
		for (i = NumBitLevels; i != 0; --i) {
			bit = symbol & 1;
			symbol >>>= 1;
			price += ($clinit_66() , ProbPrices[((Models[startIndex + m] - bit ^ -bit) & 2047) >>> 2]);
			m = m << 1 | bit;
		}
		return price;
	}
	
	function getClass_43() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit;
	}
	
	function BitTreeEncoder() {
	}
	
	_ = BitTreeEncoder.prototype = new Object_0();
	_.getClass$ = getClass_43;
	_.typeId$ = 21;
	_.Models = null;
	_.NumBitLevels = 0;
	function $DecodeBit(this$static, probs, index) {
		var newBound, prob;
		prob = probs[index];
		newBound = (this$static.Range >>> 11) * prob;
		if ((this$static.Code ^ -2147483648) < (newBound ^ -2147483648)) {
			this$static.Range = newBound;
			probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
			if ((this$static.Range & -16777216) == 0) {
				this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
				this$static.Range <<= 8;
			}
			return 0;
		} else {
			this$static.Range -= newBound;
			this$static.Code -= newBound;
			probs[index] = prob - (prob >>> 5) << 16 >> 16;
			if ((this$static.Range & -16777216) == 0) {
				this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
				this$static.Range <<= 8;
			}
			return 1;
		}
	}
	
	function $DecodeDirectBits(this$static, numTotalBits) {
		var i, result, t;
		result = 0;
		for (i = numTotalBits; i != 0; --i) {
			this$static.Range >>>= 1;
			t = this$static.Code - this$static.Range >>> 31;
			this$static.Code -= this$static.Range & t - 1;
			result = result << 1 | 1 - t;
			if ((this$static.Range & -16777216) == 0) {
				this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
				this$static.Range <<= 8;
			}
		}
		return result;
	}
	
	function $Init_8(this$static) {
		var i;
		this$static.Code = 0;
		this$static.Range = -1;
		for (i = 0; i < 5; ++i) {
			this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
		}
	}
	
	function InitBitModels(probs) {
		var i;
		for (i = 0; i < probs.length; ++i) {
			probs[i] = 1024;
		}
	}
	
	function getClass_44() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit;
	}
	
	function Decoder_0() {
	}
	
	_ = Decoder_0.prototype = new Object_0();
	_.getClass$ = getClass_44;
	_.typeId$ = 0;
	_.Code = 0;
	_.Range = 0;
	_.Stream = null;
	function $clinit_66() {
		$clinit_66 = nullMethod;
		var end, i, j, start;
		ProbPrices = initDim(_3I_classLit, 0, -1, 512, 1);
		for (i = 8; i >= 0; --i) {
			start = 1 << 9 - i - 1;
			end = 1 << 9 - i;
			for (j = start; j < end; ++j) {
				ProbPrices[j] = (i << 6) + (end - j << 6 >>> 9 - i - 1);
			}
		}
	}
	
	function $Encode_3(this$static, probs, index, symbol) {
		var newBound, prob;
		prob = probs[index];
		newBound = (this$static.Range >>> 11) * prob;
		if (symbol == 0) {
			this$static.Range = newBound;
			probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
		} else {
			this$static.Low = add(this$static.Low, and(fromInt(newBound), Pffffffff_longLit));
			this$static.Range -= newBound;
			probs[index] = prob - (prob >>> 5) << 16 >> 16;
		}
		if ((this$static.Range & -16777216) == 0) {
			this$static.Range <<= 8;
			$ShiftLow(this$static);
		}
	}
	
	function $EncodeDirectBits(this$static, v, numTotalBits) {
		var i;
		for (i = numTotalBits - 1; i >= 0; --i) {
			this$static.Range >>>= 1;
			if ((v >>> i & 1) == 1) {
				this$static.Low = add(this$static.Low, fromInt(this$static.Range));
			}
			if ((this$static.Range & -16777216) == 0) {
				this$static.Range <<= 8;
				$ShiftLow(this$static);
			}
		}
	}
	
	function $FlushData(this$static) {
		var i;
		for (i = 0; i < 5; ++i) {
			$ShiftLow(this$static);
		}
	}
	
	function $GetProcessedSizeAdd(this$static) {
		return add(add(fromInt(this$static._cacheSize), this$static._position), P4_longLit);
	}
	
	function $Init_9(this$static) {
		this$static._position = P0_longLit;
		this$static.Low = P0_longLit;
		this$static.Range = -1;
		this$static._cacheSize = 1;
		this$static._cache = 0;
	}
	
	function $ShiftLow(this$static) {
		var LowHi, temp;
		LowHi = lowBits_0(shru(this$static.Low, 32));
		if (LowHi != 0 || compare(this$static.Low, Pff000000_longLit) < 0) {
			this$static._position = add(this$static._position, fromInt(this$static._cacheSize));
			temp = this$static._cache;
			do {
				$write(this$static.Stream, temp + LowHi);
				temp = 255;
			} while (--this$static._cacheSize != 0);
			this$static._cache = lowBits_0(this$static.Low) >>> 24;
		}
		++this$static._cacheSize;
		this$static.Low = shl(and(this$static.Low, Pffffff_longLit), 8);
	}
	
	function GetPrice(Prob, symbol) {
		$clinit_66();
		return ProbPrices[((Prob - symbol ^ -symbol) & 2047) >>> 2];
	}
	
	function InitBitModels_0(probs) {
		$clinit_66();
		var i;
		for (i = 0; i < probs.length; ++i) {
			probs[i] = 1024;
		}
	}
	
	function getClass_45() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit;
	}
	
	function Encoder_0() {
	}
	
	_ = Encoder_0.prototype = new Object_0();
	_.getClass$ = getClass_45;
	_.typeId$ = 0;
	_.Low = P0_longLit;
	_.Range = 0;
	_.Stream = null;
	_._cache = 0;
	_._cacheSize = 0;
	_._position = P0_longLit;
	var ProbPrices;
	function decode(utf) {
		var buf, i, x, y, z;
		buf = $StringBuilder(new StringBuilder());
		for (i = 0; i < utf.length; ++i) {
			x = utf[i] & 255;
			if ((x & 128) == 0) {
				if (x == 0) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				$appendNonNull(buf.data, String.fromCharCode(x & 65535));
			} else if ((x & 224) == 192) {
				if (i + 1 >= utf.length) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				y = utf[++i] & 255;
				if ((y & 192) != 128) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				$append(buf.data, String.fromCharCode((x & 31) << 6 & 65535 | y & 63));
			} else if ((x & 240) == 224) {
				if (i + 2 >= utf.length) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				y = utf[++i] & 255;
				if ((y & 192) != 128) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				z = utf[++i] & 255;
				if ((z & 192) != 128) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				$appendNonNull(buf.data, String.fromCharCode(((x & 15) << 12 | (y & 63) << 6 | z & 63) & 65535));
			} else {
				throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
			}
		}
		return $toString(buf.data);
	}
	
	function encode(s) {
		var ch, chars, data, elen, i, charArr, n;
		chars = (n = s.length , charArr = initDim(_3C_classLit, 0, -1, n, 1) , $getChars(s, 0, n, charArr, 0) , charArr);
		elen = 0;
		for (i = 0; i < s.length; ++i) {
			ch = chars[i];
			if (ch >= 1 && ch <= 127) {
				++elen;
			} else if (ch == 0 || ch >= 128 && ch <= 2047) {
				elen += 2;
			} else {
				elen += 3;
			}
		}
		data = initDim(_3B_classLit, 0, -1, elen, 1);
		elen = 0;
		for (i = 0; i < s.length; ++i) {
			ch = chars[i];
			if (ch >= 1 && ch <= 127) {
				data[elen++] = ch << 24 >> 24;
			} else if (ch == 0 || ch >= 128 && ch <= 2047) {
				data[elen++] = (192 | ch >> 6 & 31) << 24 >> 24;
				data[elen++] = (128 | ch & 63) << 24 >> 24;
			} else {
				data[elen++] = (224 | ch >> 12 & 15) << 24 >> 24;
				data[elen++] = (128 | ch >> 6 & 63) << 24 >> 24;
				data[elen++] = (128 | ch & 63) << 24 >> 24;
			}
		}
		return data;
	}
	
	function $LZMADemo(this$static) {
		return this$static;
	}
	function toDouble(a) {
		return a[1] + a[0];
	}
	
	function compress() {
		var this$static = $LZMADemo(new LZMADemo()),
			percent,
			start,
			/// Arguments
			str = arguments[0],
			mode = arguments[1],
			callback_num,
			on_finish,
			on_progress;
		
		if (typeof arguments[2] === "function") {
			on_finish = arguments[2];
			if (typeof arguments[3] === "function") {
				on_progress = arguments[3];
			}
		} else {
			callback_num = arguments[2];
		}
		
		this$static.mode = get_mode_obj(mode);
		
		this$static.c = $LZMAByteArrayCompressor(new LZMAByteArrayCompressor(), encode(str), this$static.mode);
		
		if (on_progress) {
			on_progress(0);
		} else if (typeof callback_num !== "undefined") {
			update_progress(0, callback_num);
		}
		
		function do_action() {
			var res;
			start = (new Date).getTime();
			while ($execute(this$static.c)) {
				percent = toDouble(this$static.c.chunker.inBytesProcessed) / toDouble(this$static.c.length_0);
				/// If about 200 miliseconds have passed, update the progress.
				if ((new Date).getTime() - start > 200) {
					if (on_progress) {
						on_progress(percent);
					} else if (typeof callback_num !== "undefined") {
						update_progress(percent, callback_num);
					}
					setTimeout(do_action, 0);
					return false;
				}
			}
			
			if (on_progress) {
				on_progress(1);
			} else if (typeof callback_num !== "undefined") {
				update_progress(1, callback_num);
			}
			
			/// .slice(0) is required for Firefox 4.0 (because I think arrays are now passed by reference, which is not allowed when sending messages to or from web workers).
			/// .slice(0) simply returns the entire array by value.
			res = $toByteArray(this$static.c.output).slice(0);
			
			if (on_finish) {
				on_finish(res);
			} else if (typeof callback_num !== "undefined") {
				postMessage({
					action: action_compress,
					callback_num: callback_num,
					result: res
				});
			}
		}
		
		setTimeout(do_action, 1);
	}
	
	function decompress() {
		var this$static = $LZMADemo(new LZMADemo()),
			percent,
			data,
			start,
			text,
			/// Arguments
			byte_arr = arguments[0],
			callback_num,
			on_finish,
			on_progress;
		
		if (typeof arguments[1] === "function") {
			on_finish = arguments[1];
			if (typeof arguments[2] === "function") {
				on_progress = arguments[2];
			}
		} else {
			callback_num = arguments[1];
		}
		
		data = initValues(_3B_classLit, 0, -1, byte_arr);
		
		this$static.d = $LZMAByteArrayDecompressor(new LZMAByteArrayDecompressor(), data);
		
		if (on_progress) {
			on_progress(0);
		} else if (typeof callback_num !== "undefined") {
			update_progress(0, callback_num);
		}
		
		function do_action() {
			var res;
			start = (new Date).getTime();
			while ($execute_0(this$static.d)) {
				percent = toDouble(this$static.d.chunker.decoder.nowPos64) / toDouble(this$static.d.length_0);
				/// If about 200 miliseconds have passed, update the progress.
				if ((new Date).getTime() - start > 200) {
					if (on_progress) {
						on_progress(percent);
					} else if (typeof callback_num !== "undefined") {
						update_progress(percent, callback_num);
					}
					setTimeout(do_action, 0);
					return false;
				}
			}
			
			if (on_progress) {
				on_progress(1);
			} else if (typeof callback_num !== "undefined") {
				update_progress(1, callback_num);
			}
			
			res = decode($toByteArray(this$static.d.output));
			
			if (on_finish) {
				on_finish(res);
			} else if (typeof callback_num !== "undefined") {
				postMessage({
					action: action_decompress,
					callback_num: callback_num,
					result: res
				});
			}
		}
		
		setTimeout(do_action, 0);
	}
	
	function $onModuleLoad(this$static) {
		compress(this$static);
		decompress(this$static);
	}
	
	function getClass_46() {
		return Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit;
	}
	
	function LZMADemo () {}
	
	_ = LZMADemo.prototype = new Object_0();
	_.getClass$ = getClass_46;
	_.typeId$ = 0;
	_.c = null;
	_.d = null;
	var DEFAULT_COMPRESSION_MODE;
	function init() {
		!!$stats && $stats({moduleName:$moduleName, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date()).getTime(), type:'onModuleLoadStart', className:'org.dellroad.lzma.demo.client.LZMADemo'});
	}
	
	function gwtOnLoad(errFn, modName, modBase) {
		$moduleName = modName;
		$moduleBase = modBase;
		if (errFn) {
			try {
				init();
			}
			catch (e) {
				errFn(modName);
			}
		} else {
			init();
		}
	}
	
	function nullMethod() {
	}
	
	var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'),
		Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'),
		Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'),
		Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'),
		Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'),
		Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), _3_3D_classLit = createForArray('', '[[D'),
		Ljava_io_InputStream_2_classLit = createForClass('java.io.', 'InputStream'),
		Ljava_io_ByteArrayInputStream_2_classLit = createForClass('java.io.', 'ByteArrayInputStream'), _3B_classLit = createForArray('', '[B'),
		Ljava_io_OutputStream_2_classLit = createForClass('java.io.', 'OutputStream'),
		Ljava_io_ByteArrayOutputStream_2_classLit = createForClass('java.io.', 'ByteArrayOutputStream'),
		Ljava_io_IOException_2_classLit = createForClass('java.io.', 'IOException'),
		Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'),
		Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'),
		Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), _3C_classLit = createForArray('', '[C'),
		Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'),
		Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'),
		Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'),
		Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'),
		Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), _3I_classLit = createForArray('', '[I'),
		Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'),
		Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'),
		Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'InWindow'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'BinTree'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'OutWindow'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Chunker'), _3S_classLit = createForArray('', '[S'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder;'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LenDecoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2;'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal;'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder;'), _3J_classLit = createForArray('', '[J'), _3Z_classLit = createForArray('', '[Z'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2;'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenPriceTableEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Decoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Encoder'),
		Lorg_dellroad_lzma_client_CompressionMode_2_classLit = createForEnum('org.dellroad.lzma.client.', 'CompressionMode'),
		Lorg_dellroad_lzma_client_LZMACompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMACompressor'),
		Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayCompressor'),
		Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMADecompressor'),
		Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayDecompressor'),
		Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo');
	
	gwtOnLoad(function() {},'lzma_demo','');
	
	
	var get_mode_obj = (function () {
		var modes = [
						{dictionarySize: 16, fb: 64,  matchFinder: 0, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 20, fb: 64,  matchFinder: 0, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 19, fb: 64,  matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 20, fb: 64,  matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 21, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 22, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 23, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 24, fb: 255, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 25, fb: 255, matchFinder: 1, lc: 3, lp: 0, pb: 2}
					];
		
		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}

		return function (mode) {
			if (!isNumber(mode)) {
				mode = 1;
			} else {
				if (mode < 1) {
					mode = 1;
				} else if (mode > 9) {
					mode = 9;
				}
			}
			
			return modes[mode - 1];
		}
	}());
	
	/// Create the global onmessage function.
	onmessage = function (e) {
		if (e.data.action === action_compress) {
			LZMA.compress(e.data.data, e.data.mode, e.data.callback_num);
		} else {
			LZMA.decompress(e.data.data, e.data.callback_num);
		}
	}
		
	return {
		compress:   compress,
		decompress: decompress
	};
}());

/// Allow node.js to be able to access this directly if it is included directly.
this.LZMA = LZMA;





  // mustache does no defined a global var, defines a var Mustache instead
  // so add it to root
  root.Mustache = Mustache;
  (function() {
    var $ = root.$;
    var jQuery = root.jQuery;
    var L = root.L;
    var Mustache = root.Mustache;
    var Backbone = root.Backbone;
    var _ = root._;


    // entry point
;(function() {

    var root = this;

    var cdb = root.cdb = {};

    cdb.VERSION = '3.0.04-dev';

    cdb.CARTOCSS_VERSIONS = {
      '2.0.0': '',
      '2.1.0': ''
    };

    cdb.CARTOCSS_DEFAULT_VERSION = '2.1.1';

    cdb.CDB_HOST = {
      'http': 'tiles.cartocdn.com',
      'https': 'd3pu9mtm6f0hk5.cloudfront.net'
    };

    root.cdb.config = {};
    root.cdb.core = {};
    root.cdb.geo = {};
    root.cdb.geo.ui = {};
    root.cdb.geo.geocoder = {};
    root.cdb.ui = {};
    root.cdb.ui.common = {};
    root.cdb.vis = {};
    root.cdb.decorators = {};
    /**
     * global variables
     */
    root.JST = root.JST || {};
    root.cartodb = cdb;

    cdb.files = [
        "../vendor/jquery.min.js",
        "../vendor/underscore-min.js",
        "../vendor/json2.js",
        "../vendor/backbone.js",

        "../vendor/leaflet.js",
        "../vendor/wax.cartodb.js",
        "../vendor/GeoJSON.js", //geojson gmaps lib

        "../vendor/jscrollpane.js",
        "../vendor/mousewheel.js",
        "../vendor/mwheelIntent.js",
        "../vendor/spin.js",
        "../vendor/lzma.js",

        'core/decorator.js',
        'core/config.js',
        'core/log.js',
        'core/profiler.js',
        'core/template.js',
        'core/model.js',
        'core/view.js',

        'geo/geocoder.js',
        'geo/geometry.js',
        'geo/map.js',
        'geo/ui/zoom.js',
        'geo/ui/zoom_info.js',
        'geo/ui/legend.js',
        'geo/ui/switcher.js',
        'geo/ui/infowindow.js',
        'geo/ui/header.js',
        'geo/ui/search.js',
        'geo/ui/layer_selector.js',
        'geo/ui/tiles_loader.js',
        'geo/ui/infobox.js',
        'geo/ui/tooltip.js',

        'geo/layer_definition.js',
        'geo/common.js',

        'geo/leaflet/leaflet.geometry.js',
        'geo/leaflet/leaflet_base.js',
        'geo/leaflet/leaflet_plainlayer.js',
        'geo/leaflet/leaflet_tiledlayer.js',
        'geo/leaflet/leaflet_cartodb_layergroup.js',
        'geo/leaflet/leaflet_cartodb_layer.js',
        'geo/leaflet/leaflet.js',

        'geo/gmaps/gmaps_base.js',
        'geo/gmaps/gmaps_baselayer.js',
        'geo/gmaps/gmaps_plainlayer.js',
        'geo/gmaps/gmaps_tiledlayer.js',
        'geo/gmaps/gmaps_cartodb_layergroup.js',
        'geo/gmaps/gmaps_cartodb_layer.js',
        'geo/gmaps/gmaps.js',

        'ui/common/dialog.js',
        'ui/common/notification.js',
        'ui/common/table.js',
        'ui/common/dropdown.js',

        'vis/vis.js',
        'vis/overlays.js',
        'vis/layers.js',

        // PUBLIC API
        'api/layers.js',
        'api/sql.js',
        'api/vis.js'
    ];

    cdb.init = function(ready) {
      // define a simple class
      var Class = cdb.Class = function() {};
      _.extend(Class.prototype, Backbone.Events);

      cdb._loadJST();
      root.cdb.god = new Backbone.Model();

      ready && ready();
    };

    /**
     * load all the javascript files. For testing, do not use in production
     */
    cdb.load = function(prefix, ready) {
        var c = 0;

        var next = function() {
            var script = document.createElement('script');
            script.src = prefix + cdb.files[c];
            document.body.appendChild(script);
            ++c;
            if(c == cdb.files.length) {
                if(ready) {
                    script.onload = ready;
                }
            } else {
                script.onload = next;
            }
        };

        next();

    };
})();
/**
* Decorators to extend funcionality of cdb related objects
*/

/**
* Adds .elder method to call for the same method of the parent class
* usage:
*   insanceOfClass.elder('name_of_the_method');
*/
cdb.decorators.elder = (function() {
  // we need to backup one of the backbone extend models
  // (it doesn't matter which, they are all the same method)
  var backboneExtend = Backbone.Router.extend;
  var superMethod = function(method, options) {
      var result = null;
      if (this.parent != null) {
          var currentParent = this.parent;
          // we need to change the parent of "this", because
          // since we are going to call the elder (super) method
          // in the context of "this", if the super method has
          // another call to elder (super), we need to provide a way of
          // redirecting to the grandparent
          this.parent = this.parent.parent;
          var options = Array.prototype.slice.call(arguments, 1);

          if (currentParent.hasOwnProperty(method)) {
              result = currentParent[method].apply(this, options);
          } else {
              options.splice(0,0, method);
              result = currentParent.elder.apply(this, options);
          }
          this.parent = currentParent;
      }
      return result;
  }
  var extend = function(protoProps, classProps) {
      var child = backboneExtend.call(this, protoProps, classProps);

      child.prototype.parent = this.prototype;
      child.prototype.elder = function(method) {
          var options = Array.prototype.slice.call(arguments, 1);
          if (method) {
              options.splice(0,0, method)
              return superMethod.apply(this, options);
          } else {
              return child.prototype.parent;
          }
      }
      return child;
  };
  var decorate = function(objectToDecorate) {
    objectToDecorate.extend = extend;
    objectToDecorate.prototype.elder = function() {};
    objectToDecorate.prototype.parent = null;
  }
  return decorate;
})()

cdb.decorators.elder(Backbone.Model);
cdb.decorators.elder(Backbone.View);
cdb.decorators.elder(Backbone.Collection);

if(!window.JSON) {
  // shims for ie7
  window.JSON = {
    stringify: function(param) {
      if(typeof param == 'number' || typeof param == 'boolean') {
        return param.toString();
      } else if (typeof param =='string') {
        return '"' + param.toString() + '"';
      } else if(_.isArray(param)) {
        var res = '[';
        for(var n in param) {
          if(n>0) res+=', ';
          res += JSON.stringify(param[n]);
        }
        res += ']'
        return res;
      } else {
        var res = '{';
        for(var p in param) {
          if(param.hasOwnProperty(p)) {
            res += '"'+p+'": '+ JSON.stringify(param[p]);
          }
        }
        res += '}'
        return res;
      }
      // no, we're no gonna stringify regexp, fuckoff.
    },
    parse: function(param) {
      return eval(param);
    }
  }
}
/**
 * global configuration
 */

(function() {

    Config = Backbone.Model.extend({
        VERSION: 2,

        //error track
        REPORT_ERROR_URL: '/api/v0/error',
        ERROR_TRACK_ENABLED: false,

        getSqlApiUrl: function() {
          var url = this.get('sql_api_protocol') + '://' +
            this.get('sql_api_domain') + ':' +
            this.get('sql_api_port');
          return url;
        }


    });

    cdb.config = new Config();

})();
/**
 * logging
 */

(function() {

    // error management
    cdb.core.Error = Backbone.Model.extend({
        url: cdb.config.REPORT_ERROR_URL,
        initialize: function() {
            this.set({browser: JSON.stringify($.browser) });
        }
    });

    cdb.core.ErrorList = Backbone.Collection.extend({
        model: cdb.core.Error
    });

    /** contains all error for the application */
    cdb.errors = new cdb.core.ErrorList();

    // error tracking!
    if(cdb.config.ERROR_TRACK_ENABLED) {
        window.onerror = function(msg, url, line) {
            cdb.errors.create({
                msg: msg,
                url: url,
                line: line
            });
        };
    }


    // logging
    var _fake_console = function() {};
    _fake_console.prototype.error = function(){};
    _fake_console.prototype.log= function(){};

    //IE7 love
    if(typeof console !== "undefined") {
        _console = console;
    } else {
        _console = new _fake_console();
    }

    cdb.core.Log = Backbone.Model.extend({

        error: function() {
            _console.error.apply(_console, arguments);
            if(cdb.config.ERROR_TRACK_ENABLED) {
              cdb.errors.create({
                  msg: Array.prototype.slice.call(arguments).join('')
              });
            }
        },

        log: function() {
            _console.log.apply(_console, arguments);
        },

        info: function() {
            _console.log.apply(_console, arguments);
        },

        debug: function() {
            _console.log.apply(_console, arguments);
        }
    });

})();

cdb.log = new cdb.core.Log({tag: 'cdb'});

// =================
// profiler
// =================

(function() {
  function Profiler() {}
  Profiler.times = {};
  Profiler.new_time = function(type, time) {
      var t = Profiler.times[type] = Profiler.times[type] || {
          max: 0,
          min: 10000000,
          avg: 0,
          total: 0,
          count: 0
      };

      t.max = Math.max(t.max, time);
      t.total += time;
      t.min = Math.min(t.min, time);
      ++t.count;
      t.avg = t.total/t.count;
      this.callbacks && this.callbacks[type] && this.callbacks[type](type, time);
  };

  Profiler.new_value = Profiler.new_time;

  Profiler.print_stats = function() {
      for(k in Profiler.times) {
          var t = Profiler.times[k];
          console.log(" === " + k + " === ");
          console.log(" max: " + t.max);
          console.log(" min: " + t.min);
          console.log(" avg: " + t.avg);
          console.log(" total: " + t.total);
      }
  };

  Profiler.get = function(type) {
      return {
          t0: null,
          start: function() { this.t0 = new Date().getTime(); },
          end: function() {
              if(this.t0 !== null) {
                  Profiler.new_time(type, this.time = new Date().getTime() - this.t0);
                  this.t0 = null;
              }
          }
      };
  };

  if(typeof(cdb) !== "undefined") {
    cdb.core.Profiler = Profiler;
  } else {
    window.Profiler = Profiler;
  }

  //mini jquery
  var $ = $ || function(id) {
      var $el = {};
      if(id.el) {
        $el.el = id.el;
      } else if(id.clientWidth) {
        $el.el = id;
      } else {
        $el.el = id[0] === '<' ? document.createElement(id.substr(1, id.length - 2)): document.getElementById(id);
      }
      $el.append = function(html) {
        html.el ?  $el.el.appendChild(html.el) : $el.el.innerHTML += html;
        return $el;
      }
      $el.attr = function(k, v) { this.el.setAttribute(k, v); return this;}
      $el.css = function(prop) {
          for(var i in prop) { $el.el.style[i] = prop[i]; }
          return $el;
      }
      $el.width = function() {  return this.el.clientWidth; };
      $el.html = function(h) { $el.el.innerHTML = h; return this; }
      return $el;
  }
  
  function CanvasGraph(w, h) {
      this.el = document.createElement('canvas');
      this.el.width = w;
      this.el.height = h;
      this.el.style.float = 'left';
      this.el.style.border = '3px solid rgba(0,0,0, 0.2)';
      this.ctx = this.el.getContext('2d');

      var barw = w;

      this.value = 0;
      this.max = 0;
      this.min = 0;
      this.pos = 0;
      this.values = [];

      this.reset = function() {
          for(var i = 0; i < barw; ++i){
              this.values[i] = 0;
          }
      }
      this.set_value = function(v) {
          this.value = v;
          this.values[this.pos] = v;
          this.pos = (this.pos + 1)%barw;

          //calculate the max
          this.max = v;
          for(var i = 0; i < barw; ++i){
            var _v = this.values[i];
            this.max = Math.max(this.max, _v);
            //this.min = Math.min(v, _v);
          }
          this.scale = this.max;
          this.render();
      }

      this.render = function() {
          this.el.width = this.el.width;
          for(var i = 0; i < barw; ++i){
              var p = barw - i - 1;
              var v = (this.pos + p)%barw;
              v = 0.9*h*this.values[v]/this.scale;
              this.ctx.fillRect(p, h - v, 1, v);
          }
      }

      this.reset();
  }

  Profiler.ui = function() {
    Profiler.callbacks = {};
    var _$ied;
    if(!_$ied){
        _$ied = $('<div>').css({
          'position': 'fixed',
          'bottom': 10,
          'left': 10,
          'zIndex': 20000,
          'width': $(document.body).width() - 80,
          'border': '1px solid #CCC',
          'padding': '10px 30px',
          'backgroundColor': '#fff',
          'fontFamily': 'helvetica neue,sans-serif',
          'fontSize': '14px',
          'lineHeight': '1.3em'
        });
        $(document.body).append(_$ied);
    }
    this.el = _$ied;
    var update = function() {
        for(k in Profiler.times) {
          var pid = '_prof_time_' + k;
          var p = $(pid);
          if(!p.el) {
            p = $('<div>').attr('id', pid)
            p.css({
              'margin': '0 0 20px 0',
              'border-bottom': '1px solid #EEE'
            });
            var t = Profiler.times[k];
            var div = $('<div>').append('<h1>' + k + '</h1>').css({
              'font-weight': 'bold',
              'margin': '10px 0 30px 0'
            })
            for(var c in t) {
              p.append(
                div.append($('<div>').append('<span style="display: inline-block; width: 60px;font-weight: 300;">' + c + '</span><span style="font-size: 21px" id="'+  k + "-" + c + '"></span>').css({ padding: '5px 0' })));
            }
            _$ied.append(p);
            var graph = new CanvasGraph(250, 100);
            p.append(graph);
            Profiler.callbacks[k] = function(k, v) {
              graph.set_value(v);
            }
          }
          // update ir
          var t = Profiler.times[k];
          for(var c in t) {
            $(k + "-" + c).html(t[c].toFixed(2));
          }
        }
    }
    setInterval(function() {
      update();
    }, 1000);
    /*var $message = $('<li>'+message+' - '+vars+'</li>').css({
        'borderBottom': '1px solid #999999'
      });
      _$ied.find('ol').append($message);
      _.delay(function() {
        $message.fadeOut(500);
      }, 2000);
    };
    */
  };

})();
/**
 * template system
 * usage:
   var tmpl = new cdb.core.Template({
     template: "hi, my name is {{ name }}",
     type: 'mustache' // undescore by default
   });
   console.log(tmpl.render({name: 'rambo'})));
   // prints "hi, my name is rambo"


   you could pass the compiled tempalte directly:

   var tmpl = new cdb.core.Template({
     compiled: function() { return 'my compiled template'; }
   });
 */

cdb.core.Template = Backbone.Model.extend({

  initialize: function() {
    this.bind('change', this._invalidate);
    this._invalidate();
  },

  url: function() {
    return this.get('template_url');
  },

  parse: function(data) {
    return {
      'template': data
    };
  },

  _invalidate: function() {
    this.compiled = null;
    if(this.get('template_url')) {
      this.fetch();
    }
  },

  compile: function() {
    var tmpl_type = this.get('type') || 'underscore';
    var fn = cdb.core.Template.compilers[tmpl_type];
    if(fn) {
      return fn(this.get('template'));
    } else {
      cdb.log.error("can't get rendered for " + tmpl_type);
    }
    return null;
  },

  /**
   * renders the template with specified vars
   */
  render: function(vars) {
    var c = this.compiled = this.compiled || this.get('compiled') || this.compile();
    var r = cdb.core.Profiler.get('template_render');
    r.start();
    var rendered = c(vars);
    r.end();
    return rendered;
  },

  asFunction: function() {
    return _.bind(this.render, this);
  }

}, {
  compilers: {
    'underscore': _.template,
    'mustache': typeof(Mustache) === 'undefined' ? null: Mustache.compile
  },
  compile: function(tmpl, type) {
    var t = new cdb.core.Template({
      template: tmpl,
      type: type || 'underscore'
    });
    return _.bind(t.render, t);
  }
}
);

cdb.core.TemplateList = Backbone.Collection.extend({

  model: cdb.core.Template,

  getTemplate: function(template_name) {

    if (this.namespace) {
      template_name = this.namespace + template_name;
    }

    var t = this.find(function(t) {
        return t.get('name') === template_name;
    });

    if(t) {
      return _.bind(t.render, t);
    }

    cdb.log.error(template_name + " not found");

    return null;
  }
});

/**
 * global variable
 */
cdb.templates = new cdb.core.TemplateList();

/**
 * load JST templates.
 * rails creates a JST variable with all the templates.
 * This functions loads them as default into cbd.template
 */
cdb._loadJST = function() {
  if(typeof(window.JST) !== undefined) {
    cdb.templates.reset(
      _(JST).map(function(tmpl, name) {
        return { name: name, compiled: tmpl };
      })
    );
  }
};

(function() {

  cdb._debugCallbacks= function(o) {
    var callbacks = o._callbacks;
    for(var i in callbacks) {
      var node = callbacks[i];
      console.log(" * ", i);
      var end = node.tail;
      while ((node = node.next) !== end) {
        console.log("    - ", node.context, (node.context && node.context.el) || 'none');
      }
    }
  }

  /**
   * Base Model for all CartoDB model.
   * DO NOT USE Backbone.Model directly
   * @class cdb.core.Model
   */
  var Model = cdb.core.Model = Backbone.Model.extend({

    initialize: function(options) {
      _.bindAll(this, 'fetch',  'save', 'retrigger');
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    /**
    * We are redefining fetch to be able to trigger an event when the ajax call ends, no matter if there's
    * a change in the data or not. Why don't backbone does this by default? ahh, my friend, who knows.
    * @method fetch
    * @param args {Object}
    */
    fetch: function(args) {
      var self = this;
      // var date = new Date();
      this.trigger('loadModelStarted');
      $.when(this.elder('fetch', args)).done(function(ev){
        self.trigger('loadModelCompleted', ev);
        // var dateComplete = new Date()
        // console.log('completed in '+(dateComplete - date));
      }).fail(function(ev) {
        self.trigger('loadModelFailed', ev);
      })
    },
    /**
    * Changes the attribute used as Id
    * @method setIdAttribute
    * @param attr {String}
    */
    setIdAttribute: function(attr) {
      this.idAttribute = attr;
    },
    /**
    * Listen for an event on another object and triggers on itself, with the same name or a new one
    * @method retrigger
    * @param ev {String} event who triggers the action
    * @param obj {Object} object where the event happens
    * @param obj {Object} [optional] name of the retriggered event;
    * @todo [xabel]: This method is repeated here and in the base view definition. There's should be a way to make it unique
    */
    retrigger: function(ev, obj, retrigEvent) {
      if(!retrigEvent) {
        retrigEvent = ev;
      }
      var self = this;
      obj.bind && obj.bind(ev, function() {
        self.trigger(retrigEvent);
      }, self)
    },

    /**
     * We need to override backbone save method to be able to introduce new kind of triggers that
     * for some reason are not present in the original library. Because you know, it would be nice
     * to be able to differenciate "a model has been updated" of "a model is being saved".
     * @param  {object} opt1
     * @param  {object} opt2
     * @return {$.Deferred}
     */
    save: function(opt1, opt2) {
      var self = this;
      if(!opt2 || !opt2.silent) this.trigger('saving');
      $promise = Backbone.Model.prototype.save.call(this, opt1, opt2);
      $.when($promise).done(function() {
        if(!opt2 || !opt2.silent) self.trigger('saved');
      }).fail(function() {
        if(!opt2 || !opt2.silent) self.trigger('errorSaving')
      })
      return $promise;
    }
  });
})();
(function() {

  /**
   * Base View for all CartoDB views.
   * DO NOT USE Backbone.View directly
   */
  var View = cdb.core.View = Backbone.View.extend({
    classLabel: 'cdb.core.View',
    constructor: function(options) {
      this._models = [];
      this._subviews = {};
      Backbone.View.call(this, options);
      View.viewCount++;
      View.views[this.cid] = this;
      this._created_at = new Date();
      cdb.core.Profiler.new_value('total_views', View.viewCount);
    },

    add_related_model: function(m) {
      if(!m) throw "added non valid model"
      this._models.push(m);
    },

    addView: function(v) {
      this._subviews[v.cid] = v;
      v._parent = this;
    },

    removeView: function(v) {
      delete this._subviews[v.cid];
    },

    clearSubViews: function() {
      _(this._subviews).each(function(v) {
        v.clean();
      });
      this._subviews = {};
    },

    /**
     * this methid clean removes the view
     * and clean and events associated. call it when
     * the view is not going to be used anymore
     */
    clean: function() {
      var self = this;
      this.trigger('clean');
      this.clearSubViews();
      // remove from parent
      if(this._parent) {
        this._parent.removeView(this);
        this._parent = null;
      }
      this.remove();
      this.unbind();
      // remove model binding
      _(this._models).each(function(m) {
        m.unbind(null, null, self);
      });
      this._models = [];
      View.viewCount--;
      delete View.views[this.cid];
      return this;
    },

    /**
     * utility methods
     */

    getTemplate: function(tmpl) {
      if(this.options.template) {
        return  _.template(this.options.template);
      }
      return cdb.templates.getTemplate(tmpl);
    },

    show: function() {
        this.$el.show();
    },

    hide: function() {
        this.$el.hide();
    },

    /**
    * Listen for an event on another object and triggers on itself, with the same name or a new one
    * @method retrigger
    * @param ev {String} event who triggers the action
    * @param obj {Object} object where the event happens
    * @param obj {Object} [optional] name of the retriggered event;
    */
    retrigger: function(ev, obj, retrigEvent) {
      if(!retrigEvent) {
        retrigEvent = ev;
      }
      var self = this;
      obj.bind && obj.bind(ev, function() {
        self.trigger(retrigEvent);
      }, self)
      // add it as related model//object
      this.add_related_model(obj);
    },
    /**
    * Captures an event and prevents the default behaviour and stops it from bubbling
    * @method killEvent
    * @param event {Event}
    */
    killEvent: function(ev) {
      if(ev && ev.preventDefault) {
        ev.preventDefault();
      };
      if(ev && ev.stopPropagation) {
        ev.stopPropagation();
      };
    },

    /**
    * Remove all the tipsy tooltips from the document
    * @method cleanTooltips
    */
    cleanTooltips: function() {
      $('.tipsy').remove();
    }




  }, {
    viewCount: 0,
    views: {},

    /**
     * when a view with events is inherit and you want to add more events
     * this helper can be used:
     * var MyView = new core.View({
     *  events: cdb.core.View.extendEvents({
     *      'click': 'fn'
     *  })
     * });
     */
    extendEvents: function(newEvents) {
      return function() {
        return _.extend(newEvents, this.constructor.__super__.events);
      };
    },

    /**
     * search for views in a view and check if they are added as subviews
     */
    runChecker: function() {
      _.each(cdb.core.View.views, function(view) {
        _.each(view, function(prop, k) {
          if( k !== '_parent' &&
              view.hasOwnProperty(k) &&
              prop instanceof cdb.core.View &&
              view._subviews[prop.cid] === undefined) {
            console.log("=========");
            console.log("untracked view: ");
            console.log(prop.el);
            console.log('parent');
            console.log(view.el);
            console.log(" ");
          }
        });
      });
    }
  });

})();


/**
 * geocoders for different services
 *
 * should implement a function called geocode the gets
 * the address and call callback with a list of placemarks with lat, lon
 * (at least)
 */

cdb.geo.geocoder.YAHOO = {

  keys: {
    app_id: "nLQPTdTV34FB9L3yK2dCXydWXRv3ZKzyu_BdCSrmCBAM1HgGErsCyCbBbVP2Yg--"
  },

  geocode: function(address, callback) {
    address = address.toLowerCase()
      .replace(/é/g,'e')
      .replace(/á/g,'a')
      .replace(/í/g,'i')
      .replace(/ó/g,'o')
      .replace(/ú/g,'u')
      .replace(/ /g,'+');

      var protocol = '';
      if(location.protocol.indexOf('http') === -1) {
        protocol = 'http:';
      }

      $.getJSON(protocol + '//query.yahooapis.com/v1/public/yql?q='+encodeURIComponent('SELECT * FROM json WHERE url="http://where.yahooapis.com/geocode?q=' + address + '&appid=' + this.keys.app_id + '&flags=JX"') + '&format=json&callback=?', function(data) {

         var coordinates = [];
         if (data && data.query && data.query.results && data.query.results.json && data.query.results.json.ResultSet && data.query.results.json.ResultSet.Found != "0") {

          // Could be an array or an object |arg!
          var res;

          if (_.isArray(data.query.results.json.ResultSet.Results)) {
            res = data.query.results.json.ResultSet.Results;
          } else {
            res = [data.query.results.json.ResultSet.Results];
          }

          for(var i in res) {
            var r = res[i]
              , position;

            position = {
              lat: r.latitude,
              lon: r.longitude
            };

            if (r.boundingbox) {
              position.boundingbox = r.boundingbox;
            }

            coordinates.push(position);
          }
        }

        callback(coordinates);
      });
  }
}



cdb.geo.geocoder.NOKIA = {

  keys: {
    app_id:   "KuYppsdXZznpffJsKT24",
    app_code: "A7tBPacePg9Mj_zghvKt9Q"
  },

  geocode: function(address, callback) {
    address = address.toLowerCase()
      .replace(/é/g,'e')
      .replace(/á/g,'a')
      .replace(/í/g,'i')
      .replace(/ó/g,'o')
      .replace(/ú/g,'u')
      .replace(/ /g,'+');

      var protocol = '';
      if(location.protocol.indexOf('http') === -1) {
        protocol = 'http:';
      }
      
      $.getJSON(protocol + '//places.nlp.nokia.com/places/v1/discover/search/?q=' + encodeURIComponent(address) + '&app_id=' + this.keys.app_id + '&app_code=' + this.keys.app_code + '&Accept-Language=en-US&at=0,0&callback=?', function(data) {

         var coordinates = [];
         if (data && data.results && data.results.items && data.results.items.length > 0) {

          var res = data.results.items;

          for(var i in res) {
            var r = res[i]
              , position;

            position = {
              lat: r.position[0],
              lon: r.position[1]
            };

            if (r.bbox) {
              position.boundingbox = {
                north: r.bbox[3],
                south: r.bbox[1],
                east: r.bbox[2],
                west: r.bbox[0] 
              }
            }

            coordinates.push(position);
          }
        }

        callback(coordinates);
      });
  }
}




/**
 * basic geometries, all of them based on geojson
 */
cdb.geo.Geometry = cdb.core.Model.extend({
  isPoint: function() {
    var type = this.get('geojson').type;
    if(type && type.toLowerCase() === 'point')
      return true;
    return false;
  }
});

cdb.geo.Geometries = Backbone.Collection.extend({});

/**
 * create a geometry
 * @param geometryModel geojson based geometry model, see cdb.geo.Geometry
 */
function GeometryView() { }

_.extend(GeometryView.prototype, Backbone.Events,{

  edit: function() {
    throw new Error("to be implemented");
  }

});
/**
* Classes to manage maps
*/

/**
* Map layer, could be tiled or whatever
*/
cdb.geo.MapLayer = cdb.core.Model.extend({

  defaults: {
    visible: true,
    type: 'Tiled'
  },
  /***
  * Compare the layer with the received one
  * @method isEqual
  * @param layer {Layer}
  */
  isEqual: function(layer) {

    var me          = this.toJSON()
      , other       = layer.toJSON()
      // Select params generated when layer is added to the map
      , map_params  = ['id', 'order'];

    // Delete from the layers copy
    _.each(map_params, function(param){
      delete me[param];
      delete other[param];
      if (me.options)     delete me.options[param];
      if (other.options)  delete other.options[param];
    });

    var myType  = me.type? me.type : me.options.type
      , itsType = other.type? other.type : other.options.type;

    if(myType && (myType === itsType)) {

      if(myType === 'Tiled') {
        var myTemplate  = me.urlTemplate? me.urlTemplate : me.options.urlTemplate
          , itsTemplate = other.urlTemplate? other.urlTemplate : other.options.urlTemplate;

        if(myTemplate === itsTemplate) {
          return true; // tiled and same template
        } else {
          return false; // tiled and differente template
        }
      } else { // same type but not tiled
        var myBaseType = me.base_type? me.base_type : me.options.base_type;
        var itsBaseType = other.base_type? other.base_type : other.options.base_type;
        if(myBaseType) {
          if(_.isEqual(me,other)) {
            return true;
          } else {
            return false;
          }
        } else { // not gmaps
          return true;
        }

      }
    }
    return false; // different type
  },

  /**
   * Updates the style chaging the table name for a new one
   * @param  {String} previousName
   * @param  {String} newName
   */
  updateCartoCss: function(previousName, newName) {
    var tileStyle = this.get('tile_style');
    var replaceRegexp = new RegExp('#'+previousName, 'g');
    tileStyle = tileStyle.replace(replaceRegexp, '#'+newName);
    this.save({'tile_style': tileStyle});
  }

});

// Good old fashioned tile layer
cdb.geo.TileLayer = cdb.geo.MapLayer.extend({
  getTileLayer: function() {
  }
});

cdb.geo.GMapsBaseLayer = cdb.geo.MapLayer.extend({
  OPTIONS: ['roadmap', 'satellite', 'terrain', 'custom'],
  defaults: {
    type: 'GMapsBase',
    base_type: 'gray_roadmap',
    style: null
  }
});

/**
 * this layer allows to put a plain color or image as layer (instead of tiles)
 */
cdb.geo.PlainLayer = cdb.geo.MapLayer.extend({
  defaults: {
    type: 'Plain',
    base_type: "plain",
    className: "plain",
    color: '#FFFFFF'
  }
});

// CartoDB layer
cdb.geo.CartoDBLayer = cdb.geo.MapLayer.extend({

  defaults: {
    attribution: 'CartoDB',
    type: 'CartoDB',
    active: true,
    query: null,
    opacity: 0.99,
    interactivity: null,
    interaction: true,
    debug: false,
    tiler_domain: "cartodb.com",
    tiler_port: "80",
    tiler_protocol: "http",
    sql_api_domain: "cartodb.com",
    sql_api_port: "80",
    sql_api_protocol: "http",
    extra_params: {},
    cdn_url: null,
    maxZoom: 28
  },

  activate: function() {
    this.set({active: true, opacity: 0.99, visible: true})
  },

  deactivate: function() {
    this.set({active: false, opacity: 0, visible: false})
  },

  /**
   * refresh the layer
   */
  invalidate: function() {
    var e = this.get('extra_params') || e;
    e.cache_buster = new Date().getTime();
    this.set('extra_params', e);
    this.trigger('change', this);
  },

  toggle: function() {
    if(this.get('active')) {
      this.deactivate();
    } else {
      this.activate();
    }
  }
});

cdb.geo.CartoDBGroupLayer = cdb.geo.MapLayer.extend({
  defaults: {
    visible: true,
    type: 'layergroup'
  }
});

cdb.geo.Layers = Backbone.Collection.extend({

  model: cdb.geo.MapLayer,

  initialize: function() {
    this.comparator = function(m) {
      return parseInt(m.get('order'), 10);
    };
    this.bind('add', this._assignIndexes);
  },

  /**
   * each time a layer is added or removed
   * the index should be recalculated
   */
  _assignIndexes: function(model, col, options) {
    var from = this.size() - 1;
    if(options && options.at !== undefined) {
      from = options.at;
    }
    if(from === 0) {
      this.models[0].set({ order: 0 });
      ++from;
    }
    for(var i = from; i < this.size(); ++i) {
      var prev = this.models[i - 1].get('order');
      this.models[i].set({ order: prev + 1 });
    }
  }
});

/**
* map model itself
*/
cdb.geo.Map = cdb.core.Model.extend({

  defaults: {
    center: [0, 0],
    zoom: 3,
    minZoom: 0,
    maxZoom: 28,
    scrollwheel: true,
    provider: 'leaflet'
  },

  initialize: function() {
    this.layers = new cdb.geo.Layers();

    this.layers.bind('reset', function() {
      if(this.layers.size() >= 1) {
        this._adjustZoomtoLayer(this.layers.models[0]);
      }
    }, this);

    this.geometries = new cdb.geo.Geometries();
  },

  setView: function(latlng, zoom) {
    this.set({
      center: latlng,
      zoom: zoom
    }, {
      silent: true
    });
    this.trigger("set_view");
  },

  setZoom: function(z) {
    this.set({
      zoom: z
    });
  },

  enableScrollWheel: function() {
    this.set({
      scrollwheel: true
    });
  },

  disableScrollWheel: function() {
    this.set({
      scrollwheel: false
    });
  },

  getZoom: function() {
    return this.get('zoom');
  },

  setCenter: function(latlng) {
    this.set({
      center: latlng
    });
  },

  /**
  * Change multiple options at the same time
  * @params {Object} New options object
  */
  setOptions: function(options) {
    if (typeof options != "object" || options.length) {
      if (this.options.debug) {
        throw (options + ' options has to be an object');
      } else {
        return;
      }
    }

    // Set options
    _.defaults(this.options, options);

  },

  /**
  * return getViewbounds if it is set
  */
  getViewBounds: function() {
    if(this.has('view_bounds_sw') && this.has('view_bounds_ne')) {
      return [
        this.get('view_bounds_sw'),
        this.get('view_bounds_ne')
      ];
    }
    return null;
  },

  getLayerAt: function(i) {
    return this.layers.at(i);
  },

  getLayerByCid: function(cid) {
    return this.layers.getByCid(cid);
  },

  _adjustZoomtoLayer: function(layer) {
    //set zoom
    //
    /*
    var z = layer.get('maxZoom');
    if(_.isNumber(z)) {
    this.set({ maxZoom: z });
    }
    z = layer.get('minZoom');
    if(_.isNumber(z)) {
    this.set({ minZoom: z });
    }
    */
  },

  addLayer: function(layer, opts) {
    if(this.layers.size() == 0) {
      this._adjustZoomtoLayer(layer);
    }
    this.layers.add(layer, opts);
    this.trigger('layerAdded');
    if(this.layers.length === 1) {
      this.trigger('firstLayerAdded');
    }
    return layer.cid;
  },

  removeLayer: function(layer) {
    this.layers.remove(layer);
  },

  removeLayerByCid: function(cid) {
    var layer = this.layers.getByCid(cid);

    if (layer) this.removeLayer(layer);
    else cdb.log.error("There's no layer with cid = " + cid + ".");
  },

  removeLayerAt: function(i) {
    var layer = this.layers.at(i);

    if (layer) this.removeLayer(layer);
    else cdb.log.error("There's no layer in that position.");
  },

  clearLayers: function() {
    while (this.layers.length > 0) {
      this.removeLayer(this.layers.at(0));
    }
  },

  // by default the base layer is the layer at index 0
  getBaseLayer: function() {
    return this.layers.at(0);
  },

  /**
  * Checks if the base layer is already in the map as base map
  */
  isBaseLayerAdded: function(layer) {
    var baselayer = this.getBaseLayer()
    return baselayer && layer.isEqual(baselayer);
  },

  /**
  * gets the url of the template of the tile layer
  * @method getLayerTemplate
  */
  getLayerTemplate: function() {
    var baseLayer = this.getBaseLayer();
    if(baseLayer && baseLayer.get('options'))  {
      return baseLayer.get('options').urlTemplate;
    }
  },

  updateAttribution: function(old,new_) {
    var attributions = this.get("attribution") || [];

    // Remove the old one
    if (old && old.get("attribution")) {
      attributions = _.without(attributions, old.get("attribution"));
    }

    // Save the new one
    if (new_.get("attribution")) {
      if (!_.contains(attributions, new_.get("attribution"))) {
        attributions.push(new_.get("attribution"));
      }
    }

    this.set({ attribution: attributions });
  },

  addGeometry: function(geom) {
    this.geometries.add(geom);
  },

  removeGeometry: function(geom) {
    this.geometries.remove(geom);
  },

  setBounds: function(b) {
    this.attributes.view_bounds_sw = [
      b[0][0],
      b[0][1]
    ];
    this.attributes.view_bounds_ne = [
      b[1][0],
      b[1][1]
    ];

    // change both at the same time
    this.trigger('change:view_bounds_ne', this);

  },

  // set center and zoom according to fit bounds
  fitBounds: function(bounds, mapSize) {
    var z = this.getBoundsZoom(bounds, mapSize);
    if(z == null) {
      return;
    }
    // project -> calculate center -> unproject
    var swPoint = cdb.geo.Map.latlngToMercator(bounds[0], z);
    var nePoint = cdb.geo.Map.latlngToMercator(bounds[1], z);

    var center = cdb.geo.Map.mercatorToLatLng({
      x: (swPoint[0] + nePoint[0])*0.5,
      y: (swPoint[1] + nePoint[1])*0.5
    }, z);
    this.set({
      center: center,
      zoom: z
    })
  },

  // adapted from leaflat src
  getBoundsZoom: function(boundsSWNE, mapSize) {
    var size = [mapSize.x, mapSize.y],
    zoom = this.get('minZoom') || 0,
    maxZoom = this.get('maxZoom') || 24,
    ne = boundsSWNE[1],
    sw = boundsSWNE[0],
    boundsSize = [],
    nePoint,
    swPoint,
    zoomNotFound = true;

    do {
      zoom++;
      nePoint = cdb.geo.Map.latlngToMercator(ne, zoom);
      swPoint = cdb.geo.Map.latlngToMercator(sw, zoom);
      boundsSize[0] = Math.abs(nePoint[0] - swPoint[0]);
      boundsSize[1] = Math.abs(swPoint[1] - nePoint[1]);
      zoomNotFound = boundsSize[0] <= size[0] || boundsSize[1] <= size[1];
    } while (zoomNotFound && zoom <= maxZoom);

    if (zoomNotFound) {
      return null;
    }

    return zoom - 1;

  }

}, {

  latlngToMercator: function(latlng, zoom) {
    var ll = new L.LatLng(latlng[0], latlng[1]);
    var pp = L.CRS.EPSG3857.latLngToPoint(ll, zoom);
    return [pp.x, pp.y];
  },

  mercatorToLatLng: function(point, zoom) {
    var ll = L.CRS.EPSG3857.pointToLatLng(point, zoom);
    return [ll.lat, ll.lng]
  }

});


/**
* Base view for all impl
*/
cdb.geo.MapView = cdb.core.View.extend({

  initialize: function() {

    if (this.options.map === undefined) {
      throw "you should specify a map model";
    }

    this.map = this.options.map;
    this.add_related_model(this.map);
    this.add_related_model(this.map.layers);

    this.autoSaveBounds = false;

    // this var stores views information for each model
    this.layers = {};
    this.geometries = {};

    this.bind('clean', this._removeLayers, this);
  },

  render: function() {
    return this;
  },

  /**
  * add a infowindow to the map
  */
  addInfowindow: function(infoWindowView) {
    if (infoWindowView) {
      this.$el.append(infoWindowView.render().el);
      this.addView(infoWindowView);
    }
  },

  /**
  * search in the subviews and return the infowindows
  */
  getInfoWindows: function() {
    var result = [];
    for (var s in this._subviews) {
      if(this._subviews[s] instanceof cdb.geo.ui.Infowindow) {
        result.push(this._subviews[s]);
      }
    }
    return result;
  },

  showBounds: function(bounds) {
    throw "to be implemented";
  },

  _removeLayers: function() {
    for(var layer in this.layers) {
      this.layers[layer].remove();
    }
    this.layers = {}
  },

  /**
  * set model property but unbind changes first in order to not create an infinite loop
  */
  _setModelProperty: function(prop) {
    this._unbindModel();
    this.map.set(prop);
    if(prop.center !== undefined || prop.zoom !== undefined) {
      var b = this.getBounds();
      this.map.set({
        view_bounds_sw: b[0],
        view_bounds_ne: b[1]
      });
      if(this.autoSaveBounds) {
        this._saveLocation();
      }
    }
    this._bindModel();
  },

  /** bind model properties */
  _bindModel: function() {
    this._unbindModel();
    this.map.bind('change:view_bounds_sw',  this._changeBounds, this);
    this.map.bind('change:view_bounds_ne',  this._changeBounds, this);
    this.map.bind('change:zoom',            this._setZoom, this);
    this.map.bind('change:scrollwheel',     this._setScrollWheel, this);
    this.map.bind('change:center',          this._setCenter, this);
    this.map.bind('change:attribution',     this._setAttribution, this);
  },

  /** unbind model properties */
  _unbindModel: function() {
    /*
    this.map.unbind('change:zoom',   this._setZoom, this);
    this.map.unbind('change:center', this._setCenter, this);
    this.map.unbind('change:view_bounds_sw', this._changeBounds, this);
    this.map.unbind('change:view_bounds_ne', this._changeBounds, this);
    */

    this.map.unbind('change:view_bounds_sw',  null, this);
    this.map.unbind('change:view_bounds_ne',  null, this);
    this.map.unbind('change:zoom',            null, this);
    this.map.unbind('change:scrollwheel',     null, this);
    this.map.unbind('change:center',          null, this);
    this.map.unbind('change:attribution',     null, this);
  },

  _changeBounds: function() {
    var bounds = this.map.getViewBounds();
    if(bounds) {
      this.showBounds(bounds);
    }
  },

  showBounds: function(bounds) {
    this.map.fitBounds(bounds, this.getSize())
  },

  _setAttribution: function(m,attr) {
    this.setAttribution(m);
  },

  _addLayers: function() {
    var self = this;
    this._removeLayers();
    this.map.layers.each(function(lyr) {
      self._addLayer(lyr);
    });
  },

  _removeLayers: function(layer) {
    for(var i in this.layers) {
      var layer_view = this.layers[i];
      layer_view.remove();
      delete this.layers[i];
    }
  },

  _removeLayer: function(layer) {
    var layer_view = this.layers[layer.cid];
    if(layer_view) {
      layer_view.remove();
      delete this.layers[layer.cid];
    }
  },

  _removeGeometry: function(geo) {
    var geo_view = this.geometries[geo.cid];
    delete this.layers[layer.cid];
  },

  getLayerByCid: function(cid) {
    var l = this.layers[cid];
    if(!l) {
      cdb.log.debug("layer with cid " + cid + " can't be get");
    }
    return l;
  },

  _setZoom: function(model, z) {
    throw "to be implemented";
  },

  _setCenter: function(model, center) {
    throw "to be implemented";
  },

  _addLayer: function(layer, layers, opts) {
    throw "to be implemented";
  },

  _addGeomToMap: function(geom) {
    throw "to be implemented";
  },

  _removeGeomFromMap: function(geo) {
    throw "to be implemented";
  },

  setAutoSaveBounds: function() {
    var self = this;
    this.autoSaveBounds = true;
  },

  _saveLocation: _.debounce(function() {
    this.map.save(null, { silent: true });
  }, 1000),

  _addGeometry: function(geom) {
    var view = this._addGeomToMap(geom);
    this.geometries[geom.cid] = view;
  },

  _removeGeometry: function(geo) {
    var geo_view = this.geometries[geo.cid];
    this._removeGeomFromMap(geo_view);
    delete this.geometries[geo.cid];
  }


}, {

  _getClass: function(provider) {
    var mapViewClass = cdb.geo.LeafletMapView;
    if(provider === 'googlemaps') {
      if(typeof(google) != "undefined" && typeof(google.maps) != "undefined") {
        mapViewClass = cdb.geo.GoogleMapsMapView;
      } else {
        cdb.log.error("you must include google maps library _before_ include cdb");
      }
    }
    return mapViewClass;
  },

  create: function(el, mapModel) {
    var _mapViewClass = cdb.geo.MapView._getClass(mapModel.get('provider'));
    return new _mapViewClass({
      el: el,
      map: mapModel
    });
  }

}
);
/**
 * View to control the zoom of the map.
 *
 * Usage:
 *
 * var zoomControl = new cdb.geo.ui.Zoom({ model: map });
 * mapWrapper.$el.append(zoomControl.render().$el);
 *
 */


cdb.geo.ui.Zoom = cdb.core.View.extend({

  className: "cartodb-zoom",

  events: {
    'click .zoom_in': 'zoom_in',
    'click .zoom_out': 'zoom_out'
  },

  default_options: {
    timeout: 0,
    msg: ''
  },

  initialize: function() {
    this.map = this.model;

    _.defaults(this.options, this.default_options);

    this.template = this.options.template ? this.options.template : cdb.templates.getTemplate('geo/zoom');
    //TODO: bind zoom change to disable zoom+/zoom-
  },

  render: function() {
    this.$el.html(this.template(this.options));
    return this;
  },

  zoom_in: function(ev) {
    if (this.map.get("maxZoom") > this.map.getZoom()) {
      this.map.setZoom(this.map.getZoom() + 1);
    }
    ev.preventDefault();
    ev.stopPropagation();
  },

  zoom_out: function(ev) {
    if (this.map.get("minZoom") < this.map.getZoom()) {
      this.map.setZoom(this.map.getZoom() - 1);
    }
    ev.preventDefault();
    ev.stopPropagation();
  }

});
/**
 * View to know which is the map zoom.
 *
 * Usage:
 *
 * var zoomInfo = new cdb.geo.ui.ZoomInfo({ model: map });
 * mapWrapper.$el.append(zoomInfo.render().$el);
 *
 */


cdb.geo.ui.ZoomInfo = cdb.core.View.extend({

  className: "cartodb-zoom-info",

  initialize: function() {
    this.model.bind("change:zoom", this.render, this);
  },

  render: function() {
    this.$el.html(this.model.get("zoom"));
    return this;
  }
});
cdb.geo.ui.LegendItemModel = cdb.core.Model.extend({ });

cdb.geo.ui.LegendItems = Backbone.Collection.extend({
  model: cdb.geo.ui.LegendItemModel
});

cdb.geo.ui.LegendItem = cdb.core.View.extend({

  tagName: "li",

  initialize: function() {

    _.bindAll(this, "render");
    this.template = cdb.templates.getTemplate('templates/map/legend/item');

  },

  render: function() {

    this.$el.html(this.template(this.model.toJSON()));
    return this.$el;

  }

});

cdb.geo.ui.Legend = cdb.core.View.extend({

  id: "legend",

  default_options: {

  },

  initialize: function() {

    this.map = this.model;

    this.add_related_model(this.model);

    _.bindAll(this, "render", "show", "hide");

    _.defaults(this.options, this.default_options);

    if (this.collection) {
      this.model.collection = this.collection;
    }

    this.template = this.options.template ? this.options.template : cdb.templates.getTemplate('geo/legend');
  },

  show: function() {
    this.$el.fadeIn(250);
  },

  hide: function() {
    this.$el.fadeOut(250);
  },

  render: function() {
    var self = this;

    if (this.model != undefined) {
      this.$el.html(this.template(this.model.toJSON()));
    }

    if (this.collection) {

      this.collection.each(function(item) {

        var view = new cdb.geo.ui.LegendItem({ className: item.get("className"), model: item });
        self.$el.find("ul").append(view.render());

      });
    }

    return this;
  }

});
cdb.geo.ui.SwitcherItemModel = Backbone.Model.extend({ });

cdb.geo.ui.SwitcherItems = Backbone.Collection.extend({
  model: cdb.geo.ui.SwitcherItemModel
});

cdb.geo.ui.SwitcherItem = cdb.core.View.extend({

  tagName: "li",

  events: {

    "click a" : "select"

  },

  initialize: function() {

    _.bindAll(this, "render");
    this.template = cdb.templates.getTemplate('templates/map/switcher/item');
    this.parent = this.options.parent;
    this.model.on("change:selected", this.render);

  },

  select: function(e) {
    e.preventDefault();
    this.parent.toggle(this);
    var callback = this.model.get("callback");

    if (callback) {
      callback();
    }

  },

  render: function() {

    if (this.model.get("selected") == true) {
      this.$el.addClass("selected");
    } else {
      this.$el.removeClass("selected");
    }

    this.$el.html(this.template(this.model.toJSON()));
    return this.$el;

  }

});

cdb.geo.ui.Switcher = cdb.core.View.extend({

  id: "switcher",

  default_options: {

  },

  initialize: function() {

    this.map = this.model;

    this.add_related_model(this.model);

    _.bindAll(this, "render", "show", "hide", "toggle");

    _.defaults(this.options, this.default_options);

    if (this.collection) {
      this.model.collection = this.collection;
    }

    this.template = this.options.template ? this.options.template : cdb.templates.getTemplate('geo/switcher');
  },

  show: function() {
    this.$el.fadeIn(250);
  },

  hide: function() {
    this.$el.fadeOut(250);
  },

  toggle: function(clickedItem) {

    if (this.collection) {
      this.collection.each(function(item) {
        item.set("selected", !item.get("selected"));
      });
    }

  },

  render: function() {
    var self = this;

    if (this.model != undefined) {
      this.$el.html(this.template(this.model.toJSON()));
    }

    if (this.collection) {

      this.collection.each(function(item) {

        var view = new cdb.geo.ui.SwitcherItem({ parent: self, className: item.get("className"), model: item });
        self.$el.find("ul").append(view.render());

      });
    }

    return this;
  }

});
/** Usage:
*
* Add Infowindow model:
*
* var infowindowModel = new cdb.geo.ui.InfowindowModel({
*   template_name: 'templates/map/infowindow',
*   latlng: [72, -45],
*   offset: [100, 10]
* });
*
* var infowindow = new cdb.geo.ui.Infowindow({
*   model: infowindowModel,
*   mapView: mapView
* });
*
* Show the infowindow:
* infowindow.showInfowindow();
*
*/

cdb.geo.ui.InfowindowModel = Backbone.Model.extend({
  SYSTEM_COLUMNS: ['the_geom', 'the_geom_webmercator', 'created_at', 'updated_at', 'cartodb_id', 'cartodb_georef_status'],

  defaults: {
    template_name: 'geo/infowindow',
    latlng: [0, 0],
    offset: [28, 0], // offset of the tip calculated from the bottom left corner
    autoPan: true,
    content: "",
    visibility: false,
    fields: null // contains the fields displayed in the infowindow
  },

  clearFields: function() {
    this.set({fields: []});
  },

  saveFields: function() {
    this.set('old_fields', _.clone(this.get('fields')));
  },

  fieldCount: function() {
    return this.get('fields').length
  },

  restoreFields: function(whiteList) {
     var fields = this.get('old_fields')
     if(whiteList) {
       fields = fields.filter(function(f) {
          return _.contains(whiteList, f.name);
       });
     }
     if(fields && fields.length) {
       this._setFields(fields);
     }
     this.unset('old_fields');
  },

  _cloneFields: function() {
    return _(this.get('fields')).map(function(v) {
      return _.clone(v);
    });
  },

  _setFields: function(f) {
    f.sort(function(a, b) { return a.position -  b.position; });
    this.set({'fields': f});
  },

  sortFields: function() {
    this.get('fields').sort(function(a, b) { return a.position - b.position; });
  },

  _addField: function(fieldName, at) {
    var dfd = $.Deferred();
    if(!this.containsField(fieldName)) {
      var fields = this.get('fields');
      if(fields) {
        at = at === undefined ? fields.length: at;
        fields.push({name: fieldName, title: true, position: at});
      } else {
        at = at === undefined ? 0 : at;
        this.set('fields', [{name: fieldName, title: true, position: at}])
      }
    }
    dfd.resolve();
    return dfd.promise();
  },

  addField: function(fieldName, at) {
    var self = this;
    $.when(this._addField(fieldName, at)).then(function() {
      self.sortFields();
      self.trigger('change:fields');
      self.trigger('add:fields');
    });
    return this;
  },

  getFieldProperty: function(fieldName, k) {
    if(this.containsField(fieldName)) {
      var fields = this.get('fields') || [];
      var idx = _.indexOf(_(fields).pluck('name'), fieldName);
      return fields[idx][k];
    }
    return null;
  },

  setFieldProperty: function(fieldName, k, v) {
    if(this.containsField(fieldName)) {
      var fields = this._cloneFields() || [];
      var idx = _.indexOf(_(fields).pluck('name'), fieldName);
      fields[idx][k] = v;
      this._setFields(fields);
    }
    return this;
  },

  getFieldPos: function(fieldName) {
    var p = this.getFieldProperty(fieldName, 'position');
    if(p == undefined) {
      return Number.MAX_VALUE;
    }
    return p;
  },

  containsField: function(fieldName) {
    var fields = this.get('fields') || [];
    return _.contains(_(fields).pluck('name'), fieldName);
  },

  removeField: function(fieldName) {
    if(this.containsField(fieldName)) {
      var fields = this._cloneFields() || [];
      var idx = _.indexOf(_(fields).pluck('name'), fieldName);
      if(idx >= 0) {
        fields.splice(idx, 1);
      }
      this._setFields(fields);
      this.trigger('remove:fields')
    }
    return this;
  }

});

cdb.geo.ui.Infowindow = cdb.core.View.extend({
  className: "cartodb-infowindow",

  spin_options: {
    lines: 10, length: 0, width: 4, radius: 6, corners: 1, rotate: 0, color: 'rgba(0,0,0,0.5)',
    speed: 1, trail: 60, shadow: false, hwaccel: true, className: 'spinner', zIndex: 2e9,
    top: 'auto', left: 'auto', position: 'absolute'
  },

  events: {
    // Close bindings
    "click .close":         "_closeInfowindow",
    "touchstart .close":    "_closeInfowindow",
    "MSPointerDown .close": "_closeInfowindow",
    // Rest infowindow bindings
    "dragstart":            "_checkOrigin",
    "mousedown":            "_checkOrigin",
    "touchstart":           "_checkOrigin",
    "MSPointerDown":        "_checkOrigin",
    "dblclick":             "_stopPropagation",
    "mousewheel":           "_stopPropagation",
    "DOMMouseScroll":       "_stopPropagation",
    "dbclick":              "_stopPropagation",
    "click":                "_stopPropagation"
  },

  initialize: function(){
    var self = this;

    _.bindAll(this, "render", "setLatLng", "changeTemplate", "_updatePosition", "_update", "toggle", "show", "hide");

    this.mapView = this.options.mapView;

    this.template = this.options.template ? this.options.template : cdb.templates.getTemplate(this.model.get("template_name"));

    this.add_related_model(this.model);

    this.model.bind('change:content',       this.render, this);
    this.model.bind('change:template_name', this.changeTemplate, this);
    this.model.bind('change:latlng',        this._update, this);
    this.model.bind('change:visibility',    this.toggle, this);
    this.model.bind('change:template',      this._compileTemplate, this);

    this.mapView.map.bind('change',         this._updatePosition, this);

    this.mapView.bind('zoomstart', function(){
      self.hide(true);
    });

    this.mapView.bind('zoomend', function() {
      self.show(true);
    });

    // Set min height to show the scroll
    this.minHeightToScroll = 180;

    this.render();
    this.$el.hide();
  },

  /**
   *  Render infowindow content
   */
  render: function() {
    if(this.template) {

      // If there is content, destroy the jscrollpane first, then remove the content.
      var $jscrollpane = this.$el.find(".cartodb-popup-content");
      if ($jscrollpane.length > 0 && $jscrollpane.data() != null) {
        $jscrollpane.data().jsp && $jscrollpane.data().jsp.destroy();
      }

      // Clone fields and template name
      var fields = _.map(this.model.attributes.content.fields, function(field){
        return _.clone(field);
      });
      var template_name = _.clone(this.model.attributes.template_name);
      // Sanitized them
      var sanitized_fields = this._fieldsToString(fields, template_name);
      var data = this.model.get('content') ? this.model.get('content').data : {}
      this.$el.html($(this.template({ 
          content: {
            fields: sanitized_fields,
            data: data 
          }
        })
      ));

      // Hello jscrollpane hacks!
      // It needs some time to initialize, if not it doesn't render properly the fields
      // Check the height of the content + the header if exists
      var self = this;
      setTimeout(function() {
        var actual_height = self.$el.find(".cartodb-popup-content").outerHeight() + self.$el.find(".cartodb-popup-header").outerHeight();
        if (self.minHeightToScroll <= actual_height)
          self.$el.find(".cartodb-popup-content").jScrollPane({
            maintainPosition:       false,
            verticalDragMinHeight:  20
          });
      }, 1);

      // If the infowindow is loading, show spin
      this._checkLoading();

      // If the template is 'cover-enabled', load the cover
      this._loadCover();
    }

    return this;
  },

  /**
   *  Change template of the infowindow
   */
  changeTemplate: function(template_name) {
    this.template = cdb.templates.getTemplate(this.model.get("template_name"));
    this.render();
  },

  /**
   *  Compile template of the infowindow
   */
  _compileTemplate: function() {
    this.template = new cdb.core.Template({
       template: this.model.get('template'),
       type: this.model.get('template_type') || 'mustache'
    }).asFunction()

    this.render();
  },

  /**
   *  Check event origin
   */
  _checkOrigin: function(ev) {
    // If the mouse down come from jspVerticalBar
    // dont stop the propagation, but if the event
    // is a touchstart, stop the propagation
    var come_from_scroll = (($(ev.target).closest(".jspVerticalBar").length > 0) && (ev.type != "touchstart"));

    if (!come_from_scroll) {
      ev.stopPropagation();
    }
  },

  /**
   *  Convert values to string unless value is NULL
   */
  _fieldsToString: function(fields, template_name) {
    var fields_sanitized = [];
    if (fields && fields.length > 0) {
      var self = this;
      fields_sanitized = _.map(fields, function(field,i) {
        // Return whole attribute sanitized
        return self._sanitizeField(field, template_name, field.index || i);
      });
    }
    return fields_sanitized;
  },

  /**
   *  Sanitize fields, what does it mean?
   *  - If value is null, transform to string
   *  - If value is an url, add it as an attribute
   *  - Cut off title if it is very long (in header or image templates).
   *  - If the value is a valid url, let's make it a link.
   *  - More to come...
   */                                                                                                                
  _sanitizeField: function(attr, template_name, pos) {
    // Check null or undefined :| and set both to empty == ''
    if (attr.value == null || attr.value == undefined) {
      attr.value = '';
    }

    // Cast all values to string due to problems with Mustache 0 number rendering
    var new_value = attr.value.toString();

    // Remove '_' character from titles
    if (attr.title)
      attr.title = attr.title.replace(/_/g,' ');

    // If it is index 0, not any field type, header template type and length bigger than 30... cut off the text!
    if (!attr.type && pos==0 && attr.value.length > 35 && template_name && template_name.search('_header_') != -1) {
      new_value = attr.value.substr(0,32) + "...";
    }

    // If it is index 1, not any field type, header image template type and length bigger than 30... cut off the text!
    if (!attr.type && pos==1 && attr.value.length > 35 && template_name && template_name.search('_header_with_image') != -1) {
      new_value = attr.value.substr(0,32) + "...";
    }

    // Is it the value a link?
    if (this._isValidURL(attr.value)) {
      new_value = "<a href='" + attr.value + "' target='_blank'>" + new_value + "</a>"
    }

    // If it is index 0, not any field type, header image template type... don't cut off the text or add any link!!
    if (pos==0 && template_name.search('_header_with_image') != -1) {
      new_value = attr.value;
    }

    // Save new sanitized value
    attr.value = new_value;

    return attr;
  },

  /**
   *  Check if infowindow is loading the row content
   */
  _checkLoading: function() {
    var content = this.model.get("content");

    if (content.fields && content.fields.length == 1 && content.fields[0].type == "loading") {
      this._startSpinner()
    } else {
      this._stopSpinner()
    }
  },

  /**
   *  Stop loading spinner
   */
  _stopSpinner: function() {
    if (this.spinner)
      this.spinner.stop()
  },

  /**
   *  Start loading spinner
   */
  _startSpinner: function($el) {
    this._stopSpinner();

    var $el = this.$el.find('.loading');

    if ($el) {
      // Check if it is dark or other to change color
      var template_dark = this.model.get('template_name').search('dark') != -1;

      if (template_dark) {
        this.spin_options.color = '#FFF';
      } else {
        this.spin_options.color = 'rgba(0,0,0,0.5)';
      }

      this.spinner = new Spinner(this.spin_options).spin();
      $el.append(this.spinner.el);
    }
  },

  /**
   *  Stop loading spinner
   */
  _containsCover: function() {
    return this.$el.find(".cartodb-popup.header").attr("data-cover") ? true : false;
  },


  /**
   *  Get cover URL
   */
  _getCoverURL: function() {
    var content = this.model.get("content");

    if (content && content.fields && content.fields.length > 0) {
      return (content.fields[0].value).toString();
    }

    return false;
  },

  /**
   *  Attempts to load the cover URL and show it
   */
  _loadCover: function() {

    if (!this._containsCover()) return;

    var
    self = this,
    $cover = this.$(".cover"),
    $shadow = this.$(".shadow"),
    url = this._getCoverURL();

    if (!this._isValidURL(url)) {
      $shadow.hide();
      cdb.log.info("Header image url not valid");
      return;
    }

    // configure spinner
    var
    target  = document.getElementById('spinner'),
    opts    = { lines: 9, length: 4, width: 2, radius: 4, corners: 1, rotate: 0, color: '#ccc', speed: 1, trail: 60, shadow: true, hwaccel: false, zIndex: 2e9 },
    spinner = new Spinner(opts).spin(target);

    // create the image
    var $img = $cover.find("img");

    $img.hide(function() {
      this.remove();
    });

    $img = $("<img />").attr("src", url);
    $cover.append($img);

    $img.load(function(){
      spinner.stop();

      var w  = $img.width();
      var h  = $img.height();
      var coverWidth = $cover.width();
      var coverHeight = $cover.height();

      var ratio = h / w;
      var coverRatio = coverHeight / coverWidth;

      // Resize rules
      if ( w > coverWidth && h > coverHeight) { // bigger image
        if ( ratio < coverRatio ) $img.css({ height: coverHeight });
        else {
          var calculatedHeight = h / (w / coverWidth);
          $img.css({ width: coverWidth, top: "50%", position: "absolute", "margin-top": -1*parseInt(calculatedHeight, 10)/2 });
        }
      } else {
        var calculatedHeight = h / (w / coverWidth);
        $img.css({ width: coverWidth, top: "50%", position: "absolute", "margin-top": -1*parseInt(calculatedHeight, 10)/2 });
      }

      $img.fadeIn(300);
    })
    .error(function(){
      spinner.stop();
    });
  },

  /**
   *  Return true if the provided URL is valid
   */
  _isValidURL: function(url) {
    if (url) {
      var urlPattern = /^(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?$/
      return String(url).match(urlPattern) != null ? true : false;
    }

    return false;
  },

  /**
   *  Toggle infowindow visibility
   */
  toggle: function() {
    this.model.get("visibility") ? this.show() : this.hide();
  },

  /**
   *  Stop event propagation
   */
  _stopPropagation: function(ev) {
    ev.stopPropagation();
  },

  /**
   *  Set loading state adding its content
   */
  setLoading: function() {
    this.model.set({
      content:  {
        fields: [{
          title: null,
          value: 'Loading content...',
          index: null,
          type: "loading"
        }],
        data: {}
      }
    })
    return this;
  },

  /**
   *  Set loading state adding its content
   */
  setError: function() {
    this.model.set({
      content:  {
        fields: [{
          title: null,
          value: 'There has been an error...',
          index: null,
          type: 'error'
        }],
        data: {}
      }
    })
    return this;
  },

  /**
   * Set the correct position for the popup
   */
  setLatLng: function (latlng) {
    this.model.set("latlng", latlng);
    return this;
  },

  /**
   *  Close infowindow
   */
  _closeInfowindow: function(ev) {
    if (ev) {
      ev.preventDefault()
      ev.stopPropagation();
    }

    this.model.set("visibility",false);
  },

  /**
   *  Set visibility infowindow
   */
  showInfowindow: function() {
    this.model.set("visibility", true);
  },

  /**
   *  Show infowindow (update, pan, etc)
   */
  show: function (no_pan) {
    var self = this;

    if (this.model.get("visibility")) {
      self.$el.css({ left: -5000 });
      self._update(no_pan);
    }
  },

  /**
   *  Get infowindow visibility
   */
  isHidden: function () {
    return !this.model.get("visibility");
  },

  /**
   *  Set infowindow to hidden
   */
  hide: function (force) {
    if (force || !this.model.get("visibility")) this._animateOut();
  },

  /**
   *  Update infowindow
   */
  _update: function (no_pan) {

    if(!this.isHidden()) {
      var delay = 0;

      if (!no_pan) {
        var delay = this.adjustPan();
      }

      this._updatePosition();
      this._animateIn(delay);
    }
  },

  /**
   *  Animate infowindow to show up
   */
  _animateIn: function(delay) {
    if (!$.browser.msie || ($.browser.msie && parseInt($.browser.version) > 8 )) {
      this.$el.css({
        'marginBottom':'-10px',
        'display':'block',
        opacity:0
      });

      this.$el
      .delay(delay)
      .animate({
        opacity: 1,
        marginBottom: 0
      },300);
    } else {
      this.$el.show();
    }
  },

  /**
   *  Animate infowindow to disappear
   */
  _animateOut: function() {
    if (!$.browser.msie || ($.browser.msie && parseInt($.browser.version) > 8 )) {
      var self = this;
      this.$el.animate({
        marginBottom: "-10px",
        opacity:      "0",
        display:      "block"
      }, 180, function() {
        self.$el.css({display: "none"});
      });
    } else {
      this.$el.hide();
    }
  },

  /**
   *  Update the position (private)
   */
  _updatePosition: function () {
    if(this.isHidden()) return;

    var
    offset          = this.model.get("offset")
    pos             = this.mapView.latLonToPixel(this.model.get("latlng")),
    x               = this.$el.position().left,
    y               = this.$el.position().top,
    containerHeight = this.$el.outerHeight(true),
    containerWidth  = this.$el.width(),
    left            = pos.x - offset[0],
    size            = this.mapView.getSize(),
    bottom          = -1*(pos.y - offset[1] - size.y);

    this.$el.css({ bottom: bottom, left: left });
  },

  /**
   *  Adjust pan to show correctly the infowindow
   */
  adjustPan: function (callback) {
    var offset = this.model.get("offset");

    if (!this.model.get("autoPan") || this.isHidden()) { return; }

    var
    x               = this.$el.position().left,
    y               = this.$el.position().top,
    containerHeight = this.$el.outerHeight(true) + 15, // Adding some more space
    containerWidth  = this.$el.width(),
    pos             = this.mapView.latLonToPixel(this.model.get("latlng")),
    adjustOffset    = {x: 0, y: 0};
    size            = this.mapView.getSize()
    wait_callback   = 0;

    if (pos.x - offset[0] < 0) {
      adjustOffset.x = pos.x - offset[0] - 10;
    }

    if (pos.x - offset[0] + containerWidth > size.x) {
      adjustOffset.x = pos.x + containerWidth - size.x - offset[0] + 10;
    }

    if (pos.y - containerHeight < 0) {
      adjustOffset.y = pos.y - containerHeight - 10;
    }

    if (pos.y - containerHeight > size.y) {
      adjustOffset.y = pos.y + containerHeight - size.y;
    }

    if (adjustOffset.x || adjustOffset.y) {
      this.mapView.panBy(adjustOffset);
      wait_callback = 300;
    }

    return wait_callback;
  }

});

cdb.geo.ui.Header = cdb.core.View.extend({

  className: 'cartodb-header',

  initialize: function() {},

  render: function() {
    this.$el.html(this.options.template(this.options));
    return this;
  }
});

cdb.geo.ui.Search = cdb.core.View.extend({

  className: 'cartodb-searchbox',

  events: {
    "click input[type='text']":   '_focus',
    "submit form":                '_submit',
    "click":                      '_stopPropagation',
    "dblclick":                   '_stopPropagation',
    "mousedown":                  '_stopPropagation'
  },

  initialize: function() {},

  render: function() {
    this.$el.html(this.options.template(this.options));
    return this;
  },

  _stopPropagation: function(ev) {
    ev.stopPropagation();
  },

  _focus: function(ev) {
    ev.preventDefault();

    $(ev.target).focus();
  },

  _showLoader: function() {
    this.$('span.loader').show();
  },

  _hideLoader: function() {
    this.$('span.loader').hide();
  },

  _submit: function(ev) {
    ev.preventDefault();

    var self = this
      , address = this.$('input.text').val();

    // Show geocoder loader
    this._showLoader();
     
    cdb.geo.geocoder.NOKIA.geocode(address, function(coords) {
      if (coords.length>0) {
        var validBBox = true;
        
        // check bounding box is valid
        if(!coords[0].boundingbox || coords[0].boundingbox.south == coords[0].boundingbox.north ||
          coords[0].boundingbox.east == coords[0].boundingbox.west) {
          validBBox = false;
        }

        if (validBBox && coords[0].boundingbox) {
          self.model.setBounds([
            [
              parseFloat(coords[0].boundingbox.south),
              parseFloat(coords[0].boundingbox.west)
            ],
            [
              parseFloat(coords[0].boundingbox.north),
              parseFloat(coords[0].boundingbox.east)
            ]
          ]);
        } else if (coords[0].lat && coords[0].lon) {
          self.model.setCenter([coords[0].lat, coords[0].lon]);
          self.model.setZoom(10);
        }
      }

      // Hide geocoder loader
      self._hideLoader();
    });
  }
});

/**
 *  Layer selector: it allows to select the layers that will be shown in the map
 *  - It needs the mapview, the element template and the dropdown template
 *
 *  var layer_selector = new cdb.geo.ui.LayerSelector({
 *    mapView: mapView,
 *    template: element_template,
 *    dropdown_template: dropdown_template
 *  });
 */

cdb.geo.ui.LayerSelector = cdb.core.View.extend({

  className: 'cartodb-layer-selector-box',

  events: {
    "click":     '_openDropdown',
    "dblclick":  'killEvent',
    "mousedown": 'killEvent'
  },

  initialize: function() {
    this.map = this.options.mapView.map;

    this.mapView  = this.options.mapView;
    this.mapView.bind('click zoomstart drag', function() {
      this.dropdown && this.dropdown.hide()
    }, this);
    this.add_related_model(this.mapView);

    this.layers = [];
  },

  render: function() {

    this.$el.html(this.options.template(this.options));

    this.dropdown = new cdb.ui.common.Dropdown({
      className:"cartodb-dropdown border",
      template: this.options.dropdown_template,
      target: this.$el.find("a"),
      speedIn: 300,
      speedOut: 200,
      position: "position",
      tick: "right",
      vertical_position: "down",
      horizontal_position: "right",
      vertical_offset: 7,
      horizontal_offset: 13
    });

    if (cdb.god) cdb.god.bind("closeDialogs", this.dropdown.hide, this.dropdown);

    this.$el.append(this.dropdown.render().el);

    this._getLayers();
    this._setCount();

    return this;
  },

  _getLayers: function() {
    var self = this;

    _.each(this.map.layers.models, function(layer) {

      if (layer.get("type") == 'layergroup') {
        var layerGroupView = self.mapView.getLayerByCid(layer.cid);
        for (var i = 0 ; i < layerGroupView.getLayerCount(); ++i) {
          var l = layerGroupView.getLayer(i);
          var m = new cdb.core.Model(l);
          m.set('order', i);
          m.set('type', 'layergroup');

          m.set('visible', !layerGroupView.getSubLayer(i).get('hidden'));

          if(self.options.layer_names) {
            m.set('layer_name', self.options.layer_names[i]);
          } else {
            m.set('layer_name', l.options.layer_name);
          }

          var layerView = self._createLayer('LayerViewFromLayerGroup', {
            model: m,
            layerView: layerGroupView,
            layerIndex: i
          });
          layerView.bind('switchChanged', self._setCount, self);
          self.layers.push(layerView);
        }
      } else if (layer.get("type") == "CartoDB") {

        var layerView = self._createLayer('LayerView', { model: layer });
        layerView.bind('switchChanged', self._setCount, self);
        self.layers.push(layerView);
      }

    });
  },

  _createLayer: function(_class, opts) {
    var layerView = new cdb.geo.ui[_class](opts);
    this.$("ul").append(layerView.render().el);
    this.addView(layerView);
    return layerView;
  },

  _setCount: function() {
    var count = 0;
    for (var i = 0, l = this.layers.length; i < l; ++i) {
      var lyr = this.layers[i];

      if (lyr.model.get('visible')) {
        count++;
      }
    }

    this.$('.count').text(count);
    this.trigger("switchChanged", this);
  },

  _openDropdown: function() {
    this.dropdown.open();
  }

});






/**
 *  View for each CartoDB layer
 *  - It needs a model to make it work.
 *
 *  var layerView = new cdb.geo.ui.LayerView({
 *    model: layer_model,
 *    layer_definition: layer_definition
 *  });
 *
 */

cdb.geo.ui.LayerView = cdb.core.View.extend({

  tagName: "li",

  defaults: {
    template: '\
      <a class="layer" href="#/change-layer"><%= table_name %></a>\
      <a href="#switch" class="right <%= visible ? "enabled" : "disabled" %> switch"><span class="handle"></span></a>\
    '
  },

  events: {
    "click": '_onSwitchClick'
  },

  initialize: function() {

    if (!this.model.has('visible')) this.model.set('visible', false);

    this.model.bind("change:visible", this._onSwitchSelected, this);

    this.add_related_model(this.model);

    this._onSwitchSelected();

    // Template
    this.template = this.options.template ? cdb.templates.getTemplate(this.options.template) : _.template(this.defaults.template);
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
    return this;
  },

  /*
  * Throw an event when the user clicks in the switch button
  */
  _onSwitchSelected: function() {
    var enabled = this.model.get('visible');

    // Change switch
    this.$el.find(".switch")
      .removeClass(enabled ? 'disabled' : 'enabled')
      .addClass(enabled    ? 'enabled'  : 'disabled');

    // Send trigger
    this.trigger('switchChanged');

  },

  _onSwitchClick: function(e){
    this.killEvent(e);

    // Set model
    this.model.set("visible", !this.model.get("visible"));
  }

});

/**
 *  View for each layer from a layer group
 *  - It needs a model and the layer_definition to make it work.
 *
 *  var layerView = new cdb.geo.ui.LayerViewFromLayerGroup({
 *    model: layer_model,
 *    layerView: layweView
 *  });
 *
 */

cdb.geo.ui.LayerViewFromLayerGroup = cdb.geo.ui.LayerView.extend({

  defaults: {
    template: '\
      <a class="layer" href="#/change-layer"><%= layer_name %></a>\
      <a href="#switch" class="right <%= visible ? "enabled" : "disabled" %> switch"><span class="handle"></span></a>\
    '
  },

  _onSwitchSelected: function() {

    cdb.geo.ui.LayerView.prototype._onSwitchSelected.call(this);
    var sublayer = this.options.layerView.getSubLayer(this.options.layerIndex)
    var visible = this.model.get('visible');

    if (visible) {
      sublayer.show();
    } else {
      sublayer.hide();
    }
  }
});
/**
 * Show or hide tiles loader
 *
 * Usage:
 *
 * var tiles_loader = new cdb.geo.ui.TilesLoader();
 * mapWrapper.$el.append(tiles_loader.render().$el);
 *
 */


cdb.geo.ui.TilesLoader = cdb.core.View.extend({

  className: "cartodb-tiles-loader",

  default_options: {
    animationSpeed: 500
  },

  initialize: function() {
    _.defaults(this.options, this.default_options);
    this.isVisible = false;
    this.template = this.options.template ? this.options.template : cdb.templates.getTemplate('geo/tiles_loader');
  },

  render: function() {
    this.$el.html($(this.template(this.options)));
    return this;
  },

  show: function(ev) {
    this.isVisible = true;
    if (!$.browser.msie || ($.browser.msie && $.browser.version.indexOf("9.") != 0)) {
      this.$el.fadeTo(this.options.animationSpeed, 1)
    } else {
      this.$el.show();
    }
  },

  hide: function(ev) {
    this.isVisible = false;
    if (!$.browser.msie || ($.browser.msie && $.browser.version.indexOf("9.") == 0)) {
      this.$el.stop(true).fadeTo(this.options.animationSpeed, 0)
    } else {
      this.$el.hide();
    }
  }

});

cdb.geo.ui.InfoBox = cdb.core.View.extend({

  className: 'cartodb-infobox',
  defaults: {
    pos_margin: 20,
    position: 'bottom|right',
    width: 200
  },

  initialize: function() {
    var self = this;
    _.defaults(this.options, this.defaults);
    if(this.options.layer) {
      this.enable();
    }
    this.template = cdb.core.Template.compile(this.options.template || this.defaultTemplate, 'mustache');
  },

  enable: function() {
    if(this.options.layer) {
      this.options.layer
        .on('featureOver', function(e, latlng, pos, data) {
          this.render(data).show();
        }, this)
        .on('featureOut', function() {
          this.hide();
        }, this);
    }
  },

  disable: function() {
    if(this.options.layer) {
      this.options.layer.off(null, null, this);
    }
  },

  // set position based on a string like "top|right", "top|left", "bottom|righ"...
  setPosition: function(pos) {
    var props = {};
    if(pos.indexOf('top') !== -1) {
      props.top = this.options.pos_margin;
    } else if(pos.indexOf('bottom') !== -1) {
      props.bottom = this.options.pos_margin;
    }

    if(pos.indexOf('left') !== -1) {
      props.left = this.options.pos_margin;
    } else if(pos.indexOf('right') !== -1) {
      props.right = this.options.pos_margin;
    }
    this.$el.css(props);

  },

  render: function(data) {
    this.$el.html( this.template(data) );
    if(this.options.width) {
      this.$el.css('width', this.options.width);
    }
    if(this.options.position) {
      this.setPosition(this.options.position);
    }
    return this;
  }

});


cdb.geo.ui.Tooltip = cdb.geo.ui.InfoBox.extend({

  DEFAULT_OFFSET_TOP: 30,
  defaultTemplate: '<p>{{text}}</p>',
  className: 'cartodb-tooltip',

  initialize: function() {
    this.options.template = this.options.template || defaultTemplate;
    this.options.position = 'none';
    this.options.width = null;
    cdb.geo.ui.InfoBox.prototype.initialize.call(this);
  },

  enable: function() {
    if(this.options.layer) {
      this.options.layer
        .on('featureOver', function(e, latlng, pos, data) {
          this.show(pos, data);
        }, this)
        .on('featureOut', function() {
          this.hide();
        }, this);
    }
  },

  show: function(pos, data) {
    this.render(data);
    this.elder('show');
    this.$el.css({
      'left': (pos.x - this.$el.width()/2),
      'top': (pos.y - (this.options.offset_top || this.DEFAULT_OFFSET_TOP))
    });
  },

  render: function(data) {
    this.$el.html( this.template(data) );
  }

});



function LayerDefinition(layerDefinition, options) {

  this.options = _.defaults(options, {
    ajax: window.$ ? window.$.ajax : reqwest.compat,
    pngParams: ['map_key', 'api_key', 'cache_policy', 'updated_at'],
    gridParams: ['map_key', 'api_key', 'cache_policy', 'updated_at'],
    cors: this.isCORSSupported(),
    btoa: this.isBtoaSupported() ? this._encodeBase64Native : this._encodeBase64
  });

  this.setLayerDefinition(layerDefinition, { silent: true });
  this.layerToken = null;
  this.urls = null;
  this.silent = false;
  this.interactionEnabled = []; //TODO: refactor, include inside layer
  this._layerTokenQueue = [];
  this._timeout = -1;
  this._queue = [];
  this._waiting = false;
  this.lastTimeUpdated = null;
  this._refreshTimer = -1;
}

/**
 * given a list of sublayers as:
 * {
 *   sql: '...',
 *   cartocss: '..',
 *   cartocss_version:'...', //optional
 *   interactivity: '...' //optional
 * }
 * returns the layer definition for version 1.0.0
 *
 * ``sublayers`` should be an array, an exception is thrown otherewise
 *
 */
LayerDefinition.layerDefFromSubLayers = function(sublayers) {

  if(!sublayers || sublayers.length === undefined) throw new Error("sublayers should be an array");

  var layer_definition = {
    version: '1.0.0',
    stat_tag: 'API',
    layers: []
  };

  for (var i in sublayers) {
    layer_definition.layers.push({
      type: 'cartodb',
      options: sublayers[i]
    });
  }

  return layer_definition;
};

LayerDefinition.prototype = {

  /*
   * TODO: extract these two functions to some core module
   */
  isCORSSupported: function() {
    return 'withCredentials' in new XMLHttpRequest() || typeof XDomainRequest !== "undefined";
  },

  isBtoaSupported: function() {
    return typeof window['btoa'] == 'function';
  },

  getLayerCount: function() {
    return this.layers.length;
  },

  setLayerDefinition: function(layerDefinition, options) {
    options = options || {};
    this.version = layerDefinition.version || '1.0.0';
    this.stat_tag = layerDefinition.stat_tag;
    this.layers = _.clone(layerDefinition.layers);
    if(!options.silent) {
      this._definitionUpdated();
    }
  },

  toJSON: function() {
    var obj = {};
    obj.version = this.version;
    if(this.stat_tag) {
      obj.stat_tag = this.stat_tag;
    }
    obj.layers = [];
    for(var i in this.layers) {
      var layer = this.layers[i];
      if(!layer.options.hidden) {
        obj.layers.push({
          type: 'cartodb',
          options: {
            sql: layer.options.sql,
            cartocss: layer.options.cartocss,
            cartocss_version: layer.options.cartocss_version || '2.1.0',
            interactivity: this._cleanInteractivity(layer.options.interactivity)
          }
        });
      }
    }
    return obj;
  },

  _encodeBase64Native: function (input) {
    return btoa(input)
  },

  // ie7 btoa,
  // from http://phpjs.org/functions/base64_encode/
  _encodeBase64: function (data) {
    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
      ac = 0,
      enc = "",
      tmp_arr = [];

    if (!data) {
      return data;
    }

    do { // pack three octets into four hexets
      o1 = data.charCodeAt(i++);
      o2 = data.charCodeAt(i++);
      o3 = data.charCodeAt(i++);

      bits = o1 << 16 | o2 << 8 | o3;

      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;

      // use hexets to index into b64, and append result to encoded string
      tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
  },

  _array2hex: function(byteArr) {
    var encoded = []
    for(var i = 0; i < byteArr.length; ++i) {
      encoded.push(String.fromCharCode(byteArr[i] + 128));
    }
    return this.options.btoa(encoded.join(''))
  },

  getLayerToken: function(callback) {
    var self = this;
    clearTimeout(this._timeout);
    this._layerTokenQueue.push(callback);
    this._timeout = setTimeout(function() {
      self._getLayerToken(function(data, err) {
        var fn;
        while(fn = self._layerTokenQueue.pop()) {
          fn(data, err);
        }
      });
    }, 4);
  },

  _requestFinished: function() {
    var self = this;
    this._waiting = false;
    this.lastTimeUpdated = new Date().getTime();

    // refresh layer when invalidation time has passed
    clearTimeout(this._refreshTimer);
    this._refreshTimer = setTimeout(function() {
      self.invalidate();
    }, this.options.refreshTime || (60*120*1000)); // default layergroup ttl

    // check request queue
    if(this._queue.length) {
      this._getLayerToken(this._queue.pop());
    }
  },

  _requestPOST: function(params, callback) {
    var self = this;
    var ajax = this.options.ajax;
    ajax({
      crossOrigin: true,
      type: 'POST',
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      url: this._tilerHost() + '/tiles/layergroup' + (params.length ? "?" + params.join('&'): ''),
      data: JSON.stringify(this.toJSON()),
      success: function(data) {
        // discard previous calls when there is another call waiting
        if(0 === self._queue.length) {
          callback(data);
        }
        self._requestFinished();
      },
      error: function(xhr) {
        var err = { errors: ['unknow error'] };
        try {
          err = JSON.parse(xhr.responseText);
        } catch(e) {}
        if(0 === self._queue.length) {
          callback(null, err);
        }
        self._requestFinished();
      }
    });
  },

  _requestGET: function(params, callback) {
    var self = this;
    var ajax = this.options.ajax;
    var json = '{ "config": "' +
      JSON.stringify(this.toJSON()).replace(/"/g, '\\"').replace(/\\n/g, '') +
    '"}';
    LZMA.compress(json, 3, function(encoded) {
      encoded = self._array2hex(encoded);
      params.push("lzma=" + encodeURIComponent(encoded));
      ajax({
        dataType: 'jsonp',
        url: self._tilerHost() + '/tiles/layergroup?' + params.join('&'),
        success: function(data) {
          if(0 === self._queue.length) {
            callback(data);
          }
          self._requestFinished();
        },
        error: function(data) {
          var err = { errors: ['unknow error'] };
          try {
            err = JSON.parse(xhr.responseText);
          } catch(e) {}
          if(0 === self._queue.length) {
            callback(null, err);
          }
          self._requestFinished();
        }
      });
    });
  },

  _getLayerToken: function(callback) {
    var self = this;
    var params = [];
    callback = callback || function() {};

    // if the previous request didn't finish, queue it
    if(this._waiting) {
      this._queue.push(callback);
      return this;
    }

    // setup params
    var extra_params = this.options.extra_params || {};
    var api_key = this.options.map_key || this.options.api_key || extra_params.map_key || extra_params.api_key;
    if(api_key) {
      params.push("map_key=" + api_key);
    }
    // mark as the request is being done
    this._waiting = true;
    var req = null;
    if(this.options.cors) {
      req = this._requestPOST;
    } else {
      req = this._requestGET;
    }
    req.call(this, params, callback);
    return this;
  },

  removeLayer: function(layer) {
    if(layer < this.getLayerCount() && layer >= 0) {
      this.layers.splice(layer, 1);
      this.interactionEnabled.splice(layer, 1);
      this._reorderSubLayers();
      this.invalidate();
    }
    return this;
  },

  _reorderSubLayers: function() {
    for(var i = 0; i < this.layers.length; ++i) {
      var layer = this.layers[i];
      if(layer.sub) {
        layer.sub._setPosition(i);
      }
    }
  },

  getLayer: function(index) {
    return _.clone(this.layers[index]);
  },

  invalidate: function() {
    this.layerToken = null;
    this.urls = null;
    this.onLayerDefinitionUpdated();
  },

  setLayer: function(layer, def) {
    if(layer < this.getLayerCount() && layer >= 0) {
      this.layers[layer] = _.clone(def);
    }
    this.invalidate();
    return this;
  },

  addLayer: function(def, layer) {
    layer = layer === undefined ? this.getLayerCount(): layer;
    if(layer <= this.getLayerCount() && layer >= 0) {
      if(!def.sql || !def.cartocss) {
        throw new Error("layer definition should contain at least a sql and a cartocss");
        return this;
      }
      this.layers.splice(layer, 0, {
        type: 'cartodb',
        options: def
      });
      this._definitionUpdated();
    }
    return this;
  },

  getTiles: function(callback) {
    var self = this;
    if(self.layerToken) {
      callback && callback(self._layerGroupTiles(self.layerToken, self.options.extra_params));
      return this;
    }
    this.getLayerToken(function(data, err) {
      if(data) {
        self.layerToken = data.layergroupid;
        self.urls = self._layerGroupTiles(data.layergroupid, self.options.extra_params);
        callback && callback(self.urls);
      } else {
        callback && callback(null, err);
      }
    });
    return this;
  },

  isHttps: function() {
    return this.options.tiler_protocol === 'https';
  },

  _layerGroupTiles: function(layerGroupId, params) {
    var subdomains = this.options.subdomains || ['0', '1', '2', '3'];
    if(this.isHttps()) {
      subdomains = [null]; // no subdomain
    }

    var tileTemplate = '/{z}/{x}/{y}';

    var grids = []
    var tiles = [];

    var pngParams = this._encodeParams(params, this.options.pngParams);
    for(var i = 0; i < subdomains.length; ++i) {
      var s = subdomains[i]
      var cartodb_url = this._host(s) + '/tiles/layergroup/' + layerGroupId
      tiles.push(cartodb_url + tileTemplate + ".png?" + pngParams );

      var gridParams = this._encodeParams(params, this.options.gridParams);
      for(var layer in this.layers) {
        grids[layer] = grids[layer] || [];
        grids[layer].push(cartodb_url + "/" + layer +  tileTemplate + ".grid.json?" + gridParams);
      }
    }

    return {
      tiles: tiles,
      grids: grids
    }

  },

  _cleanInteractivity: function(attributes) {
    if(!attributes) return;
    if(typeof(attributes) == 'string') {
      attributes = attributes.split(',');
    }

    for(var i = 0; i < attributes.length; ++i) {
      attributes[i] = attributes[i].replace(/ /g, '');
    }

    return attributes;
  },

  /**
   * set interactivity attributes for a layer.
   * if attributes are passed as first param layer 0 is
   * set
   */
  setInteractivity: function(layer, attributes) {
    if(attributes === undefined) {
      attributes = layer;
      layer = 0;
    }

    if(layer >= this.getLayerCount() && layer < 0) {
      throw new Error("layer does not exist");
    }

    if(typeof(attributes) == 'string') {
      attributes = attributes.split(',');
    }

    for(var i = 0; i < attributes.length; ++i) {
      attributes[i] = attributes[i].replace(/ /g, '');
    }

    this.layers[layer].options.interactivity = attributes;
    this._definitionUpdated();
    return this;
  },

  onLayerDefinitionUpdated: function() {},

  setSilent: function(b) {
    this.silent = b;
  },

  _definitionUpdated: function() {
    if(this.silent) return;
    this.invalidate();
  },

  _tileJSONfromTiles: function(layer, urls) {
    return {
      tilejson: '2.0.0',
      scheme: 'xyz',
      grids: urls.grids[layer],
      tiles: urls.tiles,
      formatter: function(options, data) { return data; }
     };
  },

  /**
   * get tile json for layer
   */
  getTileJSON: function(layer, callback) {
    layer = layer == undefined ? 0: layer;
    this.getTiles(function(urls) {
      if(!urls) {
        callback(null);
        return;
      }
      if(callback) {
        callback(this._tileJSONfromTiles(layer, urls));
      }
    });
  },

  /**
   * Change query of the tiles
   * @params {str} New sql for the tiles
   */
  setQuery: function(layer, sql) {
    if(sql === undefined) {
      sql = layer;
      layer = 0;
    }
    this.layers[layer].options.sql = sql
    this._definitionUpdated();
  },

  getQuery: function(layer) {
    layer = layer || 0;
    return this.layers[layer].options.sql
  },

  /**
   * Change style of the tiles
   * @params {style} New carto for the tiles
   */
  setCartoCSS: function(layer, style, version) {
    if(version === undefined) {
      version = style;
      style = layer;
      layer = 0;
    }

    version = version || cartodb.CARTOCSS_DEFAULT_VERSION;

    this.layers[layer].options.cartocss = style;
    this.layers[layer].options.cartocss_version = version;
    this._definitionUpdated();

  },

  _encodeParams: function(params, included) {
    if(!params) return '';
    var url_params = [];
    included = included || _.keys(params);
    for(var i in included) {
      var k = included[i]
      var p = params[k];
      if(p) {
        var q = encodeURIComponent(p);
        q = q.replace(/%7Bx%7D/g,"{x}").replace(/%7By%7D/g,"{y}").replace(/%7Bz%7D/g,"{z}");
        url_params.push(k + "=" + q);
      }
    }
    return url_params.join('&')
  },

  _tilerHost: function() {
    var opts = this.options;
    return opts.tiler_protocol +
         "://" + ((opts.user_name) ? opts.user_name+".":"")  +
         opts.tiler_domain +
         ((opts.tiler_port != "") ? (":" + opts.tiler_port) : "");
  },

  _host: function(subhost) {
    var opts = this.options;
    if (opts.no_cdn) {
      return this._tilerHost();
    } else {
      var h = opts.tiler_protocol + "://";
      if (subhost) {
        h += subhost + ".";
      }
      var cdn_host = opts.cdn_url || cdb.CDB_HOST;
      if(!cdn_host.http && !cdn_host.https) {
        throw new Error("cdn_host should contain http and/or https entries");
      }
      h += cdn_host[opts.tiler_protocol] + "/" + opts.user_name;
      return h;
    }
  },

  getInfowindowData: function(layer) {
    var infowindow = this.layers[layer].infowindow || this.options.layer_definition.layers[layer].infowindow;
    if (infowindow && infowindow.fields && infowindow.fields.length > 0) {
      return infowindow;
    }
    return null;
  },

  containInfowindow: function() {
    var layers =  this.options.layer_definition.layers;
    for(var i = 0; i < layers.length; ++i) {
      var infowindow = layers[i].infowindow;
      if (infowindow && infowindow.fields && infowindow.fields.length > 0) {
        return true;
      }
    }
    return false;
  },

  /**
   * adds a new sublayer to the layer with the sql and cartocss params
   */
  createSubLayer: function(attrs, options) {
    this.addLayer(attrs);
    return this.getSubLayer(this.getLayerCount() - 1);
  },

  getSubLayer: function(index) {
    var layer = this.layers[index];
    layer.sub = layer.sub || new SubLayer(this, index);
    return layer.sub;
  },

  getSubLayerCount: function() {
    return this.getLayerCount();
  }


};

function SubLayer(_parent, position) {
  this._parent = _parent;
  this._position = position;
  this._added = true;
  this._bindInteraction();
  this.infowindow = new Backbone.Model(this._parent.getLayer(this._position).infowindow);
  this.infowindow.bind('change', function() {
    var def = this._parent.getLayer(this._position);
    def.infowindow = this.infowindow.toJSON();
    this._parent.setLayer(this._position, def);
  }, this);
}

SubLayer.prototype = {

  remove: function() {
    this._check();
    this._parent.removeLayer(this._position);
    this._unbindInteraction();
    this._added = false;
  },

  show: function() {
    this.set({
      hidden: false
    });
  },

  hide: function() {
    this.set({
      hidden: true
    });
  },

  setSQL: function(sql) {
    return this.set({
      sql: sql
    });
  },

  setCartoCSS: function(cartocss) {
    return this.set({
      cartocss: cartocss
    });
  },

  getSQL: function() {
    return this.get('sql');
  },

  getCartoCSS: function() {
    return this.get('cartocss');
  },

  setInteraction: function(active) {
    this._parent.setInteraction(this._position, active);
  },

  get: function(attr) {
    this._check();
    var attrs = this._parent.getLayer(this._position);
    return attrs.options[attr];
  },

  set: function(new_attrs) {
    this._check();
    var def = this._parent.getLayer(this._position);
    var attrs = def.options;
    for(var i in new_attrs) {
      attrs[i] = new_attrs[i];
    }
    this._parent.setLayer(this._position, def);
    return this;
  },

  unset: function(attr) {
    var def = this._parent.getLayer(this._position);
    delete def.options[attr];
    this._parent.setLayer(this._position, def);
  },

  _check: function() {
    if(!this._added) throw "sublayer was removed";
  },

  _unbindInteraction: function() {
    if(!this._parent.off) return;
    this._parent.off(null, null, this);
  },

  _bindInteraction: function() {
    if(!this._parent.on) return;
    var self = this;
    // binds a signal to a layer event and trigger on this sublayer
    // in case the position matches
    var _bindSignal = function(signal) {
      self._parent.on(signal, function() {
        var args = Array.prototype.slice.call(arguments);
        if (parseInt(args[args.length - 1], 10) ==  self._position) {
          self.trigger.apply(self, [signal].concat(args));
        }
      }, self);
    };
    _bindSignal('featureOver');
    _bindSignal('featureOut');
    _bindSignal('featureClick');
  },

  _setPosition: function(p) {
    this._position = p;
  }

};

// give events capabilitues
_.extend(SubLayer.prototype, Backbone.Events);

/*
 *  common functions for cartodb connector
 */

function CartoDBLayerCommon() {
}

CartoDBLayerCommon.prototype = {

  // the way to show/hidelayer is to set opacity
  // removing the interactivty at the same time
  show: function() {
    this.setOpacity(this.options.previous_opacity === undefined ? 0.99: this.options.previous_opacity);
    delete this.options.previous_opacity;
    this.setInteraction(true);
  },

  hide: function() {
    if(this.options.previous_opacity == undefined) {
      this.options.previous_opacity = this.options.opacity;
    }
    this.setOpacity(0);
    this.setInteraction(false);
  },

  /**
   * Check if CartoDB logo already exists
   */
  _isWadusAdded: function(container, className) {
    // Check if any cartodb-logo exists within container
    var a = [];
    var re = new RegExp('\\b' + className + '\\b');
    var els = container.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
      if(re.test(els[i].className))a.push(els[i]);

    return a.length > 0;
  },

  /**
   *  Check if browser supports retina images
   */
  _isRetinaBrowser: function() {
    return  ('devicePixelRatio' in window && window.devicePixelRatio > 1) ||
            ('matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') &&
            window.matchMedia('(min-resolution:144dpi)').matches);
  },

  /**
   * Add Cartodb logo
   * It needs a position, timeout if it is needed and the container where add it
   */
  _addWadus: function(position, timeout, container) {
    var self = this;
    setTimeout(function() {
      if (self.options.cartodb_logo !== false && !self._isWadusAdded(container, 'cartodb-logo')) {
        var cartodb_link = document.createElement("div");
        var is_retina = self._isRetinaBrowser();
        cartodb_link.setAttribute('class','cartodb-logo');
        
          cartodb_link.setAttribute('style',"position:absolute; bottom:0; left:0; display:block; border:none; z-index:1000000;");
          var protocol = location.protocol.indexOf('https') === -1 ? 'http': 'https';
          cartodb_link.innerHTML = "<a href='http://www.cartodb.com' target='_blank'><img width='71' height='29' src='" + protocol + "://cartodb.s3.amazonaws.com/static/new_logo" + (is_retina ? '@2x' : '') + ".png' style='position:absolute; bottom:" + 
            ( position.bottom || 0 ) + "px; left:" + ( position.left || 0 ) + "px; display:block; width:71px!important; height:29px!important; border:none; outline:none;' alt='CartoDB' title='CartoDB' />";
          container.appendChild(cartodb_link);
      }
    },( timeout || 0 ));
  },

  /**
   * Returns if the layer is visible or not
   */
  isVisible: function() {
    return this.visible;
  },

  /**
   * Active or desactive interaction
   * @params enable {Number} layer number
   * @params layer {Boolean} Choose if wants interaction or not
   */
  setInteraction: function(layer, b) {
    // shift arguments to maintain caompatibility
    if(b == undefined) {
      b = layer;
      layer = 0;
    }
    var layerInteraction;
    this.interactionEnabled[layer] = b;
    if(!b) {
      layerInteraction = this.interaction[layer];
      if(layerInteraction) {
        layerInteraction.remove();
        this.interaction[layer] = null;
      }
    } else {
      // if urls is null it means that setInteraction will be called
      // when the layergroup token was recieved, then the real interaction
      // layer will be created
      if(this.urls) {
        // generate the tilejson from the urls. wax needs it
        var tilejson = this._tileJSONfromTiles(layer, this.urls);

        // remove previous
        layerInteraction = this.interaction[layer];
        if(layerInteraction) {
          layerInteraction.remove();
        }
        var self = this;

        // add the new one
        this.interaction[layer] = this.interactionClass()
          .map(this.options.map)
          .tilejson(tilejson)
          .on('on', function(o) {
            o.layer = layer || 0;
            self._manageOnEvents(self.options.map, o);
          })
          .on('off', function(o) {
            o = o || {}
            o.layer = layer || 0;
            self._manageOffEvents(self.options.map, o);
          });
      }
    }
    return this;
  },

  setOptions: function (opts) {

    if (typeof opts != "object" || opts.length) {
      throw new Error(opts + ' options must be an object');
    }

    _.extend(this.options, opts);

    var opts = this.options;

    this.options.query = this.options.query || "select * from " + this.options.table_name;
    if(this.options.query_wrapper) {
      this.options.query = _.template(this.options.query_wrapper)({ sql: this.options.query });
    }

    this.setSilent(true);
    opts.interaction && this.setInteraction(opts.interaction);
    opts.opacity && this.setOpacity(opts.opacity);
    opts.query && this.setQuery(opts.query.replace(/\{\{table_name\}\}/g, this.options.table_name));
    opts.tile_style && this.setCartoCSS(opts.tile_style.replace(new RegExp( opts.table_name, "g"), "layer0"));
    opts.cartocss && this.setCartoCSS(opts.cartocss);
    opts.interactivity && this.setInteractivity(opts.interactivity);
    opts.visible ? this.show() : this.hide();
    this.setSilent(false);
    this._definitionUpdated();

  },

  _getLayerDefinition: function() {
    // set params
    var params = {};
    var opts = this.options;
    var sql, cartocss, cartocss_version;
    sql = opts.query || "select * from " + opts.table_name;

    if(opts.query_wrapper) {
      sql = _.template(opts.query_wrapper)({ sql: sql });
    }

    cartocss = opts.tile_style;
    cartocss_version = opts.cartocss_version || '2.1.0';

    // extra_params?
    for (var _param in opts.extra_params) {
      var v = opts.extra_params[_param]
      params[_param] = v.replace ? v.replace(/\{\{table_name\}\}/g, opts.table_name): v;
    }
    sql = sql.replace(/\{\{table_name\}\}/g, opts.table_name);
    cartocss = cartocss.replace(/\{\{table_name\}\}/g, opts.table_name);
    cartocss = cartocss.replace(new RegExp( opts.table_name, "g"), "layer0");


    return {
      sql: sql,
      cartocss: cartocss,
      cartocss_version: cartocss_version,
      params: params,
      interactivity: opts.interactivity
    }

  },

  error: function(e) {
    //console.log(e.error);
  },

  tilesOk: function() {
  },

  _clearInteraction: function() {
    for(var i in this.interactionEnabled) {
      if(this.interactionEnabled[i]) {
        this.setInteraction(i, false);
      }
    }
  },

  _reloadInteraction: function() {
    for(var i in this.interactionEnabled) {
      if(this.interactionEnabled[i]) {
        this.setInteraction(i, false);
        this.setInteraction(i, true);
      }
    }
  },

  /**
   *  Check the tiles
   */
  _checkTiles: function() {
    var xyz = {z: 4, x: 6, y: 6}
      , self = this
      , img = new Image()
      , urls = this._tileJSON()

    getTiles(function(urls) {

      var grid_url = urls.tiles[0]
          .replace(/\{z\}/g,xyz.z)
          .replace(/\{x\}/g,xyz.x)
          .replace(/\{y\}/g,xyz.y);

      this.options.ajax({
        method: "get",
        url: grid_url,
        crossDomain: true,
        success: function() {
          self.tilesOk();
          clearTimeout(timeout)
        },
        error: function(xhr, msg, data) {
          clearTimeout(timeout);
          self.error(xhr.responseText && JSON.parse(xhr.responseText));
        }
      });
    });

    var timeout = setTimeout(function(){
      clearTimeout(timeout);
      self.error("tile timeout");
    }, 30000);

  }


};

(function() {
/**
 * this module implements all the features related to overlay geometries
 * in leaflet: markers, polygons, lines and so on
 */

// layer to geojson from https://raw.github.com/ebrehault/Leaflet/681d26aa0d301cb2ab5f0963eb1ea8fff14aa02c/src/layer/GeoJSON.js
// wait until leaflet includes it in the core
// see https://github.com/CloudMade/Leaflet/issues/712
L.Util.extend(L.GeoJSON, {
  toGeoJSON: function(target) {
    if (target instanceof L.Marker) {
        //Point
        return {
            coordinates: this.latLngToCoords(target.getLatLng()),
            type: 'Point'
        }
    } else if (target instanceof L.MultiPolygon || target instanceof L.MultiPolyline) {
        //MultiPolygon and MultiLineString
        var multi = [];
        var layers = target._layers;
        for (var stamp in layers) {
            multi.push(this.toGeoJSON(layers[stamp]).coordinates);
        }
        return {
            coordinates: multi,
            type: (target instanceof L.MultiPolygon) ? 'MultiPolygon': 'MultiLineString'
        };
    } else if (target instanceof L.Polygon) {
        //Polygon
        var coords = this.latLngsToCoords(target.getLatLngs());
        return {
            coordinates: [coords],
            type: 'Polygon'
        };
    } else if (target instanceof L.Polyline) {
        //Linestring
        var coords = this.latLngsToCoords(target.getLatLngs());
        return {
            coordinates: coords,
            type: 'LineString'
        };
    } else if (target instanceof L.FeatureGroup) {
        //Multi point and GeometryCollection
        var multi = [];
        var layers = target._layers;
        var points = true;
        for (var stamp in layers) {
            var json = this.toGeoJSON(layers[stamp]);
            multi.push(json);
            if (json.type !== 'Point') {
                points = false;
            }
        }
        if (points) {
            var coords = multi.map(function(geo){
                return geo.coordinates;
            });
            return {
                coordinates: coords,
                type: 'MultiPoint'
            };
        } else {
            return {
                geometries: multi,
                type: 'GeometryCollection'
            };
        }
    }
  },

  latLngToCoords: function(latlng) {
      return [latlng.lng, latlng.lat];
  },

  latLngsToCoords: function(arrLatlng) {
      var coords = [];
      arrLatlng.forEach(function(latlng) {
          coords.push(this.latLngToCoords(latlng));
      },
      this);
      return coords;
  }
});




/**
 * view for markers
 */
function PointView(geometryModel) {
  var self = this;
  // events to link
  var events = [
    'click',
    'dblclick',
    'mousedown',
    'mouseover',
    'mouseout',
    'dragstart',
    'drag',
    'dragend'
  ];

  this._eventHandlers = {};
  this.model = geometryModel;
  this.points = [];

  this.geom = L.GeoJSON.geometryToLayer(geometryModel.get('geojson'), function(geojson, latLng) {
      //TODO: create marker depending on the visualizacion options
      var p = L.marker(latLng,{
        icon: L.icon({
          iconUrl: '/assets/icons/default_marker.png',
          iconAnchor: [11, 11]
        })
      });

      var i;
      for(i = 0; i < events.length; ++i) {
        var e = events[i];
        p.on(e, self._eventHandler(e));
      }
      return p;
  });

  this.bind('dragend', function(e, pos) { 
    geometryModel.set({
      geojson: {
        type: 'Point',
        //geojson is lng,lat
        coordinates: [pos[1], pos[0]]
      }
    });
  });
}

PointView.prototype = new GeometryView();

PointView.prototype.edit = function() {
  this.geom.dragging.enable();
};

/**
 * returns a function to handle events fot evtType
 */
PointView.prototype._eventHandler = function(evtType) {
  var self = this;
  var h = this._eventHandlers[evtType];
  if(!h) {
    h = function(e) {
      var latlng = e.target.getLatLng();
      var s = [latlng.lat, latlng.lng];
      self.trigger(evtType, e.originalEvent, s);
    };
    this._eventHandlers[evtType] = h;
  }
  return h;
};

/**
 * view for other geometries (polygons/lines)
 */
function PathView(geometryModel) {
  var self = this;
  // events to link
  var events = [
    'click',
    'dblclick',
    'mousedown',
    'mouseover',
    'mouseout',
  ];

  this._eventHandlers = {};
  this.model = geometryModel;
  this.points = [];

  
  this.geom = L.GeoJSON.geometryToLayer(geometryModel.get('geojson'));

  _.each(this.geom._layers, function(g) {
    g.setStyle(geometryModel.get('style'));
    g.on('edit', function() {
      geometryModel.set('geojson', L.GeoJSON.toGeoJSON(self.geom));
    }, self);
  });
  /*for(var i = 0; i < events.length; ++i) {
    var e = events[i];
    this.geom.on(e, self._eventHandler(e));
  }*/

}

PathView.prototype = new GeometryView();

PathView.prototype.edit = function(enable) {
  var fn = enable ? 'enable': 'disable';
  _.each(this.geom._layers, function(g) {
    g.editing[fn]();
    g.off('edit', null, self);
  });
};

cdb.geo.leaflet = cdb.geo.leaflet || {};

cdb.geo.leaflet.PointView = PointView;
cdb.geo.leaflet.PathView = PathView;


})();

(function() {
  /**
  * base layer for all leaflet layers
  */
  var LeafLetLayerView = function(layerModel, leafletLayer, leafletMap) {
    this.leafletLayer = leafletLayer;
    this.leafletMap = leafletMap;
    this.model = layerModel;

    this.model.bind('change', this._modelUpdated, this);
    this.type = layerModel.get('type') || layerModel.get('kind');
    this.type = this.type.toLowerCase();
  };

  _.extend(LeafLetLayerView.prototype, Backbone.Events);
  _.extend(LeafLetLayerView.prototype, {

    /**
    * remove layer from the map and unbind events
    */
    remove: function() {
      this.leafletMap.removeLayer(this.leafletLayer);
      this.model.unbind(null, null, this);
      this.unbind();
    },
    /*

    show: function() {
      this.leafletLayer.setOpacity(1.0);
    },

    hide: function() {
      this.leafletLayer.setOpacity(0.0);
    },
    */

    /**
     * reload the tiles
     */
    reload: function() {
      this.leafletLayer.redraw();
    }

  });


  cdb.geo.LeafLetLayerView = LeafLetLayerView;


})();

(function() {

if(typeof(L) == "undefined") 
  return;

/**
 * this is a dummy layer class that modifies the leaflet DOM element background 
 * instead of creating a layer with div
 */
var LeafLetPlainLayerView = L.Class.extend({
  includes: L.Mixin.Events,

  initialize: function(layerModel, leafletMap) {
    cdb.geo.LeafLetLayerView.call(this, layerModel, this, leafletMap);
  },

  onAdd: function() {
    this.redraw();
  },

  onRemove: function() { 
    var div = this.leafletMap.getContainer()
    div.style.background = 'none';
  },

  _modelUpdated: function() {
    this.redraw();
  },

  redraw: function() {
    var div = this.leafletMap.getContainer()
    div.style.backgroundColor = this.model.get('color') || '#FFF';
    if(this.model.get('image')) {
      var st = 'url(' + this.model.get('image') + ') repeat center center';
      if(this.model.get('color')) {
        div.style.background = st + ' ' + this.model.get('color');
      }
    }
  }
});

_.extend(LeafLetPlainLayerView.prototype, cdb.geo.LeafLetLayerView.prototype);

cdb.geo.LeafLetPlainLayerView = LeafLetPlainLayerView;

})();

(function() {

if(typeof(L) == "undefined") 
  return;

var LeafLetTiledLayerView = L.TileLayer.extend({
  initialize: function(layerModel, leafletMap) {
    L.TileLayer.prototype.initialize.call(this, layerModel.get('urlTemplate'), {
      tms:          layerModel.get('tms'),
      attribution:  layerModel.get('attribution'),
      minZoom:      layerModel.get('minZomm'),
      maxZoom:      layerModel.get('maxZoom'),
      subdomains:   layerModel.get('subdomains') || 'abc',
      errorTileUrl: layerModel.get('errorTileUrl'),
      opacity:      layerModel.get('opacity')
    });
    cdb.geo.LeafLetLayerView.call(this, layerModel, this, leafletMap);
  }

});

_.extend(LeafLetTiledLayerView.prototype, cdb.geo.LeafLetLayerView.prototype, {

  _modelUpdated: function() {
    _.defaults(this.leafletLayer.options, _.clone(this.model.attributes));
    this.leafletLayer.setUrl(this.model.get('urlTemplate'));
  }

});

cdb.geo.LeafLetTiledLayerView = LeafLetTiledLayerView;

})();

(function() {

if(typeof(L) == "undefined")
  return;

L.CartoDBGroupLayer = L.TileLayer.extend({

  interactionClass: wax.leaf.interaction,

  includes: [
    cdb.geo.LeafLetLayerView.prototype,
    LayerDefinition.prototype,
    CartoDBLayerCommon.prototype
  ],

  options: {
    opacity:        0.99,
    attribution:    "CartoDB",
    debug:          false,
    visible:        true,
    added:          false,
    tiler_domain:   "cartodb.com",
    tiler_port:     "80",
    tiler_protocol: "http",
    sql_api_domain:     "cartodb.com",
    sql_api_port:       "80",
    sql_api_protocol:   "http",
    extra_params:   {
      cache_policy: 'persist'
    },
    cdn_url:        null,
    subdomains:     null
  },


  initialize: function (options) {
    options = options || {};
    // Set options
    L.Util.setOptions(this, options);

    // Some checks
    if (!options.layer_definition && !options.sublayers) {
        throw new Error('cartodb-leaflet needs at least the layer_definition or sublayer list');
    }

    if(!options.layer_definition) {
      this.options.layer_definition = LayerDefinition.layerDefFromSubLayers(options.sublayers);
    }

    LayerDefinition.call(this, this.options.layer_definition, this.options);

    this.fire = this.trigger;

    CartoDBLayerCommon.call(this);
    L.TileLayer.prototype.initialize.call(this);
    this.interaction = [];
  },


  // overwrite getTileUrl in order to
  // support different tiles subdomains in tilejson way
  getTileUrl: function (tilePoint) {
    var EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    this._adjustTilePoint(tilePoint);

    var tiles = [EMPTY_GIF];
    if(this.tilejson) {
      tiles = this.tilejson.tiles;
    }

    var index = (tilePoint.x + tilePoint.y) % tiles.length;

    return L.Util.template(tiles[index], L.Util.extend({
      z: this._getZoomForUrl(),
      x: tilePoint.x,
      y: tilePoint.y
    }, this.options));
  },

  /**
   * Change opacity of the layer
   * @params {Integer} New opacity
   */
  setOpacity: function(opacity) {

    if (isNaN(opacity) || opacity>1 || opacity<0) {
      throw new Error(opacity + ' is not a valid value');
    }

    // Leaflet only accepts 0-0.99... Weird!
    this.options.opacity = Math.min(opacity, 0.99);

    if (this.options.visible) {
      L.TileLayer.prototype.setOpacity.call(this, this.options.opacity);
      this.fire('updated');
    }
  },


  /**
   * When Leaflet adds the layer... go!
   * @params {map}
   */
  onAdd: function(map) {
    var self = this;
    this.options.map = map;
    this._addWadus({left:8, bottom:8}, 0, map._container);
    this.__update(function() {
      // remove this hack when leaflet 0.6 was released
      var add = function() {
        map.off('zoomend', add);
        // if while the layer was processed in the server is removed
        // it should not be added to the map
        var id = L.stamp(self);
        if (!map._layers[id]) { 
          return; 
        }

        L.TileLayer.prototype.onAdd.call(self, map);
        self.fire('added');
        self.options.added = true;
      }
      if(!map._animatingZoom) {
        add();
      } else {
        // wait until zoom animation finishes
        map.on('zoomend', add);
      }
    });
  },


  /**
   * When removes the layer, destroy interactivity if exist
   */
  onRemove: function(map) {
    if(this.options.added) {
      this.options.added = false;
      L.TileLayer.prototype.onRemove.call(this, map);
    }
  },

  onLayerDefinitionUpdated: function() {
    this.__update();
  },

  /**
   * Update CartoDB layer
   * generates a new url for tiles and refresh leaflet layer
   * do not collide with leaflet _update
   */
  __update: function(done) {
    var self = this;
    this.fire('updated');
    this.fire('loading');
    var map = this.options.map;

    this.getTiles(function(urls, err) {
      var update = function() { 
        map.off('zoomend', update);
        if(urls) {
          self.tilejson = urls;
          self.setUrl(self.tilejson.tiles[0]);
          // manage interaction
          self._reloadInteraction();
          self.ok && self.ok();
          done && done();
        } else {
          self.error && self.error(err);
          done && done();
        }
      };
      if(!map._animatingZoom) {
        update();
      } else {
        // wait until zoom animation finishes
        map.on('zoomend', update);
      }
    });
  },


  _checkLayer: function() {
    if (!this.options.added) {
      throw new Error('the layer is not still added to the map');
    }
  },

  /**
   * Set a new layer attribution
   * @params {String} New attribution string
   */
  setAttribution: function(attribution) {
    this._checkLayer();

    // Remove old one
    this.map.attributionControl.removeAttribution(this.options.attribution);

    // Set new attribution in the options
    this.options.attribution = attribution;

    // Change text
    this.map.attributionControl.addAttribution(this.options.attribution);

    // Change in the layer
    this.options.attribution = this.options.attribution;
    this.tilejson.attribution = this.options.attribution;

    this.fire('updated');
  },

  /**
   * Bind events for wax interaction
   * @param {Object} Layer map object
   * @param {Event} Wax event
   */
  _manageOnEvents: function(map, o) {
    var layer_point = this._findPos(map,o),
        latlng = map.layerPointToLatLng(layer_point);
    var event_type = o.e.type.toLowerCase();


    var screenPos = map.layerPointToContainerPoint(layer_point);

    switch (event_type) {
      case 'mousemove':
        if (this.options.featureOver) {
          return this.options.featureOver(o.e,latlng, screenPos, o.data, o.layer);
        }
        break;

      case 'click':
      case 'touchend':
      case 'mspointerup':
        if (this.options.featureClick) {
          this.options.featureClick(o.e,latlng, screenPos, o.data, o.layer);
        }
        break;
      default:
        break;
    }
  },


  /**
   * Bind off event for wax interaction
   */
  _manageOffEvents: function(map, o) {
    if (this.options.featureOut) {
      return this.options.featureOut && this.options.featureOut(o.e, o.layer);
    }
  },

  /**
   * Get the Leaflet Point of the event
   * @params {Object} Map object
   * @params {Object} Wax event object
   */
  _findPos: function (map,o) {
    var curleft = 0, curtop = 0;
    var obj = map.getContainer();


    if (obj.offsetParent) {
      // Modern browsers
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
      return map.containerPointToLayerPoint(new L.Point((o.e.clientX || o.e.changedTouches[0].clientX) - curleft,(o.e.clientY || o.e.changedTouches[0].clientY) - curtop))
    } else {
      // IE
      return map.mouseEventToLayerPoint(o.e)
    }
  }

});

cdb.geo.LeafLetCartoDBLayerGroupView = L.CartoDBGroupLayer.extend({

  includes: [
    cdb.geo.LeafLetLayerView.prototype,
    Backbone.Events
  ],

  initialize: function(layerModel, leafletMap) {
    var self = this;

    //_.bindAll(this, 'featureOut', 'featureOver', 'featureClick');

    // CartoDB new attribution,
    // also we have the logo
    layerModel.attributes.attribution = "CartoDB <a href='http://cartodb.com/attributions' target='_blank'>attribution</a>";

    var opts = _.clone(layerModel.attributes);

    opts.map =  leafletMap;

    var // preserve the user's callbacks
    _featureOver  = opts.featureOver,
    _featureOut   = opts.featureOut,
    _featureClick = opts.featureClick;

    opts.featureOver  = function() {
      _featureOver  && _featureOver.apply(self, arguments);
      self.featureOver  && self.featureOver.apply(self, arguments);
    };

    opts.featureOut  = function() {
      _featureOut  && _featureOut.apply(self, arguments);
      self.featureOut  && self.featureOut.apply(self, arguments);
    };

    opts.featureClick  = function() {
      _featureClick  && _featureClick.apply(self, arguments);
      self.featureClick  && self.featureClick.apply(self, arguments);
    };

    L.CartoDBGroupLayer.prototype.initialize.call(this, opts);
    cdb.geo.LeafLetLayerView.call(this, layerModel, this, leafletMap);

  },

  featureOver: function(e, latlon, pixelPos, data, layer) {
    // dont pass leaflet lat/lon
    this.trigger('featureOver', e, [latlon.lat, latlon.lng], pixelPos, data, layer);
  },

  featureOut: function(e, layer) {
    this.trigger('featureOut', e, layer);
  },

  featureClick: function(e, latlon, pixelPos, data, layer) {
    // dont pass leaflet lat/lon
    this.trigger('featureClick', e, [latlon.lat, latlon.lng], pixelPos, data, layer);
  },

  error: function(e) {
    this.trigger('error', e ? e.errors : 'unknown error');
    this.model.trigger('error', e?e.errors:'unknown error');
  },

  ok: function(e) {
    this.model.trigger('tileOk');
  }

});

})();

(function() {

if(typeof(L) == "undefined")
  return;

L.CartoDBLayer = L.CartoDBGroupLayer.extend({

  options: {
    query:          "SELECT * FROM {{table_name}}",
    opacity:        0.99,
    attribution:    "CartoDB",
    debug:          false,
    visible:        true,
    added:          false,
    extra_params:   {},
    layer_definition_version: '1.0.0'
  },


  initialize: function (options) {
    L.Util.setOptions(this, options);

    if (!options.table_name || !options.user_name || !options.tile_style) {
        throw ('cartodb-leaflet needs at least a CartoDB table name, user_name and tile_style');
    }

    L.CartoDBGroupLayer.prototype.initialize.call(this, {
      layer_definition: {
        version: this.options.layer_definition_version,
        layers: [{
          type: 'cartodb',
          options: this._getLayerDefinition(),
          infowindow: this.options.infowindow
        }]
      }
    });

    this.setOptions(this.options);
  },

  setQuery: function(layer, sql) {
    if(sql === undefined) {
      sql = layer;
      layer = 0;
    }
    sql = sql || 'select * from ' + this.options.table_name;
    LayerDefinition.prototype.setQuery.call(this, layer, sql);
  },

  /**
   * Returns if the layer is visible or not
   */
  isVisible: function() {
    return this.visible;
  },


  /**
   * Returns if the layer belongs to the map
   */
  isAdded: function() {
    return this.options.added;
  }

});

/**
 * leatlet cartodb layer
 */

var LeafLetLayerCartoDBView = L.CartoDBLayer.extend({
  //var LeafLetLayerCartoDBView = function(layerModel, leafletMap) {
  initialize: function(layerModel, leafletMap) {
    var self = this;

    _.bindAll(this, 'featureOut', 'featureOver', 'featureClick');

    // CartoDB new attribution,
    // also we have the logo
    layerModel.attributes.attribution = "CartoDB <a href='http://cartodb.com/attributions' target='_blank'>attribution</a>";

    var opts = _.clone(layerModel.attributes);

    opts.map =  leafletMap;

    var // preserve the user's callbacks
    _featureOver  = opts.featureOver,
    _featureOut   = opts.featureOut,
    _featureClick = opts.featureClick;

    opts.featureOver  = function() {
      _featureOver  && _featureOver.apply(this, arguments);
      self.featureOver  && self.featureOver.apply(this, arguments);
    };

    opts.featureOut  = function() {
      _featureOut  && _featureOut.apply(this, arguments);
      self.featureOut  && self.featureOut.apply(this, arguments);
    };

    opts.featureClick  = function() {
      _featureClick  && _featureClick.apply(this, arguments);
      self.featureClick  && self.featureClick.apply(opts, arguments);
    };

    layerModel.bind('change:visible', function() {
      self.model.get('visible') ? self.show(): self.hide();
    }, this);

    L.CartoDBLayer.prototype.initialize.call(this, opts);
    cdb.geo.LeafLetLayerView.call(this, layerModel, this, leafletMap);

  },

  _modelUpdated: function() {
    var attrs = _.clone(this.model.attributes);
    this.leafletLayer.setOptions(attrs);
  },

  featureOver: function(e, latlon, pixelPos, data) {
    // dont pass leaflet lat/lon
    this.trigger('featureOver', e, [latlon.lat, latlon.lng], pixelPos, data, 0);
  },

  featureOut: function(e) {
    this.trigger('featureOut', e, 0);
  },

  featureClick: function(e, latlon, pixelPos, data) {
    // dont pass leaflet lat/lon
    this.trigger('featureClick', e, [latlon.lat, latlon.lng], pixelPos, data, 0);
  },

  reload: function() {
    this.model.invalidate();
    //this.redraw();
  },

  error: function(e) {
    this.trigger('error', e?e.error:'unknown error');
    this.model.trigger('tileError', e?e.error:'unknown error');
  },

  tilesOk: function(e) {
    this.model.trigger('tileOk');
  },

  includes: [
    cdb.geo.LeafLetLayerView.prototype,
    Backbone.Events
  ]

});

/*_.extend(L.CartoDBLayer.prototype, CartoDBLayerCommon.prototype);

_.extend(
  LeafLetLayerCartoDBView.prototype,
  cdb.geo.LeafLetLayerView.prototype,
  L.CartoDBLayer.prototype,
  Backbone.Events, // be sure this is here to not use the on/off from leaflet

  */
cdb.geo.LeafLetLayerCartoDBView = LeafLetLayerCartoDBView;

})();
/**
* leaflet implementation of a map
*/
(function() {

  if(typeof(L) == "undefined")
    return;

  /**
   * leatlef impl
   */
  cdb.geo.LeafletMapView = cdb.geo.MapView.extend({


    initialize: function() {

      _.bindAll(this, '_addLayer', '_removeLayer', '_setZoom', '_setCenter', '_setView');

      cdb.geo.MapView.prototype.initialize.call(this);

      var self = this;

      var center = this.map.get('center');

      var mapConfig = {
        zoomControl: false,
        center: new L.LatLng(center[0], center[1]),
        zoom: this.map.get('zoom'),
        minZoom: this.map.get('minZoom'),
        maxZoom: this.map.get('maxZoom')
      };


      if (this.map.get('bounding_box_ne')) {
        //mapConfig.maxBounds = [this.map.get('bounding_box_ne'), this.map.get('bounding_box_sw')];
      }

      if (!this.options.map_object) {

        this.map_leaflet = new L.Map(this.el, mapConfig);

        // remove the "powered by leaflet"
        this.map_leaflet.attributionControl.setPrefix('');

        // Disable the scrollwheel
        if (this.map.get("scrollwheel") == false) this.map_leaflet.scrollWheelZoom.disable();

      } else {

        this.map_leaflet = this.options.map_object;
        this.setElement(this.map_leaflet.getContainer());

        var c = self.map_leaflet.getCenter();

        self._setModelProperty({ center: [c.lat, c.lng] });
        self._setModelProperty({ zoom: self.map_leaflet.getZoom() });

        // unset bounds to not change mapbounds
        self.map.unset('view_bounds_sw', { silent: true });
        self.map.unset('view_bounds_ne', { silent: true });

      }

      this.map.bind('set_view', this._setView, this);
      this.map.layers.bind('add', this._addLayer, this);
      this.map.layers.bind('remove', this._removeLayer, this);
      this.map.layers.bind('reset', this._addLayers, this);

      this.map.geometries.bind('add', this._addGeometry, this);
      this.map.geometries.bind('remove', this._removeGeometry, this);

      this._bindModel();

      this._addLayers();

      this.map_leaflet.on('layeradd', function(lyr) {
        this.trigger('layeradd', lyr, self);
      }, this);

      this.map_leaflet.on('zoomstart', function() {
        self.trigger('zoomstart');
      });

      this.map_leaflet.on('click', function(e) {
        self.trigger('click', e.originalEvent, [e.latlng.lat, e.latlng.lng]);
      });

      this.map_leaflet.on('dblclick', function(e) {
        self.trigger('dblclick', e.originalEvent);
      });

      this.map_leaflet.on('zoomend', function() {
        self._setModelProperty({
          zoom: self.map_leaflet.getZoom()
        });
        self.trigger('zoomend');
      }, this);

      this.map_leaflet.on('move', function() {
        var c = self.map_leaflet.getCenter();
        self._setModelProperty({ center: [c.lat, c.lng] });
      });

      this.map_leaflet.on('drag', function() {
        var c = self.map_leaflet.getCenter();
        self._setModelProperty({
          center: [c.lat, c.lng]
        });
        self.trigger('drag');
      }, this);

      this.map.bind('change:maxZoom', function() {
        L.Util.setOptions(self.map_leaflet, { maxZoom: self.map.get('maxZoom') });
      }, this);

      this.map.bind('change:minZoom', function() {
        L.Util.setOptions(self.map_leaflet, { minZoom: self.map.get('minZoom') });
      }, this);

      this.trigger('ready');

      // looks like leaflet dont like to change the bounds just after the inicialization
      var bounds = this.map.getViewBounds();

      if (bounds) {
        this.showBounds(bounds);
      }
    },

    clean: function() {
      //see https://github.com/CloudMade/Leaflet/issues/1101
      L.DomEvent.off(window, 'resize', this.map_leaflet._onResize, this.map_leaflet);

      // remove layer views
      for(var layer in this.layers) {
        var layer_view = this.layers[layer];
        layer_view.remove();
        delete this.layers[layer];
      }

      // do not change by elder
      cdb.core.View.prototype.clean.call(this);
    },

    _setScrollWheel: function(model, z) {
      if (z) {
        this.map_leaflet.scrollWheelZoom.enable();
      } else {
        this.map_leaflet.scrollWheelZoom.disable();
      }
    },

    _setZoom: function(model, z) {
      this._setView();
    },

    _setCenter: function(model, center) {
      this._setView();
    },

    _setView: function() {
      this.map_leaflet.setView(this.map.get("center"), this.map.get("zoom") || 0 );
    },

    _addGeomToMap: function(geom) {
      var geo = cdb.geo.LeafletMapView.createGeometry(geom);
      geo.geom.addTo(this.map_leaflet);
      return geo;
    },

    _removeGeomFromMap: function(geo) {
      this.map_leaflet.removeLayer(geo.geom);
    },

    createLayer: function(layer) {
      return cdb.geo.LeafletMapView.createLayer(layer, this.map_leaflet);
    },

    _addLayer: function(layer, layers, opts) {
      var self = this;
      var lyr, layer_view;

      layer_view = cdb.geo.LeafletMapView.createLayer(layer, this.map_leaflet);
      if(!layer_view) {
        return;
      }

      var appending = !opts || opts.index === undefined || opts.index === _.size(this.layers);
      // since leaflet does not support layer ordering
      // add the layers should be removed and added again
      // if the layer is being appended do not clear
      if(!appending) {
        for(var i in this.layers) {
          this.map_leaflet.removeLayer(this.layers[i]);
        }
      }

      this.layers[layer.cid] = layer_view;

      // add them again, in correct order
      if(appending) {
        cdb.geo.LeafletMapView.addLayerToMap(layer_view, self.map_leaflet);
        if(layer_view.setZIndex) {
          layer_view.setZIndex(layer.get('order'))
        }
      } else {
        this.map.layers.each(function(layerModel) {
          var v = self.layers[layerModel.cid];
          if(v) {
            cdb.geo.LeafletMapView.addLayerToMap(v, self.map_leaflet);
            if(v.setZIndex) {
              v.setZIndex(layerModel.get('order'))
            }
          }
        });
      }

      var attribution = layer.get('attribution');

      if (attribution) {
        // Setting attribution in map model
        var attributions = this.map.get('attribution') || [];
        if (!_.contains(attributions, attribution)) {
          attributions.push(attribution);
        }

        this.map.set({ attribution: attributions });
      }

      if(opts == undefined || !opts.silent) {
        this.trigger('newLayerView', layer_view, layer, this);
      }
      return layer_view;
    },

    latLonToPixel: function(latlon) {
      var point = this.map_leaflet.latLngToLayerPoint(new L.LatLng(latlon[0], latlon[1]));
      return this.map_leaflet.layerPointToContainerPoint(point);
    },

    // return the current bounds of the map view
    getBounds: function() {
      var b = this.map_leaflet.getBounds();
      var sw = b.getSouthWest();
      var ne = b.getNorthEast();
      return [
        [sw.lat, sw.lng],
        [ne.lat, ne.lng]
      ];
    },

    setAttribution: function(m) {
      // Leaflet takes care of attribution by its own.
    },

    getSize: function() {
      return this.map_leaflet.getSize();
    },

    panBy: function(p) {
      this.map_leaflet.panBy(new L.Point(p.x, p.y));
    },

    setCursor: function(cursor) {
      $(this.map_leaflet.getContainer()).css('cursor', cursor);
    },

    getNativeMap: function() {
      return this.map_leaflet;
    },

    invalidateSize: function() {
      this.map_leaflet.invalidateSize();
    }

  }, {

    layerTypeMap: {
      "tiled": cdb.geo.LeafLetTiledLayerView,
      "cartodb": cdb.geo.LeafLetLayerCartoDBView,
      "carto": cdb.geo.LeafLetLayerCartoDBView,
      "plain": cdb.geo.LeafLetPlainLayerView,
      // for google maps create a plain layer
      "gmapsbase": cdb.geo.LeafLetPlainLayerView,
      "layergroup": cdb.geo.LeafLetCartoDBLayerGroupView
    },

    createLayer: function(layer, map) {
      var layer_view = null;
      var layerClass = this.layerTypeMap[layer.get('type').toLowerCase()];

      if (layerClass) {
        layer_view = new layerClass(layer, map);
      } else {
        cdb.log.error("MAP: " + layer.get('type') + " can't be created");
      }
      return layer_view;
    },

    addLayerToMap: function(layer_view, map, pos) {
      map.addLayer(layer_view.leafletLayer);
      if(pos != undefined) {
        if(v.setZIndex) {
          v.setZIndex(pos);
        }
      }
    },

    /**
     * create the view for the geometry model
     */
    createGeometry: function(geometryModel) {
      if(geometryModel.isPoint()) {
        return new cdb.geo.leaflet.PointView(geometryModel);
      }
      return new cdb.geo.leaflet.PathView(geometryModel);
    }

  });

  // set the image path in order to be able to get leaflet icons
  // code adapted from leaflet
  L.Icon.Default.imagePath = (function () {
    var scripts = document.getElementsByTagName('script'),
        leafletRe = /\/?cartodb[\-\._]?([\w\-\._]*)\.js\??/;

    var i, len, src, matches;

    for (i = 0, len = scripts.length; i < len; i++) {
      src = scripts[i].src;
      matches = src.match(leafletRe);

      if (matches) {
        var bits = src.split('/')
        delete bits[bits.length - 1];
        return bits.join('/') + 'themes/css/images';
      }
    }
  }());

})();

(function() {

if(typeof(google) == "undefined" || typeof(google.maps) == "undefined") 
  return;

/**
* base layer for all google maps
*/

var GMapsLayerView = function(layerModel, gmapsLayer, gmapsMap) {
  this.gmapsLayer = gmapsLayer;
  this.map = this.gmapsMap = gmapsMap;
  this.model = layerModel;
  this.model.bind('change', this._update, this);

  this.type = layerModel.get('type') || layerModel.get('kind');
  this.type = this.type.toLowerCase();
};

_.extend(GMapsLayerView.prototype, Backbone.Events);
_.extend(GMapsLayerView.prototype, {

  // hack function to search layer inside google maps layers
  _searchLayerIndex: function() {
    var self = this;
    var index = -1;
    this.gmapsMap.overlayMapTypes.forEach(
      function(layer, i) {
        if (layer == self) {
          index = i;
        }
      }
    );
    return index;
  },

  /**
   * remove layer from the map and unbind events
   */
  remove: function() {
    if(!this.isBase) {
      var self = this;
      var idx = this._searchLayerIndex();
      if(idx > 0) {
        this.gmapsMap.overlayMapTypes.removeAt(idx);
      }
      this.model.unbind(null, null, this);
      this.unbind();
    }
  },

  refreshView: function() {
    var self = this;
    //reset to update
    if(this.isBase) {
      var a = '_baseLayer';
      this.gmapsMap.setMapTypeId(null);
      this.gmapsMap.mapTypes.set(a, this.gmapsLayer);
      this.gmapsMap.setMapTypeId(a);
    } else {
      var idx = this._searchLayerIndex();
      if(idx >= 0) {
        this.gmapsMap.overlayMapTypes.setAt(idx, this);
      }
    }
  },

  /*

  show: function() {
    this.gmapsLayer.show();
  },

  hide: function() {
    this.gmapsLayer.hide();
  },
  */

  reload: function() { this.refreshView() ; },
  _update: function() { this.refreshView(); }


});

cdb.geo.GMapsLayerView = GMapsLayerView;

})();

(function() {

if(typeof(google) == "undefined" || typeof(google.maps) == "undefined")
  return;

var GMapsBaseLayerView = function(layerModel, gmapsMap) {
  cdb.geo.GMapsLayerView.call(this, layerModel, null, gmapsMap);
};

_.extend(
  GMapsBaseLayerView.prototype,
  cdb.geo.GMapsLayerView.prototype,
  {
  _update: function() {
    var m = this.model;
    var types = {
      "roadmap":      google.maps.MapTypeId.ROADMAP,
      "gray_roadmap": google.maps.MapTypeId.ROADMAP,
      "dark_roadmap": google.maps.MapTypeId.ROADMAP,
      "hybrid":       google.maps.MapTypeId.HYBRID,
      "satellite":    google.maps.MapTypeId.SATELLITE,
      "terrain":      google.maps.MapTypeId.TERRAIN
    };

    this.gmapsMap.setOptions({
      mapTypeId: types[m.get('base_type')]
    });

    this.gmapsMap.setOptions({
      styles: m.get('style') || DEFAULT_MAP_STYLE
    });
  },
  remove: function() { }
});


cdb.geo.GMapsBaseLayerView = GMapsBaseLayerView;


})();

(function() {

if(typeof(google) == "undefined" || typeof(google.maps) == "undefined") 
  return;

var GMapsPlainLayerView = function(layerModel, gmapsMap) {
  this.color = layerModel.get('color')
  cdb.geo.GMapsLayerView.call(this, layerModel, this, gmapsMap);
};

_.extend(
  GMapsPlainLayerView.prototype,
  cdb.geo.GMapsLayerView.prototype, {

  _update: function() {
    this.color = this.model.get('color')
    this.refreshView();
  },

  getTile: function(coord, zoom, ownerDocument) {
      var div = document.createElement('div');
      div.style.width = this.tileSize.x;
      div.style.height = this.tileSize.y;
      div['background-color'] = this.color;
      return div;
  },

  tileSize: new google.maps.Size(256,256),
  maxZoom: 100,
  minZoom: 0,
  name:"plain layer",
  alt: "plain layer"
});

cdb.geo.GMapsPlainLayerView = GMapsPlainLayerView;

})();

(function() {

if(typeof(google) == "undefined" || typeof(google.maps) == "undefined") 
  return;

// TILED LAYER
var GMapsTiledLayerView = function(layerModel, gmapsMap) {
  cdb.geo.GMapsLayerView.call(this, layerModel, this, gmapsMap);
  this.tileSize = new google.maps.Size(256, 256);
  this.opacity = 1.0;
  this.isPng = true;
  this.maxZoom = 22;
  this.minZoom = 0;
  this.name= 'cartodb tiled layer';
  google.maps.ImageMapType.call(this, this);
};

_.extend(
  GMapsTiledLayerView.prototype,
  cdb.geo.GMapsLayerView.prototype,
  google.maps.ImageMapType.prototype, {

    getTileUrl: function(tile, zoom) {
      var y = tile.y;
      var tileRange = 1 << zoom;
      if (y < 0 || y  >= tileRange) {
        return null;
      }
      var x = tile.x;
      if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
      }
      if(this.model.get('tms')) {
        y = tileRange - y - 1;
      }
      var urlPattern = this.model.get('urlTemplate');
      return urlPattern
                  .replace("{x}",x)
                  .replace("{y}",y)
                  .replace("{z}",zoom);
    }
});

cdb.geo.GMapsTiledLayerView = GMapsTiledLayerView;


})();
(function() {
// if google maps is not defined do not load the class
if(typeof(google) == "undefined" || typeof(google.maps) == "undefined") {
  return;
}

// helper to get pixel position from latlon
var Projector = function(map) { this.setMap(map); };
Projector.prototype = new google.maps.OverlayView();
Projector.prototype.draw = function() {};
Projector.prototype.latLngToPixel = function(point) {
  var p = this.getProjection();
  if(p) {
    return p.fromLatLngToContainerPixel(point);
  }
  return [0, 0];
};
Projector.prototype.pixelToLatLng = function(point) {
  var p = this.getProjection();
  if(p) {
    return p.fromContainerPixelToLatLng(point);
  }
  return [0, 0];
  //return this.map.getProjection().fromPointToLatLng(point);
};

var CartoDBLayerGroup = function(opts) {

  var default_options = {
    opacity:        0.99,
    attribution:    "CartoDB",
    debug:          false,
    visible:        true,
    added:          false,
    tiler_domain:   "cartodb.com",
    tiler_port:     "80",
    tiler_protocol: "http",
    sql_api_domain:     "cartodb.com",
    sql_api_port:       "80",
    sql_api_protocol:   "http",
    extra_params:   {
      cache_policy: 'persist'
    },
    cdn_url:        null,
    subdomains:     null
  };

  this.options = _.defaults(opts, default_options);
  this.tiles = 0;
  this.tilejson = null;
  this.interaction = [];

  if (!opts.layer_definition && !opts.sublayers) {
      throw new Error('cartodb-leaflet needs at least the layer_definition or sublayer list');
  }

  // if only sublayers is available, generate layer_definition from it
  if(!opts.layer_definition) {
    opts.layer_definition = LayerDefinition.layerDefFromSubLayers(opts.sublayers);
  }

  // Add CartoDB logo
  this._addWadus({left: 74, bottom:8}, 2000, this.options.map.getDiv());

  wax.g.connector.call(this, opts);

  // lovely wax connector overwrites options so set them again
  // TODO: remove wax.connector here
   _.extend(this.options, opts);
  this.projector = new Projector(opts.map);
  LayerDefinition.call(this, opts.layer_definition, this.options);
  CartoDBLayerCommon.call(this);
  // precache
  this.update();
};

CartoDBLayerGroup.Projector = Projector;

CartoDBLayerGroup.prototype = new wax.g.connector();
_.extend(CartoDBLayerGroup.prototype, CartoDBLayerCommon.prototype, LayerDefinition.prototype);

CartoDBLayerGroup.prototype.interactionClass = wax.g.interaction;

CartoDBLayerGroup.prototype.setOpacity = function(opacity) {
  if (isNaN(opacity) || opacity > 1 || opacity < 0) {
    throw new Error(opacity + ' is not a valid value, should be in [0, 1] range');
  }
  this.opacity = this.options.opacity = opacity;
  for(var key in this.cache) {
    var img = this.cache[key];
    img.style.opacity = opacity;
    img.style.filter = "alpha(opacity=" + (opacity*100) + ");"
    //img.setAttribute("style","opacity: " + opacity + "; filter: alpha(opacity="+(opacity*100)+");");
  }

};

CartoDBLayerGroup.prototype.setAttribution = function() {};

CartoDBLayerGroup.prototype.getTile = function(coord, zoom, ownerDocument) {
  var EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  var self = this;

  this.options.added = true;

  if(this.tilejson == null) {
    var key = zoom + '/' + coord.x + '/' + coord.y;
    var i = this.cache[key] = new Image(256, 256);
    i.src = EMPTY_GIF;
    i.setAttribute('gTileKey', key);
    i.style.opacity = this.options.opacity;
    return i;
  }

  var im = wax.g.connector.prototype.getTile.call(this, coord, zoom, ownerDocument);

  if (this.tiles === 0) {
    this.loading && this.loading();
  }

  this.tiles++;

  im.onload = im.onerror = function() {
    self.tiles--;
    if (self.tiles === 0) {
      self.finishLoading && self.finishLoading();
    }
  };

  return im;
};

CartoDBLayerGroup.prototype.onAdd = function () {
  //this.update();
};

CartoDBLayerGroup.prototype.clear = function () {
  this._clearInteraction();
  self.finishLoading && self.finishLoading();
};

CartoDBLayerGroup.prototype.update = function (done) {
  var self = this;
  this.loading && this.loading();
  this.getTiles(function(urls, err) {
    if(urls) {
      self.tilejson = urls;
      self.options.tiles = urls.tiles;
      self.tiles = 0;
      self.cache = {};
      self._reloadInteraction();
      self.refreshView();
      self.ok && self.ok();
      done && done();
    } else {
      self.error && self.error(err)
    }
  });
};


CartoDBLayerGroup.prototype.refreshView = function() {
  var self = this;
  var map = this.options.map;
  map.overlayMapTypes.forEach(
    function(layer, i) {
      if (layer == self) {
        map.overlayMapTypes.setAt(i, self);
        return;
      }
    }
  );
}
CartoDBLayerGroup.prototype.onLayerDefinitionUpdated = function() {
    this.update();
}

CartoDBLayerGroup.prototype._checkLayer = function() {
  if (!this.options.added) {
    throw new Error('the layer is not still added to the map');
  }
}

CartoDBLayerGroup.prototype._findPos = function (map,o) {
  var curleft, cartop;
  curleft = curtop = 0;
  var obj = map.getDiv();
  do {
    curleft += obj.offsetLeft;
    curtop += obj.offsetTop;
  } while (obj = obj.offsetParent);
  return new google.maps.Point(
      (o.e.clientX || o.e.changedTouches[0].clientX) - curleft,
      (o.e.clientY || o.e.changedTouches[0].clientY) - curtop
  );
};

CartoDBLayerGroup.prototype._manageOffEvents = function(map, o){
  if (this.options.featureOut) {
    return this.options.featureOut && this.options.featureOut(o.e, o.layer);
  }
};


CartoDBLayerGroup.prototype._manageOnEvents = function(map,o) {
  var point  = this._findPos(map, o);
  var latlng = this.projector.pixelToLatLng(point);
  var event_type = o.e.type.toLowerCase();


  switch (event_type) {
    case 'mousemove':
      if (this.options.featureOver) {
        return this.options.featureOver(o.e,latlng, point, o.data, o.layer);
      }
      break;

    case 'click':
    case 'touchend':
    case 'mspointerup':
      if (this.options.featureClick) {
        this.options.featureClick(o.e,latlng, point, o.data, o.layer);
      }
      break;
    default:
      break;
  }
}

cdb.geo.CartoDBLayerGroupGMaps = CartoDBLayerGroup;

/*
 *
 *  cartodb layer group view
 *
 */

var GMapsCartoDBLayerGroupView = function(layerModel, gmapsMap) {
  var self = this;

  _.bindAll(this, 'featureOut', 'featureOver', 'featureClick');

  // CartoDB new attribution,
  // also we have the logo
  layerModel.attributes.attribution = "CartoDB <a href='http://cartodb.com/attributions' target='_blank'>attribution</a>";

  var opts = _.clone(layerModel.attributes);

  opts.map =  gmapsMap;

  var // preserve the user's callbacks
  _featureOver  = opts.featureOver,
  _featureOut   = opts.featureOut,
  _featureClick = opts.featureClick;

  opts.featureOver  = function() {
    _featureOver  && _featureOver.apply(this, arguments);
    self.featureOver  && self.featureOver.apply(this, arguments);
  };

  opts.featureOut  = function() {
    _featureOut  && _featureOut.apply(this, arguments);
    self.featureOut  && self.featureOut.apply(this, arguments);
  };

  opts.featureClick  = function() {
    _featureClick  && _featureClick.apply(this, arguments);
    self.featureClick  && self.featureClick.apply(opts, arguments);
  };

  
  CartoDBLayerGroup.call(this, opts);
  cdb.geo.GMapsLayerView.call(this, layerModel, this, gmapsMap);
};



_.extend(
  GMapsCartoDBLayerGroupView.prototype,
  cdb.geo.GMapsLayerView.prototype,
  CartoDBLayerGroup.prototype,
  {

  _update: function() {
    this.setOptions(this.model.attributes);
  },

  reload: function() {
    this.model.invalidate();
  },

  remove: function() {
    cdb.geo.GMapsLayerView.prototype.remove.call(this);
    this.clear();
  },

  featureOver: function(e, latlon, pixelPos, data, layer) {
    // dont pass gmaps LatLng
    this.trigger('featureOver', e, [latlon.lat(), latlon.lng()], pixelPos, data, layer);
  },

  featureOut: function(e, layer) {
    this.trigger('featureOut', e, layer);
  },

  featureClick: function(e, latlon, pixelPos, data, layer) {
    // dont pass leaflet lat/lon
    this.trigger('featureClick', e, [latlon.lat(), latlon.lng()], pixelPos, data, layer);
  },

  error: function(e) {
    if(this.model) {
      //trigger the error form _checkTiles in the model
      this.model.trigger('error', e?e.errors:'unknown error');
      this.model.trigger('tileError', e?e.errors:'unknown error');
    }
  },

  ok: function(e) {
    this.model.trigger('tileOk');
  },

  tilesOk: function(e) {
    this.model.trigger('tileOk');
  },

  loading: function() {
    this.trigger("loading");
  },

  finishLoading: function() {
    this.trigger("load");
  }


});

cdb.geo.GMapsCartoDBLayerGroupView = GMapsCartoDBLayerGroupView;

/**
* gmaps cartodb layer
*/

})();
(function() {
// if google maps is not defined do not load the class
if(typeof(google) == "undefined" || typeof(google.maps) == "undefined")
  return;

// helper to get pixel position from latlon
var Projector = function(map) { this.setMap(map); };
Projector.prototype = new google.maps.OverlayView();
Projector.prototype.draw = function() {};
Projector.prototype.latLngToPixel = function(point) {
  var p = this.getProjection();
  if(p) {
    return p.fromLatLngToContainerPixel(point);
  }
  return [0, 0];
};
Projector.prototype.pixelToLatLng = function(point) {
  var p = this.getProjection();
  if(p) {
    return p.fromContainerPixelToLatLng(point);
  }
  return [0, 0];
  //return this.map.getProjection().fromPointToLatLng(point);
};

var CartoDBLayer = function(options) {

  var default_options = {
    query:          "SELECT * FROM {{table_name}}",
    opacity:        0.99,
    attribution:    "CartoDB",
    opacity:        1,
    debug:          false,
    visible:        true,
    added:          false,
    extra_params:   {},
    layer_definition_version: '1.0.0'
  };

  this.options = _.defaults(options, default_options);

  if (!options.table_name || !options.user_name || !options.tile_style) {
      throw ('cartodb-gmaps needs at least a CartoDB table name, user_name and tile_style');
  }


  this.options.layer_definition = {
    version: this.options.layer_definition_version,
    layers: [{
      type: 'cartodb',
      options: this._getLayerDefinition(),
      infowindow: this.options.infowindow
    }]
  };
  cdb.geo.CartoDBLayerGroupGMaps.call(this, this.options);

  this.setOptions(this.options);

};

_.extend(CartoDBLayer.prototype, cdb.geo.CartoDBLayerGroupGMaps.prototype);

CartoDBLayer.prototype.setQuery = function (layer, sql) {
  if(sql === undefined) {
    sql = layer;
    layer = 0;
  }
  sql = sql || 'select * from ' + this.options.table_name;
  LayerDefinition.prototype.setQuery.call(this, layer, sql);
};

cdb.geo.CartoDBLayerGMaps = CartoDBLayer;

/**
* gmaps cartodb layer
*/

var GMapsCartoDBLayerView = function(layerModel, gmapsMap) {
  var self = this;

  _.bindAll(this, 'featureOut', 'featureOver', 'featureClick');

  // CartoDB new attribution,
  // also we have the logo
  layerModel.attributes.attribution = "CartoDB <a href='http://cartodb.com/attributions' target='_blank'>attribution</a>";

  var opts = _.clone(layerModel.attributes);

  opts.map =  gmapsMap;

  var // preserve the user's callbacks
  _featureOver  = opts.featureOver,
  _featureOut   = opts.featureOut,
  _featureClick = opts.featureClick;

  opts.featureOver  = function() {
    _featureOver  && _featureOver.apply(this, arguments);
    self.featureOver  && self.featureOver.apply(this, arguments);
  };

  opts.featureOut  = function() {
    _featureOut  && _featureOut.apply(this, arguments);
    self.featureOut  && self.featureOut.apply(this, arguments);
  };

  opts.featureClick  = function() {
    _featureClick  && _featureClick.apply(this, arguments);
    self.featureClick  && self.featureClick.apply(opts, arguments);
  };

  cdb.geo.CartoDBLayerGMaps.call(this, opts);
  cdb.geo.GMapsLayerView.call(this, layerModel, this, gmapsMap);
};

cdb.geo.GMapsCartoDBLayerView = GMapsCartoDBLayerView;


_.extend(
  GMapsCartoDBLayerView.prototype,
  cdb.geo.CartoDBLayerGMaps.prototype,
  cdb.geo.GMapsLayerView.prototype,
  {

  _update: function() {
    this.setOptions(this.model.attributes);
  },

  reload: function() {
    this.model.invalidate();
  },

  remove: function() {
    cdb.geo.GMapsLayerView.prototype.remove.call(this);
    this.clear();
  },

  featureOver: function(e, latlon, pixelPos, data) {
    // dont pass gmaps LatLng
    this.trigger('featureOver', e, [latlon.lat(), latlon.lng()], pixelPos, data, 0);
  },

  featureOut: function(e) {
    this.trigger('featureOut', e);
  },

  featureClick: function(e, latlon, pixelPos, data, layer) {
    // dont pass leaflet lat/lon
    this.trigger('featureClick', e, [latlon.lat(), latlon.lng()], pixelPos, data, 0);
  },

  error: function(e) {
    if(this.model) {
      //trigger the error form _checkTiles in the model
      this.model.trigger('error', e?e.error:'unknown error');
      this.model.trigger('tileError', e?e.error:'unknown error');
    }
  },

  tilesOk: function(e) {
    this.model.trigger('tileOk');
  },

  loading: function() {
    this.trigger("loading");
  },

  finishLoading: function() {
    this.trigger("load");
  }


});

})();

// if google maps is not defined do not load the class
if(typeof(google) != "undefined" && typeof(google.maps) != "undefined") {

  var DEFAULT_MAP_STYLE = [ { stylers: [ { saturation: -65 }, { gamma: 1.52 } ] },{ featureType: "administrative", stylers: [ { saturation: -95 }, { gamma: 2.26 } ] },{ featureType: "water", elementType: "labels", stylers: [ { visibility: "off" } ] },{ featureType: "administrative.locality", stylers: [ { visibility: "off" } ] },{ featureType: "road", stylers: [ { visibility: "simplified" }, { saturation: -99 }, { gamma: 2.22 } ] },{ featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" } ] },{ featureType: "road.arterial", stylers: [ { visibility: "off" } ] },{ featureType: "road.local", elementType: "labels", stylers: [ { visibility: "off" } ] },{ featureType: "transit", stylers: [ { visibility: "off" } ] },{ featureType: "road", elementType: "labels", stylers: [ { visibility: "off" } ] },{ featureType: "poi", stylers: [ { saturation: -55 } ] } ];



  cdb.geo.GoogleMapsMapView = cdb.geo.MapView.extend({

    layerTypeMap: {
      "tiled": cdb.geo.GMapsTiledLayerView,
      "cartodb": cdb.geo.GMapsCartoDBLayerView,
      "carto": cdb.geo.GMapsCartoDBLayerView,
      "plain": cdb.geo.GMapsPlainLayerView,
      "gmapsbase": cdb.geo.GMapsBaseLayerView,
      "layergroup": cdb.geo.GMapsCartoDBLayerGroupView
    },

    initialize: function() {
      _.bindAll(this, '_ready');
      this._isReady = false;
      var self = this;

      cdb.geo.MapView.prototype.initialize.call(this);

      var bounds = this.map.getViewBounds();

      if (bounds) {
        this.showBounds(bounds);
      }

      var center = this.map.get('center');

      if (!this.options.map_object) {

        this.map_googlemaps = new google.maps.Map(this.el, {
          center: new google.maps.LatLng(center[0], center[1]),
          zoom: this.map.get('zoom'),
          minZoom: this.map.get('minZoom'),
          maxZoom: this.map.get('maxZoom'),
          disableDefaultUI: true,
          scrollwheel: this.map.get("scrollwheel"),
          mapTypeControl:false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          backgroundColor: 'white',
          tilt: 0
        });

      } else {

        this.map_googlemaps = this.options.map_object;
        this.setElement(this.map_googlemaps.getDiv());

        // fill variables
        var c = self.map_googlemaps.getCenter();

        self._setModelProperty({ center: [c.lat(), c.lng()] });
        self._setModelProperty({ zoom: self.map_googlemaps.getZoom() });

        // unset bounds to not change mapbounds
        self.map.unset('view_bounds_sw', { silent: true });
        self.map.unset('view_bounds_ne', { silent: true });

      }

      this.map.geometries.bind('add', this._addGeometry, this);
      this.map.geometries.bind('remove', this._removeGeometry, this);


      this._bindModel();
      this._addLayers();

      google.maps.event.addListener(this.map_googlemaps, 'center_changed', function() {
        var c = self.map_googlemaps.getCenter();
        self._setModelProperty({ center: [c.lat(), c.lng()] });
      });

      google.maps.event.addListener(this.map_googlemaps, 'zoom_changed', function() {
        self._setModelProperty({
          zoom: self.map_googlemaps.getZoom()
        });
      });

      google.maps.event.addListener(this.map_googlemaps, 'click', function(e) {
        self.trigger('click', e, [e.latLng.lat(), e.latLng.lng()]);
      });

      google.maps.event.addListener(this.map_googlemaps, 'dblclick', function(e) {
        self.trigger('dblclick', e);
      });

      this.map.layers.bind('add', this._addLayer, this);
      this.map.layers.bind('remove', this._removeLayer, this);
      this.map.layers.bind('reset', this._addLayers, this);

      this.projector = new cdb.geo.CartoDBLayerGroupGMaps.Projector(this.map_googlemaps);

      this.projector.draw = this._ready;

    },

    _ready: function() {
      this.projector.draw = function() {};
      this.trigger('ready');
      this._isReady = true;
    },

    _setScrollWheel: function(model, z) {
      this.map_googlemaps.setOptions({ scrollwheel: z });
    },

    _setZoom: function(model, z) {
      z = z || 0;
      this.map_googlemaps.setZoom(z);
    },

    _setCenter: function(model, center) {
      var c = new google.maps.LatLng(center[0], center[1]);
      this.map_googlemaps.setCenter(c);
    },

    createLayer: function(layer) {
      var layer_view,
      layerClass = this.layerTypeMap[layer.get('type').toLowerCase()];

      if (layerClass) {
        layer_view = new layerClass(layer, this.map_googlemaps);
      } else {
        cdb.log.error("MAP: " + layer.get('type') + " can't be created");
      }
      return layer_view;
    },

    _addLayer: function(layer, layers, opts) {
      opts = opts || {};
      var self = this;
      var lyr, layer_view;

      layer_view = this.createLayer(layer);

      if (!layer_view) {
        return;
      }

      this.layers[layer.cid] = layer_view;

      if (layer_view) {
        var idx = _.keys(this.layers).length  - 1;
        var isBaseLayer = idx === 0 || (opts && opts.index === 0);
        // set base layer
        if(isBaseLayer && !opts.no_base_layer) {
          var m = layer_view.model;
          if(m.get('type') == 'GMapsBase') {
            layer_view._update();
          } else {
            layer_view.isBase = true;
            layer_view._update();
          }
        } else {
          idx -= 1;
          idx = Math.max(0, idx); // avoid -1
          self.map_googlemaps.overlayMapTypes.setAt(idx, layer_view.gmapsLayer);
        }
        if(opts == undefined || !opts.silent) {
          this.trigger('newLayerView', layer_view, layer, this);
        }
      } else {
        cdb.log.error("layer type not supported");
      }

      var attribution = layer.get('attribution');

      if (attribution) {
        // Setting attribution in map model
        // it doesn't persist in the backend, so this is needed.
        var attributions = this.map.get('attribution') || [];
        if (!_.contains(attributions, attribution)) {
          attributions.push(attribution);
        }

        this.map.set({ attribution: attributions });
      }

      return layer_view;

    },


    latLonToPixel: function(latlon) {
      return this.projector.latLngToPixel(new google.maps.LatLng(latlon[0], latlon[1]));
    },

    getSize: function() {
      return {
        x: this.$el.width(),
        y: this.$el.height()
      };
    },

    panBy: function(p) {
      var c = this.map.get('center');
      var pc = this.latLonToPixel(c);
      p.x += pc.x;
      p.y += pc.y;
      var ll = this.projector.pixelToLatLng(p);
      this.map.setCenter([ll.lat(), ll.lng()]);
    },

    getBounds: function() {
      if(this._isReady) {
        var b = this.map_googlemaps.getBounds();
        var sw = b.getSouthWest();
        var ne = b.getNorthEast();
        return [
          [sw.lat(), sw.lng()],
          [ne.lat(), ne.lng()]
        ];
      }
      return [ [0,0], [0,0] ];
    },

  setAttribution: function(m) {
    // Remove old one
    var old = document.getElementById("cartodb-gmaps-attribution")
      , attribution = m.get("attribution").join(", ");

      // If div already exists, remove it
      if (old) {
        old.parentNode.removeChild(old);
      }

      // Add new one
      var container           = this.map_googlemaps.getDiv()
        , cartodb_attribution = document.createElement("div");

      cartodb_attribution.setAttribute('id','cartodb-gmaps-attribution');
      cartodb_attribution.setAttribute('class', 'gmaps');
      container.appendChild(cartodb_attribution);
      cartodb_attribution.innerHTML = attribution;
    },

    setCursor: function(cursor) {
      this.map_googlemaps.setOptions({ draggableCursor: cursor });
    },

    _addGeomToMap: function(geom) {
      var geo = cdb.geo.GoogleMapsMapView.createGeometry(geom);
      if(geo.geom.length) {
        for(var i = 0 ; i < geo.geom.length; ++i) {
          geo.geom[i].setMap(this.map_googlemaps);
        }
      } else {
          geo.geom.setMap(this.map_googlemaps);
      }
      return geo;
    },

    _removeGeomFromMap: function(geo) {
      if(geo.geom.length) {
        for(var i = 0 ; i < geo.geom.length; ++i) {
          geo.geom[i].setMap(null);
        }
      } else {
        geo.geom.setMap(null);
      }
    },

    getNativeMap: function() {
      return this.map_googlemaps;
    },

    invalidateSize: function() {
      google.maps.event.trigger(this.map_googlemaps, 'resize');
    }

  }, {

    addLayerToMap: function(layer, map, pos) {
      pos = pos || 0;
      map.overlayMapTypes.setAt(pos, layer);
    },

    /**
    * create the view for the geometry model
    */
    createGeometry: function(geometryModel) {
      if(geometryModel.isPoint()) {
        return new cdb.geo.gmaps.PointView(geometryModel);
      }
      return new cdb.geo.gmaps.PathView(geometryModel);
    }
  });

}
/**
 * generic dialog
 *
 * this opens a dialog in the middle of the screen rendering
 * a dialog using cdb.templates 'common/dialog' or template_base option.
 *
 * inherit class should implement render_content (it could return another widget)
 *
 * usage example:
 *
 *    var MyDialog = cdb.ui.common.Dialog.extend({
 *      render_content: function() {
 *        return "my content";
 *      },
 *    })
 *    var dialog = new MyDialog({
 *        title: 'test',
 *        description: 'long description here',
 *        template_base: $('#base_template').html(),
 *        width: 500
 *    });
 *
 *    $('body').append(dialog.render().el);
 *    dialog.open();
 *
 * TODO: implement draggable
 * TODO: modal
 * TODO: document modal_type
 */

cdb.ui.common.Dialog = cdb.core.View.extend({

  tagName: 'div',
  className: 'dialog',

  events: {
    'click .ok': '_ok',
    'click .cancel': '_cancel',
    'click .close': '_cancel'
  },

  default_options: {
    title: 'title',
    description: '',
    ok_title: 'Ok',
    cancel_title: 'Cancel',
    width: 300,
    height: 200,
    clean_on_hide: false,
    enter_to_confirm: false,
    template_name: 'common/views/dialog_base',
    ok_button_classes: 'button green',
    cancel_button_classes: '',
    modal_type: '',
    modal_class: '',
    include_footer: true,
    additionalButtons: []
  },

  initialize: function() {
    _.defaults(this.options, this.default_options);

    _.bindAll(this, 'render', '_keydown');

    // Keydown bindings for the dialog
    $(document).bind('keydown', this._keydown);

    // After removing the dialog, cleaning other bindings
    this.bind("clean", this._reClean);

    this.template_base = this.options.template_base ? _.template(this.options.template_base) : cdb.templates.getTemplate(this.options.template_name);
  },

  render: function() {
    var $el = this.$el;

    $el.html(this.template_base(this.options));

    $el.find(".modal").css({
      width: this.options.width
      //height: this.options.height
      //'margin-left': -this.options.width>>1,
      //'margin-top': -this.options.height>>1
    });

    if(this.render_content) {

      this.$('.content').append(this.render_content());
    }

    if(this.options.modal_class) {
      this.$el.addClass(this.options.modal_class);
    }

    return this;
  },


  _keydown: function(e) {
    // If clicks esc, goodbye!
    if (e.keyCode === 27) {
      this._cancel();
    // If clicks enter, same as you click on ok button.
    } else if (e.keyCode === 13 && this.options.enter_to_confirm) {
      this._ok();
    }
  },

  /**
   * helper method that renders the dialog and appends it to body
   */
  appendToBody: function() {
    $('body').append(this.render().el);
    return this;
  },

  _ok: function(ev) {

   if(ev) ev.preventDefault();

    if (this.ok) {
      this.ok(this.result);
    }

    this.hide();

  },

  _cancel: function(ev) {

    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    if (this.cancel) {
      this.cancel();
    }

    this.hide();

  },

  hide: function() {

    this.$el.hide();

    if (this.options.clean_on_hide) {
      this.clean();
    }

  },

  open: function() {

    this.$el.show();

  },

  _reClean: function() {

    $(document).unbind('keydown', this._keydown);

  }

});
/**
 * generic embbed notification, like twitter "new notifications"
 *
 * it shows slowly the notification with a message and a close button.
 * Optionally you can set a timeout to close
 *
 * usage example:
 *
      var notification = new cdb.ui.common.Notificaiton({
          el: "#notification_element",
          msg: "error!",
          timeout: 1000
      });
      notification.show();
      // close it
      notification.close();
*/

cdb.ui.common.Notification = cdb.core.View.extend({

  tagName: 'div',
  className: 'dialog',

  events: {
    'click .close': 'hide'
  },

  default_options: {
      timeout: 0,
      msg: '',
      hideMethod: '',
      duration: 'normal'
  },

  initialize: function() {
    this.closeTimeout = -1;
    _.defaults(this.options, this.default_options);
    this.template = this.options.template ? _.template(this.options.template) : cdb.templates.getTemplate('common/notification');

    this.$el.hide();
  },

  render: function() {
    var $el = this.$el;
    $el.html(this.template(this.options));
    if(this.render_content) {
      this.$('.content').append(this.render_content());
    }
    return this;
  },

  hide: function(ev) {
    var self = this;
    if (ev)
      ev.preventDefault();
    clearTimeout(this.closeTimeout);
    if(this.options.hideMethod != '' && this.$el.is(":visible") ) {
      this.$el[this.options.hideMethod](this.options.duration, 'swing', function() {
        self.$el.html('');
        self.trigger('notificationDeleted');
        self.remove();
      });
    } else {
      this.$el.hide();
      self.$el.html('');
      self.trigger('notificationDeleted');
      self.remove();
    }

  },

  open: function(method, options) {
    this.render();
    this.$el.show(method, options);
    if(this.options.timeout) {
        this.closeTimeout = setTimeout(_.bind(this.hide, this), this.options.timeout);
    }
  }

});

/**
 * generic table
 *
 * this class creates a HTML table based on Table model (see below) and modify it based on model changes
 *
 * usage example:
 *
      var table = new Table({
          model: table
      });

      $('body').append(table.render().el);

  * model should be a collection of Rows

 */

/**
 * represents a table row
 */
cdb.ui.common.Row = cdb.core.Model.extend({
});

cdb.ui.common.TableData = Backbone.Collection.extend({
    model: cdb.ui.common.Row,
    fetched: false,

    initialize: function() {
      var self = this;
      this.bind('reset', function() {
        self.fetched = true;
      })
    },

    /**
     * get value for row index and columnName
     */
    getCell: function(index, columnName) {
      var r = this.at(index);
      if(!r) {
        return null;
      }
      return r.get(columnName);
    },

    isEmpty: function() {
      return this.length === 0;
    }

});

/**
 * contains information about the table, mainly the schema
 */
cdb.ui.common.TableProperties = cdb.core.Model.extend({

  columnNames: function() {
    return _.map(this.get('schema'), function(c) {
      return c[0];
    });
  },

  columnName: function(idx) {
    return this.columnNames()[idx];
  }
});

/**
 * renders a table row
 */
cdb.ui.common.RowView = cdb.core.View.extend({
  tagName: 'tr',

  initialize: function() {

    this.model.bind('change', this.render, this);
    this.model.bind('destroy', this.clean, this);
    this.model.bind('remove', this.clean, this);
    this.model.bind('change', this.triggerChange, this);
    this.model.bind('sync', this.triggerSync, this);
    this.model.bind('error', this.triggerError, this);

    this.add_related_model(this.model);
    this.order = this.options.order;
  },

  triggerChange: function() {
    this.trigger('changeRow');
  },

  triggerSync: function() {
    this.trigger('syncRow');
  },

  triggerError: function() {
    this.trigger('errorRow')
  },

  valueView: function(colName, value) {
    return value;
  },

  render: function() {
    var self = this;
    var row = this.model;

    var tr = '';

    var tdIndex = 0;
    var td;
    if(this.options.row_header) {
        td = '<td class="rowHeader" data-x="' + tdIndex + '">';
    } else {
        td = '<td class="EmptyRowHeader" data-x="' + tdIndex + '">';
    }
    var v = self.valueView('', '');
    if(v.html) {
      v = v[0].outerHTML;
    }
    td += v;
    td += '</td>';
    tdIndex++;
    tr += td

    var attrs = this.order || _.keys(row.attributes);
    var tds = '';
    var row_attrs = row.attributes;
    for(var i = 0, len = attrs.length; i < len; ++i) {
      var key = attrs[i];
      var value = row_attrs[key];
      if(value !== undefined) {
        var td = '<td id="cell_' + row.id + '_' + key + '" data-x="' + tdIndex + '">';
        var v = self.valueView(key, value);
        if(v.html) {
          v = v[0].outerHTML;
        }
        td += v;
        td += '</td>';
        tdIndex++;
        tds += td;
      }
    }
    tr += tds;
    this.$el.html(tr).attr('id', 'row_' + row.id);
    return this;
  },

  getCell: function(x) {
    var childNo = x;
    if(this.options.row_header) {
      ++x;
    }
    return this.$('td:eq(' + x + ')');
  },

  getTableView: function() {
    return this.tableView;
  }

});

/**
 * render a table
 * this widget needs two data sources
 * - the table model which contains information about the table (columns and so on). See TableProperties
 * - the model with the data itself (TableData)
 */
cdb.ui.common.Table = cdb.core.View.extend({

  tagName: 'table',
  rowView: cdb.ui.common.RowView,

  events: {
      'click td': '_cellClick',
      'dblclick td': '_cellDblClick'
  },

  default_options: {
  },

  initialize: function() {
    var self = this;
    _.defaults(this.options, this.default_options);
    this.dataModel = this.options.dataModel;
    this.rowViews = [];

    // binding
    this.setDataSource(this.dataModel);
    this.model.bind('change', this.render, this);
    this.model.bind('change:dataSource', this.setDataSource, this);

    // assert the rows are removed when table is removed
    this.bind('clean', this.clear_rows, this);

    // prepare for cleaning
    this.add_related_model(this.dataModel);
    this.add_related_model(this.model);

    // we need to use custom signals to make the tableview aware of a row being deleted,
    // because when you delete a point from the map view, sometimes it isn't on the dataModel
    // collection, so its destroy doesn't bubble throught there.
    // Also, the only non-custom way to acknowledge that a row has been correctly deleted from a server is with
    // a sync, that doesn't bubble through the table
    this.model.bind('removing:row', function() {
      self.rowsBeingDeleted = self.rowsBeingDeleted ? self.rowsBeingDeleted +1 : 1;
      self.rowDestroying();
    });
    this.model.bind('remove:row', function() {
      if(self.rowsBeingDeleted > 0) {
        self.rowsBeingDeleted--;
        self.rowDestroyed();
        if(self.dataModel.length == 0) {
          self.emptyTable();
        }
      }
    });

  },

  headerView: function(column) {
      return column[0];
  },

  setDataSource: function(dm) {
    if(this.dataModel) {
      this.dataModel.unbind(null, null, this);
    }
    this.dataModel = dm;
    this.dataModel.bind('reset', this._renderRows, this);
    this.dataModel.bind('error', this._renderRows, this);
    this.dataModel.bind('add', this.addRow, this);
  },

  _renderHeader: function() {
    var self = this;
    var thead = $("<thead>");
    var tr = $("<tr>");
    if(this.options.row_header) {
      tr.append($("<th>").append(self.headerView(['', 'header'])));
    } else {
      tr.append($("<th>").append(self.headerView(['', 'header'])));
    }
    _(this.model.get('schema')).each(function(col) {
      tr.append($("<th>").append(self.headerView(col)));
    });
    thead.append(tr);
    return thead;
  },

  /**
   * remove all rows
   */
  clear_rows: function() {
    this.$('tfoot').remove();
    this.$('tr.noRows').remove();

    // unbind rows before cleaning them when all are gonna be removed
    var rowView = null;
    while(rowView = this.rowViews.pop()) {
      // this is a hack to avoid all the elements are removed one by one
      rowView.unbind(null, null, this);
      // each element removes itself from rowViews
      rowView.clean();
    }
    // clean all the html at the same time
    this.rowViews = [];
  },

  /**
   * add rows
   */
  addRow: function(row, collection, options) {
    var self = this;
    var tr = new self.rowView({
      model: row,
      order: this.model.columnNames(),
      row_header: this.options.row_header
    });
    tr.tableView = this;

    tr.bind('clean', function() {
      var idx = _.indexOf(self.rowViews, tr);
      self.rowViews.splice(idx, 1);
      // update index
      for(var i = idx; i < self.rowViews.length; ++i) {
        self.rowViews[i].$el.attr('data-y', i);
      }
    }, this);
    tr.bind('changeRow', this.rowChanged, this);
    tr.bind('saved', this.rowSynched, this);
    tr.bind('errorRow', this.rowFailed, this);
    tr.bind('saving', this.rowSaving, this);
    this.retrigger('saving', tr);

    tr.render();
    if(options && options.index !== undefined && options.index != self.rowViews.length) {

      tr.$el.insertBefore(self.rowViews[options.index].$el);
      self.rowViews.splice(options.index, 0, tr);
      //tr.$el.attr('data-y', options.index);
      // change others view data-y attribute
      for(var i = options.index; i < self.rowViews.length; ++i) {
        self.rowViews[i].$el.attr('data-y', i);
      }
    } else {
      // at the end
      tr.$el.attr('data-y', self.rowViews.length);
      self.$el.append(tr.el);
      self.rowViews.push(tr);
    }

    this.trigger('createRow');
  },

  /**
  * Callback executed when a row change
  * @method rowChanged
  * @abstract
  */
  rowChanged: function() {},

  /**
  * Callback executed when a row is sync
  * @method rowSynched
  * @abstract
  */
  rowSynched: function() {},

  /**
  * Callback executed when a row fails to reach the server
  * @method rowFailed
  * @abstract
  */
  rowFailed: function() {},

  /**
  * Callback executed when a row send a POST to the server
  * @abstract
  */
  rowSaving: function() {},

  /**
  * Callback executed when a row is being destroyed
  * @method rowDestroyed
  * @abstract
  */
  rowDestroying: function() {},

  /**
  * Callback executed when a row gets destroyed
  * @method rowDestroyed
  * @abstract
  */
  rowDestroyed: function() {},

  /**
  * Callback executed when a row gets destroyed and the table data is empty
  * @method emptyTable
  * @abstract
  */
  emptyTable: function() {},

  /**
  * Checks if the table is empty
  * @method isEmptyTable
  * @returns boolean
  */
  isEmptyTable: function() {
    return (this.dataModel.length === 0 && this.dataModel.fetched)
  },

  /**
   * render only data rows
   */
  _renderRows: function() {
    this.clear_rows();
    if(! this.isEmptyTable()) {
      if(this.dataModel.fetched) {
        var self = this;

        this.dataModel.each(function(row) {
          self.addRow(row);
        });
      } else {
        this._renderLoading();
      }
    } else {
      this._renderEmpty();
    }

  },

  _renderLoading: function() {
  },

  _renderEmpty: function() {
  },

  /**
  * Method for the children to redefine with the table behaviour when it has no rows.
  * @method addEmptyTableInfo
  * @abstract
  */
  addEmptyTableInfo: function() {
    // #to be overwrite by descendant classes
  },

  /**
   * render table
   */
  render: function() {
    var self = this;

    // render header
    self.$el.html(self._renderHeader());

    // render data
    self._renderRows();

    return this;

  },

  /**
   * return jquery cell element of cell x,y
   */
  getCell: function(x, y) {
    if(this.options.row_header) {
      ++y;
    }
    return this.rowViews[y].getCell(x);
  },

  _cellClick: function(e, evtName) {
    evtName = evtName || 'cellClick';
    e.preventDefault();
    var cell = $(e.currentTarget || e.target);
    var x = parseInt(cell.attr('data-x'), 10);
    var y = parseInt(cell.parent().attr('data-y'), 10);
    this.trigger(evtName, e, cell, x, y);
  },

  _cellDblClick: function(e) {
    this._cellClick(e, 'cellDblClick');
  }


});
/**
 * Show a dropdown from the target
 *
 * It shows the several options of the user settings
 *
 * usage example:
 *
 *    var settings = new cdb.ui.common.Dropdown({
 *        el: "#settings_element",
 *        speedIn: 300,
 *        speedOut: 200
 *    });
 *    // show it
 *    settings.show();
 *    // close it
 *    settings.close();
*/

cdb.ui.common.Dropdown = cdb.core.View.extend({

  tagName: 'div',
  className: 'dropdown',

  events: {
    "click ul li a" : "_fireClick"
  },

  default_options: {
    width: 160,
    speedIn: 150,
    speedOut: 300,
    vertical_position: "down",
    horizontal_position: "right",
    tick: "right",
    vertical_offset: 0,
    horizontal_offset: 0
  },

  initialize: function() {
    _.bindAll(this, "open", "hide", "_handleClick", "_keydown");

    // Extend options
    _.defaults(this.options, this.default_options);

    // Dropdown template
    if (this.options.template_base) {
      this.template_base = cdb.templates.getTemplate(this.options.template_base);
    } else if (this.options.template) {
      this.template_base = this.options.template;
    }

    // Bind to target
    $(this.options.target).bind({"click": this._handleClick});

    // Bind ESC key
    $(document).bind('keydown', this._keydown);

    // Is open flag
    this.isOpen = false;

  },

  render: function() {
    // Render
    var $el = this.$el;
    $el
      .html(this.template_base(this.options))
      .css({
        width: this.options.width
      })
    return this;
  },

  _handleClick: function(ev) {
    //Check if the dropdown is visible to hiding with the click on the target
    if (ev){
      ev.preventDefault();
      ev.stopPropagation();
    }
    // If visible
    if (this.isOpen){
      this.hide();
    }else{
      this.open();
    }
  },

  _keydown: function(e) {
    if (e.keyCode === 27) {
      this.hide();
    }
  },

  hide: function() {
    this.isOpen = false;
    this.$el.hide();
  },

  show: function() {
    this.$el.css({
      display: "block",
      opacity: 1
    });
    this.isOpen = true;
  },

  open: function(ev,target) {
    // Target
    var $target = target && $(target) || this.options.target;
    this.options.target = $target;

    // Positionate
    var targetPos     = $target[this.options.position || 'offset']()
      , targetWidth   = $target.outerWidth()
      , targetHeight  = $target.outerHeight()
      , elementWidth  = this.$el.outerWidth()
      , elementHeight = this.$el.outerHeight()
      , self = this;

    this.$el.css({
      top: targetPos.top + parseInt((self.options.vertical_position == "up") ? (- elementHeight - 10 - self.options.vertical_offset) : (targetHeight + 10 - self.options.vertical_offset)),
      left: targetPos.left + parseInt((self.options.horizontal_position == "left") ? (self.options.horizontal_offset - 15) : (targetWidth - elementWidth + 15 - self.options.horizontal_offset))
    })
    .addClass(
      // Add vertical and horizontal position class
      (this.options.vertical_position == "up" ? "vertical_top" : "vertical_bottom" )
      + " " +
      (this.options.horizontal_position == "right" ? "horizontal_right" : "horizontal_left" )
      + " " +
      // Add tick class
      "tick_" + this.options.tick
    )

    // Show it
    this.show();

    // Dropdown openned
    this.isOpen = true;
  },

  _fireClick: function(ev) {
    this.trigger("optionClicked", ev, this.el);
  }
});
(function() {

var _requestCache = {};

/**
 * defines the container for an overlay.
 * It places the overlay
 */
var Overlay = {

  _types: {},

  // register a type to be created
  register: function(type, creatorFn) {
    Overlay._types[type] = creatorFn;
  },

  // create a type given the data
  // raise an exception if the type does not exist
  create: function(type, vis, data) {
    var t = Overlay._types[type];
    if (!t) {
      cdb.log.error("Overlay: " + type + " does not exist");
    }
    var widget = t(data, vis);
    widget.type = type;
    return widget;
  }
};

cdb.vis.Overlay = Overlay;

// layer factory
var Layers = {

  _types: {},

  register: function(type, creatorFn) {
    this._types[type] = creatorFn;
  },

  create: function(type, vis, data) {
    if (!type) {
      cdb.log.error("creating a layer without type");
      return null;
    }
    var t = this._types[type.toLowerCase()];

    var c = {};
    c.type = type;
    _.extend(c, data, data.options);
    return new t(vis, c);
  }

};

cdb.vis.Layers = Layers;

var Loader = cdb.vis.Loader = {

  queue: [],
  current: undefined,
  _script: null,
  head: null,

  get: function(url, callback) {
    if (!Loader._script) {
      Loader.current = callback;
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url + (~url.indexOf('?') ? '&' : '?') + 'callback=vizjson';
      script.async = true;
      Loader._script = script;
      if (!Loader.head) {
        Loader.head = document.getElementsByTagName('head')[0];
      }
      Loader.head.appendChild(script);
    } else {
      Loader.queue.push([url, callback]);
    }
  }

};

window.vizjson = function(data) {
  Loader.current && Loader.current(data);
  // remove script
  Loader.head.removeChild(Loader._script);
  Loader._script = null;
  // next element
  var a = Loader.queue.shift();
  if (a) {
    Loader.get(a[0], a[1]);
  }
};

/**
 * visulization creation
 */
var Vis = cdb.core.View.extend({

  initialize: function() {
    _.bindAll(this, 'loadingTiles', 'loadTiles');

    this.https = false;
    this.overlays = [];

    if (this.options.mapView) {
      this.mapView = this.options.mapView;
      this.map = this.mapView.map;
    }
  },


  load: function(data, options) {
    var self = this;
    if (typeof(data) === 'string') {
      var url = data;
      cdb.vis.Loader.get(url, function(data) {
        if (data) {
          self.load(data, options);
        } else {
          self.trigger('error', 'error fetching viz.json file');
        }
      });
      return this;
    }

    // configure the vis in http or https
    if (window && window.location.protocol && window.location.protocol === 'https:') {
      this.https = true;
    }

    if (data.https) {
      this.https = data.https;
    }

    var scrollwheel = true;

    options = options || {};

    this._applyOptions(data, options);
    this.cartodb_logo = options.cartodb_logo;
    scrollwheel       = options.scrollwheel;

    // map
    data.maxZoom || (data.maxZoom = 20);
    data.minZoom || (data.minZoom = 0);

    var mapConfig = {
      title: data.title,
      description: data.description,
      maxZoom: data.maxZoom,
      minZoom: data.minZoom,
      scrollwheel: scrollwheel,
      provider: data.map_provider
    };

    // if the boundaries are defined, we add them to the map
    if (data.bounding_box_sw && data.bounding_box_ne) {
      mapConfig.bounding_box_sw = data.bounding_box_sw;
      mapConfig.bounding_box_ne = data.bounding_box_ne;
    }
    if (data.bounds) {
      mapConfig.view_bounds_sw = data.bounds[0];
      mapConfig.view_bounds_ne = data.bounds[1];
    } else {
      var center = data.center;
      if (typeof(center) === "string") {
        center = $.parseJSON(center);
      }
      mapConfig.center = center || [0, 0];
      mapConfig.zoom = data.zoom == undefined ? 4: data.zoom;
    }

    var map = new cdb.geo.Map(mapConfig);
    this.map = map;
    this.updated_at = data.updated_at || new Date().getTime();

    var div = $('<div>').css({
      position: 'relative',
      width: '100%',
      height: '100%'
    });
    this.container = div;

    // Another div to prevent leaflet grabs the div
    var div_hack = $('<div>')
      .addClass("cartodb-map-wrapper")
      .css({
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%'
      });

    div.append(div_hack);
    this.$el.append(div);

    // Create the map
    var mapView = new cdb.geo.MapView.create(div_hack, map);
    this.mapView = mapView;

    // Add layers
    for(var i in data.layers) {
      var layerData = data.layers[i];
      this.loadLayer(layerData);
    }

    // set layer options
    if(options.sublayer_options) {

      var dataLayer = this.getLayers()[1];

      for(i = 0; i < options.sublayer_options.length; ++i) {
        var o = options.sublayer_options[i];
        var subLayer = dataLayer.getSubLayer(i);
        o.visible ? subLayer.show(): subLayer.hide();
      }
    }

    // Create the overlays
    for (var i in data.overlays) {
      this.addOverlay(data.overlays[i]);
    }

    _.defer(function() {
      self.trigger('done', self, self.getLayers());
    })

    return this;
  },

  addOverlay: function(overlay) {
    overlay.map = this.map;
    var v = Overlay.create(overlay.type, this, overlay);

    if (v) {
      // Save tiles loader view for later
      if (overlay.type == "loader") {
        this.loader = v;
      }

      this.addView(v);
      this.container.append(v.el);
      this.overlays.push(v);

      v.bind('clean', function() {
        for(var i in this.overlays) {
          var o = this.overlays[i];
          if (v.cid === o.cid) {
            this.overlays.splice(i, 1)
            return;
          }
        }
      }, this);

      // Set map position correctly taking into account
      // header height
      if (overlay.type == "header") {
        this.setMapPosition();
      }
    }
    return v;
  },

  // change vizjson based on options
  _applyOptions: function(vizjson, opt) {
    opt = opt || {};
    opt = _.defaults(opt, {
      search: false,
      title: false,
      description: false,
      tiles_loader: true,
      zoomControl: true,
      loaderControl: true,
      layer_selector: false,
      searchControl: false,
      infowindow: true
    });
    vizjson.overlays = vizjson.overlays || [];
    vizjson.layers = vizjson.layers || [];

    function search_overlay(name) {
      if (!vizjson.overlays) return null;
      for(var i = 0; i < vizjson.overlays.length; ++i) {
        if (vizjson.overlays[i].type === name) {
          return vizjson.overlays[i];
        }
      }
    }

    function remove_overlay(name) {
      if (!vizjson.overlays) return;
      for(var i = 0; i < vizjson.overlays.length; ++i) {
        if (vizjson.overlays[i].type === name) {
          vizjson.overlays.splice(i, 1);
          return;
        }
      }
    }

    this.infowindow = opt.infowindow;

    if(opt.https) {
      this.https = true;
    }

    // remove search if the vizualization does not contain it
    if (opt.search || opt.searchControl) {
      vizjson.overlays.push({
         type: "search"
      });
    }

    if (opt.title  || opt.description || opt.shareable) {
      vizjson.overlays.unshift({
        type: "header",
        shareable: opt.shareable ? true: false,
        url: vizjson.url
      });
    }

    if (opt.layer_selector) {
      vizjson.overlays.push({
        type: "layer_selector"
      });
    }

    if (!opt.title) {
      vizjson.title = null;
    }

    if (!opt.description) {
      vizjson.description = null;
    }

    if (!opt.tiles_loader) {
      remove_overlay('loader');
    }

    if (!opt.zoomControl) {
      remove_overlay('zoom');
    }

    if (!opt.loaderControl) {
      remove_overlay('loader');
    }

    // if bounds are present zoom and center will not taken into account
    if (opt.zoom !== undefined) {
      vizjson.zoom = parseFloat(opt.zoom);
      vizjson.bounds = null;
    }

    if (opt.center_lat !== undefined) {
      vizjson.center = [parseFloat(opt.center_lat), parseFloat(opt.center_lon)];
      vizjson.bounds = null;
    }

    if (opt.center !== undefined) {
      vizjson.center = opt.center;
      vizjson.bounds = null;
    }

    if (opt.sw_lat !== undefined) {
      vizjson.bounds = [
        [parseFloat(opt.sw_lat), parseFloat(opt.sw_lon)],
        [parseFloat(opt.ne_lat), parseFloat(opt.ne_lon)],
      ];
    }

    if (vizjson.layers.length > 1) {
      if (opt.sql) {
        vizjson.layers[1].options.query = opt.sql;
      }
      if (opt.style) {
        vizjson.layers[1].options.tile_style = opt.style;
      }

      vizjson.layers[1].options.no_cdn = opt.no_cdn;
    }

  },

  // Set map top position taking into account header height
  setMapPosition: function() {
    var header_h = this.$el.find(".cartodb-header:not(.cartodb-popup)").outerHeight();

    this.$el
      .find("div.cartodb-map-wrapper")
      .css("top", header_h);

    this.mapView.invalidateSize();
  },

  createLayer: function(layerData, opts) {
    var layerModel = Layers.create(layerData.type || layerData.kind, this, layerData);
    return this.mapView.createLayer(layerModel);
  },

  _getSqlApi: function(attrs) {
    attrs = attrs || {};
    var port = attrs.sql_api_port
    var domain = attrs.sql_api_domain + (port ? ':' + port: '')
    var protocol = attrs.sql_api_protocol;
    var version = 'v1';
    if (domain.indexOf('cartodb.com') !== -1) {
      protocol = 'http';
      domain = "cartodb.com";
      version = 'v2';
    }

    var sql = new cartodb.SQL({
      user: attrs.user_name,
      protocol: protocol,
      host: domain,
      version: version
    });

    return sql;
  },

  addInfowindow: function(layerView) {

    if(!layerView.containInfowindow || !layerView.containInfowindow()) {
      return;
    }

    var mapView = this.mapView;
    var eventType = 'featureClick';
    var infowindow = null;

    // activate interactivity for layers with infowindows
    for(var i = 0; i < layerView.getLayerCount(); ++i) {
      var interactivity = layerView.getSubLayer(i).get('interactivity');
      // if interactivity is not enabled we can't enable it
      if(layerView.getInfowindowData(i) && interactivity && interactivity.indexOf('cartodb_id') !== -1) {
        if(!infowindow) {
          infowindow = Overlay.create('infowindow', this, layerView.getInfowindowData(i), true);
          mapView.addInfowindow(infowindow);
        }
        layerView.setInteraction(i, true);
      }
    }

    if(!infowindow) {
      return;
    }

    var sql = this._getSqlApi(layerView.options)


    // if the layer has no infowindow just pass the interaction
    // data to the infowindow
    layerView.bind(eventType, function(e, latlng, pos, data, layer) {
        var cartodb_id = data.cartodb_id
        var infowindowFields = layerView.getInfowindowData(layer)
        var fields = infowindowFields.fields;
        // Send request
        sql.execute("select {{{fields}}} from ({{{sql}}}) as _cartodbjs_alias where cartodb_id = {{{ cartodb_id }}}", {
          fields: _.pluck(fields, 'name').join(','),
          cartodb_id: cartodb_id,
          sql: layerView.getQuery(layer)
        })
        .done(function(interact_data) {
          if (interact_data.rows.length == 0 ) return;
          interact_data = interact_data.rows[0];
          if (infowindowFields) {
            var render_fields = [];
            var fields = infowindowFields.fields;
            for(var j = 0; j < fields.length; ++j) {
              var f = fields[j];
              var value = String(interact_data[f.name]);
              if(interact_data[f.name] != undefined && value != "") {
                render_fields.push({
                  title: f.title ? f.name : null,
                  value: interact_data[f.name],
                  index: j ? j : null
                });
              }
            }

            // manage when there is no data to render
            if (render_fields.length === 0) {
              render_fields.push({
                title: null,
                value: 'No data available',
                index: j ? j : null,
                type: 'empty'
              });
            }
            content = render_fields;
          }

          infowindow.model.set({
            content:  {
              fields: content,
              data: interact_data
            }
          })
          infowindow.adjustPan();
        })
        .error(function() {
          infowindow.setError();
        })

        infowindow.model.set('template', infowindowFields.template);

        // Show infowindow with loading state
        infowindow
          .setLatLng(latlng)
          .setLoading()
          .showInfowindow();
    });

    var hovers = [];

    layerView.bind('featureOver', function(e, latlon, pxPos, data, layer) {
      hovers[layer] = 1;
      if(_.any(hovers))
        mapView.setCursor('pointer');
    });

    layerView.bind('featureOut', function(m, layer) {
      hovers[layer] = 0;
      if(!_.any(hovers))
        mapView.setCursor('auto');
    });

    layerView.infowindow = infowindow.model;
  },

  loadLayer: function(layerData, opts) {
    var map = this.map;
    var mapView = this.mapView;
    //layerData.type = layerData.kind;
    var layer_cid = map.addLayer(Layers.create(layerData.type || layerData.kind, this, layerData), opts);

    var layerView = mapView.getLayerByCid(layer_cid);

    // add the associated overlays
    if(layerView.containInfowindow && layerView.containInfowindow()) {
      this.addInfowindow(layerView);
    }

    if (layerView) {
      layerView.bind('loading', this.loadingTiles);
      layerView.bind('load',    this.loadTiles);
    }

    return layerView;

  },

  loadingTiles: function() {
    if (this.loader) {
      this.loader.show()
    }
  },

  loadTiles: function() {
    if (this.loader) {
      this.loader.hide();
    }
  },

  error: function(fn) {
    return this.bind('error', fn);
  },

  done: function(fn) {
    return this.bind('done', fn);
  },

  // public methods
  //

  // get the native map used behind the scenes
  getNativeMap: function() {
    return this.mapView.getNativeMap();
  },

  // returns an array of layers
  getLayers: function() {
    var self = this;
    return this.map.layers.map(function(layer) {
      return self.mapView.getLayerByCid(layer.cid);
    });
  },

  getOverlays: function() {
    return this.overlays;
  },

  getOverlay: function(type) {
    return _(this.overlays).find(function(v) {
      return v.type == type;
    });
  }

});

cdb.vis.Vis = Vis;

})();

(function() {

// map zoom control
cdb.vis.Overlay.register('zoom', function(data, vis) {

  if(!data.template) {
    vis.trigger('error', 'zoom template is empty')
    return;
  }
  var zoom = new cdb.geo.ui.Zoom({
    model: data.map,
    template: cdb.core.Template.compile(data.template)
  });

  return zoom.render();
});

// Tiles loader
cdb.vis.Overlay.register('loader', function(data) {

  var tilesLoader = new cdb.geo.ui.TilesLoader({
    template: cdb.core.Template.compile(data.template)
  });

  return tilesLoader.render();
});

// Header to show informtion (title and description)
cdb.vis.Overlay.register('header', function(data, vis) {
  var MAX_SHORT_DESCRIPTION_LENGTH = 100;

  // Add the complete url for facebook and twitter
  if (location.href) {
    data.share_url = encodeURIComponent(location.href);
  } else {
    data.share_url = data.url;
  }

  var template = cdb.core.Template.compile(
    data.template || "\
      {{#title}}<h1><a href='#' onmousedown=\"window.open('{{url}}')\">{{title}}</a></h1>{{/title}}\
      {{#description}}<p>{{description}}</p>{{/description}}\
      {{#shareable}}\
        <div class='social'>\
          <a class='facebook' target='_blank'\
            href='http://www.facebook.com/sharer.php?u={{share_url}}&text=Map of {{title}}: {{description}}'>F</a>\
          <a class='twitter' href='https://twitter.com/share?url={{share_url}}&text=Map of {{title}}: {{descriptionShort}}... '\
           target='_blank'>T</a>\
          </div>\
      {{/shareable}}\
    ",
    data.templateType || 'mustache'
  );

  var titleLength = data.map.get('title') ? data.map.get('title').length : 0;
  var descLength = data.map.get('description') ? data.map.get('description').length : 0;

  var maxDescriptionLength = MAX_SHORT_DESCRIPTION_LENGTH - titleLength;
  var description = data.map.get('description');
  var descriptionShort = description;

  if(descLength > maxDescriptionLength) {
    var descriptionShort = description.substr(0, maxDescriptionLength);
    // @todo (@johnhackworth): Improvement; Not sure if there's someway of doing thins with a regexp
    descriptionShort = descriptionShort.split(' ');
    descriptionShort.pop();
    descriptionShort = descriptionShort.join(' ');
  }

  var header = new cdb.geo.ui.Header({
    title: data.map.get('title'),
    description: description,
    descriptionShort: descriptionShort,
    url: data.url,
    share_url: data.share_url,
    shareable: (data.shareable == "false" || !data.shareable) ? null : data.shareable,
    template: template
  });

  return header.render();
});

// infowindow
cdb.vis.Overlay.register('infowindow', function(data, vis) {

  if (_.size(data.fields) == 0) {
    return null;
  }

  var infowindowModel = new cdb.geo.ui.InfowindowModel({
    fields: data.fields,
    template_name: data.template_name
  });

  var templateType = data.templateType || 'mustache';

  var infowindow = new cdb.geo.ui.Infowindow({
     model: infowindowModel,
     mapView: vis.mapView,
     template: new cdb.core.Template({ template: data.template, type: templateType}).asFunction()
  });

  return infowindow;
});


// layer_selector
cdb.vis.Overlay.register('layer_selector', function(data, vis) {

  var template = cdb.core.Template.compile(
    data.template || '\
      <a href="#/change-visibility" class="layers">Visible layers<div class="count"></div></a>\
      ',
    data.templateType || 'underscore'
  );

  var dropdown_template = cdb.core.Template.compile(
    data.template || '\
      <ul></ul><div class="tail"><span class="border"></span></div>\
      ',
    data.templateType || 'underscore'
  );

  var layerSelector = new cdb.geo.ui.LayerSelector({
    mapView: vis.mapView,
    template: template,
    dropdown_template: dropdown_template,
    layer_names: data.layer_names
  });


  return layerSelector.render();
});

// search content
cdb.vis.Overlay.register('search', function(data, vis) {

  var template = cdb.core.Template.compile(
    data.template || '\
      <form>\
        <span class="loader"></span>\
        <input type="text" class="text" value="" />\
        <input type="submit" class="submit" value="" />\
      </form>\
    ',
    data.templateType || 'mustache'
  );

  var search = new cdb.geo.ui.Search({
    template: template,
    model: vis.map
  });

  return search.render();
});

// tooltip
cdb.vis.Overlay.register('tooltip', function(data, vis) {
  var layer;
  var layers = vis.getLayers();
  if(layers.length > 1) {
    layer = layers[1];
  }
  data.layer = layer;
  var tooltip = new cdb.geo.ui.Tooltip(data);
  return tooltip;

});

cdb.vis.Overlay.register('infobox', function(data, vis) {
  var layer;
  var layers = vis.getLayers();
  if(layers.length > 1) {
    layer = layers[1];
  }
  data.layer = layer;
  var infobox = new cdb.geo.ui.InfoBox(data);
  return infobox;

});

})();

(function() {

var Layers = cdb.vis.Layers;

/*
 *  if we are using http and the tiles of base map need to be fetched from
 *  https try to fix it
 */

var HTTPS_TO_HTTP = {
  'https://dnv9my2eseobd.cloudfront.net/': 'http://a.tiles.mapbox.com/',
  'https://maps.nlp.nokia.com/': 'http://maps.nlp.nokia.com/',
  'https://tile.stamen.com/': 'http://tile.stamen.com/'
};

function transformToHTTP(tilesTemplate) {
  for(var url in HTTPS_TO_HTTP) {
    if(tilesTemplate.indexOf(url) !== -1) {
      return tilesTemplate.replace(url, HTTPS_TO_HTTP[url])
    }
  }
  return tilesTemplate;
}

Layers.register('tilejson', function(vis, data) {
  var url = data.tiles[0];
  url = vis.https ? url: transformToHTTP(url);
  return new cdb.geo.TileLayer({
    urlTemplate: url
  });
});

Layers.register('tiled', function(vis, data) {
  var url = data.urlTemplate;
  url = vis.https ? url: transformToHTTP(url);
  data.urlTemplate = url;
  return new cdb.geo.TileLayer(data);
});

Layers.register('gmapsbase', function(vis, data) {
  return new cdb.geo.GMapsBaseLayer(data);
});

Layers.register('plain', function(vis, data) {
  return new cdb.geo.PlainLayer(data);
});

Layers.register('background', function(vis, data) {
  return new cdb.geo.PlainLayer(data);
});


function normalizeOptions(vis, data) {
  if(data.infowindow && data.infowindow.fields) {
    if(data.interactivity) {
      if(data.interactivity.indexOf('cartodb_id') === -1) {
        data.interactivity = data.interactivity + ",cartodb_id";
      }
    } else {
      data.interactivity = 'cartodb_id';
    }
  }
  // if https is forced
  if(vis.https) {
    data.tiler_protocol = 'https';
    data.tiler_port = 443;
  }
  data.cartodb_logo = vis.cartodb_logo == undefined ? data.cartodb_logo : vis.cartodb_logo;
}

var cartoLayer = function(vis, data) {
  normalizeOptions(vis, data);
  // if sublayers are included that means a layergroup should
  // be created
  if(data.sublayers) {
    data.type = 'layergroup';
    return new cdb.geo.CartoDBGroupLayer(data);
  }
  return new cdb.geo.CartoDBLayer(data);
};

Layers.register('cartodb', cartoLayer);
Layers.register('carto', cartoLayer);

Layers.register('layergroup', function(vis, data) {
  normalizeOptions(vis, data);
  return new cdb.geo.CartoDBGroupLayer(data);
});

})();
/**
 * public api for cartodb
 */

(function() {


  function _Promise() {

  }
  _.extend(_Promise.prototype,  Backbone.Events, {
    done: function(fn) {
      return this.bind('done', fn);
    },
    error: function(fn) {
      return this.bind('error', fn);
    }
  });

  cdb._Promise = _Promise;

  var _requestCache = {};

  /**
   * compose cartodb url
   */
  function cartodbUrl(opts) {
    var host = opts.host || 'cartodb.com';
    var protocol = opts.protocol || 'https';
    return protocol + '://' + opts.user + '.' + host + '/api/v1/viz/' + opts.table + '/viz.json';
  }

  /**
   * given layer params fetchs the layer json
   */
  function _getLayerJson(layer, callback) {
    var url = null;
    if(layer.layers !== undefined || ((layer.kind || layer.type) !== undefined)) {
      // layer object contains the layer data
      _.defer(function() { callback(layer); });
      return;
    } else if(layer.table !== undefined && layer.user !== undefined) {
      // layer object points to cartodbjson
      url = cartodbUrl(layer);
    } else if(layer.indexOf && layer.indexOf('http') === 0) {
      // fetch from url
      url = layer;
    }
    if(url) {
      cdb.vis.Loader.get(url, callback);
    } else {
      _.defer(function() { callback(null); });
    }
  }

  /**
   * create a layer for the specified map
   *
   * @param map should be a L.Map or google.maps.Map object
   * @param layer should be an url or a javascript object with the data to create the layer
   * @param options layer options
   *
   */

  cartodb.createLayer = function(map, layer, options, callback) {

    var promise = new _Promise();
    var layerView, MapType;
    if(map === undefined) {
      throw new TypeError("map should be provided");
    }
    if(layer === undefined) {
      throw new TypeError("layer should be provided");
    }
    var args = arguments,
    fn = args[args.length -1];
    if(_.isFunction(fn)) {
      callback = fn;
    }

    promise.addTo = function(map, position) {
      promise.on('done', function() {
        MapType.addLayerToMap(layerView, map, position);
      });
      return promise;
    };

    _getLayerJson(layer, function(visData) {

      var layerData;

      if(!visData) {
        promise.trigger('error');
        return;
      }
      // extract layer data from visualization data
      if(visData.layers) {
        if(visData.layers.length < 2) {
          promise.trigger('error', "visualization file does not contain layer info");
        }
        layerData = visData.layers[1];
      } else {
        layerData = visData;
      }

      if(!layerData) {
        promise.trigger('error');
        return;
      }


      // update options
      if(options && !_.isFunction(options)) {
        layerData.options = layerData.options || {};
        _.extend(layerData.options, options);
      }

      options = options || {};
      options = _.defaults(options, {
        infowindow: true,
        https: false
      })

      // check map type
      // TODO: improve checking
      if(typeof(map.overlayMapTypes) !== "undefined") {
        MapType = cdb.geo.GoogleMapsMapView;
        // check if leaflet is loaded globally
      } else if(map instanceof L.Map || (window.L && map instanceof window.L.Map)) {
        MapType = cdb.geo.LeafletMapView;
      } else {
        promise.trigger('error', "cartodb.js can't guess the map type");
        return promise;
      }

      // create a dummy viz
      var viz = map.viz;
      if(!viz) {
        var mapView = new MapType({
          map_object: map,
          map: new cdb.geo.Map()
        });

        map.viz = viz = new cdb.vis.Vis({
          mapView: mapView
        });

        viz.updated_at = visData.updated_at;
        viz.https = options.https;
      }

      layerView = viz.createLayer(layerData, { no_base_layer: true });
      if(options.infowindow) {
        viz.addInfowindow(layerView);
      }
      callback && callback(layerView);
      promise.trigger('done', layerView);
    });

    return promise;

  };


})();

;(function() {

  var root = this;

  root.cartodb = root.cartodb || {};

  function SQL(options) {
    if(cartodb === this || window === this) {
      return new SQL(options);
    }
    if(!options.user) {
      throw new Error("user should be provided");
    }
    var loc = new String(window.location.protocol);
    loc = loc.slice(0, loc.length - 1);
    if(loc == 'file') {
      loc = 'https';
    }

    this.ajax = options.ajax || (typeof(jQuery) !== 'undefined' ? jQuery.ajax: reqwest);
    if(!this.ajax) {
      throw new Error("jQuery or reqwest should be loaded");
    }

    this.options = _.defaults(options, {
      version: 'v2',
      protocol: loc,
      jsonp: typeof(jQuery) !== 'undefined' ? !jQuery.support.cors: false
    })
  }

  SQL.prototype._host = function() {
    var opts = this.options;
    if(opts && opts.completeDomain) {
      return opts.completeDomain + '/api/' +  opts.version + '/sql'
    } else {
      var host = opts.host || 'cartodb.com';
      var protocol = opts.protocol || 'https';

      return protocol + '://' + opts.user + '.' + host + '/api/' +  opts.version + '/sql';
    }
  }

  /**
   * var sql = new SQL('cartodb_username');
   * sql.execute("select * form {table} where id = {id}", {
   *    table: 'test',
   *    id: '1'
   * })
   */
  SQL.prototype.execute = function(sql, vars, options, callback) {
    var promise = new cartodb._Promise();
    if(!sql) {
      throw new TypeError("sql should not be null");
    }
    // setup arguments
    var args = arguments,
    fn = args[args.length -1];
    if(_.isFunction(fn)) {
      callback = fn;
    }
    options = _.defaults(options || {}, this.options);
    var params = {
      type: 'get',
      dataType: 'json',
      crossDomain: true
    };

    if(options.jsonp) {
      delete params.crossDomain;
      params.dataType = 'jsonp';
    }

    if(options.cache) {
      params.cache = options.cache; 
    }

    // Substitute mapnik tokens
    // resolution at zoom level 0
    var res = '156543.03515625';
    // full webmercator extent
    var ext = 'ST_MakeEnvelope(-20037508.5,-20037508.5,20037508.5,20037508.5,3857)';
    sql = sql.replace('!bbox!', ext)
             .replace('!pixel_width!', res)
             .replace('!pixel_height!', res);

    // create query
    var query = Mustache.render(sql, vars);
    var q = 'q=' + encodeURIComponent(query);

    // request params
    var reqParams = ['format', 'dp', 'api_key'];
    for(var i in reqParams) {
      var r = reqParams[i];
      var v = options[r];
      if(v) {
        q += '&' + r + "=" + v;
      }
    }

    var isGetRequest = options.type == 'get' || params.type == 'get';
    // generate url depending on the http method
    params.url = this._host() ;
    if(isGetRequest) {
      params.url += '?' + q
    } else {
      params.data = q;
    }

    // wrap success and error functions
    var success = options.success;
    var error = options.error;
    if(success) delete options.success;
    if(error) delete error.success;

    params.error = function(resp) {
      var res = resp.responseText || resp.response;
      var errors = res && JSON.parse(res);
      promise.trigger('error', errors && errors.error, resp)
      if(error) error(resp);
    }
    params.success = function(resp, status, xhr) {
      // manage rewest
      if(status == undefined) {
        status = resp.status;
        xhr = resp;
        resp = JSON.parse(resp.response);
      }
      promise.trigger('done', resp, status, xhr);
      if(success) success(resp, status, xhr);
      if(callback) callback(resp);
    }

    // call ajax
    delete options.jsonp;
    this.ajax(_.extend(params, options));
    return promise;
  }

  SQL.prototype.getBounds = function(sql, vars, options, callback) {
      var promise = new cartodb._Promise();
      var args = arguments,
      fn = args[args.length -1];
      if(_.isFunction(fn)) {
        callback = fn;
      }
      var s = 'SELECT ST_XMin(ST_Extent(the_geom)) as minx,' +
              '       ST_YMin(ST_Extent(the_geom)) as miny,'+
              '       ST_XMax(ST_Extent(the_geom)) as maxx,' +
              '       ST_YMax(ST_Extent(the_geom)) as maxy' +
              ' from ({{{ sql }}}) as subq';
      sql = Mustache.render(sql, vars);
      this.execute(s, { sql: sql }, options)
        .done(function(result) {
          if (result.rows && result.rows.length > 0 && result.rows[0].maxx != null) {
            var c = result.rows[0];
            var minlat = -85.0511;
            var maxlat =  85.0511;
            var minlon = -179;
            var maxlon =  179;

            var clamp = function(x, min, max) {
              return x < min ? min : x > max ? max : x;
            }

            var lon0 = clamp(c.maxx, minlon, maxlon);
            var lon1 = clamp(c.minx, minlon, maxlon);
            var lat0 = clamp(c.maxy, minlat, maxlat);
            var lat1 = clamp(c.miny, minlat, maxlat);

            var bounds = [[lat0, lon0], [lat1, lon1]];
            promise.trigger('done', bounds);
            callback && callback(bounds);
          }
        })
        .error(function(err) {
          promise.trigger('error', err);
        })

      return promise;

  }

  /**
   * var people_under_10 = sql
   *    .table('test')
   *    .columns(['age', 'column2'])
   *    .filter('age < 10')
   *    .limit(15)
   *    .order_by('age')
   *
   *  people_under_10(function(results) {
   *  })
   */

  SQL.prototype.table = function(name) {

    var _name = name;
    var _filters;
    var _columns = [];
    var _limit;
    var _order;
    var _orderDir;
    var _sql = this;

    function _table() {
      _table.fetch.apply(_table, arguments);
    }

    _table.fetch = function(vars) {
      vars = vars || {}
      var args = arguments,
      fn = args[args.length -1];
      if(_.isFunction(fn)) {
        callback = fn;
        if(args.length === 1) vars = {};
      }
      _sql.execute(_table.sql(), vars, callback);
    }

    _table.sql = function() {
      var s = "select"
      if(_columns.length) {
        s += ' ' + _columns.join(',') + ' '
      } else {
        s += ' * '
      }

      s += "from " + _name;

      if(_filters) {
        s += " where " + _filters;
      }
      if(_limit) {
        s += " limit " + _limit;
      }
      if(_order) {
        s += " order by " + _order;
      }
      if(_orderDir) {
        s += ' ' + _orderDir;
      }

      return s;
    }

    _table.filter = function(f) {
      _filters = f;
      return _table;
    }

    _table.order_by= function(o) {
      _order = o;
      return _table;
    }
    _table.asc = function() {
      _orderDir = 'asc'
      return _table;
    }

    _table.desc = function() {
      _orderDir = 'desc'
      return _table;
    }

    _table.columns = function(c) {
      _columns = c;
      return _table;
    }

    _table.limit = function(l) {
      _limit = l;
      return _table;
    }

    return _table;

  }

  /*
   * sql.filter(sql.f().distance('< 10km')
   */
  /*cartodb.SQL.geoFilter = function() {
    var _sql;
    function f() {}

    f.distance = function(qty) {
      qty.replace('km', '*1000')
      _sql += 'st_distance(the_geom) ' + qty
    }
    f.or = function() {
    }

    f.and = function() {
    }
    return f;
  }
  */

  root.cartodb.SQL = SQL;

})();
(function() {

  cartodb.createVis = function(el, vizjson, options, callback) {

    if (!el) {
      throw new TypeError("a DOM element should be provided");
    }

    var
    args = arguments,
    fn   = args[args.length -1];

    if (_.isFunction(fn)) {
      callback = fn;
    }

    el = (typeof el === 'string' ? document.getElementById(el) : el);

    var vis = new cartodb.vis.Vis({ el: el });

    if (vizjson) {

      vis.load(vizjson, options);

      if (callback) {
        vis.done(callback);
      }

    }

    return vis;

  };

})();


    cdb.$ = $;
    cdb.L = L;
    cdb.Mustache = Mustache;
    cdb.Backbone = Backbone;
    cdb._ = _;

  })();




  ;
  for(var i in __prev) {
    // keep it at global context if it didn't exist
    if(__prev[i]) {
      window[i] = __prev[i];
    }
  }


})();
