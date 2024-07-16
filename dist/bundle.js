/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ga+Maamli&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --primary-color: #6ca700;\n  --border-radius: 8px;\n  --shadowBox: 5px 5px 5px lightgray;\n  font-family: 'Quicksand';\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 10fr 1fr;\n}\n\nheader {\n  height: 10vh;\n  display: flex;\n  justify-content: right;\n  align-items: center;\n}\n\nnav {\n  display: flex;\n  padding-right: 2em;\n  gap: 1em;\n}\n\n.navBar {\n  padding: 1em 0.5em 1em 0.5em;\n  color: white;\n  background-color: var(--primary-color);\n  border: solid;\n  border-color: var(--primary-color);\n  padding: 1em 3em 1em 3em;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadowBox);\n  font-weight: bold;\n  font-family: 'Quicksand';\n}\n\n.navBar:hover {\n  color: var(--primary-color);\n  background-color: white;\n  cursor: pointer;\n}\n\n.content {\n  display: grid;\n}\n\n.homeBlock {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n}\n\n.title {\n  font-family: 'Ga Maamli', sans-serif;\n  font-size: 4vw;\n  text-align: center;\n  color: var(--primary-color);\n}\n\nimg {\n  width: 25vw;\n  height: auto;\n  margin-left: 3em;\n  box-shadow: 5px 5px 5px gray;\n  border-radius: 0 16px 0 16px;\n}\n\n.image {\n  display: flex;\n  justify-self: right;\n  z-index: 1001;\n}\n\n.text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.headline {\n  font-size: 1.3em;\n  color: black;\n  text-align: center;\n  width: 50%;\n  align-self: center;\n}\n\n.menuList {\n  display: grid;\n  grid-template-rows: 1fr, 6fr;\n  align-items: center;\n}\n\n.dishes {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding-top: 3em;\n}\n\n.dishesCategory {\n  font-family: 'Ga Maamli', sans-serif;\n  font-size: 3rem;\n  margin-bottom: 2em;\n  color: var(--primary-color);\n}\n\n.item {\n  color: black;\n  min-width: 20vh;\n  max-width: 40vw;\n  border-radius: var(--border-radius);\n  border: 1px solid black;\n  font-family: 'Quicksand';\n  font-size: 1.3rem;\n  padding: 2em;\n  margin: 1em;\n  box-shadow: var(--shadowBox);\n  transition: all 0.3s ease;\n}\n\n.item:hover {\n  transform: scale(1.1);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n  z-index: 10;\n}\n\n.elements {\n  width: 35vw;\n  padding: 1rem;\n  border: 1px solid black;\n  border-radius: var(--border-radius);\n  box-shadow: var(--shadowBox);\n  margin-bottom: 1em;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.elements h2 {\n  color: var(--primary-color);\n  font-family: 'Ga Maamli', sans-serif;\n}\n\n.elements p,\n.elements ul {\n  color: black;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1.2rem;\n}\n\n.elements ul {\n  list-style: none;\n  padding: 0;\n}\n\n.elements ul li {\n  padding: 0.5rem 0;\n}\n\nfooter {\n  padding-right: 2em;\n  text-align: right;\n  align-content: end;\n}\n\n.credit {\n  left: 75%;\n}\n\n.fa-github {\n  color: black;\n  font-size: 24px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* Font */\n\n.container {\n  position: fixed;\n  width: 20vw;\n  height: 100vh;\n  --s: 60px;\n  --c1: var(--primary-color);\n  --c2: #406102;\n  --_g: radial-gradient(\n    25% 25% at 25% 25%,\n    var(--c1) 99%,\n    rgba(0, 0, 0, 0) 101%\n  );\n  background:\n    var(--_g) var(--s) var(--s) / calc(2 * var(--s)) calc(2 * var(--s)),\n    var(--_g) 0 0 / calc(2 * var(--s)) calc(2 * var(--s)),\n    radial-gradient(50% 50%, var(--c2) 98%, rgba(0, 0, 0, 0)) 0 0 / var(--s)\n      var(--s),\n    repeating-conic-gradient(var(--c2) 0 50%, var(--c1) 0 100%)\n      calc(0.5 * var(--s)) 0 / calc(2 * var(--s)) var(--s);\n  z-index: 1000;\n}\n\n.no-show {\n  display: none;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://5.restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _credits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credits */ \"./src/credits.js\");\n\n\n\nconst restaurantInfo = (function () {\n  const name = 'Leaf & Root';\n  const address = '123 Greenhaven Lane, EcoCity, EC 98765';\n\n  const contact = {\n    phone: '(555) 123-4567',\n    email: 'info@leafandroot.eco',\n    website: 'www.leafandroot.eco',\n  };\n\n  const operatingHours = {\n    mondayToThursday: '11:00 AM - 9:00 PM',\n    fridayToSaturday: '11:00 AM - 10:00 PM',\n    sunday: '10:00 AM - 8:00 PM',\n  };\n\n  const culinaryTeam = [\n    {\n      name: 'Chef Amara Greenfield',\n      specialization:\n        'Integrating exotic herbs and plants into recipes, ensuring every dish is both flavorful and nutritious.',\n    },\n    {\n      name: 'Chef Leo Bloom',\n      specialization:\n        'Brings a touch of French elegance to the vegan dishes, making each meal a fusion of tradition and innovation.',\n    },\n  ];\n\n  const displayRestaurantInfo = () => {\n    const content = document.querySelector('.content');\n    content.innerHTML = '';\n    content.style.display = 'flex';\n    content.style.flexDirection = 'column';\n    content.style.alignItems = 'center';\n    content.style.marginLeft = '20vw';\n\n    // Infos\n    const aboutUs = document.createElement('div');\n    aboutUs.className = 'elements';\n    const aboutUsTitle = document.createElement('h2');\n    aboutUsTitle.textContent = 'About Us';\n    aboutUs.appendChild(aboutUsTitle);\n\n    const address = document.createElement('p');\n    address.innerHTML = `<b>${restaurantInfo.name}</b><br>Address: ${restaurantInfo.address}`;\n    aboutUs.appendChild(address);\n\n    const contact = document.createElement('p');\n    contact.innerHTML = `Phone: ${restaurantInfo.contact.phone}<br>Email: ${restaurantInfo.contact.email}<br>Website: <a href=\"http://${restaurantInfo.contact.website}\" target=\"_blank\">${restaurantInfo.contact.website}</a>`;\n    aboutUs.appendChild(contact);\n    content.appendChild(aboutUs);\n\n    // Hours\n    const hours = document.createElement('div');\n    hours.className = 'elements';\n    const hoursTitle = document.createElement('h2');\n    hoursTitle.textContent = 'Operating Hours';\n    hours.appendChild(hoursTitle);\n\n    const hoursSchedule = document.createElement('ul');\n    hoursSchedule.innerHTML = `\n\t<li><b>Monday - Thursday:</b><br>${restaurantInfo.operatingHours.mondayToThursday}</li>\n\t<li><b>Friday - Saturday:</b><br>${restaurantInfo.operatingHours.fridayToSaturday}</li>\n\t<li><b>Sunday:</b><br>${restaurantInfo.operatingHours.sunday}</li>\n\t`;\n    hours.appendChild(hoursSchedule);\n    content.appendChild(hours);\n\n    // Team\n    const team = document.createElement('div');\n    team.className = 'elements';\n    const teamTitle = document.createElement('h2');\n    teamTitle.textContent = 'Culinary Team';\n    team.appendChild(teamTitle);\n\n    restaurantInfo.culinaryTeam.forEach((chef) => {\n      const chefInfo = document.createElement('p');\n      chefInfo.innerHTML = `<b>${chef.name}</b>: ${chef.specialization}`;\n      team.appendChild(chefInfo);\n    });\n    content.appendChild(team);\n  };\n\n  return {\n    name,\n    address,\n    contact,\n    operatingHours,\n    culinaryTeam,\n    displayRestaurantInfo,\n  };\n})();\n\nconst about = document.querySelector('#about');\n\nabout.addEventListener('click', () => {\n  restaurantInfo.displayRestaurantInfo();\n  (0,_credits__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('about');\n});\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/credits.js":
/*!************************!*\
  !*** ./src/credits.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ changeCredits)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nfunction changeCredits(page) {\n  const creditsPicture = document.querySelector('.creditsPicture');\n  const credits = document.querySelector('.credits');\n\n  if (page === 'home' && creditsPicture.classList.contains('no-show')) {\n\t  creditsPicture.classList.remove('no-show');\n\t  credits.classList.add('no-show');\n  } else {\n\tcreditsPicture.classList.add('no-show');\n\tcredits.classList.remove('no-show');\n  }\n};\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/credits.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayHome)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _credits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credits */ \"./src/credits.js\");\n\n\n\nconst home = document.querySelector('#home');\n\nhome.addEventListener('click', () => {\n  displayHome();\n});\n\nfunction displayHome() {\n  const content = document.querySelector('.content');\n  content.innerHTML = '';\n  content.style.display = 'grid';\n  content.style.gridTemplateColumns = '';\n  content.style.marginLeft = '';\n\n  // Block\n  const homeBlock = document.createElement('div');\n  homeBlock.classList = 'homeBlock';\n  content.appendChild(homeBlock);\n\n  // Image\n  const image = document.createElement('div');\n  image.className = 'image';\n  const img = document.createElement('img');\n  img.src = '../images/Restaurant.jpg';\n  image.appendChild(img);\n  homeBlock.appendChild(image);\n\n  // Text\n  const text = document.createElement('div');\n  text.className = 'text';\n  const title = document.createElement('h1');\n  title.className = 'title';\n  title.textContent = 'Leaf & Root';\n  text.appendChild(title);\n  const description = document.createElement('p');\n  description.className = 'headline';\n  description.innerHTML = `Indulge in a vibrant culinary journey at Leaf & Root, your go-to destination for delicious and innovative vegetarian cuisine.<br><br>Savor the harmony of nature's finest ingredients, artfully crafted into dishes that celebrate the essence of plant-based dining.<br><br>Discover the true taste of freshness with every bite!`;\n  text.appendChild(description);\n  homeBlock.appendChild(text);\n\n  (0,_credits__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('home');\n}\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _credits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credits.js */ \"./src/credits.js\");\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_credits_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('home');\n});\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _credits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credits */ \"./src/credits.js\");\n\n\n\nconst menuList = (function () {\n  const menu = [];\n\n  const type = [\n    'Starters',\n    'Salads',\n    'Main Courses',\n    'Sides',\n    'Desserts',\n    'Beverages',\n  ];\n\n  const addDish = (dish) => {\n    menu.push(dish);\n  };\n\n  const displayMenu = (menuItems) => {\n    const dishes = document.createElement('div');\n    dishes.className = 'dishes';\n    menuItems.appendChild(dishes);\n\n    type.forEach((type) => {\n      console.log(type);\n      const category = document.createElement('div');\n      category.className = 'dishesCategory';\n      category.id = type;\n      category.textContent = type;\n      dishes.appendChild(category);\n      menu.forEach((dish, index) => {\n        if (dish.category === type) {\n          const item = document.createElement('div');\n          item.className = 'item';\n          item.id = `item ${index}`;\n          item.innerHTML = `<b>${dish.name}</b> <br><br>`;\n          item.innerHTML += `${dish.description}<br><br>`;\n          item.innerHTML += `<b>${dish.price}</b> <br>`;\n          category.appendChild(item);\n        }\n      });\n    });\n  };\n\n  const getMenuSize = () => {\n    return menu.length;\n  };\n\n  return {\n    addDish,\n    displayMenu,\n    getMenuSize,\n  };\n})();\n\nclass Dish {\n  constructor(name, category, description, price) {\n    (this.name = name),\n      (this.category = category),\n      (this.description = description),\n      (this.price = price);\n  }\n}\n\nfunction createMenu() {\n  const dish1 = new Dish(\n    'Stuffed avocado',\n    'Starters',\n    'Fresh avocado halves stuffed with a mix of quinoa, black beans, corn, tomatoes, and cilantro, drizzled with lime dressing.',\n    '$8.99',\n  );\n  menuList.addDish(dish1);\n\n  const dish2 = new Dish(\n    'Spicy Roasted Cauliflower Bites',\n    'Starters',\n    'Cauliflower florets roasted in a spicy buffalo sauce, served with a side of vegan ranch dressing.',\n    '$7.49',\n  );\n  menuList.addDish(dish2);\n\n  const dish3 = new Dish(\n    'Rainbow Garden Salad',\n    'Salads',\n    'Mixed greens, cherry tomatoes, cucumbers, shredded carrots, red cabbage, and sunflower seeds, served with a balsamic vinaigrette.',\n    '$9.99',\n  );\n  menuList.addDish(dish3);\n\n  const dish4 = new Dish(\n    'Kale & Quinoa Salad',\n    'Salads',\n    'Massaged kale, cooked quinoa, dried cranberries, toasted almonds, and a tangy lemon-tahini dressing.',\n    '$10.99',\n  );\n  menuList.addDish(dish4);\n\n  const dish5 = new Dish(\n    'Chickpea & Spinach Curry',\n    'Main Courses',\n    'Chickpeas and spinach simmered in a rich tomato and coconut milk curry, served with basmati rice and naan bread.',\n    '$12.99',\n  );\n  menuList.addDish(dish5);\n\n  const dish6 = new Dish(\n    'Veggie Burger',\n    'Main Courses',\n    'House-made black bean and sweet potato patty, topped with avocado, lettuce, tomato, and vegan mayo on a whole grain bun. Served with sweet potato fries.',\n    '$11.99',\n  );\n  menuList.addDish(dish6);\n\n  const dish7 = new Dish(\n    'Tofu Stir-Fry',\n    'Main Courses',\n    'Stir-fried tofu with bell peppers, broccoli, snap peas, and carrots in a savory ginger-garlic sauce, served over brown rice.',\n    '$13.49',\n  );\n  menuList.addDish(dish7);\n\n  const dish8 = new Dish(\n    'Garlic Mashed Potatoes',\n    'Sides',\n    'Creamy mashed potatoes made with roasted garlic and vegan butter.',\n    '$4.99',\n  );\n  menuList.addDish(dish8);\n\n  const dish9 = new Dish(\n    'Seasoned Sweet Potatoes Fried',\n    'Sides',\n    'Crispy sweet potato fries seasoned with paprika and sea salt.',\n    '$4.99',\n  );\n  menuList.addDish(dish9);\n\n  const dish10 = new Dish(\n    'Chocolate Avocado Mousse',\n    'Desserts',\n    'Rich and creamy chocolate mousse made with ripe avocados, topped with fresh berries.',\n    '$6.99',\n  );\n  menuList.addDish(dish10);\n\n  const dish11 = new Dish(\n    'Coconut Lime Cheesecake',\n    'Desserts',\n    'Vegan cheesecake with a coconut crust and a tangy lime filling, garnished with coconut flakes.',\n    '$7.99',\n  );\n  menuList.addDish(dish11);\n\n  const dish12 = new Dish(\n    'Freshly Squeezed Lemonade',\n    'Beverages',\n    'Classic lemonade made with fresh lemons and a hint of mint.',\n    '$3.49',\n  );\n  menuList.addDish(dish12);\n\n  const dish13 = new Dish(\n    'Green Smoothie',\n    'Beverages',\n    'A blend of spinach, kale, banana, apple, and almond milk for a nutritious boost.',\n    '$5.99',\n  );\n  menuList.addDish(dish13);\n\n  const dish14 = new Dish(\n    'Mango Coconut Pudding',\n    'Desserts',\n    'Creamy mango pudding with a hint of coconut, topped with fresh mint and shredded coconut.',\n    '$6.99',\n  );\n  menuList.addDish(dish14);\n}\n\nconst menu = document.querySelector('#menu');\n\nmenu.addEventListener('click', () => {\n  console.log(menuList.getMenuSize());\n  if (menuList.getMenuSize() === 0) {\n    createMenu();\n  }\n\n  const content = document.querySelector('.content');\n  content.innerHTML = '';\n  content.style.gridTemplateColumns = '1fr';\n  content.style.marginLeft = '20vw';\n\n  const menuItems = document.createElement('div');\n  menuItems.classList = 'menuItems';\n  content.appendChild(menuItems);\n\n  menuList.displayMenu(menuItems);\n\n  (0,_credits__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('menu');\n});\n\n\n//# sourceURL=webpack://5.restaurant-page/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;