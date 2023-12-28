import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv6 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 65, {
            label: "bubble_6",
            render: {
                sprite: {
                    texture: 'img/NextTest2/lv6.png',
                    xScale: 2,
                    yScale: 2
                }
            }
        });
    }
}