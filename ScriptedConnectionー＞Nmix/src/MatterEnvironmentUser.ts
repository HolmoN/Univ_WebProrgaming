/// USER
///  | |______
///  |        |
/// Extended  |
///  |        |
/// Environment
///
/// USERからEnvironmentのstatic変数に変更を加えた時
/// Extendedはどうなるのか？

//import { MatterEnvironment } from "./modules/MatterEnvironment";

//import { matterenvironment } from "./modules/MatterEnvironment.js"
//import { MatterEnvironmentExtendClass } from "./MatterEnvironmentExtendClass.js"

//1 Extendedオブジェクトインスタンスを作成し
//  そのインスタンスを介してstaticメンバを呼び出す
//let instance = new MatterEnvironmentExtendClass();
//instance.GetNum();

//MatterEnvironment.numnumChange(3);

//2 ここからEnvironmentのstaticメンバを操作してから
//  インスタンスを介してstaticメンバを呼び出す

//3 ここからmatter.jsにアクセスできるか確認する