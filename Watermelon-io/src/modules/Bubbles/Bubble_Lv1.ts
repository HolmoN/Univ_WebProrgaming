import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv1 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 10);
        this.body.label = "bubble_1";

        //画像の貼り付けを行う
        //this.body.render.sprite = ;
        this.body.render.fillStyle = "red";

    }
}