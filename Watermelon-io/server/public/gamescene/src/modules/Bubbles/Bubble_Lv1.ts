import { BubbleRaw } from './BubbleRaw';
import * as path from 'path';

export class Bubble_Lv1 extends BubbleRaw {
    //バブルの定義をする
    public constructor(x: number, y: number) {
        super(x, y, 15, {
            label: "bubble_1",
            render: {
                sprite: {
                    texture: './image/lv1.png',
                    xScale: 0.02,
                    yScale: 0.02
                }
            }
        });
    }
}