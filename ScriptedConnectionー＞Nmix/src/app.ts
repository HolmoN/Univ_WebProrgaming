import Matter from "matter-js";//なんか読みこめん・・・
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment.js"

window.onload = () => {
    console.log("gg");
    const container = document.querySelector<HTMLElement>(".container");
    if (container == null) return;

    let canvas: Canvas = new Canvas(container, 420, 700);
    MatterEnvironment.Init(canvas);

    container.addEventListener("click", () => {
        let bubble: Matter.Body = Matter.Bodies.circle(0, 0, 5);
        MatterEnvironment.Instantiate(bubble);
    });
}