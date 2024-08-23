let p1 = mp.playerSelector(mp.PlayerNumber.One)
let p2 = mp.playerSelector(mp.PlayerNumber.Two)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Dragonfly`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Dragonfly`, SpriteKind.Player))
game.onUpdate(function () {
    game.reset()
})
