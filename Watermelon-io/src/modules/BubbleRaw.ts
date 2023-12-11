import * as Matter from 'matter-js';

export class BubbleRaw {

  ///----------
  ///ローカル変数
  ///----------
  private body :Matter.Body;
  private mes :string = "ほげ";

  ///----------
  ///プロパティ
  ///----------
  public get Body() :Matter.Body{
    console.log(this.mes);
    return this.body;
  }

  //バブルの定義をする
  public constructor(x :number, y :number, r :number) {
    this.body = Matter.Bodies.circle(x, y, r);
  }
}




