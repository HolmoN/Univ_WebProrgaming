import Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";
import { BubbleRaw } from "./modules/Bubbles/BubbleRaw";
import { Walls } from "./modules/Walls";
import { Bubble_Lv1 } from "./modules/Bubbles/Bubble_Lv1";
import { BubbleGenerator } from "./BubbleGenerator";
import { WatermelonGame } from "./WatermelonGame";
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
import { ISQLHandler } from "./Interface/ISQLHandler";
import { ResultSave } from "./modules/ResultSave";
import { io, Socket } from 'socket.io-client';
import { Result } from "./Result";

window.onload = () => {
   const container = document.querySelector<HTMLElement>(".container");
   if (container == null) return;

   let canvas: Canvas = new Canvas(container, 550, 700);
   MatterEnvironment.Init(canvas);

   //ゲームの初期化
   const watermelonGame = new WatermelonGame();
   watermelonGame.Play(() => { });

   //キー入力
   //デバッグ用
   /*
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
   */
}