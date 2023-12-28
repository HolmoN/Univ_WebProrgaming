import * as Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";
import { BubbleRaw } from "./modules/Bubbles/BubbleRaw"
import { IBubbleController } from "./Interface/IBubbleController";
import { Bubble_Lv1 } from "./modules/Bubbles/Bubble_Lv1";
import { Bubble_Lv2 } from "./modules/Bubbles/Bubble_Lv2";
import { Bubble_Lv3 } from "./modules/Bubbles/Bubble_Lv3";
import { Bubble_Lv4 } from "./modules/Bubbles/Bubble_Lv4";
import { Bubble_Lv5 } from "./modules/Bubbles/Bubble_Lv5";
import { Bubble_Lv6 } from "./modules/Bubbles/Bubble_Lv6";
import { Bubble_Lv7 } from "./modules/Bubbles/Bubble_Lv7";
import { Bubble_Lv8 } from "./modules/Bubbles/Bubble_Lv8";
import { Tasks } from "./modules/Tasks";
import { BubbleController } from "./modules/BubbleController";

class preController implements IBubbleController {

    container :HTMLElement | null;
    bubble: BubbleRaw | undefined;
    drop: ((retBubble :BubbleRaw) => void) | undefined;

    constructor() {
        this.container = document.querySelector<HTMLElement>(".container");
        if (this.container == null) return;

        this.container.addEventListener("click", (retBubble) => {
            this.Clicked();
        });
    }

    UpdateBubble(bubble: BubbleRaw, drop: (retBubble :BubbleRaw) => void): void {
        this.bubble = bubble;
        this.drop = drop;

        if (this.container == null) return;
        this.container.addEventListener("click", this.Clicked);
    }

    private Clicked(){
        if(this.bubble === undefined || this.drop === undefined) return;

        this.drop(this.bubble);
        
        if (this.container == null) return;
        this.container.removeEventListener("click", this.Clicked);
    }
}

class NextBubbles {
    //次に表示されるバブルを予約している
    private _nextBubbles: Array<BubbleRaw>; 
    //_nextBubblesのgetter
    public get nextBubbles(): Array<BubbleRaw> {
        return this._nextBubbles;
    }
    

    //NextGUIをコンストラクタ―の引数でもらう
    public constructor(...bubbles: BubbleRaw[]) {
        this._nextBubbles = new Array<BubbleRaw>();
        bubbles.forEach(bubble => {
            this._nextBubbles.push(bubble);
        });
        //NextGUIの更新処理を行う
    }

    //Nextの内容物を更新する
    public Switch(bubble: BubbleRaw): BubbleRaw | undefined {
        let result = this._nextBubbles.shift();
        this._nextBubbles.push(bubble);
        //NextGUIの更新処理を行う

        return result;
    }

    //中身を全てconsole.log()で出力する
    public Log() {
        let lab = "";
        this._nextBubbles.forEach(elem => {
            lab += elem.Body.label + ", ";
        });
        console.log("NextBubbles : " + lab);
    }
}

export class BubbleGenerator {

    ///----------
    ///定数
    ///----------

    //バブルの生成確立
    //index=0 : Lv1
    private readonly BUBBLE_ESTABLISH: number[] = [0.5, 0.3, 0.15, 0.05, 0.0, 0.0, 0.0, 0.0];
    
    //バブルを落としてから、次のバブルが生成されるまでの時間(ms)
    private readonly BUBBLE_GENE_INTERVAL: number = 200;

    ///----------
    ///プロパティ
    ///----------
    public get NextBubble(): BubbleRaw | undefined {
        return this._nextBubbles.Switch(this._GenerateRandomBubble());
    }

    ///----------
    ///ローカル変数
    ///----------
    private _bubbleController: IBubbleController;
    private _nextBubbles: NextBubbles;

    ///----------
    ///メソッド
    ///----------
    public constructor() {
        //変数の初期化を行う
        this._bubbleController = new BubbleController(); //TODO: 捜査機関を変えられるようにしておく
        this._nextBubbles = new NextBubbles(
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble()
        );

        //イベントの登録を行う
        Matter.Events.on(MatterEnvironment.engine, "collisionStart", (ev) => this._GetCollision(ev));
    }

