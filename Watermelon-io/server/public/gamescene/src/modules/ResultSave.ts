import { ServerHandler } from "../../../src/ServerHandler";
import { ISQLHandler } from "../Interface/ISQLHandler";
import { io, Socket } from 'socket.io-client';

export class ResultSave implements ISQLHandler {
  SetData(_:string, ...datas: string[]): void {
    const socket = io();
    socket.emit('sqlSave', datas[0], datas[1], datas[2]);
  }

  GetData(query: string): string[] {
    //このクラス内では、データベースからデータを取得することはできない
    //ログを出す
    console.log("データベースからデータを取得することはできません");

    return [];
  }
}