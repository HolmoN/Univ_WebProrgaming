import { BubbleRaw } from "../modules/Bubbles/BubbleRaw";

export interface IBubbleController{
    /**
     * バブルをセットする
     * @param dropped バブルがドロップされた時に呼び出されるコールバック関数
     */
    SetBubble(bubble :BubbleRaw, dropped: () => void) :void;
}