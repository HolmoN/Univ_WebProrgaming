export interface IScoreSqlHandler{
    /**
     * SQLをセットする
     */
    SetData(data :ScoreSQL) :void;
}

export class ScoreSQL{

    private _day :string;
    private _name :string;
    private _score :number;

    //ゲッター
    get Day() :string{
        return this._day;
    }
    get Name() :string{
        return this._name;
    }
    get Score() :number{
        return this._score;
    }

    constructor(day :string, name :string, score :number)
    {
        this._day = day;
        this._name = name;
        this._score = score;
    } 
}