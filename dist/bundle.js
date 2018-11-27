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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/base.css */ \"./src/style/base.css\");\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_preloader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/preloader.css */ \"./src/style/preloader.css\");\n/* harmony import */ var _style_preloader_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_preloader_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/init */ \"./src/js/init.js\");\n/* harmony import */ var _js_htmlElem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/htmlElem */ \"./src/js/htmlElem.js\");\n/* harmony import */ var _js_searchClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/searchClick */ \"./src/js/searchClick.js\");\n/* harmony import */ var _js_mouse_swipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/mouse-swipe */ \"./src/js/mouse-swipe.js\");\n/* harmony import */ var _js_search_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/search-form */ \"./src/js/search-form.js\");\n/* harmony import */ var _js_dotsClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/dotsClick */ \"./src/js/dotsClick.js\");\n/* harmony import */ var _js_touch_swipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/touch-swipe */ \"./src/js/touch-swipe.js\");\n/* harmony import */ var _js_pageToken__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/pageToken */ \"./src/js/pageToken.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.body.appendChild(_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"loadng\"])\r\nwindow.onload = () => {\r\n    Object(_js_init__WEBPACK_IMPORTED_MODULE_2__[\"init\"])()\r\n    document.body.removeChild(_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"loadng\"])\r\n}\r\n\r\n_js_search_form__WEBPACK_IMPORTED_MODULE_6__[\"btn\"].addEventListener('click', _js_searchClick__WEBPACK_IMPORTED_MODULE_4__[\"searchClick\"]);\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"dots_block\"].addEventListener('click', _js_dotsClick__WEBPACK_IMPORTED_MODULE_7__[\"dotsClick\"])\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"container\"].addEventListener('mousedown', _js_mouse_swipe__WEBPACK_IMPORTED_MODULE_5__[\"mouseDown\"])\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"container\"].addEventListener('mouseup', _js_mouse_swipe__WEBPACK_IMPORTED_MODULE_5__[\"mouseUp\"])\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"container\"].addEventListener('touchmove', _js_touch_swipe__WEBPACK_IMPORTED_MODULE_8__[\"moveTouch\"])\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"container\"].addEventListener('touchend', _js_touch_swipe__WEBPACK_IMPORTED_MODULE_8__[\"endTouch\"])\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"container\"].addEventListener('touchstart', _js_touch_swipe__WEBPACK_IMPORTED_MODULE_8__[\"startTouch\"])\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"prev_page\"].addEventListener('click', _js_pageToken__WEBPACK_IMPORTED_MODULE_9__[\"getPrevPage\"])\r\n_js_htmlElem__WEBPACK_IMPORTED_MODULE_3__[\"next_page\"].addEventListener('click', _js_pageToken__WEBPACK_IMPORTED_MODULE_9__[\"getNextPage\"])\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/anim-swipe.js":
/*!******************************!*\
  !*** ./src/js/anim-swipe.js ***!
  \******************************/
/*! exports provided: leftSwipe, rightSwipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leftSwipe\", function() { return leftSwipe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rightSwipe\", function() { return rightSwipe; });\n/* harmony import */ var _dotsSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dotsSelect.js */ \"./src/js/dotsSelect.js\");\n/* harmony import */ var _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElem.js */ \"./src/js/htmlElem.js\");\n\r\n\r\nlet target_dot = 0;\r\nlet next_dot_i = 0;\r\nfunction leftSwipe() {\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.left = '-100vw'\r\n    setTimeout(() => {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.opacity = '0'\r\n    }, 250)\r\n    setTimeout(() => {\r\n        Object(_dotsSelect_js__WEBPACK_IMPORTED_MODULE_0__[\"nextDot\"])(target_dot, next_dot_i)\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.left = '100vw'\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.opacity = '1'\r\n    }, 300)\r\n    setTimeout(() => {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.left = '0vw'\r\n    }, 350)\r\n}\r\n\r\nfunction rightSwipe() {\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.left = '100vw'\r\n    setTimeout(() => {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.opacity = '0'\r\n    }, 250)\r\n    setTimeout(() => {\r\n        Object(_dotsSelect_js__WEBPACK_IMPORTED_MODULE_0__[\"prevDot\"])(target_dot, next_dot_i)\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.left = '-100vw'\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.opacity = '1'\r\n    }, 300)\r\n    setTimeout(() => {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].style.left = '0vw'\r\n    }, 350)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/anim-swipe.js?");

