import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv7 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 75, {
            label: "bubble_7",
            render: {
                sprite: {
                    texture: 'img/NextTest2/lv7.png',
                    xScale: 2,
                    yScale: 2
                }
            }
        });
    }
}