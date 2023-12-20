import * as Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";
import { BubbleRaw } from "./modules/Bubbles/BubbleRaw";
import { Walls } from "./modules/Walls";
import { Bubble_Lv1 } from "./modules/Bubbles/Bubble_Lv1";
import { BubbleGenerator } from "./BubbleGenerator";

window.onload = () => {
    const container = document.querySelector<HTMLElement>(".container");
    if (container == null) return;

    let canvas: Canvas = new Canvas(container, 420, 700);
    MatterEnvironment.Init(canvas);

    //壁の生成
    const walls: Walls = new Walls();
    walls.objects.forEach(element => {
        MatterEnvironment.Instantiate(element);
    });

    const bubbleGenerator = new BubbleGenerator();

    bubbleGenerator.SendController(new Bubble_Lv1(MatterEnvironment.width / 2, 5));

    
    //クsリックでボタンの生成
    container.addEventListener("click", () => {
        //let bubble: Matter.Body = Matter.Bodies.circle(MatterEnvironment.width/2, 5, 10);
        //const bubble: BubbleRaw = new Bubble_Lv1(MatterEnvironment.width/2, 300);
        //const bubble2: BubbleRaw = new Bubble_Lv1(MatterEnvironment.width/2-5, 30);
        //MatterEnvironment.Instantiate(bubble.Body);

        

        //MatterEnvironment.Instantiate(bubble.Body);
        //bubble.SetPosition(MatterEnvironment.width/2, 50);
    });
    
}