mySprite = sprites.create(assets.image("""
    Dragonfly
"""), SpriteKind.player)
controller.move_sprite(mySprite)

def on_on_update():
    pass
game.on_update(on_on_update)
