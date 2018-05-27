/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getNumOptionsFilled"] = getNumOptionsFilled;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(2);


function addOption() {
    var optionsContainer = document.getElementById('options-container');

    var newDiv = document.createElement('div');

    if (getNumOptions() !== 0) {
        newDiv.appendChild(document.createElement('hr'));
    }

    var newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', 'options[]');
    newInput.setAttribute('placeholder', 'Option...');
    newInput.setAttribute('autocomplete', 'off');
    newInput.oninput = optionOnChange;
    newDiv.appendChild(newInput);

    optionsContainer.appendChild(newDiv);
}

window.inputErrors = __WEBPACK_IMPORTED_MODULE_0__errors__["b" /* inputErrors */];
window.err = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0__errors__["c" /* showError */])(document.getElementsByClassName('options-container')[0]);
};
window.isErr = __WEBPACK_IMPORTED_MODULE_0__errors__["b" /* inputErrors */];
window.ok = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* clearError */])(document.getElementsByClassName('options-container')[0]);
};

// addOption()
function getNumOptionsFilled() {
    var optionInputs = document.querySelectorAll('input[type="text"]');

    var filled = 0;
    optionInputs.forEach(function (elem) {
        if (elem.value !== '') filled++;
    });

    return filled;
}

function getNumOptions() {
    var optionInputs = document.querySelectorAll('input[type="text"]');
    return optionInputs.length;
}

function optionOnChange() {
    if (getNumOptions() < 4 && getNumOptions() === getNumOptionsFilled()) {
        addOption();
    }
}

addOption();
addOption();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = showError;
/* harmony export (immutable) */ __webpack_exports__["a"] = clearError;
/* harmony export (immutable) */ __webpack_exports__["b"] = inputErrors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_native_toast__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_native_toast___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_native_toast__);


// This file contains the code for looking for and showing errors
// in the user input

// This adds an error class to a given element
function showError(elem, message) {
    if (!elem.classList.contains('error')) {
        elem.classList.add('error');
    }
    __WEBPACK_IMPORTED_MODULE_1_native_toast___default()({
        position: 'bottom',
        timeout: 1500,
        type: 'error',
        message: message
    });
}

// This removes the error class from a given element
function clearError(elem) {
    if (elem.classList.contains('error')) {
        elem.classList.remove('error');
    }
}

// Here, I want to look if everything is filled in correctly
function inputErrors() {
    // Check there is a title
    var titleInput = document.getElementById('question-input');
    if (titleInput.value.length === 0) {
        showError(titleInput, 'Enter A Title');
        return false;
    } else {
        clearError(titleInput);
    }

    var optionsContainer = document.getElementById('options-container');
    if (Object(__WEBPACK_IMPORTED_MODULE_0__create__["getNumOptionsFilled"])() < 2) {
        showError(optionsContainer, 'Enter Some Options');
        return false;
    } else {
        clearError(optionsContainer);
    }
    return true;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var assign = _interopDefault(__webpack_require__(9));

var prevToast = null;
var icons = {
  warning: "<svg viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\"><path d=\"M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6\" /></svg>",
  success: "<svg viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\"><path d=\"M2 20 L12 28 30 4\" /></svg>",
  info: "<svg viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\"><path d=\"M16 14 L16 23 M16 8 L16 10\" /><circle cx=\"16\" cy=\"16\" r=\"14\" /></svg>",
  error: "<svg viewBox=\"0 0 32 32\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentcolor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"6.25%\"><path d=\"M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25\" /></svg>"
};

var Toast = function Toast(ref) {
  var this$1 = this;
  if ( ref === void 0 ) ref = {};
  var message = ref.message; if ( message === void 0 ) message = '';
  var position = ref.position; if ( position === void 0 ) position = 'bottom';
  var timeout = ref.timeout; if ( timeout === void 0 ) timeout = 3000;
  var el = ref.el; if ( el === void 0 ) el = document.body;
  var square = ref.square; if ( square === void 0 ) square = false;
  var type = ref.type; if ( type === void 0 ) type = '';
  var debug = ref.debug; if ( debug === void 0 ) debug = false;
  var edge = ref.edge; if ( edge === void 0 ) edge = false;
  var icon = ref.icon; if ( icon === void 0 ) icon = true;
  var closeOnClick = ref.closeOnClick; if ( closeOnClick === void 0 ) closeOnClick = false;

  if (prevToast) {
    prevToast.destroy();
  }

  this.message = message;
  this.position = position;
  this.el = el;
  this.timeout = timeout;
  this.closeOnClick = closeOnClick;
  this.toast = document.createElement('div');
  this.toast.className = "native-toast native-toast-" + (this.position);

  if (type) {
    this.toast.className += " native-toast-" + type;

    if (icon) {
      this.message = "<span class=\"native-toast-icon-" + type + "\">" + (icons[type] || '') + "</span>" + (this.message);
    }
  }

  this.toast.innerHTML = this.message;

  if (edge) {
    this.toast.className += ' native-toast-edge';
  } else if (square) {
    this.toast.style.borderRadius = '3px';
  }

  this.el.appendChild(this.toast);
  prevToast = this;
  this.show();

  if (!debug && timeout > 0) {
    this.hide();
  }

  if (this.closeOnClick) {
    this.toast.addEventListener('click', function () {
      this$1.destroy();
    });
  }
};

Toast.prototype.show = function show () {
    var this$1 = this;

  setTimeout(function () {
    this$1.toast.classList.add('native-toast-shown');
  }, 300);
};

Toast.prototype.hide = function hide () {
    var this$1 = this;

  setTimeout(function () {
    this$1.destroy();
  }, this.timeout);
};

Toast.prototype.destroy = function destroy () {
    var this$1 = this;

  if (!this.toast) { return; }
  this.toast.classList.remove('native-toast-shown');
  setTimeout(function () {
    if (this$1.toast) {
      this$1.el.removeChild(this$1.toast);
      this$1.toast = null;
    }
  }, 300);
};

function toast(options) {
  return new Toast(options);
}

var loop = function () {
  toast[type] = function (options) { return toast(assign({
    type: type
  }, options)); };
};

for (var type of ['success', 'info', 'warning', 'error']) loop();

module.exports = toast;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * nano-assign v1.0.0
 * (c) 2017-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = function(obj) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    // eslint-disable-next-line guard-for-in, prefer-rest-params
    for (var p in arguments[i]) { obj[p] = arguments$1[i][p]; }
  }
  return obj
};

module.exports = index;


/***/ })
/******/ ]);