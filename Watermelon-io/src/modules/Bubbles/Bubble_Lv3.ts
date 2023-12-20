import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv3 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 20);
        this.body.label = "bubble_3";

        //画像の貼り付けを行う
        //this.body.render.sprite = ;
        this.body.render.fillStyle = "red";
    }
}