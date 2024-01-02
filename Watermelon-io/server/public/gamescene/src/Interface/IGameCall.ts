export interface IGameCall{
    /**
     * Readyと表示する
     */
    DisplayReady(display :boolean) :void;
    
    /**
     * Startと表示する
     */
    DisplayStart(display :boolean) :void;
    
    /**
     * Finishと表示する
     */
    DisplayFinish(display :boolean) :void;
    
    /**
     * WinLoseと表示する
     * @param rightWin trueなら右側が勝ち
     */
    DisplayWL(display :boolean, rightWin: boolean) :void;
}