/***/ }),

/***/ "./src/js/create-result.js":
/*!*********************************!*\
  !*** ./src/js/create-result.js ***!
  \*********************************/
/*! exports provided: createVideoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createVideoCard\", function() { return createVideoCard; });\n/* harmony import */ var _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElem.js */ \"./src/js/htmlElem.js\");\n/* harmony import */ var _searchClick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchClick.js */ \"./src/js/searchClick.js\");\n\r\n\r\nfunction createVideoCard(start, end) {\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].innerHTML = \"\"\r\n    for (let i = start; i < end; i++) {\r\n        const video_card = document.createElement('div')\r\n        video_card.className = \"video-card\"\r\n        try {\r\n            const thumb = document.createElement('img')\r\n            thumb.setAttribute('src', _searchClick_js__WEBPACK_IMPORTED_MODULE_1__[\"res_data\"][i].thumb)\r\n\r\n            const link = document.createElement('a')\r\n            link.setAttribute('href', _searchClick_js__WEBPACK_IMPORTED_MODULE_1__[\"res_data\"][i].link)\r\n            link.setAttribute('target', '_blank')\r\n            link.appendChild(thumb)\r\n\r\n            const title = document.createElement('h1')\r\n            title.innerHTML = `<a href=${link} target=_blank>${_searchClick_js__WEBPACK_IMPORTED_MODULE_1__[\"res_data\"][i].title}</a>`\r\n\r\n            const author = document.createElement('span')\r\n            author.innerText = 'Author: ' + _searchClick_js__WEBPACK_IMPORTED_MODULE_1__[\"res_data\"][i].author\r\n            author.className = \"video-author\"\r\n\r\n            const date = document.createElement('span')\r\n            date.innerText = 'Published at: ' + _searchClick_js__WEBPACK_IMPORTED_MODULE_1__[\"res_data\"][i].date\r\n            date.className = \"video-date\"\r\n\r\n            const descr = document.createElement('span')\r\n            descr.innerText = _searchClick_js__WEBPACK_IMPORTED_MODULE_1__[\"res_data\"][i].descr\r\n            descr.className = \"video-descr\"\r\n\r\n            const view = document.createElement('span')\r\n            view.innerText = _searchClick_js__WEBPACK_IMPORTED_MODULE_1__[\"res_data\"][i].view + ' viewed'\r\n            view.className = \"video-view\"\r\n\r\n            video_card.appendChild(link)\r\n            video_card.appendChild(title)\r\n            video_card.appendChild(author)\r\n            video_card.appendChild(view)\r\n            video_card.appendChild(date)\r\n            video_card.appendChild(descr)\r\n            _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].appendChild(video_card)\r\n        } catch {}\r\n    }\r\n\r\n    document.body.appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"])\r\n    document.body.appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"])\r\n    document.body.appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"block_button\"])\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/create-result.js?");

/***/ }),

/***/ "./src/js/createDots.js":
/*!******************************!*\
  !*** ./src/js/createDots.js ***!
  \******************************/
