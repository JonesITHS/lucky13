let mySprite = sprites.create(assets.image`Dragonfly`, SpriteKind.Player)
game.onUpdate(function () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
