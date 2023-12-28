import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv5 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 55, {
            label: "bubble_5",
            render: {
                sprite: {
                    texture: 'img/NextTest2/lv5.png',
                    xScale: 2,
                    yScale: 2
                }
            }
        });
    }
}