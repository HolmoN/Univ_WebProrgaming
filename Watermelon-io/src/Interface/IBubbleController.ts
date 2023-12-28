import { BubbleRaw } from "../modules/Bubbles/BubbleRaw";

export interface IBubbleController{
    /**
     * バブルをセットする
     * @param drop バブルがドロップされた時に呼び出されるコールバック関数
     */
    UpdateBubble(bubble :BubbleRaw | undefined, drop: (retBubble :BubbleRaw) => void) :void;
}