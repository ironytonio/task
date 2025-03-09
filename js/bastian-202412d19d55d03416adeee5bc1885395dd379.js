var Bastian=function(e){var t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={i:r,l:!1,exports:{}}
return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var r=Object.create(null)
if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i))
return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict"
n.r(t)
var r=n(1),i=n.n(r),o=n(5),s=n.n(o),a=(n(7),n(8),n(22),n(59),n(69)),c=n(54),l=n(70),u=n(71)
const h={"authoring-toolkit/misc":()=>n(108),"authoring-toolkit/ui":()=>n(220),feed:()=>n(214),"feed/authoring/card":()=>n(218).exposable,"feed/items/register":()=>n(213).registerExternalItemFactory,renderer:()=>n(87),version:()=>n(188)},d=c.Globals.document
function p(e){try{n(216).launch(e)}catch(t){Object(l.triggerDomEvent)(a.LAUNCH_FAILED,d),n(20).error("Impossible to launch Bastian",t,t.stack)}}p.require=function(e){return i()(e)&&e in h?h[e]():n(e)},Object.defineProperty(p,"version",{get:h.version}),c.Globals.bstn&&Object.defineProperty(p,"lazy",{get:c.Globals.bstn.lazy}),Object(l.triggerDomEvent)(a.APP_LOADED,d),u.GloboAB.setApplicationAsLoaded(),s()(c.Globals.globalWebdeps)&&!window.isNoLoadPlayerFeed&&c.Globals.globalWebdeps("player"),t.default=p},function(e,t,n){var r=n(2),i=n(3),o=n(4),s="[object String]"
e.exports=function(e){return"string"==typeof e||!i(e)&&o(e)&&r(e)==s}},function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},function(e,t){var n=Array.isArray
e.exports=n},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var r=n(2),i=n(6),o="[object AsyncFunction]",s="[object Function]",a="[object GeneratorFunction]",c="[object Proxy]"
e.exports=function(e){if(!i(e))return!1
var t=r(e)
return t==s||t==a||t==o||t==c}},function(e,t){e.exports=function(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}},function(e,t,n){},function(e,t,n){"use strict"
n.r(t),n.d(t,"$OnDemandSource",(function(){return h}))
var r=n(9),i=n.n(r),o=n(5),s=n.n(o),a=n(10),c=n.n(a),l=n(15),u=n(21)
class h{constructor(e){this.buffer=[],this.loadLocked=!1,this.nextFetch=null,this.nextPage=null,this.isFetchNeeded=()=>this.whenToFetch(),this.unlock=e=>(this.loadLocked=!1,e),this.isEnded=()=>this.whenToComplete()
const t=this
this.stream=c.a.create({start(e){t.listener=e},stop(){t.listener=null}}),e&&this.store(e)}store(e){const t=Object(u.castArray)(e).map(l.PostIndex.filter).filter(e=>e)
return this.buffer.push(...t),t.length}isEmpty(){return 0===this.buffer.length}setNextFetch(e){this.nextFetch=i()(e)?e:null}setNextPage(e){this.nextPage=i()(e)?e:null}request(e){if(this.listener){const t=this.listener,n=this.isEmpty()
n&&this.isEnded()?t.complete():(e&&!0===e.preventFetch&&!n||!this.isFetchNeeded()||this.fetch(e),n||t.next(this.buffer.shift()))}}whenToFetch(){throw new Error("Not implemented")}fetch(e){if(!1===this.loadLocked)return this.loadLocked=!0,this.howToFetch(e)}howToFetch(e){throw new Error("Not implemented")}whenToComplete(){throw new Error("Not implemented")}saveAndResumeStream(e,t){const n=this.isEmpty()
this.store(e),s()(t)&&t(e),n&&setTimeout(()=>{this.request()},100)}}},function(e,t,n){var r=n(2),i=n(4),o="[object Number]"
e.exports=function(e){return"number"==typeof e||i(e)&&r(e)==o}},function(e,t,n){"use strict"
var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)}
return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(11),o={}
function s(){}function a(e){for(var t=e.length,n=Array(t),r=0;r<t;++r)n[r]=e[r]
return n}function c(e,t,n){try{return e.f(t)}catch(r){return n._e(r),o}}t.NO=o
var l={_n:s,_e:s,_c:s}
function u(e){e._start=function(e){e.next=e._n,e.error=e._e,e.complete=e._c,this.start(e)},e._stop=e.stop}t.NO_IL=l
var h=function(){function e(e,t){this._stream=e,this._listener=t}return e.prototype.unsubscribe=function(){this._stream._remove(this._listener)},e}(),d=function(){function e(e){this._listener=e}return e.prototype.next=function(e){this._listener._n(e)},e.prototype.error=function(e){this._listener._e(e)},e.prototype.complete=function(){this._listener._c()},e}(),p=function(){function e(e){this.type="fromObservable",this.ins=e,this.active=!1}return e.prototype._start=function(e){this.out=e,this.active=!0,this._sub=this.ins.subscribe(new d(e)),this.active||this._sub.unsubscribe()},e.prototype._stop=function(){this._sub&&this._sub.unsubscribe(),this.active=!1},e}(),f=function(){function e(e){this.type="merge",this.insArr=e,this.out=o,this.ac=0}return e.prototype._start=function(e){this.out=e
var t=this.insArr,n=t.length
this.ac=n
for(var r=0;r<n;r++)t[r]._add(this)},e.prototype._stop=function(){for(var e=this.insArr,t=e.length,n=0;n<t;n++)e[n]._remove(this)
this.out=o},e.prototype._n=function(e){var t=this.out
t!==o&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){if(--this.ac<=0){var e=this.out
if(e===o)return
e._c()}},e}(),m=function(){function e(e,t,n){this.i=e,this.out=t,this.p=n,n.ils.push(this)}return e.prototype._n=function(e){var t=this.p,n=this.out
if(n!==o&&t.up(e,this.i)){for(var r=t.vals,i=r.length,s=Array(i),a=0;a<i;++a)s[a]=r[a]
n._n(s)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.p
e.out!==o&&0==--e.Nc&&e.out._c()},e}(),g=function(){function e(e){this.type="combine",this.insArr=e,this.out=o,this.ils=[],this.Nc=this.Nn=0,this.vals=[]}return e.prototype.up=function(e,t){var n=this.vals[t],r=this.Nn?n===o?--this.Nn:this.Nn:0
return this.vals[t]=e,0===r},e.prototype._start=function(e){this.out=e
var t=this.insArr,n=this.Nc=this.Nn=t.length,r=this.vals=new Array(n)
if(0===n)e._n([]),e._c()
else for(var i=0;i<n;i++)r[i]=o,t[i]._add(new m(i,e,this))},e.prototype._stop=function(){for(var e=this.insArr,t=e.length,n=this.ils,r=0;r<t;r++)e[r]._remove(n[r])
this.out=o,this.ils=[],this.vals=[]},e}(),v=function(){function e(e){this.type="fromArray",this.a=e}return e.prototype._start=function(e){for(var t=this.a,n=0,r=t.length;n<r;n++)e._n(t[n])
e._c()},e.prototype._stop=function(){},e}(),b=function(){function e(e){this.type="fromPromise",this.on=!1,this.p=e}return e.prototype._start=function(e){var t=this
this.on=!0,this.p.then((function(n){t.on&&(e._n(n),e._c())}),(function(t){e._e(t)})).then(s,(function(e){setTimeout((function(){throw e}))}))},e.prototype._stop=function(){this.on=!1},e}(),y=function(){function e(e){this.type="periodic",this.period=e,this.intervalID=-1,this.i=0}return e.prototype._start=function(e){var t=this
this.intervalID=setInterval((function(){e._n(t.i++)}),this.period)},e.prototype._stop=function(){-1!==this.intervalID&&clearInterval(this.intervalID),this.intervalID=-1,this.i=0},e}(),E=function(){function e(e,t){this.type="debug",this.ins=e,this.out=o,this.s=s,this.l="","string"==typeof t?this.l=t:"function"==typeof t&&(this.s=t)}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=this.s,r=this.l
if(n!==s)try{n(e)}catch(i){t._e(i)}else r?console.log(r+":",e):console.log(e)
t._n(e)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),_=function(){function e(e,t){this.type="drop",this.ins=t,this.out=o,this.max=e,this.dropped=0}return e.prototype._start=function(e){this.out=e,this.dropped=0,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
t!==o&&this.dropped++>=this.max&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),O=function(){function e(e,t){this.out=e,this.op=t}return e.prototype._n=function(){this.op.end()},e.prototype._e=function(e){this.out._e(e)},e.prototype._c=function(){this.op.end()},e}(),w=function(){function e(e,t){this.type="endWhen",this.ins=t,this.out=o,this.o=e,this.oil=l}return e.prototype._start=function(e){this.out=e,this.o._add(this.oil=new O(e,this)),this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.o._remove(this.oil),this.out=o,this.oil=l},e.prototype.end=function(){var e=this.out
e!==o&&e._c()},e.prototype._n=function(e){var t=this.out
t!==o&&t._n(e)},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){this.end()},e}(),S=function(){function e(e,t){this.type="filter",this.ins=t,this.out=o,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=c(this,e,t)
n!==o&&n&&t._n(e)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),I=function(){function e(e,t){this.out=e,this.op=t}return e.prototype._n=function(e){this.out._n(e)},e.prototype._e=function(e){this.out._e(e)},e.prototype._c=function(){this.op.inner=o,this.op.less()},e}(),x=function(){function e(e){this.type="flatten",this.ins=e,this.out=o,this.open=!0,this.inner=o,this.il=l}return e.prototype._start=function(e){this.out=e,this.open=!0,this.inner=o,this.il=l,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.inner!==o&&this.inner._remove(this.il),this.out=o,this.open=!0,this.inner=o,this.il=l},e.prototype.less=function(){var e=this.out
e!==o&&(this.open||this.inner!==o||e._c())},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=this.inner,r=this.il
n!==o&&r!==l&&n._remove(r),(this.inner=e)._add(this.il=new I(t,this))}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){this.open=!1,this.less()},e}(),C=function(){function e(e,t,n){var r=this
this.type="fold",this.ins=n,this.out=o,this.f=function(t){return e(r.acc,t)},this.acc=this.seed=t}return e.prototype._start=function(e){this.out=e,this.acc=this.seed,e._n(this.acc),this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o,this.acc=this.seed},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=c(this,e,t)
n!==o&&t._n(this.acc=n)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),T=function(){function e(e){this.type="last",this.ins=e,this.out=o,this.has=!1,this.val=o}return e.prototype._start=function(e){this.out=e,this.has=!1,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o,this.val=o},e.prototype._n=function(e){this.has=!0,this.val=e},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&(this.has?(e._n(this.val),e._c()):e._e(new Error("last() failed because input stream completed")))},e}(),j=function(){function e(e,t){this.type="map",this.ins=t,this.out=o,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=c(this,e,t)
n!==o&&t._n(n)}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),A=function(){function e(e){this.type="remember",this.ins=e,this.out=o}return e.prototype._start=function(e){this.out=e,this.ins._add(e)},e.prototype._stop=function(){this.ins._remove(this.out),this.out=o},e}(),P=function(){function e(e,t){this.type="replaceError",this.ins=t,this.out=o,this.f=e}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
t!==o&&t._n(e)},e.prototype._e=function(e){var t=this.out
if(t!==o)try{this.ins._remove(this),(this.ins=this.f(e))._add(this)}catch(n){t._e(n)}},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),N=function(){function e(e,t){this.type="startWith",this.ins=e,this.out=o,this.val=t}return e.prototype._start=function(e){this.out=e,this.out._n(this.val),this.ins._add(e)},e.prototype._stop=function(){this.ins._remove(this.out),this.out=o},e}(),R=function(){function e(e,t){this.type="take",this.ins=t,this.out=o,this.max=e,this.taken=0}return e.prototype._start=function(e){this.out=e,this.taken=0,this.max<=0?e._c():this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=o},e.prototype._n=function(e){var t=this.out
if(t!==o){var n=++this.taken
n<this.max?t._n(e):n===this.max&&(t._n(e),t._c())}},e.prototype._e=function(e){var t=this.out
t!==o&&t._e(e)},e.prototype._c=function(){var e=this.out
e!==o&&e._c()},e}(),k=function(){function e(e){this._prod=e||o,this._ils=[],this._stopID=o,this._dl=o,this._d=!1,this._target=o,this._err=o}return e.prototype._n=function(e){var t=this._ils,n=t.length
if(this._d&&this._dl._n(e),1==n)t[0]._n(e)
else{if(0==n)return
for(var r=a(t),i=0;i<n;i++)r[i]._n(e)}},e.prototype._e=function(e){if(this._err===o){this._err=e
var t=this._ils,n=t.length
if(this._x(),this._d&&this._dl._e(e),1==n)t[0]._e(e)
else{if(0==n)return
for(var r=a(t),i=0;i<n;i++)r[i]._e(e)}if(!this._d&&0==n)throw this._err}},e.prototype._c=function(){var e=this._ils,t=e.length
if(this._x(),this._d&&this._dl._c(),1==t)e[0]._c()
else{if(0==t)return
for(var n=a(e),r=0;r<t;r++)n[r]._c()}},e.prototype._x=function(){0!==this._ils.length&&(this._prod!==o&&this._prod._stop(),this._err=o,this._ils=[])},e.prototype._stopNow=function(){this._prod._stop(),this._err=o,this._stopID=o},e.prototype._add=function(e){var t=this._target
if(t!==o)return t._add(e)
var n=this._ils
if(n.push(e),!(n.length>1))if(this._stopID!==o)clearTimeout(this._stopID),this._stopID=o
else{var r=this._prod
r!==o&&r._start(this)}},e.prototype._remove=function(e){var t=this,n=this._target
if(n!==o)return n._remove(e)
var r=this._ils,i=r.indexOf(e)
i>-1&&(r.splice(i,1),this._prod!==o&&r.length<=0?(this._err=o,this._stopID=setTimeout((function(){return t._stopNow()}))):1===r.length&&this._pruneCycles())},e.prototype._pruneCycles=function(){this._hasNoSinks(this,[])&&this._remove(this._ils[0])},e.prototype._hasNoSinks=function(e,t){if(-1!==t.indexOf(e))return!0
if(e.out===this)return!0
if(e.out&&e.out!==o)return this._hasNoSinks(e.out,t.concat(e))
if(e._ils){for(var n=0,r=e._ils.length;n<r;n++)if(!this._hasNoSinks(e._ils[n],t.concat(e)))return!1
return!0}return!1},e.prototype.ctor=function(){return this instanceof L?L:e},e.prototype.addListener=function(e){e._n=e.next||s,e._e=e.error||s,e._c=e.complete||s,this._add(e)},e.prototype.removeListener=function(e){this._remove(e)},e.prototype.subscribe=function(e){return this.addListener(e),new h(this,e)},e.prototype[i.default]=function(){return this},e.create=function(t){if(t){if("function"!=typeof t.start||"function"!=typeof t.stop)throw new Error("producer requires both start and stop functions")
u(t)}return new e(t)},e.createWithMemory=function(e){return e&&u(e),new L(e)},e.never=function(){return new e({_start:s,_stop:s})},e.empty=function(){return new e({_start:function(e){e._c()},_stop:s})},e.throw=function(t){return new e({_start:function(e){e._e(t)},_stop:s})},e.from=function(t){if("function"==typeof t[i.default])return e.fromObservable(t)
if("function"==typeof t.then)return e.fromPromise(t)
if(Array.isArray(t))return e.fromArray(t)
throw new TypeError("Type of input to from() must be an Array, Promise, or Observable")},e.of=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return e.fromArray(t)},e.fromArray=function(t){return new e(new v(t))},e.fromPromise=function(t){return new e(new b(t))},e.fromObservable=function(t){if(t.endWhen)return t
var n="function"==typeof t[i.default]?t[i.default]():t
return new e(new p(n))},e.periodic=function(t){return new e(new y(t))},e.prototype._map=function(e){return new(this.ctor())(new j(e,this))},e.prototype.map=function(e){return this._map(e)},e.prototype.mapTo=function(e){var t=this.map((function(){return e}))
return t._prod.type="mapTo",t},e.prototype.filter=function(t){var n,r,i=this._prod
return new e(i instanceof S?new S((n=i.f,r=t,function(e){return n(e)&&r(e)}),i.ins):new S(t,this))},e.prototype.take=function(e){return new(this.ctor())(new R(e,this))},e.prototype.drop=function(t){return new e(new _(t,this))},e.prototype.last=function(){return new e(new T(this))},e.prototype.startWith=function(e){return new L(new N(this,e))},e.prototype.endWhen=function(e){return new(this.ctor())(new w(e,this))},e.prototype.fold=function(e,t){return new L(new C(e,t,this))},e.prototype.replaceError=function(e){return new(this.ctor())(new P(e,this))},e.prototype.flatten=function(){return new e(new x(this))},e.prototype.compose=function(e){return e(this)},e.prototype.remember=function(){return new L(new A(this))},e.prototype.debug=function(e){return new(this.ctor())(new E(this,e))},e.prototype.imitate=function(e){if(e instanceof L)throw new Error("A MemoryStream was given to imitate(), but it only supports a Stream. Read more about this restriction here: https://github.com/staltz/xstream#faq")
this._target=e
for(var t=this._ils,n=t.length,r=0;r<n;r++)e._add(t[r])
this._ils=[]},e.prototype.shamefullySendNext=function(e){this._n(e)},e.prototype.shamefullySendError=function(e){this._e(e)},e.prototype.shamefullySendComplete=function(){this._c()},e.prototype.setDebugListener=function(e){e?(this._d=!0,e._n=e.next||s,e._e=e.error||s,e._c=e.complete||s,this._dl=e):(this._d=!1,this._dl=o)},e.merge=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new e(new f(t))},e.combine=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
return new e(new g(t))},e}()
t.Stream=k
var L=function(e){function t(t){var n=e.call(this,t)||this
return n._has=!1,n}return r(t,e),t.prototype._n=function(t){this._v=t,this._has=!0,e.prototype._n.call(this,t)},t.prototype._add=function(e){var t=this._target
if(t!==o)return t._add(e)
var n=this._ils
if(n.push(e),n.length>1)this._has&&e._n(this._v)
else if(this._stopID!==o)this._has&&e._n(this._v),clearTimeout(this._stopID),this._stopID=o
else if(this._has)e._n(this._v)
else{var r=this._prod
r!==o&&r._start(this)}},t.prototype._stopNow=function(){this._has=!1,e.prototype._stopNow.call(this)},t.prototype._x=function(){this._has=!1,e.prototype._x.call(this)},t.prototype.map=function(e){return this._map(e)},t.prototype.mapTo=function(t){return e.prototype.mapTo.call(this,t)},t.prototype.take=function(t){return e.prototype.take.call(this,t)},t.prototype.endWhen=function(t){return e.prototype.endWhen.call(this,t)},t.prototype.replaceError=function(t){return e.prototype.replaceError.call(this,t)},t.prototype.remember=function(){return this},t.prototype.debug=function(t){return e.prototype.debug.call(this,t)},t}(k)
t.MemoryStream=L
var D=k
t.default=D},function(e,t,n){"use strict"
n.r(t),function(e,r){var i,o=n(14)
i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r
var s=Object(o.default)(i)
t.default=s}.call(this,n(12),n(13)(e))},function(e,t){var n
n=function(){return this}()
try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e)
t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict"
function r(e){var t,n=e.Symbol
return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.r(t),n.d(t,"default",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"PostIndex",(function(){return g}))
var r=n(16),i=n.n(r),o=n(1),s=n.n(o),a=n(19),c=n.n(a)
n(20)
const l=[],u=/^[a-z0-9]+:\/\//,h=e=>e.replace(u,""),d=i()(e=>{c()([...new Set(e)]).filter(s.a).forEach(p)}),p=e=>{l.push(h(e))}
function f(e){if(!s()(e.key))throw new Error("Can't register post without a key (post: "+JSON.stringify(e)+")")
p(e.key)}function m(e){if(s()(e.key))return l.indexOf(h(e.key))>=0
throw new Error("Can't look for a post without a key (post: "+JSON.stringify(e)+")")}const g={loadInitialURLs:d,register:f,has:m,filter:function(e){if(!m(e))return f(e),e},destroy:function(){l.splice(0,l.length)}}},function(e,t,n){var r=n(17)
e.exports=function(e){return r(2,e)}},function(e,t,n){var r=n(18),i="Expected a function"
e.exports=function(e,t){var n
if("function"!=typeof t)throw new TypeError(i)
return e=r(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=void 0),n}}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t]
o&&(i[r++]=o)}return i}},function(e,t,n){"use strict"
n.r(t),n.d(t,"error",(function(){return a})),n.d(t,"warn",(function(){return c})),n.d(t,"info",(function(){return l})),n.d(t,"log",(function(){return u}))
var r=n(1),i=n.n(r)
const o="[bastian]"
function s(e){return i()(e[0])?[o+" "+e[0],...e.slice(1)]:[o,...e]}const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return console.error(...s(t))},c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
console.warn(...s(t))},l=function(){},u=function(){}},function(e,t,n){"use strict"
function r(e){return Array.isArray(e)?e:[e]}n.r(t),n.d(t,"castArray",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"setKey",(function(){return f})),n.d(t,"$Falkor",(function(){return m}))
var r=n(1),i=n.n(r),o=n(9),s=n.n(o),a=n(20),c=n(23),l=n(56),u=n(25),h=n(8)
let d
const p={},f=e=>{let t=e.key
i()(t)||s()(t)||(Object(u.get)(e,"content.url")?t=e.content.url:Object(u.get)(e,"content.video.id")?t=e.content.video.id:e.id&&(t=e.id)),t&&(e.key=String(t).trim())}
class m extends h.$OnDemandSource{static getInstance(e){if(e&&!d&&(d=new m(e,p)),d)return d
throw new Error("Couldn't return an $Falkor instance")}constructor(e,t){t!==p&&Object(a.warn)("Class $Falkor is a singleton and shouldn't be called directly."),super(e.items),this.minimun=20,this.feedId=c.Configs.get("feedId"),this.setNextFetch(e.nextFetch||e.nextPage),this.setNextPage(e.nextPage)}whenToFetch(){let e=!1
return e=this.buffer.length<=this.minimun&&!this.isEnded()}static buildRequestUrl(e,t,n){return e+"/page/"+t+(n?"/query_parameter/"+encodeURI(n):"")}store(e){return Array.isArray(e)||(e=[e]),e.forEach(e=>{f(e),e.source=m.staticName}),super.store(e)}getResourceURI(){const e=l.Settings.get("RESOURCE_URI")
return e.match(/local.globoi.com/g)?e.replace("http://local.globoi.com:4000","http://falkor-cda.bastian.qa.globoi.com"):e}howToFetch(){const e=this.nextFetch,t=this.getResourceURI(),n=l.Settings.get("DEVICE_GROUP"),r={method:"GET",headers:new Headers({"X-Mobile-Group":n,Vary:"X-Mobile-Group"})},i=m.buildRequestUrl(t,e,l.Settings.get("QUERY_PARAMETER"))
if(s()(e))return fetch(i,r).then(e=>e.json()).then(this.unlock).then(e=>{this.setNextPage(e.nextPage),this.setNextFetch(e.nextFetch||e.nextPage),this.saveAndResumeStream(e.items)}).catch(e=>{this.listener&&this.listener.error(e)})}whenToComplete(){let e
return e=null===this.nextPage}}m.staticName="$Falkor"},function(e,t,n){"use strict"
n.r(t),n.d(t,"set",(function(){return p})),n.d(t,"get",(function(){return f})),n.d(t,"decr",(function(){return m})),n.d(t,"incr",(function(){return g})),n.d(t,"absorbConfigs",(function(){return b})),n.d(t,"Configs",(function(){return I}))
var r=n(24),i=n.n(r),o=n(9),s=n.n(o),a=n(25),c=n(28),l=n(55),u=n(54),h=n(56)
const d=new Map([["referer",""]])
function p(e,t){return d.set(e,t),t}const f=(e,t)=>{const n=d.get(e)
return i()(n)?t:n},m=function(e,t){void 0===t&&(t=1)
const n=parseInt(f(e,null),10)
if(s()(n)&&t>0)return p(e,n-t)},g=function(e,t){void 0===t&&(t=1)
const n=parseInt(f(e,null),10)
if(s()(n)&&t>0)return p(e,n+t)},v=[["forePosts","config.forePosts",0],["headlineVariation","config.headlineVariation"],["componentPosition","config.componentPosition",7],["cardsPosition","config.cardsPosition",[]],["feedType","config.feedType",h.Settings.get("FEED_TYPE")||"unknown-type"],["photoOverVideo","config.photoOverVideo",h.Settings.get("IS_PHOTO_PRIORIZED")||!1],["recommendationContentId","config.recommendation.contentId",h.Settings.get("RECOMMENDATION.CONTENT_ID")||"feed"],["disableDateTime","config.disableDateTime",!1],["isDebugModeClient","isDebugModeClient",!1],["renderContext","renderContext","csr"]],b=e=>{for(const[t,n,r]of v)p(t,Object(a.get)(e,n)||r)
p("feedId",e.id||Object(a.get)(e,"items.0.feedId")||"unknown-feedId"),p("referer",e.referer),p("recommendationCounter",0),_(e),O(e),S(e),w(e),E(e),y(e)},y=e=>{const t=Object(c.getHeadlinesType)(e)
p("headlinesSelected",t.name),p("headlinesMaxPosts",t.maxPosts),p("headlinesNrPosts",Object(c.getNrHeadlines)(e)),p("hasCustomHeadlines",t.name===c.HEADLINES_TYPES.CUSTOM.name),p("hasHeadlinesToRender",Object(c.hasHeadlines)(e))},E=e=>{Object.keys(e.atreyu||{}).forEach(t=>{p(t,e.atreyu[t])}),p("isHome","home-api"===f("api")),p("isHomeOrTopic","home-api"===f("api")||"topic-api"===f("api")),p("isMulticontent","multi-content"===f("api"))},_=e=>{const t="distributed-components",n="cards"
let r
const i=h.Settings.get("EXTENSION_MODEL"),o=Object(a.get)(e,"config.componentPosition")
p("thirdPartyingModel",r=[t,n].includes(i)?i:s()(o)?t:n)},O=e=>{const t=Object(a.get)(e,"config.recommendation.start")||Object(a.get)(e,"config.cutRange")+1,n=f("forePosts")
p("recommendationStart",(!l.At.smallScreen||"uber"===f("headlineVariation"))&&t<=n?n+1:t)},w=e=>{const t=Object(a.get)(e,"config.strategies")
t&&t.includes("channels")?p("isSegmentedByChannels",!0):p("isSegmentedByChannels",!1)},S=e=>{const t=Object(a.get)(e,"config.recommendation.active")
p("isRecommended",u.Globals.BASTIAN_FORCE_RECOMMENDED||(i()(t)?h.Settings.get("IS_RECOMMENDED",!1):t))},I={set:p,has:e=>d.has(e),get:f,unset:e=>d.delete(e),clear:()=>d.clear(),decr:m,incr:g,absorbConfigs:b}
t.default=I},function(e,t){e.exports=function(e){return void 0===e}},function(e,t,n){"use strict"
n.r(t)
var r=n(26),i=n.n(r)
n.d(t,"get",(function(){return i.a}))},function(e,t,n){n(27)
e.exports=function(e,t){for(var n=t.split("."),r=n.pop();t=n.shift();)if(null==(e=e[t]))return
return e[r]}},function(e,t){e.exports=function(e){switch(typeof e){case"string":case"number":case"boolean":return!0}return null==e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"treatPayload",(function(){return b})),n.d(t,"hasHeadlines",(function(){return f})),n.d(t,"getNrHeadlines",(function(){return g})),n.d(t,"getHeadlinesType",(function(){return p})),n.d(t,"flatAtreyuProps",(function(){return y})),n.d(t,"getFirstPostWithImageForLCP",(function(){return O})),n.d(t,"getFirstImage",(function(){return _})),n.d(t,"HEADLINES_TYPES",(function(){return c}))
var r=n(29),i=n(25)
function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const s="L",a="V",c={UBER:{name:"uberHeadline",maxPosts:1,isSelected:e=>d(e),conditionToRender:e=>u(e)},DEFAULT:{name:"defaultHeadlines",maxPosts:3,isSelected:e=>!d(e)&&!m(e).hasCustomHeadlines,conditionToRender:e=>"desktop"===h(e)&&u(e)},CUSTOM:{name:"customHeadlines",maxPosts:5,isSelected:e=>m(e).hasCustomHeadlines,conditionToRender:e=>u(e)}},l=function(e,t){void 0===e&&(e={})
const n=e||{},r=n.sizes||{}
return(r[t]||function(e){return void 0===e&&(e={}),Object.keys(e).length?e[Object.keys(e)[0]]:{}}(r)).url||n.url},u=function(e,t){return void 0===e&&(e={}),Math.min((e.config||{}).forePosts||0,t||c.DEFAULT.maxPosts)},h=function(e){void 0===e&&(e={})
const t=(e.atreyu||{}).channel
return(e.atreyu||{}).ffe_channel_ef||t},d=function(e){return void 0===e&&(e={}),"uber"===(e.config||{}).headlineVariation},p=function(e){return void 0===e&&(e={}),[c.CUSTOM,c.UBER,c.DEFAULT].find(t=>t.isSelected(e))},f=e=>p(e).conditionToRender(e),m=function(e){return void 0===e&&(e={}),{hasCustomHeadlines:(e.atreyu||{}).ffe_custom_headlines}},g=function(e){void 0===e&&(e={})
const t=p(e)
return f(e)?u(e,t.maxPosts):0},v=e=>{const t=h(e),n=(e=>{const t=g(e),n=e.forePosts||[],r=e.items||[],i=r.length?r[0]:void 0,o=[]
let s=n
return i&&(o.push(i),s=n.filter(e=>e.id!==i.id)),o.push(...s),o.push(...r.slice(1)),o.slice(0,t)})(e),r={0:{checkVertical:()=>[2,3].includes(n.length)||"smart"===t},1:{checkVertical:()=>2===n.length},2:{checkVertical:()=>!1}}
return n.map(e=>{const i=n.indexOf(e),c=(e.content||{}).image,u=!!r[i]&&r[i].checkVertical(),h=c&&(c.url||c.sizes)
return o({},e,{elementClasses:"type-"+e.type+" "+(h&&"desktop"===t?"with-photo":""),imgUrl:l(c,u?a:s)})})},b=e=>{const{hasCustomHeadlines:t}=m(e),n=d(e),r=(e.items||[]).length
let i=[],o="",s=""
if(f(e)&&r){const t=(i=v(e)).map(e=>e.id)
e.items=e.items.filter(e=>!t.includes(e.id)),o="fore-posts-setted fore-posts-"+i.length+" bsl-has-items bsl-"+(n?"has":"no")+"-headline-variation bsl-has-fore-posts",s="model-"+i.length+" "+(n?"variation-uber":"")}return{headlines:i,hasCustomHeadlines:t,areaShowtimeClasses:o,headlinesClasses:s}},y=function(e){void 0===e&&(e={})
const t=e.parameters||{}
Object.keys(t).forEach(n=>{const r=Array.isArray(t[n])&&t[n].length?t[n][0]:"",i=["true","false"].includes(r)?"true"===r:r
e[n]=i}),e.parameters=void 0},E=function(e){return void 0===e&&(e={}),Object(i.get)(e,"content.video.id")},_=e=>{const{hasCustomHeadlines:t}=m(e)
let n
if(t)return n
if(f(e))n=v(e)[0].imgUrl
else{const t=O(e)
t&&(n=function(e){return void 0===e&&(e={}),"video"===e.type}(t)&&E(t)?Object(r.buildUrlForPostVideo4x3)(E(t)):Object(r.choosePicture)(t.content.image))}return n},O=e=>{const{items:t=[]}=e
let n
if(!f(e)){const e=["materia","video","cobertura","tempo_real"],r=t.find(t=>t.content&&t.content.image&&e.includes(t.type))
r&&t.indexOf(r)<4&&(n=r)}return n}},function(e,t,n){"use strict"
n.r(t),n.d(t,"choosePicture",(function(){return O})),n.d(t,"buildUrlForPostVideo4x3",(function(){return w}))
var r=n(30),i=n.n(r),o=n(35),s=n.n(o),a=n(40),c=n.n(a),l=n(49),u=n.n(l),h=n(1),d=n.n(h),p=n(51),f=n.n(p),m=n(54),g=n(25)
const v={1:"S",1.5:"M",2:"L",3:"XL",4:"XXL"},b=Object.keys(v).map(Number),y=u()(b),E=s()(b),_=c()(e=>{const t=f()(e||m.Globals.devicePixelRatio,E,y)
let n=Math.floor(t)
for(;!b.includes(n)&&n<y;)n=Math.floor(n+.1)
return v[n]||v[E]})
function O(e,t,n,r){if(e.sizes){if(r)return e.sizes[r].url
const o=e.sizes,s=function(e,t){void 0===e&&(e=1)
let n="S"
return t&&t.height>=t.width?n="V":e&&(n=_(e)),n}(t,n)
return Object(g.get)(o,s+".url")||i()(o)[0].url}if(d()(e.url))return e.url}const w=e=>"https://s03.video.glbimg.com/480x360/"+e+".jpg"},function(e,t,n){var r=n(31),i=n(33)
e.exports=function(e){return null==e?[]:r(e,i(e))}},function(e,t,n){var r=n(32)
e.exports=function(e,t){return r(t,(function(t){return e[t]}))}},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e)
return i}},function(e,t,n){var r=n(34)(Object.keys,Object)
e.exports=r},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){var r=n(36),i=n(38),o=n(39)
e.exports=function(e){return e&&e.length?r(e,o,i):void 0}},function(e,t,n){var r=n(37)
e.exports=function(e,t,n){for(var i=-1,o=e.length;++i<o;){var s=e[i],a=t(s)
if(null!=a&&(void 0===c?a==a&&!r(a):n(a,c)))var c=a,l=s}return l}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(e,t){return e<t}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(41),i="Expected a function"
function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(i)
var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache
if(o.has(i))return o.get(i)
var s=e.apply(this,r)
return n.cache=o.set(i,s)||o,s}
return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},function(e,t,n){var r=n(42),i=n(43),o=n(46),s=n(47),a=n(48)
function c(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,e.exports=c},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(44),i=Array.prototype.splice
e.exports=function(e){var t=this.__data__,n=r(t,e)
return!(n<0)&&(n==t.length-1?t.pop():i.call(t,n,1),--this.size,!0)}},function(e,t,n){var r=n(45)
e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n
return-1}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(44)
e.exports=function(e){var t=this.__data__,n=r(t,e)
return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(44)
e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(44)
e.exports=function(e,t){var n=this.__data__,i=r(n,e)
return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},function(e,t,n){var r=n(36),i=n(50),o=n(39)
e.exports=function(e){return e&&e.length?r(e,o,i):void 0}},function(e,t){e.exports=function(e,t){return e>t}},function(e,t,n){var r=n(52),i=n(53)
e.exports=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=i(n))==n?n:0),void 0!==t&&(t=(t=i(t))==t?t:0),r(i(e),t,n)}},function(e,t){e.exports=function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Globals",(function(){return r}))
const r=function(){return this||(0,eval)("this")}()},function(e,t,n){"use strict"
n.r(t),n.d(t,"SMALL_SCREEN",(function(){return i})),n.d(t,"MEDIUM_SCREEN",(function(){return o})),n.d(t,"LARGE_SCREEN",(function(){return s})),n.d(t,"SCREEN_BREAKPOINT",(function(){return p})),n.d(t,"At",(function(){return g}))
var r=n(54)
const[i,o,s]=[1,2,4]
let a,c,l,u,h,d
const p={SMALL:0,MEDIUM:540,LARGE:1e3}
a=!0
const f=e=>Number(r.Globals.matchMedia("(min-width: "+e+"px)").matches),m=Number(!0)<<f(p.MEDIUM)<<f(p.LARGE)
h=e=>m>e,d=(u=e=>m===e)(i),l=u(o)
const g={server:!1,client:!0,largeScreen:c=u(s),mediumScreen:l,smallScreen:d,screen:u,screenGreatThan:h}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Settings",(function(){return p}))
var r=n(40),i=n.n(r),o=n(24),s=n.n(o),a=n(25),c=n(57),l=n(54)
let u,h
const d=e=>"SETTINGS.BASTIAN."+e,p={has:u=i()(e=>Object(c.has)(l.Globals,d(e))),get:h=i()((e,t)=>{let n=Object(a.get)(l.Globals,d(e))
return s()(n)&&!s()(t)&&(n=t),n},(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.map(String).join("|")}))}},function(e,t,n){"use strict"
n.r(t)
var r=n(58),i=n.n(r)
n.d(t,"has",(function(){return i.a}))},function(e,t,n){var r,i=n(26)
e.exports=function(e,t){return i(e,t)!==r}},function(e,t,n){"use strict"
n.r(t),n.d(t,"reportToRealtime",(function(){return m}))
var r=n(5),i=n.n(r),o=n(55),s=n(54),a=n(60),c=n(25)
let l
const u=[]
let h=!1
const d=()=>i()(Object(c.get)(s.Globals,"$.glbrealtime.gerar_clique")),p=()=>{for(const e of u)s.Globals.$.glbrealtime.gerar_clique(...e)};(async()=>{await Object(a.availabilityOf)("$.glbrealtime.gerar_clique",d,"30s"),d()&&(h=!0,p())})()
const f=o.At.smallScreen?"mobile":"desktop",m=l=function(e,t){u.push([e,f,t]),h&&p()}},function(e,t,n){"use strict"
n.r(t),n.d(t,"check",(function(){return E})),n.d(t,"availabilityOf",(function(){return _})),n.d(t,"MISSING_WARN",(function(){return O})),n.d(t,"missingWarn",(function(){return w}))
var r=n(40),i=n.n(r),o=n(1),s=n.n(o),a=n(61),c=n.n(a),l=n(23),u=n(67),h=n(68),d=n(20)
let p,f
let m=!1
const g={}
let v=0
const b=new Promise(()=>{}),y=()=>{m=!0
for(const e in g){const t=g[e]
!t.done&&Object(u.safeCall)(t.assertion,null)&&(v-=1,t.done=!0,c()(t.resolve))}v>0?setTimeout(y,500):m=!1}
f=async(e,t,n)=>{try{await E(t,{timeout:n})}catch(r){"esppub"!==l.Configs.get("feedType")&&w(e)}}
const E=p=function(e,t){void 0===t&&(t={})
const{id:n="",timeout:r=1e4}=t,i=e.toString()+n
if(i in g)return g[i].promise
const o={assertion:e,done:!1,promise:b},a=new Promise((e,t)=>{o.resolve=e,setTimeout(()=>{o.done=!0,t(new Error("detector test timeout of "+i))},s()(r)?Object(h.timeToInt)(r):r)})
return o.promise=a,g[i]=o,v+=1,m||c()(y),a},_=f,O="seems to be missing on the page",w=i()(e=>Object(d.warn)(e,O))},function(e,t,n){var r=n(62),i=n(63)((function(e,t){return r(e,1,t)}))
e.exports=i},function(e,t){var n="Expected a function"
e.exports=function(e,t,r){if("function"!=typeof e)throw new TypeError(n)
return setTimeout((function(){e.apply(void 0,r)}),t)}},function(e,t,n){var r=n(39),i=n(64),o=n(66)
e.exports=function(e,t){return o(i(e,t,r),e+"")}},function(e,t,n){var r=n(65),i=Math.max
e.exports=function(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var o=arguments,s=-1,a=i(o.length-t,0),c=Array(a);++s<a;)c[s]=o[t+s]
s=-1
for(var l=Array(t+1);++s<t;)l[s]=o[s]
return l[t]=n(c),r(e,this,l)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"safeCall",(function(){return s}))
var r=n(5),i=n.n(r),o=n(20)
const s=function(e,t){try{for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s]
if(i()(e))return e.apply(t,r)
throw new TypeError("Given value is not a function")}catch(a){Object(o.error)(a)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"timeToInt",(function(){return a}))
var r=n(40),i=n.n(r)
const o={ms:{value:1,extractor:/^(\d+)ms$/},seg:{value:1e3,extractor:/^(\d+|\d+\.\d+)s$/},min:{value:6e4,extractor:/^(\d+|\d+\.\d+)min$/},hr:{value:36e5,extractor:/^(\d+|\d+\.\d+)hr$/},d:{value:864e5,extractor:/^(\d+|\d+\.\d+)d$/}},s=i()(e=>{for(const t in o){const n=e.match(o[t].extractor)
if(n)return o[t].value*Number(n[1])}throw new Error("Could not find a resolver for translate "+e)}),a=i()(e=>e.split(" ").reduce((e,t)=>e+s(t),0))},function(e,t,n){"use strict"
n.r(t),n.d(t,"CARD_RENDERED",(function(){return r})),n.d(t,"PAGE_RENDERED",(function(){return i})),n.d(t,"APP_LOADED",(function(){return o})),n.d(t,"ELEMENT_VIEWED",(function(){return s})),n.d(t,"LAUNCH_FAILED",(function(){return a})),n.d(t,"ITEM_CLICK",(function(){return c})),n.d(t,"VIDEOPREVIEW_INTERSECT",(function(){return l}))
const r="bastian-feed-card_rendered",i="bastian-feed-page_rendered",o="bstn-app-loaded",s="element-view",a="bstn-launch-failed",c="bstn-item-click",l="bstn-videopreview-intersect"},function(e,t,n){"use strict"
n.r(t),n.d(t,"triggerDomEvent",(function(){return l}))
var r=n(5),i=n.n(r),o=n(61),s=n.n(o),a=n(67)
let c
const l=c=function(e,t,n){const r=new CustomEvent(e,{bubbles:!0,cancelable:!0})
i()(n)&&Object(a.safeCall)(n,null,r),s()(()=>t.dispatchEvent(r))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"FALLBACK_ALTERNATIVE",(function(){return m})),n.d(t,"Experiment",(function(){return g})),n.d(t,"EXPERIMENTS",(function(){return b})),n.d(t,"GloboAB",(function(){return y})),n.d(t,"libAvailability",(function(){return E})),n.d(t,"getClient",(function(){return _}))
var r=n(16),i=n.n(r),o=n(5),s=n.n(o),a=n(20),c=n(54),l=n(60),u=n(57),h=n(72)
let d,p,f
p=()=>Object(u.has)(c.Globals,"GloboAB")&&s()(c.Globals.GloboAB)
const m=Symbol("fallback alternative")
d=new class{constructor(){let e
this.experiments=new Map,this.promisesCallbacks=new Map,this.batchRaffled=!1,this.applicationLoad=new Promise(t=>{e=t}).then(()=>this.raffleAll()),this.applicationLoadResolve=e}setApplicationAsLoaded(){this.applicationLoadResolve()}register(e,t){void 0===t&&(t={})
let n=this.experiments.get(e)
if(n)return n
let r=()=>{},i=()=>{}
const o=new Promise((e,t)=>{i=e,r=t})
return n=this.save({experimentName:e,options:t,promise:o,resolve:i,reject:r}),this.batchRaffled&&this.immediateRaffle(n),n}save(e){const{experimentName:t,options:n,promise:r,resolve:i,reject:o}=e,s=new g(t,r,n)
return this.experiments.set(t,s),this.promisesCallbacks.set(s,{resolve:i,reject:o}),s}get(e){return this.experiments.get(e)}async raffleAll(){let e
try{e=await f()}catch(t){}if(e){if(this.experiments.size>0){const e=Array.from(this.experiments.values())
this.requestMulti(e.filter(e=>e.options.skipImpression)),this.requestMulti(e.filter(e=>!e.options.skipImpression))}this.batchRaffled=!0}}async requestMulti(e){const t=[],n=[],r=[]
let i,o={}
for(const a of e){const e=this.promisesCallbacks.get(a)
if(e){const{name:i,options:s}=a,{resolve:c,reject:l}=e
t.push(i),o=s,n.push({name:i,fn:c}),r.push(l)}}try{i=await f()}catch(c){}if(i){const e=i.createOptions().timeout(5e3)
e.options.skipImpressions=!1,o.skipImpression&&e.skipImpression(),i.choose(t).then((s=n,e=>{for(const{name:n,fn:r}of s)if(n in e)try{r(e[n])}catch(t){Object(a.error)(t)}})).catch(function(e){return t=>{for(const r of e)try{r(t)}catch(n){Object(a.error)(n)}}}(r))}var s}async immediateRaffle(e){await Object(l.check)(p)
const t=this.promisesCallbacks.get(e)
if(t){const{name:r,options:i}=e,{resolve:o,reject:s}=t
let a
try{a=await f()}catch(n){}if(a){const e=a.options().timeout(3e3)
return e.options.skipImpressions=!1,i.skipImpression&&e.skipImpression(),a.choose(r).then(o).catch(s)}}}}
class g{constructor(e,t,n){this.name=e,this.promise=t,this.options=n,this.effects=new Map,this.impressionRecorded=Boolean(n.skipImpression)}setEffects(e,t){this.effects.clear()
for(const{name:n,callback:r}of e)this.addEffect(n,r)
this.addEffect(m,t),this.engageEffects()}addEffect(e,t){const n=this.effects.get(e)
n?n.push(t):this.effects.set(e,[t])}async engageEffects(){try{const e=await this.promise,t=this.effects.get(e.alternative)
t?(v(t),this.markImpression(e)):this.invokeFallback(e)}catch(e){Object(a.error)("Failed to resolve AB promise",e),this.invokeFallback()}}markImpression(e){this.impressionRecorded||(e.impression(),this.impressionRecorded=!0)}invokeFallback(e){const t=this.effects.get(m)
if(t){let n
e&&(n=this.makeAlternativeSurface(e)),v(t,n)}}makeAlternativeSurface(e){const t={}
return t.alternative=e.alternative,this.impressionRecorded||(t.markImpression=()=>this.markImpression(e)),t}async convert(){(await this.promise).conversion()}}function v(e,t){for(;e.length>0;){const r=e.shift()
try{r(t)}catch(n){Object(a.error)(n)}}}f=i()(async()=>{if(c.Globals.globalWebdeps){try{await c.Globals.globalWebdeps("globo-ab")}catch(e){throw new Error("Failed to fetch globo-ab")}const t=c.Globals.location.hostname.split(".").includes("qa")||["localhost"].includes(c.Globals.location.hostname)?"qa":"prod"
return new c.Globals.GloboAB(t,h.Horizon.client)}})
const b={},y=d,E=p,_=f},function(e,t,n){"use strict"
n.r(t),n.d(t,"Horizon",(function(){return v}))
var r=n(1),i=n.n(r),o=n(73),s=n(74),a=n.n(s),c=n(10),l=n.n(c),u=n(20),h=n(75),d=n(54),p=(n(76),n(56)),f=n(23)
let m
class g extends h.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==f.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){d.Globals.location.hostname.includes(".qa.")&&o.Settings.useQAConfiguration()
const e=p.Settings.get("PORTAL"),t=p.Settings.get("DEVICE_GROUP")
i()(e)&&i()(t)?this.client=new o.HorizonClient(e.toLowerCase(),t.toLowerCase(),"feed"):Object(u.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const e=l.a.periodic(1e4).filter(()=>"visible"===d.Globals.document.visibilityState),t=l.a.periodic(6e4)
l.a.merge(e,t).compose(a()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report(e,t){const n=new e(t).toSend()
this.client&&this.client.send(n)}}const v=m=new g},function(e,t,n){var r
self,r=()=>(()=>{var e={501:function(e,t,n){var r
e=n.nmd(e),function(i){var o=(e&&e.exports,"object"==typeof n.g&&n.g)
o.global!==o&&o.window
var s=function(e){this.message=e};(s.prototype=new Error).name="InvalidCharacterError"
var a=function(e){throw new s(e)},c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=/[\t\n\f\r ]/g,u={encode:function(e){e=String(e),/[^\0-\xFF]/.test(e)&&a("The string to be encoded contains characters outside of the Latin1 range.")
for(var t,n,r,i,o=e.length%3,s="",l=-1,u=e.length-o;++l<u;)t=e.charCodeAt(l)<<16,n=e.charCodeAt(++l)<<8,r=e.charCodeAt(++l),s+=c.charAt((i=t+n+r)>>18&63)+c.charAt(i>>12&63)+c.charAt(i>>6&63)+c.charAt(63&i)
return 2==o?(t=e.charCodeAt(l)<<8,n=e.charCodeAt(++l),s+=c.charAt((i=t+n)>>10)+c.charAt(i>>4&63)+c.charAt(i<<2&63)+"="):1==o&&(i=e.charCodeAt(l),s+=c.charAt(i>>2)+c.charAt(i<<4&63)+"=="),s},decode:function(e){var t=(e=String(e).replace(l,"")).length
t%4==0&&(t=(e=e.replace(/==?$/,"")).length),(t%4==1||/[^+a-zA-Z0-9/]/.test(e))&&a("Invalid character: the string to be decoded is not correctly encoded.")
for(var n,r,i=0,o="",s=-1;++s<t;)r=c.indexOf(e.charAt(s)),n=i%4?64*n+r:r,i++%4&&(o+=String.fromCharCode(255&n>>(-2*i&6)))
return o},version:"0.1.0"}
void 0===(r=function(){return u}.call(t,n,t,e))||(e.exports=r)}()},97:(e,t,n)=>{"use strict"
n(91).polyfill()},91:e=>{"use strict"
function t(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object")
for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r]
if(null!=i)for(var o=Object.keys(Object(i)),s=0,a=o.length;s<a;s++){var c=o[s],l=Object.getOwnPropertyDescriptor(i,c)
void 0!==l&&l.enumerable&&(n[c]=i[c])}}return n}e.exports={assign:t,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})}}},808:(e,t,n)=>{var r,i,o
void 0===(i="function"==typeof(r=o=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e]
for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function i(){}function o(t,n,o){if("undefined"!=typeof document){"number"==typeof(o=e({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():""
try{var s=JSON.stringify(n);/^[\{\[]/.test(s)&&(n=s)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape)
var a=""
for(var c in o)o[c]&&(a+="; "+c,!0!==o[c]&&(a+="="+o[c].split(";")[0]))
return document.cookie=t+"="+n+a}}function s(e,n){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],s=0;s<o.length;s++){var a=o[s].split("="),c=a.slice(1).join("=")
n||'"'!==c.charAt(0)||(c=c.slice(1,-1))
try{var l=t(a[0])
if(c=(r.read||r)(c,l)||t(c),n)try{c=JSON.parse(c)}catch(e){}if(i[l]=c,e===l)break}catch(e){}}return e?i[e]:i}}return i.set=o,i.get=function(e){return s(e,!1)},i.getJSON=function(e){return s(e,!0)},i.remove=function(t,n){o(t,"",e(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}((function(){}))})?r.call(t,n,t,e):r)||(e.exports=i),e.exports=o()},671:function(e,t){var n,r
void 0===(r="function"==typeof(n=function(){var e=function(){},t={},n={},r={}
function i(e,t){if(e){var i=r[e]
if(n[e]=t,i)for(;i.length;)i[0](e,t),i.splice(0,1)}}function o(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function s(t,n,r,i){var o,a,c=document,l=r.async,u=(r.numRetries||0)+1,h=r.before||e,d=t.replace(/^(css|img)!/,"")
i=i||0,/(^css!|\.css$)/.test(t)?((a=c.createElement("link")).rel="stylesheet",a.href=d,(o="hideFocus"in a)&&a.relList&&(o=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(a=c.createElement("img")).src=d:((a=c.createElement("script")).src=t,a.async=void 0===l||l),a.onload=a.onerror=a.onbeforeload=function(e){var c=e.type[0]
if(o)try{a.sheet.cssText.length||(c="e")}catch(e){18!=e.code&&(c="e")}if("e"==c){if((i+=1)<u)return s(t,n,r,i)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet"
n(t,c,e.defaultPrevented)},!1!==h(t,a)&&c.head.appendChild(a)}function a(e,n,r){var a,c
if(n&&n.trim&&(a=n),c=(a?r:n)||{},a){if(a in t)throw"LoadJS"
t[a]=!0}function l(t,n){!function(e,t,n){var r,i,o=(e=e.push?e:[e]).length,a=o,c=[]
for(r=function(e,n,r){if("e"==n&&c.push(e),"b"==n){if(!r)return
c.push(e)}--o||t(c)},i=0;i<a;i++)s(e[i],r,n)}(e,(function(e){o(c,e),t&&o({success:t,error:n},e),i(a,e)}),c)}if(c.returnPromise)return new Promise(l)
l()}return a.ready=function(e,t){return function(e,t){e=e.push?e:[e]
var i,o,s,a=[],c=e.length,l=c
for(i=function(e,n){n.length&&a.push(e),--l||t(a)};c--;)o=e[c],(s=n[o])?i(o,s):(r[o]=r[o]||[]).push(i)}(e,(function(e){o(t,e)})),a},a.done=function(e){i(e,[])},a.reset=function(){t={},n={},r={}},a.isDefined=function(e){return e in t},a})?n.apply(t,[]):n)||(e.exports=r)},237:()=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){var n=this.event&&this.event.type,r="unload"===n||"beforeunload"===n,i="XMLHttpRequest"in this?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")
i.open("POST",e,!r),i.withCredentials=!0,i.setRequestHeader("Accept","*/*"),"string"==typeof t?(i.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),i.responseType="text/plain"):function(e){return e instanceof Blob}(t)&&t.type&&i.setRequestHeader("Content-Type",t.type)
try{i.send(t)}catch(e){return!1}return!0}function n(){return"navigator"in this&&"sendBeacon"in this.navigator}(function(){n.call(this)||("navigator"in this||(this.navigator={}),this.navigator.sendBeacon=t.bind(this))}).call("object"===("undefined"==typeof window?"undefined":e(window))?window:{})},458:(e,t)=>{!function(e){var t,n,r,i=String.fromCharCode
function o(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t)
return r}function s(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function a(e,t){return i(e>>t&63|128)}function c(e){if(0==(4294967168&e))return i(e)
var t=""
return 0==(4294965248&e)?t=i(e>>6&31|192):0==(4294901760&e)?(s(e),t=i(e>>12&15|224),t+=a(e,6)):0==(4292870144&e)&&(t=i(e>>18&7|240),t+=a(e,12),t+=a(e,6)),t+i(63&e|128)}function l(){if(r>=n)throw Error("Invalid byte index")
var e=255&t[r]
if(r++,128==(192&e))return 63&e
throw Error("Invalid continuation byte")}function u(){var e,i
if(r>n)throw Error("Invalid byte index")
if(r==n)return!1
if(e=255&t[r],r++,0==(128&e))return e
if(192==(224&e)){if((i=(31&e)<<6|l())>=128)return i
throw Error("Invalid continuation byte")}if(224==(240&e)){if((i=(15&e)<<12|l()<<6|l())>=2048)return s(i),i
throw Error("Invalid continuation byte")}if(240==(248&e)&&(i=(7&e)<<18|l()<<12|l()<<6|l())>=65536&&i<=1114111)return i
throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,r=-1,i="";++r<n;)i+=c(t[r])
return i},e.decode=function(e){t=o(e),n=t.length,r=0
for(var s,a=[];!1!==(s=u());)a.push(s)
return function(e){for(var t,n=e.length,r=-1,o="";++r<n;)(t=e[r])>65535&&(o+=i((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=i(t)
return o}(a)}}(t)},327:e=>{for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1)
e.exports=function(e,n){var r=n||0,i=t
return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},217:e=>{var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(t){var n=new Uint8Array(16)
e.exports=function(){return t(n),n}}else{var r=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255
return r}}},171:(e,t,n)=>{var r=n(217),i=n(327)
e.exports=function(e,t,n){var o=t&&n||0
"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null)
var s=(e=e||{}).random||(e.rng||r)()
if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[o+a]=s[a]
return t||i(s)}}},t={}
function n(r){var i=t[r]
if(void 0!==i)return i.exports
var o=t[r]={id:r,loaded:!1,exports:{}}
return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e
return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis
try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)
var r={}
return(()=>{"use strict"
n.r(r),n.d(r,{HorizonClient:()=>fe,IDManager:()=>me,Settings:()=>a}),n(97)
var e=n(171),t=n.n(e)
const i=function(e,t){var n=(window.horizonResources=window.horizonResources||{},window.horizonResources)
return n[e]=n[e]||t,n[e]}
var o={AVOID_COOKIE_USAGE:!1,EVENTS_BUFFER_SIZE:100,EVENTS_SENDER_INTERVAL:1e4,EVENTS_SENDER_MIN_INTERVAL:5e3,EVENTS_SENDER_MAX_INTERVAL:2e4,EVENTS_DISCARD_AFTER_MSECS:36e5,EVENTS_BULK_SIZE:10,HORIZON_CALLBACK_STACK_LIMIT:1e3,HORIZON_TRACK_IDENTIFICATION_RESOURCE:"id",HORIZON_TRACK_HOST:"horizon-track.globo.com",HORIZON_CLIENT_UUID:i("clientInstanceUUID",t()()),HORIZON_REQUEST_ENCODING:"base64",HORIZON_SCHEMAS_HOST:"horizon-schemas.globo.com",IDENTIFICATION_LOAD_RETRY_AFTER_MSECS:5e3,PACKAGE_VERSION:"2.0.0",SCHEMA_VALIDATOR_SCRIPT_URL:"s3.glbimg.com/cdn/libs/tv4/1.3.0/tv4.min.js",SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES:2,SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS:1e4,USE_HTTPS:!0},s={avoidCookieUsage:function(){o.AVOID_COOKIE_USAGE=!0},useHTTPOnly:function(){o.USE_HTTPS=!1},useQAConfiguration:function(){o.HORIZON_TRACK_HOST="horizon-track.qa.globoi.com",o.HORIZON_SCHEMAS_HOST="horizon-schemas.qa.globoi.com",o.HORIZON_REQUEST_ENCODING="json"},useJSONEncoding:function(){o.HORIZON_REQUEST_ENCODING="json"}}
const a=Object.assign(o,s)
var c=n(671),l=n.n(c),u={COMPONENT_NOT_READY:"[Horizon] Component is not ready.",COMPONENT_UNAVAILABLE:"[Horizon] Class or function is required.",DUPLICATED_SCHEMA:"[Horizon] Duplicated schema.",ERROR_LOADING_RESOURCE:"[Horizon] Failed to load resource.",INVALID_AUTH_TOKEN:"[Horizon] Invalid authorization token.",INVALID_DATA:"[Horizon] Invalid data.",INVALID_DATE:"[Horizon] Invalid date-time RFC 3339 format.",INVALID_STRING_NUMERIC_STRING:"[Horizon] numericString should be string.",INVALID_EMPTY_NUMERIC_STRING:"[Horizon] numericString should be empty.",INVALID_NUMERIC_STRING:"[Horizon] Invalid number. Field with NumericString must to be number.",INVALID_ENVIRONMENT:"[Horizon] Invalid environment value.",INVALID_FORMAT:"[Horizon] Invalid event format.",INVALID_REQUEST:"[Horizon] Invalid request.",INVALID_TIMESTAMP:"[Horizon] Invalid timestamp.",INVALID_VERSION_FORMAT:"[Horizon] Invalid version format.",INVALID_RELATION_ID:"[Horizon] Invalid relation identification.",LIMIT_EXCEEDED:"[Horizon] Resource limit exceeded.",MUST_BE_DEFINED:"[Horizon] Parameter or argument must be defined",SCHEMA_VALIDATOR_ERROR_LOADING:"[Horizon] Could not load SchemaValidator.",UNSUPPORTED_TYPE:"[Horizon] Unsupported type.",UNSUPPORTED_TENANT:"[Horizon] Unsupported tenant.",UNSUPPORTED_ENCODER:"[Horizon] Unsupported encoder.",USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE:"[Horizon] Can not set or remove a logged user when AVOID_COOKIE_USAGE is not enabled."},h={mustBeDefined:function(e){throw new Error("".concat(u.MUST_BE_DEFINED,": ").concat(e,"."))}}
const d=Object.assign(u,h)
function p(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m={ready:[]},g=["url"],v=function(){return!!window.tv4},b=function(e){return null===e||isNaN(e)&&!isNaN(Date.parse(e))?null:d.INVALID_DATE},y=function(e){return"string"!=typeof e?d.INVALID_STRING_NUMERIC_STRING:""===e.trim()?d.INVALID_EMPTY_NUMERIC_STRING:Number.isFinite(Number(e))?null:d.INVALID_NUMERIC_STRING}
const E={validateFor:function(e,t){if(!v())throw new Error("".concat(d.ERROR_LOADING_RESOURCE," Validator is not ready."))
if(!t)throw new Error("".concat(d.INVALID_DATA," Argument: schema."))
if(!/\d+\.\d+/.test(e.version))throw new Error(d.INVALID_VERSION_FORMAT)
if(!tv4.validate(e.properties,t))throw new Error("".concat(d.INVALID_DATA," ").concat(e.id," ").concat(e.version,". ").concat(tv4.error))},validateArgs:function(e){var t=Object.prototype.hasOwnProperty
if(!(e&&t.call(e,"id")&&t.call(e,"version")&&t.call(e,"properties")))throw new Error("".concat(d.INVALID_FORMAT," Missing properties: ").concat(JSON.stringify(e)))
if("string"!=typeof e.id||"string"!=typeof e.version||"object"!==f(e.properties))throw new Error("".concat(d.INVALID_FORMAT," Wrong object type: ").concat(JSON.stringify(e)))
if(g.filter((function(t){return e[t]&&"string"!=typeof e[t]})).length>0)throw new Error("".concat(d.INVALID_FORMAT," Wrong object type: ").concat(JSON.stringify(e)))
if(e.id.length<2||e.version.length<3)throw new Error("".concat(d.INVALID_FORMAT," Invalid property size: ").concat(JSON.stringify(e)))
var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?p(Object(n),!0).forEach((function(t){var r,i,o
r=e,i=t,o=n[t],(i=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==f(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"===f(t)?t:String(t)}(i))in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)
delete n.id,delete n.version,delete n.properties,delete n.contentType
var r=Object.keys(n)
if(r.length>0&&!r.every((function(e){return-1!==g.indexOf(e)})))throw new Error("".concat(d.INVALID_FORMAT," Extra keys aren't allowed: ").concat(JSON.stringify(n)))},tv4IsValidData:b,tv4IsNumericString:y,isReady:v,onReady:function(e){if(v())return e()
if(m.ready.length>a.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(d.LIMIT_EXCEEDED," Validator callback stack."))
return m.ready.unshift(e)},load:function(){if(!l().isDefined("tv4")){var e=a.USE_HTTPS?"https://":"http://",t="".concat(e).concat(a.SCHEMA_VALIDATOR_SCRIPT_URL)
l()([t],"tv4",{async:!0,numRetries:a.SCHEMA_VALIDATOR_SCRIPT_MAX_RETRIES,success:function(){tv4.addFormat("date-time",b),tv4.addFormat("numericString",y),m.ready.forEach((function(e){return e()}))},error:function(e){throw new Error("".concat(d.SCHEMA_VALIDATOR_ERROR_LOADING," ").concat(e))}})}}}
n(237)
var _=n(501),O=n.n(_),w=n(458),S=n.n(w),I={base64:function(e){var t=new FormData
return t.append("data",O().encode(S().encode(JSON.stringify(e)))),t.append("encoding","base64"),t},json:function(e){return JSON.stringify(e)}},x=n(808),C=n.n(x)
const T=function(e){var t=a.EVENTS_SENDER_MIN_INTERVAL,n=a.EVENTS_SENDER_MAX_INTERVAL,r=Number(C().get("_hzt.interval"))||a.EVENTS_SENDER_INTERVAL
r<=n&&r>=t&&e.interval!==r&&e.reschedule(r)}
function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if("object"!==j(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==j(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(i)?i:String(i)),r)}var i}const N=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._queue=[],this.maxSize=t}var t,n,r
return t=e,r=[{key:"fromArray",value:function(t,n){var r=new e(n)
return t.forEach((function(e){return r.push(e)})),r}}],(n=[{key:"length",get:function(){return this._queue.length}},{key:"items",get:function(){return JSON.parse(JSON.stringify(this._queue))}},{key:"push",value:function(e){var t
this._queue=[e].concat(function(e){if(Array.isArray(e))return A(e)}(t=this.slice(0,this.maxSize-1))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return A(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},{key:"forEach",value:function(e){return this._queue.forEach(e)}},{key:"slice",value:function(e,t){return this._queue.slice(e,t)}},{key:"splice",value:function(e,t){return this._queue.splice(e,t)}},{key:"clear",value:function(){this._queue=[]}},{key:"filter",value:function(t){return e.fromArray(this._queue.filter(t),this.maxSize)}}])&&P(t.prototype,n),r&&P(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()
function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}const k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.interval=0,this.tickIntervalId=0,this.callbacks=[]}var t,n
return t=e,(n=[{key:"isRunning",get:function(){return!!this.tickIntervalId}},{key:"tick",value:function(){var e=this
this.callbacks.forEach((function(t){return t(e)}))}},{key:"start",value:function(){return this.tickIntervalId=setInterval(this.tick.bind(this),this.interval),this}},{key:"stop",value:function(){return clearInterval(this.tickIntervalId),this.tickIntervalId=0,this}},{key:"reschedule",value:function(e){return this.stop().every(e).start()}},{key:"every",value:function(e){return this.interval=e,this}},{key:"call",value:function(e){return this.callbacks.push(e),this}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if("object"!==R(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==R(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(i)?i:String(i)),r)}var i}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()
function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var D=function(){function e(t,n,r,i,o){var s=this
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentTenant=t||d.mustBeDefined("tenant"),this.instanceID=n||d.mustBeDefined("instanceID"),this.deviceGroup=r||d.mustBeDefined("deviceGroup"),this.environment=i||d.mustBeDefined("environment"),this.queue=new N(a.EVENTS_BUFFER_SIZE),this.idManager=o,this.dispatchNumber=1,this.actionCounter=0,(new k).every(a.EVENTS_SENDER_INTERVAL).call((function(){s.queue=s.filterQueue()
var e=s.prepareRequest()
s.dispatch(e,a.HORIZON_REQUEST_ENCODING)||e.actions.forEach((function(e){return s.enqueue(e)}))})).call(T).start()}var t,n
return t=e,(n=[{key:"length",get:function(){return this.queue.length}},{key:"setMaxQueueSize",value:function(e){this.queue=N.fromArray(this.queue.items,e)}},{key:"filterQueue",value:function(){var e=+Date.now()-a.EVENTS_DISCARD_AFTER_MSECS
return this.queue.filter((function(t){return t.actionTs>e}))}},{key:"prepareRequest",value:function(){var e=this.queue.splice(0,a.EVENTS_BULK_SIZE)
return this.actionCounter+=e.length,{horizonClientUUID:this.instanceID,horizonClientTenant:this.currentTenant,horizonClientTs:Date.now(),horizonClientType:"js",horizonClientDeviceGroup:this.deviceGroup,horizonDispatchNumber:this.dispatchNumber,horizonActionCounter:this.actionCounter,horizonEnvironment:this.environment,actions:e}}},{key:"isValidRequest",value:function(e){if(!e||e&&!e.actions)throw new Error(d.INVALID_REQUEST)
return e.actions.length>0}},{key:"sendByFetch",value:function(e,t){try{return fetch(e,{method:"POST",credentials:"include",body:t}).then((function(e){e.ok||console.error("Failed to send Horizon events using fetch. Status ".concat(e.status," - ").concat(e.statusText))})),!0}catch(e){return!1}}},{key:"sendByXMLHttpRequest",value:function(e,t,n){try{var r=new XMLHttpRequest
return r.open("POST",e),r.withCredentials=!0,"json"===n&&r.setRequestHeader("Content-Type","application/json"),r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE){var e=r.status,t=r.statusText
0===e||e>=200&&e<400||console.error("Failed to send Horizon events using XMLHttpRequest. Status ".concat(e," - ").concat(t))}},r.send(t),!0}catch(e){return!1}}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",n=a.USE_HTTPS?"https://":"http://",r=this.idManager.getAsKeyValue(),i=r?"?".concat(r):"",o="".concat(n).concat(C().get("_hzt.host")||a.HORIZON_TRACK_HOST,"/event/").concat(this.currentTenant).concat(i),s=function(e){if(!(e in I))throw new Error("".concat(d.UNSUPPORTED_ENCODER," Invalid ").concat(e," encoder."))
return I[e]}(t)
if(!this.isValidRequest(e))return!1
this.dispatchNumber+=1
var c=s(e),l=!1,u=!1,h=!1
try{l=navigator.sendBeacon(o,c)}catch(e){l=!1}return l||(h=this.sendByFetch(o,c))||(u=this.sendByXMLHttpRequest(o,c,t)),l||h||u}},{key:"enqueue",value:function(e){if(!e.actionTs)throw new Error(d.INVALID_TIMESTAMP)
this.queue.push(e)}},{key:"flush",value:function(){for(;this.queue.length>0;){this.queue=this.filterQueue()
var e=this.prepareRequest()
this.dispatch(e,a.HORIZON_REQUEST_ENCODING)}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if("object"!==L(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==L(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(i)?i:String(i)),r)}var i}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()
const M=function(e,t,n,r){var o=i("bus",{}),s="".concat(e,"-").concat(t)
return o[s]||(o[s]=new D(e,a.HORIZON_CLIENT_UUID,t,n,r)),o[s]},H=function(e,t){setTimeout((function(){return e(t)}),1)},V=function(e,t,n,r){var i=new XMLHttpRequest
i.open(e,t,!0),i.onload=function(){return i.status<400?n(JSON.parse(i.response)):r(i.response)},i.onerror=r,i.send()}
function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var U="statusReady",G="statusNotReady",B="statusError",z=function(){return i("schemas",{data:{}})},q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t,this.state=G,this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}}var t,n
return t=e,(n=[{key:"get",value:function(e,t){var n="".concat(e,"-").concat(t)
if(!this.isReady())throw new Error("".concat(d.COMPONENT_NOT_READY))
var r=z().data[n]
if(!r)throw new Error("".concat(d.UNSUPPORTED_TYPE,": ").concat(n))
return r}},{key:"isReady",value:function(){return this.state===U}},{key:"retry",value:function(){var e=this
this.state="statusScheduled",this.callbacks.onRetry.forEach((function(e){return e()})),setTimeout((function(){e.state=G,e.load()}),a.SCHEMA_LOAD_COLLECTION_RETRY_AFTER_MSECS)}},{key:"onLoad",value:function(e){this.callbacks.onLoad.push(e)}},{key:"onRetry",value:function(e){this.callbacks.onRetry.push(e)}},{key:"onReady",value:function(e){if(this.state===U)return e(z().data)
if(this.callbacks.onReady.length>a.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(d.LIMIT_EXCEEDED," Schemas callback stack."))
return this.callbacks.onReady.push(e)}},{key:"onError",value:function(e){this.state===B?e():this.callbacks.onError.push(e)}},{key:"load",value:function(){var e=this,t=z()
if(this.state===G){this.state="statusLoading",this.callbacks.onLoad.forEach((function(e){return e()}))
var n=a.USE_HTTPS?"https://":"http://"
V("GET","".concat(n).concat(this.url),(function(n){t.data=Object.assign(t.data||{},n),e.state=U,e.callbacks.onReady.forEach((function(e){return H(e,t.data)}))}),(function(t){e.state=B,e.callbacks.onError.forEach((function(e){return H(e,t)})),e.retry()}))}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=function(e,t){if("object"!==F(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==F(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===F(i)?i:String(i)),r)}var i}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),W=function(e){return window.cdaaas&&window.cdaaas.SETTINGS?window.cdaaas.SETTINGS[e]:null},$=function(e){return window.utag_data?window.utag_data[e]:null}
function K(){K=function(){return t}
var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag"
function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,s=Object.create(o.prototype),a=new A(r||[])
return i(s,"_invoke",{value:x(e,n,a)}),s}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u
var d="suspendedStart",p="suspendedYield",f="executing",m="completed",g={}
function v(){}function b(){}function y(){}var E={}
l(E,s,(function(){return this}))
var _=Object.getPrototypeOf,O=_&&_(_(P([])))
O&&O!==n&&r.call(O,s)&&(E=O)
var w=y.prototype=v.prototype=Object.create(E)
function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,o,s,a){var c=h(e[i],e,o)
if("throw"!==c.type){var l=c.arg,u=l.value
return u&&"object"==Y(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(u).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var o
i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function x(t,n,r){var i=d
return function(o,s){if(i===f)throw new Error("Generator is already running")
if(i===m){if("throw"===o)throw s
return{value:e,done:!0}}for(r.method=o,r.arg=s;;){var a=r.delegate
if(a){var c=C(a,r)
if(c){if(c===g)continue
return c}}if("next"===r.method)r.sent=r._sent=r.arg
else if("throw"===r.method){if(i===d)throw i=m,r.arg
r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg)
i=f
var l=h(t,n,r)
if("normal"===l.type){if(i=r.done?m:p,l.arg===g)continue
return{value:l.arg,done:r.done}}"throw"===l.type&&(i=m,r.method="throw",r.arg=l.arg)}}}function C(t,n){var r=n.method,i=t.iterator[r]
if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g
var o=h(i,t.iterator,n.arg)
if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g
var s=o.arg
return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function T(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[s]
if(n)return n.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n
return n.value=e,n.done=!0,n}
return o.next=o}}throw new TypeError(Y(t)+" is not iterable")}return b.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:b,configurable:!0}),b.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},S(I.prototype),l(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise)
var s=new I(u(e,n,r,i),o)
return t.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},S(w),l(w,c,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[]
for(var r in t)n.push(r)
return n.reverse(),function e(){for(;n.length;){var r=n.pop()
if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=P,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(t){if(this.done)throw t
var n=this
function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion
if("root"===s.tryLoc)return i("end")
if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),l=r.call(s,"finallyLoc")
if(c&&l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)
if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n]
if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i
break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null)
var s=o?o.completion:{}
return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var i=r.arg
j(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}function Z(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,i)}function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e){var t=function(e,t){if("object"!==Y(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==Y(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"===Y(t)?t:String(t)}var X=function(){return i("idManager",{loggedIDs:null,anonymousIDs:null,sessionIDs:null})},Q=["GLBID","GST","EXT_ID","globoId"],ee="statusReady",te="statusNotReady",ne="statusError",re=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state=n?ee:te,this.url=t,this.bypass=n,this.callbacks={onReady:[],onError:[],onRetry:[],onLoad:[]}}var t,n
return t=e,(n=[{key:"onLoad",value:function(e){this.callbacks.onLoad.push(e)}},{key:"onRetry",value:function(e){this.callbacks.onRetry.push(e)}},{key:"onReady",value:function(e){if(this.state===ee)return e(this.getClientIDs())
if(this.callbacks.onReady.length>a.HORIZON_CALLBACK_STACK_LIMIT)throw new Error("".concat(d.LIMIT_EXCEEDED," IDManager callback stack."))
return this.callbacks.onReady.push(e)}},{key:"onError",value:function(e){this.state===ne?e():this.callbacks.onError.push(e)}},{key:"getAsKeyValue",value:function(){if(!this.isReady())throw new Error("".concat(d.COMPONENT_NOT_READY))
if(this.bypass)return""
var e=this.getClientIDs()
return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}},{key:"getClientIDs",value:function(){var e=X()
return Object.assign(e.loggedIDs||{},e.anonymousIDs||{},e.sessionIDs||{})}},{key:"isReady",value:function(){return this.state===ee}},{key:"retry",value:function(){var e=this
this.state="statusScheduled",this.callbacks.onRetry.forEach((function(e){return e()})),setTimeout((function(){e.state=te,e.load()}),a.IDENTIFICATION_LOAD_RETRY_AFTER_MSECS)}},{key:"setLoggedUser",value:function(e,t){if(-1===Q.indexOf(e))throw Error(d.INVALID_AUTH_TOKEN)
var n,r,i,o=X()
o.loggedIDs=Object.assign(o.loggedIDs||{},(n={},i=t,(r=J(r=e))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n))}},{key:"setAnonymousUser",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=X()
if(null==n.anonymousIDs||t){if(!("glb_uid"in e&&"glb_uid_public"in e))throw d.mustBeDefined("glb_uid and glb_uid_public")
var r={glb_uid:e.glb_uid,glb_uid_public:e.glb_uid_public}
n.anonymousIDs=Object.assign(n.anonymousIDs||{},r)}}},{key:"getAnonymousUser",value:function(){return X().anonymousIDs}},{key:"getHsid",value:function(){return X().sessionIDs}},{key:"setSessionID",value:function(e){e.hsid&&(X().sessionIDs={hsid:e.hsid})}},{key:"removeLoggedUser",value:function(){var e=X()
Q.forEach((function(t){e.loggedIDs[t]&&delete e.loggedIDs[t]}))}},{key:"load",value:function(){var e=this
if(this.state===te){this.state="statusLoading",this.callbacks.onLoad.forEach((function(e){return e()}))
var t=a.USE_HTTPS?"https://":"http://"
V("GET","".concat(t).concat(this.url),(function(t){e.setSessionID(t),e.setAnonymousUser(t,!1),e.state=ee,e.callbacks.onReady.forEach((function(t){return H(t,e.getClientIDs())}))}),(function(t){e.state=ne,e.callbacks.onError.forEach((function(e){return H(e,t)})),e.retry()}))}}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J(r.key),r)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),ie=function(e){var t=X()
if(!t.instance){var n=e||"".concat(a.HORIZON_TRACK_HOST,"/").concat(a.HORIZON_TRACK_IDENTIFICATION_RESOURCE),r=!1===a.AVOID_COOKIE_USAGE
t.instance=new re(n,r)}return t.instance},oe=function(){var e,t=(e=K().mark((function e(){var t,n
return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.AVOID_COOKIE_USAGE){e.next=7
break}if((t=ie()).isReady()){e.next=5
break}return e.next=5,new Promise((function(e,n){t.onError((function(){n(new Error("Error loading HSID"))})),t.onReady((function(){return e()})),t.state===te&&t.load()})).catch((function(e){throw e}))
case 5:return n=t.getHsid(),e.abrupt("return",n?n.hsid:void 0)
case 7:return e.abrupt("return",C().get("hsid"))
case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments
return new Promise((function(r,i){var o=e.apply(t,n)
function s(e){Z(o,r,i,s,a,"next",e)}function a(e){Z(o,r,i,s,a,"throw",e)}s(void 0)}))})
return function(){return t.apply(this,arguments)}}()
const se={getInstance:ie,getContextManager:X,setLoggedUser:function(e,t){if(!a.AVOID_COOKIE_USAGE)throw Error(d.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
e&&0!==e.length||d.mustBeDefined("tokenName"),t&&0!==t.length||d.mustBeDefined("tokenValue"),ie().setLoggedUser(e,t)},removeLoggedUser:function(){if(!a.AVOID_COOKIE_USAGE)throw Error(d.USE_MANAGER_ONLY_WHEN_AVOIDING_COOKIE)
ie().removeLoggedUser()},setAnonymousUser:function(e){ie().setAnonymousUser(e)},getAnonymousUser:function(){return ie().getAnonymousUser()},getHsid:oe}
function ae(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ae(Object(n),!0).forEach((function(t){var r,i,o
r=e,i=t,o=n[t],(i=ue(i))in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ue(e){var t=function(e,t){if("object"!==le(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==le(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"===le(t)?t:String(t)}var he="stateNotReady",de="stateLoading",pe=["web","instant-article","app"]
const fe=function(){function e(){var n=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"web"
if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tenant=r||W("SITE_ID")||$("ut.profile")||"unknown",this.deviceGroup=o||W("MOBILE_GROUP")||$("platform")||"unknown",this.defaultContentType=s,-1===pe.indexOf(c))throw Error(d.INVALID_ENVIRONMENT)
this.environment=c,this.validator=E,this.clientVersion=a.PACKAGE_VERSION,this.state=he,this.referer=document.referrer
var l=null,u=null,h=null,p=function(){return i("horizonActionInfo",{horizonActionSequence:0,horizonClientContextID:t()()})}
this.getHorizonActionSequence=function(){var e=p()
return 2147483647===e.horizonActionSequence&&(e.horizonActionSequence=0),e.horizonActionSequence+=1,e.horizonActionSequence},this.getHorizonClientContextID=function(){return p().horizonClientContextID},this.getHorizonActionExtraAttributes=function(){return""},this.updateHorizonClientContextID=function(){p().horizonClientContextID=t()()},this.setSchemasProvider=function(e){l=e},this.getSchemasProvider=function(){if(!l){var e=((t=z()).provider||(t.provider=new q("".concat(a.HORIZON_SCHEMAS_HOST,"/schemas"))),t.provider)
n.setSchemasProvider(e)}var t
return l},this.setEventBus=function(e){u=e},this.getEventBus=function(){if(!u){var e=M(n.tenant,n.deviceGroup,n.environment,n.getIdManager())
n.setEventBus(e)}return u},this.setIdManager=function(e){h=e},this.getIdManager=function(){if(!h){var e=se.getInstance()
n.setIdManager(e)}return h},this.isReady=function(){return!!l&&!!h&&n.validator.isReady()&&l.isReady()&&h.isReady()},window.addEventListener("beforeunload",(function(){n.unload()}))}var n,r
return n=e,(r=[{key:"useDefaultContentType",value:function(e){this.defaultContentType=e}},{key:"setValidator",value:function(e){this.validator=e}},{key:"setReferer",value:function(e){this.referer=e||document.referrer}},{key:"unload",value:function(){this.flush()}},{key:"getScopeInfo",value:function(e){return{url:document.location.href,actionTs:+Date.now(),horizonClientVersion:this.clientVersion,horizonClientReferer:this.referer,horizonRelationId:e,horizonActionUUID:t()(),horizonActionSequence:this.getHorizonActionSequence(),horizonClientContextID:this.getHorizonClientContextID(),horizonActionExtraAttributes:this.getHorizonActionExtraAttributes()}}},{key:"validateBeforeEnqueue",value:function(e){var t=this.getSchemasProvider().get(e.id,e.version)
this.validator.validateFor(e,t)}},{key:"onReady",value:function(e){this.validator.isReady()?this.getSchemasProvider().isReady()?this.getIdManager().isReady()?(this.state="stateReady",e()):(this.state=de,this.getIdManager().onReady(e),this.getIdManager().load()):(this.state=de,this.getSchemasProvider().onReady(e),this.getSchemasProvider().load()):(this.state=de,this.validator.onReady(e),this.validator.load())}},{key:"flush",value:function(){var e=this
this.isReady()?this.getEventBus().flush():this.onReady((function(){return e.flush()}))}},{key:"send",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(null!=n&&"string"!=typeof n)throw new Error("".concat(d.INVALID_RELATION_ID," Wrong relationId type. It should be a String: actual type is ").concat(le(n)));[].concat(e).forEach((function(e){t.validator.validateArgs(e),t.sendWithInfo(e,t.getScopeInfo(n))}))}},{key:"sendWithInfo",value:function(e,t){var n=this
if(!this.isReady())return this.state===he&&this.flush(),void this.onReady((function(){return n.sendWithInfo(e,t)}))
this.validateBeforeEnqueue(e)
var r=ce(ce({},t),e)
r.contentType||(this.defaultContentType||d.mustBeDefined("contentType"),r.contentType=this.defaultContentType),this.getEventBus().enqueue(r)}},{key:"newContextId",value:function(){this.updateHorizonClientContextID()}},{key:"getContextId",value:function(){return this.getHorizonClientContextID()}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ue(r.key),r)}}(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}()
var me={setLoggedUser:se.setLoggedUser,removeLoggedUser:se.removeLoggedUser,setAnonymousUser:se.setAnonymousUser,getAnonymousUser:se.getAnonymousUser,getHsid:se.getHsid}})(),r})(),e.exports=r()},function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=n(10),i=function(){function e(e,t){this.dt=e,this.ins=t,this.type="throttle",this.out=null,this.id=null}return e.prototype._start=function(e){this.out=e,this.ins._add(this)},e.prototype._stop=function(){this.ins._remove(this),this.out=null,this.id=null},e.prototype.clearInterval=function(){var e=this.id
null!==e&&clearInterval(e),this.id=null},e.prototype._n=function(e){var t=this,n=this.out
n&&(this.id||(n._n(e),this.id=setInterval((function(){t.clearInterval()}),this.dt)))},e.prototype._e=function(e){var t=this.out
t&&(this.clearInterval(),t._e(e))},e.prototype._c=function(){var e=this.out
e&&(this.clearInterval(),e._c())},e}()
t.default=function(e){return function(t){return new r.Stream(new i(e,t))}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"EventEmitter",(function(){return i}))
var r=n(20)
class i{constructor(){this.subscribers=[]}on(e,t){this.subscribers.push({eventName:e,callback:t})}off(e,t){for(let n=0;n<this.subscribers.length;n++){const{eventName:r,callback:i}=this.subscribers[n]
r===e&&i===t&&(this.subscribers.splice(n,1),n--)}}trigger(e,t){this.subscribers.filter(t=>{let{eventName:n}=t
return n===e}).forEach(e=>{try{e.callback(t)}catch(n){Object(r.error)(n)}})}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"HorizonBase",(function(){return O})),n.d(t,"PostClick",(function(){return w})),n.d(t,"PostView",(function(){return S})),n.d(t,"PostViewHeadline",(function(){return I}))
var r=n(77),i=n.n(r),o=n(24),s=n.n(o),a=n(85),c=n(86),l=n(218),u=n(105),h=n(22),d=n(221),p=n(106),f=(n(94),n(20))
function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const g={destaque:"d",basico:"b",video:"v",tempo_real:"r",card:"a",cobertura:"u",placeholder:"h",especial_publicitario:"e",publicidade:"p",component:"c"},v={[c.$Advertises.staticName]:"a",[l.$Cards.staticName]:"d",[u.$DistributedComponents.staticName]:"c",[h.$Falkor.staticName]:"f",[d.$PushStream.staticName]:"p",[p.$Recommendation.staticName]:"r"},b=()=>1,y=(e,t)=>n=>{const r=e[n]
return s()(r)?t:r},E={feedType:y({automatico:"a",editorial:"e",elastic:"l",folder:"f",produto:"p",semantico:"s"},"ukn"),format:y(g,"ukn"),grouped:b,pinned:b,source:y(v,"ukn")},_=(e,t)=>t in E?E[t](e):e
class O{constructor(e){this.reporter=e}toSend(){const e={},t=new Set([...this.fields,...this.optionalFields])
for(const r of t){let t
try{t=this.reporter[r]}catch(n){Object(f.error)(n,this.reporter.debug())}if(s()(t)){if(this.fields.includes(r))throw new Error('Field "'+r+'" is required in action sending')}else e[r]=t}return{id:this.schema,version:this.version,properties:i()(e,_)}}}class w extends O{constructor(){super(...arguments),this.schema="bastian-post-click",this.version="1.1",this.fields=["feedId","position","postId"],this.optionalFields=["areaDesktop","contentId"]}}class S extends O{constructor(){super(...arguments),this.schema="bastian-post-view",this.version="2.0",this.fields=["feedId","postId","contentType","feedType","feedViewTime","format","position","size","source","viewTime"],this.optionalFields=["contentId","areaDesktop","attachment","contentStatus","grouped","pinned","wordCountSummary","wordCountTitle"]}}class I extends S{toSend(){const e=super.toSend()
return m({},e,{properties:m({},e.properties,{format:g.destaque,areaDesktop:a.DESKTOP_AREAS.HEADLINE,size:a.POST_SIZES.LARGE})})}}},function(e,t,n){var r=n(78),i=n(81),o=n(84)
e.exports=function(e,t){var n={}
return t=o(t,3),i(e,(function(e,i,o){r(n,i,t(e,i,o))})),n}},function(e,t,n){var r=n(79)
e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t,n){var r=n(80),i=function(){try{var e=r(Object,"defineProperty")
return e({},"",{}),e}catch(t){}}()
e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(82),i=n(33)
e.exports=function(e,t){return e&&r(e,t,i)}},function(e,t,n){var r=n(83)()
e.exports=r},function(e,t){e.exports=function(e){return function(t,n,r){for(var i=-1,o=Object(t),s=r(t),a=s.length;a--;){var c=s[e?a:++i]
if(!1===n(o[c],c,o))break}return t}}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"POST_SIZES",(function(){return r})),n.d(t,"DESKTOP_AREAS",(function(){return i}))
const r={SMALL:"p",MEDIUM:"m",LARGE:"g"},i={HEADLINE:"t",LEFT:"e",RIGHT:"d"}},function(e,t,n){"use strict"
n.r(t),n.d(t,"$Advertises",(function(){return l}))
var r=n(10),i=n.n(r),o=n(20),s=n(55)
let a
const c={}
class l{static getInstance(){return a||(a=new l(c)),a}constructor(e){e!==c&&Object(o.warn)("Class $Advertise is a singleton and shouldn't be called directly.")
const t=this
this.getNextPosition=h(),this.stream=i.a.create({start(e){t.listener=e},stop(){t.listener=null}})}request(){this.listener&&this.listener.next({id:"banner_"+this.getNextPosition(),type:"advertise",source:l.staticName})}}l.staticName="$Advertises"
const u=e=>(e=e||0,()=>e++),h=()=>{var e
const t="Home"===(null===(e=window.utag_data)||void 0===e?void 0:e.content_type)&&s.At.smallScreen?["mobile1","feed_especial","rm2_feed","rm3_feed"]:["feed_especial","feed__0"],n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
let r=-1
const i=t.map(()=>u(1))
return()=>(r=(r+1)%t.length,t[r]+"__"+i[r]())}("middle_feed","feed")
return()=>t.length>0?t.shift():""+n()}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Engine",(function(){return i})),n.d(t,"Renderer",(function(){return o})),n.d(t,"createElement",(function(){return s}))
var r=n(88)
const i={render:r.render,Component:r.Component,Fragment:r.Fragment,createElement:r.h,cloneElement:r.cloneElement},o=i,s=r.h},function(e,t,n){"use strict"
n.r(t),n.d(t,"render",(function(){return D})),n.d(t,"hydrate",(function(){return M})),n.d(t,"createElement",(function(){return g})),n.d(t,"h",(function(){return g})),n.d(t,"Fragment",(function(){return y})),n.d(t,"createRef",(function(){return b})),n.d(t,"isValidElement",(function(){return i})),n.d(t,"Component",(function(){return E})),n.d(t,"cloneElement",(function(){return H})),n.d(t,"createContext",(function(){return V})),n.d(t,"toChildArray",(function(){return x})),n.d(t,"_unmount",(function(){return k})),n.d(t,"options",(function(){return r}))
var r,i,o,s,a,c,l,u,h={},d=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i
function f(e,t){for(var n in t)e[n]=t[n]
return e}function m(e){var t=e.parentNode
t&&t.removeChild(e)}function g(e,t,n){var r,i=arguments,o={}
for(r in t)"key"!==r&&"ref"!==r&&(o[r]=t[r])
if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(i[r])
if(null!=n&&(o.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===o[r]&&(o[r]=e.defaultProps[r])
return v(e,o,t&&t.key,t&&t.ref)}function v(e,t,n,i){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0}
return r.vnode&&r.vnode(o),o}function b(){return{}}function y(e){return e.children}function E(e,t){this.props=e,this.context=t}function _(e,t){if(null==t)return e.__?_(e.__,e.__.__k.indexOf(e)+1):null
for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e
return"function"==typeof e.type?_(e):null}function O(e){var t,n
if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e
break}return O(e)}}function w(e){(!e.__d&&(e.__d=!0)&&o.push(e)&&!s++||c!==r.debounceRendering)&&((c=r.debounceRendering)||a)(S)}function S(){for(var e;s=o.length;)e=o.sort((function(e,t){return e.__v.__b-t.__v.__b})),o=[],e.some((function(e){var t,n,r,i,o,s
e.__d&&(o=(i=(t=e).__v).__e,(s=t.__P)&&(n=[],r=A(s,i,f({},i),t.__n,void 0!==s.ownerSVGElement,null,n,null==o?_(i):o),P(n,i),r!=o&&O(i)))}))}function I(e,t,n,r,i,o,s,a,c){var l,u,p,f,g,v,b,y=n&&n.__k||d,E=y.length
if(a==h&&(a=null!=o?o[0]:E?_(n,0):null),l=0,t.__k=x(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(p=y[l])||p&&n.key==p.key&&n.type===p.type)y[l]=void 0
else for(u=0;u<E;u++){if((p=y[u])&&n.key==p.key&&n.type===p.type){y[u]=void 0
break}p=null}if(f=A(e,n,p=p||h,r,i,o,s,a,c),(u=n.ref)&&p.ref!=u&&(b||(b=[]),p.ref&&b.push(p.ref,null,n),b.push(u,n.__c||f,n)),null!=f){var d
if(null==v&&(v=f),void 0!==n.__d)d=n.__d,n.__d=void 0
else if(o==p||f!=a||null==f.parentNode){e:if(null==a||a.parentNode!==e)e.appendChild(f),d=null
else{for(g=a,u=0;(g=g.nextSibling)&&u<E;u+=2)if(g==f)break e
e.insertBefore(f,a),d=a}"option"==t.type&&(e.value="")}a=void 0!==d?d:f.nextSibling,"function"==typeof t.type&&(t.__d=a)}else a&&p.__e==a&&a.parentNode!=e&&(a=_(p))}return l++,n})),t.__e=v,null!=o&&"function"!=typeof t.type)for(l=o.length;l--;)null!=o[l]&&m(o[l])
for(l=E;l--;)null!=y[l]&&k(y[l],y[l])
if(b)for(l=0;l<b.length;l++)R(b[l],b[++l],b[++l])}function x(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null))
else if(Array.isArray(e))for(var r=0;r<e.length;r++)x(e[r],t,n)
else n.push(t?t("string"==typeof e||"number"==typeof e?v(null,e,null,null):null!=e.__e||null!=e.__c?v(e.type,e.props,e.key,null):e):e)
return n}function C(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===p.test(t)?n+"px":null==n?"":n}function T(e,t,n,r,i){var o,s,a,c,l
if(i?"className"===t&&(t="class"):"class"===t&&(t="className"),"key"===t||"children"===t);else if("style"===t)if(o=e.style,"string"==typeof n)o.cssText=n
else{if("string"==typeof r&&(o.cssText="",r=null),r)for(s in r)n&&s in n||C(o,s,"")
if(n)for(a in n)r&&n[a]===r[a]||C(o,a,n[a])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,j,c),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,j,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!i&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function j(e){this.l[e.type](r.event?r.event(e):e)}function A(e,t,n,i,o,s,a,c,l){var u,h,d,p,m,g,v,b,_,O,w=t.type
if(void 0!==t.constructor)return null;(u=r.__b)&&u(t)
try{e:if("function"==typeof w){if(b=t.props,_=(u=w.contextType)&&i[u.__c],O=u?_?_.props.value:u.__:i,n.__c?v=(h=t.__c=n.__c).__=h.__E:("prototype"in w&&w.prototype.render?t.__c=h=new w(b,O):(t.__c=h=new E(b,O),h.constructor=w,h.render=L),_&&_.sub(h),h.props=b,h.state||(h.state={}),h.context=O,h.__n=i,d=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=w.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=f({},h.__s)),f(h.__s,w.getDerivedStateFromProps(b,h.__s))),p=h.props,m=h.state,d)null==w.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount)
else{if(null==w.getDerivedStateFromProps&&b!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,O),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,O)){for(h.props=b,h.state=h.__s,h.__d=!1,h.__v=t,t.__e=n.__e,t.__k=n.__k,h.__h.length&&a.push(h),u=0;u<t.__k.length;u++)t.__k[u]&&(t.__k[u].__=t)
break e}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,O),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(p,m,g)}))}h.context=O,h.props=b,h.state=h.__s,(u=r.__r)&&u(t),h.__d=!1,h.__v=t,h.__P=e,u=h.render(h.props,h.state,h.context),t.__k=null!=u&&u.type==y&&null==u.key?u.props.children:Array.isArray(u)?u:[u],null!=h.getChildContext&&(i=f(f({},i),h.getChildContext())),d||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(p,m)),I(e,t,n,i,o,s,a,c,l),h.base=t.__e,h.__h.length&&a.push(h),v&&(h.__E=h.__=null),h.__e=!1}else t.__e=N(n.__e,t,n,i,o,s,a,l);(u=r.diffed)&&u(t)}catch(e){r.__e(e,t,n)}return t.__e}function P(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function N(e,t,n,r,i,o,s,a){var c,l,u,p,f,m=n.props,g=t.props
if(i="svg"===t.type||i,null!=o)for(c=0;c<o.length;c++)if(null!=(l=o[c])&&((null===t.type?3===l.nodeType:l.localName===t.type)||e==l)){e=l,o[c]=null
break}if(null==e){if(null===t.type)return document.createTextNode(g)
e=i?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,g.is&&{is:g.is}),o=null}if(null===t.type)m!==g&&e.data!=g&&(e.data=g)
else if(t!==n){if(null!=o&&(o=d.slice.call(e.childNodes)),u=(m=n.props||h).dangerouslySetInnerHTML,p=g.dangerouslySetInnerHTML,!a){if(m===h)for(m={},f=0;f<e.attributes.length;f++)m[e.attributes[f].name]=e.attributes[f].value;(p||u)&&(p&&u&&p.__html==u.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,i){var o
for(o in n)o in t||T(e,o,null,n[o],r)
for(o in t)i&&"function"!=typeof t[o]||"value"===o||"checked"===o||n[o]===t[o]||T(e,o,t[o],n[o],r)})(e,g,m,i,a),t.__k=t.props.children,p||I(e,t,n,r,"foreignObject"!==t.type&&i,o,s,h,a),a||("value"in g&&void 0!==g.value&&g.value!==e.value&&(e.value=null==g.value?"":g.value),"checked"in g&&void 0!==g.checked&&g.checked!==e.checked&&(e.checked=g.checked))}return e}function R(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function k(e,t,n){var i,o,s
if(r.unmount&&r.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||R(i,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){r.__e(e,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&k(i[s],t,n)
null!=o&&m(o)}function L(e,t,n){return this.constructor(e,n)}function D(e,t,n){var i,o,s
r.__&&r.__(e,t),o=(i=n===l)?null:n&&n.__k||t.__k,e=g(y,null,[e]),s=[],A(t,(i?t:n||t).__k=e,o||h,h,void 0!==t.ownerSVGElement,n&&!i?[n]:o?null:d.slice.call(t.childNodes),s,n||h,i),P(s,e)}function M(e,t){D(e,t,l)}function H(e,t){return t=f(f({},e.props),t),arguments.length>2&&(t.children=d.slice.call(arguments,2)),v(e.type,t,t.key||e.key,t.ref||e.ref)}function V(e){var t={},n={__c:"__cC"+u++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,i=this
return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=i,t},this.shouldComponentUpdate=function(t){e.value!==t.value&&r.some((function(e){e.context=t.value,w(e)}))},this.sub=function(e){r.push(e)
var t=e.componentWillUnmount
e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}}
return n.Consumer.contextType=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return w(n.__E=n)}catch(t){e=t}throw e}},i=function(e){return null!=e&&void 0===e.constructor},E.prototype.setState=function(e,t){var n
n=this.__s!==this.state?this.__s:this.__s=f({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&f(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),w(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},E.prototype.render=y,o=[],s=0,a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=h,u=0},function(e,t,n){"use strict"
n.r(t),n.d(t,"HEADLINES_PLACEHOLDER",(function(){return r})),n.d(t,"PLACEHOLDER",(function(){return i})),n.d(t,"ROOT",(function(){return o})),n.d(t,"FEED",(function(){return s})),n.d(t,"PAGE",(function(){return a})),n.d(t,"ITEM",(function(){return c})),n.d(t,"POST",(function(){return l})),n.d(t,"CARD",(function(){return u})),n.d(t,"LOAD_MORE",(function(){return h})),n.d(t,"LOAD_MORE_LINK",(function(){return d})),n.d(t,"BANNER_SLB_MEIO",(function(){return p})),n.d(t,"SHOWTIME_INITIALIZED",(function(){return f})),n.d(t,"AREATEMPLATE_ESQUERDA",(function(){return m})),n.d(t,"AREATEMPLATE_DIREITA",(function(){return g})),n.d(t,"BS_HOME",(function(){return v}))
const r=".areatemplate-showtime",i="#feed-placeholder",o=".feed-root",s=".bstn-feed",a=".bastian-page",c=".bastian-feed-item",l=".feed-post",u=".bastian-card-mobile, .bastian_card__mobile",h=".load-more",d=".load-more > a",p="#banner_slb_meio",f=".showtime--initialized",m=".areatemplate-esquerda",g=".areatemplate-direita",v=".bs-home"},function(e,t,n){"use strict"
n.r(t),n.d(t,"ItemReporter",(function(){return a})),n.d(t,"ItemPostReporter",(function(){return c}))
var r=n(221),i=n(25),o=n(94)
function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class a extends o.BaseReporter{constructor(e,t){void 0===t&&(t={}),super(e),e.itemReference&&(this.itemReference=e.itemReference),e.positionIndex&&(this.positionIndex=e.positionIndex)
const n={}
for(const r of["face","size"])n[r]=Object(i.get)(e.itemReference.state.data,"klass."+r.toUpperCase())
this.itemProps=s({},n,{},t)}get format(){return this.itemProps.face}get size(){return this.itemProps.size}getPostPosition(){return this.data.source===r.$PushStream.staticName?0:this.positionIndex.getPosition(this.itemReference)}}const c=Object(o.createPostReporter)(a)},function(e,t,n){var r=n(62),i=n(63),o=n(53),s=i((function(e,t,n){return r(e,o(t)||0,n)}))
e.exports=s},function(e,t,n){"use strict"
n.r(t),n.d(t,"DEVICES",(function(){return r}))
const r={feature:1,smart:2,tablet:3,desktop:4}},function(e,t,n){"use strict"
n.r(t),n.d(t,"now",(function(){return l}))
var r=n(5),i=n.n(r),o=n(54),s=n(25)
const a=["now","webkitNow","msNow","mozNow"].map(e=>Object(s.get)(o.Globals,"performance."+e)).find(i.a)
let c
const l=c=i()(a)?()=>parseInt(a.call(performance),10):()=>(new Date).getTime()},function(e,t,n){"use strict"
n.r(t),n.d(t,"AbstractReporter",(function(){return a})),n.d(t,"BaseReporter",(function(){return c})),n.d(t,"createPostReporter",(function(){return h}))
var r=n(95),i=n.n(r),o=n(25)
function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class a{debug(){return this}}class c extends a{constructor(e){let{data:t,telemetry:n}=e
super(),this.telemetry=n,this.data=s({},t),this.features=new Map}get attachment(){const e=[]
for(const[t,n]of this.features)n()&&e.push(t)
if(e.length>0)return e}get contentType(){return"esppub"===this.data.type?"especial-publicitario":this.data.type}get position(){return this.getPostPosition()}get postId(){return this.data.id}get source(){return String(this.data.source)}get viewTime(){return i()(this.telemetry.getSeenTime()/1e3)}addFeatureChecks(e){for(const t in e){const n=e[t]
this.features.set(t,n)}}setContent(e){this.data=s({},this.data.content,{},e)}static upgrade(e,t){void 0===t&&(t={})
const n=new this(s({},e.reporter),s({},t))
return e.reporter=n,n}}const l=/\s+/
function u(e){if(e)return e.split(l).length}function h(e){return class extends e{get contentId(){let e=Object(o.get)(this.data,"content.url")
return e||(e=Object(o.get)(this.data,"content.video.id"))&&(e=e.toString()),e}get pinned(){if(Object(o.get)(this.data,"pinned"))return!0}get wordCountSummary(){const e=this.attachment
if(Array.isArray(e)&&e.includes("resumo"))return u(Object(o.get)(this.data,"content.summary"))}get wordCountTitle(){return u(Object(o.get)(this.data,"content.title"))}}}},function(e,t,n){var r=n(96)("round")
e.exports=r},function(e,t,n){var r=n(97),i=n(18),o=n(53),s=n(99),a=r.isFinite,c=Math.min
e.exports=function(e){var t=Math[e]
return function(e,n){if(e=o(e),(n=null==n?0:c(i(n),292))&&a(e)){var r=(s(e)+"e").split("e"),l=t(r[0]+"e"+(+r[1]+n))
return+((r=(s(l)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}},function(e,t,n){var r=n(98),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")()
e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t
e.exports=n}).call(this,n(12))},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"as",(function(){return o}))
var r=n(101)
let i
const o=i=function(e,t){return function(n){Object(r.set)(e,"_refs."+(t||"node"),n)}}},function(e,t,n){"use strict"
n.r(t)
var r=n(102),i=n.n(r)
n.d(t,"set",(function(){return i.a}))},function(e,t,n){var r=n(103)
e.exports=function(e,t,n){var i=/^(.+)\.(.+)$/.exec(t)
i?r(e,i[1])[i[2]]=n:e[t]=n}},function(e,t,n){var r=n(104)
e.exports=function(e,t){return t?(r(t.split("."),(function(t){e[t]||(e[t]={}),e=e[t]})),e):e}},function(e,t){e.exports=function(e,t,n){if(null!=e)for(var r=-1,i=e.length;++r<i&&!1!==t.call(n,e[r],r,e););}},function(e,t,n){"use strict"
n.r(t),n.d(t,"$DistributedComponents",(function(){return d}))
var r=n(6),i=n.n(r),o=n(10),s=n.n(o),a=n(20),c=n(55)
function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let u
const h={}
class d{static getInstance(e){if(e&&!u&&(u=new d(e,h)),u)return u
throw new Error("Couldn't return an $DistributedComponents instance")}constructor(e,t){this.buffer=[],t!==h&&Object(a.warn)("Class $DistributedComponents is a singleton and shouldn't be called directly."),Array.isArray(e.specialItems)&&this.store([...e.specialItems])
const n=this
this.stream=s.a.create({start(e){n.listener=e},stop(){n.listener=null}})}store(e){this.buffer.push(...e)}isEmpty(){return 0===this.buffer.length}request(e){const t=i()(e)
if(!((c.At.smallScreen||!t)&&this.listener&&this.buffer.length>0))return!1
this.listener.next(l({},this.buffer.shift(),{key:Math.random().toString(),source:d.staticName}))}}d.staticName="$DistributedComponents"},function(e,t,n){"use strict"
n.r(t),n.d(t,"prepare",(function(){return E})),n.d(t,"$Recommendation",(function(){return C}))
var r=n(1),i=n.n(r),o=n(9),s=n.n(o),a=n(20),c=n(23),l=n(54),u=n(56),h=n(57),d=n(107),p=n(8),f=n(22)
function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let g
const v={},b=e=>{let{tag:t}=e
i()(t)&&c.Configs.set("recommendationTag",t)},y=/#.*$/,E=e=>(Object(h.has)(e,"content.url")&&(e.key=e.content.url.replace(y,""),e.content.url=e.content.url.replace(y,"")),e.source="$Recommendation",e),_=async()=>await fetch(Object(d.isEnvQA)()?"https://horizon-track.qa.globoi.com/id":"https://horizon-track.globo.com/id",{credentials:"include"}).then(e=>e.json()),O=e=>{const t=("; "+document.cookie).split("; "+e+"=")
if(2===t.length)return t.pop().split(";").shift()},w=async()=>{try{const e=await _()
return Promise.resolve(e.hsid)}catch(e){return console.log(e),O("hsid")}},S=async()=>{try{const e=await _()
return Promise.resolve(e.glb_uid)}catch(e){return console.log(e),O("glb_uid")}},I=(e,t)=>{const n=new RegExp("^(?!.*SMART).*?-FEED-(?:.*-)?(?:item|user)$"),r=new RegExp("^.*-FEED-(?:.*-)?(?:SMART-)(?:item|user)$"),i=new RegExp("(?:item|user)$"),o=(e=>{const t=u.Settings.get("PAGINABLE")
return t&&e.indexOf("item")>=0?"user":!t&&e.indexOf("user")>=0?"item":""})(e),s=o.length?e.replace(i,o):e
if(n.test(s)){if(!t){const e=s.search(i),t=s.slice(e)
return s.replace(i,"SMART-"+t)}return s}return r.test(e)&&t?s.replace("-SMART-","-"):s},x=(e,t)=>{var n
return{id:e.id,feedId:e.feedId,lastPublication:e.lastPublication,modified:e.modified,content:m({url:"video"===e.type?null===(n=e.content.video)||void 0===n?void 0:n.url:e.content.url},e.content),aggregatedPosts:e.aggregatedPosts||[],publication:e.publication,created:e.created,tenantId:e.tenantId,type:e.type,_experiment_properties:t._experiment_properties,_documentKey:""+t.tag}}
class C extends p.$OnDemandSource{static getInstance(e){if(e&&!g&&(g=new C(e,v)),g)return g
throw new Error("Couldn't return a $Recommendation instance")}constructor(e,t){t!==v&&Object(a.warn)("Class $Recommendation is a singleton and shouldn't be called directly."),super(e.items),this.receivedZeroItems=T(e.items),this.nextFetch=2,this.nextPage=2,b(e)}whenToFetch(){return 0===this.buffer.length}static async buildRequestUrl(e){const t=-1!==["tablet","desktop"].indexOf(u.Settings.get("DEVICE_GROUP","desktop")),n="home"===u.Settings.get("FULL_FEED_SSR_TYPE"),r=u.Settings.get("RECOMMENDATION.URL",u.Settings.get("RECOMMENDATION_URL"))||"",i=String(u.Settings.get("PORTAL")).toUpperCase(),o=n?"":"&anchors.item="+window.location.href.replace(/^(http|https):/,""),s=c.Configs.get("recommendationContentId")||i+"-FEED-user",a=I(s,t),h=l.Globals.location.hash.match(/(?:^#|&)alternative=([^&]+)/),d=h?"&forcedABAlternative="+h[1]:"",p=await S(),f=p?"&glb_uid="+p:"",m=await w()
return""+r+a+"?responseFormat=legacyPublishing&page="+e+"&perPage=10"+d+f+(m?"&hsid="+m:"")+o}async howToFetch(){const e=this.nextFetch
if(s()(e)&&(!this.receivedZeroItems||c.Configs.get("isRecEditorial"))){const t=await C.buildRequestUrl(e)
fetch(t,{credentials:"include"}).then(e=>{if(200!==e.status){console.error("[bastian] ERROR",e)
const t=()=>new Error("Network error: ")
return Promise.reject(t)}return l.Globals.bstn.hasSentImpression=!1,e.json()}).then(this.unlock).then(e=>{if(this.setNextFetch(this.nextFetch+1),b(e),Array.isArray(e))this.saveAndResumeStream(e.map(E),e=>{this.receivedZeroItems=T(e)})
else if(c.Configs.get("isRecEditorial")&&e._experiment_properties){const t=10,n=f.$Falkor.getInstance().buffer.filter(e=>e._experiment_properties),r=f.$Falkor.getInstance().buffer.filter(e=>!e._experiment_properties)
if(r.length){const i=r.map((n,r)=>(r<t&&(n=x(n,e)),n))
f.$Falkor.getInstance().buffer=[...n,...i],c.Configs.set("experimentData",e._experiment_properties),l.Globals.bstn.experimentData=e._experiment_properties,this.setNextPage(this.nextPage+1)}else this.setNextFetch(this.nextFetch-1)}else this.receivedZeroItems=!0}).catch(e=>{c.Configs.unset("recommendationTag"),this.listener&&this.listener.error(e)})}}whenToComplete(){return this.receivedZeroItems}}C.staticName="$Recommendation"
const T=e=>0===e.length},function(e,t,n){"use strict"
function r(){return window.location.hostname.includes(".qa.globoi")||window.location.hostname.includes("localhost")}n.r(t),n.d(t,"isEnvQA",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"patch",(function(){return a}))
var r=n(221),i=n(55),o=n(15),s=n(29)
function a(e,t){Object.isFrozen(e)||(e.PostIndex={register:o.PostIndex.register,has:o.PostIndex.has,filter:o.PostIndex.filter},e.getItemPosition=function(e){return()=>e.source===r.$PushStream?0:e.itemIndex.getPosition(e.item)}(t),e.getAreaId=function(e){return()=>e.areaId}(t),e.implode=t.implode,e.isLargeScreen=i.At.largeScreen,e.choosePicture=s.choosePicture,delete e.patch),Object.freeze(e)}},function(e,t,n){var r=n(4),i=n(110)
e.exports=function(e){return r(e)&&1===e.nodeType&&!i(e)}},function(e,t,n){var r=n(2),i=n(111),o=n(4),s="[object Object]",a=Function.prototype,c=Object.prototype,l=a.toString,u=c.hasOwnProperty,h=l.call(Object)
e.exports=function(e){if(!o(e)||r(e)!=s)return!1
var t=i(e)
if(null===t)return!0
var n=u.call(t,"constructor")&&t.constructor
return"function"==typeof n&&n instanceof n&&l.call(n)==h}},function(e,t,n){var r=n(34)(Object.getPrototypeOf,Object)
e.exports=r},function(e,t,n){"use strict"
n.r(t),n.d(t,"render",(function(){return g})),n.d(t,"renderToString",(function(){return g})),n.d(t,"shallowRender",(function(){return m}))
var r=n(88),i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,o=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},s=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"\t"))},a=function(e,t,n){return String(e).length>(t||40)||!n&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},c={}
function l(e){var t=""
for(var n in e){var r=e[n]
null!=r&&(t&&(t+=" "),t+=c[n]||(c[n]=n.replace(/([A-Z])/g,"-$1").toLowerCase()),t+=": ",t+=r,"number"==typeof r&&!1===i.test(n)&&(t+="px"),t+=";")}return t||void 0}function u(e,t){for(var n in t)e[n]=t[n]
return e}function h(e,t){return Array.isArray(t)?t.reduce(h,e):null!=t&&!1!==t&&e.push(t),e}var d={shallow:!0},p=[],f=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/
g.render=g
var m=function(e,t){return g(e,t,d)}
function g(e,t,n,i,c,d){if(null==e||"boolean"==typeof e)return""
Array.isArray(e)&&(e=Object(r.createElement)(r.Fragment,null,e))
var m=e.type,v=e.props,b=!1
t=t||{}
var y,E=(n=n||{}).pretty,_=E&&"string"==typeof E?E:"\t"
if("object"!=typeof e&&!m)return o(e)
if("function"==typeof m){if(b=!0,!n.shallow||!i&&!1!==n.renderRootComponent){if(m===r.Fragment){var O="",w=[]
h(w,e.props.children)
for(var S=0;S<w.length;S++)O+=(S>0&&E?"\n":"")+g(w[S],t,n,!1!==n.shallowHighOrder,c,d)
return O}var I,x=e.__c={__v:e,context:t,props:e.props,__h:[]}
if(r.options.__r&&r.options.__r(e),m.prototype&&"function"==typeof m.prototype.render){var C=m.contextType,T=C&&t[C.__c],j=null!=C?T?T.props.value:C.__:t;(x=e.__c=new m(v,j)).__v=e,x._dirty=x.__d=!0,x.props=v,null==x.state&&(x.state={}),null==x._nextState&&null==x.__s&&(x._nextState=x.__s=x.state),x.context=j,m.getDerivedStateFromProps?x.state=u(u({},x.state),m.getDerivedStateFromProps(x.props,x.state)):x.componentWillMount&&x.componentWillMount(),x.state=x._nextState!==x.state?x._nextState:x.__s!==x.state?x.__s:x.state,I=x.render(x.props,x.state,x.context)}else{var A=m.contextType,P=A&&t[A.__c]
I=m.call(e.__c,v,null!=A?P?P.props.value:A.__:t)}return x.getChildContext&&(t=u(u({},t),x.getChildContext())),g(I,t,n,!1!==n.shallowHighOrder,c,d)}m=(y=m).displayName||y!==Function&&y.name||function(e){var t=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1]
if(!t){for(var n=-1,r=p.length;r--;)if(p[r]===e){n=r
break}n<0&&(n=p.push(e)-1),t="UnnamedComponent"+n}return t}(y)}var N,R=""
if(v){var k=Object.keys(v)
n&&!0===n.sortAttributes&&k.sort()
for(var L=0;L<k.length;L++){var D=k[L],M=v[D]
if("children"!==D&&!D.match(/[\s\n\\/='"\0<>]/)&&(n&&n.allAttributes||"key"!==D&&"ref"!==D)){if("className"===D){if(v.class)continue
D="class"}else c&&D.match(/^xlink:?./)&&(D=D.toLowerCase().replace(/^xlink:?/,"xlink:"))
"style"===D&&M&&"object"==typeof M&&(M=l(M))
var H=n.attributeHook&&n.attributeHook(D,M,t,n,b)
if(H||""===H)R+=H
else if("dangerouslySetInnerHTML"===D)N=M&&M.__html
else if((M||0===M||""===M)&&"function"!=typeof M){if(!(!0!==M&&""!==M||(M=D,n&&n.xml))){R+=" "+D
continue}if("value"===D){if("select"===m){d=M
continue}"option"===m&&d==M&&(R+=" selected")}R+=" "+D+'="'+o(M)+'"'}}}}if(E){var V=R.replace(/^\n\s*/," ")
V===R||~V.indexOf("\n")?E&&~R.indexOf("\n")&&(R+="\n"):R=V}if(R="<"+m+R+">",String(m).match(/[\s\n\\/='"\0<>]/))throw new Error(m+" is not a valid HTML tag name in "+R)
var F=String(m).match(f)
F&&(R=R.replace(/>$/," />"))
var U,G=[]
if(N)E&&a(N)&&(N="\n"+_+s(N,_)),R+=N
else if(v&&h(U=[],v.children).length){for(var B=E&&~R.indexOf("\n"),z=!1,q=0;q<U.length;q++){var W=U[q]
if(null!=W&&!1!==W){var $=g(W,t,n,!0,"svg"===m||"foreignObject"!==m&&c,d)
if(E&&!B&&a($)&&(B=!0),$)if(E){var K=$.length>0&&"<"!=$[0]
z&&K?G[G.length-1]+=$:G.push($),z=K}else G.push($)}}if(E&&B)for(var Z=G.length;Z--;)G[Z]="\n"+_+s(G[Z],_)}if(G.length)R+=G.join("")
else if(n&&n.xml)return R.substring(0,R.length-1)+" />"
return F||(E&&~R.indexOf("\n")&&(R+="\n"),R+="</"+m+">"),R}g.shallowRender=m,t.default=g},function(e,t,n){"use strict"
n.r(t),n.d(t,"Cover",(function(){return g}))
var r=n(5),i=n.n(r),o=n(114),s=n.n(o),a=n(87),c=n(117),l=n(100),u=n(29),h=n(25),d=n(67),p=n(23)
function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const m={S:1,M:1.5,L:2}
class g extends a.Engine.Component{constructor(e){super(e),this.immediateReveal=!1,this.getSrcSet=e=>{const t=[]
for(const n in m)if(n in e.sizes){const r=this.state.useSizeSrcSet?Object(h.get)(e,"sizes."+n+".url")+" "+Object(h.get)(e,"sizes."+n+".width")+"w":Object(h.get)(e,"sizes."+n+".url")+" "+m[n]+"x"
t.push(r)}return{srcSet:t.join(","),sizes:this.state.useSizeSrcSet?"(min-width: 540px) 50vw, (min-width: 900px) 30vw, 100vw":void 0}},this.reveal=e=>{this.immediateReveal||null!==this.state.cover?(e.className.indexOf("_preempt-visibility")>=0&&e.firstElementChild&&(e=e.firstElementChild),i()(this.props.onReveal)&&Object(d.safeCall)(this.props.onReveal,null,e)):this.setCoverUrl()},this.state={cover:null,renderContext:p.Configs.get("renderContext"),useSizeSrcSet:p.Configs.get("ff_cover_size",!1)}}render(){if(!this.props.images)return null
const e=!!this.props.images.fastRender,t=this.getImageProps({fastRenderEnabled:e}),n=a.Engine.createElement("div",f({ref:Object(l.as)(this),onMouseUp:this.props.onMouseUp},this.getCoverProps()),a.Engine.createElement("picture",{className:"bstn-fd-cover-picture"},a.Engine.createElement("img",f({className:"bstn-fd-picture-image"},t))),this.props.children)
return Object(h.get)(t,"srcSet")||e&&Object(h.get)(t,"src")?(this.immediateReveal=!0,n):a.Engine.createElement(c.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:this.props.threshold},n)}componentDidMount(){this.props.isEsppub&&this.setCoverUrl(),this.immediateReveal&&this.reveal(this._refs.node)}componentDidUpdate(){this.state.cover&&this.reveal(this._refs.node)}getCoverProps(){const e={className:"bstn-fd-item-cover "+(this.props.extraClasses||"")}
for(const t in this.props)t.startsWith("data-")&&(e[t]=this.props[t])
return e}getImageProps1x1(e,t){void 0===e&&(e={})
let n=f({alt:this.props.alt,title:this.props.alt},e)
const r=this.props.images
if(r.sizes&&this.atFirstPage()&&p.Configs.get("isHomeOrTopic",!0)){n=f({},n,{},t?{}:this.getSrcSet(r),{src:this.chooseCoverUrl()})}return this.state.cover&&(n=f({},n,{src:this.state.cover,"data-ratio":"1:1"})),n}getImageProps4x3(e){return void 0===e&&(e={}),f({src:Object(u.buildUrlForPostVideo4x3)(Object(h.get)(this.props,"data-video-id")),"data-ratio":"4:3"},e)}getImageProps(e){let{fastRenderEnabled:t}=e
const n={loading:t?"eager":"lazy",elementtiming:"image-"+this.state.renderContext}
return"4:3"===this.props.ratio&&Object(h.get)(this.props,"data-video-id")?this.getImageProps4x3(n,t):this.getImageProps1x1(n,t)}atFirstPage(){let e
const t=this.context.item
return e=!t||t&&s()(this.context.itemIndex.getPosition(t),1,11)}chooseCoverUrl(){return Object(u.choosePicture)(this.props.images,null,null,this.props.thumbOrientation)}setCoverUrl(){const e=this.chooseCoverUrl()
e&&this.setState({cover:e})}}},function(e,t,n){var r=n(115),i=n(116),o=n(53)
e.exports=function(e,t,n){return t=i(t),void 0===n?(n=t,t=0):n=i(n),e=o(e),r(e,t,n)}},function(e,t){var n=Math.max,r=Math.min
e.exports=function(e,t,i){return e>=r(t,i)&&e<n(t,i)}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict"
n.r(t),n.d(t,"DEFAULT_THRESHOLD",(function(){return p})),n.d(t,"PreemptVisibility",(function(){return y}))
var r=n(118),i=n.n(r),o=n(61),s=n.n(o),a=n(87),c=n(54),l=n(100),u=n(121)
let h,d
const p="200%"
h=class extends a.Engine.Component{constructor(e){super(e),this.render=()=>a.Engine.createElement("div",{className:"_preempt-visibility",ref:Object(l.as)(this)},this.props.children),this.checkProximity=i()(()=>{const e=this._refs.node,t=e.getBoundingClientRect(),n=this.getThreshold(),r=t.top-d<n,i=t.top!==t.bottom,o=-t.bottom<n
if(!i&&r||r&&o){if(this.state.isNear&&!this.state.wasTriggered)return s()(()=>this.props.onNearToBeVisible(e)),this.tearDown(),void this.setState({wasTriggered:!0})
this.setState({isNear:!0}),this.reCheckProximity()}else this.setState({isNear:!1})},100,{leading:!0,trailing:!0}),this.reCheckProximity=()=>this.checkProximity(),this.state={isNear:!1,wasTriggered:!1}}async componentDidMount(){const e=await this.props.threshold||p
this.getThreshold=f(e),this.props.awaitScroll||s()(this.checkProximity),u.PassiveScrollListener.on(this.checkProximity)}componentWillUnmount(){this.tearDown()}tearDown(){u.PassiveScrollListener.off(this.checkProximity),this.checkProximity.cancel(),c.Globals.removeEventListener("resize",b)}}
const f=e=>{const[t,n]=g(e).slice(1,3),r=v[n]
return i()(r(Number(t)),1e3,{leading:!0,trailing:!1})},m=/(-?\d+)(%|px)/,g=e=>e.match(m)||["","px",e||"0"],v={"%":e=>()=>d*(e/100),px:e=>()=>e},b=()=>{d=c.Globals.innerHeight}
b(),c.Globals.addEventListener("resize",b,!1)
const y=h},function(e,t,n){var r=n(119),i=n(6),o="Expected a function"
e.exports=function(e,t,n){var s=!0,a=!0
if("function"!=typeof e)throw new TypeError(o)
return i(n)&&(s="leading"in n?!!n.leading:s,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:s,maxWait:t,trailing:a})}},function(e,t,n){var r=n(6),i=n(120),o=n(53),s="Expected a function",a=Math.max,c=Math.min
e.exports=function(e,t,n){var l,u,h,d,p,f,m=0,g=!1,v=!1,b=!0
if("function"!=typeof e)throw new TypeError(s)
function y(t){var n=l,r=u
return l=u=void 0,m=t,d=e.apply(r,n)}function E(e){var n=e-f
return void 0===f||n>=t||n<0||v&&e-m>=h}function _(){var e=i()
if(E(e))return O(e)
p=setTimeout(_,function(e){var n=t-(e-f)
return v?c(n,h-(e-m)):n}(e))}function O(e){return p=void 0,b&&l?y(e):(l=u=void 0,d)}function w(){var e=i(),n=E(e)
if(l=arguments,u=this,f=e,n){if(void 0===p)return function(e){return m=e,p=setTimeout(_,t),g?y(e):d}(f)
if(v)return clearTimeout(p),p=setTimeout(_,t),y(f)}return void 0===p&&(p=setTimeout(_,t)),d}return t=o(t)||0,r(n)&&(g=!!n.leading,h=(v="maxWait"in n)?a(o(n.maxWait)||0,t):h,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=f=u=p=void 0},w.flush=function(){return void 0===p?d:O(i())},w}},function(e,t,n){var r=n(97)
e.exports=function(){return r.Date.now()}},function(e,t,n){"use strict"
n.r(t),n.d(t,"PassiveScrollListener",(function(){return v}))
var r=n(118),i=n.n(r),o=n(5),s=n.n(o),a=n(122),c=n.n(a),l=n(20),u=n(54),h=n(93),d=n(123),p=n(124)
let f,m
f={subscribers:[],queue:[],paused:!1,flush:function(){if(!this.paused){const t=Object(h.now)()
let n,r=0
for(this.queue=this.subscribers.slice(0);(n=this.queue.shift())&&r<8;){try{n()}catch(e){Object(l.error)(e)}r=Object(h.now)()-t}}},on:function(e){this.subscribers.push(e)},off:function(e){Object(d.pull)(this.subscribers,e)},pause:function(){this.paused=!0},resume:function(){this.paused=!1,this.flush()}},m=e=>(m=p.rAF?e=>Object(p.rAF)(()=>Object(p.rAF)(e)):e=>setTimeout(e,1))(e)
const g=i()(()=>m(f.flush.bind(f)),100,{leading:!0,trailing:!1})
u.Globals.addEventListener("scroll",g,!!function(){let e=!1
const t=u.Globals.Modernizr
if(t&&c()(t.passiveeventlisteners))return t.passiveeventlisteners
try{if(s()(Object.defineProperty)){const t=Object.defineProperty({},"passive",{get(){e=!0}})
u.Globals.addEventListener("test",null,t)}}catch(n){}return e}()&&{passive:!0})
const v=f},function(e,t,n){var r=n(2),i=n(4),o="[object Boolean]"
e.exports=function(e){return!0===e||!1===e||i(e)&&r(e)==o}},function(e,t,n){"use strict"
function r(e,t){let n
for(n=e.indexOf(t);-1!==n;)e.splice(n,1),n=e.indexOf(t,n)}n.r(t),n.d(t,"pull",(function(){return r}))},function(e,t,n){"use strict"
let r
n.r(t),n.d(t,"rAF",(function(){return i}))
const i=r=n(54).Globals.requestAnimationFrame},function(e,t,n){"use strict"
n.r(t),n.d(t,"Header",(function(){return c}))
var r=n(126),i=n.n(r),o=n(87),s=n(25),a=n(127)
function c(e){const t=Object(s.get)(e,"content.chapeu.label")||"",n=Object(s.get)(e,"content.chapeu.image.url")||"",r=i()("feed-post-header",{"with-post-chapeu":Boolean(t)})
var c=o.Engine.createElement("img",{loading:"lazy",src:n,alt:t,className:"feed-post-header-chapeu-favicon"})
return o.Engine.createElement("div",{className:r},e.children,Object(a.insertIf)(t,()=>o.Engine.createElement("span",{className:"feed-post-header-chapeu"},n&&c,t)))}},function(e,t,n){var r

;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict"
var n={}.hasOwnProperty
function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t]
if(r){var o=typeof r
if("string"===o||"number"===o)e.push(r)
else if(Array.isArray(r)&&r.length){var s=i.apply(null,r)
s&&e.push(s)}else if("object"===o)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},function(e,t,n){"use strict"
n.r(t),n.d(t,"insertIf",(function(){return o}))
var r=n(5),i=n.n(r)
function o(e,t,n){let r=e
return i()(e)&&(r=e()),r?t(r):i()(n)?n(r):null}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Relateds",(function(){return h}))
var r=n(5),i=n.n(r),o=n(23),s=n(87),a=n(25),c=n(127)
function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){const{thumb:n,title:r,url:a,dateFactory:u,age:h,isRecommended:d}=e,p=n&&n.url,f={}
return n&&n.rightsholder&&(f.alt=""+n.title+n.rightsholder?"Foto: ("+n.rightsholder:"",f.title=n.rightsholder),s.Engine.createElement("li",{key:t,className:"bstn-relateditem"},Object(c.insertIf)(p,()=>s.Engine.createElement("div",{className:"bstn-fd-relatedimage"},s.Engine.createElement("img",l({className:"bstn-fd-relatedthumb",src:p},f,{loading:"lazy"})))),s.Engine.createElement("div",{className:"bstn-fd-relatedtext"},s.Engine.createElement("a",{className:"gui-color-primary gui-color-hover feed-post-body-title bstn-relatedtext",href:a},r),Object(c.insertIf)(!1===o.Configs.get("disableDateTime"),()=>s.Engine.createElement("div",{className:"feed-post-metadata"},i()(u)&&u({age:h,isRecommended:d})))))}const h=e=>{let{showThumbs:t=!1,children:n,dateFactory:r,items:o}=e
return n=Array.isArray(n)?n[0]:n,i()(n)||(n=e=>e),o&&o.length>0?s.Engine.createElement("div",{className:"bstn-related"},n(s.Engine.createElement("ul",{className:"bstn-relateditems"},o.map(((e,t)=>n=>{const{title:r,url:i}=n.content,{age:o,isRecommended:s}=n,c={age:o,dateFactory:t,isRecommended:s,title:r,url:i},u=Object(a.get)(n.content,"image.rightsHolder"),h=Object(a.get)(n.content,"image.sizes.S.url")
let d={}
return e&&h&&(d={thumb:{url:h,rightsholder:u}}),l({},c,{},d)})(t,r)).map(u)))):null}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Section",(function(){return i}))
var r=n(87)
function i(e){return r.Engine.createElement("span",{className:"feed-post-metadata-section"}," ",e.text," ")}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Summary",(function(){return s}))
var r=n(87),i=n(224),o=n(23)
const s=e=>{let{text:t}=e
return r.Engine.createElement(i.LabelEvent,{type:"click",label:"resumo"},r.Engine.createElement("div",{className:"feed-post-body-resumo"},r.Engine.createElement("p",{elementtiming:"text-"+o.Configs.get("renderContext")},t)))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Title",(function(){return s}))
var r=n(132),i=n(87),o=n(224)
const s=e=>{const{text:t}=e
let n=""
return e.extraClasses&&(n=Array.isArray(e.extraClasses)?e.extraClasses.join(" "):String(e.extraClasses)),i.Engine.createElement(o.LabelEvent,{type:"click",label:"titulo"},i.Engine.createElement("div",{className:"feed-post-body-title gui-color-primary gui-color-hover "+n},i.Engine.createElement(r.ElementViewTrigger,{on:"fitInScreen"},e.innerWrapper?i.Engine.createElement(e.innerWrapper,null,t):t)))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ElementViewTrigger",(function(){return _}))
var r,i,o=n(118),s=n.n(o),a=n(24),c=n.n(a),l=n(87),u=n(54),h=n(21),d=n(133),p=n(134),f=n(25),m=n(123),g=n(67),v=n(69),b=n(135),y=n(70)
let E
i=r=class extends(Object(p.eventable)(Object(d.drawless)(l.Engine.Component))){constructor(e){super(e),this.childrenTriggers=[],this.verifyVisibility=function(){const e=this.props.on
if(this.props.redirectToChildTriggerIfExists&&this.childrenTriggers.length>0)return this.childrenTriggers.some(e=>e.verifyVisibility())
const t=Object(b.getVisibility)(this._refs.node)
return(!1!==t.isBoxed||!0===this.props.evenIfUnboxed)&&Object(h.castArray)(e).some(e=>this.testVisibility(t,e))},this.testVisibility=(e,t)=>{if(e.partial)return this.handleVisibleState(),!0},this.resume=()=>{this.isRoot()&&(Object(g.safeCall)(this.verifyVisibility,this),this.timerID=setTimeout(this.resume,250))},this.pause=()=>{clearTimeout(this.timerID)},this.syncWithVisibility=()=>{"visible"===u.Globals.document.visibilityState?this.resume():this.pause()},e.tagName&&(this.drawlessTag=e.tagName),this.verifyVisibility=s()(this.verifyVisibility.bind(this),this.props.checkInterval||1e3,{leading:!0,trailing:!1})}getChildContext(){return{parentTrigger:this,parentGroup:this.context.parentGroup}}isRoot(){return c()(this.context.parentTrigger)}handleVisibleState(){for(const e of Array.from(this._refs.node.children||[]))Object(y.triggerDomEvent)(v.ELEMENT_VIEWED,e)
this.trigger("visible",this.props.chain)}bindEvents(){this.isRoot()&&u.Globals.window.addEventListener("visibilitychange",this.syncWithVisibility)}registerChildTrigger(e){this.childrenTriggers.push(e)}unregisterChildTrigger(e){Object(m.pull)(this.childrenTriggers,e)}componentDidMount(){this.bindEvents(),this.isRoot()&&this.syncWithVisibility(),Object(f.get)(this,"context.parentTrigger.props.redirectToChildTriggerIfExists")?this.context.parentTrigger.registerChildTrigger(this):this.context.parentGroup&&this.context.parentGroup.registerChild(this)}componentWillUnmount(){this.isRoot()&&this.pause(),this.context.parentGroup&&this.context.parentGroup.unregisterChild(this),this.context.parentTrigger.props.redirectToChildTriggerIfExists&&this.context.parentTrigger.unregisterChildTrigger(this)}},r.displayName="evt"
const _=E=i},function(e,t,n){"use strict"
n.r(t),n.d(t,"drawless",(function(){return p}))
var r=n(40),i=n.n(r),o=n(1),s=n.n(o),a=n(5),c=n.n(a),l=n(87),u=n(100)
const h=/^function ([^(]+)/,d=i()(e=>(e.match(h)||["",""])[1])
function p(e){return class extends e{render(){c()(this.beforeRender)&&this.beforeRender(this.props.children)
let e=""
this.constructor&&(e="_"+(this.constructor.displayName||this.constructor.name||d(this.constructor.toString())).replace("_render","").toLowerCase())
let t="div"
return s()(this.drawlessTag)&&(t=this.drawlessTag),l.Engine.createElement(t,{className:e,ref:Object(u.as)(this)},this.props.children)}}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"eventable",(function(){return i}))
var r=n(75)
function i(e){return class extends e{constructor(e){super(e),this.emitter=new r.EventEmitter}on(e,t){this.emitter.on(e,t)}off(e,t){this.emitter.off(e,t)}trigger(e,t){this.emitter.trigger(e,t)}}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"getVisibility",(function(){return s}))
var r=n(54)
function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let o
const s=o=function(e){const t=e.getBoundingClientRect(),n=r.Globals.document.documentElement.clientHeight,o=n/4,s=3*o,a=(t.top+t.bottom)/2,c=t.top>=0&&t.top<=n,l=a>=o&&a<=s,u=t.bottom>=0&&t.bottom<=n,h=c&&u,d=t.top<=0&&t.bottom>=n,p=c||u||l||d
return i({isVisible:p,rect:t,viewportHeight:n,isBoxed:t.top!==t.bottom},p?{top:c,middle:l,bottom:u,partial:p,fitInScreen:h,tookWholeScreen:d}:{})}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Video",(function(){return y}))
var r=n(9),i=n.n(r),o=n(87),s=n(137),a=n(138),c=n(127),l=n(139),u=n(54),h=n(140),d=n(113)
function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const f=e=>{e&&e.impression&&e.impression()},m=e=>{let{hasContent:t,testABExperiment:n}=e,r=!0,i=e=>((e,t)=>{f(t),Object(a.applyVideoLightbox)(e)})(e,n)
return(e=>e&&u.Globals.postMateriaVideoAB&&u.Globals.postMateriaVideoAB.experiment===e.experiment)(n)&&"redirect"===n.alternative&&(r=!1,i=()=>f(n)),{showPlayAndDuration:r,component:{onMouseUp:()=>(e=>{e&&e.conversion&&e.conversion()})(n),onReveal:i,extraClasses:"bstn-fd-video-cover "+(t?"feed-post-video-full":"")}}}
var g=o.Engine.createElement(l.BadgeAoVivo,null)
const v=(e,t)=>{const{isLive:n,video:r={}}=e
if(n)return g
const a=r.duration
return Object(c.insertIf)(t&&i()(a)&&a>0,()=>o.Engine.createElement("p",{className:"feed-post-video-duration"},Object(s.abbrTime)(a)))}
var b=o.Engine.createElement(h.VideoPlay,null)
class y extends o.Engine.Component{render(){const{video:e,image:t,isEsppub:n=!1,title:r,url:i,testABExperiment:s}=this.props
let a
if(!e||!t)return null
e.duration
const l=e.trademark,u=m({testABExperiment:s,hasContent:this.hasContent()})
var h=o.Engine.createElement("img",{className:"feed-post-video-trademark",src:l,loading:"lazy"})
return a=o.Engine.createElement(d.Cover,p({images:t,alt:r},u.component,{isEsppub:n,"data-video-id":e.id,"data-short-url":i,"data-link":i,"data-program-title":e.programTitle,"data-title":r}),o.Engine.createElement("div",{className:"feed-cover-content"},this.Header(),o.Engine.createElement("div",{className:"bstn-fd-play-button"},Object(c.insertIf)(u.showPlayAndDuration,()=>b),v(this.props,u.showPlayAndDuration)),this.Title(),this.Footer(),Object(c.insertIf)(l,()=>h)))}Header(){return this.props.headerLabel?o.Engine.createElement("div",{className:"feed-post-video-full-header"},this.props.headerLabel):null}Title(){return this.props.titleLabel?o.Engine.createElement("div",{className:"feed-post-video-full-title"},this.props.titleLabel):null}Footer(){return this.props.footerComponent?this.props.footerComponent:null}hasContent(){return this.props.titleLabel||this.props.headerLabel||this.props.footerComponent}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"abbrTime",(function(){return l}))
var r=n(68)
const[i,o,s]=["1s","1min","1hr"].map(r.timeToInt),a=.01,c=e=>Math.floor(e+.69)
function l(e){if(null===e)return""
const t=Math.floor(e/s)
e%=s
const n=Math.floor(e/o)
e%=o
const r=Math.floor(e/i)
return t>0?c(t+n*a)+" hr":n>0?c(n+r*a)+" min":r>0?c(r)+" seg":""}},function(e,t,n){"use strict"
n.r(t),n.d(t,"applyVideoLightbox",(function(){return _}))
var r=n(16),i=n.n(r),o=n(1),s=n.n(o),a=n(5),c=n.n(a),l=n(122),u=n.n(l),h=n(20),d=n(54),p=n(56),f=n(25),m=n(60)
function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const v=i()(()=>{const e=p.Settings.get("PUBLICIDADEPAGINA")
let t=p.Settings.get("VIDEO_SITEPAGE")
return u()(e)&&!u()(t)&&(Object(h.warn)("PUBLICIDADEPAGINA is deprecated. Use VIDEO_SITEPAGE instead."),t=e),!1!==t&&(t=!0),{publicidadePagina:t}}),b=i()(()=>{const e=Object(f.get)(d.Globals,"SETTINGS.FACEBOOK_APP_ID")
return s()(e)?{fbAppId:e}:{}}),y="gui.lightbox.lightbox",E=()=>c()(Object(f.get)(d.Globals,y))
async function _(e){if(c()(d.Globals.globalWebdeps)&&!window.isNoLoadPlayerFeed&&await d.Globals.globalWebdeps("player"),await Object(m.availabilityOf)(y,E),e&&E()){const t=g({},b(),{},v())
d.Globals.gui.lightbox.lightbox(e,t)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"BadgeAoVivo",(function(){return i}))
var r=n(87).Engine.createElement("span",{className:"bstn-aovivo-label"},"ao vivo")
const i=()=>r},function(e,t,n){"use strict"
n.r(t),n.d(t,"VideoPlay",(function(){return o}))
var r=n(87),i=r.Engine.createElement("div",{className:"bstn-fd-video-play"},r.Engine.createElement("svg",{className:"bstn-fd-play-icon theme-color-primary",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.Engine.createElement("path",{d:"M8 5v14l11-7z"})))
function o(){return i}},function(e,t,n){"use strict"
n.r(t),n.d(t,"FeedReporter",(function(){return l}))
var r=n(95),i=n.n(r),o=n(55),s=n(23),a=n(94)
const c=1e3
class l extends a.AbstractReporter{constructor(e){let{area:t}=e
super(),this.area=t}get areaDesktop(){if(o.At.largeScreen)return this.area}get feedId(){return s.Configs.get("feedId")}get feedType(){return s.Configs.get("feedType","").toLowerCase()}get feedViewTime(){return i()(s.Configs.get("feed_getSeenTime")()/c)}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"SeenTimeTelemetry",(function(){return d}))
var r=n(9),i=n.n(r),o=n(119),s=n.n(o),a=n(69),c=(n(20),n(87)),l=n(93)
let u
class h extends c.Engine.Component{constructor(){super(...arguments),this.telemetry={seenTime:0,begin:null,lastSeenTimeReported:0},this.handleElementView=e=>{e.stopPropagation(),this.startCounting(),this.commitElapsedTime(),this.onView()}}cdmSeenTimeTelemetry(){this.startCounting=s()(this.startCounting,1100,{leading:!0,trailing:!1}),this.commitElapsedTime=s()(this.commitElapsedTime,1100,{leading:!1,trailing:!0}),this._refs.node.addEventListener(a.ELEMENT_VIEWED,this.handleElementView,!1)}cwuSeenTimeTelemetry(){this.startCounting.cancel(),this.commitElapsedTime.cancel(),this._refs.node.removeEventListener(a.ELEMENT_VIEWED,this.handleElementView)}startCounting(){this.telemetry.begin=Object(l.now)()}commitElapsedTime(){if(i()(this.telemetry.begin)){const e=this.telemetry.begin,t=parseInt(Object(l.now)()-e,10)
this.telemetry.seenTime+=t,this.telemetry.begin=null}}getSeenTime(){if(i()(this.telemetry.begin)){const e=this.telemetry.begin
return this.telemetry.seenTime+parseInt(Object(l.now)()-e,10)}return this.telemetry.seenTime||0}reportSeenTime(e){this.getSeenTime()!==this.telemetry.lastSeenTimeReported&&(this.telemetry.lastSeenTimeReported=this.getSeenTime(),e())}onView(){}}const d=u=h},function(e,t,n){"use strict"
n.r(t),n.d(t,"ElementViewGroup",(function(){return d}))
var r,i,o=n(9),s=n.n(o),a=n(87),c=n(133),l=n(134),u=n(123)
let h
i=r=class extends(Object(l.eventable)(Object(c.drawless)(a.Engine.Component))){constructor(e){super(e),this.children=[],this.pointer=0,this.handleParentVisibility=e=>{this.props.id||e?this.props.id===e&&this.activateChildren():this.activateChildren()},s()(e.radius)||(this.props.radius=1)}getChildContext(){return{parentTrigger:this.context.parentTrigger,parentGroup:this}}activateChildren(){const e=Math.max(this.pointer-this.props.radius,0),t=Math.min(this.pointer+this.props.radius+1,this.children.length)
let n,r=this.children.slice(e,t),i=!1
for(n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=e+n,i=!0)
if(!i)for(r=[].concat(this.children.slice(0,e),this.children.slice(t,this.children.length)),n=0;n<r.length;n+=1)r[n].verifyVisibility()&&(this.pointer=this.children.indexOf(r[n]))}registerChild(e){this.children.push(e)}unregisterChild(e){Object(u.pull)(this.children,e)}componentDidMount(){this.context.parentTrigger.on("visible",this.handleParentVisibility)}componentWillUnmount(){this.context.parentTrigger.off("visible",this.handleParentVisibility)}},r.displayName="evg"
const d=h=i},function(e,t,n){"use strict"
n.r(t),n.d(t,"ReporterCascadeAggregator",(function(){return i}))
var r=n(94)
class i extends r.AbstractReporter{constructor(){super(),this.whitelist=["reporters","debug"]
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return this.reporters=t,new Proxy(this,{get:(e,t)=>{if(e.whitelist.includes(t))return e[t]
for(const n of e.reporters){const e=n[t]
if(void 0!==e)return e}}})}}},function(e,t,n){"use strict"
n.r(t),n.d(t,"Scoreboard",(function(){return p}))
var r=n(9),i=n.n(r),o=n(126),s=n.n(o),a=n(87),c=a.Engine.createElement("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.Engine.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.Engine.createElement("g",{id:"vs"},a.Engine.createElement("g",null,a.Engine.createElement("polygon",{className:"versus",points:"12.6666667 4.27333333 11.7266667 3.33333333 8 7.06 4.27333333 3.33333333 3.33333333 4.27333333 7.06 8 3.33333333 11.7266667 4.27333333 12.6666667 8 8.94 11.7266667 12.6666667 12.6666667 11.7266667 8.94 8"}),a.Engine.createElement("polygon",{points:"0 0 16 0 16 16 0 16"})))))
function l(){return c}var u=a.Engine.createElement(l,null),h=a.Engine.createElement(l,null)
function d(e){const{away:t,home:n}=e
return i()(t.penalties)&&i()(n.penalties)&&t.penalties+n.penalties>0?a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),a.Engine.createElement("span",{className:"score-penalties"},"(",n.penalties),u,a.Engine.createElement("span",{className:"score-penalties"},t.penalties,")"),a.Engine.createElement("span",{className:"score-number"},t.score)):a.Engine.createElement("div",{className:"score"},a.Engine.createElement("span",{className:"score-number"},n.score),h,a.Engine.createElement("span",{className:"score-number"},t.score))}function p(e){const{away:t,home:n,headline:r}=e,i=s()("scoreboard-bastian-feed",{headline:r})
return a.Engine.createElement("div",{className:i},a.Engine.createElement("div",{className:"scoreboard-home-team",title:n.name},a.Engine.createElement("span",{className:"shortName"},n.shortName),a.Engine.createElement("img",{className:"crest",src:n.crest,loading:"lazy"})),a.Engine.createElement(d,{away:t,home:n}),a.Engine.createElement("div",{className:"scoreboard-away-team",title:t.name},a.Engine.createElement("img",{className:"crest",src:t.crest,loading:"lazy"}),a.Engine.createElement("span",{className:"shortName"},t.shortName)))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"requestMabExperiment",(function(){return a})),n.d(t,"isMabAvailiable",(function(){return c}))
var r=n(71)
let i,o
const s=new Set,a=i=e=>{let{experimentName:t,skipImpression:n=!1}=e
if(o(t))return s.add(t),(async(e,t)=>{let n
try{n=await Object(r.getClient)()}catch(o){return Promise.reject(o)}const i=n.createOptions().timeout(3e3)
return i.options.skipImpressions=!1,t.skipImpression&&i.skipImpression(),n.mab().choose(e)})(t,{skipImpression:n})
throw new Error('An Mab experiment has already ran and "'+t+"\" couldn't be created")},c=o=e=>!s.has(e)},function(e,t,n){"use strict"
function r(e){return JSON.parse(JSON.stringify(e))}n.r(t),n.d(t,"cloneJSON",(function(){return r}))},function(e,t,n){"use strict"
n.r(t),n.d(t,"getCategoryColor",(function(){return o}))
var r=n(149),i=n.n(r)
const o=()=>i()(window,"utag_data.cor_pagina",i()(window,"cdaaas.SETTINGS.COR","#000"))},function(e,t,n){var r=n(150)
e.exports=function(e,t,n){var i=null==e?void 0:r(e,t)
return void 0===i?n:i}},function(e,t,n){var r=n(151),i=n(155)
e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])]
return n&&n==o?e:void 0}},function(e,t,n){var r=n(3),i=n(152),o=n(153),s=n(99)
e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(s(e))}},function(e,t,n){var r=n(3),i=n(37),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/
e.exports=function(e,t){if(r(e))return!1
var n=typeof e
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||(s.test(e)||!o.test(e)||null!=t&&e in Object(t))}},function(e,t,n){var r=n(154),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=r((function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)})),t}))
e.exports=s},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(157),i=n(160)
e.exports=function(e){if(null==e)return!0
if("string"==typeof e||i(e))return!e.length
if("object"==typeof e){var t=!0
return r(e,(function(){return t=!1,!1})),t}return!0}},function(e,t,n){var r=n(158),i=n(159)
e.exports=function(e,t,n){i(e,(function(i,o){if(r(e,o))return t.call(n,e[o],o,e)}))}},function(e,t){e.exports=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},function(e,t,n){var r,i,o=n(158)
function s(e,t,n,r){return e.call(r,t[n],n,t)}e.exports=function(e,t,n){var a,c=0
for(a in null==r&&function(){for(var e in i=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=!0,{toString:null})r=!1}(),e)if(!1===s(t,e,a,n))break
if(r)for(var l=e.constructor,u=!!l&&e===l.prototype;(a=i[c++])&&("constructor"===a&&(u||!o(e,a))||e[a]===Object.prototype[a]||!1!==s(t,e,a,n)););}},function(e,t,n){var r=n(161),i=Array.isArray||function(e){return r(e,"Array")}
e.exports=i},function(e,t,n){var r=n(162)
e.exports=function(e,t){return r(e)===t}},function(e,t){e.exports=function(e){return Object.prototype.toString.call(e).slice(8,-1)}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isLiveVideo",(function(){return o}))
var r=n(1),i=n.n(r)
const o=e=>i()(e)&&"live"===String(e).toLowerCase()},function(e,t,n){var r=n(165),i=n(166)
e.exports=function(e,t,n,o){return e=r(e),n=n||"...",t=o?t+1:t,(e=i(e)).length<=t?e:(e=e.substr(0,t-n.length),(e=o?e.substr(0,e.lastIndexOf(" ")):i(e))+n)}},function(e,t){e.exports=function(e){return null==e?"":e.toString()}},function(e,t,n){var r=n(165),i=n(167),o=n(168),s=n(169)
e.exports=function(e,t){return e=r(e),o(s(e,t=t||i),t)}},function(e,t){e.exports=[" ","\n","\r","\t","\f","\v"," "," ","᠎"," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　"]},function(e,t,n){var r=n(165),i=n(167)
e.exports=function(e,t){e=r(e),t=t||i
for(var n,o,s=0,a=e.length,c=t.length,l=!0;l&&s<a;)for(l=!1,n=-1,o=e.charAt(s);++n<c;)if(o===t[n]){l=!0,s++
break}return s>=a?"":e.substr(s,a)}},function(e,t,n){var r=n(165),i=n(167)
e.exports=function(e,t){e=r(e),t=t||i
for(var n,o,s=e.length-1,a=t.length,c=!0;c&&s>=0;)for(c=!1,n=-1,o=e.charAt(s);++n<a;)if(o===t[n]){c=!0,s--
break}return s>=0?e.substring(0,s+1):""}},function(e,t,n){"use strict"
n.r(t)
var r=n(87),i=n(148)
const o={mobile:{width:36,height:36},desktop:{width:48,height:48}}
var s=r.Engine.createElement("g",null,r.Engine.createElement("rect",{fill:"#fff",height:"24",width:"24"})),a=r.Engine.createElement("rect",{height:"10",width:"7",x:"8.5",y:"7"}),c=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"6",y:"8.5"}),l=r.Engine.createElement("rect",{height:"7",width:"1.5",x:"16.5",y:"8.5"})
t.default=e=>{const{device:t="mobile"}=e,n={width:o[t].width,height:o[t].height}
return r.Engine.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:n.height,width:n.width,viewBox:"0 0 24 24",style:{marginBottom:"mobile"===t?12:0,borderRadius:"50%"}},s,r.Engine.createElement("g",{fill:Object(i.getCategoryColor)()},a,c,l))}},function(e,t,n){"use strict"
n.r(t),n.d(t,"ItemIndex",(function(){return s}))
var r=n(25)
const i=[],o=e=>{const t=Object(r.get)(e,"state.data.source")
return"$Advertises"!==t&&"$DistributedComponents"!==t||!0===Object(r.get)(e,"_refs.child.isBoxed")}
class s{constructor(){this.items=[],i.push(this)}register(e){this.items.push(e)}getPosition(e){let t,n=0
for(t of this.items)if(o(t)&&(n+=1),t===e)return n
return-1}clear(){this.items.splice(0,this.items.length)}static destroy(){i.forEach(e=>e.clear()),i.splice(0,i.length)}}s.HEADLINE_PLACEHOLDER="headline_placeholder"},function(e,t,n){var r=n(173),i=n(174),o=n(175),s=n(3),a=n(176),c=n(178),l=n(179),u=n(180),h="[object Map]",d="[object Set]",p=Object.prototype.hasOwnProperty
e.exports=function(e){if(null==e)return!0
if(a(e)&&(s(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||o(e)))return!e.length
var t=i(e)
if(t==h||t==d)return!e.size
if(l(e))return!r(e).length
for(var n in e)if(p.call(e,n))return!1
return!0}},function(e,t,n){var r=n(34)(Object.keys,Object)
e.exports=r},function(e,t){var n=Object.prototype.toString
e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(5),i=n(177)
e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},function(e,t){var n=9007199254740991
e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isGooglePubadsAvailable",(function(){return d})),n.d(t,"getPubads",(function(){return p})),n.d(t,"isCustomLazyAvailable",(function(){return f})),n.d(t,"defineBanner",(function(){return m})),n.d(t,"canGetSlot",(function(){return g})),n.d(t,"filterEvents",(function(){return v}))
var r=n(5),i=n.n(r),o=n(61),s=n.n(o),a=n(54),c=n(25),l=n(57),u=n(20),h=n(60)
const d=async()=>{const e=()=>!!a.Globals.document.querySelector('script[src$="gpt.js"]')
if(await Object(h.availabilityOf)("gpt.js",e,500),!e())return!1
const t=()=>i()(Object(c.get)(a.Globals,"googletag.pubads"))
return await Object(h.availabilityOf)("googletag.pubads",t),t()},p=()=>a.Globals.googletag.pubads(),f=async()=>{const e=()=>i()(a.Globals.bannerLazyLoading)
return await Object(h.availabilityOf)("bannerLazyLoading",e),e()},m=(e,t,n)=>{e.setAttribute("id",t),s()(()=>a.Globals.bannerLazyLoading(t,n))},g=e=>!(!e||!Object(l.has)(e,"slot.u.o")&&!Object(l.has)(e,"slot.getSlotElementId"))||(Object(u.warn)("mab:vwblt path to creative name seems broken"),!1),v=(e,t)=>n=>{if(!g(n))return
return(e=>Object(c.get)(e,"slot.u.o")||Object(c.get)(e,"slot.getSlotElementId")())(n)===e.props.id?t(n):void 0}},function(e,t,n){"use strict"
n.r(t),n.d(t,"isPostVideoRedirectAvailableForPost",(function(){return g})),n.d(t,"isVideoPreviewAvailableForPost",(function(){return b})),n.d(t,"isVideoFullAvailableForPost",(function(){return v})),n.d(t,"canShowVideoPreviewInPost",(function(){return y})),n.d(t,"canPostVideoRedirectToVideoPage",(function(){return E})),n.d(t,"onPostView",(function(){return O})),n.d(t,"onPostClick",(function(){return w}))
var r=n(54),i=n(56),o=n(183),s=n(107)
function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const c="postVideoFull",l="postVideoRedirectAB",u=e=>r.Globals[e],h=e=>{let{contentType:t}=e
return"video"===t},d=()=>Object(s.isEnvQA)()?"https://ab.qa.globoi.com":"https://ab.g.globo"
let p,f,m
p=e=>{let{tenantId:t}=e
return t===i.Settings.get("PORTAL")},f=e=>{let{content:t,tenantId:n}=e
const i=[r.Globals.location.hostname],o=new URL(t.url)
return"ge"===n&&(i.push("globoesporte.globo.com"),i.push("ge.globo.com"),i.push("globoesporte.qa.globoi.com"),i.push("ge.qa.globoi.com")),o&&i.includes(o.hostname)},m=e=>{let{content:t}=e
return t.url===r.Globals.location.href}
const g=e=>Boolean(u(l))&&h(e)&&p(e)&&f(e)&&!m(e),v=e=>Boolean(u(c))&&h(e),b=e=>{if(!Object(o.hasExperimentFeatVideoPreviewSupport)())return!1
const{content:t,media:n,contentType:r}=e
if(!["basico","materia","materia_video"].includes(r))return!1
const i=(t.video||{}).previewUrl
return"video"===n&&Boolean(i)},y=e=>Object(o.isExperimentFeatVideoPreviewEnabled)()&&b(e),E=e=>{const t=(u(l)||{}).alternative
return g(e)&&"pagevideo"===t},_=[{name:"postVideoPreviewAB",isAvailableForPost:b,impressionOnPostView:!0,conversionOnPostClick:!0},{name:c,isAvailableForPost:v,impressionOnPostView:!0,conversionOnPostClick:!0},{name:l,isAvailableForPost:g,impressionOnPostView:!0,conversionOnPostClick:!0}],O=e=>{if(e.experiment){const{experiment:t,alternative:n,trackId:i,hsid:o,userId:s,userIdType:c,glbExpIdToken:l}=e.experiment,u={experiment:t,alternative:n,testId:i,hsIdToken:o,userId:s,userIdType:c,glbExpIdToken:l};(e=>r.Globals.bstn.lastTestId!==e&&!r.Globals.bstn.hasSentImpression)(e.experiment.trackId)&&((e=>{const t=d(),n=a({},e,{event:"impression"})
fetch(t+"/event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),r.Globals.bstn.hasSentImpression=!0})(u),r.Globals.bstn.lastTestId=e.experiment.trackId)}_.forEach(t=>{const n=u(t.name)
n&&n.impression&&t.impressionOnPostView&&t.isAvailableForPost(e)&&n.impression()})},w=e=>{if(e.experiment){const{experiment:t,alternative:n,trackId:r,hsid:i,userId:o,userIdType:s,glbExpIdToken:c}=e.experiment;(e=>{const t=d(),n=a({},e,{event:"conversion"})
fetch(t+"/event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})})({experiment:t,alternative:n,testId:r,hsIdToken:i,userId:o,userIdType:s,glbExpIdToken:c})}_.forEach(t=>{const n=u(t.name)
n&&n.conversion&&t.conversionOnPostClick&&t.isAvailableForPost(e)&&n.conversion()})}},function(e,t,n){"use strict"
n.r(t),n.d(t,"hasExperimentFeatVideoPreviewSupport",(function(){return s})),n.d(t,"isExperimentFeatVideoPreviewEnabled",(function(){return a}))
var r=n(54),i=n(223)
const o=()=>(r.Globals.postVideoPreviewAB||{}).alternative,s=()=>Object(i.hasVideoPreviewSupport)("preview-all"===o()),a=()=>!("control"===o())&&s()},function(e,t,n){"use strict"
n.r(t),n.d(t,"setViewportObserver",(function(){return i})),n.d(t,"observeElement",(function(){return o})),n.d(t,"unobserveElement",(function(){return s})),n.d(t,"hasIntersectionObserverSupport",(function(){return a}))
var r=n(20)
let i,o,s,a
i=e=>{let{options:t,observerName:n,callback:i}=e
if(n&&i)return window[n]=new IntersectionObserver(i,t),window[n]
Object(r.warn)("ViewportObserver :: setViewportObserver - requires observerName and callback")},o=(e,t)=>t&&window[e]&&window[e].observe(t),s=(e,t)=>t&&window[e]&&window[e].unobserve(t),a=()=>"IntersectionObserver"in window},function(e,t,n){"use strict"
n.r(t)
var r=n(172),i=n.n(r)
t.default=e=>!e||i()(e)},function(e,t,n){"use strict"
n.r(t),n.d(t,"setupVideoPreviewViewportObserver",(function(){return m})),n.d(t,"observeElement",(function(){return p})),n.d(t,"unobserveElement",(function(){return f})),n.d(t,"mobileCallback",(function(){return h})),n.d(t,"shouldPlay",(function(){return d}))
var r=n(55),i=(n(87),n(54)),o=n(184),s=n(70),a=n(69),c=n(183)
const l="feed-post-video-viewport-observer",u={root:null,rootMargin:"-100px 0px -20px 0px",threshold:1},h=e=>{Object(s.triggerDomEvent)(a.VIDEOPREVIEW_INTERSECT,i.Globals.window,t=>{t.data=e})},d=(e,t)=>{const n=t.find(t=>t.target.isSameNode(e))
return!(!n||!n.isIntersecting)&&!(t.lastIndexOf(e=>e.isIntersecting)>t.indexOf(n))},p=(e,t)=>{Object(o.observeElement)(l,e),i.Globals.window.addEventListener(a.VIDEOPREVIEW_INTERSECT,t)},f=(e,t)=>{Object(o.unobserveElement)(l,e),i.Globals.window.removeEventListener(a.VIDEOPREVIEW_INTERSECT,t)},m=()=>{Object(c.isExperimentFeatVideoPreviewEnabled)()&&r.At.smallScreen&&Object(o.setViewportObserver)({observerName:l,options:u,callback:h})}},function(e,t,n){"use strict"
n.r(t),n.d(t,"whichMedia",(function(){return o}))
var r=n(185),i=n(23)
const o=e=>{let{image:t,video:n}=e
return Object(r.default)(t)?null:Boolean(n)&&Boolean(n.id)&&!i.Configs.get("photoOverVideo")?"video":"photo"}},function(e,t,n){e.exports="12.12.1",e.exports.default=e.exports},function(e,t,n){var r=n(190),i=1,o=4
e.exports=function(e){return r(e,i|o)}},function(e,t,n){var r=n(191),i=n(192),o=n(193),s=n(194),a=n(196),c=n(198),l=n(200),u=n(201),h=n(203),d=n(205),p=n(206),f=n(174),m=n(207),g=n(208),v=n(209),b=n(3),y=n(178),E=n(211),_=n(6),O=n(212),w=n(33),S=1,I=2,x=4,C="[object Arguments]",T="[object Function]",j="[object GeneratorFunction]",A="[object Object]",P={}
P[C]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object DataView]"]=P["[object Boolean]"]=P["[object Date]"]=P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Map]"]=P["[object Number]"]=P[A]=P["[object RegExp]"]=P["[object Set]"]=P["[object String]"]=P["[object Symbol]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P["[object Error]"]=P[T]=P["[object WeakMap]"]=!1,e.exports=function e(t,n,N,R,k,L){var D,M=n&S,H=n&I,V=n&x
if(N&&(D=k?N(t,R,k,L):N(t)),void 0!==D)return D
if(!_(t))return t
var F=b(t)
if(F){if(D=m(t),!M)return l(t,D)}else{var U=f(t),G=U==T||U==j
if(y(t))return c(t,M)
if(U==A||U==C||G&&!k){if(D=H||G?{}:v(t),!M)return H?h(t,a(D,t)):u(t,s(D,t))}else{if(!P[U])return k?t:{}
D=g(t,U,M)}}L||(L=new r)
var B=L.get(t)
if(B)return B
L.set(t,D),O(t)?t.forEach((function(r){D.add(e(r,n,N,r,t,L))})):E(t)&&t.forEach((function(r,i){D.set(i,e(r,n,N,i,t,L))}))
var z=V?H?p:d:H?keysIn:w,q=F?void 0:z(t)
return i(q||t,(function(r,i){q&&(r=t[i=r]),o(D,i,e(r,n,N,i,t,L))})),D}},function(e,t,n){var r=n(42),i=n(43),o=n(46),s=n(47),a=n(48)
function c(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=s,c.prototype.set=a,e.exports=c},function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},function(e,t,n){var r=n(78),i=n(45),o=Object.prototype.hasOwnProperty
e.exports=function(e,t,n){var s=e[t]
o.call(e,t)&&i(s,n)&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(195),i=n(33)
e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t,n){var r=n(193),i=n(78)
e.exports=function(e,t,n,o){var s=!n
n||(n={})
for(var a=-1,c=t.length;++a<c;){var l=t[a],u=o?o(n[l],e[l],l,n,e):void 0
void 0===u&&(u=e[l]),s?i(n,l,u):r(n,l,u)}return n}},function(e,t,n){var r=n(195),i=n(197)
e.exports=function(e,t){return e&&r(t,i(t),e)}},function(e,t){e.exports=function(e){var t=[]
if(null!=e)for(var n in Object(e))t.push(n)
return t}},function(e,t,n){(function(e){var r=n(97),i=t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===i?r.Buffer:void 0,a=s?s.allocUnsafe:void 0
e.exports=function(e,t){if(t)return e.slice()
var n=e.length,r=a?a(n):new e.constructor(n)
return e.copy(r),r}}).call(this,n(199)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=function(e,t){var n=-1,r=e.length
for(t||(t=Array(r));++n<r;)t[n]=e[n]
return t}},function(e,t,n){var r=n(195),i=n(202)
e.exports=function(e,t){return r(e,i(e),t)}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(195),i=n(204)
e.exports=function(e,t){return r(e,i(e),t)}},function(e,t){e.exports=function(){return[]}},function(e,t,n){var r=n(34)(Object.keys,Object)
e.exports=r},function(e,t){e.exports=function(e){var t=[]
if(null!=e)for(var n in Object(e))t.push(n)
return t}},function(e,t){var n=Object.prototype.hasOwnProperty
e.exports=function(e){var t=e.length,r=new e.constructor(t)
return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(210),i=n(111),o=n(179)
e.exports=function(e){return"function"!=typeof e.constructor||o(e)?{}:r(i(e))}},function(e,t,n){var r=n(6),i=Object.create,o=function(){function e(){}return function(t){if(!r(t))return{}
if(i)return i(t)
e.prototype=t
var n=new e
return e.prototype=void 0,n}}()
e.exports=o},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(217),o=n(113),s=n(87),a=n(224),c=n(25)
let l
const u=l=function(e){const t=Object(c.get)(e,"pubeditorial.anunciante")||{url:null,logo_pequeno:null,nome:"Logo Anunciante"}
let n=null
return t.logo_pequeno&&(n=s.Engine.createElement(a.LabelEvent,{type:"click",label:"chapeu"},s.Engine.createElement("a",{href:Object(c.get)(t,"url")||"#"},s.Engine.createElement("span",{className:"feed-post-header-special-advertising-logo"},s.Engine.createElement("img",{className:"special-advertising-logo",alt:"Logo: "+t.nome,title:"Logo: "+t.nome,src:Object(c.get)(t,"logo_pequeno")}))))),s.Engine.createElement("div",{className:"feed-post-header post-header-special-advertising"},s.Engine.createElement("span",{className:"feed-post-header-chapeu gui-text-section-title gui-text-special-advertising"},decodeURI("Especial Publicit%C3%A1rio")),n)},h=e=>t=>s.Engine.createElement("h2",null,s.Engine.createElement("a",{href:e.url,className:"feed-post-link gui-color-primary gui-color-hover"},s.Engine.createElement("p",{elementtiming:e.elementtiming},t.children)))
var d=n(131),p=n(136),f=n(100),m=n(56),g=n(126),v=n.n(g),b=n(222),y=n(125),E=n(138),_=n(185),O=n(127),w=n(137),S=n(139),I=n(140)
const x=e=>{const{extraClasses:t,isEsppub:n,video:r,image:i,url:a,title:c,children:l,onReveal:u,onMouseUp:h,threshold:d,ratio:p="1:1"}=e,f="bstn-fd-video-cover "+(t||""),m=r.description?r.description+" - Programa: "+r.programTitle:r.title+" - Programa: "+r.programTitle+" "
let g
return g=s.Engine.createElement(o.Cover,{images:i,alt:m,extraClasses:f.trim(),isEsppub:n,"data-video-id":r.id,ratio:p,"data-short-url":a,"data-link":a,"data-program-title":r.programTitle,"data-title":c,onReveal:u,onMouseUp:h,threshold:d},l)}
var C=n(29),T=n(55),j=n(117),A=n(186)
const P=0,N=4
class R extends s.Engine.Component{constructor(){super(...arguments),this.onChangeView=e=>{Object(A.shouldPlay)(this.base,e.data)?this.doPlay():this.doPause()},this.onCanPlay=()=>{this.waitingToPlay&&this.doPlay()},this.doPlay=()=>{this.waitingToPlay=!1,this._refs.preview&&this._refs.preview.paused&&(this._refs.preview.readyState===N?this._refs.preview.play():this.waitingToPlay=!0)},this.doPause=()=>{this._refs.preview&&!this._refs.preview.paused&&this._refs.preview.load()},this.reveal=()=>{!this.revealed&&this._refs.container&&(this._refs.preview&&this._refs.preview.readyState===P&&this._refs.preview.load(),this.props.onReveal(this._refs.container),this.revealed=!0)}}componentDidMount(){T.At.smallScreen&&Object(A.observeElement)(this.base,this.onChangeView)}componentWillUnmount(){T.At.smallScreen&&Object(A.unobserveElement)(this.base,this.onChangeView)}render(){const{children:e,title:t,url:n,video:r,image:i}=this.props,o=Object(C.choosePicture)(i)
return s.Engine.createElement(j.PreemptVisibility,{onNearToBeVisible:this.reveal,threshold:Promise.resolve("50%")},s.Engine.createElement("div",{ref:Object(f.as)(this,"container"),className:"post-media-preview","data-video-id":r.id,"data-short-url":n,"data-link":n,"data-program-title":r.programTitle,"data-title":t,onMouseEnter:this.doPlay,onMouseLeave:this.doPause},s.Engine.createElement("video",{ref:Object(f.as)(this,"preview"),className:"post-media-preview__video",poster:o,preload:"none",loop:!0,muted:!0,src:r.previewUrl,oncanplay:this.onCanPlay}),s.Engine.createElement("div",{className:"post-media-preview__content"},e)))}}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var L=s.Engine.createElement(S.BadgeAoVivo,null)
var D=s.Engine.createElement(I.VideoPlay,null)
const M=e=>{let{children:t,isLive:n,video:r}=e
return s.Engine.createElement("div",{className:"feed-cover-content"},t,s.Engine.createElement("div",{className:"bstn-fd-play-button"},D,((e,t)=>e?L:Object(O.insertIf)(t>0,()=>s.Engine.createElement("p",{className:"feed-post-video-duration"},Object(w.abbrTime)(t))))(n,r.duration)),Object(O.insertIf)(r.trademark,()=>s.Engine.createElement("img",{className:"feed-post-video-trademark",src:r.trademark,loading:"lazy"})))},H=e=>{const{title:t,image:n,video:r,canShowVideoPreview:i,disableLightbox:o}=e
let a
const c=(r||{}).previewUrl
if(Object(_.default)(r)||Object(_.default)(n)||!r.id)return null
const l=e=>{e&&!o&&Object(E.applyVideoLightbox)(e)}
return a=i&&c?s.Engine.createElement(R,k({onReveal:l},e),M(e)):s.Engine.createElement(x,k({onReveal:l},k({},e,{video:k({},e.video,{title:t})})),M(e))}
var V=n(187)
const F={video:e=>{let{image:t,video:n,title:r,url:i,isEsppub:o,canShowVideoPreview:a}=e
return s.Engine.createElement(H,{title:r,url:i,video:n,image:t,isEsppub:o,canShowVideoPreview:a})},photo:e=>{let{image:t,title:n,isEsppub:r}=e
const i=t.rightsHolder?n+" - Foto: ("+t.rightsHolder+")":n||null
return s.Engine.createElement(o.Cover,{images:t,alt:i,isEsppub:r})}},U=e=>{const{image:t,video:n,url:r}=e,i=Object(V.whichMedia)({image:t,video:n})
return null===i?null:s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:r,className:"feed-post-figure-link gui-image-hover"},F[i](e))))}
var G=n(23),B=n(129)
const z=e=>{const{date:t,section:n}=e
return s.Engine.createElement("div",{className:"feed-post-metadata"},Object(O.insertIf)(!1===G.Configs.get("disableDateTime"),()=>s.Engine.createElement(b.Datetime,{isRecommended:t.isRecommended,ageInSeconds:t.age,publication:t.publication})),n&&s.Engine.createElement(B.Section,{text:n}))}
var q=n(128),W=n(130),$=n(182),K=n(146),Z=n(90),Y=n(85),J=n(57)
class X extends s.Engine.Component{constructor(e){super(e),this.getPostContentData=()=>{const e=Object(c.get)(this,"props.content"),t=Object(c.get)(this,"props._experiment_properties")
return{content:e,media:Object(V.whichMedia)(e),contentType:this.getContentType(),tenantId:Object(c.get)(this,"props.tenantId"),experiment:t}},this.state={title:this.isMabEnabled()?"":Object(c.get)(e,"content.title"),renderContext:G.Configs.get("renderContext")}}render(){const e=v()("feed-post","bstn-item-shape",{["type-"+this.props.type]:this.props.type})
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:e,id:this.props.id},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=Z.ItemPostReporter.upgrade(this.context.sharedItemData),this.reporter.addFeatureChecks({resumo:()=>this.hasSummary(),foto:()=>"photo"===Object(V.whichMedia)(Object(c.get)(this,"props.content")),video:()=>"video"===Object(V.whichMedia)(Object(c.get)(this,"props.content"))})}componentDidMount(){this.isMabEnabled()&&this.installMab()}componentWillUnmount(){this.uninstallMab()}isMabEnabled(){if(T.At.server)return!1
const e=Object(c.get)(this,"props.content.mab.experiment")
return e&&Object(K.isMabAvailiable)(e)}async installMab(){const e=Object(c.get)(this,"props.content.mab.experiment")
if(e)try{const t=await Object(K.requestMabExperiment)({experimentName:e}),n=this.props.content.mab.metadata[t.arm]
this.setState({title:n}),this.reporter.setContent({title:n}),this.mabRewardHandler=()=>t.reward(),this._refs.post.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(r.error)("title exp failed\n",t)}}uninstallMab(){this.mabRewardHandler&&this._refs.post.removeEventListener("click",this.mabRewardHandler)}getUrl(){return Object(c.get)(this,"props.content.url")||null}getContentType(){return this.props.type}hasMedia(){return Boolean(Object(V.whichMedia)(Object(c.get)(this,"props.content")))}Media(){const{title:e,url:t,video:n,image:r}=this.props.content
return s.Engine.createElement(U,{ref:Object(f.as)(this,Object(V.whichMedia)(Object(c.get)(this,"props.content"))),title:e,url:t,video:n,image:r,isEsppub:Object(J.has)(this,"props.pubeditorial"),postContentType:this.getContentType(),canShowVideoPreview:Object($.canShowVideoPreviewInPost)(this.getPostContentData())})}Metadata(){let e
const t=m.Settings.get("PORTAL")
return["valor","valor-investe"].indexOf(t)>=0&&(e=this.props.publication),s.Engine.createElement(z,{section:this.props.content.section,date:{age:this.props.age,publication:e,isRecommended:this.props.isRecommended}})}Header(e){return s.Engine.createElement(y.Header,{content:this.props.content,parent:this},e)}Title(){return Object(J.has)(this,"state.title")?s.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:h({url:this.getUrl(),elementtiming:"text-"+this.state.renderContext})}):null}hasSummary(){const e=this.props.aggregatedPosts
return Boolean(this.props.content.summary)&&!(Array.isArray(e)&&e.length>0)}Summary(){const e=this.props.content.summary
return e&&this.hasSummary()?s.Engine.createElement(W.Summary,{text:e}):null}Relateds(){const e=this.props.aggregatedPosts
return Array.isArray(e)&&e.length>0?s.Engine.createElement(q.Relateds,{items:e,dateFactory:e=>{let{age:t}=e
return s.Engine.createElement(b.Datetime,{ageInSeconds:t||this.props.age,isRecommended:this.props.isRecommended})}},e=>s.Engine.createElement(a.LabelEvent,{type:"click",label:"agregados"},e)):null}onView(){Object($.onPostView)(this.getPostContentData())}onClick(){this.clicked||(Object($.onPostClick)(this.getPostContentData()),this.clicked=!0)}reportToHorizon(){return{"post-id":this.props.id,"post-type":this.getContentType(),"post-url":this.getUrl(),"post-has-resumo":this.hasSummary(),"post-has-photo":this.hasMedia()}}}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}X.FACE="basico",X.SIZE=Y.POST_SIZES.MEDIUM
class ee extends X{constructor(){super(...arguments),this.Header=()=>String(m.Settings.get("PORTAL")).startsWith("valor")?null:s.Engine.createElement(u,{pubeditorial:this.props.pubeditorial})}getContentType(){return"especial-publicitario"}Title(){return s.Engine.createElement(d.Title,{text:this.state.title||this.props.content.title,extraClasses:"feed-post-advertising-title",innerWrapper:h({url:this.getUrl()})})}renderVideo(){return Object(c.get)(this,"props.content.video.id")?s.Engine.createElement(p.Video,Q({ref:Object(f.as)(this,"video")},this.props.content,{isEsppub:!0})):null}renderImage(){const e=this.props.content.image
if(e){let t=Object(c.get)(this,"props.content.image.rightsHolder")||null
return t&&(t="Foto: ("+t+")"),s.Engine.createElement(o.Cover,{ref:Object(f.as)(this,"photo"),images:e,alt:t,isEsppub:!0})}return null}}ee.FACE="especial_publicitario"
var te=n(75),ne=n(5),re=n.n(ne),ie=n(61),oe=n.n(ie),se=n(108),ae=n(220),ce=n(119),le=n.n(ce),ue=n(133)
let he
const de=he=class extends(Object(ue.drawless)(s.Engine.Component)){constructor(e){super(e),this.observe=()=>{this.observer&&(this.observer.observe(this._refs.node,{childList:!0,subtree:!0,attributes:!0,attributesFilter:["style","width","height"]}),this.checkMutation())},this.checkMutation=le()(()=>{const{offsetHeight:e,offsetWidth:t}=this._refs.node,n=e>=this.minHeight&&t>=this.minWidth
if(n!==this.isBoxed&&(this.isBoxed=n,re()(this.props.onChange)))try{this.props.onChange(n,{height:e,width:t})}catch(i){Object(r.error)(i)}this.disconnectObserver()},500,{leading:!0,trailing:!0}),this.disconnectObserver=le()(()=>{this.observer&&(this.observer.disconnect(),this.observer=null)},1e4,{leading:!1,trailing:!0}),this.isBoxed=!1,this.minHeight=this.props.minHeight||1,this.minWidth=this.props.minWidth||1,this.observer=new MutationObserver(this.checkMutation)}componentDidMount(){re()(this.props.manualStart)?this.props.manualStart(this.observe):this.observe()}}
function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const fe=pe({},se,{ui:pe({},ae)}),me=e=>{var t,n
return n=t=class extends s.Engine.Component{constructor(){super(...arguments),this.state={imploded:!1},this.syncBoxingState=e=>{this.isBoxed=e}}render(){return s.Engine.createElement(de,{onChange:this.syncBoxingState,minHeight:3},Object(O.insertIf)(!this.state.imploded,()=>s.Engine.createElement("div",{className:"post-item",onClick:Object($.onPostClick)(this.props)},s.Engine.createElement("div",{ref:Object(f.as)(this),className:"bstn-item-shape"}))))}componentWillMount(){Z.ItemPostReporter.upgrade(this.context.sharedItemData)}componentDidMount(){oe()(()=>{const t=this.context,n=pe({},fe)
se.patch(n,{areaId:t.areaId,item:t.item,itemIndex:t.itemIndex,source:this.props.source,implode:this.implode.bind(this)})
try{re()(e)&&e(this.props,this._refs.node,n)}catch(i){Object(r.error)("[component] ["+this.props.type+"]\n",i)}})}shouldComponentUpdate(e,t){return t.imploded}implode(){this.setState({imploded:!0})
const{props:e}=this
Object(r.warn)("The item of type "+e.type+" self imploded.",e)}},t.FACE="component",t.SIZE=Y.POST_SIZES.MEDIUM,n}
class ge extends Z.ItemPostReporter{get contentStatus(){if(this.itemProps.isLive)return"ao_vivo"}}var ve=s.Engine.createElement(S.BadgeAoVivo,null)
class be extends X{constructor(){super(...arguments),this.isLive=()=>Object(c.get)(this.props,"cobertura.isLive"),this.Header=()=>{const{content:e}=this.props
return this.isLive()?s.Engine.createElement(y.Header,{content:e},ve):s.Engine.createElement(y.Header,{content:e})}}componentWillMount(){this.reporter=ge.upgrade(this.context.sharedItemData,{isLive:this.isLive()})}}be.FACE="cobertura"
var ye=n(114),Ee=n.n(ye),_e=n(225),Oe=n(145)
function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Se={criado:1,iniciado:2,INITIATED:2,"em andamento":3,IN_PROGRESS:3,encerrado:4,CLOSED:4}
var Ie=s.Engine.createElement("div",{className:"bstn-aovivo-label"},"tempo real")
class xe extends X{constructor(e){super(e),this.state.match=e.match}render(){return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape bstn-face-temporeal type-"+this.props.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Score(),this.Title(),this.Summary(),this.Media(),this.Metadata(),this.Relateds()))}componentWillMount(){this.reporter=Ce.upgrade(this.context.sharedItemData,{status:this.getStatus()}),this.reporter.addFeatureChecks({placar:()=>this.hasScore(),label_tr:()=>this.hasLabelTempoReal(),destaques:()=>this.hasHighlights(),resumo:()=>this.hasSummary(),espectadores:()=>this.showSpectators()})}componentDidMount(){this.completeRecommended()}async completeRecommended(){const{match:e,isRecommended:t}=this.props
if(e&&e.resume&&t){const t=await fetch(e.resume),n=await t.json()
this.fillRecommended(n)}}fillRecommended(e){const t=we({},this.state.match)
t&&(t.homeTeam.score=e.equipe_mandante.placar||0,t.awayTeam.score=e.equipe_visitante.placar||0,t.homeTeam.penalties=e.equipe_mandante.penalti||0,t.awayTeam.penalties=e.equipe_visitante.penalti||0,t.status=e.status,this.setState({match:t}))}Header(){return super.Header(this.hasLabelTempoReal()?Ie:null)}Metadata(){let e=null
return this.showSpectators()&&(e=s.Engine.createElement("span",{className:"post-tr-spectators"},this.props.match.spectators.toLocaleString("pt-br")," assistindo")),s.Engine.createElement("div",{className:"feed-post-metadata"},s.Engine.createElement(b.Datetime,{isRecommended:this.props.isRecommended,ageInSeconds:this.props.age}),e)}Summary(){return this.hasHighlights()?s.Engine.createElement(_e.Highlight,{content:this.state.match.highlights[0]}):this.hasSummary()?super.Summary():null}Score(){if(this.hasScore()){const{awayTeam:e,homeTeam:t}=this.state.match
return s.Engine.createElement(Oe.Scoreboard,{away:e,home:t})}return null}isLive(){const e=((this.props.match||{}).status||"").toLowerCase()
return!!Ee()(Se[e],Se.INITIATED,Se.CLOSED)&&(!!this.props.isRecommended||0===String(this.props.content.summary||"").trim().length)}hasScore(){return Boolean(this.state.match)}hasLabelTempoReal(){return this.isLive()}hasChapeu(){return!this.hasLabelTempoReal()&&Object(c.get)(this.props.content,"chapeu.label")}hasSummary(){return!this.hasHighlights()&&super.hasSummary()}hasHighlights(){return this.isLive()&&Object(c.get)(this.state,"match.highlights",[]).length>0}showSpectators(){return this.hasLabelTempoReal()&&Object(c.get)(this.props,"content.showSpectators")&&this.state.match.spectators>0}getStatus(){return(Object(c.get)(this.props,"match.status")||"encerrada").toLowerCase()}}xe.FACE="tempo_real"
class Ce extends Z.ItemPostReporter{get contentStatus(){if(this.itemProps.status)return this.itemProps.status}}var Te=n(148),je=n(149),Ae=n.n(je),Pe=n(170)
function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Re=e=>{const{extraClasses:t,image:n,description:r,thumbOrientation:i,url:a,title:c,children:l,ratio:u="1:1"}=e,h="bstn-fd-stories-cover "+(t||"")
let d
return d=s.Engine.createElement(o.Cover,{images:n,alt:r,thumbOrientation:i,extraClasses:h.trim(),ratio:u,"data-short-url":a,"data-link":a,"data-title":c},l)}
var ke=s.Engine.createElement(Pe.default,{device:"mobile"})
const Le=e=>s.Engine.createElement(Re,Ne({},e,{thumbOrientation:"V"}),s.Engine.createElement("div",{className:"stories__content"},s.Engine.createElement("div",{className:"stories__content--header"}," ",Ae()(e,"chapeu.label",e.section)," "),s.Engine.createElement("div",null,ke,s.Engine.createElement("p",{className:"stories__content--title"}," ",((e,t)=>e.length>t?e.substring(0,t)+"...":e)(e.title,70)," "),s.Engine.createElement("div",{className:"stories__content--metadata"},e.children))))
var De=s.Engine.createElement("div",{className:"bstn-fd-play-button"},s.Engine.createElement(Pe.default,{device:"desktop"}))
const Me=e=>s.Engine.createElement(Re,Ne({},e,{thumbOrientation:"H"}),De),He=e=>e.desktop?s.Engine.createElement(Me,e):s.Engine.createElement(Le,e)
function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Fe=n(54),Ue=n(163)
function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Be=s.Engine.createElement(S.BadgeAoVivo,null)
class ze extends X{constructor(){super(...arguments),this.renderHeader=()=>s.Engine.createElement("div",{className:"feed-post-video-full-header"},Object(c.get)(this.props,"content.chapeu.label")),this.renderTitle=()=>s.Engine.createElement("div",{className:"feed-post-video-full-title"},this.state.title)}renderVideo(e){const{content:t}=this.props
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(t),this.Title(),s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:e,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(H,Ge({ref:Object(f.as)(this,"video")},t,{isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial")),disableLightbox:Object($.canPostVideoRedirectToVideoPage)(this.getPostContentData())}))))),this.Metadata(),this.Relateds()))}renderVideoFull(e){const{content:t}=this.props
return s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.type+" feed-post-video-full-container"},s.Engine.createElement("div",{className:"feed-post-body"},s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:e,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(H,Ge({},t,{ratio:"4:3",extraClasses:"feed-post-video-full",isEsppub:Boolean(Object(c.get)(this,"props.pubeditorial")),isLive:this.isLive(),disableLightbox:Object($.canPostVideoRedirectToVideoPage)(this.getPostContentData())}),this.renderHeader(),this.renderTitle(),this.Metadata())))),this.Relateds()))}render(){const e=this.props.content
e.url=e.url||Object(c.get)(e,"video.url")||Fe.Globals.location.href
const t=e.url||""
return T.At.smallScreen?this.renderVideoFull(t):this.renderVideo(t)}Header(e){return s.Engine.createElement(y.Header,{content:e},Object(O.insertIf)(this.isLive(),()=>Be))}titleApplyRef(e){if(!Object($.canPostVideoRedirectToVideoPage)(this.getPostContentData()))return Object(E.applyVideoLightbox)(e)}Title(){if(Object(J.has)(this,"state.title")){const e=this.getUrl(),t=Object(c.get)(this.props.content,"video.id")
return s.Engine.createElement(d.Title,{text:this.state.title,innerWrapper:n=>s.Engine.createElement("h2",null,s.Engine.createElement("a",{href:e,className:"feed-post-link gui-color-primary gui-color-hover","data-video-id":t,"data-short-url":e,"data-link":e,ref:e=>this.titleApplyRef(e)},n.children))})}return null}componentWillMount(){this.reporter=ge.upgrade(this.context.sharedItemData,{isLive:this.isLive()}),this.reporter.addFeatureChecks({video:()=>!0})}isLive(){return Object(Ue.isLiveVideo)(Object(c.get)(this.props.content,"video.kind"))}}ze.FACE="video",n.d(t,"emitter",(function(){return qe})),n.d(t,"NEW_POST_TYPE",(function(){return We})),n.d(t,"registerExternalItemFactory",(function(){return Ke})),n.d(t,"assignFactory",(function(){return Ze}))
const qe=new te.EventEmitter,We="NEW_POST_TYPE_",$e={default:X,basico:X,materia:X,materia_video:X,advertise:i.default,cobertura:be,stories:class extends X{constructor(){super(...arguments),this.StoriesMobile=()=>s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type+" stories",style:{borderBottom:"5px solid "+Object(Te.getCategoryColor)()}},s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(He,Ve({mobile:!0,extraClasses:"feed-post-stories-mobile",ref:Object(f.as)(this,"stories")},this.props.content),this.Metadata()))))),this.StoriesDesktop=()=>s.Engine.createElement("div",{ref:Object(f.as)(this,"post"),className:"feed-post bstn-item-shape type-"+this.props.content.type},s.Engine.createElement("div",{className:"feed-post-body"},this.Header(),this.Title(),s.Engine.createElement("div",{className:"feed-media-wrapper"},s.Engine.createElement(a.LabelEvent,{type:"click",label:"midia"},s.Engine.createElement("a",{href:this.props.content.url,className:"feed-post-figure-link gui-image-hover"},s.Engine.createElement(He,Ve({desktop:!0,extraClasses:"feed-post-stories-desktop",ref:Object(f.as)(this,"stories")},this.props.content))))),this.Summary(),this.Metadata()))}render(){return T.At.smallScreen?this.StoriesMobile():this.StoriesDesktop()}},"especial-publicitario":ee,video:ze,"eventos-esportivos":xe},Ke=(e,t)=>{((e,t)=>{"advertise"!==e&&"especial-publicitario"!==e&&($e[e]=t,qe.trigger(We+e))})(e,me(t))},Ze=e=>{let t=e.type
return e.pubeditorial&&"cobertura"!==t&&(t="especial-publicitario"),t in $e||!(e=>Object(c.get)(e,"content.title")&&Object(c.get)(e,"content.url"))(e)||(t="default"),t in $e&&(e.klass=$e[t]),e}},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(87),o=n(126),s=n.n(o),a=n(23),c=n(85),l=n(132),u=n(141),h=n(142),d=n(100),p=n(118),f=n.n(p),m=n(5),g=n.n(m),v=n(10),b=n.n(v),y=n(30),E=n.n(y),_=n(77),O=n.n(_),w=n(86),S=n(218),I=n(105),x=n(1),C=n.n(x),T=n(22),j=n(106)
let A
const P={}
function N(e){e.content&&C()(e.content.url)&&(e.content.url=e.content.url.trim()+a.Configs.get("recommendationTag"))}class R{static getInstance(){return A||(A=new R(P)),A}constructor(e){e!==P&&Object(r.warn)("Class $Posts is a singleton and shouldn't be called directly.")
const t=T.$Falkor.getInstance(),n=t.stream
let i
this.$falkor=t,this.source=t,this.stream=n
try{i=j.$Recommendation.getInstance()}catch(o){}if(i){this.source=i
const e=i.stream,o=()=>{this.source=t,this.request()}
e.addListener({next:()=>{},error:()=>{Object(r.error)("soft error: recommendation failed, activating fallback"),o()},complete:()=>{console.info("[bastian] Recommendation ended. Activating fallback..."),o()}}),this.stream=b.a.merge(e,n.map(e=>(a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")<a.Configs.get("recommendationStart")?a.Configs.incr("recommendationCounter"):a.Configs.has("recommendationTag")&&(N(e),Array.isArray(e.aggregatedPosts)&&e.aggregatedPosts.forEach(N)),e)))}}request(){a.Configs.get("isRecommended")&&a.Configs.get("recommendationCounter")+1>=a.Configs.get("recommendationStart")?this.source.request():this.$falkor.request({preventFetch:!0})}isEmpty(){return this.source.isEmpty()}getNextPage(){return this.source.nextPage}}var k=n(55)
let L
const D={},M=(e,t)=>new Array(t).fill().map(()=>e),H=e=>({request:e}),V=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=e=>t.some(t=>!1!==t.request(e))
return H(r)},F=e=>{const t=H(n=>(t.request=()=>!1,e.request(n)))
return t}
class U{static getInstance(){return L||(L=new U(D)),L}constructor(e){var t
let n
e!==D&&Object(r.warn)("Class $Rhythmist is a singleton and shouldn't be called directly."),n={AD:w.$Advertises,CARD:S.$Cards,DISTRIBUTED_COMPONENTS:I.$DistributedComponents,POST:R}
const i=O()(n,e=>e.getInstance()),o="cards"===a.Configs.get("thirdPartyingModel")?i.CARD:i.DISTRIBUTED_COMPONENTS,s=V(i.AD,i.POST)
if("Home"===(null===(t=window.utag_data)||void 0===t?void 0:t.content_type)&&k.At.smallScreen?this.rhythm=[...M(i.POST,2),V(F(i.AD),i.POST),i.POST,s,i.POST,V(F(i.AD),i.POST),i.POST,s]:this.rhythm=[...M(i.POST,4),s,i.POST,...M(i.POST,2),s],!this.shouldIncludeCardsInRecommendationFeedByPosition()){const e=a.Configs.get("componentPosition")-1
this.rhythm.splice(e,0,V(o,i.POST))}const c=E()(i).map(e=>e.stream)
this.stream=b.a.merge(...c).endWhen(R.getInstance().stream.last())}rotateRhythm(){this.rhythm.push(this.rhythm.shift())}shouldIncludeCardsInRecommendationFeedByPosition(){return a.Configs.get("isSegmentedByChannels")&&a.Configs.get("isRecommended")}getSourceByPosition(e){let t
const n=a.Configs.get("cardsPosition")
return this.shouldIncludeCardsInRecommendationFeedByPosition()&&n.includes(e.position)&&k.At.smallScreen?t=I.$DistributedComponents.getInstance():(t=this.rhythm[0],this.rotateRhythm()),t}request(e){let t
!1===(t=this.getSourceByPosition(e)).request(e)&&(Object(r.warn)("all choices failed, skipping position:",e),this.request(e))}}let G
const B={},z=10
class q{static getInstance(){return G||(G=new q(B)),G}constructor(e){this.itemCounter=0,this.pageCounter=0,this.isBusy=!1,e!==B&&Object(r.warn)("Class $Pages is a singleton and shouldn't be called directly."),this.stream=b.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}})}request(){if(!this.isBusy&&this.listener){const e=this.listener,t=[],n=U.getInstance()
let i
const o=()=>{t.length>0&&(this.deliver=null,this.pageCounter++,this.itemCounter+=t.length,n.stream.removeListener(i),e.next(t),this.isBusy=!1)}
this.deliver=o
const s=()=>({pageNumber:this.pageCounter+1,position:this.itemCounter+t.length+1,positionOnPage:t.length+1})
i={next:e=>{t.push(e),t.length<z?n.request(s()):o()},error:t=>{Object(r.error)(t),o(),e.error(t)},complete:()=>{o(),e.complete()}},n.stream.addListener(i),this.isBusy=!0,n.request(s())}}flush(){g()(this.deliver)&&this.deliver()}}var W=n(54)
let $
const K=/(.*\/)([^?#]*)(\?[^#]*|)(#.*|)/
const Z=/(?:(.*\/)([^/]+)\/feed\/pagina-(\d+)(\.g?html|\/|)|(.*\/)([^.]*)(\.g?html|))/,Y=/\..*/
function J(){const e=a.Configs.get("referer")||"",t=function(e){const t=e.match(K)||["","","",""],[,n,r,i,o]=t
return{path:n,name:r,querystring:i,hash:o}}(e),n=(""+t.path+t.name).match(Z)||["","","","","",""],[,r,i,o,s,c,l,u]=n
return{path:c||r,name:l&&l.replace(Y,"")||i||"index",page:o||"1",extension:u||s||"",querystring:t.querystring,hash:t.hash,decomposed:Boolean(e&&(c||r))}}const X={getPageURL:function(e){return($=$||J()).decomposed?""+$.path+$.name+"/feed/pagina-"+e+$.extension+$.querystring+$.hash:null},destroy:function(){$=null}}
var Q=n(121),ee=n(135),te=n(57)
var ne=n(219)
const re=1e3,ie=1e3
class oe extends i.Engine.Component{constructor(){super(),this.autoLoadActive=!1,this.handleLoadMore=e=>{e&&(e.stopPropagation(),e.preventDefault()),Object(ne.default)({origin:"botao mais noticias",label:"interacao | carregamento "+String(this.state.pagesDelivered).padStart(3,"0")},["GA","CommonEvents"]),this.proceedLoadMore()},this.proceedLoadMore=f()(()=>{q.getInstance().request(),a.Configs.has("recommendationTag")&&j.$Recommendation.getInstance().fetch()},re,{leading:!0,trailing:!1}),this.scheduleAutoLoad=()=>{this.autoLoadActive&&(this.autoLoad(),this.timer=setTimeout(this.scheduleAutoLoad,re))},this.teardownAutoLoad=()=>{this.autoLoadActive&&(Q.PassiveScrollListener.off(this.autoLoad),clearTimeout(this.timer),this.autoLoadActive=!1)}
const e=q.getInstance()
this.state={pagesDelivered:e.pageCounter,reachedEnd:!1},e.stream.addListener({next:()=>{this.setState({pagesDelivered:e.pageCounter})},error:()=>{},complete:()=>{this.setState({reachedEnd:!0})}})}render(){const e=R.getInstance(),t=e.getNextPage(),n=Math.max(t||0,this.state.pagesDelivered+1)
return(this.state.reachedEnd||null===t)&&e.isEmpty()?null:i.Engine.createElement("div",{className:"load-more gui-color-primary-bg"},i.Engine.createElement("a",{ref:Object(d.as)(this),href:X.getPageURL(n)},"Veja mais"))}componentDidMount(){this.setupAutoLoad(),this._refs&&this._refs.node&&this._refs.node.addEventListener("click",this.handleLoadMore,!1)}componentWillUnmount(){this.teardownAutoLoad(),this._refs&&this._refs.node&&this._refs.node.removeEventListener("click",this.handleLoadMore)}setupAutoLoad(){const e=R.getInstance()
null===e.getNextPage()&&e.isEmpty()||Object(te.has)(W.Globals,"campos.pubeditorial")||(this.autoLoad=this.pureAutoLoad.bind(this),this.autoLoad=function(e,t,n){let r=0
return function(){let i
r<e?(i=t())&&(r+=1):i&&g()(n)&&n(i)}}(3,this.autoLoad,this.teardownAutoLoad),this.autoLoad=f()(this.autoLoad,re,{leading:!0,trailing:!1}),this.autoLoadActive=!0,setTimeout(this.scheduleAutoLoad,0),Q.PassiveScrollListener.on(this.autoLoad))}pureAutoLoad(){const e=Object(ee.getVisibility)(this.context.root._refs.node)
return!!(e.isBoxed&&e.rect.bottom<e.viewportHeight+ie)&&(this.handleLoadMore(),!0)}}var se=n(221),ae=n(143),ce=n(215),le=n(171),ue=n(25),he=n(69),de=n(70),pe=n(226)
class fe extends i.Engine.Component{render(){const{items:e,pageIndex:t}=this.props,n="page-"+t+"-items"
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:n},i.Engine.createElement("div",{ref:Object(d.as)(this,"page"),className:"bastian-page","data-index":t},i.Engine.createElement(ae.ElementViewGroup,{id:n,radius:2},e.map((e,t)=>i.Engine.createElement(pe.Item,{key:t,data:e,index:t+1})))))}componentDidMount(){Object(de.triggerDomEvent)(he.PAGE_RENDERED,this._refs.page)}}function me(e){let t=[]
return e.stream.take(1).addListener({next:e=>{t=e},error:r.error,complete:()=>{}}),e.request(),e.flush(),t}class ge extends i.Engine.Component{constructor(){super(),this.itemIndex=new le.ItemIndex,this.resetItemIndex()
const e=q.getInstance(),t=e.stream
this.state={updates:[],pages:[me(e)]},se.$PushStream.getInstance().stream.addListener({next:e=>this.setState({updates:[...this.state.updates,...e]}),error:r.error,complete:()=>{}}),t.addListener({next:e=>this.setState({pages:[...this.state.pages,e]}),error:r.error,complete:()=>{}})}getChildContext(){return{itemIndex:this.itemIndex}}render(){let e
return this.state.updates.length>0&&(e=i.Engine.createElement(fe,{key:0,pageIndex:0,items:this.state.updates})),i.Engine.createElement(ae.ElementViewGroup,{id:"pages"},e,this.state.pages.map((e,t)=>i.Engine.createElement(fe,{key:t+1,pageIndex:t+1,items:e})))}componentWillUpdate(){this.resetItemIndex()}shouldComponentUpdate(e,t){const n=Object(ue.get)(this.state,"updates.length")!==Object(ue.get)(t,"updates.length"),r=this.state.pages.length!==t.pages.length
return n||r}resetItemIndex(){this.itemIndex.clear(),new Array(ce.Headlines.getConsumed()).fill().forEach(()=>this.itemIndex.register(le.ItemIndex.HEADLINE_PLACEHOLDER))}}var ve=n(89),be=n(92),ye=n(56),Ee=n(124)
const _e=e=>e<.5?2*e*e:(4-2*e)*e-1
function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const we=()=>{},Se={next:we,error:we,complete:we}
const Ie=100
function xe(e){setTimeout(()=>{Q.PassiveScrollListener.pause()
const t=function(e){const t=Object(ue.get)(e,"content.url")
if(!t)return null
let n=W.Globals.document.querySelector('.bastian-page:nth-child(1) .feed-post-link[href="'+t+'"]')
if(n)for(;n.className&&-1===n.className.indexOf(ve.ITEM.slice(1))&&n.parentElement;)n=n.parentElement
return n}(e[0])
t&&function(e,t,n){const r=performance.now(),i=W.Globals.window.scrollY
if(i===e)return n()
Object(Ee.rAF)((function o(){const s=performance.now(),a=Math.min(1,(s-r)/t),c=_e(a)
W.Globals.window.scrollTo(0,c*(e-i)+i),a<1?Object(Ee.rAF)(o):n()}))}(function(e){let t=13
return be.DEVICES[ye.Settings.get("DEVICE_GROUP","desktop")]>be.DEVICES.smart&&(t+=Ie),e.getBoundingClientRect().top+W.Globals.window.scrollY-t}(t),1e3,()=>{Q.PassiveScrollListener.resume()})},100)}class Ce extends i.Engine.Component{constructor(e){super(e),this.handleClick=()=>{Object(ne.default)({origin:"botao pushstream click",label:"Quantidade: "+String(this.state.counter).padStart(2,"0")})
const e=se.$PushStream.getInstance()
e.stream.take(1).addListener(function(e){return Oe({},Se,{},e)}({next:xe})),e.request()},this.state={counter:0,topIsVisible:!0},se.$PushStream.getInstance().counterStream.addListener({next:e=>{this.setState({counter:e})},error:r.error,complete:()=>{}})}render(){const e=this.state.counter,t=s()("post-notifier-pushstream gui-color-primary-bg",{"notify-pushstream":Boolean(1===e),"notify-pulse":Boolean(e>1),"bstn-fd-visible-top":this.state.topIsVisible})
return 0===e?i.Engine.createElement("div",{className:t,ref:Object(d.as)(this)}):i.Engine.createElement("div",{className:t,ref:Object(d.as)(this),onClick:this.handleClick},i.Engine.createElement("span",null,e)," ","atualizaç"+(e>1?"ões":"ão"))}componentDidMount(){if(be.DEVICES[ye.Settings.get("DEVICE_GROUP","desktop")]<=be.DEVICES.smart){const e=()=>{const e=this._refs.node.parentElement
e&&this.setState({topIsVisible:Object(ee.getVisibility)(e).top})}
e(),Q.PassiveScrollListener.on(e)}}}var Te=i.Engine.createElement(Ce,null),je=i.Engine.createElement(ge,null),Ae=i.Engine.createElement(oe,null)
class Pe extends h.SeenTimeTelemetry{constructor(e){super(e),this.sharedFeedData={reporter:new u.FeedReporter({area:c.DESKTOP_AREAS.LEFT})}}getChildContext(){return{root:this,areaId:"feed",sharedFeedData:this.sharedFeedData}}render(){const e=s()("bstn-fd","bstn-fd-csr",{"bstn-fd-recommended":a.Configs.get("isRecommended")})
return i.Engine.createElement(l.ElementViewTrigger,{on:"partial",chain:"pages",checkInterval:1e3},i.Engine.createElement("div",{ref:Object(d.as)(this),className:e},Te,je,Ae))}componentDidMount(){this.cdmSeenTimeTelemetry(),a.Configs.set("feed_getSeenTime",this.getSeenTime.bind(this))}componentWillUnmount(){this.cwuSeenTimeTelemetry()}}let Ne
n.d(t,"Feed",(function(){return ke}))
const Re={}
class ke{static getInstance(){return Ne||(Ne=new ke(Re)),Ne}constructor(e){e!==Re&&Object(r.warn)("Class Feed is a singleton and shouldn't be called directly."),this.virtualElement=i.Engine.createElement(Pe)}}},function(e,t,n){"use strict"
n.r(t)
var r=n(20),i=n(55),o=n(22),s=n(23),a=n(87),c=n(126),l=n.n(c),u=n(85),h=n(143),d=n(132),p=n(141),f=n(16),m=n.n(f),g=n(109),v=n.n(g),b=n(69),y=n(144),E=n(145),_=n(142),O=n(100),w=n(29),S=n(127),I=a.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},a.Engine.createElement("g",{fill:"none"},a.Engine.createElement("path",{d:"M6 6c1 0 2-1 2-2S7 2 6 2 4 3 4 4s1 2 2 2zm0 1c-1.3 0-4 .7-4 2v1h8V9c0-1.3-2.7-2-4-2z",fill:"#FFF"}),a.Engine.createElement("path",{d:"M0 0h12v12H0"})))
var x=a.Engine.createElement("svg",{className:"icon",width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},a.Engine.createElement("g",{fill:"none"},a.Engine.createElement("path",{d:"M6 .2C2.8.2.2 2.8.2 6c0 3.2 2.6 5.8 5.8 5.8 3.2 0 5.8-2.6 5.8-5.8C11.8 2.8 9.2.2 6 .2zm0 10.5c-2.6 0-4.7-2-4.7-4.7 0-2.6 2-4.7 4.7-4.7 2.6 0 4.7 2 4.7 4.7 0 2.6-2 4.7-4.7 4.7z",fill:"#FFF"}),a.Engine.createElement("path",{d:"M-1-1h14v14H-1"}),a.Engine.createElement("path",{fill:"#FFF",d:"M6.3 3h-1v3.6l3.2 1.8.4-.7L6.2 6"})))
var C=a.Engine.createElement("div",{className:"text"},a.Engine.createElement(()=>x,null)," SIGA EM TEMPO REAL"),T=a.Engine.createElement(()=>I,null)
function j(e){let{spectators:t}=e
return a.Engine.createElement("div",{className:"label-tempo-real headline"},C,Object(S.insertIf)(t,()=>a.Engine.createElement("div",{className:"count"},T," ",t.toLocaleString("pt-br")," assistindo")))}var A=n(72),P=n(219),N=n(94)
class R extends N.BaseReporter{constructor(e){super(e),this.isLive=e.isLive,this.status=e.status}get contentStatus(){return this.status?this.status:this.isLive?"ao_vivo":void 0}get format(){return"destaque"}get size(){return u.POST_SIZES.LARGE}getPostPosition(){return this.data.index+1}}const k=Object(N.createPostReporter)(R)
var L=n(54),D=n(139),M=n(146),H=n(76),V=n(147),F=n(25),U=n(148),G=n(156),B=n.n(G),z=n(163),q=n(59),W=n(70),$=n(225),K=n(138)
function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Y=a.Engine.createElement("div",{className:"bastian-feed-show-temporeal-link"},"Siga em Tempo Real")
class J extends a.Engine.Component{render(){const{hasVideo:e,video:t,url:n,title:r,hasSummary:i,hasScoreFinished:o,summary:s,hasHighlights:c}=this.props,l=Object(F.get)(this.props,"match.highlights")||[],u={}
e&&t&&(u["data-video-id"]=t.id,u["data-short-url"]=n,u["data-link"]=n,u["data-title"]=r)
var h=a.Engine.createElement("span",{className:"bstn-hl-summary gui-color-primary gui-color-hover"},s)
return a.Engine.createElement("div",null,a.Engine.createElement(d.ElementViewTrigger,{on:"fitInScreen"},a.Engine.createElement("span",Z({className:"bstn-hl-title gui-color-primary gui-color-hover gui-color-primary-bg-after",ref:Object(O.as)(this,"title")},u),r)),Object(S.insertIf)(i||o,()=>h,()=>Object(S.insertIf)(c,()=>a.Engine.createElement("div",{className:"highlights-bastian-feed"},l.slice(0,2).map((e,t)=>a.Engine.createElement($.Highlight,{key:t,content:e,headline:!0})),Y))))}componentDidMount(){this.props.hasVideo&&Object(K.applyVideoLightbox)(this._refs.title)}}function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Q=e=>{let{allowThumb:t}=e
return(e,n)=>{const{title:r,url:i}=e.content,o=Object(F.get)(e.content,"image.sizes.S.url"),s={}
return t&&o&&(s.thumb={url:o,rightsholder:Object(F.get)(e.content,"image.rightsHolder")}),a.Engine.createElement("li",{key:n,className:"bstn-hl-itemlist bstn-hl-relateditem"},a.Engine.createElement(ee,X({title:r,url:i},s)))}}
function ee(e){let{url:t,title:n,thumb:r}=e
const i=r&&r.url,o={}
return r&&r.rightsholder&&(o.alt=""+r.title+r.rightsholder?"Foto: ("+r.rightsholder:"",o.title=r.rightsholder),a.Engine.createElement("a",{className:"bstn-hl-link bstn-related",href:t},Object(S.insertIf)(i,()=>a.Engine.createElement("img",X({className:"bstn-hl-relatedthumb",src:i},o,{loading:"lazy"}))),a.Engine.createElement("span",{className:"bstn-hl-title gui-color-primary gui-color-hover bstn-related"},n))}var te=n(149),ne=n.n(te),re=n(9),ie=n.n(re),oe=n(140),se=n(137),ae=a.Engine.createElement(oe.VideoPlay,null)
class ce extends a.Engine.Component{render(){const{props:e}=this
if(e.video&&e.image){const{id:t,duration:n}=e.video,r=e.image.url
return a.Engine.createElement("div",{ref:Object(O.as)(this,"video"),className:"bstn-hl-video",title:e.title,"data-video-id":t,"data-short-url":e.url,"data-link":e.url,"data-title":e.title,"data-img":r},ae,Object(S.insertIf)(ie()(n),()=>a.Engine.createElement("div",{className:"bstn-hl-duration"},Object(se.abbrTime)(n))))}return null}componentDidMount(){ne()(this._refs,"video")&&(Object(K.applyVideoLightbox)(this._refs.video),this._refs.video.addEventListener("click",e=>e.stopPropagation(),!1))}}var le=n(170),ue=a.Engine.createElement(le.default,{device:"desktop"})
class he extends a.Engine.Component{render(){return a.Engine.createElement("div",{ref:Object(O.as)(this,"video"),className:"bstn-hl-video"},ue)}}function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const pe=e=>{let t,n
const r=Object(F.get)(e,"content.image")
if(r){const i={height:1,width:!e.headlineVariation&&!e.isHalfSize&&!e.isSingle?1:2},o=2;(n=Object(w.choosePicture)(r,o,i))&&(t='url("'+n+'")')}return t}
var fe=a.Engine.createElement(D.BadgeAoVivo,null),me=a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-spaceritem"}),ge=a.Engine.createElement(he,null)
class ve extends _.SeenTimeTelemetry{constructor(e){super(e),this.reportView=()=>{const e=this.getSeenTime()
this.lastReportedSeenTime!==e&&(this.lastReportedSeenTime=e,A.Horizon.report(H.PostViewHeadline,this.reporter))},this.reportClick=e=>{const t=Object(V.cloneJSON)(this.props)
t.bstn$source="headline",Object(W.triggerDomEvent)(b.ITEM_CLICK,document,e=>{e.data=t}),A.Horizon.report(H.PostClick,this.reporter),this.reportEvent(e),this.reportToRealtime()},this.getFeatures=m()(()=>{const e=this.props,{summary:t,status:n,video:r,chapeuLabel:i,imageSizes:o,imageUrl:s,videoKind:a,highlights:c}=this.getProps(),l="uber"===e.headlineVariation,u=Boolean(o||s),h=Boolean(r&&!l),d=Boolean(i),p=Boolean(Object(F.get)(e,"cobertura.isLive")||Object(z.isLiveVideo)(a)),f=Boolean("eventos-esportivos"===e.type&&e.match&&!l),m=f&&(t.length>0||"Encerrada"===n),g=Boolean(!h&&!B()(e.aggregatedPosts)),v=Boolean(t&&(!d||!u||l)&&!h&&(!g||l)),b=Boolean(c&&c.length>0&&!l),y=Boolean(f&&!m),E=Boolean(y&&Object(F.get)(e,"content.showSpectators"))
return{hasPhoto:u,hasVideo:h,hasChapeu:d,isLive:p,hasRelated:g,hasScore:f,hasScoreFinished:m,hasSummary:v,isUber:l,isStories:Boolean("stories"===Object(F.get)(this.props,"type")),hasHighlights:b,hasLabelTempoReal:y,showSpectators:E}}),this.state={title:this.isMabEnabled()?"":Object(F.get)(e,"content.title"),backgroundImage:pe(e)}}render(){const e=this.props,t=this.getFeatures(),n=this.getClasses(t),r=Object(F.get)(e,"match")||{spectators:0},i=r.spectators,o=this.getRelateds(t),s=Object(F.get)(e,"content.chapeu.label")
let c=null,u=null,h=Object(F.get)(e,"content.url")
const d=Object(F.get)(e,"content.video.id")
t.hasVideo&&d&&(h="#v/"+d,h=""+L.Globals.location.origin+L.Globals.location.pathname+"#v/"+d),t.hasScore&&r.awayTeam&&r.homeTeam&&(c=r.awayTeam,u=r.homeTeam)
var p=a.Engine.createElement("span",{className:"bstn-hl-chapeu gui-subject gui-color-primary-bg-after"},s)
return a.Engine.createElement("div",{className:"bstn-hl-wrapper"},a.Engine.createElement("div",{ref:Object(O.as)(this),style:{"--bstn-hl-cover":this.state.backgroundImage},className:l()("bstn-hl type-"+e.type,n),onClick:this.reportClick},a.Engine.createElement("a",{className:"bstn-hl-link",href:h},Object(S.insertIf)(t.hasLabelTempoReal,()=>a.Engine.createElement(j,{spectators:t.showSpectators?i:0})),a.Engine.createElement("ul",{className:"bstn-hl-list"},Object(S.insertIf)(t.hasChapeu||t.isLive,()=>a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-chapeuitem"},Object(S.insertIf)(t.isLive,()=>fe,()=>Object(S.insertIf)(t.hasChapeu,()=>p)))),me,a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton "},Object(S.insertIf)(t.hasVideo,()=>a.Engine.createElement(ce,this.props.content))),a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-playbutton bstn-hl-video"},Object(S.insertIf)(t.isStories,()=>ge)),a.Engine.createElement("li",{className:"bstn-hl-itemlist bstn-hl-mainitem"},Object(S.insertIf)(c&&u,()=>a.Engine.createElement(E.Scoreboard,{headline:!0,away:c,home:u})),a.Engine.createElement(J,de({},e.content,t,{title:this.state.title,match:r}))),Object(S.insertIf)(!t.isUber,()=>o.map(Q({allowThumb:!1})))))),Object(S.insertIf)(t.isUber&&t.hasRelated,()=>a.Engine.createElement("ul",{className:"bstn-hl-uberrelateds",onClick:this.reportClick},o.map(Q({allowThumb:!0})))))}componentWillMount(){const e=this.getFeatures(),t=new k({data:this.props,telemetry:this,isLive:e.isLive,status:e.hasScore&&String(this.getProps().status).toLowerCase()})
t.addFeatureChecks({foto:()=>e.hasPhoto&&!e.hasVideo,agregados:()=>e.hasRelated,resumo:()=>e.hasSummary,video:()=>e.hasVideo,placar:()=>e.hasScore,label_tr:()=>e.hasLabelTempoReal,espectadores:()=>e.showSpectators}),this.reporter=new y.ReporterCascadeAggregator(t,this.context.sharedHeadlineData.reporter)}componentDidMount(){const e=this.getFeatures()
this.cdmSeenTimeTelemetry(),A.Horizon.on("collect-metrics",this.reportView)
const t=this._refs.node
e.isStories&&(t.style.borderBottom="5px solid "+Object(U.getCategoryColor)()),this.isMabEnabled()&&this.installMab()}componentWillUnmount(){A.Horizon.off("collect-metrics",this.reportView),this.cwuSeenTimeTelemetry()}isMabEnabled(){if(i.At.server)return!1
const e=Object(F.get)(this,"props.content.mab.experiment")
return e&&Object(M.isMabAvailiable)(e)}async installMab(){const e=Object(F.get)(this,"props.content.mab.experiment")
if(e)try{const t=await Object(M.requestMabExperiment)({experimentName:e})
this.setState({title:this.props.content.mab.metadata[t.arm]}),this.mabRewardHandler=()=>t.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(r.error)(t)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getClasses(e){return{"no-photo":!e.hasPhoto,"with-photo":e.hasPhoto,"with-video":e.hasVideo,"with-chapeu":e.hasChapeu,"with-summary":e.hasSummary,"with-related":e.hasRelated,"with-score":e.hasScore,"is-half-size":this.props.isHalfSize,"is-live":e.isLive}}getRelateds(e){return e.hasRelated?Object(F.get)(this.props,"aggregatedPosts"):[]}reportEvent(e){const t={origin:this.props.type,action:be(e)?"play":"clique",label:"headline",hasVideo:this.getFeatures().hasVideo,hasPhoto:this.getFeatures().hasPhoto,hasSummary:this.getFeatures().hasSummary,position:"posicao "+String(this.getItemPosition()).padStart(4,"0")}
Object(P.default)(t,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const e=this.props
let t='tipo desconhecido "'+Object(F.get)(e,"key")+'"'
const n=Object(F.get)(e,"content.url")
if(n)t=n
else{const n=Object(F.get)(e,"content.video.id")
n&&(t="video "+n)}Object(q.reportToRealtime)("headlines",t)}getProps(){const{content:e}=this.props
return{summary:String(Object(F.get)(e,"summary")||"").trim(),status:Object(F.get)(this.props,"match.status")||"Encerrada",video:Object(F.get)(e,"video"),chapeuLabel:Object(F.get)(e,"chapeu.label"),imageSizes:Object(F.get)(e,"images.sizes"),imageUrl:String(Object(F.get)(e,"image.url")||"").trim(),videoKind:Object(F.get)(e,"video.kind"),highlights:Object(F.get)(this.props,"match.highlights")}}getItemPosition(){return this.props.index+1}}const be=e=>Boolean(ye(e.srcElement,"bstn-hl-video")),ye=(e,t)=>{for(const n of function*(e){yield e
for(;e&&(e=e.parentElement);)yield e}(e))if(Ee(n,t))return n},Ee=(e,t)=>v()(e)&&e.classList.contains(t)
function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class Oe extends a.Engine.Component{getChildContext(){return{sharedHeadlineData:{reporter:new p.FeedReporter({area:u.DESKTOP_AREAS.HEADLINE})}}}render(){const{items:e}=this.props,t=i.At.screen(i.LARGE_SCREEN)?s.Configs.get("headlineVariation"):""
return a.Engine.createElement(d.ElementViewTrigger,{on:"partial",chain:"headlines",checkInterval:1e3},a.Engine.createElement("div",{className:l()("bstn-hls","xlarge-22","xlarge-offset-1","theme","model-"+e.length,{["variation-"+t]:t}),ref:we},a.Engine.createElement(h.ElementViewGroup,{id:"headlines",radius:2},e.map((n,r)=>a.Engine.createElement(ve,_e({index:r,key:r,isSingle:1===e.length&&0===r,isHalfSize:3===e.length&&r>=1,headlineVariation:t},n))))))}}const we=e=>{const t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
if(e&&t){const t=e.offsetHeight
let n;(n=function(e,t){if(e instanceof t)return e}(e.firstElementChild,HTMLDivElement))&&t>400?n.style.height=t+"px":setTimeout(()=>we(e),100)}}
function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Ie=(e,t)=>{let n
if(t.hasPhoto){const t=Object(w.choosePicture)(Object(F.get)(e,"content.image"),1,{height:1,width:1})
t&&(n='url("'+t+'")')}return n},xe=e=>{let{items:t}=e
return a.Engine.createElement(d.ElementViewTrigger,{on:"partial",checkInterval:1e3},a.Engine.createElement("div",{className:"bstn-uhl xlarge-22 xlarge-offset-1 theme"},a.Engine.createElement(Te,t[0])))}
var Ce=a.Engine.createElement(D.BadgeAoVivo,null)
class Te extends _.SeenTimeTelemetry{constructor(e){super(e),this.handleClick=e=>{if(this.reportClick(),!e.defaultPrevented){const e=this._refs.node.querySelector(".bstn-uhl-picture .bstn-uhl-link")
e&&(e.addEventListener("click",e=>{e.stopPropagation()},!1),setTimeout(()=>{e.click()},0))}},this.features=je(e),this.state={title:this.isMabEnabled()?"":Object(F.get)(e,"content.title"),backgroundImage:Ie(e,this.features)}}render(){const e=this.props,t=this.features
return a.Engine.createElement("div",{className:l()("bstn-uber-hl type-"+e.type,Ae(t))},a.Engine.createElement("div",{className:"bstn-uhl-picture",ref:Object(O.as)(this),onClick:this.handleClick,style:{"--bstn-uhl-cover":this.state.backgroundImage}},a.Engine.createElement("div",{className:"bstn-uhl-overlay"},Object(S.insertIf)(t.hasHat||t.isLive,()=>a.Engine.createElement("div",{className:"bstn-uhl-hatslot"},Object(S.insertIf)(t.isLive,()=>Ce,()=>Object(S.insertIf)(t.hasHat,()=>a.Engine.createElement("span",{className:"bstn-uhl-hat"},Object(F.get)(e,"content.chapeu.label")))))),a.Engine.createElement("a",{className:"bstn-uhl-link",href:e.content.url},a.Engine.createElement(d.ElementViewTrigger,{on:"fitInScreen",tagName:"span"},a.Engine.createElement("span",{className:"bstn-uhl-title"},e.content.title))))),Object(S.insertIf)(t.hasSummary,()=>a.Engine.createElement("div",{className:"bstn-uhl-summary"},e.content.summary)),Object(S.insertIf)(t.hasRelated,()=>a.Engine.createElement("ul",{className:"bstn-uhl-relateds"},this.getRelateds().map((e,t)=>a.Engine.createElement(Pe,Se({},e,{key:t}))))))}componentDidMount(){this.cdmSeenTimeTelemetry(),this.isMabEnabled()&&this.installMab()}componentWillUnmount(){this.cwuSeenTimeTelemetry()}isMabEnabled(){if(i.At.server)return!1
const e=Object(F.get)(this,"props.content.mab.experiment")
return Object(F.get)(this,"props.content.mab")&&Object(M.isMabAvailiable)(e)}async installMab(){const e=Object(F.get)(this,"props.content.mab.experiment")
if(e)try{const t=await Object(M.requestMabExperiment)({experimentName:e})
this.setState({title:this.props.content.mab.metadata[t.arm]}),this.mabRewardHandler=()=>t.reward(),this._refs.node.addEventListener("click",this.mabRewardHandler,!1)}catch(t){Object(r.error)(t)}}uninstallMab(){this.mabRewardHandler&&this._refs.node.removeEventListener("click",this.mabRewardHandler)}getRelateds(){return this.features.hasRelated&&this.props.aggregatedPosts?this.props.aggregatedPosts:[]}reportClick(){const e=Object(V.cloneJSON)(this.props)
e.bstn$source="headline",Object(W.triggerDomEvent)(b.ITEM_CLICK,document,t=>{t.data=e}),this.reportEvent(),this.reportToRealtime()}reportEvent(){const e={origin:this.props.type,action:"clique",label:"headline",hasVideo:!1,hasPhoto:this.features.hasPhoto,hasSummary:this.features.hasSummary,position:"posicao 0001"}
Object(P.default)(e,["GA","CommonEvents"],{generateLabel:!0})}reportToRealtime(){const e=this.props
let t='tipo desconhecido "'+Object(F.get)(e,"key")+'"'
const n=Object(F.get)(e,"content.url")
if(n)t=n
else{const n=Object(F.get)(e,"content.video.id")
n&&(t="video "+n)}Object(q.reportToRealtime)("headlines",t)}}const je=e=>{const{content:t}=e
return{hasHat:Boolean(Object(F.get)(t,"chapeu.label")),hasPhoto:Boolean(Object(F.get)(t,"images.sizes")||String(Object(F.get)(t,"image.url")||"").trim()),hasRelated:!B()(e.aggregatedPosts),hasSummary:Boolean(String(Object(F.get)(t,"summary")||"").trim()),isLive:Object(F.get)(e,"cobertura.isLive")||Object(z.isLiveVideo)(Object(F.get)(t,"video.kind"))}},Ae=e=>({"with-hat":e.hasHat,"with-summary":e.hasSummary,"with-related":e.hasRelated,"is-live":e.isLive}),Pe=e=>{const t=Object(F.get)(e.content,"image.sizes.S.url"),n=Object(F.get)(e.content,"image.rightsHolder"),r={},i=Object(F.get)(e.content,"image")
return t&&n&&(r.alt=""+i.title+i.rightsholder?"Foto: ("+i.rightsholder:"",r.title=n),a.Engine.createElement("li",{className:"bstn-uhl-relateditem"},a.Engine.createElement("a",{className:"bstn-uhl-relatedlink",href:e.content.url},a.Engine.createElement("span",{className:"bstn-uhl-related gui-color-primary gui-color-hover"},e.content.title),Object(S.insertIf)(t,()=>a.Engine.createElement("span",{className:"bstn-uhl-relatedthumb",style:'background-image:url("'+String(t)+'")'},a.Engine.createElement("img",Se({className:"bstn-uhl-relatedimage",src:t},r,{loading:"lazy"}))))))}
n.d(t,"Headlines",(function(){return Le})),n.d(t,"consumeHeadlinePosts",(function(){return De})),n.d(t,"getHeadlinesQuantity",(function(){return Me}))
let Ne,Re=0
const ke={}
class Le{static getInstance(){return Ne||(Ne=new Le(ke)),Ne}static getConsumed(){return Re}constructor(e){if(e!==ke&&Object(r.warn)("Class Headlines is a singleton and shouldn't be called directly."),this.items=De(),this.items.length>0){const e="uber"===s.Configs.get("headlineVariation")&&i.At.screen(i.SMALL_SCREEN)?xe:Oe
this.virtualElement=a.Engine.createElement(e,{items:this.items})}}}const De=()=>{let e=Me()
const t=[]
if(e>0){const n=o.$Falkor.getInstance(),i=n.stream.subscribe({next(e){t.push(e),Re+=1},error:r.error,complete(){}})
for(;e>0;)e--,n.request({preventFetch:!0})
i.unsubscribe(),s.Configs.decr("recommendationStart",Re)}return t},Me=()=>{let e=0
return e=s.Configs.get("headlinesNrPosts")}},function(e,t,n){"use strict"
n.r(t)
var r=n(189),i=n.n(r),o=n(16),s=n.n(o),a=n(109),c=n.n(a),l=n(89),u=n(20),h=n(55),d=n(56),p=n(54),f=n(69),m=n(106),g=n(87),v=n(28),b=n(71),y=n(25),E=n(181),_=n(70),O=n(186),w=n(223),S=n(214),I=n(215),x=n(105),C=n(85),T=n(143),j=n(132),A=n(141),P=n(226),N=n(171),R=n(142),k=n(100)
n(133)
let L
function D(e){const t=[...e],n=[[1,2],[Number.POSITIVE_INFINITY,3]],r=[[7,8],[13,14]]
if(p.Globals.document.querySelector(l.BS_HOME)){for(const[e,r]of n)t.splice(e,0,{id:"banner_rm"+r,type:"advertise"})
for(const[e,n]of r)t.length>e&&t.splice(e,0,{id:"banner_rm__"+n,type:"advertise"})}return t}const M=L=class extends R.SeenTimeTelemetry{constructor(){super(),this.state={items:D(this.getItems())},this.itemIndex=new N.ItemIndex}getChildContext(){return{root:this,areaId:"right-column",itemIndex:this.itemIndex,sharedFeedData:{reporter:new A.FeedReporter({area:C.DESKTOP_AREAS.RIGHT})}}}render(){return this.itemIndex.clear(),g.Engine.createElement(j.ElementViewTrigger,{on:"partial",chain:"rightColumn",checkInterval:1e3},g.Engine.createElement("div",{ref:Object(k.as)(this),id:"bstn-rtcl"},g.Engine.createElement(T.ElementViewGroup,{id:"rightColumn",radius:2},this.state.items.map((e,t)=>g.Engine.createElement(P.Item,{key:t,data:e,index:t+1})))))}componentDidMount(){this._refs.node.addEventListener("element-view",e=>e.stopPropagation())}getItems(){const e=[],t=x.$DistributedComponents.getInstance(),n=t.stream.subscribe({next:t=>{e.push(t)},error:()=>{},complete:()=>{}})
for(;!t.isEmpty();)t.request()
return n.unsubscribe(),t.stream.addListener({next:e=>this.setState({items:[...this.state.items,e]}),error:u.error,complete:()=>{}}),e}}
let H
const V={}
class F{static getInstance(){return H||(H=new F(V)),H}constructor(e){e!==V&&Object(u.warn)("Class RightColumn is a singleton and shouldn't be called directly."),this.virtualElement=g.Engine.createElement(M)}}var U=n(23)
var G=n(22),B=n(15)
function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const q=e=>{let t=Object(y.get)(e,"content.url")
return t||(Object(y.get)(e,"content.video.id")?t=e.content.video.id:e.id&&(t=e.id),t)},W=e=>{const{embedData:t,recommendationFirstFetch:n,displayedContentURLs:r}=e
r&&B.PostIndex.loadInitialURLs(r),U.Configs.absorbConfigs(t),t.items=(e=>{let{items:t}=e
return t.filter((e,t,n)=>t===n.findIndex(t=>q(t)===q(e)))})(t),(e=>{if(U.Configs.get("isHomeOrTopic")){const t=Object(v.getFirstPostWithImageForLCP)(e)
t&&(t.content.image.fastRender=!0)}})(t)
const{items:i,rest:o}=function(e){const t=U.Configs.get("recommendationStart")
let n=[],r=e.items
return t>0&&(n=e.items.slice(0,t-1),r=e.items.slice(t-1)),{items:n,rest:r}}(t),s=((e,t)=>()=>{Array.isArray(t)&&t.length>0&&e.store(t)})(G.$Falkor.getInstance(z({},t,{items:i})),o)
if(x.$DistributedComponents.getInstance(t),n){U.Configs.set("recommendationTag",n.tag)
let e=!1
n.experimentData.experiment&&(p.Globals.bstn.experimentData=n.experimentData,e=n.experimentData.experiment.length>0),U.Configs.set("isRecEditorial",e),m.$Recommendation.getInstance(n).stream.addListener({next:()=>{},error:()=>{},complete:s})}else s()}
function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"moveForePostsUp",(function(){return X})),n.d(t,"setupPostABs",(function(){return se})),n.d(t,"launch",(function(){return ae}))
const K=/[#?].*$/,Z=/^https?:\/\//,Y=p.Globals.location.href.replace(K,"").replace(Z,""),J=e=>{let t=e.items.length
for(;t--;){String(Object(y.get)(e.items[t],"content.url")).trim().replace(Z,"").replace(K,"")===Y&&e.items.splice(t,1)}},X=e=>{const t=Object(v.getNrHeadlines)(e)
if(Object(v.hasHeadlines)(e)){let n=t-1,r=1
const i=Object(y.get)(e,"forePosts")
if(i)for(let t=0;t<i.length&&n>0;t++)e.items.splice(r,0,i[t]),r+=1,q(i[t])!==q(e.items[0])&&(n-=1)}},Q=(e,t)=>{Object(_.triggerDomEvent)(f.LAUNCH_FAILED,p.Globals.document,t=>{t.component=e})
const n=['Impossible to initialize Bastian "'+e+'".',t]
t.stack&&n.push(t.stack),Object(u.error)(...n)},ee=()=>{const e='There is no such placeholder with selector "',t=[[l.HEADLINES_PLACEHOLDER,"headlines",()=>Object(u.info)(""+e+l.HEADLINES_PLACEHOLDER+'"')],[l.PLACEHOLDER,"feed",()=>Q("Feed",""+e+l.PLACEHOLDER+'"')]]
h.At.largeScreen&&t.push([l.AREATEMPLATE_DIREITA,"rightColumn",()=>Object(u.info)(""+e+l.AREATEMPLATE_DIREITA+'"')])
const n={}
return t.forEach(e=>{let[t,r,i]=e
const o=(e=>p.Globals.document.querySelector(e))(t)
o?n[r]=o:i()}),n},te=e=>{var t,n,r,o
const{recommendationFirstFetch:s,embedData:a}=e,c=null===(t=a.config)||void 0===t?void 0:null===(n=t.recommendation)||void 0===n?void 0:n.active,l=null===(r=a.config)||void 0===r?void 0:null===(o=r.recommendation)||void 0===o?void 0:o.start
if(s){if(c&&(null==s||!s.items.length)&&a.items.length){const e=l-1,t=l+9,n=a.items.map((n,r)=>(r>=e&&r<t&&(n=((e,t)=>{var n
return{id:e.id,feedId:e.feedId,lastPublication:e.lastPublication,modified:e.modified,content:$({url:"video"===e.type?null===(n=e.content.video)||void 0===n?void 0:n.url:e.content.url},i()(e.content)),aggregatedPosts:e.aggregatedPosts||[],publication:e.publication,created:e.created,tenantId:e.tenantId,type:e.type,_experiment_properties:t.experimentData,_documentKey:""+t.tag}})(n,s)),n)).map(m.prepare)
a.items=n}s.items=s.items.map(m.prepare),J(s)}a&&(X(a),J(a))},ne=p.Globals.document,{showSLBMeio:re=!1}=window,ie=e=>ne.querySelector(e),oe=async()=>{await Object(E.isCustomLazyAvailable)()&&p.Globals.bannerLazyLoading("banner_slb_meio")},se=async()=>{const e={device:h.At.smallScreen?"mobile":"web",tenant:d.Settings.get("PORTAL")},t={postVideo:{name:"feed-"+e.tenant+"-post-video-v1",tenants:[],globalsName:"postVideoAB"},postVideoPreviewAB:{name:"feed-"+e.tenant+"-video-preview-v2",tenants:["g1","dev-beta"],globalsName:"postVideoPreviewAB",run:()=>Object(w.hasVideoPreviewSupport)(!0)},gptNativeLazyLoad:{name:"feed-redeglobo-lazyload-gpt-v2",tenants:["redeglobo"],globalsName:"adsLazyLoad"},postVideoRedirect:{name:"feed-"+e.tenant+"-post-video-redirect-v1",tenants:["ge","g1","off","multishow"],globalsName:"postVideoRedirectAB"}},n=t=>(!t.devices||t.devices.includes(e.device))&&(!t.run||t.run())&&(!t.tenants||t.tenants.includes(e.tenant)),r=async e=>{let n
try{n=await i.choose(e)}catch(o){n=null}if(!n||n.experiment!==e)return Object(u.warn)("[feed-fe::chooseExperiment] - FAIL choose "+e),!1
const r=(e=>{const n=Object.keys(t).find(n=>t[n].name===e)
return n?t[n]:void 0})(n.experiment)
return p.Globals[r.globalsName]=n,r}
if(!Object.keys(t).find(e=>n(t[e])))return!1
const i=await Object(b.getClient)()
i.options().skipImpression()
const o=Object.keys(t).map(async e=>{const i=t[e]
n(i)&&await r(i.name)})
return await Promise.all(o),!0},ae=s()(e=>{(e=>{const{launchExperiments:t}=e
if(t)for(const n in t)b.GloboAB.save(t[n])})(e),te(e),W(e)
const t=(e=>{const t="bstn-rtcl-placeholder"
if("rightColumn"in e&&null===ne.getElementById(t)){const n=ne.createElement("div")
n.id=t
const r=e.rightColumn
c()(r)&&(r.firstElementChild?r.insertBefore(n,r.firstElementChild):r.appendChild(n)),e.rightColumn=n}return e})(ee()),n=function(e){const t={}
let n=[]
if(e&&e.headlines){const e=I.Headlines.getInstance()
I.Headlines.getConsumed()>0&&e.virtualElement&&(t.headlines=e.virtualElement,n=e.items)}else U.Configs.get("hasCustomHeadlines")&&U.Configs.get("hasHeadlinesToRender")&&(n=Object(I.consumeHeadlinePosts)())
return globalThis.feedClient&&globalThis.feedClient.setHeadlines(n),S.Feed.getInstance().virtualElement&&(t.feed=S.Feed.getInstance().virtualElement),F.getInstance().virtualElement&&(t.rightColumn=F.getInstance().virtualElement),t}(t)
se().finally(()=>((e,t)=>{for(const r in e){const i=e[r],o=t[r]
if(i&&c()(o))try{o.innerHTML="",g.Engine.render(i,o)}catch(n){Q(r,n)}}})(n,t)),Object(O.setupVideoPreviewViewportObserver)(),(e=>{const t=ie(l.BANNER_SLB_MEIO),n=ie(l.SHOWTIME_INITIALIZED)
if(h.At.largeScreen&&!t&&(e||n||re)){const e=ie(l.AREATEMPLATE_ESQUERDA)
if(e){const t=e.parentNode,n=ne.createElement("div")
n.setAttribute("class","row show-for-medium-up"),n.innerHTML='<div class="column medium-24 large-24 large-offset-0 xlarge-22 xlarge-offset-1"><div class="publicidade publicidade-banner_slb_meio"><div id="banner_slb_meio"></div></div></div>',t.parentNode.insertBefore(n,t),oe()}}else t&&oe()})(n.headlines)})},function(e,t,n){"use strict"
n.r(t)
var r=n(16),i=n.n(r),o=n(109),s=n.n(o),a=n(126),c=n.n(a),l=n(20),u=n(117),h=n(55),d=n(135),p=n(87),f=n(54),m=n(85),g=n(56),v=n(100),b=n(1),y=n.n(b),E=n(6),_=n.n(E),O=n(172),w=n.n(O)
const S={SSR_HEADLINES:!0,AB_SUMMARY_VISIBILITY:null,FORCE_STICKY:!1}
function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}(e=>{if(_()(e)&&!w()(e))for(const t of Object.keys(S))t in e&&(S[t]=e[t])})((e=>{if(y()(e)&&e.length>0)try{const t=(e=>decodeURIComponent(escape(atob(e))))(e)
return JSON.parse(t)}catch(t){Object(l.error)(t)}})((()=>{const e=f.Globals.location.hash
if(e.includes("bstnflags=")){const t=e.indexOf("bstnflags=")+"bstnflags=".length,n=e.indexOf("&",t),r=[t]
return n>=0&&r.push(n),e.slice(...r)}})()))
const x=e=>{let t=null
e.experimentName&&f.Globals&&f.Globals[e.experimentName]&&(t=f.Globals[e.experimentName])
return e.render({convert:()=>{t&&t.conversion&&t.conversion()},imprint:()=>{t&&t.impression&&t.impression()},getAlternative:()=>t?t.alternative:null})}
var C=n(181),T=n(71)
class j{constructor(e){this._experimentName=e,this.experiment=null}async init(){if(!this._experimentName)throw new Error
const e=(await Object(T.getClient)()).mab()
try{this.experiment=await e.choose(this._experimentName)}catch(t){}}increment(){this.experiment&&this.experiment.increment()}reward(){this.experiment&&this.experiment.reward()}getArm(){return this.experiment?this.experiment.arm:null}getAlternative(){return this.experiment?this.experiment.alternative:null}getAbAlternative(){return this.experiment?this.experiment.abAlternative:null}}n.d(t,"isRelativeWidth",(function(){return D}))
class A extends p.Engine.Component{constructor(e){super(e),this.renderSkeleton=()=>{if(this.hasSmartAd){const{adHeightStr:e}=this.state,t={"--skeleton-width":"100%","--skeleton-height":e},n={"--smart-ad-height":e,"min-height":this.minHeightStr},r=c()("bstn-ad-rail",{"bstn-ad-rail--expanded":this.state.adServed,"bstn-ad-rail--collapsed":!this.state.adServed})
return p.Engine.createElement("div",{className:r,style:n},p.Engine.createElement("div",{ref:Object(v.as)(this)},this.state.isLoaded?null:p.Engine.createElement("div",{className:"content-ads__skeleton glb-skeleton-box",style:t})))}return p.Engine.createElement("div",{className:"bstn-ad-rail"},p.Engine.createElement("div",{ref:Object(v.as)(this)}))},this.renderAds=e=>this.lazyGPTNative?p.Engine.createElement("div",{className:e,ref:Object(v.as)(this,"placeholder")},this.renderSkeleton()):p.Engine.createElement(u.PreemptVisibility,{onNearToBeVisible:this.triggerBanner,threshold:this.state.threshold,awaitScroll:!0},p.Engine.createElement("div",{className:e,ref:Object(v.as)(this,"placeholder")},this.renderSkeleton())),this.sendABImpression=Object(C.filterEvents)(this,async()=>{this.props.convert()}),this.checkMABImpression=Object(C.filterEvents)(this,async()=>{B(this.props.id)&&this.mab.reward(),this.props.convert(),this.configureTimeoutBannerStick()}),this.configureTimeoutBannerStick=()=>{this.isBannerStickable()&&setTimeout(()=>{!1===Object(d.getVisibility)(this._refs.placeholder).isVisible&&this._refs.node.classList.remove("bstn-ad-visible"),setTimeout(()=>{this.setState({isSticky:!1})},1e3)},3e3)},this.triggerBanner=async()=>{if(this._refs.node){await Object(C.isCustomLazyAvailable)()&&this.initBanner()}},this.setAsLoaded=Object(C.filterEvents)(this,e=>{if("banner_mobile1"===this.props.id&&this._refs.node.classList.add("bstn-ad-visible"),this.isBannerStickable()){const e=50===this.adHeight?50:100
this.setState({isLoaded:!0,isSticky:!0,stickySize:"bstn-sticky-"+e+"px"})}else this.setState({isLoaded:!0})
this.props.imprint()}),this.adServerOnSlotRenderEnded=e=>{if(e.id_elemento!==this.props.id)return
const t=e.evento_original,n=t.size?t.size[1]:0,r=(!n||n<35)&&!t.isEmpty,i=r?this.state.adHeight:n,o=r?"auto":i+"px"
this.minHeightStr=r?this.minHeight+"px":"0px",k()||M(this._refs.container,D(this._refs.node)),this.setState({adHeight:i,adHeightStr:o,adServed:!t.isEmpty,isLoaded:!0})},this.isBannerStickable=()=>h.At.smallScreen&&"banner_mobile1"===this.props.id&&(S.FORCE_STICKY||this.adHeight>=50&&this.adHeight<=100),this.shouldAdHaveSkeleton=e=>!!ie(e),this.lazyGPTNative=this.props.getAlternative&&"lazyload-nativo-google"===this.props.getAlternative(),this.hasSmartAd=this.shouldAdHaveSkeleton(e.id)
const t=ie(e.id),n=(null==t?void 0:t.height)||0
this.minHeight=(null==t?void 0:t.minHeight)||0,this.minHeightStr=this.minHeight+"px",this.state={adPosition:t,adHeight:n,adHeightStr:n+"px",isLoaded:!1,isSticky:!1,stickySize:"",threshold:u.DEFAULT_THRESHOLD,adServed:!0}}render(){const e=c()(this.state.stickySize,{"bstn-ad-sticky":this.state.isSticky,"bstn-ad-smart":this.hasSmartAd})
return p.Engine.createElement("div",{className:"bstn-feed-ad",ref:Object(v.as)(this,"container")}," ",this.renderAds(e)," ")}async componentDidMount(){window.document.addEventListener("adserver-ad-rendered",this.adServerOnSlotRenderEnded)
const e=V(this.props.id)
if(this.mab=new j(e),"right-column"!==this.context.areaId&&await this.mab.init(),this.setState({threshold:this.mab.getArm()||u.DEFAULT_THRESHOLD}),await Object(C.isGooglePubadsAvailable)()){const e=Object(C.getPubads)()
e.addEventListener("slotOnload",this.setAsLoaded),this.lazyGPTNative?(await this.triggerBanner(),e.addEventListener("impressionViewable",this.sendABImpression)):e.addEventListener("impressionViewable",this.checkMABImpression)}else this.setState({adServed:!1,isLoaded:!0})}componentDidUpdate(){if(this._refs&&this._refs.node&&this._refs.node.childElementCount>=2&&!this.state.isLoaded){const e=f.Globals.getComputedStyle(this._refs.node.querySelector("iframe"))
e&&("none"===e.display?this.setState({adServed:!1}):this.setState({isLoaded:!0}))}}async initBanner(){const e=this.props
try{let t={abAlternative:"control",feed:1,gptLazyload:!1}
this.mab.increment(),t.abAlternative=this.mab.getAlternative(),this.lazyGPTNative&&(t.gptLazyload=!0),Object(C.defineBanner)(this._refs.node,e.id,t)}catch(t){Object(l.warn)('Soft error: could not create banner "'+e.id+'"'),Object(l.error)(t)}}}A.FACE="publicidade",A.SIZE=m.POST_SIZES.MEDIUM
const P=(N="adsLazyLoad",R=A,e=>p.Engine.createElement(x,{experimentName:N,render:t=>{let{convert:n,imprint:r,getAlternative:i}=t
return p.Engine.createElement(R,I({},e,{convert:n,imprint:r,getAlternative:i}))}}))
var N,R
P.FACE=A.FACE,P.SIZE=A.SIZE
t.default=P
const k=i()(()=>f.Globals.document.getElementsByClassName("areatemplate-direita").length>0),L=/^([^0]\d*%|auto)$/,D=e=>{const t=e.querySelector("iframe"),n=e.parentElement,r=e=>L.test(e.width)||L.test(e.minWidth)
return!!t&&(s()(n)?r(t.style)||r(n.style):r(t.style))},M=(e,t)=>{e&&(t?e.classList.add("bstn-fd-elastic-banner"):e.classList.remove("bstn-fd-elastic-banner"))},H=h.At.smallScreen?"mobile":"desktop",V=e=>{return"bastian-advwblt-r5:"+g.Settings.get("PORTAL")+":"+H+":"+X+":"+(G(e)||"")},F={banner_mobile1:"mobile1",banner_feed_especial:"ep",banner_rm2_feed:"banner2",banner_rm3_feed:"banner3"},U={banner_feed__:"dinamico",banner_middle_feed__:"middle"},G=e=>{const t=Object.keys(U).find(t=>e.startsWith(t))
return t?U[t]:F[e]},B=e=>Boolean(G(e)),z=e=>f.Globals.document.body.classList.contains(e),q=z("bs-home"),W=z("multicontent"),$=z("poll-container"),K=z("cb-live"),Z=z("bs-tabela"),Y="/"===f.Globals.location.pathname,J={homeprincipal:q&&Y,home:q&&!Y,multicontent:W,votacao:$,cobertura:K,tabela:Z},X=(Object.entries(J).filter(e=>{let[,t]=e
return t})[0]||[""])[0],Q={mobile:250,desktop:226},ee={mobile:250,desktop:454},te=Q[H],ne=ee[H],re=[{pattern:/banner_mobile1/,height:ne,minHeight:te},{pattern:/banner_rm2_feed/,height:ne,minHeight:te},{pattern:/banner_rm3_feed/,height:ne,minHeight:te},{pattern:/banner_feed__/,height:ne,minHeight:te},{pattern:/banner_middle_feed__/,height:ne,minHeight:te},{pattern:/banner_feed_especial/,height:h.At.smallScreen?368:ee.desktop,minHeight:h.At.smallScreen?157:Q.desktop},{pattern:/banner_feed_placarge__/,height:ne,minHeight:te}],ie=e=>re.find(t=>{let{pattern:n}=t
return n.test(e)})},function(e,t,n){"use strict"
n.r(t)
var r=n(10),i=n.n(r),o=n(5),s=n.n(o),a=n(87),c=n(85),l=a.Engine.createElement("div",null)
class u extends a.Engine.Component{componentDidMount(){s()(this.props.onPlaceholderMount)&&this.props.onPlaceholderMount(this.context.item)}render(){return l}}u.FACE="placeholder",u.SIZE=c.POST_SIZES.MEDIUM
var h=n(20),d=n(89),p=n(69),f=n(55),m=n(75),g=n(54),v=n(90),b=n(100)
let y
const E=()=>["interactive","complete"].includes(g.Globals.document.readyState),_=new Promise(e=>{E()?e():document.addEventListener("readystatechange",()=>{E()&&e()})}),O=y=()=>_
var w=n(25),S=n(67),I=n(70)
n.d(t,"exposable",(function(){return P})),n.d(t,"$Cards",(function(){return k}))
class x extends a.Engine.Component{answerInvitation(){return!0}shouldComponentUpdate(){return!1}componentDidMount(){this.customComponentDidMount&&Object(S.safeCall)(this.customComponentDidMount,this)
const e=Object(w.get)(this,"_refs.node.firstElementChild.firstElementChild")
e&&Object(I.triggerDomEvent)(p.CARD_RENDERED,e),C.upgrade(this.context.sharedItemData,{face:"card",size:c.POST_SIZES.MEDIUM})}render(){return null}}class C extends v.ItemReporter{get postId(){return this.itemReference._refs.item.textContent.split("\n")[0].trim().toLowerCase()}}function T(e){e.componentDidMount&&(e.customComponentDidMount=e.componentDidMount,delete e.componentDidMount)
class t extends x{}return Object.assign(t.prototype,e),e.klass=t,e}function j(e){return function(){return a.Engine.createElement("div",{ref:Object(b.as)(this),dangerouslySetInnerHTML:{__html:e}})}}function A(e){return e.parentNode&&e.parentNode.removeChild&&e.parentNode.removeChild(e),T({rawHTML:e.outerHTML,render:j(e.outerHTML)})}const P={BaseCard:x,create:T,rawHTMLRender:j,embededHTMLCardFactory:A,defaultCardFactory:A}
let N
const R={}
class k{static getInstance(){return N||(N=new k(R)),N}constructor(e){this.buffer=[],this.placeholders=[],this.emitter=new m.EventEmitter,this.pageScanned=!1,e!==R&&Object(h.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=i.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}}),f.At.largeScreen||this.performCollect()}async performCollect(){await O(),this.collect()}collect(){const e=Array.from(g.Globals.document.querySelectorAll(d.CARD)).map(e=>Object(w.get)(e,"firstElementChild.cardComponent")||A(e))
e.slice().forEach(t=>{const n=this.placeholders.shift()
if(n&&n.placeInfo){const t=this.doInvitations(e,n.placeInfo)
if(t)return void this.assignCardToPlaceholder(n,t)}this.buffer.push(t)}),this.pageScanned=!0}doInvitations(e,t){let n,r=!1
const i=[]
for(;!1===r&&(n=e.shift());){try{r=Object(w.get)(n,"klass.prototype.answerInvitation")(t)}catch(o){Object(h.warn)("Soft error: failed to invite card",n),Object(h.error)(o)}!1===r&&i.push(n)}if(e.push(...i),!0===r)return n}assignCardToPlaceholder(e,t){e.card=t,e.klass=t.klass,null!==e.item&&e.item.forceUpdate()}request(e){if(!f.At.smallScreen||!this.listener)return!1
{const t=this.listener,n={id:"card-"+String(Math.random()).substr(2,6),type:"card",card:null,item:null,klass:u,placeInfo:e,onPlaceholderMount:e=>{n.item=e},source:k.staticName},r=this.doInvitations(this.buffer,e)
if(!r&&this.pageScanned)return!1
r?this.assignCardToPlaceholder(n,r):this.pageScanned||this.placeholders.push(n),t.next(n)}}}k.staticName="$Cards"},function(e,t,n){"use strict"
n.r(t)
var r=n(5),i=n.n(r),o=n(20),s=n(54),a=n(60),c=n(25)
let l
const u=["_trackEvent","feed","feed"]
let h=[]
l=e=>{h.push(u.slice().concat(e))},(async()=>{if(await Object(a.availabilityOf)("trackerBuilder",()=>[s.Globals.trackerBuilder].every(d),"3s"),s.Globals.trackerBuilder){const e=s.Globals.trackerBuilder().addGA4().addUA({sender:"push"}).build()
h.forEach(t=>e.push(t)),h=e}})()
const d=e=>i()(Object(c.get)(s.Globals,String(e))),p=l
var f=n(1),m=n.n(f),g=n(73),v=n(74),b=n.n(v),y=n(10),E=n.n(y),_=n(75),O=n(56),w=n(23)
let S,I=null
class x extends _.EventEmitter{constructor(){super(),setTimeout(()=>{"esppub"!==w.Configs.get("feedType")&&(this.setupClient(),this.init())},0)}setupClient(){s.Globals.location.hostname.includes(".qa.")&&g.Settings.useQAConfiguration()
const e=O.Settings.get("PORTAL"),t=O.Settings.get("DEVICE_GROUP")
m()(e)&&m()(t)?I=new g.HorizonClient(e.toLowerCase(),t.toLowerCase(),"feed"):Object(o.warn)("Impossible to configure the Horizon client. PORTAL and/or DEVICE_GROUP are missing.")}init(){const e=E.a.periodic(1e4).filter(()=>"visible"===s.Globals.document.visibilityState),t=E.a.periodic(6e4)
E.a.merge(e,t).compose(b()(1e4)).addListener({next:()=>this.trigger("collect-metrics"),error:()=>{},complete:()=>{}})}report(e){let[t,n]=e
const r={id:"common-event",version:"0.1",contentType:"common",properties:{eventCategory:"feed",eventAction:t,eventLabel:n}}
I&&I.send(r)}}const C=S=new x,T=(e,t)=>t?"com video":e?"com foto":"sem midia"
t.default=(e,t,n)=>{const r={GA:p,CommonEvents:C.report}
let i
i=n&&n.generateLabel?(e=>{let{action:t,label:n,hasVideo:r,hasPhoto:i,hasSummary:o,position:s}=e
return t&&n&&s?[t,n,T(i,r),(o?"com":"sem")+" resumo",s].join(" | "):null})(e):e.label
const{origin:o}=e
o&&null!==i&&t.forEach(e=>r[e]([o,i]))}},function(e,t,n){"use strict"
n.r(t)
var r=n(109),i=n.n(r),o=n(19),s=n.n(o),a=n(112),c=n(20),l=n(87),u=n(54),h=n(113),d=n(222),p=n(125),f=n(23),m=n(127)
const g=e=>l.Engine.createElement("div",{className:"feed-post-metadata"},Object(m.insertIf)(!1===f.Configs.get("disableDateTime"),()=>e.date),e.section)
var v=n(128),b=n(129),y=n(130),E=n(131),_=n(136),O=n(140)
function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let S
function I(e,t){void 0===t&&(t={})
const n=(S&&i()(S)||(S=u.Globals.document.createElement("div")),S.innerHTML="",S)
if(n.innerHTML=Object(a.default)(l.Engine.createElement(e,t)),i()(n.firstChild))return n.removeChild(n.firstChild)}n.d(t,"Relateds",(function(){return x})),n.d(t,"Relacionados",(function(){return C})),n.d(t,"Cover",(function(){return T})),n.d(t,"Foto",(function(){return j})),n.d(t,"Datetime",(function(){return A})),n.d(t,"Datahora",(function(){return P})),n.d(t,"Header",(function(){return N})),n.d(t,"Chapeu",(function(){return R})),n.d(t,"Metadata",(function(){return k})),n.d(t,"Metadados",(function(){return L})),n.d(t,"Section",(function(){return D})),n.d(t,"Secao",(function(){return M})),n.d(t,"Summary",(function(){return H})),n.d(t,"Sumario",(function(){return V})),n.d(t,"Title",(function(){return F})),n.d(t,"Titulo",(function(){return U})),n.d(t,"Video",(function(){return G})),n.d(t,"PlayIcon",(function(){return B})),n.d(t,"IconePlay",(function(){return z}))
const x=e=>{let{showThumbs:t=!1,showDate:n=!0,items:r}=e
const i={}
return n&&(i.dateFactory=e=>{let{age:t}=e
return t?l.Engine.createElement(d.Datetime,{ageInSeconds:t}):null}),I(()=>l.Engine.createElement(v.Relateds,w({showThumbs:t,items:r},i)))},C=x,T=e=>{const{imagesCollection:t,alt:n}=e
return I(h.Cover,{alt:n,images:t})},j=T,A=e=>{let{ageInSeconds:t,time:n}=e
return!t&&n&&(t=n,Object(c.warn)('Use of "time" attribute is deprecated on "toolkit.ui.Datetime". Use "ageInSeconds" instead.')),I(d.Datetime,{ageInSeconds:t})},P=A,N=e=>I(p.Header,{content:{chapeu:{label:e.label}}}),R=N,k=function(){const e=I(g)
if(e){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return s()(n).forEach(t=>e.appendChild(t)),e}},L=k,D=e=>{let{text:t}=e
return I(b.Section,{text:t})},M=D,H=e=>{let{text:t}=e
return I(y.Summary,{text:t})},V=H,F=e=>{let{text:t}=e
return I(E.Title,{text:t})},U=F,G=e=>{const{alt:t,image:n,url:r}=e,i=e.video
return I(_.Video,{title:t,image:n,video:i,url:r})},B=()=>I(O.VideoPlay),z=B},function(e,t,n){"use strict"
n.r(t)
var r=n(91),i=n.n(r),o=n(5),s=n.n(o),a=n(10),c=n.n(a),l=n(20),u=n(23),h=n(92),d=n(54),p=n(15),f=n(75)
let m
const g=m=class extends f.EventEmitter{constructor(e,t){super()
try{const n=new d.Globals.PushStream({host:e,port:80,longPollingInterval:6e4,reconnectOnChannelUnavailableInterval:6e4,modes:"websocket|eventsource|stream|longpolling"})
n.onmessage=e=>{let{method:t,resourceId:n,resource:r}=e
this.trigger(t,{resourceId:n,resource:r})},n.removeAllChannels(),n.addChannel(t),n.connect(),this.pushStream=n}catch(n){Object(l.error)(n)}}}
var v=n(56),b=n(60),y=n(93)
function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let _
n.d(t,"$PushStream",(function(){return w}))
const O={}
class w{static getInstance(){return _||(_=new w(O)),_}constructor(e){this.buffer=[],this.initPushStreamClient=()=>{const e=new g(v.Settings.get("PUSHSTREAM_HOST"),"p.bastian-posts-"+u.Configs.get("feedId"))
e.on("create",e=>{if(e){const{resourceId:t,resource:n}=e
n.key=n.id||t,n.arrived=Object(y.now)(),n.source=w.staticName,p.PostIndex.has(n)||(p.PostIndex.register(n),this.buffer.push(n),this.counterListener&&this.counterListener.next(this.buffer.length))}}),e.on("error",()=>{Object(l.error)("Couldn't connect Bastian on PushStream channel")}),e.on("disconnect",()=>{Object(l.warn)("Disconnected from the PushStream channel")})},e!==O&&Object(l.warn)("Class $Posts is a singleton and shouldn't be called directly."),this.stream=c.a.create({start:e=>{this.listener=e},stop:()=>{this.listener=null}}),this.counterStream=c.a.create({start:e=>{this.counterListener=e},stop:()=>{this.counterListener=null}})
const t=h.DEVICES[v.Settings.get("DEVICE_GROUP","desktop")]
v.Settings.has("PUSHSTREAM_HOST")&&t<=h.DEVICES.smart&&i()(async()=>{const e=()=>s()(d.Globals.PushStream)
await Object(b.availabilityOf)("PushStream client",e,"20s"),e()&&this.initPushStreamClient()},1e4)}request(){const e=this.buffer
if(this.listener&&e.length>0){const t=this.listener,n=Object(y.now)()
e.map(e=>e.arrived?E({},e,{age:parseInt((n-e.arrived)/1e3)}):e),t.next(e.splice(0,e.length)),this.counterListener&&this.counterListener.next(0)}}}w.staticName="$PushStream"},function(e,t,n){"use strict"
n.r(t)
var r=n(87)
const i=86400,o=[[60,"Agora",1],[90,"Há 1 minuto",1],[3600,"minutos",60],[5400,"Há 1 hora",1],[i,"horas",3600],[129600,"Ontem",1],[7*i,"dias",i],[907200,"Há 1 semana",1],[2628e3,"semanas",604800],[3942e3,"Há 1 mês",1],[31536e3,"meses",2628e3],[47304e3,"Há 1 ano",1],[Number.POSITIVE_INFINITY,"anos",31536e3]]
function s(e){if(!e.publication&&!e.ageInSeconds)return null
if(e.isRecommended)return null
return r.Engine.createElement("span",{className:"feed-post-datetime"},(()=>{if(e.publication){const t={hour:"numeric",minute:"numeric"}
return new Date(e.publication).toLocaleDateString("pt-BR",t)}return function(e){if(void 0===e)return""
for(const[t,n,r]of o)if(e<t)return 1===r?n:"Há "+Math.round(e/r)+" "+n
return""}(e.ageInSeconds)})())}n.d(t,"Datetime",(function(){return s}))},function(e,t,n){"use strict"
n.r(t)
var r=n(55),i=n(184)
const o={CONNECTION:{RTT:201,TYPES:["slow-2g","2g","3g"]},HARDWARE:{MEMORY:2}}
let s,a,c
a=()=>Boolean(globalThis.navigator)&&Boolean(globalThis.navigator.connection),c=()=>Boolean(globalThis.navigator)&&Boolean(globalThis.navigator.deviceMemory),s=()=>{const e=globalThis.navigator
if(!a()||!c())return!1
const{connection:t,deviceMemory:n}=e,r=t.rtt<o.CONNECTION.RTT&&!t.saveData&&!o.CONNECTION.TYPES.includes(t.effectiveType),i=n>o.HARDWARE.MEMORY
return r&&i},n.d(t,"hasVideoPreviewSupport",(function(){return l}))
const l=function(e){return void 0===e&&(e=!1),(e||s())&&(Object(i.hasIntersectionObserverSupport)()||!r.At.smallScreen)}},function(e,t,n){"use strict"
n.r(t)
var r,i,o,s=n(88),a=[],c=s.options.__r,l=s.options.diffed,u=s.options.__c,h=s.options.unmount
function d(e){s.options.__h&&s.options.__h(i)
var t=i.__H||(i.__H={__:[],__h:[]})
return e>=t.__.length&&t.__.push({}),t.__[e]}function p(e,t){var n=d(r++)
return v(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function f(){a.some((function(e){if(e.__P)try{e.__H.__h.forEach(m),e.__H.__h.forEach(g),e.__H.__h=[]}catch(t){return s.options.__e(t,e.__v),!0}})),a=[]}function m(e){e.t&&e.t()}function g(e){var t=e.__()
"function"==typeof t&&(e.t=t)}function v(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}s.options.__r=function(e){c&&c(e),r=0,(i=e.__c).__H&&(i.__H.__h.forEach(m),i.__H.__h.forEach(g),i.__H.__h=[])},s.options.diffed=function(e){l&&l(e)
var t=e.__c
if(t){var n=t.__H
n&&n.__h.length&&(1!==a.push(t)&&o===s.options.requestAnimationFrame||((o=s.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100)
"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(f))}},s.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(m),e.__h=e.__h.filter((function(e){return!e.__||g(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],s.options.__e(n,e.__v)}})),u&&u(e,t)},s.options.unmount=function(e){h&&h(e)
var t=e.__c
if(t){var n=t.__H
if(n)try{n.__.forEach((function(e){return e.t&&e.t()}))}catch(e){s.options.__e(e,t.__v)}}}
var b=n(87)
n.d(t,"LabelEvent",(function(){return y}))
const y=e=>{let t
const n=function(e){return p((function(){return{current:e}}),[])}(null)
return function(e,t){var n=d(r++)
v(n.__H,t)&&(n.__=e,n.__H=t,i.__H.__h.push(n))}(()=>{n&&n.current&&n.current.addEventListener(e.type,t=>{t.label=e.label})},[]),t=b.Engine.cloneElement(e.children,{ref:n})}},function(e,t,n){"use strict"
n.r(t)
var r=n(126),i=n.n(r),o=n(87),s=n(164),a=n.n(s)
n.d(t,"Highlight",(function(){return c}))
class c extends o.Engine.Component{render(){let e
const{content:t,headline:n}=this.props,r=i()("highlight-bastian-feed",{headline:n}),s=t.half
t.time>0&&"Pós Jogo"!==s&&(e=t.time+"’ -"+s),"1º tempo"!==s&&"2º tempo"!==s&&(e=s)
const c=a()(t.text,85,"...",!0),l=n?o.Engine.createElement("p",null,o.Engine.createElement("strong",null,t.title)):o.Engine.createElement("span",{className:"title"},t.title)
return o.Engine.createElement("div",{className:r},o.Engine.createElement("div",{className:"time"},e),o.Engine.createElement("div",{className:"text"},l,c))}}},function(e,t,n){"use strict"
n.r(t)
var r=n(5),i=n.n(r),o=n(69),s=n(76),a=n(221),c=n(217),l=n(132),u=n(182),h=n(87),d=n(72),p=n(219),f=n(90),m=n(144),g=n(142),v=n(100),b=n(147),y=n(25),E=n(57),_=n(59),O=n(101),w=n(70),S=n(112),I=n(55),x=n(20)
class C extends h.Engine.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return Object(x.error)("ErrorBoundary:",e),{hasError:!0}}getSSRElement(){let e,t
try{e=Object(S.default)(this.props.children),t="_evt"}catch(n){e=this.getFallbackElement(),t="bstn-error-boundary",Object(x.error)("ErrorBoundary:",n)}return h.Engine.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:e}})}getFallbackElement(){let e=this.props.fallback
return e=I.At.server?Object(S.default)(e):h.Engine.createElement("div",{className:"bstn-error-boundary"},e)}render(){if(this.state.hasError)return this.getFallbackElement()
let e
return I.At.client?e=this.props.children:I.At.server&&(e=this.getSSRElement()),e}}var T=n(213)
n(187)
function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let A
n.d(t,"ItemC",(function(){return P})),n.d(t,"Item",(function(){return N}))
class P extends g.SeenTimeTelemetry{constructor(e){super(e),this.reportPostView=()=>{this.reportSeenTime(()=>this.reportToHorizon(s.PostView))},this.getExtCompPostContent=()=>{const{props:e}=this
return j({},Object(y.get)(e,"data.content"),{experiment:Object(y.get)(e,"data._experiment_properties")})},this.onView=()=>{if(!this.viewed){this.viewed=!0
const e=this._refs.child
e&&e.onView&&e.onView(),e&&!e.onView&&Object(u.onPostView)(this.getExtCompPostContent())}},this.onClick=e=>{const t=this._refs.child
e.label&&t&&t.onClick&&t.onClick(),t&&!t.onClick&&Object(u.onPostClick)(this.getExtCompPostContent()),this.reportPostClick(e)},this.reportPostClick=e=>{if((e.label||e.target.classList.contains("bstn-trk-click"))&&this.reportToHorizon(s.PostClick),e.label){const t=Object(b.cloneJSON)(this.state.data)
Object(O.set)(t,"bstn$source","feed"),Object(w.triggerDomEvent)(o.ITEM_CLICK,document,e=>{e.data=t}),this.reportEvent(e),this.reportToRealtime()}},this.state={data:Object(T.assignFactory)(e.data)},this.sharedItemData={},this.viewed=!1}getChildContext(){return{item:this,sharedItemData:this.sharedItemData}}render(){const e=this.state.data.klass||(()=>null),t=String(this.state.data.type||e.name||e.displayName||"unamed").toLowerCase()
return this.state.data.source!==a.$PushStream.staticName&&this.context.itemIndex&&this.context.itemIndex.register(this),h.Engine.createElement(C,null,h.Engine.createElement(l.ElementViewTrigger,{on:"middle",redirectToChildTriggerIfExists:!0},h.Engine.createElement("div",{ref:Object(v.as)(this,"item"),className:"bastian-feed-item","data-type":t,"data-index":this.props.index},h.Engine.createElement(e,j({ref:Object(v.as)(this,"child")},this.state.data)))))}componentWillMount(){this.sharedItemData.reporter=new f.ItemReporter({telemetry:this,data:this.state.data,itemReference:this,positionIndex:this.context.itemIndex,areaId:this.context.areaId})}componentDidMount(){this._refs.node=this._refs.item,this.cdmSeenTimeTelemetry(),this.lastReportedSeenTime=this.telemetry.seenTime,d.Horizon.on("collect-metrics",this.reportPostView),this._refs.item.addEventListener("click",this.onClick),T.emitter.on(T.NEW_POST_TYPE+this.props.data.type,()=>{this.setState({data:Object(T.assignFactory)(this.props.data)})})}componentWillUnmount(){this.cwuSeenTimeTelemetry(),d.Horizon.off("collect-metrics",this.reportPostView),this._refs.item&&this._refs.item.removeEventListener("click",this.onClick)}reportToHorizon(e){this.sharedItemData.reporter&&d.Horizon.report(e,new m.ReporterCascadeAggregator(this.sharedItemData.reporter,this.context.sharedFeedData.reporter))}reportEvent(e){const t=this._refs.child||{},n=this.context.itemIndex.getPosition(this)
if(e.label){const r={origin:Object(y.get)(this.props,"data.type")||"post basico",action:e.action||"clique",label:e.label,hasVideo:Object(E.has)(t,"_refs.video"),hasPhoto:Object(E.has)(t,"_refs.photo"),hasSummary:i()(t.hasSummary)&&t.hasSummary(),position:"posicao "+String(n).padStart(4,"0")}
Object(p.default)(r,["GA","CommonEvents"],{generateLabel:!0})}else this.state.data.klass===c.default?Object(p.default)({origin:"publicidade"},["GA","CommonEvents"]):"card"===this.state.data.type&&Object(p.default)({origin:"card"},["GA","CommonEvents"])}reportToRealtime(){const e=this.state.data
let t='tipo desconhecido "'+Object(y.get)(e,"key")+'"'
const n=Object(y.get)(e,"content.url")
if(n)t=n
else{const n=Object(y.get)(e,"content.video.id")
n&&(t="video "+n)}Object(_.reportToRealtime)({feed:"feed","right-column":"coluna da direita"}[this.context.areaId],t)}}const N=A=P}]).default
