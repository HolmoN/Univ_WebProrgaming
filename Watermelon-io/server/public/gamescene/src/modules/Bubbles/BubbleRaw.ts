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

  public get x(): number {
    return this.body.position.x;
  }
  public get y(): number {
    return this.body.position.y;
  }

  ///----------
  ///メソッド
  ///----------

  //バブルの定義をする
  public constructor(x: number, y: number, r: number, definition: Matter.IBodyDefinition | undefined) {
    if (definition) {
      this.body = Matter.Bodies.circle(x, y, r, definition);
    }
    else {
      this.body = Matter.Bodies.circle(x, y, r, {
        label: "bubble_",
        render: {
          fillStyle: 'red',
        }
      });
    }

  }

  //バブルの位置をセットする
  public SetPosition(x: number, y: number) {
    Matter.Body.setPosition(this.body, { x, y });
  }

  //静的設定
  public SetStatic(isStatic: boolean) {
    this.body.isStatic = isStatic;
  }

  //衝突処理はここでは行わない
  //より上位のクラスで行うものとする
}