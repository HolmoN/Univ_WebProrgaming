export interface IMouseInput{
    //マウスの右クリック入力イベントをコールバックする
    RightMousePressed(callback: (x :number, y :number) => void) :void;

    //マウスの右クリックリリースイベントをコールバックする
    RightMouseReleased(callback: (x :number, y :number) => void) :void;

    //マウスのドラッグイベントをコールバックする
    MouseDrag(callback: (x :number, y :number) => void) :void;
}