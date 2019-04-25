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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Math/Matrix.js":
/*!****************************!*\
  !*** ./src/Math/Matrix.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Matrix = function Matrix(rows, cols, elements) {\n  var _this = this;\n\n  this._elements = elements !== undefined ? elements.map(function (el) {\n    return el;\n  }) : new Array(rows * cols);\n  this._rows = rows;\n  this._cols = cols;\n\n  this.getNumRows = function () {\n    return _this._rows;\n  };\n\n  this.getNumCols = function () {\n    return _this._cols;\n  };\n\n  this.set = function (i, j, val) {\n    _this._elements[i * _this._cols + j] = val;\n  };\n\n  this.get = function (i, j) {\n    return _this._elements[i * _this._cols + j];\n  };\n\n  this.getData = function () {\n    return _this._elements.map(function (el) {\n      return el;\n    });\n  };\n\n  this.transpose = function () {\n    var temp = new Matrix(this.getNumRows(), this.getNumCols());\n\n    for (var i = 0; i < this.getNumRows(); i++) {\n      for (var j = 0; j < this.getNumCols(); j++) {\n        temp.set(i, j, this.get(j, i));\n      }\n    }\n\n    return temp;\n  };\n\n  this.determinant = function () {\n    var temp = new Matrix(this.getNumRows(), this.getNumCols());\n    return temp;\n  };\n\n  this.add = function (other) {\n    var temp = new Matrix(this.getNumRows(), other.getNumCols());\n\n    for (var i = 0; i < this.getNumRows(); i++) {\n      for (var j = 0; j < other.getNumCols(); j++) {\n        temp.set(i, j, this.get(i, j) + other.get(i, j));\n      }\n    }\n\n    return temp;\n  };\n\n  this.sub = function (other) {\n    var temp = new Matrix(this.getNumRows(), other.getNumCols());\n\n    for (var i = 0; i < this.getNumRows(); i++) {\n      for (var j = 0; j < other.getNumCols(); j++) {\n        temp.set(i, j, this.get(i, j) + other.get(i, j));\n      }\n    }\n\n    return temp;\n  };\n\n  this.mult = function (other) {\n    var temp = new Matrix(this.getNumRows(), other.getNumCols());\n\n    for (var i = 0; i < this.getNumRows(); i++) {\n      for (var j = 0; j < other.getNumCols(); j++) {\n        var sum = 0;\n\n        for (var k = 0; k < other.getNumCols(); k++) {\n          sum += this.get(i, k) * other.get(k, j);\n        }\n\n        temp.set(i, j, sum);\n      }\n    }\n\n    return temp;\n  };\n};\n\nMatrix.identity = function (rows, cols) {\n  var temp = new Matrix(rows, cols);\n\n  for (var i = 0; i < rows; i++) {\n    for (var j = 0; j < cols; j++) {\n      temp.set(i, j, (i + 1) / (j + 1) === 1 ? 1 : 0);\n    }\n  }\n\n  return temp;\n};\n\nMatrix.isIdentity = function (matrix) {\n  for (var i = 0; i < matrix.getNumRows(); i++) {\n    for (var j = 0; j < matrix.getNumCols(); j++) {\n      if ((i + 1) / (j + 1) === 1 && matrix.get(i, j) !== 1) {\n        return false;\n      }\n    }\n  }\n\n  return true;\n};\n\nMatrix.isEqual = function (m1, m2) {\n  if (m1._rows !== m2._rows || m1._cols !== m2._cols || m1._elements.length !== m2._elements.length) return false;\n\n  for (var i = 0; i < m1._rows; i++) {\n    for (var j = 0; j < m1._cols; j++) {\n      if (m1.get(i, j) !== m2.get(i, j)) {\n        return false;\n      }\n    }\n  }\n\n  return true;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Matrix);\n\n//# sourceURL=webpack:///./src/Math/Matrix.js?");

/***/ }),

/***/ "./src/compression/lzw.js":
/*!********************************!*\
  !*** ./src/compression/lzw.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  encode: function encode(s) {\n    if (!s) return s;\n    var dict = new Map(); // Use a Map!\n\n    var data = (s + \"\").split(\"\");\n    var out = [];\n    var currChar;\n    var phrase = data[0];\n    var code = 256;\n\n    for (var i = 1; i < data.length; i++) {\n      currChar = data[i];\n\n      if (dict.has(phrase + currChar)) {\n        phrase += currChar;\n      } else {\n        out.push(phrase.length > 1 ? dict.get(phrase) : phrase.charCodeAt(0));\n        dict.set(phrase + currChar, code);\n        code++;\n        phrase = currChar;\n      }\n    }\n\n    out.push(phrase.length > 1 ? dict.get(phrase) : phrase.charCodeAt(0));\n\n    for (var i = 0; i < out.length; i++) {\n      out[i] = String.fromCharCode(out[i]);\n    }\n\n    return out.join(\"\");\n  },\n  decode: function decode(s) {\n    var dict = new Map();\n    var data = (s + \"\").split(\"\");\n    var currChar = data[0];\n    var oldPhrase = currChar;\n    var out = [currChar];\n    var code = 256;\n    var phrase;\n\n    for (var i = 1; i < data.length; i++) {\n      var currCode = data[i].charCodeAt(0);\n\n      if (currCode < 256) {\n        phrase = data[i];\n      } else {\n        phrase = dict.has(currCode) ? dict.get(currCode) : oldPhrase + currChar;\n      }\n\n      out.push(phrase);\n      currChar = phrase.charAt(0);\n      dict.set(code, oldPhrase + currChar);\n      code++;\n      oldPhrase = phrase;\n    }\n\n    return out.join(\"\");\n  }\n};\n\n//# sourceURL=webpack:///./src/compression/lzw.js?");

/***/ }),

