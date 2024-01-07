import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv5 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 67, {
            label: "bubble_5",
            render: {
                sprite: {
                    texture: './image/lv5.png',
                    xScale: 0.123,
                    yScale: 0.123
                }
            }
        });
    }
}