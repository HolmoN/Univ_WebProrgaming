/*
import { MatterEnvironment, Canvas } from "./modules/MatterEnvironment.js";

//画面要素を取得する
const htmlElement = document.querySelector<HTMLElement>(".container");
if (htmlElement == null) return;
let canvas = new Canvas(htmlElement, 400, 600);

//MatterEnvironmentを初期化する
MatterEnvironment.Init(canvas);

let ho = new hoge();
ho.hogehuga("ww");
let bole = Matter.circle(1, 1, 1);
const bubble = Bodies.circle(WIDTH / 2, 30, 20);
console.log(bole.position.x);
*/

const { Engine, Render, Runner, Bodies, Composite } = Matter; // Matter.jsからとってくる

const WIDTH = 420; // 横幅
const HEIGHT = 700; // 鷹さ

class BubbeGame {
    engine;
    render;
    runner;
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
        container.addEventListener("click", this.handleClick.bind(this));
    }

    init() { }

    handleClick() {
        // 描画位置のX座標、y座標、円の半径を渡す
        const bubble = Bodies.circle(WIDTH / 2, 30, 20);
        Composite.add(this.engine.world, [bubble]);
    }
}

window.onload = () => {
    const container = document.querySelector(".container");
    // とりあえずゲーム作成
    const game = new BubbeGame(container);
    // とりあえず初期化すると思う
    game.init();
}