import{a as kt}from"./chunk-673NRRDZ.js";import{B as S,D as W,F as bt,M as P,N as vt,Oa as D,P as j,Q as It,T as l,U as g,W as b,Xa as G,Y as a,Z as T,a as d,ca as v,da as B,e as ht,ec as Dt,fb as Tt,g as ut,j as _,jc as y,k as mt,n as pt,pa as U,qa as I,r as F,s as ft,sa as x,ta as $,v as _t,wc as wt,xa as yt,y as gt,ya as Et,za as At}from"./chunk-M3W44KFD.js";var Mt=class s{apiUrl="http://localhost:3000/";http=T(kt);getApiUrl(i){return this.http.get(`${this.apiUrl}${i}`)}postApiUrl(i,t){return this.http.post(`${this.apiUrl}${i}`,JSON.stringify(t))}static \u0275fac=function(t){return new(t||s)};static \u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})};function Y(s){return Array.isArray(s)?s:[s]}function w(s){return s instanceof x?s.nativeElement:s}var Q;try{Q=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Q=!1}var f=(()=>{class s{constructor(t){this._platformId=t,this.isBrowser=this._platformId?wt(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Q)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(e){return new(e||s)(a(yt))}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var R;function Gt(){if(R==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>R=!0}))}finally{R=R||!1}return R}function C(s){return Gt()?s:!!s.capture}var Z;function Yt(){if(Z==null){let s=typeof document<"u"?document.head:null;Z=!!(s&&(s.createShadowRoot||s.attachShadow))}return Z}function xt(s){if(Yt()){let i=s.getRootNode?s.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Zt(){let s=typeof document<"u"&&document?document.activeElement:null;for(;s&&s.shadowRoot;){let i=s.shadowRoot.activeElement;if(i===s)break;s=i}return s}function E(s){return s.composedPath?s.composedPath()[0]:s.target}function Ct(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Ot(s,...i){return i.length?i.some(t=>s[t]):s.altKey||s.shiftKey||s.ctrlKey||s.metaKey}var Ft=new Set,k,Qt=(()=>{class s{constructor(t,e){this._platform=t,this._nonce=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Xt(t,this._nonce),this._matchMedia(t)}static{this.\u0275fac=function(e){return new(e||s)(a(f),a(At,8))}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function Xt(s,i){if(!Ft.has(s))try{k||(k=document.createElement("style"),i&&k.setAttribute("nonce",i),k.setAttribute("type","text/css"),document.head.appendChild(k)),k.sheet&&(k.sheet.insertRule(`@media ${s} {body{ }}`,0),Ft.add(s))}catch(t){console.error(t)}}function qt(s){return{matches:s==="all"||s==="",media:s,addListener:()=>{},removeListener:()=>{}}}var Rt=(()=>{class s{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new _}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Nt(Y(t)).some(n=>this._registerQuery(n).mql.matches)}observe(t){let n=Nt(Y(t)).map(r=>this._registerQuery(r).observable),o=ft(n);return o=_t(o.pipe(W(1)),o.pipe(P(1),S(0))),o.pipe(F(r=>{let c={matches:!1,breakpoints:{}};return r.forEach(({matches:p,query:u})=>{c.matches=c.matches||p,c.breakpoints[u]=p}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),o={observable:new ut(r=>{let c=p=>this._zone.run(()=>r.next(p));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(vt(e),F(({matches:r})=>({query:t,matches:r})),j(this._destroySubject)),mql:e};return this._queries.set(t,o),o}static{this.\u0275fac=function(e){return new(e||s)(a(Qt),a(I))}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function Nt(s){return s.map(i=>i.split(",")).reduce((i,t)=>i.concat(t)).map(i=>i.trim())}var ve=200,J=class{constructor(i,t){this._letterKeyStream=new _,this._items=[],this._selectedItemIndex=-1,this._pressedLetters=[],this._selectedItem=new _,this.selectedItem=this._selectedItem;let e=typeof t?.debounceInterval=="number"?t.debounceInterval:ve;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(i),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let t=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(It(t=>this._pressedLetters.push(t)),S(i),gt(()=>this._pressedLetters.length>0),F(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let n=(this._selectedItemIndex+e)%this._items.length,o=this._items[n];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}},tt=class{constructor(i,t){this._items=i,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._typeaheadSubscription=ht.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=e=>e.disabled,this.tabOut=new _,this.change=new _,i instanceof $?this._itemChangesSubscription=i.changes.subscribe(e=>this._itemsChanged(e.toArray())):G(i)&&(this._effectRef=Dt(()=>this._itemsChanged(i()),{injector:t}))}skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new J(t,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,t=10){return this._pageUpAndDown={enabled:i,delta:t},this}setActiveItem(i){let t=this._activeItem;this.updateActiveItem(i),this._activeItem!==t&&this.change.next(this._activeItemIndex)}onKeydown(i){let t=i.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}else return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&n){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&n){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&n){let o=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&n){let o=this._activeItemIndex+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(o<r?o:r-1,-1);break}else return;default:(n||Ot(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let t=this._getItemsArray(),e=typeof i=="number"?i:t.indexOf(i),n=t[e];this._activeItem=n??null,this._activeItemIndex=e,this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let n=(this._activeItemIndex+i*e+t.length)%t.length,o=t[n];if(!this._skipPredicateFn(o)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex+i,i)}_setActiveItemByIndex(i,t){let e=this._getItemsArray();if(e[i]){for(;this._skipPredicateFn(e[i]);)if(i+=t,!e[i])return;this.setActiveItem(i)}}_getItemsArray(){return G(this._items)?this._items():this._items instanceof $?this._items.toArray():this._items}_itemsChanged(i){if(this._typeahead?.setItems(i),this._activeItem){let t=i.indexOf(this._activeItem);t>-1&&t!==this._activeItemIndex&&(this._activeItemIndex=t,this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Lt=class extends tt{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};function et(s){return s.buttons===0||s.detail===0}function it(s){let i=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Ie=new b("cdk-input-modality-detector-options"),ye={ignoreKeys:[18,17,224,91,16]},jt=650,O=C({passive:!0,capture:!0}),Ee=(()=>{class s{get mostRecentModality(){return this._modality.value}constructor(t,e,n,o){this._platform=t,this._mostRecentTarget=null,this._modality=new mt(null),this._lastTouchMs=0,this._onKeydown=r=>{this._options?.ignoreKeys?.some(c=>c===r.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=E(r))},this._onMousedown=r=>{Date.now()-this._lastTouchMs<jt||(this._modality.next(et(r)?"keyboard":"mouse"),this._mostRecentTarget=E(r))},this._onTouchstart=r=>{if(it(r)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=E(r)},this._options=d(d({},ye),o),this.modalityDetected=this._modality.pipe(P(1)),this.modalityChanged=this.modalityDetected.pipe(bt()),t.isBrowser&&e.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,O),n.addEventListener("mousedown",this._onMousedown,O),n.addEventListener("touchstart",this._onTouchstart,O)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,O),document.removeEventListener("mousedown",this._onMousedown,O),document.removeEventListener("touchstart",this._onTouchstart,O))}static{this.\u0275fac=function(e){return new(e||s)(a(f),a(I),a(y),a(Ie,8))}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var H=function(s){return s[s.IMMEDIATE=0]="IMMEDIATE",s[s.EVENTUAL=1]="EVENTUAL",s}(H||{}),Ae=new b("cdk-focus-monitor-default-options"),V=C({passive:!0,capture:!0}),Ai=(()=>{class s{constructor(t,e,n,o,r){this._ngZone=t,this._platform=e,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new _,this._rootNodeFocusAndBlurListener=c=>{let p=E(c);for(let u=p;u;u=u.parentElement)c.type==="focus"?this._onFocus(c,u):this._onBlur(c,u)},this._document=o,this._detectionMode=r?.detectionMode||H.IMMEDIATE}monitor(t,e=!1){let n=w(t);if(!this._platform.isBrowser||n.nodeType!==1)return pt();let o=xt(n)||this._getDocument(),r=this._elementInfo.get(n);if(r)return e&&(r.checkChildren=!0),r.subject;let c={checkChildren:e,subject:new _,rootNode:o};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=w(t),n=this._elementInfo.get(e);n&&(n.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(n))}focusVia(t,e,n){let o=w(t),r=this._getDocument().activeElement;o===r?this._getClosestElementsInfo(o).forEach(([c,p])=>this._originChanged(c,e,p)):(this._setOrigin(e),typeof o.focus=="function"&&o.focus(n))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===H.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===H.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?jt:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(t,e){let n=this._elementInfo.get(e),o=E(t);!n||!n.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),n)}_onBlur(t,e){let n=this._elementInfo.get(e);!n||n.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(n,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,n=this._rootNodeFocusListenerCount.get(e)||0;n||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,V),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,V)}),this._rootNodeFocusListenerCount.set(e,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(j(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let n=this._rootNodeFocusListenerCount.get(e);n>1?this._rootNodeFocusListenerCount.set(e,n-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,V),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,V),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,n){this._setClasses(t,e),this._emitOrigin(n,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((n,o)=>{(o===t||n.checkChildren&&o.contains(t))&&e.push([o,n])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(e))return!0}return!1}static{this.\u0275fac=function(e){return new(e||s)(a(I),a(f),a(Ee),a(y,8),a(Ae,8))}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var M=function(s){return s[s.NONE=0]="NONE",s[s.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",s[s.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",s}(M||{}),St="cdk-high-contrast-black-on-white",Pt="cdk-high-contrast-white-on-black",q="cdk-high-contrast-active",Bt=(()=>{class s{constructor(t,e){this._platform=t,this._document=e,this._breakpointSubscription=T(Rt).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return M.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,n=e&&e.getComputedStyle?e.getComputedStyle(t):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return M.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return M.BLACK_ON_WHITE}return M.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(q,St,Pt),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===M.BLACK_ON_WHITE?t.add(q,St):e===M.WHITE_ON_BLACK&&t.add(q,Pt)}}static{this.\u0275fac=function(e){return new(e||s)(a(f),a(y))}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var ke=new b("cdk-dir-doc",{providedIn:"root",factory:Me});function Me(){return T(y)}var xe=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ce(s){let i=s?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?xe.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Ri=(()=>{class s{constructor(t){if(this.value="ltr",this.change=new U,t){let e=t.body?t.body.dir:null,n=t.documentElement?t.documentElement.dir:null;this.value=Ce(e||n||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(e){return new(e||s)(a(ke,8))}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var st=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275mod=v({type:s})}static{this.\u0275inj=g({})}}return s})();function Oe(){return!0}var Fe=new b("mat-sanity-checks",{providedIn:"root",factory:Oe}),Ut=(()=>{class s{constructor(t,e,n){this._sanityChecks=e,this._document=n,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return Ct()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}static{this.\u0275fac=function(e){return new(e||s)(a(Bt),a(Fe,8),a(y))}}static{this.\u0275mod=v({type:s})}static{this.\u0275inj=g({imports:[st,st]})}}return s})();var Ts=(()=>{class s{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var m=function(s){return s[s.FADING_IN=0]="FADING_IN",s[s.VISIBLE=1]="VISIBLE",s[s.FADING_OUT=2]="FADING_OUT",s[s.HIDDEN=3]="HIDDEN",s}(m||{}),nt=class{constructor(i,t,e,n=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=n,this.state=m.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Vt=C({passive:!0,capture:!0}),ot=class{constructor(){this._events=new Map,this._delegateEventHandler=i=>{let t=E(i);t&&this._events.get(i.type)?.forEach((e,n)=>{(n===t||n.contains(t))&&e.forEach(o=>o.handleEvent(i))})}}addHandler(i,t,e,n){let o=this._events.get(t);if(o){let r=o.get(e);r?r.add(n):o.set(e,new Set([n]))}else this._events.set(t,new Map([[e,new Set([n])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Vt)})}removeHandler(i,t,e){let n=this._events.get(i);if(!n)return;let o=n.get(t);o&&(o.delete(e),o.size===0&&n.delete(t),n.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,Vt)))}},Ht={enterDuration:225,exitDuration:150},Ne=800,Kt=C({passive:!0,capture:!0}),zt=["mousedown","touchstart"],Wt=["mouseup","mouseleave","touchend","touchcancel"],rt=class s{static{this._eventManager=new ot}constructor(i,t,e,n){this._target=i,this._ngZone=t,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=w(e))}fadeInRipple(i,t,e={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=d(d({},Ht),e.animation);e.centered&&(i=n.left+n.width/2,t=n.top+n.height/2);let r=e.radius||Re(i,t,n),c=i-n.left,p=t-n.top,u=o.enterDuration,h=document.createElement("div");h.classList.add("mat-ripple-element"),h.style.left=`${c-r}px`,h.style.top=`${p-r}px`,h.style.height=`${r*2}px`,h.style.width=`${r*2}px`,e.color!=null&&(h.style.backgroundColor=e.color),h.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(h);let at=window.getComputedStyle(h),$t=at.transitionProperty,ct=at.transitionDuration,K=$t==="none"||ct==="0s"||ct==="0s, 0s"||n.width===0&&n.height===0,A=new nt(this,h,e,K);h.style.transform="scale3d(1, 1, 1)",A.state=m.FADING_IN,e.persistent||(this._mostRecentTransientRipple=A);let L=null;return!K&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let dt=()=>{L&&(L.fallbackTimer=null),clearTimeout(lt),this._finishRippleTransition(A)},z=()=>this._destroyRipple(A),lt=setTimeout(z,u+100);h.addEventListener("transitionend",dt),h.addEventListener("transitioncancel",z),L={onTransitionEnd:dt,onTransitionCancel:z,fallbackTimer:lt}}),this._activeRipples.set(A,L),(K||!u)&&this._finishRippleTransition(A),A}fadeOutRipple(i){if(i.state===m.FADING_OUT||i.state===m.HIDDEN)return;let t=i.element,e=d(d({},Ht),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=m.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=w(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,zt.forEach(e=>{s._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Wt.forEach(t=>{this._triggerElement.addEventListener(t,this,Kt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===m.FADING_IN?this._startFadeOutTransition(i):i.state===m.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=m.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=m.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=et(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Ne;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!it(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===m.VISIBLE||i.config.terminateOnPointerUp&&i.state===m.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(zt.forEach(t=>s._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(Wt.forEach(t=>i.removeEventListener(t,this,Kt)),this._pointerUpEventsRegistered=!1))}};function Re(s,i,t){let e=Math.max(Math.abs(s-t.left),Math.abs(s-t.right)),n=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+n*n)}var Le=new b("mat-ripple-global-options"),Ds=(()=>{class s{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,e,n,o,r){this._elementRef=t,this._animationMode=r,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=o||{},this._rippleRenderer=new rt(this,e,t,n)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:d(d(d({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,n){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,d(d({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,d(d({},this.rippleConfig),t))}static{this.\u0275fac=function(e){return new(e||s)(D(x),D(I),D(f),D(Le,8),D(Et,8))}}static{this.\u0275dir=B({type:s,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,n){e&2&&Tt("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0})}}return s})(),ws=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275mod=v({type:s})}static{this.\u0275inj=g({imports:[Ut,Ut]})}}return s})();export{Mt as a,f as b,Zt as c,Ot as d,Lt as e,Ai as f,Ri as g,st as h,Ut as i,Ts as j,Ds as k,ws as l};
