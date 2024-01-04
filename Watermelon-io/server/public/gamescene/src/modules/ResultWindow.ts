import { IResultWindow } from "../Interface/IResultWindow";

export class ResultWindow implements IResultWindow{

    private _resultMordal: HTMLElement;

    private _nameEntry: HTMLElement;
    private _userName :HTMLInputElement;
    private _scoreEntry: HTMLElement;
    private _submitButton: HTMLButtonElement;

    private _submited: HTMLElement;
    private _backButton: HTMLButtonElement;

    private _submitCallBack: (() => void) | undefined;
    private _backButtonCallBack: (() => void) | undefined;

    constructor(){
        //全てのhtml要素を取得
        this._resultMordal = document.querySelector('.result') as HTMLElement;

        this._nameEntry = document.querySelector('.nameEntry') as HTMLElement;
        this._scoreEntry = document.getElementById('score') as HTMLElement;
        this._userName = document.getElementById('username') as HTMLInputElement;
        this._submitButton = document.getElementById('submitScore') as HTMLButtonElement;

        this._submited = document.querySelector('.submited') as HTMLElement;
        this._backButton = document.getElementById('backtotitle') as HTMLButtonElement;

        //初期化
        this._resultMordal.style.display = 'none';
        this._nameEntry.style.display = 'none';
        this._submited.style.display = 'none';
    }
    
    Display(enable :boolean): void{
        if(enable){
            this._resultMordal.style.display = 'block';
        }else{
            this._resultMordal.style.display = 'none';
        }
    }

    DisplayScore(enable :boolean, score :number){
        if(enable)
        {
            this._scoreEntry.textContent = "スコア : " + score.toString();

            this._nameEntry.style.display = 'block';
        }
        else{
            this._nameEntry.style.display = 'none';
        }
    }
    DisplaySubmited(enable :boolean): void{
        if(enable){
            this._submited.style.display = 'block';
        }else{
            this._submited.style.display = 'none';
        }
    }

    GetPlayerName(): string{
        return this._userName.value;
    }

    SubmitButtonCallBack(callBack:() => void): void{
        console.log("submit");
        this._submitButton.removeEventListener('click', () => {
            if(this._submitCallBack != undefined) this._submitCallBack();
        });

        this._submitCallBack = callBack;
        this._submitButton.addEventListener('click', () => {
            if(this._submitCallBack != undefined) this._submitCallBack();
        });
    }

    BackButtonCallBack(callBack:() => void): void{
        this._backButton.removeEventListener('click', () => {
            if(this._backButtonCallBack != undefined) this._backButtonCallBack();
        });

        this._backButtonCallBack = callBack;
        this._backButton.addEventListener('click', () => {
            if(this._backButtonCallBack != undefined) this._backButtonCallBack();
        });
    }
}