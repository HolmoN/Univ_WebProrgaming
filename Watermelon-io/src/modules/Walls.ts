import * as Matter from 'matter-js';
import { MatterEnvironment } from './MatterEnvironment';

export class Walls {
    ///----------
    ///定数
    ///----------
    private readonly WALL_T :number = 10; //壁の厚さ 

    ///----------
    ///プロパティ
    ///----------
    public get objects() :Matter.Body[]{
        return this._walls;
    }

    ///----------
    ///ローカル変数
    ///----------
    private _walls :Matter.Body[] = [];
    

    ///----------
    ///メソッド
    ///----------

    public constructor(){
        const ground :Matter.Body = Matter.Bodies.rectangle(
            MatterEnvironment.width / 2,
            MatterEnvironment.height - this.WALL_T / 2,
            MatterEnvironment.width,
            this.WALL_T,
            {
                isStatic: true,
                label: "ground",
            }
        );
        ground.render.fillStyle = "gray";

        const leftWall = Matter.Bodies.rectangle(
            this.WALL_T / 2,
            MatterEnvironment.height / 2, 
            this.WALL_T, 
            MatterEnvironment.height, {
            isStatic: true,
            label: "leftWall",
        });
        leftWall.render.fillStyle = "gray";

        const rightWall = Matter.Bodies.rectangle(
            MatterEnvironment.width - this.WALL_T / 2,
            MatterEnvironment.height / 2,
            this.WALL_T,
            MatterEnvironment.height,
            {
                isStatic: true,
                label: "rightWall",
            }
        );
        rightWall.render.fillStyle = "gray";

        this._walls.push(ground, leftWall, rightWall);
    }
}