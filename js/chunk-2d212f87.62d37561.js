(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212f87"],{ab4d:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{directives:[{name:"t9n",rawName:"v-t9n.deep",value:"docs",expression:"'docs'",modifiers:{deep:!0}}],staticClass:"plugin"},[n("Code",{attrs:{source:"install"}}),n("p",[e._v("Плагин создает 'readonly' и 'isreadonly' события")]),n("p",[e._v("Проверить, что событие существует, то есть плагин установлен")]),n("Code",{attrs:{source:"exist"}}),n("p",[e._v("Проверка и изменение состояния")]),n("Code",{attrs:{source:"check"}}),n("p",[e._v("Добавление побочных эффектов при включении/выключении режима только для чтения")]),n("Code",{attrs:{source:"side"}})],1)},i=[],s=n("2877"),d=function(e){e.options.code||(e.options.code={}),e.options.code["install"]="import ReadonlyPlugin from 'rete-readonly-plugin';\n\neditor.use(ReadonlyPlugin, { enabled: false }); // enabled равен true по умолчанию"},r=d,c=function(e){e.options.code||(e.options.code={}),e.options.code["exist"]="this.emitter.exist('isreadonly');"},a=c,l=function(e){e.options.code||(e.options.code={}),e.options.code["check"]="let readonlyEnabled = editor.trigger('isreadonly');\n\neditor.trigger('readonly', readonlyEnabled);"},p=l,u=function(e){e.options.code||(e.options.code={}),e.options.code["side"]="editor.on('readonly', () => {})"},f=u,y={},v=Object(s["a"])(y,t,i,!1,null,null,null);"function"===typeof r&&r(v),"function"===typeof a&&a(v),"function"===typeof p&&p(v),"function"===typeof f&&f(v);o["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d212f87.62d37561.js.map