import * as Matter from 'matter-js';
export interface INext{
    /**
     * 画面を描写するかを切り替える
     */
    Display(display :boolean) :void;

    /**
     * Nextのオブジェクトを表示する
     * Next更新のたびにこの関数は呼ばれる
     * 配列の中身は5つ入っている
     * index=0の物が最初に出現する
     */
    set UpdateNext(nexts :Matter.Body[]);
}