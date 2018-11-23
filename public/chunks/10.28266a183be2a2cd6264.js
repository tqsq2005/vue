webpackJsonp([10],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/views/errorPage/401.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_401_images_401_gif__ = __webpack_require__("./resources/client/assets/js/assets/401_images/401.gif");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_401_images_401_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_401_images_401_gif__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Page401',
  data: function data() {
    return {
      errGif: __WEBPACK_IMPORTED_MODULE_0__assets_401_images_401_gif___default.a + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    };
  },

  methods: {
    back: function back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/dashboard' });
      } else {
        this.$router.go(-1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8562094\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/errorPage/401.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errPage-container[data-v-c8562094] {\n  width: 800px;\n  max-width: 100%;\n  margin: 100px auto;\n}\n.errPage-container .pan-back-btn[data-v-c8562094] {\n    background: #008489;\n    color: #fff;\n    border: none !important;\n}\n.errPage-container .pan-gif[data-v-c8562094] {\n    margin: 0 auto;\n    display: block;\n}\n.errPage-container .pan-img[data-v-c8562094] {\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n}\n.errPage-container .text-jumbo[data-v-c8562094] {\n    font-size: 60px;\n    font-weight: 700;\n    color: #484848;\n}\n.errPage-container .list-unstyled[data-v-c8562094] {\n    font-size: 14px;\n}\n.errPage-container .list-unstyled li[data-v-c8562094] {\n      padding-bottom: 5px;\n}\n.errPage-container .list-unstyled a[data-v-c8562094] {\n      color: #008489;\n      text-decoration: none;\n}\n.errPage-container .list-unstyled a[data-v-c8562094]:hover {\n        text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c8562094\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/views/errorPage/401.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "errPage-container" },
    [
      _c(
        "el-button",
        {
          staticClass: "pan-back-btn",
          attrs: { icon: "arrow-left" },
          on: { click: _vm.back }
        },
        [_vm._v("返回")]
      ),
      _vm._v(" "),
      _c(
        "el-row",
        [
          _c("el-col", { attrs: { span: 12 } }, [
            _c("h1", { staticClass: "text-jumbo text-ginormous" }, [
              _vm._v("Oops!")
            ]),
            _vm._v("\n      gif来源"),
            _c(
              "a",
              { attrs: { href: "https://zh.airbnb.com/", target: "_blank" } },
              [_vm._v("airbnb")]
            ),
            _vm._v(" 页面\n      "),
            _c("h2", [_vm._v("你没有权限去该页面")]),
            _vm._v(" "),
            _c("h6", [_vm._v("如有不满请联系你领导")]),
            _vm._v(" "),
            _c("ul", { staticClass: "list-unstyled" }, [
              _c("li", [_vm._v("或者你可以去:")]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "link-type" },
                [
                  _c("router-link", { attrs: { to: "/dashboard" } }, [
                    _vm._v("回首页")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "link-type" }, [
                _c("a", { attrs: { href: "https://www.taobao.com/" } }, [
                  _vm._v("随便看看")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.dialogVisible = true
                      }
                    }
                  },
                  [_vm._v("点我看图")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("el-col", { attrs: { span: 12 } }, [
            _c("img", {
              attrs: {
                src: _vm.errGif,
                width: "313",
                height: "428",
                alt: "Girl has dropped her ice cream."
              }
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { visible: _vm.dialogVisible, title: "随便看" },
          on: {
            "update:visible": function($event) {
              _vm.dialogVisible = $event
            }
          }
        },
        [_c("img", { staticClass: "pan-img", attrs: { src: _vm.ewizardClap } })]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c8562094", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8562094\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/errorPage/401.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8562094\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/errorPage/401.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6f782048", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8562094\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./401.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8562094\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./401.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/client/assets/js/assets/401_images/401.gif":
/***/ (function(module, exports) {

module.exports = "/images/401.gif?089007e721e1f22809c0313b670a36f1";

/***/ }),

/***/ "./resources/client/assets/js/views/errorPage/401.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8562094\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/errorPage/401.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/views/errorPage/401.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-c8562094\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/views/errorPage/401.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c8562094"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/views/errorPage/401.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8562094", Component.options)
  } else {
    hotAPI.reload("data-v-c8562094", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});