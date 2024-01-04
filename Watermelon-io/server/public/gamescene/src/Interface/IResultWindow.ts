export interface IResultWindow{
    Display(enable :boolean): void;
    DisplayScore(enable :boolean, score :number): void;
    DisplaySubmited(enable :boolean): void;
    GetPlayerName(): string;

    SubmitButtonCallBack(callBack:() => void): void;
    BackButtonCallBack(callBack:() => void): void;
}