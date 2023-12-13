export interface ITitleScene{
    /**
     * スタートボタンのオブジェクトを返す
     */
    get StartButton() :HTMLButtonElement;

    /**
     * 画面を描写するかを切り替える
     */
    Display(display :boolean) :void;

    /**
     * マッチングしたかどうかの結果を受け取る
     */
    Matched(matched :boolean) :void;
}