    //「上位クラス」「操作機関からのコールバック」
    //によって、この処理が呼ばれることを想定している
    //バブルを操作機関に送るだけ
    public SendController(bubble: BubbleRaw | undefined) {
        //渡されたbubbleがundefinedだったら、例外処理を行う
        if (bubble == undefined) {
            this._bubbleController.UpdateBubble(bubble, () => {});
            return;
        }

        //NextBubblesの内容物を確認する
        this._nextBubbles.Log();

        //バブルを生成する
        bubble.SetStatic(true);
        MatterEnvironment.Instantiate(bubble.Body);

        //操作機関にバブルを送る
        this._bubbleController.UpdateBubble(bubble, async (retBubble) => {
            //バブルを落とす
            retBubble.SetStatic(false);

            //次のバブルを取得する
            let bubble = this.NextBubble;
            if (bubble === undefined) {
                //undefinedだったら、エラーを吐く
                throw new Error("NextBubbles.Switch() returns undefined.");
            }

            await Tasks.sleep(this.BUBBLE_GENE_INTERVAL);

            //操作機関にバブルを送る
            this.SendController(bubble);
            
        });
    }

    //「通信」「接触判定」
    //によって、この処理が呼ばれることを想定している
    //バブルを絶対位置で配置するだけ
    public SetAbsolutePos(bubble: BubbleRaw, x: number, y: number, isStatic: boolean) {
        //バブルを絶対位置に設定する
        bubble.SetPosition(x, y);
        bubble.Body.isStatic = isStatic;

        //バブルを環境に生成する
        MatterEnvironment.Instantiate(bubble.Body);
    }

    //接触判定を取る
    private _GetCollision(event: Matter.IEventCollision<Matter.Engine>) {
        // 衝突したペアを取得
        const pairs = event.pairs;

        pairs.forEach((pair) => {
            const { bodyA, bodyB } = pair;
            if (bodyA.label === bodyB.label && bodyA.label.startsWith("bubble_")) {
                const currentBubbleLevel = Number(bodyA.label.replace("bubble_", ''));
                const newLevel = currentBubbleLevel + 1;
                const newX = (bodyA.position.x + bodyB.position.x) / 2;
                const newY = (bodyA.position.y + bodyB.position.y) / 2 -50;

                // 2つのバブルを破壊
                MatterEnvironment.Destroy(bodyA);
                MatterEnvironment.Destroy(bodyB);

                //次のバブルのレベルが上限を超えていなければ、バブルを生成する
                if (newLevel >= this.BUBBLE_ESTABLISH.length) return;
                this.SetAbsolutePos(this._GenerateBubble(newLevel - 1), newX, newY, false);

                //接書したバブルのラベルと、新しく生成したバブルのラベルを出力する
                //console.log(bodyA.label + " is collided with " + bodyB.label);
                //console.log("New bubble is " + "bubble_" + newLevel);
            }
        });
    }

    //バブルをランダムで生成する
    private _GenerateRandomBubble(): BubbleRaw {
        let random = Math.random();

        //BUBBLE_ESTABLISHの確率に従って、indexを決定する
        let index = 0;
        for (let i = 0; i < this.BUBBLE_ESTABLISH.length; i++) {
            let sum = 0;
            for (let j = 0; j <= i; j++) {
                sum += this.BUBBLE_ESTABLISH[j];
            }
            if (random <= sum) {
                index = i;
                break;
            }
        }

        return this._GenerateBubble(index);
    }

    //任意のレベルのバブルを返す
    private _GenerateBubble(level: number): BubbleRaw {
        let result: BubbleRaw;
        switch (level) {
            case 0:
                result = new Bubble_Lv1(MatterEnvironment.width/2, 5);
                break;
            case 1:
                result = new Bubble_Lv2(MatterEnvironment.width/2, 5);
                break;
            case 2:
                result = new Bubble_Lv3(MatterEnvironment.width/2, 5);
                break;
            case 3:
                result = new Bubble_Lv4(MatterEnvironment.width/2, 5);
                break;
            case 4:
                result = new Bubble_Lv5(MatterEnvironment.width/2, 5);
                break;
            case 5:
                result = new Bubble_Lv6(MatterEnvironment.width/2, 5);
                break;
            case 6:
                result = new Bubble_Lv7(MatterEnvironment.width/2, 5);
                break;
            case 7:
                result = new Bubble_Lv8(MatterEnvironment.width/2, 5);
                break;
            default:
                //エラーを吐く
                throw new Error("BubbleGenerator._GenerateBubble() : level is out of range.");
        }

        //console.log(result.Body.label + " is generated.");
        return result;
    }
}