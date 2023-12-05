import * as Matter from 'matter-js';

namespace HOGE{
  class BubbleRaw {

    private bubble :Matter.Body;
  
    //バブルの定義をする
    public constructor(x :number, y :number, r :number) {
      this.bubble = Matter.Bodies.circle(x, y, r);
    }
  
    //バブルを生成する
    public InstantiateBabble(engine :Matter.Engine){
      Matter.Composite.add(engine.world, this.bubble);
    }
  }
}




