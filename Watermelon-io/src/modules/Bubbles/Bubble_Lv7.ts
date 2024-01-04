import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv7 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 105, {
            label: "bubble_7",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv7.png',
                    xScale: 0.175,
                    yScale: 0.175
                }
            }
        });
    }
}