/***/ "./src/images/ImageEditor.js":
/*!***********************************!*\
  !*** ./src/images/ImageEditor.js ***!
  \***********************************/
/*! exports provided: GreyScaleMode, ImageEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GreyScaleMode\", function() { return GreyScaleMode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageEditor\", function() { return ImageEditor; });\n/* harmony import */ var _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Math/Matrix */ \"./src/Math/Matrix.js\");\n\nvar m = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 3, [1, 2, 0, 0, 1, 0, 0, 0, 1]);\nvar n = new _Math_Matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"](3, 3, [4, 0, 2, 5, 2, 1, 4, 1, 2]);\nvar o = m.mult(n);\nconsole.log(o.transpose());\nconsole.log(_Math_Matrix__WEBPACK_IMPORTED_MODULE_0__[\"default\"].identity(8, 8));\nvar GreyScaleMode = Object.freeze({\n  Mean: 0,\n  Max: 2,\n  Min: 4,\n  Median: 8,\n  Luma: 16\n});\nvar ImageEditor = function ImageEditor() {\n  // median grey scale func\n  function getMedianPixelVal(r, g, b) {\n    var sortedPixel = [r, g, b];\n    sortedPixel.sort();\n    return sortedPixel[1];\n  }\n\n  function lumaGreyScale(r, g, b) {\n    return r * 0.2126 + g * 0.7152 + b * 0.0722;\n  }\n\n  var greyScaleFuncs = new Map([[undefined, function (r, g, b) {\n    return (r + g + b) / 3;\n  }], [GreyScaleMode.Mean, function (r, g, b) {\n    return (r + g + b) / 3;\n  }], [GreyScaleMode.Max, function (r, g, b) {\n    return Math.max(r, g, b);\n  }], [GreyScaleMode.Min, function (r, g, b) {\n    return Math.min(r, g, b);\n  }], [GreyScaleMode.Median, function (r, g, b) {\n    return getMedianPixelVal(r, g, b);\n  }], [GreyScaleMode.Luma, function (r, g, b) {\n    return lumaGreyScale(r, g, b);\n  }]]);\n\n  this.convertToGreyScale = function (imgData, mode) {\n    for (var i = 0; i < imgData.data.length; i += 4) {\n      var r = void 0,\n          g = void 0,\n          b = void 0;\n      r = imgData.data[i];\n      g = imgData.data[i + 1];\n      b = imgData.data[i + 2];\n      var gsFunc = greyScaleFuncs.get(mode);\n      var gsVal = gsFunc(r, g, b);\n      imgData.data[i] = gsVal;\n      imgData.data[i + 1] = gsVal;\n      imgData.data[i + 2] = gsVal;\n    }\n  };\n\n  this.invertColors = function (imgData) {\n    for (var i = 0; i < imgData.data.length; i += 4) {\n      imgData.data[i] = 255 - imgData.data[i];\n      imgData.data[i + 1] = 255 - imgData.data[i + 1];\n      imgData.data[i + 2] = 255 - imgData.data[i + 2];\n      imgData.data[i + 3] = 255;\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/images/ImageEditor.js?");

/***/ }),

