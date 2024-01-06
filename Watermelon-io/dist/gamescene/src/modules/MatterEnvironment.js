"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatterEnvironment = exports.Canvas = void 0;
var Matter = __importStar(require("matter-js"));
//キャンバスを構成する要素のクラス
var Canvas = /** @class */ (function () {
    ///----------
    ///メソッド
    ///----------
    //コンストラクタ―
    function Canvas(htmlElement, width, height) {
        this._htmlElement = htmlElement;
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Canvas.prototype, "htmlElement", {
        ///----------
        ///プロパティ
        ///----------
        get: function () {
            return this._htmlElement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Canvas;
}());
exports.Canvas = Canvas;
var MatterEnvironment = /** @class */ (function () {
    function MatterEnvironment() {
    }
    Object.defineProperty(MatterEnvironment, "width", {
        ///----------
        ///プロパティ
        ///----------
        get: function () {
            return this._canvas.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatterEnvironment, "height", {
        get: function () {
            return this._canvas.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatterEnvironment, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatterEnvironment, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: false,
        configurable: true
    });
    ///----------
    ///メソッド
    ///----------
    //初期化を行う
    MatterEnvironment.Init = function (canvas) {
        //必要なコンポーネントの初期化を行う
        this._engine = Matter.Engine.create();
        this.engine.world.gravity.y = this.GRAVITY;
        this._render = Matter.Render.create({
            element: canvas.htmlElement,
            engine: this._engine,
            options: {
                width: canvas.width,
                height: canvas.height,
                background: 'transparent',
                wireframes: false
            }
        });
        this._runner = Matter.Runner.create();
        Matter.Render.run(this._render);
        Matter.Runner.run(this._runner, this._engine);
        //キャンバスをローカル変数にも保存する
        this._canvas = canvas;
        //初期化したことを保存する
        this._isInited = true;
    };
    //オブジェクトの生成を行う
    MatterEnvironment.Instantiate = function (body) {
        //初期化されているかどうかの確認を行う
        if (!this._isInited) {
            this._IsntInited();
            return;
        }
        //オブジェクトの生成をする
        Matter.World.add(this._engine.world, body);
    };
    //オブジェクトの削除を行う
    MatterEnvironment.Destroy = function (body) {
        //初期化されているかどうかの確認を行う
        if (!this._isInited) {
            this._IsntInited();
            return [];
        }
        Matter.World.remove(this._engine.world, body);
    };
    //タグによってオブジェクトの検索を行う
    MatterEnvironment.FindByTag = function (tag) {
        //初期化されているかどうかの確認を行う
        if (!this._isInited) {
            this._IsntInited();
            return [];
        }
        //タグによってオブジェクトの検索を行う
        return Matter.Composite.allBodies(this._engine.world).filter(function (body) {
            return body.label.includes(tag);
        });
    };
    //初期化されていないときのエラーメッセージを表示する
    MatterEnvironment._IsntInited = function () {
        console.error("MatterEnvironmentは初期化されていません");
    };
    ///----------
    ///定数
    ///----------
    MatterEnvironment.GRAVITY = 0.6;
    MatterEnvironment._isInited = false;
    return MatterEnvironment;
}());
exports.MatterEnvironment = MatterEnvironment;
