import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv11 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 145, {
            label: "bubble_11",
            render: {
                sprite: {
                    texture: './image/lv11.png',
                    xScale: 0.230,
                    yScale: 0.230
                }
            }
        });
    }
}