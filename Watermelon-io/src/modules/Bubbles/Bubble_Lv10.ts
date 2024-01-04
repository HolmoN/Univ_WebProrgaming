import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv10 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 150, {
            label: "bubble_10",
            render: {
                sprite: {
                    texture: 'img/Bubbles/lv10.png',
                    xScale: 0.253,
                    yScale: 0.253
                }
            }
        });
    }
}