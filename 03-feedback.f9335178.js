function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var r,i,o,f,u,a,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,o=i;return r=i=void 0,c=e,f=t.apply(o,n)}function h(t){return c=t,u=setTimeout(w,e),l?y(t):f}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=o}function w(){var t=p();if(j(t))return T(t);u=setTimeout(w,function(t){var n=e-(t-a);return s?v(n,o-(t-c)):n}(t))}function T(t){return u=void 0,g&&r?y(t):(r=i=void 0,f)}function O(){var t=p(),n=j(t);if(r=arguments,i=this,a=t,n){if(void 0===u)return h(a);if(s)return u=setTimeout(w,e),y(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=b(e)||0,m(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,e):o,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=a=i=u=void 0},O.flush=function(){return void 0===u?f:T(p())},O}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=o.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:r,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form");y.addEventListener("submit",(function(t){new FormData(y).forEach(((t,e)=>console.log(`${e}: ${t}`))),t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",t(e)((function(t){h[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));const h={};
//# sourceMappingURL=03-feedback.f9335178.js.map
