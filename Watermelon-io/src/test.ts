import * as Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";
import { BubbleRaw } from "./modules/Bubbles/BubbleRaw";
import { Walls } from "./modules/Walls";
import { Bubble_Lv1 } from "./modules/Bubbles/Bubble_Lv1";

window.onload = () => {
    console.log("gg");
    const container = document.querySelector<HTMLElement>(".container");
    if (container == null) return;

    let canvas: Canvas = new Canvas(container, 420, 700);
    MatterEnvironment.Init(canvas);

    //壁の生成
    const walls :Walls = new Walls();
    walls.objects.forEach(element => {
        MatterEnvironment.Instantiate(element);
    });

    //クリックでボタンの生成
    container.addEventListener("click", () => {
        //let bubble: Matter.Body = Matter.Bodies.circle(MatterEnvironment.width/2, 5, 10);
        const bubble: BubbleRaw = new BubbleRaw(MatterEnvironment.width / 2 + 50, 5, 30);
        const bubble2: Bubble_Lv1 = new Bubble_Lv1(MatterEnvironment.width / 2 - 50, 5);
        //MatterEnvironment.Instantiate(bubble.Body);

        const b2 = bubble;
        MatterEnvironment.Instantiate(b2.Body);
        MatterEnvironment.Instantiate(bubble2.Body);
        console.log(bubble2.Body.render.lineWidth);
    });
}