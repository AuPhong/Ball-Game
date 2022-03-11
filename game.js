import Ball from "./Ball.js";
import InputHandler from "./input.js";
import Paddle from "/BallGame/paddle.js";
import Brick from "./brick.js";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
    }

    start() {
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)
        this.brick = new Brick(this, {x:20, y:20})
        new InputHandler(this.paddle)
        this.gameObjects = [
            this.ball,
            this.paddle,
            this.brick
        ]
    }


    update(deltaTime) {
        this.gameObjects.forEach(object => object.update(deltaTime))
    }

    draw(ctx) {
        this.gameObjects.forEach(object => object.draw(ctx))
    }
}