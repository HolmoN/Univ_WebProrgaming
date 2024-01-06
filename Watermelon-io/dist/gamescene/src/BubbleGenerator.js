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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleGenerator = void 0;
var Matter = __importStar(require("matter-js"));
var MatterEnvironment_1 = require("./modules/MatterEnvironment");
var Bubble_Lv1_1 = require("./modules/Bubbles/Bubble_Lv1");
var Bubble_Lv2_1 = require("./modules/Bubbles/Bubble_Lv2");
var Bubble_Lv3_1 = require("./modules/Bubbles/Bubble_Lv3");
var Bubble_Lv4_1 = require("./modules/Bubbles/Bubble_Lv4");
var Bubble_Lv5_1 = require("./modules/Bubbles/Bubble_Lv5");
var Bubble_Lv6_1 = require("./modules/Bubbles/Bubble_Lv6");
var Bubble_Lv7_1 = require("./modules/Bubbles/Bubble_Lv7");
var Bubble_Lv8_1 = require("./modules/Bubbles/Bubble_Lv8");
var Tasks_1 = require("../../src/modules/Tasks");
var BubbleController_1 = require("./modules/BubbleController");
var Next_1 = require("./Next");
var preController = /** @class */ (function () {
    function preController() {
        var _this = this;
        this.container = document.querySelector(".container");
        if (this.container == null)
            return;
        this.container.addEventListener("click", function (retBubble) {
            _this.Clicked();
        });
    }
    preController.prototype.UpdateBubble = function (bubble, drop) {
        this.bubble = bubble;
        this.drop = drop;
        if (this.container == null)
            return;
        this.container.addEventListener("click", this.Clicked);
    };
    preController.prototype.Clicked = function () {
        if (this.bubble === undefined || this.drop === undefined)
            return;
        this.drop(this.bubble);
        if (this.container == null)
            return;
        this.container.removeEventListener("click", this.Clicked);
    };
    return preController;
}());
var NextBubbles = /** @class */ (function () {
    //NextGUIをコンストラクタ―の引数でもらう
    function NextBubbles() {
        var bubbles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            bubbles[_i] = arguments[_i];
        }
        var _this = this;
        this._nextBubbles = new Array();
        this.NEXT = new Next_1.Next();
        bubbles.forEach(function (bubble) {
            _this._nextBubbles.push(bubble);
        });
        //NextGUIの更新処理を行う
        this.NEXT.Display(true);
        this.NEXT.UpdateNext(this._nextImagePathes);
    }
    Object.defineProperty(NextBubbles.prototype, "nextBubbles", {
        //_nextBubblesのgetter
        get: function () {
            return this._nextBubbles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NextBubbles.prototype, "_nextImagePathes", {
        //NEXTのバブルのテクスチャパスを返す
        get: function () {
            var ret = new Array();
            this._nextBubbles.forEach(function (element) {
                var _a;
                ret.push((_a = element.Body.render.sprite) === null || _a === void 0 ? void 0 : _a.texture);
            });
            return ret;
        },
        enumerable: false,
        configurable: true
    });
    //Nextの内容物を更新する
    NextBubbles.prototype.Switch = function (bubble) {
        var result = this._nextBubbles.shift();
        this._nextBubbles.push(bubble);
        //NextGUIの更新処理を行う
        this.NEXT.UpdateNext(this._nextImagePathes);
        return result;
    };
    //中身を全てconsole.log()で出力する
    NextBubbles.prototype.Log = function () {
        var lab = "";
        this._nextBubbles.forEach(function (elem) {
            lab += elem.Body.label + ", ";
        });
        console.log("NextBubbles : " + lab);
    };
    return NextBubbles;
}());
var BubbleGenerator = /** @class */ (function () {
    ///----------
    ///メソッド
    ///----------
    function BubbleGenerator() {
        var _this = this;
        ///----------
        ///定数
        ///----------
        //バブルの生成確立
        //index=0 : Lv1
        this.BUBBLE_ESTABLISH = [0.5, 0.3, 0.15, 0.05, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
        //バブルを落としてから、次のバブルが生成されるまでの時間(ms)
        this.BUBBLE_GENE_INTERVAL = 700;
        //変数の初期化を行う
        this._bubbleController = new BubbleController_1.BubbleController(); //TODO: 捜査機関を変えられるようにしておく
        this._nextBubbles = new NextBubbles(this._GenerateRandomBubble(), this._GenerateRandomBubble(), this._GenerateRandomBubble(), this._GenerateRandomBubble(), this._GenerateRandomBubble());
        var scoreDom = document.querySelector(".Cscore");
        if (!scoreDom)
            throw new Error("scoreDom is null");
        this.SCORE_DOM = scoreDom;
        this._score = 0;
        //イベントの登録を行う
        Matter.Events.on(MatterEnvironment_1.MatterEnvironment.engine, "collisionStart", function (ev) { return _this._GetCollision(ev); });
    }
    Object.defineProperty(BubbleGenerator.prototype, "NextBubble", {
        ///----------
        ///プロパティ
        ///----------
        get: function () {
            return this._nextBubbles.Switch(this._GenerateRandomBubble());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BubbleGenerator.prototype, "Score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    //「上位クラス」「操作機関からのコールバック」
    //によって、この処理が呼ばれることを想定している
    //バブルを操作機関に送るだけ
    BubbleGenerator.prototype.SendController = function (bubble, callBack) {
        var _this = this;
        //渡されたbubbleがundefinedだったら、例外処理を行う
        if (bubble == undefined) {
            this._bubbleController.UpdateBubble(bubble, function () { });
            callBack();
            return;
        }
        //NextBubblesの内容物を確認する
        //this._nextBubbles.Log();
        //バブルを生成する
        bubble.SetStatic(true);
        MatterEnvironment_1.MatterEnvironment.Instantiate(bubble.Body);
        //操作機関にバブルを送る
        this._bubbleController.UpdateBubble(bubble, function (retBubble) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //バブルを落とす
                        retBubble.SetStatic(false);
                        //次のバブルを取得する
                        //let bubble = this.NextBubble;
                        //if (bubble === undefined) {
                        //undefinedだったら、エラーを吐く
                        //    throw new Error("NextBubbles.Switch() returns undefined.");
                        //}
                        return [4 /*yield*/, Tasks_1.Tasks.sleep(this.BUBBLE_GENE_INTERVAL)];
                    case 1:
                        //次のバブルを取得する
                        //let bubble = this.NextBubble;
                        //if (bubble === undefined) {
                        //undefinedだったら、エラーを吐く
                        //    throw new Error("NextBubbles.Switch() returns undefined.");
                        //}
                        _a.sent();
                        //操作機関にバブルを送る
                        //this.SendController(bubble);
                        //処理が終わったらコールバックを送る
                        callBack();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    //「通信」「接触判定」
    //によって、この処理が呼ばれることを想定している
    //バブルを絶対位置で配置するだけ
    BubbleGenerator.prototype.SetAbsolutePos = function (bubble, x, y, isStatic) {
        //バブルを絶対位置に設定する
        bubble.SetPosition(x, y);
        bubble.Body.isStatic = isStatic;
        //バブルを環境に生成する
        MatterEnvironment_1.MatterEnvironment.Instantiate(bubble.Body);
    };
    //接触判定を取る
    BubbleGenerator.prototype._GetCollision = function (event) {
        var _this = this;
        // 衝突したペアを取得
        var pairs = event.pairs;
        pairs.forEach(function (pair) {
            var bodyA = pair.bodyA, bodyB = pair.bodyB;
            if (bodyA.label === bodyB.label && bodyA.label.startsWith("bubble_")) {
                var currentBubbleLevel = Number(bodyA.label.replace("bubble_", ''));
                var newLevel = currentBubbleLevel + 1;
                var newX = (bodyA.position.x + bodyB.position.x) / 2;
                var newY = (bodyA.position.y + bodyB.position.y) / 2 - 50;
                // 2つのバブルを破壊
                MatterEnvironment_1.MatterEnvironment.Destroy(bodyA);
                MatterEnvironment_1.MatterEnvironment.Destroy(bodyB);
                //次のバブルのレベルが上限を超えていなければ、バブルを生成する
                if (newLevel >= _this.BUBBLE_ESTABLISH.length)
                    return;
                _this.SetAbsolutePos(_this._GenerateBubble(newLevel - 1), newX, newY, false);
                //スコアの加算を行う
                console.log("Current bubble level : " + currentBubbleLevel);
                _this._score += currentBubbleLevel * currentBubbleLevel;
                console.log("Score : " + _this._score);
                _this.SCORE_DOM.innerText = "スコア : " + _this._score;
                //接書したバブルのラベルと、新しく生成したバブルのラベルを出力する
                //console.log(bodyA.label + " is collided with " + bodyB.label);
                //console.log("New bubble is " + "bubble_" + newLevel);
            }
        });
    };
    //バブルをランダムで生成する
    BubbleGenerator.prototype._GenerateRandomBubble = function () {
        var random = Math.random();
        //BUBBLE_ESTABLISHの確率に従って、indexを決定する
        var index = 0;
        for (var i = 0; i < this.BUBBLE_ESTABLISH.length; i++) {
            var sum = 0;
            for (var j = 0; j <= i; j++) {
                sum += this.BUBBLE_ESTABLISH[j];
            }
            if (random <= sum) {
                index = i;
                break;
            }
        }
        return this._GenerateBubble(index);
    };
    //任意のレベルのバブルを返す
    BubbleGenerator.prototype._GenerateBubble = function (level) {
        var result;
        switch (level) {
            case 0:
                result = new Bubble_Lv1_1.Bubble_Lv1(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 1:
                result = new Bubble_Lv2_1.Bubble_Lv2(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 2:
                result = new Bubble_Lv3_1.Bubble_Lv3(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 3:
                result = new Bubble_Lv4_1.Bubble_Lv4(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 4:
                result = new Bubble_Lv5_1.Bubble_Lv5(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 5:
                result = new Bubble_Lv6_1.Bubble_Lv6(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 6:
                result = new Bubble_Lv7_1.Bubble_Lv7(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 7:
                result = new Bubble_Lv8_1.Bubble_Lv8(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 8:
                result = new Bubble_Lv8_1.Bubble_Lv8(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 9:
                result = new Bubble_Lv8_1.Bubble_Lv8(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            case 10:
                result = new Bubble_Lv8_1.Bubble_Lv8(MatterEnvironment_1.MatterEnvironment.width / 2, 5);
                break;
            default:
                //エラーを吐く
                throw new Error("BubbleGenerator._GenerateBubble() : level is out of range.");
        }
        //console.log(result.Body.label + " is generated.");
        return result;
    };
    return BubbleGenerator;
}());
exports.BubbleGenerator = BubbleGenerator;
