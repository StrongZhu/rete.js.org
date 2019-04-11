(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f509"],{d8fe:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"t9n",rawName:"v-t9n.deep",value:"docs",expression:"'docs'",modifiers:{deep:!0}}],staticClass:"controls"},[n("h1",[e._v("Контролы")]),n("p",[e._v(" Контролы (элементы управления) необходимы для того, чтобы позволить вам расширить функциональность узлов. \nВы можете вставить любой HTML-шаблон или сторонний объект (input, select, image, плагин jQuery и т.д.).")]),n("p",[e._v("По умолчанию все контролы отображаются с помощью подключеного рендер плагина (vue-render-plugin, alight-render-plugin), но вы можете создавать и отображать контролы другими способами, используя интерфейсы плагинов.")]),n("p",[e._v("Каждому экземпляру Контрола доступны наследованые методы:")]),n("Code",{attrs:{source:"getsetData"}}),n("p",[e._v("Таким образом Контролы могут не только отображать некоторую информацию, но и сохранять данные в узле для дальнейшей обработки.")]),n("Code",{attrs:{source:"controlVue"}}),n("p",[e._v("В этом случае Контрол помещает число в данные узла. Может использоваться, когда нет соединения к входу.")]),n("Code",{attrs:{source:"control"}}),n("p",[e._v("Чтобы явно указать ренден плагин, который должен отображать контрол, необходимо указать следующее в контрукторе Rete.Control:")]),n("Code",{attrs:{source:"name"}})],1)},s=[],i=n("2877"),a=function(e){e.options.code||(e.options.code={}),e.options.code["getsetData"]="getData('key')\nsetData('key', value)"},r=a,u=function(e){e.options.code||(e.options.code={}),e.options.code["controlVue"]="const VueNumControl = {\n  props: ['readonly', 'emitter', 'ikey', 'getData', 'putData'],\n  template: '<input type=\"number\" :readonly=\"readonly\" :value=\"value\" @input=\"change($event)\" @dblclick.stop=\"\"/>',\n  data() {\n    return {\n      value: 0,\n    }\n  },\n  methods: {\n    change(e){\n      this.value = +e.target.value;\n      this.update();\n    },\n    update() {\n      if (this.ikey)\n        this.putData(this.ikey, this.value)\n      this.emitter.trigger('process');\n    }\n  },\n  mounted() {\n    this.value = this.getData(this.ikey);\n  }\n}"},c=u,p=function(e){e.options.code||(e.options.code={}),e.options.code["control"]="class NumControl extends Rete.Control {\n\n  constructor(emitter, key, readonly) {\n    super(key);\n    this.component = VueNumControl;\n    this.props = { emitter, ikey: key, readonly };\n  }\n\n  setValue(val) {\n    this.vueContext.value = val;\n  }\n}"},l=p,d=function(e){e.options.code||(e.options.code={}),e.options.code["name"]="this.data.render = 'vue';"},v=d,h={},y=Object(i["a"])(h,o,s,!1,null,null,null);"function"===typeof r&&r(y),"function"===typeof c&&c(y),"function"===typeof l&&l(y),"function"===typeof v&&v(y);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-2d21f509.5b75b326.js.map