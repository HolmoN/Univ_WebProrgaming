import { IGameCall } from "./Interface/IGameCall"
export class GameCall implements IGameCall {

    private _readyImageElement: HTMLImageElement;
    private _startImageElement: HTMLImageElement;
    private _finishImageElement: HTMLImageElement;
    private _rightImageElement: HTMLImageElement;
    private _leftImageElement: HTMLImageElement;

    constructor() {
        this._readyImageElement = document.getElementById('ready') as HTMLImageElement;
        this._startImageElement = document.getElementById('start') as HTMLImageElement;
        this._finishImageElement = document.getElementById('finish') as HTMLImageElement;
        this._rightImageElement = document.getElementById('right') as HTMLImageElement;
        this._leftImageElement = document.getElementById('left') as HTMLImageElement;
    }
    /**
     * Readyと表示する
     */
    DisplayReady(display: boolean): void {
        if (!display) {
            this._readyImageElement.style.visibility = 'hidden';
        }
        else {

        }
    }

    /**
     * Startと表示する
     */
    DisplayStart(display: boolean): void {
        if (!display) {
            this._startImageElement.style.visibility = 'hidden';
        }
        else {

        }

    }

    /**
     * Finishと表示する
     */
    DisplayFinish(display: boolean): void {
        if (!display) {
            this._finishImageElement.style.visibility = 'hidden';
        }
        else {

        }

    }

    /**
     * WinLoseと表示する
     * @param rightWin trueなら右側が勝ち
     */
    DisplayWL(display: boolean, rightWin: boolean): void {
        if(display){
            if(!rightWin){
                
                this._rightImageElement.src = 'img_win.png';
                this._leftImageElement.src = 'img_lose.png';

            }
            else{
                this._leftImageElement.src = 'img_win.png';
                this._rightImageElement.src = 'img_lose.png';
            }
        }
        else{
            this._rightImageElement.style.visibility = 'hidden';
            this._leftImageElement.style.visibility = 'hidden';
        }

    }
}