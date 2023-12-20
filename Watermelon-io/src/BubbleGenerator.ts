import * as Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";
import { BubbleRaw } from "./modules/Bubbles/BubbleRaw";

class NextBubbles{
    private _nextBubbles :Array<BubbleRaw>; //次に表示されるバブルを予約している
    //Nextの表示期間をここに持たせる

    //NextGUIをコンストラクタ―の引数でもらう
    public constructor(...bubbles: BubbleRaw[]){
        this._nextBubbles = new Array<BubbleRaw>();
        bubbles.forEach(bubble => {
            this._nextBubbles.push(bubble);
        });
        //NextGUIの更新処理を行う
    }

    //Nextの内容物を更新する
    public Switch(bubble :BubbleRaw) : BubbleRaw | undefined{
        let result = this._nextBubbles.pop();
        this._nextBubbles.push(bubble);
        //NextGUIの更新処理を行う

        return result;
    }
}

export class BubbleGenerator{



    ///----------
    ///メソッド
    ///----------
    public constructor(){
        //イベントの設定などを行う
    }

    //「上位クラス」「操作機関からのコールバック」
    //によって、この処理が呼ばれることを想定している
    //バブルを操作機関に送るだけ
    public SendController(bubble :BubbleRaw){

    }
    
    //「通信」「接触判定」
    //によって、この処理が呼ばれることを想定している
    //バブルを絶対位置で配置するだけ
    public SetAbsolutePos(bubble :BubbleRaw, x :number, y :number, isKinematic :boolean){

    }

    //接触判定を取る
    private _GetCollision(){

    }

    //バブルをランダムで生成する
    private _GenerateRandomBubble() :BubbleRaw{
        return new BubbleRaw(1, 1, 1);
    }
}