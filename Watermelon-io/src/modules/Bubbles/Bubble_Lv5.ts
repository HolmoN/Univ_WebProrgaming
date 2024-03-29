import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv5 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 75, {
            label: "bubble_5",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv5.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        });
    }
}