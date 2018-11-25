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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/init.js */ \"./src/js/init.js\");\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/base.css */ \"./src/style/base.css\");\n/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_search_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/search-form.js */ \"./src/js/search-form.js\");\n/* harmony import */ var _js_search_result_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/search-result.js */ \"./src/js/search-result.js\");\n/* harmony import */ var _js_create_result_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/create-result.js */ \"./src/js/create-result.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = ()=>{\r\n    Object(_js_init_js__WEBPACK_IMPORTED_MODULE_0__[\"init\"])() \r\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/create-result.js":
/*!*********************************!*\
  !*** ./src/js/create-result.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search_result_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-result.js */ \"./src/js/search-result.js\");\n/* harmony import */ var _search_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-form.js */ \"./src/js/search-form.js\");\n\r\n \r\nconst res_data = {}\r\n\r\nconst container = document.createElement('div')    \r\ncontainer.className = \"video-container\"\r\n\r\nconst dots_block = document.createElement('div') \r\ndots_block.className = \"dots-block\"\r\nlet count_video_in_page = 4;\r\n\r\n_search_form_js__WEBPACK_IMPORTED_MODULE_1__[\"btn\"].onclick = (e) => {    \r\n    container.innerHTML = \"\" \r\n    dots_block.innerHTML = \"\" \r\n    e.preventDefault();  \r\n  Object(_search_result_js__WEBPACK_IMPORTED_MODULE_0__[\"search_res\"])(res_data)\r\n  setTimeout(()=>{    \r\n    const width_window_medium = document.documentElement.clientWidth < 1320 && document.documentElement.clientWidth > 1024\r\n    const width_window_little = document.documentElement.clientWidth < 1024\r\n    if(width_window_medium){count_video_in_page = 3}\r\n    if(width_window_little){count_video_in_page = 1}\r\n\r\n    let dots = Math.ceil(Object.keys(res_data).length/count_video_in_page)\r\n    let i = 0;\r\n    let c = 1\r\n    while (i<dots) {       \r\n        const dot_elem = document.createElement('div') \r\n        dot_elem.className = \"dot-elem\"\r\n       dot_elem.style.background = '#FF2B2B'\r\n        if(i===0){dot_elem.style.background = '#fff'}\r\n        dot_elem.innerText = i+1      \r\n        dot_elem.id = c\r\n        dots_block.appendChild(dot_elem)\r\n        i++\r\n        c+=count_video_in_page\r\n    }    \r\n    create_video_card (1,+count_video_in_page+1)      \r\n  },1000)\r\n}\r\n\r\ndots_block.onclick = (event) =>{      \r\n    const target = event.target;  \r\n    if (target.className !== 'dot-elem'){ return}   \r\n    for(let i = 0;i<dots_block.childNodes.length;i++){          \r\n         dots_block.childNodes[i].style.background = '#FF2B2B'         \r\n        }    \r\n    target.style.background = '#fff'\r\n    create_video_card (target.id,(+count_video_in_page)+(+target.id))\r\n  };\r\n\r\n\r\nconst create_video_card = (start,end) =>{\r\n    container.innerHTML = \"\"  \r\n    for(let i = start;i<end;i++){ \r\n        const video_card = document.createElement('div')       \r\n        video_card.className = \"video-card\"\r\n\r\n        const thumb = document.createElement('img')\r\n        thumb.setAttribute('src', res_data[i].thumb)\r\n\r\n        const link = document.createElement('a')\r\n        link.setAttribute('href', res_data[i].link)\r\n        link.setAttribute('target', '_blank')\r\n        link.appendChild(thumb)\r\n\r\n        const title = document.createElement('h1')\r\n        title.innerHTML =`<a href=${link} target=_blank>${res_data[i].title}</a>`\r\n\r\n        const author = document.createElement('span')\r\n        author.innerText = 'Author: ' + res_data[i].author\r\n        author.className = \"video-author\"\r\n\r\n        const date = document.createElement('span')\r\n        date.innerText = 'Published at: ' + res_data[i].date\r\n        date.className = \"video-date\"\r\n\r\n        const descr = document.createElement('span')\r\n        descr.innerText = res_data[i].descr\r\n        descr.className = \"video-descr\"\r\n\r\n        const view = document.createElement('span')\r\n        view.innerText = res_data[i].view + ' viewed'\r\n        view.className = \"video-view\"\r\n\r\n        video_card.appendChild(link)\r\n        video_card.appendChild(title)\r\n        video_card.appendChild(author)\r\n        video_card.appendChild(view)\r\n        video_card.appendChild(date)\r\n        video_card.appendChild(descr)\r\n\r\n        container.appendChild(video_card)        \r\n      }\r\n      document.body.appendChild(container)   \r\n      document.body.appendChild(dots_block)  \r\n\r\n}\r\nlet down = 0;\r\nlet up = 0;  \r\ndocument.onmousedown = (e)=> {\r\n    if (e.which != 1) {return}        \r\n    down = e.clientX\r\n    }\r\ndocument.onmouseup = (e)=> {\r\n     if (e.which != 1) {return}\r\n     up = e.clientX     \r\n     if(down-up > 200){         \r\n        create_video_card (5,9)\r\n    }\r\n    if(up-down > 200){\r\n        create_video_card (1,5)\r\n    }\r\n    }\r\n    document.addEventListener('touchmove',f);\r\n    document.addEventListener('touchend',end);\r\n    document.addEventListener('touchstart',start);\r\nlet arr_toches = []\r\n    function start(ev){\r\n        arr_toches = []\r\n    }\r\n    function f(ev){\r\n        arr_toches.push(ev.touches[0].clientX)\r\n    }\r\n\r\n    function end(){\r\n        let target_dot = 0;\r\n        let next_dot = 0;       \r\n      if(arr_toches[0]-arr_toches[arr_toches.length-1] > 200){  \r\n        for(let i = 0;i<dots_block.childNodes.length;i++){            \r\n            if(dots_block.childNodes[i].style.background === 'rgb(255, 255, 255)'){\r\n             target_dot = dots_block.childNodes[i]\r\n             next_dot = i}\r\n             dots_block.childNodes[i].style.background = '#FF2B2B'         \r\n            }    \r\n            dots_block.childNodes[next_dot+1].style.background = '#FFF'\r\n             const sum = (+target_dot.id)+(+count_video_in_page)   \r\n             const sum2 = +sum+(+count_video_in_page)         \r\n        create_video_card(sum,sum2)\r\n    }\r\n       if(arr_toches[arr_toches.length-1]-arr_toches[0] > 200){\r\n        for(let i = 0;i<dots_block.childNodes.length;i++){            \r\n            if(dots_block.childNodes[i].style.background === 'rgb(255, 255, 255)'){\r\n             target_dot = dots_block.childNodes[i]\r\n             next_dot = i}\r\n             dots_block.childNodes[i].style.background = '#FF2B2B'         \r\n            }    \r\n            dots_block.childNodes[next_dot-1].style.background = '#FFF'\r\n             const sum = (+target_dot.id)-(+count_video_in_page) \r\n             create_video_card(sum,target_dot.id)\r\n       }\r\n   } \r\n    \n\n//# sourceURL=webpack:///./src/js/create-result.js?");

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

