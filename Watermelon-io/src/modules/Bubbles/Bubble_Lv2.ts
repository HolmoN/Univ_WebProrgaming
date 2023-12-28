import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv2 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 25, {
            label: "bubble_2",
            render: {
                sprite: {
                    texture: 'img/NextTest2/lv2.png',
                    xScale: 2,
                    yScale: 2
                }
            }
        });
    }
}