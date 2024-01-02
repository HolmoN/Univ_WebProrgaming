import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv2 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 30, {
            label: "bubble_2",
            render: {
                sprite: {
                    texture: './image/lv2.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        });
    }
}