/***/ "./src/images/ImageLoader.js":
/*!***********************************!*\
  !*** ./src/images/ImageLoader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ImageEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageEditor */ \"./src/images/ImageEditor.js\");\n\n\nvar ImageLoader = function ImageLoader() {\n  this.getBase64FromImageUrl = function (url) {\n    return new Promise(function (resolve, reject) {\n      var img = new Image();\n      var imgEditor = new _ImageEditor__WEBPACK_IMPORTED_MODULE_0__[\"ImageEditor\"]();\n      img.setAttribute(\"crossOrigin\", \"anonymous\");\n\n      img.onload = function () {\n        var canvas = document.createElement(\"canvas\");\n        canvas.width = this.width;\n        canvas.height = this.height;\n        var ctx = canvas.getContext(\"2d\");\n        ctx.drawImage(this, 0, 0);\n        document.body.appendChild(canvas);\n        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n        imgEditor.convertToGreyScale(imgData, _ImageEditor__WEBPACK_IMPORTED_MODULE_0__[\"GreyScaleMode\"].Luma);\n        ctx.putImageData(imgData, 0, 0);\n        resolve(ctx.getImageData(0, 0, canvas.width, canvas.height));\n      };\n\n      img.onerror = function () {\n        reject(\"Could not load the image url provided\");\n      };\n\n      img.src = url;\n    });\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageLoader);\n\n//# sourceURL=webpack:///./src/images/ImageLoader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _compression_lzw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compression/lzw */ \"./src/compression/lzw.js\");\n/* harmony import */ var _compression_lzw__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_compression_lzw__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_ImageLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ImageLoader */ \"./src/images/ImageLoader.js\");\n\n\nvar loremIpsum = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies justo nec arcu tristique sagittis. Nunc et suscipit sapien. In iaculis egestas turpis nec tincidunt. Etiam ante metus, vestibulum ut nisl sit amet, malesuada ultrices est. Sed vel dapibus diam, non fermentum lorem. Praesent sit amet quam sem. Sed varius sapien eget enim pellentesque iaculis. Proin efficitur egestas elit. Sed feugiat turpis vel orci ultrices, non interdum justo ultricies. Pellentesque id lobortis lacus. Duis tristique pharetra accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam justo est, varius in orci quis, viverra rutrum mi. Nulla pretium turpis ex, bibendum luctus velit sollicitudin at. Pellentesque suscipit nisl eu commodo tempor. Integer sodales, purus et vulputate congue, diam nisl aliquam orci, eu blandit tellus sem et urna. Mauris commodo dolor porta tellus scelerisque, ut tincidunt massa lacinia. Ut tincidunt eros nibh, sed cursus quam ultrices sed. Aliquam scelerisque quis lectus sed viverra. Nam vitae congue ex. Nam ac semper lorem. Vestibulum dapibus dui non fringilla iaculis. Aenean ex odio, eleifend eu lacinia vel, porttitor eu neque. Nulla et pharetra sem. Nunc vitae sem at enim faucibus accumsan at id dolor. Donec non sapien vel diam tristique aliquet. Sed eget pellentesque dolor, id sagittis lacus. Vivamus euismod nec nibh sed eleifend. Nam maximus tellus sed tincidunt congue. Curabitur et quam in sapien finibus eleifend. Nullam iaculis urna quis eros volutpat, ut gravida justo lobortis. Mauris porttitor fermentum arcu, et tempus tellus viverra sit amet. Morbi pharetra pretium magna quis interdum. Nam sed condimentum nisi. Integer eu rutrum eros. Donec tristique nisl ut elementum auctor. Nam enim nulla, pellentesque sed ex porttitor, pulvinar accumsan metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur dictum urna elit, ut efficitur ex facilisis in. Nunc ac justo nec orci pharetra blandit. Nulla commodo fermentum turpis, ac pulvinar lectus tincidunt viverra. Sed lacus nulla, pulvinar a cursus quis, venenatis porttitor nibh. Mauris auctor malesuada rhoncus. Sed imperdiet, mi quis efficitur convallis, erat sem semper ipsum, ac dapibus tellus orci nec lacus. Morbi ut felis quis orci sagittis placerat nec et lacus. Sed sit amet nibh neque. Vestibulum rhoncus in turpis convallis tincidunt. Vivamus luctus sem in nisi dapibus, et iaculis purus convallis. Aenean consectetur, neque eu egestas accumsan, justo risus imperdiet velit, ac hendrerit ante diam sit amet felis. Integer laoreet eu diam sit amet malesuada. Fusce blandit nunc leo, tristique vestibulum justo rhoncus eget. Integer tempus nec libero vel facilisis. Phasellus quis arcu ex. Morbi bibendum mauris leo, sed fermentum nunc ornare eget. Nulla imperdiet congue vestibulum. Proin ut ante fermentum, commodo arcu at, tempor nunc. Nunc massa sem, dignissim sed ultricies eu, laoreet in mi. Morbi vitae nisi eu mi sagittis porttitor. Donec imperdiet ipsum ornare massa aliquam ornare. Etiam suscipit sit amet turpis in dictum. Suspendisse varius interdum mi sed molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vel est id metus luctus rhoncus in ut felis. Maecenas iaculis libero purus, et venenatis justo elementum eu. Curabitur suscipit orci viverra, blandit nisi eget, consequat mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\";\nvar imageLoader = new _images_ImageLoader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nimageLoader.getBase64FromImageUrl('assets/lion.jpg').then(function (imageData) {\n  console.log(imageData.data);\n})[\"catch\"](function (err) {\n  console.error(err);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });