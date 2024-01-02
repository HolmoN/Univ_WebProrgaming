import Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";
import { BubbleRaw } from "./modules/Bubbles/BubbleRaw";
import { Walls } from "./modules/Walls";
import { Bubble_Lv1 } from "./modules/Bubbles/Bubble_Lv1";
import { BubbleGenerator } from "./BubbleGenerator";
import { WatermelonGame } from "./WatermelonGame";
import { WatermelonGame_Debug } from "./WatermelonGame_Debug";
import { Bubble_Lv2 } from "./modules/Bubbles/Bubble_Lv2";
import { Bubble_Lv3 } from "./modules/Bubbles/Bubble_Lv3";
import { Bubble_Lv4 } from "./modules/Bubbles/Bubble_Lv4";
import { Bubble_Lv5 } from "./modules/Bubbles/Bubble_Lv5";
import { Bubble_Lv6 } from "./modules/Bubbles/Bubble_Lv6";
import { Bubble_Lv7 } from "./modules/Bubbles/Bubble_Lv7";
import { Bubble_Lv8 } from "./modules/Bubbles/Bubble_Lv8";
import { Bubble_Lv9 } from "./modules/Bubbles/Bubble_Lv9";
import { Bubble_Lv10 } from "./modules/Bubbles/Bubble_Lv10";
import { Bubble_Lv11 } from "./modules/Bubbles/Bubble_Lv11";
import { ScoreSQL } from "./Interface/IScoreSqlHandler";
import { ScoreSqlHandler } from "./modules/ScoreSqlHandler";

window.onload = () => {
   const container = document.querySelector<HTMLElement>(".container");
   if (container == null) return;

   let canvas: Canvas = new Canvas(container, 550, 700);
   MatterEnvironment.Init(canvas);

   //ゲームの初期化
   const watermelonGame = new WatermelonGame();
   //const watermelonGame = new WatermelonGame_Debug();
   watermelonGame.Play(() => { });

   //クリック
   container.addEventListener("click", () => {
      //let bubble: Matter.Body = Matter.Bodies.circle(MatterEnvironment.width/2, 5, 10);
      //const bubble: BubbleRaw = new Bubble_Lv1(MatterEnvironment.width/2, 300);
      //const bubble2: BubbleRaw = new Bubble_Lv1(MatterEnvironment.width/2-5, 30);
      //MatterEnvironment.Instantiate(bubble.Body);

      //ubbleGenerator.SetAbsolutePos(new Bubble_Lv1(MatterEnvironment.width / 4, 5), MatterEnvironment.width / 4, 5, false);

      //MatterEnvironment.Instantiate(bubble.Body);
      //bubble.SetPosition(MatterEnvironment.width/2, 50);
   });

   //キー入力
   document.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
         console.log("スペースが押された");
         watermelonGame.Play(() => { });
      }
      if (event.code === 'Enter') {
         console.log("エンターが押された");
         watermelonGame.Stop();
      }

      //各種バブル生成のテストが行えるようにする
      if (event.key === 'W' || event.key === 'w') {
         console.log("SQLにデータを送信します");
         //const scoreSqlHandler = new ScoreSqlHandler();
         //scoreSqlHandler.SetData(new ScoreSQL("2020-01-01", "test", 100));
         
      }
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
}