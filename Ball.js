import {detectColision} from "./colisionDetection.js";

export default class Ball {
    constructor(game) {
        this.img = document.getElementById('ball_img')
        this.position = {x: 10, y: 300}
        this.speed = {x: 10, y: -2}
        this.size = 16
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.game = game
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y

        // check collision to left or right of the wall
        if (this.position.x + this.size > this.gameWidth || this.position.x<0){
            this.speed.x = -this.speed.x
        }

        // check collision to the top or bottom of the wall
        if (this.position.y + this.size > this.gameHeight || this.position.y<0){
            this.speed.y = -this.speed.y
        }


        if(detectColision(this, this.game.paddle)){
            this.speed.y = -this.speed.y
            this.position.y = this.game.paddle.position.y - this.size
        }
    }
}