/*! exports provided: count_video_in_page, createDots */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"count_video_in_page\", function() { return count_video_in_page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDots\", function() { return createDots; });\n/* harmony import */ var _searchClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchClick.js */ \"./src/js/searchClick.js\");\n/* harmony import */ var _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElem.js */ \"./src/js/htmlElem.js\");\n/* harmony import */ var _search_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-form.js */ \"./src/js/search-form.js\");\n/* harmony import */ var _create_result_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-result.js */ \"./src/js/create-result.js\");\n\r\n\r\n\r\n\r\n\r\nlet count_video_in_page = 4;\r\n\r\nfunction createDots() {\r\n    const width_window_medium = document.documentElement.clientWidth < 1320 && document.documentElement.clientWidth > 1024\r\n    const width_window_little = document.documentElement.clientWidth < 1024\r\n    if (width_window_medium) {\r\n        count_video_in_page = 3\r\n    }\r\n    if (width_window_little) {\r\n        count_video_in_page = 1\r\n    }\r\n    let dots = Math.ceil(Object.keys(_searchClick_js__WEBPACK_IMPORTED_MODULE_0__[\"res_data\"]).length / count_video_in_page)\r\n    let i = 0;\r\n    let c = 1\r\n    while (i < dots) {\r\n        const dot_elem = document.createElement('div')\r\n        dot_elem.className = \"dot-elem\"\r\n        dot_elem.style.background = '#FF2B2B'\r\n        if (i === 0) {\r\n            dot_elem.style.background = '#fff'\r\n        }\r\n        dot_elem.innerText = i + 1\r\n        dot_elem.id = c\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"dots_block\"].appendChild(dot_elem)\r\n        i++\r\n        c += count_video_in_page\r\n    }\r\n    Object(_create_result_js__WEBPACK_IMPORTED_MODULE_3__[\"createVideoCard\"])(1, +count_video_in_page + 1)\r\n    _search_form_js__WEBPACK_IMPORTED_MODULE_2__[\"btn\"].disabled = false\r\n    document.body.removeChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"loadng\"])\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/createDots.js?");

/***/ }),

/***/ "./src/js/dotsClick.js":
/*!*****************************!*\
  !*** ./src/js/dotsClick.js ***!
  \*****************************/
/*! exports provided: dotsClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dotsClick\", function() { return dotsClick; });\n/* harmony import */ var _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElem.js */ \"./src/js/htmlElem.js\");\n/* harmony import */ var _create_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-result.js */ \"./src/js/create-result.js\");\n/* harmony import */ var _createDots_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDots.js */ \"./src/js/createDots.js\");\n\r\n\r\n\r\n\r\nfunction dotsClick(event) {\r\n    const target = event.target;\r\n    if (target.className !== 'dot-elem') {\r\n        return\r\n    }\r\n    for (let i = 0; i < _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes.length; i++) {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[i].style.background = '#FF2B2B'\r\n    }\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].style.left = '-100vw'\r\n    setTimeout(() => {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].style.opacity = '0'\r\n    }, 250)\r\n    setTimeout(() => {\r\n        target.style.background = '#fff'\r\n        Object(_create_result_js__WEBPACK_IMPORTED_MODULE_1__[\"createVideoCard\"])(target.id, (+_createDots_js__WEBPACK_IMPORTED_MODULE_2__[\"count_video_in_page\"]) + (+target.id))\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].style.left = '100vw'\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].style.opacity = '1'\r\n    }, 300)\r\n    setTimeout(() => {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"container\"].style.left = '0vw'\r\n    }, 350)\r\n};\r\n\n\n//# sourceURL=webpack:///./src/js/dotsClick.js?");

/***/ }),

/***/ "./src/js/dotsSelect.js":
/*!******************************!*\
  !*** ./src/js/dotsSelect.js ***!
  \******************************/
