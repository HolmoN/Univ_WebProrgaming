import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv8 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 85);
        this.body.label = "bubble_8";

        //画像の貼り付けを行う
        //this.body.render.sprite = ;
        this.body.render.fillStyle = "red";
    }
}