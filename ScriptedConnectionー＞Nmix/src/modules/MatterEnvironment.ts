import * as Matter from "matter-js";

export class MatterEnvironment {
    private static numnum: number = 0; //staticなので恐らく共通

    //何処からでも
    public static numnumChange(newNum: number) {
        this.numnum = newNum;
    }

    //このような形ならアクセス可能か
    public GetNum(): number {
        return MatterEnvironment.numnum;
    }

    //バブルを生成する処理をしてみる
    public static InstantiateBabble() {
        let bubble = Matter.Bodies.circle(0, 0, 0);
        console.log(bubble.position.x);
    }
}

