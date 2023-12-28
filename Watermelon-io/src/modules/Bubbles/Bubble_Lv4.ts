import { BubbleRaw } from './BubbleRaw';

export class Bubble_Lv4 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 45, {
            label: "bubble_4",
            render: {
                sprite: {
                    texture: 'img/NextTest2/lv4.png',
                    xScale: 2,
                    yScale: 2
                }
            }
        });
    }
}