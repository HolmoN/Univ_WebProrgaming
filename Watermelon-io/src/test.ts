// test.ts
import { Next } from "./Next";

window.onload = () => {
    const cNextElement = document.querySelector(".CNext");

    if (cNextElement) {
        // インスタンスを作成
        const next = new Next();

        // ゲージの表示を有効にする
        next.Display(false);

        // テスト用データ（画像パス）を指定
        const nextImages = [
            "image1.jpg",
            "image2.jpg",
            "image3.jpg",
            "image4.jpg",
            "image5.jpg"
        ];

        // テスト用に UpdateNext メソッドを呼び出し
        next.UpdateNext(nextImages);

        // Next クラスの UI を CNext クラスの要素に追加
        cNextElement.appendChild(Next.container);
    }
};
