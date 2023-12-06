import Matter from "matter-js";

//キャンバスを構成する要素のクラス
export class Canvas {

    ///----------
    ///ローカル変数
    ///----------
    private _htmlElement: HTMLElement;
    private _width: number;
    private _height: number;

    ///----------
    ///公開プロパティ
    ///----------

    public get htmlElement(): HTMLElement {
        return this._htmlElement;
    }
    public get width(): number {
        return this._width;
    }
    public get height(): number {
        return this._height;
    }

    ///----------
    ///メソッド
    ///----------

    //コンストラクタ―
    public constructor(htmlElement: HTMLElement, width: number, height: number) {
        this._htmlElement = htmlElement;
        this._width = width;
        this._height = height;
    }
}

export class MatterEnvironment {

    ///----------
    ///ローカル変数
    ///----------

    private static engine: Matter.Engine;
    private static render: Matter.Render;
    private static runner: Matter.Runner;

    private static isInited: Boolean = false;

    ///----------
    ///メソッド
    ///----------

    //初期化を行う
    public static Init(canvas: Canvas) {
        //必要なコンポーネントの初期化を行う
        this.engine = Matter.Engine.create();
        this.render = Matter.Render.create({
            element: canvas.htmlElement,
            engine: this.engine,
            options: {
                width: canvas.width,
                height: canvas.height,
            },
        });
        this.runner = Matter.Runner.create();
        Matter.Render.run(this.render);
        Matter.Runner.run(this.runner, this.engine);

        //初期化したことを保存する
        this.isInited = true;
    }

    //オブジェクトの生成を行う
    //引数を
    public static Instantiate(body :Matter.Body) {
        //初期化されているかどうかの確認を行う
        if(!this.isInited){
            this.IsntInited();
            return;
        }

        //オブジェクトの生成をする
        Matter.Composite.add(this.engine.world, body);
    }

    //オブジェクトの削除を行う

    //初期化されていないときのエラーメッセージを表示する
    private static IsntInited(){
        console.error("MatterEnvironmentは初期化されていません");
    }
}

