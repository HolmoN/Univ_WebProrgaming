import * as Matter from "matter-js";
import { hoge } from "./modules/sub.js";
let ho = new hoge();
ho.hogehuga("ww");
let bole = Matter.Bodies.circle(1, 1, 1);
console.log(bole.position.x);
//# sourceMappingURL=app.js.map