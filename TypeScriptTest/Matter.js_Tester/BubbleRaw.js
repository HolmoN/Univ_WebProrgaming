import * as Matter from 'matter-js';
export class BubbleRaw {
    //バブルの定義をする
    constructor(x, y, r) {
        this.bubble = Matter.Bodies.circle(x, y, r);
    }
    //バブルを生成する
    InstantiateBabble(engine) {
        Matter.Composite.add(engine.world, this.bubble);
    }
}
