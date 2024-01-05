import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv8 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 106, {
            label: "bubble_8",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv8.png',
                    xScale: 0.201,
                    yScale: 0.201
                }
            }
        });
    }
}