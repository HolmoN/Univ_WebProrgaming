export interface INameEntry{
    /**
     * 画面を描写するかを切り替える
     */
    Display(display :boolean) :void;

    /**
     * 「送信」ボタンが押されたことをコールバックする
     */
    SetScoreCallBack(callBack :(name :string, score :number) => void) :void;
    /*
    ---コールバック関数の使い方---
    SetScoreCallBack{
        //ボタンを押すイベントが発火したら、callBack関数を実行する
        callBack(name, score);
    }

    よくわからなかったらチャットで聞いてください
    */
}