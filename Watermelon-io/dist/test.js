/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Next.ts":
/*!*********************!*\
  !*** ./src/Next.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Next = void 0;\nvar Next = /** @class */ (function () {\n    // コンストラクタ\n    function Next() {\n        // container プロパティが未定義の場合、初期化を行う\n        if (!Next.container) {\n            // 新しい div 要素を作成し、\"next-container\" クラスを追加\n            Next.container = document.createElement(\"div\");\n            Next.container.classList.add(\"next-container\");\n            // 5つの窓を作成\n            for (var i = 0; i < 5; i++) {\n                var windowDiv = document.createElement(\"div\");\n                windowDiv.classList.add(\"window\");\n                // 一番上の窓は \"large\" クラスを追加\n                if (i === 0) {\n                    windowDiv.classList.add(\"large\");\n                }\n                // それぞれの窓に対応するバブル（画像要素）を作成し、\"bubble\" クラスを追加\n                var bubble = document.createElement(\"img\");\n                bubble.classList.add(\"bubble\");\n                windowDiv.appendChild(bubble);\n                // 作成した窓とバブルを container に追加\n                Next.container.appendChild(windowDiv);\n            }\n            // container を body 要素に追加\n            document.body.appendChild(Next.container);\n        }\n    }\n    // 画面を描写するかを切り替えるメソッド\n    Next.prototype.Display = function (display) {\n        // container の表示・非表示を切り替え\n        Next.container.style.display = display ? \"flex\" : \"none\";\n    };\n    // Next のオブジェクトを表示するメソッド\n    Next.prototype.UpdateNext = function (nexts) {\n        // container 内のすべての窓を取得\n        var windows = Next.container.getElementsByClassName(\"window\");\n        // 各窓に対して処理を行う\n        for (var i = 0; i < 5; i++) {\n            var windowDiv = windows[i];\n            var imagePath = \"../img/NextTest/\" + nexts[i].toString();\n            // 各窓内のバブル（画像要素）を取得\n            var bubble = windowDiv.querySelector(\".bubble\");\n            // バブルに画像のパスを設定\n            bubble.src = imagePath;\n            // 一番上の窓の場合、バブルのサイズを大きくする\n            if (i === 0) {\n                bubble.style.width = \"60px\";\n                bubble.style.height = \"60px\";\n            }\n            else {\n                // それ以外の窓の場合、バブルのサイズを小さくする\n                bubble.style.width = \"30px\";\n                bubble.style.height = \"30px\";\n            }\n            bubble.classList.remove(\"hidden\");\n        }\n    };\n    return Next;\n}());\nexports.Next = Next;\n\n\n//# sourceURL=webpack://watermelon-io/./src/Next.ts?");

/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// test.ts\nvar Next_1 = __webpack_require__(/*! ./Next */ \"./src/Next.ts\");\nwindow.onload = function () {\n    var cNextElement = document.querySelector(\".CNext\");\n    if (cNextElement) {\n        // インスタンスを作成\n        var next = new Next_1.Next();\n        // ゲージの表示を有効にする\n        next.Display(true);\n        // テスト用データ（画像パス）を指定\n        var nextImages = [\n            \"image1.jpg\",\n            \"image2.jpg\",\n            \"image3.jpg\",\n            \"image4.jpg\",\n            \"image5.jpg\"\n        ];\n        // テスト用に UpdateNext メソッドを呼び出し\n        next.UpdateNext(nextImages);\n        // Next クラスの UI を CNext クラスの要素に追加\n        cNextElement.appendChild(Next_1.Next.container);\n    }\n};\n\n\n//# sourceURL=webpack://watermelon-io/./src/test.ts?");

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