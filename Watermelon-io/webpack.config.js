const path = require('path');

module.exports = {
// モード値を production に設定すると最適化された状態で、
// development に設定するとソースマップ有効でJSファイルが出力される
mode: 'development', // "production" | "development" | "none"

///* 
//==========GameScene==========//
entry: './server/public/gamescene/src/index.ts',
output: {
    path: path.join(__dirname, "server/public/gamescene"),

    filename: "index.js"  

},
//*/
/*
//==========Test==========//
entry: './server/public/Test/index.ts',
output: {
    path: path.join(__dirname, "server/public/Test"),

    filename: "index.js"  

},
*/
/*
//==========Title==========//
entry: './server/public/titlescene/index.ts',
output: {
    path: path.join(__dirname, "server/public/titlescene"),

    filename: "index.js"
},
*/
/*
//==========Rancking==========//
entry: './server/public/rancking/index.ts',
output: {
    path: path.join(__dirname, "server/public/rancking"),

    filename: "index.js"
},
*/

module: {
    rules: [{
    // 拡張子 .ts の場合
    test: /\.ts$/,
    // TypeScript をコンパイルする
    use: 'ts-loader'
    }]
},
// import 文で .ts ファイルを解決するため
resolve: {
    modules: [
    "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
    '.ts',
    '.js' // node_modulesのライブラリ読み込みに必要
    ]
}
};

