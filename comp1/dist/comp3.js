!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function o(e,t,n,o,r,i,s,c){var u=typeof(e=e||{}).default;"object"!==u&&"function"!==u||(e=e.default);var a,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId=i),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):r&&(a=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(l.functional){l._injectStyles=a;var p=l.render;l.render=function(e,t){return a.call(t),p(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:l}}n.d(t,"a",function(){return o})},function(e,t,n){"use strict";n.r(t);var o={data:()=>({test:0xa202e60e555})},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  im comp14333333333333ddd\n  "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.test,expression:"test"}],attrs:{type:"text"},domProps:{value:e.test},on:{input:function(t){t.target.composing||(e.test=t.target.value)}}})])};r._withStripped=!0;var i=n(0),s=Object(i.a)(o,r,[],!1,null,null,null);s.options.__file="src\\comp3.vue";var c=s.exports;Vue.component("comp3",c),window.setcomponent(),console.log("comp3 loaded!")}]);