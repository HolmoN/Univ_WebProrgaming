import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv4 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 54, {
            label: "bubble_4",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv4.png',
                    xScale: 0.097,
                    yScale: 0.097
                }
            }
        });
    }
}