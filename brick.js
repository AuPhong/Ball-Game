export default class {
    constructor(game, position) {
        this.img = document.getElementById('brick_img')
        this.position = position
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight
        this.game = game
        this.width = 60
        this.height = 30
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)
    }

    update(){

    }
}