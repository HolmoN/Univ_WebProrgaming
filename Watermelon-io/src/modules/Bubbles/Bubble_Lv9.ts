import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv9 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 135, {
            label: "bubble_9",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv9.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        });
    }
}