/*! exports provided: prevDot, nextDot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prevDot\", function() { return prevDot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nextDot\", function() { return nextDot; });\n/* harmony import */ var _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElem.js */ \"./src/js/htmlElem.js\");\n/* harmony import */ var _create_result_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-result.js */ \"./src/js/create-result.js\");\n/* harmony import */ var _createDots_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDots.js */ \"./src/js/createDots.js\");\n\r\n\r\n\r\nfunction prevDot(target_dot, next_dot_i) {\r\n    for (let i = 0; i < _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes.length; i++) {\r\n        if (_htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[i].style.background === 'rgb(255, 255, 255)') {\r\n            target_dot = _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[i]\r\n            next_dot_i = i\r\n        }\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[i].style.background = '#FF2B2B'\r\n    }\r\n    try {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[next_dot_i - 1].style.background = '#FFF'\r\n        const sum = (+target_dot.id) - (+_createDots_js__WEBPACK_IMPORTED_MODULE_2__[\"count_video_in_page\"])\r\n        Object(_create_result_js__WEBPACK_IMPORTED_MODULE_1__[\"createVideoCard\"])(sum, target_dot.id)\r\n    } catch {\r\n        const last = _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[_htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes.length - 1]\r\n        last.style.background = '#FFF'\r\n        try {\r\n            Object(_create_result_js__WEBPACK_IMPORTED_MODULE_1__[\"createVideoCard\"])(last.id, (+last.id) + (+_createDots_js__WEBPACK_IMPORTED_MODULE_2__[\"count_video_in_page\"]))\r\n        } catch {}\r\n    }\r\n}\r\n\r\nfunction nextDot(target_dot, next_dot_i) {\r\n    for (let i = 0; i < _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes.length; i++) {\r\n        if (_htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[i].style.background === 'rgb(255, 255, 255)') {\r\n            target_dot = _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[i]\r\n            next_dot_i = i\r\n        }\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[i].style.background = '#FF2B2B'\r\n    }\r\n    try {\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[next_dot_i + 1].style.background = '#FFF'\r\n        const sum = (+target_dot.id) + (+_createDots_js__WEBPACK_IMPORTED_MODULE_2__[\"count_video_in_page\"])\r\n        const sum2 = +sum + (+_createDots_js__WEBPACK_IMPORTED_MODULE_2__[\"count_video_in_page\"])\r\n        Object(_create_result_js__WEBPACK_IMPORTED_MODULE_1__[\"createVideoCard\"])(sum, sum2)\r\n    } catch {\r\n        const last = _htmlElem_js__WEBPACK_IMPORTED_MODULE_0__[\"dots_block\"].childNodes[0]\r\n        last.style.background = '#FFF'\r\n        try {\r\n            Object(_create_result_js__WEBPACK_IMPORTED_MODULE_1__[\"createVideoCard\"])(1, +_createDots_js__WEBPACK_IMPORTED_MODULE_2__[\"count_video_in_page\"] + 1)\r\n        } catch {}\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/dotsSelect.js?");

/***/ }),

/***/ "./src/js/htmlElem.js":
/*!****************************!*\
  !*** ./src/js/htmlElem.js ***!
  \****************************/
/*! exports provided: loadng, container, dots_block, block_button, count_page, next_page, prev_page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadng\", function() { return loadng; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"container\", function() { return container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dots_block\", function() { return dots_block; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"block_button\", function() { return block_button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"count_page\", function() { return count_page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"next_page\", function() { return next_page; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prev_page\", function() { return prev_page; });\n/* harmony import */ var _searchClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchClick.js */ \"./src/js/searchClick.js\");\n\r\n\r\nconst loadng = document.createElement('div')\r\nloadng.className = 'load'\r\nloadng.innerHTML = '<hr/><hr/><hr/><hr/>'\r\n\r\nconst container = document.createElement('div')\r\ncontainer.className = \"video-container\"\r\n\r\nconst dots_block = document.createElement('div')\r\ndots_block.className = \"dots-block\"\r\n\r\nconst block_button = document.createElement('div')\r\nblock_button.className = \"block-button\"\r\n\r\nconst count_page = document.createElement('span')\r\ncount_page.className = \"count-page\"\r\n\r\nconst next_page = document.createElement('button')\r\nnext_page.className = \"button-next\"\r\nnext_page.textContent = 'more'\r\n\r\nconst prev_page = document.createElement('button')\r\nprev_page.disabled = true\r\nprev_page.className = \"button-prev\"\r\nprev_page.textContent = 'back'\r\n\n\n//# sourceURL=webpack:///./src/js/htmlElem.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _search_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form.js */ \"./src/js/search-form.js\");\n\r\nfunction init() {\r\n    gapi.client.setApiKey('AIzaSyDVdE4LwpceNaEd3UTHg4ESHrBjnWwne_E');\r\n    gapi.client.load(\"youtube\", \"v3\", function () {\r\n        _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"btn\"].disabled = false\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/mouse-swipe.js":
/*!*******************************!*\
  !*** ./src/js/mouse-swipe.js ***!
  \*******************************/
