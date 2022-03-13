import {detectColision} from "./colisionDetection.js";

export default class Brick {
    constructor(game, position) {
        this.img = document.getElementById('brick_img')
        this.position = position
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.game = game
        this.width = 60
        this.height = 30
        this.markedForDeletion = false
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)

    }

    update() {
        if (detectColision(this.game.ball, this)) {
            // console.log('va cham')
            this.game.ball.speed.y = -this.game.ball.speed.y
            this.markedForDeletion = true
        }

    }
}