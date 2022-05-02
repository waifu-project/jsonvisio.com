"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{1639:function(n,e,t){t.d(e,{z:function(){return h}});var r,i=t(5893),o=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=a(["\n  display: block;\n  background: ",";\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function f(){var n=a(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return f=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var s=o.ZP.button.withConfig({componentId:"sc-5c88af8-0"})(l(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)})),d=o.ZP.div.withConfig({componentId:"sc-5c88af8-1"})(f()),h=function(n){var e=n.children,t=n.status,r=u(n,["children","status"]);return(0,i.jsx)(s,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY"},r,{children:(0,i.jsx)(d,{children:e})}))}},253:function(n,e,t){t.r(e),t.d(e,{default:function(){return ze}});var r=t(5893),i=t(7294),o=t(1664),c=t.n(o),u=t(2125),a=t(9583),l=t(5434),f=t(8193),s=t(471),d=t(4931);function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function m(){var n=b(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return m=function(){return n},n}function g(){var n=b(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 25%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  display: ",";\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n"]);return g=function(){return n},n}function v(){var n=b([""]);return v=function(){return n},n}var y=u.ZP.div.withConfig({componentId:"sc-99fd4723-0"})(m()),x=u.ZP.div.withConfig({componentId:"sc-99fd4723-1"})(g(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"initial":"none"})),j=u.ZP.div.withConfig({componentId:"sc-99fd4723-2"})(v()),w=function(n){var e=n.children,t=n.title,o=p(i.useState(!1),2),c=o[0],u=o[1];return(0,r.jsxs)(y,{children:[(0,r.jsx)(x,{visible:c,children:t}),(0,r.jsx)(j,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},O=t(5623),E=t(6827),C=t(1163);function P(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function I(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return P(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return P(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function A(){var n=S(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 42px;\n  background: ",";\n  padding: 8px;\n  border-right: 1px solid ",";\n"]);return A=function(){return n},n}function R(){var n=S(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 700;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n\n  svg {\n    padding: 8px 0;\n    vertical-align: middle;\n  }\n"]);return R=function(){return n},n}function T(){var n=S(["\n  color: ",";\n"]);return T=function(){return n},n}function N(){var n=S(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return N=function(){return n},n}function k(){var n=S(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return k=function(){return n},n}function z(){var n=S(["\n  color: ",";\n"]);return z=function(){return n},n}function Z(){var n=S(['\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return Z=function(){return n},n}var _=u.ZP.div.withConfig({componentId:"sc-e76dc134-0"})(A(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),L=u.ZP.div.withConfig({componentId:"sc-e76dc134-1"})(R(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),G=u.ZP.span.withConfig({componentId:"sc-e76dc134-2"})(T(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_NORMAL:e.ORANGE})),D=u.ZP.nav.withConfig({componentId:"sc-e76dc134-3"})(N(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),M=u.ZP.nav.withConfig({componentId:"sc-e76dc134-4"})(k(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),U=u.ZP.div.withConfig({componentId:"sc-e76dc134-5"})(z(),(function(n){return n.theme.FULL_WHITE})),K=u.ZP.label.withConfig({componentId:"sc-e76dc134-6"})(Z());var B=function(){var n,e=(0,E.ZR)(),t=e.settings,o=e.dispatch,u=(0,C.useRouter)(),h=I(i.useState(null),2),p=h[0],b=h[1];return i.useEffect((function(){if(p){var n=new FileReader;n.readAsText(p,"UTF-8"),n.onload=function(n){var e;o({type:O.n.SET_JSON,payload:null===(e=n.target)||void 0===e?void 0:e.result})}}}),[p,o]),(0,r.jsxs)(_,{children:[(0,r.jsxs)(D,{children:[(0,r.jsx)(c(),{passHref:!0,href:"/",children:(0,r.jsx)(L,{onClick:function(){return u.push("/")},children:(0,r.jsxs)(U,{children:[(0,r.jsx)(G,{children:"J"}),(0,r.jsx)(G,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(w,{title:"Home",children:(0,r.jsx)(L,{onClick:function(){return u.push("/")},children:(0,r.jsx)(f.V9Z,{})})}),(0,r.jsx)(w,{title:"Auto Format",children:(0,r.jsx)(L,{onClick:function(){o({type:O.n.TOGGLE_AUTOFORMAT}),(0,d.ZP)("Auto format has been ".concat(t.autoformat?"disabled.":"enabled."))},children:t.autoformat?(0,r.jsx)(l.kk0,{}):(0,r.jsx)(l.sGS,{})})}),(0,r.jsx)(w,{title:"Change Layout",children:(0,r.jsx)(L,{onClick:function(){return o({type:O.n.TOGGLE_LAYOUT})},children:(n=t.layout,"LEFT"===n?(0,r.jsx)(s.glP,{}):"UP"===n?(0,r.jsx)(s.uFB,{}):"RIGHT"===n?(0,r.jsx)(s.mtx,{}):(0,r.jsx)(s.LkX,{}))})}),(0,r.jsx)(w,{title:"Toggle Compact Nodes",children:(0,r.jsx)(L,{title:"Toggle Expand/Collapse",onClick:function(){o({type:O.n.TOGGLE_EXPAND}),(0,d.ZP)("".concat(t.expand?"Collapsed":"Expanded"," nodes."))},children:t.expand?(0,r.jsx)(l.bPX,{}):(0,r.jsx)(l.SPo,{})})}),(0,r.jsx)(w,{title:"Clear JSON",children:(0,r.jsx)(L,{onClick:function(){o({type:O.n.SET_JSON,payload:"{}"}),localStorage.removeItem("json"),d.ZP.success("Cleared JSON and removed from memory.")},children:(0,r.jsx)(f.YK6,{})})}),(0,r.jsx)(w,{title:"Import File",children:(0,r.jsx)(L,{children:(0,r.jsxs)(K,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&b(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===p||void 0===p?void 0:p.name),(0,r.jsx)(a.Xur,{})]})})})]}),(0,r.jsxs)(M,{children:[(0,r.jsx)(L,{children:(0,r.jsx)(c(),{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,r.jsx)(f.h3E,{})})})}),(0,r.jsx)(L,{children:(0,r.jsx)(c(),{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,r.jsx)(f.RrF,{})})})})]})]})},V=t(6126),Y=t(3854),F=t(155);function J(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function H(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function X(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return J(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return J(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=function(){var n=X(i.useState(0),2),e=n[0],t=n[1],r=X(i.useState({value:"",debounced:""}),2),o=r[0],c=r[1],u=(0,E.ZR)().settings;return i.useEffect((function(){var n=setTimeout((function(){c((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){H(n,e,t[e])}))}return n}({},n,{debounced:o.value})}))}),1500);return function(){return clearTimeout(n)}}),[o.value]),i.useEffect((function(){if(u.zoomPanPinch){var n,r=u.zoomPanPinch.instance.wrapperComponent,i=(n="span[data-key*='".concat(o.debounced,"' i]"),document.querySelectorAll("".concat(n))),c=i[e]||null;if(function(){var n=document.querySelectorAll("foreignObject.searched, .highlight");null===n||void 0===n||n.forEach((function(n){n.classList.remove("highlight"),n.classList.remove("searched")}))}(),r&&c&&c.parentElement){var a,l=Number(c.getAttribute("data-x")),f=Number(c.getAttribute("data-y")),s=1*(r.offsetLeft-l)+r.clientWidth/2-c.getBoundingClientRect().width/2,d=1*(r.offsetLeft-f)+r.clientHeight/2-c.getBoundingClientRect().height/2;!function(n,e){null===n||void 0===n||n.forEach((function(n){var e,t,r;null===(r=null===(e=n.parentElement)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.closest("foreignObject"))||void 0===r||r.classList.add("searched")})),n[e].classList.add("highlight")}(i,e),null===(a=u.zoomPanPinch)||void 0===a||a.setTransform(s,d,1)}else t(0);return function(){o.value||t(0)}}}),[o.debounced,u.zoomPanPinch,e,t]),[o,c,function(){return t((function(n){return n+1}))}]};function W(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function q(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Q(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return W(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return W(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function en(){var n=nn(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  padding: 4px 6px;\n"]);return en=function(){return n},n}function tn(){var n=nn(["\n  display: flex;\n"]);return tn=function(){return n},n}function rn(){var n=nn(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return rn=function(){return n},n}function on(){var n=nn(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return on=function(){return n},n}var cn=u.ZP.div.withConfig({componentId:"sc-8fd1b5a4-0"})(en(),(function(n){return n.theme.BACKGROUND_TERTIARY})),un=u.ZP.form.withConfig({componentId:"sc-8fd1b5a4-1"})(tn()),an=u.ZP.input.withConfig({componentId:"sc-8fd1b5a4-2"})(rn(),(function(n){return n.theme.TEXT_NORMAL})),ln=u.ZP.button.withConfig({componentId:"sc-8fd1b5a4-3"})(on(),(function(n){return n.theme.INTERACTIVE_NORMAL})),fn=function(){var n=Q($(),3),e=n[0],t=n[1],i=n[2];return(0,r.jsxs)(cn,{children:[(0,r.jsx)(un,{onSubmit:function(n){n.preventDefault(),i()},children:(0,r.jsx)(an,{type:"text",value:e.value,onChange:function(n){return t((function(e){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){q(n,e,t[e])}))}return n}({},e,{value:n.target.value})}))},placeholder:"Search Node"})}),(0,r.jsx)(ln,{"aria-label":"search",onClick:function(){return t({value:"",debounced:""})},children:e.value?(0,r.jsx)(F.Lp2,{size:18}):(0,r.jsx)(f.RB5,{size:18})})]})};function sn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function dn(){var n=sn(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n\n  box-shadow: 0 1px 0px ",";\n"]);return dn=function(){return n},n}function hn(){var n=sn(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return hn=function(){return n},n}var pn=u.ZP.div.withConfig({componentId:"sc-bc4e9bc5-0"})(dn(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),bn=u.ZP.button.withConfig({componentId:"sc-bc4e9bc5-1"})(hn(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),mn=function(){var n=(0,E.ZR)(),e=n.json,t=n.settings,i=n.dispatch;return(0,r.jsxs)(pn,{children:[(0,r.jsx)(bn,{"aria-label":"fullscreen",onClick:function(){return i({type:O.n.TOGGLE_DOCK})},children:(0,r.jsx)(f.vju,{})}),(0,r.jsx)(bn,{"aria-label":"switch theme",onClick:function(){return i({type:O.n.TOGGLE_THEME})},children:t.lightmode?(0,r.jsx)(Y.Fxr,{}):(0,r.jsx)(Y.YGJ,{})}),(0,r.jsx)(fn,{}),(0,r.jsx)(bn,{"aria-label":"save",onClick:function(){localStorage.setItem("json",e),d.ZP.success("Saved JSON successfully!")},children:(0,r.jsx)(f.JMf,{})}),(0,r.jsx)(bn,{"aria-label":"center canvas",onClick:function(){return i({type:O.n.CENTER_VIEW})},children:(0,r.jsx)(l.XIv,{})}),(0,r.jsx)(bn,{"aria-label":"zoom out",onClick:function(){return i({type:O.n.ZOOM_OUT})},children:(0,r.jsx)(f.ywL,{})}),(0,r.jsx)(bn,{"aria-label":"zoom in",onClick:function(){return i({type:O.n.ZOOM_IN})},children:(0,r.jsx)(f.Lfi,{})})]})},gn=t(8188);function vn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function yn(){var n=vn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return yn=function(){return n},n}function xn(){var n=vn(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  min-height: 50;\n  color: ",";\n"]);return xn=function(){return n},n}function jn(){var n=vn(['\n  pointer-events: none;\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n  }\n\n  .highlight {\n    background-color: rgba(255, 0, 255, 0.5);\n    filter: hue-rotate();\n  }\n"]);return jn=function(){return n},n}function wn(){var n=vn(["\n  font-weight: bold;\n  color: ",";\n"]);return wn=function(){return n},n}function On(){var n=vn(["\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return On=function(){return n},n}var En=u.ZP.div.withConfig({componentId:"sc-5dde2bd5-0"})(yn()),Cn=u.ZP.pre.withConfig({componentId:"sc-5dde2bd5-1"})(xn(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.TEXT_NORMAL})),Pn=u.ZP.foreignObject.withConfig({componentId:"sc-5dde2bd5-2"})(jn(),(function(n){return n.theme.TEXT_POSITIVE})),In=u.ZP.span.withConfig({componentId:"sc-5dde2bd5-3"})(wn(),(function(n){var e=n.theme,t=n.objectKey;return n.parent?e.NODE_KEY:t?"#5c87ff":e.TEXT_POSITIVE})),Sn=u.ZP.span.withConfig({componentId:"sc-5dde2bd5-4"})(On(),(function(n){var e=n.width;return"".concat(e-20,"px")})),An=function(n){var e=n.width,t=n.height,i=n.value,o=n.x,c=n.y;return(0,r.jsx)(Pn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(En,{children:(0,r.jsx)(Cn,{width:e,height:t,children:i.map((function(n,t){return n[1]&&(0,r.jsxs)(Sn,{"data-key":n[1],"data-x":o,"data-y":c,width:e,children:[(0,r.jsxs)(In,{objectKey:!0,children:[n[0],": "]}),n[1]]},t)}))})})})},Rn=function(n){var e=n.width,t=n.height,i=n.value,o=n.isParent,c=void 0!==o&&o,u=n.x,a=n.y;return(0,r.jsx)(Pn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(En,{children:(0,r.jsx)(Cn,{width:e,height:t,children:(0,r.jsx)(In,{"data-x":u,"data-y":a,"data-key":i,parent:c,children:i})})})})};function Tn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Nn={fill:"transparent",stroke:"transparent",strokeWidth:0},kn=function(n){var e=n.properties;return(0,r.jsx)(gn.Node,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Tn(n,e,t[e])}))}return n}({},n,{label:(0,r.jsx)(gn.Label,{style:Nn}),children:function(){var t,i,o=n.width,c=n.height;if(t=e.text,null!=(i=Object)&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](t):t instanceof i){var u=Object.entries(e.text);return(0,r.jsx)(An,{x:n.x,y:n.y,width:o,height:c,value:u})}return(0,r.jsx)(Rn,{isParent:e.data.isParent,width:o,height:c,value:e.text,x:n.x,y:n.y})}}))},zn=t(1676);function Zn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function _n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return Zn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Zn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ln=function(){var n=_n(i.useState([]),2),e=n[0],t=n[1],o=_n(i.useState([]),2),c=o[0],u=o[1],a=_n(i.useState({width:2e3,height:2e3}),2),l=a[0],f=a[1],s=(0,E.ZR)(),d=s.json,h=s.settings;i.useEffect((function(){var n=(0,zn.h)(d,h.expand),e=n.nodes,r=n.edges;t(e),u(r)}),[d,h.expand]);return(0,r.jsx)(gn.Canvas,{nodes:e,edges:c,maxWidth:l.width,maxHeight:l.height,direction:h.layout,onCanvasClick:function(){var n=document.querySelector("input:focus");n&&n.blur()},onLayoutChange:function(n){n.width&&n.height&&f({width:n.width,height:n.height})},node:kn,zoomable:!1,readonly:!0},h.layout)};function Gn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Dn(){var n=Gn(["\n  position: relative;\n"]);return Dn=function(){return n},n}function Mn(){var n=Gn(["\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 36px);\n\n  :active {\n    cursor: move;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return Mn=function(){return n},n}var Un=u.ZP.div.withConfig({componentId:"sc-b39ef16a-0"})(Dn()),Kn=u.ZP.div.withConfig({componentId:"sc-b39ef16a-1"})(Mn(),(function(n){return n.theme.BACKGROUND_NODE})),Bn={step:.05},Vn=i.memo((function(){var n=(0,E.ZR)().dispatch;return(0,r.jsxs)(Un,{children:[(0,r.jsx)(mn,{}),(0,r.jsx)(Kn,{children:(0,r.jsx)(V.d$,{maxScale:1.8,minScale:.4,initialScale:.8,wheel:Bn,onInit:function(e){return n({type:O.n.SET_ZOOM_PAN_PICNH_REF,payload:e})},children:(0,r.jsx)(V.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,r.jsx)(Ln,{})})})})]})})),Yn=t(9604),Fn=t(8485);function Jn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Hn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Xn(){var n=Hn(["\n  z-index: 5;\n"]);return Xn=function(){return n},n}function $n(){var n=Hn(["\n  display: flex;\n  width: 100%;\n  padding: 4px 16px;\n  height: 36px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  pointer-events: ",";\n  background: ",";\n  box-shadow: 0 1px 0px ",";\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    box-shadow: none;\n  }\n"]);return $n=function(){return n},n}function Wn(){var n=Hn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  gap: 10px;\n  font-size: 16px;\n"]);return Wn=function(){return n},n}function qn(){var n=Hn(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  font-size: 12px;\n  padding: 12px;\n  margin: 0;\n  word-wrap: break-word;\n  white-space: pre-line;\n"]);return qn=function(){return n},n}var Qn=u.ZP.div.withConfig({componentId:"sc-b1c8974a-0"})(Xn()),ne=u.ZP.button.withConfig({componentId:"sc-b1c8974a-1"})($n(),(function(n){var e=n.theme;return n.error?e.DANGER:e.TEXT_POSITIVE}),(function(n){return!n.error&&"none"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.DANGER})),ee=u.ZP.span.withConfig({componentId:"sc-b1c8974a-2"})(Wn()),te=u.ZP.pre.withConfig({componentId:"sc-b1c8974a-3"})(qn(),(function(n){return n.theme.DANGER}),(function(n){return n.theme.SILVER_DARK})),re=function(n){var e=n.error,t=n.setError;return(0,r.jsxs)(Qn,{children:[(0,r.jsxs)(ne,{error:!!e.message,onClick:function(){return t((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Jn(n,e,t[e])}))}return n}({},n,{isExpanded:!n.isExpanded})}))},children:[(0,r.jsxs)(ee,{children:[e.message?(0,r.jsx)(l.pKf,{size:20}):(0,r.jsx)(l.S5G,{size:20}),e.message?"Error":"JSON Valid"]}),e.message&&(e.isExpanded?(0,r.jsx)(l.Faw,{size:22}):(0,r.jsx)(l.Yc6,{size:22}))]}),e.isExpanded&&e.message&&(0,r.jsx)(te,{children:e.message})]})};function ie(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function oe(){var n=ie(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 10;\n"]);return oe=function(){return n},n}function ce(){var n=ie(["\n  font-weight: 700;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return ce=function(){return n},n}function ue(){var n=ie(["\n  color: #faa81a;\n"]);return ue=function(){return n},n}function ae(){var n=ie(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return ae=function(){return n},n}var le=u.ZP.div.withConfig({componentId:"sc-ccf04899-0"})(oe(),(function(n){return n.theme.BLACK_DARK})),fe=u.ZP.h2.withConfig({componentId:"sc-ccf04899-1"})(ce()),se=u.ZP.span.withConfig({componentId:"sc-ccf04899-2"})(ue()),de=u.ZP.div.withConfig({componentId:"sc-ccf04899-3"})(ae()),he=function(n){var e=n.message;return(0,r.jsxs)(le,{children:[(0,r.jsxs)(fe,{children:[(0,r.jsx)(se,{children:"JSON"})," Visio"]}),(0,r.jsx)(de,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})};function pe(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function be(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function me(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){be(n,e,t[e])}))}return n}function ge(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return pe(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pe(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(){var n,e,t=(n=["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  user-select: none;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return ve=function(){return t},t}var ye=u.ZP.div.withConfig({componentId:"sc-9e2ea327-0"})(ve()),xe={minimap:{enabled:!1}},je=function(){var n=(0,E.ZR)(),e=n.json,t=n.settings,o=n.dispatch,c=ge(i.useState(""),2),u=c[0],a=c[1],l=ge(i.useState({message:"",isExpanded:!0}),2),f=l[0],s=l[1],d=i.useMemo((function(){return t.lightmode?"light":"vs-dark"}),[t.lightmode]);return i.useEffect((function(){if(t.autoformat)return a(JSON.stringify(JSON.parse(e),null,2));a(e)}),[t.autoformat,e]),i.useEffect((function(){var n=setTimeout((function(){try{if(u){var n=(0,Fn.Z)(u);t.autoformat?a(JSON.stringify(n,null,2)):a(u),o({type:O.n.SET_JSON,payload:u})}s((function(n){return me({},n,{message:""})}))}catch(e){s((function(n){return me({},n,{message:e.message})}))}}),t.autoformat?1200:1800);return function(){return clearTimeout(n)}}),[u,o]),(0,r.jsxs)(ye,{children:[(0,r.jsx)(re,{error:f,setError:s}),(0,r.jsx)(Yn.ZP,{height:"100%",defaultLanguage:"json",value:u,options:xe,theme:d,loading:(0,r.jsx)(he,{message:"Loading Editor..."}),onChange:function(n){return a(n)}})]})},we=t(1639);function Oe(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 700;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Oe=function(){return t},t}var Ee=u.ZP.div.withConfig({componentId:"sc-c29e823a-0"})(Oe(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),Ce=function(){var n=(0,C.useRouter)();return(0,r.jsxs)(Ee,{children:["This app is not compatible with your device!",(0,r.jsx)(we.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},Pe=t(524);t(7786);function Ie(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Se(){var n=Ie(["\n  display: flex;\n  height: 100vh;\n"]);return Se=function(){return n},n}function Ae(){var n=Ie(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return Ae=function(){return n},n}function Re(){var n=Ie(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n"]);return Re=function(){return n},n}var Te=u.ZP.div.withConfig({componentId:"sc-dba5e242-0"})(Se()),Ne=u.ZP.div.withConfig({componentId:"sc-dba5e242-1"})(Ae()),ke=(0,u.ZP)(Pe.o).withConfig({componentId:"sc-dba5e242-2"})(Re(),(function(n){return n.theme.BACKGROUND_SECONDARY})),ze=function(){var n=(0,E.ZR)().settings;return(0,r.jsxs)(Te,{children:[(0,r.jsx)(B,{}),(0,r.jsx)(Ne,{children:(0,r.jsxs)(ke,{children:[(0,r.jsx)(Pe.o.Pane,{preferredSize:400,minSize:300,maxSize:600,visible:!n.hideEditor,children:(0,r.jsx)(je,{})}),(0,r.jsx)(Pe.o.Pane,{children:(0,r.jsx)(Vn,{})})]})}),(0,r.jsx)(Ce,{})]})}}}]);