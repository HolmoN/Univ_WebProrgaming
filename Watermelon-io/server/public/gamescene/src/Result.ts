import { IResultWindow } from "./Interface/IResultWindow";
import { ISQLHandler } from "./Interface/ISQLHandler";
import { ResultSave } from "./modules/ResultSave";
import { ResultWindow } from "./modules/ResultWindow";

export class Result {

    ///----------
    /// 定数
    ///----------
    private readonly RESULT_WINDOW: IResultWindow;
    private readonly SQL_HANDLER: ISQLHandler;

    ///----------
    /// メンバ変数
    ///----------
    private _progressEnd: (() => void) | undefined;

    ///----------
    /// メソッド
    ///----------

    constructor() {
        this.RESULT_WINDOW = new ResultWindow();
        this.SQL_HANDLER = new ResultSave();
    }

    /**
     * リザルト表示を開始する
     */
    Play(score: number, progressEnd: () => void): void {
        this._progressEnd = progressEnd;

        //モーダルを表示する
        this.RESULT_WINDOW.Display(true);
        //スコアを表示する
        this.RESULT_WINDOW.DisplayScore(true, score);

        //サブミットボタンが押された時の処理
        this.RESULT_WINDOW.SubmitButtonCallBack(() => {
            //名前が空欄ならば、処理を終了する
            if(this.RESULT_WINDOW.GetPlayerName() == "") this.Stop();
    
            //スコアを保存する
            this.SaveScore(score);

            //スコアを非表示にする
            this.RESULT_WINDOW.DisplayScore(false, score);

            //サブミット完了を表示する
            this.RESULT_WINDOW.DisplaySubmited(true);

            //戻るボタンが押された時の処理
            this.RESULT_WINDOW.BackButtonCallBack(() => {
                //サブミット完了を非表示にする
                this.RESULT_WINDOW.DisplaySubmited(false);

                //処理を終了する
                this.Stop();
            });
        });
    }

    /**
     * リザルト表示を終了する
     */
    private Stop(): void {
        //モーダルを非表示にする
        this.RESULT_WINDOW.Display(false);

        if(this._progressEnd != undefined) this._progressEnd();
    }

    private SaveScore(score :number): void {
        //今日の年月日をstring形式で取得する
        //フォーマットはyyyy-mm-dd
        const today = this.GetFormattedDate();

        //名前を取得する
        const name = this.RESULT_WINDOW.GetPlayerName();

        //名前が空欄でなければ、データベースに保存する
        this.SQL_HANDLER.SetData("", today, name, score.toString());
    }

    private GetFormattedDate(): string {
        const today = new Date();

        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 0-indexed, hence +1
        const day = today.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }
}