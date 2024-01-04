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

/***/ "./server/public/titlescene/index.ts":
/*!*******************************************!*\
  !*** ./server/public/titlescene/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TitleScene = void 0;\nvar TitleScene = /** @class */ (function () {\n    function TitleScene() {\n        var _this = this;\n        // HTML要素の取得\n        this._buttonElement = document.getElementById('start');\n        this._matchingText = document.getElementById('matchingText');\n        // クリックイベントのリスナーを登録\n        this._buttonElement.addEventListener('click', function (event) {\n            console.log(\"ボタンがクリックされました\");\n            //ボタンがクリックされたらボタンが消える\n            _this._buttonElement.className = \"hidden\";\n            //マッチングを開始する\n            _this._matchingText.style.display = 'block';\n        });\n    }\n    Object.defineProperty(TitleScene.prototype, \"StartButton\", {\n        /**\n         * スタートボタンのオブジェクトを返す\n         */\n        get: function () {\n            return this._buttonElement;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    /**\n     * 画面を描写するかを切り替える\n     */\n    TitleScene.prototype.Display = function (display) {\n        if (this._buttonElement && this._matchingText) {\n            if (!display) {\n                // display = falseはすべて非表示にする\n                this._buttonElement.style.visibility = \"hidden\";\n                this._matchingText.style.visibility = \"hidden\";\n            }\n            else {\n            }\n        }\n    };\n    /**\n     * マッチングしたかどうかの結果を受け取る\n     */\n    TitleScene.prototype.Matched = function (matched) {\n        if (this._buttonElement && this._matchingText) {\n            if (!matched) {\n                // マッチング結果に基づいて画像ボタンを再描写\n                this._buttonElement.className = \"start\";\n                this._matchingText.style.display = 'none';\n            }\n            else {\n            }\n        }\n    };\n    return TitleScene;\n}());\nexports.TitleScene = TitleScene;\n\n\n//# sourceURL=webpack://watermelon-io/./server/public/titlescene/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./server/public/titlescene/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;