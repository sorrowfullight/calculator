/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* общее оформление */

.calculator {
    margin: 50px auto;
    width: 300px;
    height: 500px;
    border-radius: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    padding: 20px;
}

.buttons {
    display: grid;
    grid-template-areas: 
    "ac plus-minus percentage division"
    "seven eight nine multiplication"
    "four five six minus"
    "one two three plus"
    "theme-button zero dot equal";
    justify-items: center;
    align-items: center;
    grid-gap: 5px;
}

.button {
    border-radius: 30%;
    width: 60px;
    height: 60px;
    margin: 5px;
    text-align: center;
    justify-self: center;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.button:hover {
    filter: brightness(130%);
}

.button:active {
    filter: brightness(75%);
}

.theme-button svg:hover {
    transform: scale(1.1);
}

.display {
    height: 100px;
    margin-bottom: 10px;
    display: flex;
    align-items:last baseline;
    justify-content: flex-end;
    font-size: 50px;
    padding: 10px;
    border-radius: 20px;
}

/* темная тема */

.dark-theme .calculator {
    background: #000;
    color: #fff;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)
}

.dark-theme .button {
    color: #fff;
    background-color: #363636;
    box-shadow: 2px 2px 3px 2px rgba(255, 255, 255, 0.7);
}

.dark-theme .display {
    box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 0.7);
    color: #fff; 
}

.dark-theme .button.ac,
.dark-theme .button.plus-minus,
.dark-theme .button.percentage {
    background: #878787;
}

.dark-theme .button.division,
.dark-theme .button.multiplication,
.dark-theme .button.minus,
.dark-theme .button.plus,
.dark-theme .button.equal
 {
    background: #008b8b;
}

.dark-theme .theme-button {
    background: #7FFFD4;
}

/* светлая тема */

.light-theme .calculator {
    background: #E1E1E1;
    color: #4B4B4B;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)
}

.light-theme .button {
    color: #4B4B4B;
    background-color: #BDBCBC;
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);
}

.light-theme .display {
    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    color: #4B4B4B;
}

.light-theme .button.ac,
.light-theme .button.plus-minus,
.light-theme .button.percentage {
    background: #4B4B4B;
    color: #E1E1E1;
}

.light-theme .button.division,
.light-theme .button.multiplication,
.light-theme .button.minus,
.light-theme .button.plus,
.light-theme .button.equal
 {
    background: #2AAA8A;
    color: #E1E1E1;
}

