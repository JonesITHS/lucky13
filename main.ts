mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Dragonfly`, SpriteKind.Player))
game.onUpdate(function () {
    let mySprite: Sprite = null
    controller.moveSprite(mySprite)
})
