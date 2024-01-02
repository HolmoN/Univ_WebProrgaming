import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv11 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 165, {
            label: "bubble_11",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv11.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        });
    }
}