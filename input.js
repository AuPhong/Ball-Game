export default class InputHandler {
    constructor(paddle) {
        document.addEventListener('keydown', move)
        function move(evt) {
            switch (evt.keyCode){
                case 37:
                    paddle.moveLeft()
                    break
                case 39:
                    paddle.moveRight()
                    break
            }
        }

        document.addEventListener('keyup', cancel)
        function cancel(evt) {
            switch (evt.keyCode){
                case 37:
                    if (paddle.speed<0){
                        paddle.stop()
                    }
                    break
                case 39:
                    if (paddle.speed>0){
                        paddle.stop()
                    }
                    break
            }
        }
    }
}