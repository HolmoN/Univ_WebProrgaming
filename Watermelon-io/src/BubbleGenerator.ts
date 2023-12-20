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

class NextBubbles {
    private _nextBubbles: Array<BubbleRaw>; //次に表示されるバブルを予約している
    //Nextの表示期間をここに持たせる

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
        let result = this._nextBubbles.pop();
        this._nextBubbles.push(bubble);
        //NextGUIの更新処理を行う

        return result;
    }
}

export class BubbleGenerator {
    
    ///----------
    ///定数
    ///----------
    private readonly BUBBLE_ESTABLISH : number[][] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    ///----------
    ///ローカル変数
    ///----------
    private _bubbleController: IBubbleController | undefined;
    private _nextBubbles: NextBubbles;

    ///----------
    ///メソッド
    ///----------
    public constructor() {
        //変数の初期化を行う
        this._bubbleController = undefined; //TODO: ここに操作機関を入れる
        this._nextBubbles = new NextBubbles(
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble(),
            this._GenerateRandomBubble()
        );

        //イベントの登録を行う
        Matter.Events.on(MatterEnvironment.engine, "collisionStart", this._GetCollision);
    }

    //「上位クラス」「操作機関からのコールバック」
    //によって、この処理が呼ばれることを想定している
    //バブルを操作機関に送るだけ
    public SendController(bubble: BubbleRaw) {
        //操作機関にバブルを送る
        this._bubbleController?.SetBubble(bubble, () => {
            //バブルを生成し、Nextの内容物を更新する
            let bubble = this._nextBubbles.Switch(this._GenerateRandomBubble());

            //bubbleがundefinedじゃないことを確認する
            if (bubble === undefined) {
                //undefinedだったら、エラーを吐く
                throw new Error("NextBubbles.Switch() returns undefined.");
            }

            //操作機関にバブルを送る
            this.SendController(bubble);
        });
    }

    //「通信」「接触判定」
    //によって、この処理が呼ばれることを想定している
    //バブルを絶対位置で配置するだけ
    public SetAbsolutePos(bubble: BubbleRaw, x: number, y: number, isStatic: boolean) {
        //バブルを絶対位置に設定する
        bubble.Body.position.x = x;
        bubble.Body.position.y = y;
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
                const newY = (bodyA.position.y + bodyB.position.y) / 2;
                const newRadius = newLevel * 10 + 20;
            }
        });

        /*

        // ペアごとに処理
        pairs.forEach((pair) => {
            if ((pair.bod) || (pair.bodyA === circleB && pair.bodyB === circleA)) {
                console.log('円が衝突しました！');
            }
        });

        for (const pair of pairs) {
            const { bodyA, bodyB } = pair;
            if (bodyA.label === bodyB.label && bodyA.label.startsWith("bubble_")) {
                const currentBubbleLevel = Number(bodyA.label.substring(7)); // この辺めっちゃ雑
                const newLevel = currentBubbleLevel + 1;
                const newX = (bodyA.position.x + bodyB.position.x) / 2;
                const newY = (bodyA.position.y + bodyB.position.y) / 2;
                const newRadius = newLevel * 10 + 20;
                const newBubble = Bodies.circle(newX, newY, newRadius, {
                    label: "bubble_" + newLevel,
                });

                Composite.remove(this.engine.world, [bodyA, bodyB]);
                Composite.add(this.engine.world, [newBubble]);
            }
        }
        */
    }

    //バブルをランダムで生成する
    private _GenerateRandomBubble(): BubbleRaw {
        return new BubbleRaw(1, 1, 1);
    }

    //任意のレベルのバブルを返す
    private _GenerateBubble(level: number): BubbleRaw {
        let result : BubbleRaw;
        switch (level) {
            case 1:
                result = new Bubble_Lv1(0, 0);
                break;
            case 2:
                result = new Bubble_Lv2(0, 0);
                break;
            case 3:
                result = new Bubble_Lv3(0, 0);
                break;
            case 4:
                result = new Bubble_Lv4(0, 0);
                break;
            case 5:
                result = new Bubble_Lv5(0, 0);
                break;
            case 6:
                result = new Bubble_Lv6(0, 0);
                break;
            case 7:
                result = new Bubble_Lv7(0, 0);
                break;
            case 8:
                result = new Bubble_Lv8(0, 0);
                break;
            default:
                //エラーを吐く
                throw new Error("BubbleGenerator._GenerateBubble() : level is out of range.");
        }
        return result;
    }
}