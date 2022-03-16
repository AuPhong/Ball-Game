import Ball from "./Ball.js";
import InputHandler from "./input.js";
import Paddle from "./paddle.js";
import {buildLevel, level1} from "./level.js";
import Ball2 from "./Ball2.js";


const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    WIN: 4
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.gamestate = GAMESTATE.MENU
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)
        this.ball2 = new Ball2(this)
        new InputHandler(this.paddle, this)
        this.gameObjects = []
        this.lives = 3
        this.bricks = []
    }


    start() {
        if (this.gamestate !== GAMESTATE.MENU) {
            return
        }

        this.bricks = buildLevel(this, level1)
        this.gameObjects = [this.ball,this.ball2, this.paddle]

        this.gamestate = GAMESTATE.RUNNING
    }


    update(deltaTime) {
        if (this.lives === 0) {
            this.gamestate = GAMESTATE.GAMEOVER
        }

        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU || this.gamestate === GAMESTATE.GAMEOVER) {
            return
        }

        if (this.bricks.length === 0) {
            this.gamestate = GAMESTATE.WIN
        }

        [...this.gameObjects, ...this.bricks].forEach(object => object.update(deltaTime))
        this.bricks = this.bricks.filter(object => !object.markedForDeletion)
    }

    draw(ctx) {
        [...this.gameObjects, ...this.bricks].forEach(object => object.draw(ctx))
        if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,0.5)"
            ctx.fill()

            ctx.font = "30px Arial"
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'
            ctx.fillText("Pause", this.gameWidth / 2, this.gameHeight / 2)
        }

        if (this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,5)"
            ctx.fill()

            ctx.font = "30px Arial"
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'
            ctx.fillText("Press SPACEBAR to start", this.gameWidth / 2, this.gameHeight / 2)
        }

        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,5)"
            ctx.fill()

            ctx.font = "30px Arial"
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2)
        }

        if (this.gamestate === GAMESTATE.WIN) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = "rgba(0,0,0,5)"
            ctx.fill()

            ctx.font = "30px Arial"
            ctx.fillStyle = 'white'
            ctx.textAlign = 'center'
            ctx.fillText("YOU WIN", this.gameWidth / 2, this.gameHeight / 2)
            return
        }
    }

    togglePause() {
        if (this.gamestate === GAMESTATE.PAUSED) {
            this.gamestate = GAMESTATE.RUNNING
        } else {
            this.gamestate = GAMESTATE.PAUSED
        }

    }
}