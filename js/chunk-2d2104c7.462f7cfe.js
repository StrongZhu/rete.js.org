(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2104c7"],{b6fc:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{directives:[{name:"t9n",rawName:"v-t9n.deep",value:"docs",expression:"'docs'",modifiers:{deep:!0}}],staticClass:"plugin"},[t("Code",{attrs:{source:"install"}}),n._m(0)],1)},u=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("a",{attrs:{href:"https://codepen.io/Ni55aN/pen/QOEbEW"}},[n._v("Пример")])])}],r=t("2877"),d=function(n){n.options.code||(n.options.code={}),n.options.code["install"]="import ModulePlugin from 'rete-module-plugin';\n\nconst modules = {\n    moduleName: { data: defaultData() }\n}\n\neditor.use(ModulePlugin, { engine, modules });\n\nclass InputNumber extends Component {\n    constructor() {\n        super('Input number');\n        this.module = {\n            nodeType: 'input',\n            socket: sockets.num\n        }\n    }\n\n    builder(node) {\n        var out = new Output('output', 'Number', sockets.num); // ключ должен быть 'output'\n        var ctrl = new FieldControl(this.editor, 'name', {value: ''}); // ключ должен быть 'name'\n        var ctrl2 = new FieldControl(this.editor, 'number', {type: 'number', value: 1});\n        \n        return node\n            .addControl(ctrl)\n            .addControl(ctrl2)\n            .addOutput(out);\n    }\n\n    async worker(node, inputs, outputs) {\n        if (!outputs['num'])\n            outputs['num'] = node.data.number; // здесь вы можете модифицировать возвращаемые в модуль выходные данные\n    }\n};\n\nexport default class ModuleComponent extends Component {\n\n    constructor() {\n        super(\"Module\");\n        this.module = {\n            nodeType: 'module'\n        }\n    }\n\n    builder(node) {\n        var ctrl = new FieldControl(this.editor, 'module', {value: 'Module name..'}); // ключ должен быть 'module'\n        ctrl.onChange = () => {\n            this.updateModuleSockets(node);\n            node.update();\n        }\n        return node.addControl(ctrl);\n    }\n\n    change(node, item) {\n        node.data.module = item;\n        this.editor.trigger('process');\n    }\n}\n\nclass OutputNumber extends Component {\n    constructor() {\n        super('Output number');\n    }\n\n    builder(node) {\n        var inp = new Input('input', 'Number', sockets.num); // ключ должен быть 'input'\n        var ctrl = new FieldControl(this.editor, 'name', {value: 'num'}); // ключ должен быть 'name'\n\n        return node\n            .addControl(ctrl)\n            .addInput(inp);\n    }\n}"},l=d,s={},a=Object(r["a"])(s,o,u,!1,null,null,null);"function"===typeof l&&l(a);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d2104c7.462f7cfe.js.map