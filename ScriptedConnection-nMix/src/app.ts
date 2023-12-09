//import * as Matter from "matter-js";
//import { Matter } from "../lib/matter.js";
/*
import { Canvas, MatterEnvironment } from "./modules/MatterEnvironment.js";

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
*/

import * as Matter from "matter-js/build";
import {hoge} from "./modules/sub.js";

let ho = new hoge();
ho.hogehuga("ww");

let bole = Matter.Bodies.circle(1, 1, 1);
console.log(bole.position.x);