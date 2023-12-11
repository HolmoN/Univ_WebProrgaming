interface IGauge{
    /**
     * 画面を描写するかを切り替える
     */
    Display(display :boolean) :void;

    /**
     * ゲージのFillAmountを設定する
     * valueは0~1とする
     * オーバー、アンダーフローした場合は0~1の間になるようにする
     */
    set FillAmount(value :number);
}