/***/ "./src/js/search-form.js":
/*!*******************************!*\
  !*** ./src/js/search-form.js ***!
  \*******************************/
/*! exports provided: query, btn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"btn\", function() { return btn; });\nconst from = document.createElement('form')\r\nconst query = document.createElement('input')\r\nconst btn = document.createElement('input')\r\n\r\nfrom.setAttribute('action', '#')\r\n\r\nquery.id=\"search\"\r\nquery.setAttribute('placeholder', 'Type something...')\r\nquery.setAttribute('value', 'little big')\r\nquery.setAttribute('autocomplete', 'off')\r\nquery.className = \"input-text-search\"\r\n\r\nbtn.id=\"btn-sumbit\"\r\nbtn.setAttribute('type', 'submit')\r\nbtn.setAttribute('value', 'Search')\r\nbtn.className = \"input-btn-search\"\r\nbtn.disabled = 'true'\r\n\r\nfrom.appendChild(query)\r\nfrom.appendChild(btn)\r\ndocument.body.appendChild(from)\n\n//# sourceURL=webpack:///./src/js/search-form.js?");

/***/ }),

/***/ "./src/js/search-result.js":
/*!*********************************!*\
  !*** ./src/js/search-result.js ***!
  \*********************************/
/*! exports provided: search_res */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search_res\", function() { return search_res; });\n/* harmony import */ var _search_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-form.js */ \"./src/js/search-form.js\");\n \r\nfunction search_res (res_data,callback){\r\n    const api_key = 'AIzaSyDVdE4LwpceNaEd3UTHg4ESHrBjnWwne_E'  \r\n    const request = gapi.client.youtube.search.list({\r\n    q: _search_form_js__WEBPACK_IMPORTED_MODULE_0__[\"query\"].value,\r\n    part: 'snippet',\r\n    order: 'viewCount',\r\n    type: 'video',\r\n    maxResults: 15\r\n    });\r\n    request.execute((response) => {\r\n        const results = response.result;\r\n        results.items.forEach((item, i) => { \r\n            const xhr = new XMLHttpRequest();\r\n            xhr.open('GET', `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${api_key}`, true);\r\n            xhr.send();\r\n            xhr.onreadystatechange = () => {\r\n            if (xhr.readyState != 4) {return}\r\n            else{   \r\n        res_data[i+1] = {          \r\n            link:`https://www.youtube.com/watch?v=${item.id.videoId}`,\r\n            title:item.snippet.title,\r\n            thumb:item.snippet.thumbnails.medium.url,\r\n            descr:item.snippet.description,\r\n            author:item.snippet.channelTitle,\r\n            view:JSON.parse(xhr.response).items[0].statistics.viewCount,\r\n            date:item.snippet.publishedAt.match(/\\d+-\\d+-\\d+/).join()\r\n            }}                                       \r\n            }           \r\n        });              \r\n    }); \r\nreturn res_data\r\n}\n\n//# sourceURL=webpack:///./src/js/search-result.js?");

/***/ }),

/***/ "./src/style/base.css":
/*!****************************!*\
  !*** ./src/style/base.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style/base.css?");

/***/ })

/******/ });