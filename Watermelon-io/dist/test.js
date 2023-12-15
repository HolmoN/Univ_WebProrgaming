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

/***/ "./src/Gauge.ts":
/*!**********************!*\
  !*** ./src/Gauge.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TestGauge = void 0;\nvar TestGauge = /** @class */ (function () {\n    function TestGauge() {\n        this.fillAmount = 0;\n        this.display = false;\n        this.width = 100;\n        this.height = 10;\n        this.borderWidth = 2;\n        this.drawGauge();\n    }\n    TestGauge.prototype.Display = function (display) {\n        this.display = display;\n        this.drawGauge();\n    };\n    Object.defineProperty(TestGauge.prototype, \"FillAmount\", {\n        set: function (value) {\n            this.fillAmount = Math.max(0, Math.min(1, value));\n            this.drawGauge();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    TestGauge.prototype.setGaugeSize = function (width, height) {\n        this.width = width;\n        this.height = height;\n        this.drawGauge();\n    };\n    //ここで描画\n    TestGauge.prototype.drawGauge = function () {\n        var gaugeElement = document.querySelector('.main');\n        if (gaugeElement) {\n            if (this.display) {\n                gaugeElement.style.width = \"\".concat(this.width, \"px\");\n                gaugeElement.style.height = \"\".concat(this.height, \"px\");\n                gaugeElement.style.position = 'relative';\n                gaugeElement.style.border = \"\".concat(this.borderWidth, \"px solid black\");\n                var fillHeight = this.fillAmount * (this.height - 2 * this.borderWidth);\n                var fillElement = document.createElement('div');\n                fillElement.style.width = \"\".concat(this.width - 2 * this.borderWidth, \"px\");\n                fillElement.style.height = \"\".concat(fillHeight, \"px\");\n                fillElement.style.position = 'absolute';\n                fillElement.style.left = \"\".concat(this.borderWidth, \"px\");\n                fillElement.style.bottom = \"\".concat(this.borderWidth, \"px\");\n                // ゲージの色をFillAmountに応じて変化させるクラスを追加\n                fillElement.classList.add('fill');\n                gaugeElement.innerHTML = '';\n                gaugeElement.appendChild(fillElement);\n            }\n        }\n    };\n    return TestGauge;\n}());\nexports.TestGauge = TestGauge;\n\n\n//# sourceURL=webpack://watermelon-io/./src/Gauge.ts?");

/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Gauge_1 = __webpack_require__(/*! ./Gauge */ \"./src/Gauge.ts\");\n// TestGauge クラスのインスタンスを作成\nvar gauge = new Gauge_1.TestGauge();\ngauge.setGaugeSize(20, 200);\ngauge.Display(true);\n// テスト用にゲージのランダムな変化を実現する関数\nvar updateFillAmount = function () {\n    var newFillAmount = Math.random() * 3 - 1;\n    gauge.FillAmount = newFillAmount;\n    console.log('Updated FillAmount:', newFillAmount);\n};\n// （テスト用）500ミリ秒ごとにゲージのフィル量を変更\nsetInterval(updateFillAmount, 500);\n\n\n//# sourceURL=webpack://watermelon-io/./src/test.ts?");

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