export interface ISQLHandler{
    SetData(... datas :string[]): void;

    GetData(query : string): string[];
}