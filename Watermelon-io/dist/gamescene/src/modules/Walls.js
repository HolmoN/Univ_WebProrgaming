"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Walls = void 0;
var Matter = __importStar(require("matter-js"));
var MatterEnvironment_1 = require("./MatterEnvironment");
var Walls = /** @class */ (function () {
    ///----------
    ///メソッド
    ///----------
    function Walls() {
        ///----------
        ///定数
        ///----------
        this.WALL_T = 10; //壁の厚さ 
        ///----------
        ///ローカル変数
        ///----------
        this._walls = [];
        var ground = Matter.Bodies.rectangle(MatterEnvironment_1.MatterEnvironment.width / 2, MatterEnvironment_1.MatterEnvironment.height - this.WALL_T / 2, MatterEnvironment_1.MatterEnvironment.width, this.WALL_T, {
            isStatic: true,
            label: "ground",
        });
        ground.render.fillStyle = "gray";
        var leftWall = Matter.Bodies.rectangle(this.WALL_T / 2, MatterEnvironment_1.MatterEnvironment.height / 2, this.WALL_T, MatterEnvironment_1.MatterEnvironment.height, {
            isStatic: true,
            label: "leftWall",
        });
        leftWall.render.fillStyle = "gray";
        var rightWall = Matter.Bodies.rectangle(MatterEnvironment_1.MatterEnvironment.width - this.WALL_T / 2, MatterEnvironment_1.MatterEnvironment.height / 2, this.WALL_T, MatterEnvironment_1.MatterEnvironment.height, {
            isStatic: true,
            label: "rightWall",
        });
        rightWall.render.fillStyle = "gray";
        this._walls.push(ground, leftWall, rightWall);
    }
    Object.defineProperty(Walls.prototype, "objects", {
        ///----------
        ///プロパティ
        ///----------
        get: function () {
            return this._walls;
        },
        enumerable: false,
        configurable: true
    });
    return Walls;
}());
exports.Walls = Walls;
