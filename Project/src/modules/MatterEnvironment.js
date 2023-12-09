const { Engine, Render, Runner } = Matter;
//html上のゲーム画面を構成するデータクラス
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

    /**
     * @param {HTMLElement} htmlElement 
     * @param {number} width  
     * @param {number} height 
     */
    constructor(htmlElement, width, height) {
        this._htmlElement = htmlElement;
        this._width = width;
        this._height = height;
    }
}

//Matter.jsを用いたゲーム画面環境を構成するクラス
MatterEnvironment.isInited = false;
export class MatterEnvironment {
    
    /**
     * @param {Canvas} canvas Canvasクラスを引数とする
     * */
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
    /**
     * @param {Body} body Canvasクラスを引数とする
     * */
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