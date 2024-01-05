import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv3 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 41, {
            label: "bubble_3",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv3.png',
                    xScale: 0.073,
                    yScale: 0.073
                }
            }
        });
    }
}