/*! exports provided: mouseDown, mouseUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mouseDown\", function() { return mouseDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mouseUp\", function() { return mouseUp; });\n/* harmony import */ var _anim_swipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim-swipe.js */ \"./src/js/anim-swipe.js\");\n\r\nlet down = 0;\r\nlet up = 0;\r\n\r\nfunction mouseDown(e) {\r\n    if (e.which != 1) {\r\n        return\r\n    }\r\n    down = e.clientX\r\n}\r\n\r\nfunction mouseUp(e) {\r\n    if (e.which != 1) {\r\n        return\r\n    }\r\n    up = e.clientX\r\n    if (down - up > 200) {\r\n        Object(_anim_swipe_js__WEBPACK_IMPORTED_MODULE_0__[\"leftSwipe\"])()\r\n    }\r\n    if (up - down > 200) {\r\n        Object(_anim_swipe_js__WEBPACK_IMPORTED_MODULE_0__[\"rightSwipe\"])()\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/mouse-swipe.js?");

/***/ }),

/***/ "./src/js/pageToken.js":
/*!*****************************!*\
  !*** ./src/js/pageToken.js ***!
  \*****************************/
/*! exports provided: getPrevPage, getNextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPrevPage\", function() { return getPrevPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNextPage\", function() { return getNextPage; });\n/* harmony import */ var _search_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form.js */ \"./src/js/search-form.js\");\n/* harmony import */ var _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElem.js */ \"./src/js/htmlElem.js\");\n/* harmony import */ var _search_result_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-result.js */ \"./src/js/search-result.js\");\n/* harmony import */ var _createDots_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDots.js */ \"./src/js/createDots.js\");\n/* harmony import */ var _create_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-result.js */ \"./src/js/create-result.js\");\n/* harmony import */ var _searchClick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchClick.js */ \"./src/js/searchClick.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet count_click_token = 1\r\n\r\nfunction getPrevPage(e) {\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"next_page\"].disabled = true\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"prev_page\"].disabled = true\r\n    e.preventDefault();\r\n    count_click_token--\r\n    console.log(count_click_token)\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"next_page\"].disabled = false\r\n    document.body.appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"loadng\"])\r\n    _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"btn\"].disabled = true\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].innerHTML = \"\"\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"dots_block\"].innerHTML = \"\"\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"count_page\"].innerText = `${count_click_token} of ${_searchClick_js__WEBPACK_IMPORTED_MODULE_5__[\"res_data\"][1].totalPageToken}`\r\n    Object(_search_result_js__WEBPACK_IMPORTED_MODULE_2__[\"searchRes\"])(_searchClick_js__WEBPACK_IMPORTED_MODULE_5__[\"res_data\"], _searchClick_js__WEBPACK_IMPORTED_MODULE_5__[\"res_data\"][1].prevPageToken)\r\n    setTimeout(() => {\r\n        Object(_createDots_js__WEBPACK_IMPORTED_MODULE_3__[\"createDots\"])()\r\n        Object(_create_result_js__WEBPACK_IMPORTED_MODULE_4__[\"createVideoCard\"])(1, +_createDots_js__WEBPACK_IMPORTED_MODULE_3__[\"count_video_in_page\"] + 1)\r\n        _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"btn\"].disabled = false\r\n        if (count_click_token !== 1) {\r\n            _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"prev_page\"].disabled = false\r\n            _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"next_page\"].disabled = false\r\n        }\r\n    }, 1000)\r\n}\r\nfunction getNextPage(e) {\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"next_page\"].disabled = true\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"prev_page\"].disabled = true\r\n    e.preventDefault();\r\n    count_click_token++\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"prev_page\"].disabled = false\r\n    document.body.appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"loadng\"])\r\n    _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"btn\"].disabled = 'true'\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].innerHTML = \"\"\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"dots_block\"].innerHTML = \"\"\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"count_page\"].innerText = `${count_click_token} of ${_searchClick_js__WEBPACK_IMPORTED_MODULE_5__[\"res_data\"][1].totalPageToken}`\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"block_button\"].appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"count_page\"])\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"block_button\"].appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"prev_page\"])\r\n    Object(_search_result_js__WEBPACK_IMPORTED_MODULE_2__[\"searchRes\"])(_searchClick_js__WEBPACK_IMPORTED_MODULE_5__[\"res_data\"], _searchClick_js__WEBPACK_IMPORTED_MODULE_5__[\"res_data\"][1].nextPageToken)\r\n    setTimeout(() => {\r\n        Object(_createDots_js__WEBPACK_IMPORTED_MODULE_3__[\"createDots\"])()\r\n        Object(_create_result_js__WEBPACK_IMPORTED_MODULE_4__[\"createVideoCard\"])(1, +_createDots_js__WEBPACK_IMPORTED_MODULE_3__[\"count_video_in_page\"] + 1)\r\n        _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"btn\"].disabled = false\r\n        if (count_click_token !== _searchClick_js__WEBPACK_IMPORTED_MODULE_5__[\"res_data\"][1].totalPageToken) {\r\n            _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"next_page\"].disabled = false\r\n            _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"prev_page\"].disabled = false\r\n        }\r\n    }, 1000)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/pageToken.js?");

