import * as Matter from 'matter-js';
import BubbleRaw from "./BubbleRaw";

const { Engine, Render, Runner } = Matter; // Matter.jsからとってくる

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

    container.addEventListener("click", ()=> 
    {
        bubble :BubbeRaw = 
    });
  }

  init() {}
}

window.onload = () => {
  const container = document.querySelector(".container");
  // とりあえずゲーム作成
  const game = new BubbeGame(container);
  // とりあえず初期化すると思う
  game.init();
}