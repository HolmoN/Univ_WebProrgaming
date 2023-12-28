/*
import Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";
import { BubbleRaw } from "./modules/Bubbles/BubbleRaw";
import { Walls } from "./modules/Walls";
import { Bubble_Lv1 } from "./modules/Bubbles/Bubble_Lv1";
import { BubbleGenerator } from "./BubbleGenerator";
import { WatermelonGame } from "./WatermelonGame";

window.onload = () => {
   const container = document.querySelector<HTMLElement>(".container");
   if (container == null) return;

   let canvas: Canvas = new Canvas(container, 420, 700);
   MatterEnvironment.Init(canvas);

   //ゲームの初期化
   const watermelonGame = new WatermelonGame();

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
   });

}
*/