.light-theme .theme-button {
    background: #478778;
    color: #BDBCBC;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,yCAAyC;IACzC,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;IACb;;;;;iCAK6B;IAC7B,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,mBAAmB;AACvB;;AAEA,gBAAgB;;AAEhB;IACI,gBAAgB;IAChB,WAAW;IACX;AACJ;;AAEA;IACI,WAAW;IACX,yBAAyB;IACzB,oDAAoD;AACxD;;AAEA;IACI,2DAA2D;IAC3D,WAAW;AACf;;AAEA;;;IAGI,mBAAmB;AACvB;;AAEA;;;;;;IAMI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,iBAAiB;;AAEjB;IACI,mBAAmB;IACnB,cAAc;IACd;AACJ;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,qDAAqD;IACrD,cAAc;AAClB;;AAEA;;;IAGI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;;;;;;IAMI,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,cAAc;AAClB","sourcesContent":["/* общее оформление */\n\n.calculator {\n    margin: 50px auto;\n    width: 300px;\n    height: 500px;\n    border-radius: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 30px;\n    padding: 20px;\n}\n\n.buttons {\n    display: grid;\n    grid-template-areas: \n    \"ac plus-minus percentage division\"\n    \"seven eight nine multiplication\"\n    \"four five six minus\"\n    \"one two three plus\"\n    \"theme-button zero dot equal\";\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n}\n\n.button {\n    border-radius: 30%;\n    width: 60px;\n    height: 60px;\n    margin: 5px;\n    text-align: center;\n    justify-self: center;\n    font-size: 20px;\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n}\n\n.button:hover {\n    filter: brightness(130%);\n}\n\n.button:active {\n    filter: brightness(75%);\n}\n\n.theme-button svg:hover {\n    transform: scale(1.1);\n}\n\n.display {\n    height: 100px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items:last baseline;\n    justify-content: flex-end;\n    font-size: 50px;\n    padding: 10px;\n    border-radius: 20px;\n}\n\n/* темная тема */\n\n.dark-theme .calculator {\n    background: #000;\n    color: #fff;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.dark-theme .button {\n    color: #fff;\n    background-color: #363636;\n    box-shadow: 2px 2px 3px 2px rgba(255, 255, 255, 0.7);\n}\n\n.dark-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n    color: #fff; \n}\n\n.dark-theme .button.ac,\n.dark-theme .button.plus-minus,\n.dark-theme .button.percentage {\n    background: #878787;\n}\n\n.dark-theme .button.division,\n.dark-theme .button.multiplication,\n.dark-theme .button.minus,\n.dark-theme .button.plus,\n.dark-theme .button.equal\n {\n    background: #008b8b;\n}\n\n.dark-theme .theme-button {\n    background: #7FFFD4;\n}\n\n/* светлая тема */\n\n.light-theme .calculator {\n    background: #E1E1E1;\n    color: #4B4B4B;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.light-theme .button {\n    color: #4B4B4B;\n    background-color: #BDBCBC;\n    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);\n}\n\n.light-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);\n    color: #4B4B4B;\n}\n\n.light-theme .button.ac,\n.light-theme .button.plus-minus,\n.light-theme .button.percentage {\n    background: #4B4B4B;\n    color: #E1E1E1;\n}\n\n.light-theme .button.division,\n.light-theme .button.multiplication,\n.light-theme .button.minus,\n.light-theme .button.plus,\n.light-theme .button.equal\n {\n    background: #2AAA8A;\n    color: #E1E1E1;\n}\n\n.light-theme .theme-button {\n    background: #478778;\n    color: #BDBCBC;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


// дисплей
var display = document.querySelector('.display');

// массив с данными (числа и дробные знаменатели)
var buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

// массив с операциями
var operators = ['+', '-', 'X', '/'];

// переменные для составления математического выражения
var a = '';
var b = '';
var sign = '';
var finish = false;

// переменные для функции смены темы
var content = document.querySelector('main');
var themeButton = document.querySelector('.theme-button');

// обработчик с функцией очистки выражения
document.querySelector('.ac').addEventListener('click', function () {
  a = '';
  b = '';
  sign = '';
  finish = false;
  display.textContent = "0";
});

// обработчик на кнопки
document.querySelector('.buttons').addEventListener('click', function (evt) {
  // курсор исчезает на пространстве за кнопками
  if (!evt.target.classList.contains('button')) return;

  // подготовка выражения с помощью конкатенации    
  var button = evt.target.textContent;
  if (buttons.includes(button)) {
    if (b === '' && sign === '') {
      if (a === "0" && button !== ".") {
        a = '';
      }
      if (a.length < 10) {
        a += button;
        display.textContent = a;
      }
    } else if (a !== '' && b !== '' && finish) {
      b = button;
      finish = false;
      display.textContent = b;
    } else {
      if (b === "0" && button !== ".") {
        b = '';
      }
      if (b.length < 10) {
        b += button;
        display.textContent = b;
      }
    }
  }

  // Смена знака
  if (evt.target.classList.contains('plus-minus')) {
    if (b !== '') {
      b = -Number(b);
      display.textContent = b;
    } else if (a !== '') {
      a = -Number(a);
      display.textContent = a;
    }
  }

  // вычисление процента
  if (evt.target.classList.contains('percentage')) {
    if (b === "" && sign === "") {
      a = Number(a) / 100;
      display.textContent = a;
      if (String(a).length > 10) {
        display.textContent = 'Infinity';
      }
    } else if (a !== "" && b !== "") {
      b = Number(a) * Number(b) / 100;
      display.textContent = b;
      if (String(b).length > 10) {
        display.textContent = 'Infinity';
      }
    }
    return;
  }

  // вывод оператора на экран
  if (operators.includes(button)) {
    sign = button;
    display.textContent = sign;
    return;
  }

  // вычисления
  if (button === '=') {
    if (b === '') {
      b = a;
    }
    switch (sign) {
      case "+":
        a = Number(a) + Number(b);
        break;
      case "-":
        a = Number(a) - Number(b);
        break;
      case "X":
        a = Number(a) * Number(b);
        break;
      case "/":
        if (b === '0') {
          display.textContent = 'Error';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = Number(a) / Number(b);
        break;
    }
    // проверка вычисления на длину
    if (String(a).length <= 10) {
      finish = true;
      display.textContent = a;
    } else {
      finish = true;
      display.textContent = 'Infinity';
    }
  }
});

// смена темы приложения
themeButton.addEventListener('click', function () {
  content.classList.toggle('light-theme');
  content.classList.toggle('dark-theme');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map