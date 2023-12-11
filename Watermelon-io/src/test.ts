import * as Matter from "matter-js";
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment";

window.onload = () => {
    console.log("gg");
    const container = document.querySelector<HTMLElement>(".container");
    if (container == null) return;

    let canvas: Canvas = new Canvas(container, 420, 700);
    MatterEnvironment.Init(canvas);

    container.addEventListener("click", () => {
        let bubble: Matter.Body = Matter.Bodies.circle(MatterEnvironment.width/2, 5, 10);
        MatterEnvironment.Instantiate(bubble);
    });
}