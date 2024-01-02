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
    get day() :string{
        return this._day;
    }
    get name() :string{
        return this._name;
    }
    get score() :number{
        return this._score;
    }

    constructor(day :string, name :string, score :number)
    {
        this._day = day;
        this._name = name;
        this._score = score;
    } 
}