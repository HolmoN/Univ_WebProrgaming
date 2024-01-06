"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TitleScene_1 = require("./TitleScene");
window.onload = function () {
    var TITLE_SCENE = new TitleScene_1.TitleScene();
    // タイトル画面の表示
    TITLE_SCENE.Display(true);
    TITLE_SCENE.StartButton.addEventListener('click', function (event) {
        console.log("ボタンがクリックされました");
    });
};
