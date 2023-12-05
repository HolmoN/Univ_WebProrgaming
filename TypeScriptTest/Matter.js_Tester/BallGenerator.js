import * as Matter from 'matter-js';
import { BubbleRaw } from "./BubbleRaw";
const { Engine, Render, Runner } = Matter;
const WIDTH = 420; // 横幅
const HEIGHT = 700; // 鷹さ
class BubbeGame {
    constructor(container) {
        this.engine = Engine.create();
        this.render = Render.create({
            element: container,
            engine: this.engine,
            options: {
                width: WIDTH,
                height: HEIGHT,
            },
        });
        this.runner = Runner.create();
        Render.run(this.render);
        Runner.run(this.runner, this.engine);
        container.addEventListener("click", () => {
            let bubble = new BubbleRaw(0, 0, 2);
            bubble.InstantiateBabble(this.engine);
        });
    }
    init() { }
}
window.onload = () => {
    const container = document.querySelector(".container");
    if (container == null)
        return;
    // とりあえずゲーム作成
    const game = new BubbeGame(container);
    // とりあえず初期化すると思う
    game.init();
};
