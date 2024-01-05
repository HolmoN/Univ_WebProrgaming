import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv9 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 119, {
            label: "bubble_9",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv9.png',
                    xScale: 0.227,
                    yScale: 0.227
                }
            }
        });
    }
}