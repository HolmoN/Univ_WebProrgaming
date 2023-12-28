import { IBubbleController } from "../Interface/IBubbleController";
import { IMouseInput } from "../Interface/IMouseInput";
import { BubbleRaw } from "./Bubbles/BubbleRaw";
import { MatterEnvironment } from "./MatterEnvironment";

class Mouseinput implements IMouseInput{

    _rightMousePressed :((x :number, y :number) => void)| undefined;
    _rightMouseReleased :((x :number, y :number) => void)| undefined;
    _MouseDrag :((x :number, y :number) => void)| undefined;

    constructor(){
    }

    //マウスの右クリック入力イベントのコールバックを登録する
    RightMousePressed(callback: (x :number, y :number) => void) :void{
        //解除
        MatterEnvironment.canvas.htmlElement.removeEventListener("mousedown", (e) => {
            this._RightMousePressedEvent(e.clientX, e.clientY);
        });

        //登録
        this._rightMousePressed = callback;
        MatterEnvironment.canvas.htmlElement.addEventListener("mousedown", (e) => {
            this._RightMousePressedEvent(e.clientX, e.clientY);
        });
    }
    //マウスの右クリックリリースイベントのコールバックをコールバックする
    RightMouseReleased(callback: (x :number, y :number) => void) :void{
        //解除
        MatterEnvironment.canvas.htmlElement.removeEventListener("mouseup", (e) => {
            this._RightMouseReleasedEvent(e.clientX, e.clientY);
        });

        //登録
        this._rightMouseReleased = callback;
        MatterEnvironment.canvas.htmlElement.addEventListener("mouseup", (e) => {
            this._RightMouseReleasedEvent(e.clientX, e.clientY);
        });
    }
    //マウスのドラッグイベントのコールバックをコールバックする
    MouseDrag(callback: (x :number, y :number) => void) :void{
        //解除
        MatterEnvironment.canvas.htmlElement.removeEventListener("mousemove", (e) => {
            this._MouseDragEvent(e.clientX, e.clientY);
        });

        //登録
        this._MouseDrag = callback;
        MatterEnvironment.canvas.htmlElement.addEventListener("mousemove", (e) => {
            this._MouseDragEvent(e.clientX, e.clientY);
        });
    }

    private _RightMousePressedEvent(x: number, y: number){
        if(this._rightMousePressed === undefined) return;
        this._rightMousePressed(x, y)
    }
    private _RightMouseReleasedEvent(x: number, y: number){
        if(this._rightMouseReleased === undefined) return;
        this._rightMouseReleased(x, y);
    }
    private _MouseDragEvent(x: number, y: number){
        if(this._MouseDrag === undefined) return;

        //x,y値の補正を行う
        x = x - MatterEnvironment.canvas.htmlElement.getBoundingClientRect().left;
        y = y - MatterEnvironment.canvas.htmlElement.getBoundingClientRect().top;


        this._MouseDrag(x, y)
    }
}

export class BubbleController implements IBubbleController {
    ///----------
    ///定数
    ///----------
    readonly CONTAINER :HTMLElement | null;
    readonly MOUSEINPUT :IMouseInput = new Mouseinput();

    ///----------
    ///ローカル変数
    ///----------
    _bubble: BubbleRaw | undefined;
    _drop: ((retBubble :BubbleRaw) => void) | undefined;

    draggable: boolean = false; //ドラッグ可能かどうかを切り替える

    ///----------
    ///メソッド
    ///----------
    constructor() {
        this.CONTAINER = document.querySelector<HTMLElement>(".container");
        if (this.CONTAINER == null) return;
        this.MOUSEINPUT = new Mouseinput();

        this._Present();
    }

    //このクラスにおいては、「ボディがクリックされたかどうか」は考慮しない
    //ボディがクリックされたかどうかは、IBubbleControllerを実装するクラスで考慮する
    private _Present(){
        this.MOUSEINPUT.MouseDrag((x, y) => {
            this._MouseDragged(x);
        });

        this.MOUSEINPUT.RightMousePressed((x, y) => {
            this._Pressed();
        });

        this.MOUSEINPUT.RightMouseReleased((x, y) => {
            this._Released();
        });
    }

    //バブルとコールバックを外部からセットする
    UpdateBubble(bubble: BubbleRaw | undefined, drop: (retBubble :BubbleRaw) => void): void {
        //古いバブルを持っている場合は、破棄する
        if(this._bubble?.Body.isStatic == true) MatterEnvironment.Destroy(this._bubble.Body);

        this._bubble = bubble;
        this._drop = drop;
    }

    private _MouseDragged(x: number){
        //ドラッグ可能状態でなければ何もしない
        if(!this.draggable) return;
        
        //console.log(x);

        //バブルを移動させる
        if(this._bubble === undefined) return;
        this._bubble.SetPosition(x, this._bubble.y);
    }

    private _Pressed(){
        console.log("ぷれす");

        //ドラッグ可能状態に切り替える
        if(this._bubble === undefined) return;
        this.draggable = true;
    }

    private _Released(){
        console.log("りりーす");

        //ドラッグ可能状態を解除する
        this.draggable = false;

        //バブルを落とす
        if(this._bubble === undefined || this._drop === undefined) return;
        this._drop(this._bubble);
    }
}