import { IScoreSqlHandler, ScoreSQL } from "../Interface/IScoreSqlHandler";
import * as sqlite3 from 'sqlite3';


export class ScoreSqlHandler implements IScoreSqlHandler {

    ///----------
    /// 定数
    ///----------
    private readonly DB_PATH: string = "sql/scoreData.sqlite";

    SetData(data: ScoreSQL): void {
        // 既存の SQLite データベースファイルへの接続
        const db = new sqlite3.Database(this.DB_PATH);

        // データベースに書き込み操作を行う
        db.serialize(() => {
            // 例: users テーブルにデータを挿入
            const stmt = db.prepare('INSERT INTO scores (day, name, score) VALUES (?, ?, ?, ?)');
            stmt.run(data.day, data.name, data.score);
            stmt.finalize();
        });

        // データベースのクローズ
        db.close();
    }
}