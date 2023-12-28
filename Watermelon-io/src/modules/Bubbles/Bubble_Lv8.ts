import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv8 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 85, {
            label: "bubble_8",
            render: {
                sprite: {
                    texture: 'img/NextTest2/lv8.png',
                    xScale: 2,
                    yScale: 2
                }
            }
        });
    }
}