"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Next = void 0;
var Next = /** @class */ (function () {
    // コンストラクタ
    function Next() {
        // container プロパティが未定義の場合、初期化を行う
        if (!Next.container) {
            // 新しい div 要素を作成し、"next-container" クラスを追加
            Next.container = document.createElement("div");
            Next.container.className = "next-container";
            // 5つの窓を作成
            for (var i = 0; i < 5; i++) {
                var windowDiv = document.createElement("div");
                windowDiv.classList.add("window");
                // 一番上の窓は "large" クラスを追加
                if (i === 0) {
                    windowDiv.classList.add("large");
                }
                // それぞれの窓に対応するバブル（画像要素）を作成し、"bubble" クラスを追加
                var bubble = document.createElement("img");
                bubble.classList.add("bubble");
                windowDiv.appendChild(bubble);
                // 作成した窓とバブルを container に追加
                Next.container.appendChild(windowDiv);
            }
            //<CNext>下に移動
            var CNext = document.querySelector(".Cnext");
            if (CNext) {
                CNext.appendChild(Next.container);
            }
            else {
                console.error("Element with class '.Cnext' not found");
            }
        }
    }
    // 画面を描写するかを切り替えるメソッド
    Next.prototype.Display = function (display) {
        // container の表示・非表示を切り替え
        Next.container.style.display = display ? "flex" : "none";
    };
    // Next のオブジェクトを表示するメソッド
    Next.prototype.UpdateNext = function (nexts) {
        // container 内のすべての窓を取得
        var windows = Next.container.getElementsByClassName("window");
        // 各窓に対して処理を行う
        for (var i = 0; i < 5; i++) {
            var windowDiv = windows[i];
            var imagePath = nexts[i];
            // 各窓内のバブル（画像要素）を取得
            var bubble = windowDiv.querySelector(".bubble");
            // バブルに画像のパスを設定
            bubble.src = imagePath;
            // 一番上の窓の場合、バブルのサイズを大きくする
            if (i === 0) {
                bubble.style.width = "60px";
                bubble.style.height = "60px";
            }
            else {
                // それ以外の窓の場合、バブルのサイズを小さくする
                bubble.style.width = "30px";
                bubble.style.height = "30px";
            }
            bubble.classList.remove("hidden");
        }
    };
    return Next;
}());
exports.Next = Next;
