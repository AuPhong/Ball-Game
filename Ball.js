export default class Ball {
    constructor(game) {
        this.img = document.getElementById('ball_img')
        this.position = {x: 10, y: 10}
        this.speed = {x: 10, y: 5}
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

        // check collision to the paddle
        let bottomOfBall = this.position.y + this.size
        let topOfPaddle = this.game.paddle.position.y
        let rightPaddle = this.game.paddle.position.x + this.game.paddle.width
        let leftPaddle = this.game.paddle.position.x
        // console.log(this.game.paddle.position.x)
        // console.log(bottomOfBall)
        if(bottomOfBall > topOfPaddle && this.position.x>=leftPaddle && this.position.x+this.size<=rightPaddle ){
            this.speed.y = -this.speed.y
            this.position.y = this.game.paddle.position.y - this.size
        }
    }
}