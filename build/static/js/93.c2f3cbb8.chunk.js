/*! For license information please see 93.c2f3cbb8.chunk.js.LICENSE.txt */
(this.webpackJsonplandrick=this.webpackJsonplandrick||[]).push([[93],{222:function(e,t,a){"use strict";var n=a(1),r=a(6),o=a(0),l=a.n(o),c=a(12),s=a.n(c),i=a(39),d=a.n(i),m=a(40),u={className:s.a.string,cssModule:s.a.object,size:s.a.string,bordered:s.a.bool,borderless:s.a.bool,striped:s.a.bool,dark:s.a.bool,hover:s.a.bool,responsive:s.a.oneOfType([s.a.bool,s.a.string]),tag:m.tagPropType,responsiveTag:m.tagPropType,innerRef:s.a.oneOfType([s.a.func,s.a.string,s.a.object])},f=function(e){var t=e.className,a=e.cssModule,o=e.size,c=e.bordered,s=e.borderless,i=e.striped,u=e.dark,f=e.hover,p=e.responsive,b=e.tag,E=e.responsiveTag,v=e.innerRef,g=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(m.mapToCssModules)(d()(t,"table",!!o&&"table-"+o,!!c&&"table-bordered",!!s&&"table-borderless",!!i&&"table-striped",!!u&&"table-dark",!!f&&"table-hover"),a),h=l.a.createElement(b,Object(n.a)({},g,{ref:v,className:y}));if(p){var N=Object(m.mapToCssModules)(!0===p?"table-responsive":"table-responsive-"+p,a);return l.a.createElement(E,{className:N},h)}return h};f.propTypes=u,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f},39:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},40:function(e,t,a){"use strict";a.r(t),a.d(t,"getScrollbarWidth",(function(){return l})),a.d(t,"setScrollbarWidth",(function(){return c})),a.d(t,"isBodyOverflowing",(function(){return s})),a.d(t,"getOriginalBodyPadding",(function(){return i})),a.d(t,"conditionallyUpdateScrollbar",(function(){return d})),a.d(t,"setGlobalCssModule",(function(){return m})),a.d(t,"mapToCssModules",(function(){return u})),a.d(t,"omit",(function(){return f})),a.d(t,"pick",(function(){return p})),a.d(t,"warnOnce",(function(){return E})),a.d(t,"deprecated",(function(){return v})),a.d(t,"DOMElement",(function(){return y})),a.d(t,"targetPropType",(function(){return h})),a.d(t,"tagPropType",(function(){return N})),a.d(t,"TransitionTimeouts",(function(){return w})),a.d(t,"TransitionPropTypeKeys",(function(){return x})),a.d(t,"TransitionStatuses",(function(){return O})),a.d(t,"keyCodes",(function(){return T})),a.d(t,"PopperPlacements",(function(){return j})),a.d(t,"canUseDOM",(function(){return k})),a.d(t,"isReactRefObj",(function(){return M})),a.d(t,"toNumber",(function(){return A})),a.d(t,"isObject",(function(){return P})),a.d(t,"isFunction",(function(){return I})),a.d(t,"findDOMElements",(function(){return D})),a.d(t,"isArrayOrNodeList",(function(){return S})),a.d(t,"getTarget",(function(){return R})),a.d(t,"defaultToggleEvents",(function(){return $})),a.d(t,"addMultipleEventListeners",(function(){return L})),a.d(t,"focusableElements",(function(){return z}));var n,r=a(12),o=a.n(r);function l(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){return document.body.clientWidth<window.innerWidth}function i(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function d(){var e=l(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],a=t?parseInt(t.style.paddingRight||0,10):0;s()&&c(a+e)}function m(e){n=e}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function f(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}function p(e,t){for(var a,n=Array.isArray(t)?t:[t],r=n.length,o={};r>0;)o[a=n[r-=1]]=e[a];return o}var b={};function E(e){b[e]||("undefined"!==typeof console&&console.error(e),b[e]=!0)}function v(e,t){return function(a,n,r){null!==a[n]&&"undefined"!==typeof a[n]&&E('"'+n+'" property of "'+r+'" has been deprecated.\n'+t);for(var o=arguments.length,l=new Array(o>3?o-3:0),c=3;c<o;c++)l[c-3]=arguments[c];return e.apply(void 0,[a,n,r].concat(l))}}var g="object"===typeof window&&window.Element||function(){};function y(e,t,a){if(!(e[t]instanceof g))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")}var h=o.a.oneOfType([o.a.string,o.a.func,y,o.a.shape({current:o.a.any})]),N=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),w={Fade:150,Collapse:350,Modal:300,Carousel:600},x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},T={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],k=!("undefined"===typeof window||!window.document||!window.document.createElement);function M(e){return!(!e||"object"!==typeof e)&&"current"in e}function C(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function A(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===C(e))return NaN;if(P(e)){var a="function"===typeof e.valueOf?e.valueOf():e;e=P(a)?""+a:a}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var n=/^0b[01]+$/i.test(e);return n||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),n?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e}function P(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function I(e){if(!P(e))return!1;var t=C(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function D(e){if(M(e))return e.current;if(I(e))return e();if("string"===typeof e&&k){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function S(e){return null!==e&&(Array.isArray(e)||k&&"number"===typeof e.length)}function R(e,t){var a=D(e);return t?S(a)?a:null===a?[]:[a]:S(a)?a[0]:a}var $=["touchstart","click"];function L(e,t,a,n){var r=e;S(r)||(r=[r]);var o=a;if("string"===typeof o&&(o=o.split(/\s+/)),!S(r)||"function"!==typeof t||!Array.isArray(o))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(a){a.addEventListener(e,t,n)}))})),function(){Array.prototype.forEach.call(o,(function(e){Array.prototype.forEach.call(r,(function(a){a.removeEventListener(e,t,n)}))}))}}var z=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},64:function(e,t,a){"use strict";var n=a(1),r=a(6),o=a(0),l=a.n(o),c=a(12),s=a.n(c),i=a(39),d=a.n(i),m=a(40),u={tag:m.tagPropType,fluid:s.a.oneOfType([s.a.bool,s.a.string]),className:s.a.string,cssModule:s.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.fluid,c=e.tag,s=Object(r.a)(e,["className","cssModule","fluid","tag"]),i="container";!0===o?i="container-fluid":o&&(i="container-"+o);var u=Object(m.mapToCssModules)(d()(t,i),a);return l.a.createElement(c,Object(n.a)({},s,{className:u}))};f.propTypes=u,f.defaultProps={tag:"div"},t.a=f},68:function(e,t,a){"use strict";var n=a(1),r=a(6),o=a(0),l=a.n(o),c=a(12),s=a.n(c),i=a(39),d=a.n(i),m=a(40),u=s.a.oneOfType([s.a.number,s.a.string]),f={tag:m.tagPropType,noGutters:s.a.bool,className:s.a.string,cssModule:s.a.object,form:s.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},p={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,c=e.tag,s=e.form,i=e.widths,u=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];i.forEach((function(t,a){var n=e[t];if(delete u[t],n){var r=!a;f.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}}));var p=Object(m.mapToCssModules)(d()(t,o?"no-gutters":null,s?"form-row":"row",f),a);return l.a.createElement(c,Object(n.a)({},u,{className:p}))};b.propTypes=f,b.defaultProps=p,t.a=b},69:function(e,t,a){"use strict";var n=a(1),r=a(6),o=a(0),l=a.n(o),c=a(12),s=a.n(c),i=a(39),d=a.n(i),m=a(40),u=s.a.oneOfType([s.a.number,s.a.string]),f=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:u,offset:u})]),p={tag:m.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,s=Object(r.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(t,n){var r=e[t];if(delete s[t],r||""===r){var o=!n;if(Object(m.isObject)(r)){var l,c=o?"-":"-"+t+"-",u=E(o,t,r.size);i.push(Object(m.mapToCssModules)(d()(((l={})[u]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l)),a))}else{var f=E(o,t,r);i.push(f)}}})),i.length||i.push("col");var u=Object(m.mapToCssModules)(d()(t,i),a);return l.a.createElement(c,Object(n.a)({},s,{className:u}))};v.propTypes=p,v.defaultProps=b,t.a=v},946:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(8),o=a(13),l=a(10),c=a(9),s=a(0),i=a.n(s),d=a(11),m=a(64),u=a(68),f=a(69),p=a(222),b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).scrollNavigation=function(){var e=document.documentElement;(window.pageYOffset||e.scrollTop)-(e.clientTop||0)>80?document.getElementById("topnav").classList.add("nav-sticky"):document.getElementById("topnav").classList.remove("nav-sticky")},r.state={items:[{id:1,name:"Inclusive Insights",qty:2,rate:2600},{id:2,name:"Handy Guide",qty:2,rate:2600},{id:3,name:"Premiere Product",qty:2,rate:2600}]},r.sendMail.bind(Object(o.a)(r)),r.callNumber.bind(Object(o.a)(r)),r}return Object(r.a)(a,[{key:"sendMail",value:function(){window.location.href="mailto:contact@example.com"}},{key:"callNumber",value:function(){window.location.href="tel:+152534-468-854"}},{key:"componentDidMount",value:function(){document.body.classList="",window.addEventListener("scroll",this.scrollNavigation,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollNavigation,!0)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"bg-invoice bg-light"},i.a.createElement(m.a,null,i.a.createElement(u.a,{className:"mt-5 pt-4 pt-sm-0 justify-content-center"},i.a.createElement(f.a,{lg:"10"},i.a.createElement("div",{className:"p-4 shadow rounded bg-white"},i.a.createElement("div",{className:"invoice-top pb-4 border-bottom"},i.a.createElement(u.a,null,i.a.createElement(f.a,{md:"8"},i.a.createElement("div",{className:"logo-invoice mb-2"},"Landrick",i.a.createElement("span",{className:"text-primary"},".")),i.a.createElement(d.b,{to:"#",className:"text-primary h6"},i.a.createElement("i",{className:"mdi mdi-link-variant text-muted mr-2"}),"www.landrick.corp")),i.a.createElement(f.a,{md:"4",className:"mt-4 mt-sm-0"},i.a.createElement("h5",null,"Address :"),i.a.createElement("dl",{className:"row mb-0"},i.a.createElement("dt",{className:"col-2 text-muted"},i.a.createElement("i",{className:"mdi mdi-map-marker"})),i.a.createElement("dd",{className:"col-10 text-muted"},i.a.createElement(d.b,{to:"#",className:"video-play-icon text-muted"},i.a.createElement("p",{className:"mb-0"},"1419 Riverwood Drive,"),i.a.createElement("p",{className:"mb-0"},"Redding, CA 96001"))),i.a.createElement("dt",{className:"col-2 text-muted"},i.a.createElement("i",{className:"mdi mdi-email"})),i.a.createElement("dd",{className:"col-10 text-muted"},i.a.createElement(d.b,{to:"#",id:"mail",onClick:this.sendMail,className:"text-muted"},"info@landrick.com")),i.a.createElement("dt",{className:"col-2 text-muted"},i.a.createElement("i",{className:"mdi mdi-phone"})),i.a.createElement("dd",{className:"col-10 text-muted"},i.a.createElement(d.b,{to:"#",id:"call",onClick:this.callNumber,className:"text-muted"},"(+12) 1546-456-856")))))),i.a.createElement("div",{className:"invoice-middle py-4"},i.a.createElement("h5",null,"Invoice Details :"),i.a.createElement(u.a,{className:"mb-0"},i.a.createElement(f.a,{md:{size:8,order:1},xs:{order:2}},i.a.createElement("dl",{className:"row"},i.a.createElement("dt",{className:"col-md-3 col-5 font-weight-normal"},"Invoice No. :"),i.a.createElement("dd",{className:"col-md-9 col-7 text-muted"},"land45845621"),i.a.createElement("dt",{className:"col-md-3 col-5 font-weight-normal"},"Name :"),i.a.createElement("dd",{className:"col-md-9 col-7 text-muted"},"Calvin Carlo"),i.a.createElement("dt",{className:"col-md-3 col-5 font-weight-normal"},"Address :"),i.a.createElement("dd",{className:"col-md-9 col-7 text-muted"},i.a.createElement("p",{className:"mb-0"},"1962 Pike Street,"),i.a.createElement("p",null,"Diego, CA 92123")),i.a.createElement("dt",{className:"col-md-3 col-5 font-weight-normal"},"Phone :"),i.a.createElement("dd",{className:"col-md-9 col-7 text-muted"},"(+45) 4584-458-695"))),i.a.createElement(f.a,{md:{size:4,order:2},xs:{order:1},className:"mt-2 mt-sm-0"},i.a.createElement("dl",{className:"row mb-0"},i.a.createElement("dt",{className:"col-md-4 col-5 font-weight-normal"},"Date :"),i.a.createElement("dd",{className:"col-md-8 col-7 text-muted"},"15th Oct, 2019"))))),i.a.createElement("div",{className:"invoice-table pb-4"},i.a.createElement("div",{className:"table-responsive bg-white shadow rounded"},i.a.createElement(p.a,{className:"mb-0 table-center invoice-tb"},i.a.createElement("thead",{className:"bg-light"},i.a.createElement("tr",null,i.a.createElement("th",{scope:"col",className:"text-left"},"No."),i.a.createElement("th",{scope:"col",className:"text-left"},"Item"),i.a.createElement("th",{scope:"col"},"Qty"),i.a.createElement("th",{scope:"col"},"Rate"),i.a.createElement("th",{scope:"col"},"Total"))),i.a.createElement("tbody",null,this.state.items.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("th",{scope:"row",className:"text-left"},t),i.a.createElement("td",{className:"text-left"},e.name),i.a.createElement("td",null,e.qty),i.a.createElement("td",null,"$ ",e.rate),i.a.createElement("td",null,"$ ",e.qty*e.rate))}))))),i.a.createElement(u.a,null,i.a.createElement(f.a,{lg:"4",md:"5",className:"ml-auto"},i.a.createElement("ul",{className:"list-unstyled h5 font-weight-normal mt-4 mb-0"},i.a.createElement("li",{className:"text-muted"},"Subtotal :",i.a.createElement("span",{className:"float-right"},"$ 22600")),i.a.createElement("li",{className:"text-muted"},"Taxes :",i.a.createElement("span",{className:"float-right"}," 0")),i.a.createElement("li",null,"Total :",i.a.createElement("span",{className:"float-right"},"$ 22600")))))),i.a.createElement("div",{className:"invoice-footer border-top pt-4"},i.a.createElement(u.a,null,i.a.createElement(f.a,{sm:"6"},i.a.createElement("div",{className:"text-sm-left text-muted text-center"},i.a.createElement("h6",{className:"mb-0"},"Customer Services : ",i.a.createElement(d.b,{to:"#",onClick:this.callNumber,className:"text-warning"},"(+12) 1546-456-856")))),i.a.createElement(f.a,{sm:"6"},i.a.createElement("div",{className:"text-sm-right text-muted text-center"},i.a.createElement("h6",{className:"mb-0"},i.a.createElement(d.b,{to:"/page-terms",target:"_blank",className:"text-primary"},"Terms & Conditions"))))))))))))}}]),a}(s.Component);t.default=b}}]);
//# sourceMappingURL=93.c2f3cbb8.chunk.js.map