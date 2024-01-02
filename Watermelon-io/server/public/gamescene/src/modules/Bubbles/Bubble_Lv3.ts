import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv3 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 45, {
            label: "bubble_3",
            render: {
                sprite: {
                    texture: './image/lv3.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        });
    }
}