import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv8 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 120, {
            label: "bubble_8",
            render: {
                sprite: {
                    texture: './image/lv8.png',
                    xScale: 0.05,
                    yScale: 0.05
                }
            }
        });
    }
}