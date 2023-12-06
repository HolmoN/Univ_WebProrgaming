import Matter from "matter-js";
export class Canvas {
    get htmlElement() {
        return this._htmlElement;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    constructor(htmlElement, width, height) {
        this._htmlElement = htmlElement;
        this._width = width;
        this._height = height;
    }
}
export class MatterEnvironment {
    static Init(canvas) {
        this.engine = Matter.Engine.create();
        this.render = Matter.Render.create({
            element: canvas.htmlElement,
            engine: this.engine,
            options: {
                width: canvas.width,
                height: canvas.height,
            },
        });
        this.runner = Matter.Runner.create();
        Matter.Render.run(this.render);
        Matter.Runner.run(this.runner, this.engine);
        this.isInited = true;
    }
    static Instantiate(body) {
        if (!this.isInited) {
            this.IsntInited();
            return;
        }
        Matter.Composite.add(this.engine.world, body);
    }
    static IsntInited() {
        console.error("MatterEnvironmentは初期化されていません");
    }
}
MatterEnvironment.isInited = false;
//# sourceMappingURL=MatterEnvironment.js.map