/***/ }),

/***/ "./src/js/search-form.js":
/*!*******************************!*\
  !*** ./src/js/search-form.js ***!
  \*******************************/
/*! exports provided: query, btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btn\", function() { return btn; });\nconst from = document.createElement('form')\r\nconst query = document.createElement('input')\r\nconst btn = document.createElement('input')\r\n\r\nfrom.setAttribute('action', '#')\r\n\r\nquery.id = \"search\"\r\nquery.setAttribute('placeholder', 'Type something...')\r\nquery.setAttribute('value', 'javascript')\r\nquery.setAttribute('autocomplete', 'off')\r\nquery.className = \"input-text-search\"\r\n\r\nbtn.id = \"btn-sumbit\"\r\nbtn.setAttribute('type', 'submit')\r\nbtn.setAttribute('value', 'Search')\r\nbtn.className = \"input-btn-search\"\r\nbtn.disabled = 'true'\r\n\r\nfrom.appendChild(query)\r\nfrom.appendChild(btn)\r\ndocument.body.appendChild(from)\r\n\n\n//# sourceURL=webpack:///./src/js/search-form.js?");

/***/ }),

/***/ "./src/js/search-result.js":
/*!*********************************!*\
  !*** ./src/js/search-result.js ***!
  \*********************************/
/*! exports provided: searchRes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchRes\", function() { return searchRes; });\n/* harmony import */ var _search_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form.js */ \"./src/js/search-form.js\");\n\r\nfunction searchRes(res_data, pageToken) {\r\n    const api_key = 'AIzaSyDVdE4LwpceNaEd3UTHg4ESHrBjnWwne_E'\r\n    const request = gapi.client.youtube.search.list({\r\n        q: _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"query\"].value,\r\n        part: 'snippet',\r\n        order: 'viewCount',\r\n        type: 'video',\r\n        pageToken: pageToken,\r\n        maxResults: 15\r\n    });\r\n    request.execute((response) => {\r\n        const results = response.result;\r\n        results.items.forEach((item, i) => {\r\n            const xhr = new XMLHttpRequest();\r\n            xhr.open('GET', `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${api_key}`, true);\r\n            xhr.send();\r\n            xhr.onreadystatechange = () => {\r\n                if (xhr.readyState != 4) {\r\n                    return\r\n                } else {\r\n                    res_data[i + 1] = {\r\n                        link: `https://www.youtube.com/watch?v=${item.id.videoId}`,\r\n                        title: item.snippet.title,\r\n                        thumb: item.snippet.thumbnails.medium.url,\r\n                        descr: item.snippet.description,\r\n                        author: item.snippet.channelTitle,\r\n                        view: JSON.parse(xhr.response).items[0].statistics.viewCount,\r\n                        date: item.snippet.publishedAt.match(/\\d+-\\d+-\\d+/).join(),\r\n                        totalPageToken: Math.ceil(+results.pageInfo.totalResults / +results.pageInfo.resultsPerPage),\r\n                        nextPageToken: results.nextPageToken,\r\n                        prevPageToken: results.prevPageToken\r\n                    }\r\n                }\r\n            }\r\n        });\r\n    });\r\n    return res_data\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/search-result.js?");

