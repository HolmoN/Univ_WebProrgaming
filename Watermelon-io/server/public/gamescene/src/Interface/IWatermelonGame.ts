export interface IWatermelonGame{

    /**
     * ゲームをスタートする
     */
    Play(gameOver :() => void) :void;
    
    /**
     * ゲームをストップする
     */
    Stop() :void;
}