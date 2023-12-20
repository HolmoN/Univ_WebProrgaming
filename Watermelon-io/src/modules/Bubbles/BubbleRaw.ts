import * as Matter from 'matter-js';
import { MatterEnvironment } from '../MatterEnvironment';

export class BubbleRaw {

  ///----------
  ///ローカル変数
  ///----------
  protected body: Matter.Body;

  ///----------
  ///プロパティ
  ///----------
  public get Body(): Matter.Body {
    return this.body;
  }

  //バブルの定義をする
  public constructor(x: number, y: number, r: number) {
    this.body = Matter.Bodies.circle(x, y, r, {
      label: "bubble_",
    });
    this.body.render.fillStyle = "blue";
  }

  //衝突処理はここでは行わない
  //より上位のクラスで行うものとする
}