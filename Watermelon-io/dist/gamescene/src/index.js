"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatterEnvironment_1 = require("./modules/MatterEnvironment");
var WatermelonGame_1 = require("./WatermelonGame");
window.onload = function () {
    /*
    document.addEventListener('keydown', (event) => {
       if (event.key === 'W' || event.key === 'w') {
          const sqlTest :ISQLHandler = new ResultSave();
          sqlTest.SetData("2024-12-12", "huga", "500");
          console.log("wが押された");
       }
    });
    */
    var container = document.querySelector(".container");
    if (container == null)
        return;
    var canvas = new MatterEnvironment_1.Canvas(container, 550, 700);
    MatterEnvironment_1.MatterEnvironment.Init(canvas);
    //ゲームの初期化
    var watermelonGame = new WatermelonGame_1.WatermelonGame();
    //const watermelonGame = new WatermelonGame_Debug();
    watermelonGame.Play(function () { });
    //クリック
    container.addEventListener("click", function () {
        //let bubble: Matter.Body = Matter.Bodies.circle(MatterEnvironment.width/2, 5, 10);
        //const bubble: BubbleRaw = new Bubble_Lv1(MatterEnvironment.width/2, 300);
        //const bubble2: BubbleRaw = new Bubble_Lv1(MatterEnvironment.width/2-5, 30);
        //MatterEnvironment.Instantiate(bubble.Body);
        //ubbleGenerator.SetAbsolutePos(new Bubble_Lv1(MatterEnvironment.width / 4, 5), MatterEnvironment.width / 4, 5, false);
        //MatterEnvironment.Instantiate(bubble.Body);
        //bubble.SetPosition(MatterEnvironment.width/2, 50);
    });
    //キー入力
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            console.log("スペースが押された");
            watermelonGame.Play(function () { });
        }
        if (event.code === 'Enter') {
            console.log("エンターが押された");
            watermelonGame.Stop();
        }
        /*
           if(event.code === 'Space'){
              const result = new Result()
              result.Play(0, () => {
                 console.log("リザルト終了");
              });
           }
           */
    });
    /*
    document.addEventListener('keydown', (event) => {
       //各種バブルの生成
       if (event.key === '1') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv1(MatterEnvironment.width / 2, 5), () => { });
          console.log("1が押された");
       }
       if (event.key === '2') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv2(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === '3') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv3(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === '4') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv4(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === '5') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv5(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === '6') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv6(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === '7') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv7(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === '8') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv8(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === '9') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv9(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === 'Q' || event.key === 'q') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv10(MatterEnvironment.width / 2, 5), () => { });
       }
       if (event.key === 'W' || event.key === 'w') {
          watermelonGame.BubbleGenerator.SendController(new Bubble_Lv11(MatterEnvironment.width / 2, 5), () => { });
       }
    });
    */
};
