input.onButtonPressed(Button.A, function () {
    player_x_pos += -1
    Spensa.delete()
    Spensa = game.createSprite(player_x_pos, 4)
})
input.onButtonPressed(Button.AB, function () {
    Destructors.delete()
    Destructors = game.createSprite(player_x_pos, 4)
    for (let index = 0; index < 4; index++) {
        Destructors.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    Destructors.delete()
})
input.onButtonPressed(Button.B, function () {
    player_x_pos += 1
    Spensa.delete()
    Spensa = game.createSprite(player_x_pos, 4)
})
let Destructors: game.LedSprite = null
let Spensa: game.LedSprite = null
let player_x_pos = 0
let player_y_pos = 4
player_x_pos = 2
let Krell_y = randint(0, 4)
let Krell_x = randint(0, 4)
Spensa = game.createSprite(player_x_pos, player_y_pos)
Destructors = game.createSprite(player_x_pos, player_y_pos)
let Krell = game.createSprite(Krell_x, Krell_y)
let Krell_2 = game.createSprite(2, 0)
let DestructorsKrell = 0
basic.forever(function () {
    Krell.ifOnEdgeBounce()
    Krell_2.ifOnEdgeBounce()
})
basic.forever(function () {
    if (Spensa.isTouching(Krell)) {
        game.gameOver()
    }
})
basic.forever(function () {
    Spensa.set(LedSpriteProperty.X, player_x_pos)
    Destructors.set(LedSpriteProperty.X, player_x_pos)
    Krell.set(LedSpriteProperty.X, Krell_x)
    Krell.set(LedSpriteProperty.X, Krell_x)
    Krell.set(LedSpriteProperty.X, Krell_x)
})
basic.forever(function () {
    basic.pause(1000)
    if (randint(0, 1) == 1) {
        if (randint(0, 1) == 0) {
            Krell.change(LedSpriteProperty.Y, 1)
            Krell_2.change(LedSpriteProperty.Y, 1)
        } else {
            Krell.change(LedSpriteProperty.Y, -1)
            Krell_2.change(LedSpriteProperty.Y, -1)
        }
    } else {
        if (randint(0, 1) == 0) {
            Krell.change(LedSpriteProperty.X, 1)
            Krell_2.change(LedSpriteProperty.X, 1)
        } else {
            Krell.change(LedSpriteProperty.X, -1)
            Krell_2.change(LedSpriteProperty.X, -1)
        }
    }
})
basic.forever(function () {
    if (Krell.isTouching(Destructors)) {
        Krell.delete()
        game.addScore(1)
        Krell = game.createSprite(randint(0, 4), 0)
    }
    if (Krell_2.isTouching(Destructors)) {
        Krell_2.delete()
        game.addScore(1)
        Krell_2 = game.createSprite(randint(0, 4), 0)
    }
})
