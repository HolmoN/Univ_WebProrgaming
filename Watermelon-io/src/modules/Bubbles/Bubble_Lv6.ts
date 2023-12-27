import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv6 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 60);
        this.body.label = "bubble_6";

        //画像の貼り付けを行う
        //this.body.render.sprite = ;
        this.body.render.fillStyle = "red";
    }
}