import { TitleScene } from "./TitleScene";


window.onload = () => {
    const TITLE_SCENE :TitleScene = new TitleScene();

    // タイトル画面の表示
    TITLE_SCENE.Display(true);

    TITLE_SCENE.StartButton.addEventListener('click', (event: MouseEvent) => {
        console.log("ボタンがクリックされました");
    });
}