/***/ }),

/***/ "./src/js/searchClick.js":
/*!*******************************!*\
  !*** ./src/js/searchClick.js ***!
  \*******************************/
/*! exports provided: res_data, searchClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"res_data\", function() { return res_data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchClick\", function() { return searchClick; });\n/* harmony import */ var _search_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form.js */ \"./src/js/search-form.js\");\n/* harmony import */ var _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlElem.js */ \"./src/js/htmlElem.js\");\n/* harmony import */ var _search_result_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-result.js */ \"./src/js/search-result.js\");\n/* harmony import */ var _createDots_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createDots.js */ \"./src/js/createDots.js\");\n\r\n\r\n\r\n\r\nconst res_data = {}\r\nfunction searchClick(e) {\r\n    document.body.appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"loadng\"])\r\n    _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"btn\"].disabled = true\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"container\"].innerHTML = \"\"\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"dots_block\"].innerHTML = \"\"\r\n    e.preventDefault();\r\n    Object(_search_result_js__WEBPACK_IMPORTED_MODULE_2__[\"searchRes\"])(res_data)\r\n    setTimeout(() => {\r\n        Object(_createDots_js__WEBPACK_IMPORTED_MODULE_3__[\"createDots\"])()\r\n        _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"count_page\"].innerText = `1 of ${res_data[1].totalPageToken}`\r\n    }, 1000)\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"block_button\"].appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"next_page\"])\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"block_button\"].appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"count_page\"])\r\n    _htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"block_button\"].appendChild(_htmlElem_js__WEBPACK_IMPORTED_MODULE_1__[\"prev_page\"])\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/searchClick.js?");

/***/ }),

/***/ "./src/js/touch-swipe.js":
/*!*******************************!*\
  !*** ./src/js/touch-swipe.js ***!
  \*******************************/
/*! exports provided: startTouch, moveTouch, endTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startTouch\", function() { return startTouch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveTouch\", function() { return moveTouch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"endTouch\", function() { return endTouch; });\n/* harmony import */ var _anim_swipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anim-swipe.js */ \"./src/js/anim-swipe.js\");\n\r\n\r\nlet arr_toches = []\r\n\r\nfunction startTouch() {\r\n    arr_toches = []\r\n}\r\n\r\nfunction moveTouch(ev) {\r\n    arr_toches.push(ev.touches[0].clientX)\r\n}\r\n\r\nfunction endTouch() {\r\n    if (arr_toches[0] - arr_toches[arr_toches.length - 1] > 200) {\r\n        Object(_anim_swipe_js__WEBPACK_IMPORTED_MODULE_0__[\"leftSwipe\"])()\r\n    }\r\n    if (arr_toches[arr_toches.length - 1] - arr_toches[0] > 200) {\r\n        Object(_anim_swipe_js__WEBPACK_IMPORTED_MODULE_0__[\"rightSwipe\"])()\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/touch-swipe.js?");

/***/ }),

/***/ "./src/style/base.css":
/*!****************************!*\
  !*** ./src/style/base.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/base.css?");

/***/ }),

/***/ "./src/style/preloader.css":
/*!*********************************!*\
  !*** ./src/style/preloader.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/preloader.css?");

/***/ })

/******/ });