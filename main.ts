info.onScore(100, function on_on_score() {
    game.over(true, effects.hearts)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
controller.A.onEvent(ControllerButtonEvent.Released, function on_a_released() {
    info.changeScoreBy(info.highScore())
    info.changeScoreBy(100000000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    mySprite.setPosition(randint(10, 50), randint(10, 50))
    info.changeScoreBy(1)
    mySprite3.setPosition(randint(20, 40), randint(10, 100))
    info.changeLifeBy(info.score())
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    mySprite3.setPosition(randint(20, 40), randint(10, 100))
    info.changeLifeBy(-1)
})
let mySprite3 : Sprite = null
let mySprite : Sprite = null
info.setLife(3)
mySprite = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 . . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . . . . . . . . . 3 3 3 3 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Food)
let mySprite2 = sprites.create(img`
        . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            f f f . . f f f f . . f f f f . 
            f f . . . f f f f . . . . f f . 
            f f . . . f f f f . . . . f f . 
            . . . . . f f f f . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . . . f f f f . . . . . . .
    `, SpriteKind.Player)
mySprite2.setPosition(24, 43)
controller.moveSprite(mySprite2)
mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
    `, SpriteKind.Enemy)
info.setScore(0)
scene.setBackgroundColor(2)
