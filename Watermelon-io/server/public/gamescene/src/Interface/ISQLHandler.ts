export interface ISQLHandler{
    SetData(eventName:string ,... datas :string[]): void;

    GetData(query : string): string[];
}