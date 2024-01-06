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

/***/ "./src/GameCall.ts":
/*!*************************!*\
  !*** ./src/GameCall.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameCall = void 0;\nvar GameCall = /** @class */ (function () {\n    function GameCall() {\n        this._readyImageElement = document.getElementById('ready');\n        this._startImageElement = document.getElementById('start');\n        this._finishImageElement = document.getElementById('finish');\n        this._rightImageElement = document.getElementById('right');\n        this._leftImageElement = document.getElementById('left');\n    }\n    /**\n     * Readyと表示する\n     */\n    GameCall.prototype.DisplayReady = function (display) {\n        if (!display) {\n            this._readyImageElement.style.visibility = 'hidden';\n        }\n        else {\n            this._readyImageElement.style.visibility = 'visible';\n        }\n    };\n    /**\n     * Startと表示する\n     */\n    GameCall.prototype.DisplayStart = function (display) {\n        if (!display) {\n            this._startImageElement.style.visibility = 'hidden';\n        }\n        else {\n            this._startImageElement.style.visibility = 'visible';\n        }\n    };\n    /**\n     * Finishと表示する\n     */\n    GameCall.prototype.DisplayFinish = function (display) {\n        if (!display) {\n            this._finishImageElement.style.visibility = 'hidden';\n        }\n        else {\n            this._finishImageElement.style.visibility = 'visible';\n        }\n    };\n    /**\n     * WinLoseと表示する\n     * @param rightWin trueなら右側が勝ち\n     */\n    GameCall.prototype.DisplayWL = function (display, rightWin) {\n        if (display) {\n            this._rightImageElement.style.visibility = 'visible';\n            this._leftImageElement.style.visibility = 'visible';\n            if (!rightWin) {\n                this._rightImageElement.src = 'img_win.png';\n                this._leftImageElement.src = 'img_lose.png';\n            }\n            else {\n                this._leftImageElement.src = 'img_win.png';\n                this._rightImageElement.src = 'img_lose.png';\n            }\n        }\n        else {\n            this._rightImageElement.style.visibility = 'hidden';\n            this._leftImageElement.style.visibility = 'hidden';\n        }\n    };\n    return GameCall;\n}());\nexports.GameCall = GameCall;\n\n\n//# sourceURL=webpack://watermelon-io/./src/GameCall.ts?");

/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar GameCall_1 = __webpack_require__(/*! ./GameCall */ \"./src/GameCall.ts\");\nwindow.onload = function () {\n    var testcall = new GameCall_1.GameCall();\n    document.addEventListener('keydown', function (event) {\n        if (event.key === 'w' || event.key === 'W') {\n            // W キーが押された時の処理\n            console.log(\"w\");\n            //testcall.DisplayReady(true);\n            //testcall.DisplayStart(true);\n            //testcall.DisplayFinish(true);\n            testcall.DisplayWL(true, true);\n        }\n    });\n};\n\n\n//# sourceURL=webpack://watermelon-io/./src/test.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/test.ts");
/******/ 	
/******/ })()
;