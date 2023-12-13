import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv5 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 30);

        //画像の貼り付けを行う
        //this.body.render.sprite = ;
        this.body.render.fillStyle = "red";
    }
}