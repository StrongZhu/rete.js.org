(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbb1d"],{"4b81":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"plugin"},[t("Code",{attrs:{source:"install"}}),e._m(0),e._m(1),t("p",[e._v("Package features a separate CSS stylesheet")]),t("Code",{attrs:{source:"component"}}),t("Code",{attrs:{source:"use"}})],1)},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("span",[e._v("Rete renderer using ")]),t("a",{attrs:{href:"https://www.npmjs.com/package/stage0"}},[e._v("Stage0 ")]),t("span",[e._v("(~1.6 kb framewok)")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[t("a",{attrs:{href:"https://codepen.io/anon/pen/jQBxKe"}},[e._v("Example")])])}],r=t("2877"),a=function(e){e.options.code||(e.options.code={}),e.options.code["install"]="import Stage0RenderPlugin from 'rete-stage0-render-plugin';\n\neditor.use(Stage0RenderPlugin);"},c=a,p=function(e){e.options.code||(e.options.code={}),e.options.code["component"]="import CustomNodeComponent from './CustomNodeComponent.js';\n\nclass MyComponent extends Rete.Component {\n    constructor(){\n        // ...\n        this.data.render = 'stage0';\n        this.data.component = CustomNodeComponent; // stage0.js component, not required\n        this.data.props = {}; // props for the component above, not required\n    }\n}"},i=p,d=function(e){e.options.code||(e.options.code={}),e.options.code["use"]="const node = editor.nodes[0];\nconst control = node.controls.get('ctrl');\n\nnode.update(); // force update\ncontrol.update(); // of view\n\n// in some cases you can gt stage0.js context\nnode.stage0Context\ncontrol.stage0Context"},u=d,l={},m=Object(r["a"])(l,o,s,!1,null,null,null);"function"===typeof c&&c(m),"function"===typeof i&&i(m),"function"===typeof u&&u(m);n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0cbb1d.3c8d53e2.js.map