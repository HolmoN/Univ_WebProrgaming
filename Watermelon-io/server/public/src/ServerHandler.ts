import { io, Socket } from 'socket.io-client';

export class ServerHandler {
    ///----------
    ///定数
    ///----------

    private static readonly SERVER_ADDRESS: string = "http://localhost:3000";

    ///----------
    ///プロパティ
    ///----------

    public static get serverAddress(): string {
        return this.SERVER_ADDRESS;
    }
}

