def on_on_score():
    game.over(True, effects.hearts)
    music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
            5000,
            0,
            255,
            0,
            500,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        SoundExpressionPlayMode.UNTIL_DONE)
info.on_score(100, on_on_score)

def on_a_released():
    info.change_score_by(info.high_score())
    info.change_score_by(100000000)
controller.A.on_event(ControllerButtonEvent.RELEASED, on_a_released)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    mySprite.set_position(randint(10, 50), randint(10, 50))
    info.change_score_by(1)
    mySprite3.set_position(randint(20, 40), randint(10, 100))
    info.change_life_by(info.score())
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    mySprite3.set_position(randint(20, 40), randint(10, 100))
    info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

mySprite3: Sprite = None
mySprite: Sprite = None
info.set_life(3)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.food)
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite2.set_position(24, 43)
controller.move_sprite(mySprite2)
mySprite3 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
info.set_score(0)
scene.set_background_color(2)