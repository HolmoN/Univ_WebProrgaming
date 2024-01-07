import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv6 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 80, {
            label: "bubble_6",
            render: {
                sprite: {
                    texture: './image/lv6.png',
                    xScale: 0.149,
                    yScale: 0.149
                }
            }
        });
    }
}