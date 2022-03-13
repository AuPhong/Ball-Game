export function detectColision(ball, gameObject){
    let bottomOfBall = ball.position.y + ball.size
    let topOfBall = ball.position.y

    let topOfObject = gameObject.position.y
    let rightObject = gameObject.position.x + gameObject.width
    let leftObject = gameObject.position.x
    let bottomObject = gameObject.position.y + gameObject.height

    if(bottomOfBall >= topOfObject &&
        topOfBall <= bottomObject &&
        ball.position.x >= leftObject &&
        ball.position.x + ball.size <= rightObject )
    {
        return true
    } else {
        return false
    }
}