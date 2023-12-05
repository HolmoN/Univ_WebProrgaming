import * as Matter from 'matter-js';

class BubbeGame {
    constructor(container) {
  　  /* 略 */
      // クリック時の制御メソッドを登録
      container.addEventListener("click", this.handleClick.bind(this));
    }
   
    handleClick() {
      // 描画位置のX座標、y座標、円の半径を渡す
      const bubble = Bodies.circle(WIDTH / 2, 30, 20);
      Composite.add(this.engine.world, [bubble]);
    }
  }