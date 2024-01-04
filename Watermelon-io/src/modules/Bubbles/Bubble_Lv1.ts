import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv1 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 15, {
            label: "bubble_1",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv1.png',
                    xScale: 0.023,
                    yScale: 0.023
                }
            }
        });
    }
}