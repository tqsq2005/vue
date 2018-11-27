webpackJsonp([8],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/views/svg-icons/index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__requireIcons__ = __webpack_require__("./resources/client/assets/js/views/svg-icons/requireIcons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_clipboard__ = __webpack_require__("./resources/client/assets/js/utils/clipboard.js");
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
  name: 'Icons',
  data: function data() {
    return {
      iconsMap: __WEBPACK_IMPORTED_MODULE_0__requireIcons__["a" /* default */]
    };
  },

  methods: {
    generateIconCode: function generateIconCode(symbol) {
      return '<svg-icon icon-class="' + symbol + '" />';
    },
    handleClipboard: function handleClipboard(text, event) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_clipboard__["a" /* default */])(text, event);
    }
  }
});

/***/ }),

/***/ "./node_modules/clipboard/lib/clipboard-action.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__("./node_modules/select/src/select.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),

/***/ "./node_modules/clipboard/lib/clipboard.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__("./node_modules/clipboard/lib/clipboard-action.js"), __webpack_require__("./node_modules/tiny-emitter/index.js"), __webpack_require__("./node_modules/good-listener/src/listen.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fb847cd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/svg-icons/index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icons-container[data-v-6fb847cd] {\n  margin: 10px 20px 0;\n  overflow: hidden;\n}\n.icons-container .icons-wrapper[data-v-6fb847cd] {\n    margin: 0 auto;\n}\n.icons-container .icon-item[data-v-6fb847cd] {\n    margin: 20px;\n    height: 110px;\n    text-align: center;\n    width: 110px;\n    float: left;\n    font-size: 30px;\n    color: #24292e;\n    cursor: pointer;\n}\n.icons-container span[data-v-6fb847cd] {\n    display: block;\n    font-size: 24px;\n    margin-top: 10px;\n}\n.icons-container .disabled[data-v-6fb847cd] {\n    pointer-events: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/delegate/src/closest.js":
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ "./node_modules/delegate/src/delegate.js":
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__("./node_modules/delegate/src/closest.js");

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ "./node_modules/good-listener/src/is.js":
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ "./node_modules/good-listener/src/listen.js":
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__("./node_modules/good-listener/src/is.js");
var delegate = __webpack_require__("./node_modules/delegate/src/delegate.js");

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ "./node_modules/select/src/select.js":
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6fb847cd\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/views/svg-icons/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "icons-container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "icons-wrapper" },
      _vm._l(_vm.iconsMap, function(item) {
        return _c(
          "div",
          {
            key: item,
            on: {
              click: function($event) {
                _vm.handleClipboard(_vm.generateIconCode(item), $event)
              }
            }
          },
          [
            _c("el-tooltip", { attrs: { placement: "top" } }, [
              _c("div", { attrs: { slot: "content" }, slot: "content" }, [
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.generateIconCode(item)) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "icon-item" },
                [
                  _c("svg-icon", {
                    attrs: { "icon-class": item, "class-name": "disabled" }
                  }),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(item))])
                ],
                1
              )
            ])
          ],
          1
        )
      })
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "warn-content" }, [
      _c(
        "a",
        {
          attrs: {
            href:
              "https://panjiachen.github.io/vue-element-admin-site/guide/advanced/icon.html",
            target: "_blank"
          }
        },
        [_vm._v("Add and use\n    ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6fb847cd", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fb847cd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/svg-icons/index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fb847cd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/svg-icons/index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("95e52946", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fb847cd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fb847cd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/client/assets/js/icons/svg \\.svg$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./404.svg": "./resources/client/assets/js/icons/svg/404.svg",
	"./bug.svg": "./resources/client/assets/js/icons/svg/bug.svg",
	"./chart.svg": "./resources/client/assets/js/icons/svg/chart.svg",
	"./clipboard.svg": "./resources/client/assets/js/icons/svg/clipboard.svg",
	"./component.svg": "./resources/client/assets/js/icons/svg/component.svg",
	"./dashboard.svg": "./resources/client/assets/js/icons/svg/dashboard.svg",
	"./documentation.svg": "./resources/client/assets/js/icons/svg/documentation.svg",
	"./drag.svg": "./resources/client/assets/js/icons/svg/drag.svg",
	"./edit.svg": "./resources/client/assets/js/icons/svg/edit.svg",
	"./email.svg": "./resources/client/assets/js/icons/svg/email.svg",
	"./example.svg": "./resources/client/assets/js/icons/svg/example.svg",
	"./excel.svg": "./resources/client/assets/js/icons/svg/excel.svg",
	"./eye.svg": "./resources/client/assets/js/icons/svg/eye.svg",
	"./form.svg": "./resources/client/assets/js/icons/svg/form.svg",
	"./guide 2.svg": "./resources/client/assets/js/icons/svg/guide 2.svg",
	"./guide.svg": "./resources/client/assets/js/icons/svg/guide.svg",
	"./icon.svg": "./resources/client/assets/js/icons/svg/icon.svg",
	"./international.svg": "./resources/client/assets/js/icons/svg/international.svg",
	"./language.svg": "./resources/client/assets/js/icons/svg/language.svg",
	"./link.svg": "./resources/client/assets/js/icons/svg/link.svg",
	"./list.svg": "./resources/client/assets/js/icons/svg/list.svg",
	"./lock.svg": "./resources/client/assets/js/icons/svg/lock.svg",
	"./message.svg": "./resources/client/assets/js/icons/svg/message.svg",
	"./money.svg": "./resources/client/assets/js/icons/svg/money.svg",
	"./nested.svg": "./resources/client/assets/js/icons/svg/nested.svg",
	"./password.svg": "./resources/client/assets/js/icons/svg/password.svg",
	"./people.svg": "./resources/client/assets/js/icons/svg/people.svg",
	"./peoples.svg": "./resources/client/assets/js/icons/svg/peoples.svg",
	"./qq.svg": "./resources/client/assets/js/icons/svg/qq.svg",
	"./shopping.svg": "./resources/client/assets/js/icons/svg/shopping.svg",
	"./size.svg": "./resources/client/assets/js/icons/svg/size.svg",
	"./star.svg": "./resources/client/assets/js/icons/svg/star.svg",
	"./tab.svg": "./resources/client/assets/js/icons/svg/tab.svg",
	"./table.svg": "./resources/client/assets/js/icons/svg/table.svg",
	"./theme.svg": "./resources/client/assets/js/icons/svg/theme.svg",
	"./tree.svg": "./resources/client/assets/js/icons/svg/tree.svg",
	"./user.svg": "./resources/client/assets/js/icons/svg/user.svg",
	"./wechat.svg": "./resources/client/assets/js/icons/svg/wechat.svg",
	"./zip.svg": "./resources/client/assets/js/icons/svg/zip.svg"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/client/assets/js/icons/svg \\.svg$";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/404.svg":
/***/ (function(module, exports) {

module.exports = "/images/404.svg?cb2515ac0b88489f6a4a2c4e964779e9";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/bug.svg":
/***/ (function(module, exports) {

module.exports = "/images/bug.svg?f34b13282109aca89496df283add2404";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/chart.svg":
/***/ (function(module, exports) {

module.exports = "/images/chart.svg?15fe45db69e363829862804aa8d15a8d";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/clipboard.svg":
/***/ (function(module, exports) {

module.exports = "/images/clipboard.svg?a754c187a5b705053db69dca00e934bf";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/component.svg":
/***/ (function(module, exports) {

module.exports = "/images/component.svg?d0738c404aed1c0c0b2c15781024c65e";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/dashboard.svg":
/***/ (function(module, exports) {

module.exports = "/images/dashboard.svg?28a2a85028544ffc423c50a869c5663d";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/documentation.svg":
/***/ (function(module, exports) {

module.exports = "/images/documentation.svg?250402ca7740a4d56707bf3523cc2a5b";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/drag.svg":
/***/ (function(module, exports) {

module.exports = "/images/drag.svg?4a19e2022c2b4b10085abe48e97cbe9b";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/edit.svg":
/***/ (function(module, exports) {

module.exports = "/images/edit.svg?e5ed5337974b729933a59acf1f0e85df";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/email.svg":
/***/ (function(module, exports) {

module.exports = "/images/email.svg?1d6d79ab976b274bfe8a4cdbd1cf54df";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/example.svg":
/***/ (function(module, exports) {

module.exports = "/images/example.svg?894f4689a6119311eeaffbce28550ffe";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/excel.svg":
/***/ (function(module, exports) {

module.exports = "/images/excel.svg?2a6cd11fdba0495942a627afdf5a7267";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/eye.svg":
/***/ (function(module, exports) {

module.exports = "/images/eye.svg?e4fe315c85f7cba0a4745e3ca44f24fc";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/form.svg":
/***/ (function(module, exports) {

module.exports = "/images/form.svg?f3ed6feed97a27f74480e1e4b525bac7";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/guide 2.svg":
/***/ (function(module, exports) {

module.exports = "/images/guide 2.svg?b63a3f0f100d5c3d28173964c1dbe06b";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/guide.svg":
/***/ (function(module, exports) {

module.exports = "/images/guide.svg?fe0b5508caed28f6ca9944098c0fae30";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/icon.svg":
/***/ (function(module, exports) {

module.exports = "/images/icon.svg?3ab19eb257746fd07889a65bdfe65b98";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/international.svg":
/***/ (function(module, exports) {

module.exports = "/images/international.svg?256537bf72bb1c50af1d6ed8eca4c66d";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/language.svg":
/***/ (function(module, exports) {

module.exports = "/images/language.svg?a90e34fc8c2f2936803952329a2c0a9c";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/link.svg":
/***/ (function(module, exports) {

module.exports = "/images/link.svg?776b567c2f0b54211f8dc402a14360eb";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/list.svg":
/***/ (function(module, exports) {

module.exports = "/images/list.svg?76dedeca71f9a6d0564bcbce4baf7f7b";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/lock.svg":
/***/ (function(module, exports) {

module.exports = "/images/lock.svg?8634238d2ce27b42613c743fe1a351c4";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/message.svg":
/***/ (function(module, exports) {

module.exports = "/images/message.svg?1fbaa15519080cf315043785eac298ff";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/money.svg":
/***/ (function(module, exports) {

module.exports = "/images/money.svg?954fffc74d90c1872bb3fcdd8353c927";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/nested.svg":
/***/ (function(module, exports) {

module.exports = "/images/nested.svg?c948fb3810ab62a38bd1f503067b3739";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/password.svg":
/***/ (function(module, exports) {

module.exports = "/images/password.svg?92a4e6d471e7f5039b5c9fc38dd6004c";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/people.svg":
/***/ (function(module, exports) {

module.exports = "/images/people.svg?665094ec135dedbd83d00a4685a43bc1";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/peoples.svg":
/***/ (function(module, exports) {

module.exports = "/images/peoples.svg?2269979c36aa01b431dc2c65587ce557";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/qq.svg":
/***/ (function(module, exports) {

module.exports = "/images/qq.svg?8968a17d82001ed646ff4b5252958e9d";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/shopping.svg":
/***/ (function(module, exports) {

module.exports = "/images/shopping.svg?232bbd1d12b7e804c2a396816db7d36c";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/size.svg":
/***/ (function(module, exports) {

module.exports = "/images/size.svg?c77e5b9c08060b42f80fb758102084c2";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/star.svg":
/***/ (function(module, exports) {

module.exports = "/images/star.svg?91c105621589f0234ddf4954a7fe5e00";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/tab.svg":
/***/ (function(module, exports) {

module.exports = "/images/tab.svg?02b3a5b88efd2a3c9e69d13df866c652";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/table.svg":
/***/ (function(module, exports) {

module.exports = "/images/table.svg?01f695223e8b88f0ea1736791d472e12";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/theme.svg":
/***/ (function(module, exports) {

module.exports = "/images/theme.svg?a8c152496964ad6a20badfd201543421";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/tree.svg":
/***/ (function(module, exports) {

module.exports = "/images/tree.svg?59ecebc1f4633ac6474824097941fb94";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/user.svg":
/***/ (function(module, exports) {

module.exports = "/images/user.svg?9f469d0bfbffa276f88b28e96a919230";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/wechat.svg":
/***/ (function(module, exports) {

module.exports = "/images/wechat.svg?a42343e0b6e1aa867f12ecc7e1ef1732";

/***/ }),

/***/ "./resources/client/assets/js/icons/svg/zip.svg":
/***/ (function(module, exports) {

module.exports = "/images/zip.svg?839d61e0376bb89e1c2bd458ecb2051b";

/***/ }),

/***/ "./resources/client/assets/js/utils/clipboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleClipboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clipboard__ = __webpack_require__("./node_modules/clipboard/lib/clipboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_clipboard__);




function clipboardSuccess() {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  });
}

function clipboardError() {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$message({
    message: 'Copy failed',
    type: 'error'
  });
}

/**
 * @description usage:  1 import clipboard from '@/utils/clipboard'
 *                      2 methods: {
                            generateIconCode(symbol) {
                              return `<svg-icon icon-class="${symbol}" />`
                            },
                            handleClipboard(text, event) {
                              clipboard(text, event)
                            }
                          }
                        3 @click="handleClipboard(generateIconCode(item),$event)"
 * @param text
 * @param event
 */
function handleClipboard(_text, event) {
  var clipboard = new __WEBPACK_IMPORTED_MODULE_1_clipboard___default.a(event.target, {
    text: function text() {
      return _text;
    }
  });
  clipboard.on('success', function () {
    clipboardSuccess();
    clipboard.off('error');
    clipboard.off('success');
    clipboard.destroy();
  });
  clipboard.on('error', function () {
    clipboardError();
    clipboard.off('error');
    clipboard.off('success');
    clipboard.destroy();
  });
  clipboard.onClick(event);
}

/***/ }),

/***/ "./resources/client/assets/js/views/svg-icons/index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6fb847cd\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/views/svg-icons/index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/views/svg-icons/index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6fb847cd\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/views/svg-icons/index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6fb847cd"
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
Component.options.__file = "resources/client/assets/js/views/svg-icons/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fb847cd", Component.options)
  } else {
    hotAPI.reload("data-v-6fb847cd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/views/svg-icons/requireIcons.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var req = __webpack_require__("./resources/client/assets/js/icons/svg \\.svg$");
var requireAll = function requireAll(requireContext) {
  return requireContext.keys();
};

var re = /\.\/(.*)\.svg/;

var icons = requireAll(req).map(function (i) {
  return i.match(re)[1];
});

/* harmony default export */ __webpack_exports__["a"] = (icons);

/***/ })

});