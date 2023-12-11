import * as Matter from "matter-js"

//キャンバスを構成する要素のクラス
export class Canvas {

    ///----------
    ///ローカル変数
    ///----------
    private _htmlElement: HTMLElement;
    private _width: number;
    private _height: number;

    ///----------
    ///プロパティ
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

    private static _engine: Matter.Engine;
    private static _render: Matter.Render;
    private static _runner: Matter.Runner;

    private static _canvas: Canvas;

    private static _isInited: Boolean = false;

    ///----------
    ///プロパティ
    ///----------

    public static get width(): number {
        return this._canvas.width;
    }
    public static get height(): number {
        return this._canvas.height;
    }

    ///----------
    ///メソッド
    ///----------

    //初期化を行う
    public static Init(canvas: Canvas) {
        //必要なコンポーネントの初期化を行う
        this._engine = Matter.Engine.create();
        this._render = Matter.Render.create({
            element: canvas.htmlElement,
            engine: this._engine,
            options: {
                width: canvas.width,
                height: canvas.height,
            },
        });
        this._runner = Matter.Runner.create();
        Matter.Render.run(this._render);
        Matter.Runner.run(this._runner, this._engine);

        //キャンバスをローカル変数にも保存する
        this._canvas = canvas;

        //初期化したことを保存する
        this._isInited = true;
    }

    //オブジェクトの生成を行う
    //引数を
    public static Instantiate(body: Matter.Body) {
        //初期化されているかどうかの確認を行う
        if (!this._isInited) {
            this._IsntInited();
            return;
        }

        //オブジェクトの生成をする
        Matter.Composite.add(this._engine.world, body);
    }

    //オブジェクトの削除を行う

    //初期化されていないときのエラーメッセージを表示する
    private static _IsntInited() {
        console.error("MatterEnvironmentは初期化されていません");
    }
}

