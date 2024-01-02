import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv6 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 90, {
            label: "bubble_6",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv6.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        });
    }
}