namespace SpriteKind {
    export const fex = SpriteKind.create()
    export const heart = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.heart, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    heart.destroy(effects.hearts, 100)
    music.powerUp.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 150, 0)
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    music.pewPew.play()
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 3 3 3 3 3 3 3 3 3 3 . . 
        . . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . . . 3 . . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . 3 . . . . . . 3 3 . . . 
        . . . . . . . . . . . . 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . . . . . . . . . . 
        . . . 3 3 . . . . . . 3 . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . . . . . . 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    320,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    projectile.destroy()
    music.knock.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 100)
    music.knock.play()
    info.changeLifeBy(-1)
})
let astord: Sprite = null
let projectile: Sprite = null
let heart: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    fffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbb
    fffffffffffff1fffffffffffffff1fffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbb
    fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff11fffffff1fffffff1ffffffffffffffff1fffff1ffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbb
    fffffffffffffffffffffffff1fffffffff1ffffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbb
    fffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1fffffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bb
    ffffffffffff1ffffffffffffffffffffffffffffff1ffffff1ffffffffffffffffffffffffff1ffffffffffffffffffffffffffff1fffffffff99bbbbbbe6969666666666888888888888888888888b
    fffff1ffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888e
    ff1fffffffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88
    ffffff1fffffffff1fffff111fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88
    fffffffffffffffffffffff1ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff1fffffff1ffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb88
    fffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd
    fff1ffffffffffffffff1fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d88888
    ffffffffffffffffffffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff1fffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb666666888888888888888888888
    ffffffffff1ffffffffffffffffffff1ffffffffffffffffffff1ffffffffffffffffff1ffffffffffff1fffffffffffffffffffffffffffffff9bbbbbbbcccccccb6666666888888888888888888888
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff9bbbbbbbccccccbb6666666888888888888888888888
    ffffffffffffffff1fffffffffff1ffffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb66666688888888888888888888888
    fffffff1ffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffff1ffffffffffffffffffff11fffffffffffffffffffffff99dbbbcbbccccb66666688888888888888888888888
    fffffffffffffffffffffffffffffff1fffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc66666686886888888888888888888
    fffffffffffffffffffffffffff1fffffffffffffffffffffff1ff1ffffffffffffffffffffffffffffffff1ffffffffffffff111ffffffffffff999bbbbbccccbc66666666886888888888888888888
    fffffffffff11fffffffffff1ffffffff1f1fffff1ffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc696666666686888688888888888888
    ffffff1fffffff1ffffffff1ffffffffffffffffffffff1fff1fffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb6688888888688888888888888
    ffff1ffffffffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ffffffffff1fffffffffffffffffffffff9999bbbcccc9666dbbb88888888888888888888888
    ffffffffff1ffffff1fffffffffff1ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff11ffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888
    fffffffffffff11ffffffffffff111fffffffffffff1ff1ffffffffffffffffffffffffffff11fffffffffffffffff1fffffffffff1ffffffffffff9999bbcccc666666dbbdd88888888688888888888
    fffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888
    fffffffff1fffffffff1ffffff1fffffffff1ffffffffffffffffff1fffffffffffffff1fffffffffffff1ffffffffffff1fffffffffffff1fffffff9696bbbcc66666666dbbd6886868888888888888
    ffffffffffff1ffffffff1fffffffffffffff1ffffffffffffff1ffffffffff11fffffffffffffffffffff1ffffffffffffffffffffffffffffffffff999ebbccc666666666dbb886888868888888888
    ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb86888888888888888
    fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff96ccccc966966666666bb86886668888888888
    fffff1ffffffffffffffffffffffffffffffffffffffffff1fffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffff99ccbc996666666666dbb6888668888888888
    fffffffffffffffffffffffffffffffffffffffffff1ffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff969ccb9666666666666dbb888668888888888
    fffffffffffffff1ff1f1ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff1fffffffffffffffffffffffff969ccc6696666666666dd888866888888888
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1fff1fff1ffffffffffffffffffffffffff969cc9669666966d66dd888886888888888
    fffffffffffffffffffffffffffffffffffff1fff1ffffffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd88886888888888888
    fffffffffff1fffffffffffff1ffffff1ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1ffff1ffffffffffffffffffffffff96c66669966666dd88886666668888888
    fff1ffffffffffffffffffff111ffffffffff1ffffffffff1fffff1ffffffffffffffffffffffffffffffffffffffff1fffff1ffffffffffffffffffffffffff96966669966ddd686886868888888888
    fffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff9696666966666666886868888888888
    fffffffffff1fffff1fffffff1fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff996696696666666688688888888888
    fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff1ffff1ffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff1fffffffffffffffffffff1ffff1ffffffffffffffffffffffffffffff96999666666888888118888888
    ff1fff1ffffffff1ffffff1fffffff111fffff1f1fffffffffffff1ffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffff9969996666888818188888888
    fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff9961161186618811188886
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666
    fff1fffffffffffffffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff9999661166669999
    fffffff1fffffff1ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffff1ffffff1fffffffffff1ffffffffffffffffffffffffffffffff999999999fff
    ffffffffffffffffffff1ffffffffffffffffffffffff1ffffffffffffffffffff1fffffffffff1fffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff1ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffff1ff1fffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffff
    fff1f1ffffff1ffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffffffffffff1ffffffffff1fffffffffff1ffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffff1ffffffffffffffffff1fffffffff1fffffffffffffffffffffffffffff1ffffffffffffffffff1ffffffffff11fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff1ffffffffffffff1ffffff1fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffff
    ffffffffff1fffff1fffffffffffffffffffff1ffff1ffffffffffffffffffffffffffffffffffffffff1ffffff1fffffffffffffffffffffff1fffffffffffffffffffffffffffff11111ffffffffff
    f1fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffff1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff11ffff
    fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff1ffff1fffffffffffffff1fffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    fffff1f1ffffffffffffffffff1ffffff1fffffffffffffffffffff1fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff1ffffff1ffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fff1fffffffffffffffffff1fffffffff
    cccf1ffffffffffff1f1fffffffff1ffffffffffffffffffffffffffff1ff1ffffffffffff1ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    bbc111ffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbb1ccfffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff1ffffffffffff1fffff1fffffffffffffffffffffffffffffff1ff1ffffffffffffffffffffffffff
    bcbbbbbccffffffffffffffff1fffffffff1fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff1fffffffffffffffffffffffff
    bbccccbbcccfffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff1fffffff1fffffffffff1fff1fffffffffffffffffffffffff
    bbbbbbcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbcccffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
    bbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbccfffffffffff1fffffffffff1ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffffff
    bbbbb1bbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff1fffffffffffffff
    bbbbbbbbbbbbbb1bbbbcccffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff11fffffffffffffffff1ffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbcccfffffffffffff1fffffff1ffffffffff1f1ffffffffffffffffffffff1ffffff1fffffffffffffffffffffffffffffff1ffffffff1ffffffffffffffff1ffffff1ffffff
    bbbbbbbbbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbcbbbbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffff1ffffffff
    bbbbbbbbbbbbbbbbbbbbbbccbbbbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbccccbbccfffffffffffffffffffffffffffffffff1ffffffffff1fffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbcccccffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ffffffffffff
    ccbbbbbb1bbbbbbbbbbbbbbbbbbbbcccfffffffffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
    ffccccbbbbbbbbbbb1bbbbbbbbbbbbbbccffffffffffff1ffffff11ffffffffffffffffffff1fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1ffffffffffffffff1fff
    fffffccbbbbb1bbbbbbbbbbbbbbbbbbbbccfffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ff1fffccbbbbbbbbbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffff1ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff
    ffffffffcbbbbbbbbbbbbbbbb1bbbbbbbbccccfffffffffffff1fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff1ffffffffffffffffffffffffffffffffffffffff1ffffff1ffffffff
    fffffffffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff
    fffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffffffffffffffffffffffff1fffffffff1111fffffffffffff1fff1ffffffffffff1ffffff1ffffffffffffffffffffffffffffffffffffffffff
    ffff1fffffcccccbbbbbb1bbbbbbbb1bbbbbccbccffff1fffffffffffffffffffffffffffffff1f1ffffffffffffffffffffffffffffffffffff1fff1fffffffffffffffffffffffffffffffffffffff
    ffffffffffcbcbbcbbb1bbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffff1ffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffff1fffffffff
    fffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffff1ffffffff1f
    fffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1ffffffffffffffff1f
    fffffffffffffffccccbbbbbbbbbbbbbbbbbbbbbbbbbccffffffff1fffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f
    fffffffffffffffffbccbbbbbbbbbbbb1bbbbbbbbbbbccfffffffffffff1fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f
    fffffffffffffffffcbbcbbbbbbbbbbbbbbbbbbb1bbbbcfffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff1fffffffffffffffff1ffffffffffffffffffffffff1ffffff1f
    fff1fffffffffffffcbbbcbbbbbbbbbbbbbbbbbbbbbbbcfffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1f1ffffffffccbbbcbbbbbbbbbbbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffff
    ffff1ffffffffffffcccbbcbbbb1bbbbb1bbbbbbbbbbbccccffffffffffffff1ffff1fffffffffffffffffffffffffffff1fffff1fffffffffffffffffff1fffffffffffffffffffffffffffffffff1f
    fffffffffffffffffffccbbcbbbbbbbbbbbbbbbbbb1bbbcccfffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1fffff1fffffffffffffffffffffffffff1ff1ffffffffffff
    ffffffffff1fffffffffcbbbcbbbcbbbbbbbbbbbbbbbbbbbccfffffffffffffffffffffffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff1ffffffffffcbbbbbbcbbbbbbbbbb1bbbbbbbbbccfffff1fffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffff1ffff1fffffffffffff1ffffffffff1ff
    ffff1ffffffffffffffffccbbbbbcbbbbbbbbbbbbbbbbbbbbccffffffffffffffff1ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff1ff
    fff1ffffffffffffffffffccbbb1bcbbbbbbbbbbbbbbbbbbbbcfffffff1ffffffffffffffffff1fff1ffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff1ffffffff1fffff
    ffff1fffffffffff1ffffffccbbbbbccbbbbbbbbbbbbbbbbbbccccfffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffcbbbbbbbcbbbbbbbb1bbbbbbbbbbccccffffffffffffffffffffffffffffff11ffffffffffffffffffff1fffffffffff1fffffffffff1fffffffffffffffffffffffffff
    fffffffff11fffffffffffffccbbbbbbbcbbbbbbbbbbbbbbbbbbbbbcffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbccffffff1ffffff1ffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffff
    fffffffffffff1ffffffffffffccbbbbbbbbbbbbbbbbbbbbbbbbbbbccfffffffffffffffffffffffffffffffffffffffffff1ffffffffff1fff1ffffffffffffffffffffffffffff1fffffffffffffff
    ffffff1ffffffffff1ffffffffccbcbbb1bbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffff11ffffffffffffffff1ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffcccbbbbbbbbbbbbbbbbbbbbbbbbbbbcffffffffffffffffff1fffffff1ffffffffffffffffffffffffffffffffffffffffffffff11ffffffff1ffffffffffffffffff
    ffffffffffffffffffff1ffffffffccbbbbbbbb1bbbbbbbbbbbbbbbbbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff1ff1ffffffffffffffffff1fffcbbbbbbbbbbbbbbbbbbbbbbb1bbbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff1fffff1fffffffffffffccbbbbbbbbcccbbbbbbbbbbbbbbbbcffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffcccbbbbbbbbbbcbbbbbbbbbbbbbbbccfffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffcccccbbbbbbbbbbbbbbbbbbbbbbbbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffbbbbbbbccccbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcbbbbbbbbcbbbbbbbbbbbbbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let mySprite2 = sprites.create(img`
    .......bbbb........bbbb..........
    .......c99bb......bb99b..........
    .......c999bb....bb999c..........
    .......c9b99bccccb99b9c..........
    .......c9bb99bccb99bb9c..........
    .......c93b99999999b39c..........
    .......c93399999999339c..........
    .......c99399999999399c..........
    .......c99999991199999c..........
    .......c999ff91119ff99c..........
    .......c999ff91111ff99c..........
    .......c99991111111999c..........
    .......c9991111fff1199c..........
    .......c999c11fff1199bc..........
    .......c999cc111111c9bc..........
    ......ff99999bb33cc99bcff........
    .....ffff99999b33c9999cfff.......
    .....ffff999999bb9999cffff.......
    .....fff1c99ccccccf99c1fff.......
    .....fff1c99cfffffc99c1fff.......
    ......fffc99cc1111c99cfff........
    .......fff999cffffc99cff.........
    .......f1fc999c111c99c1f.........
    .......f111c99c11cc99c1f.........
    .......f111c99c11c999c1f.........
    .......f1111cc111c99c11f.........
    .......f111111111c99c11f.........
    ......fff111111111cc11fff........
    ......fff1111111111111fff........
    ........f1111111111111f..........
    ........f1111111111111f..........
    ........ff11111111111ff..........
    .........fffffffffffff...........
    ..............fff................
    .................................
    .................................
    .................................
    .................................
    .................................
    .................................
    `, SpriteKind.fex)
mySprite2.setPosition(73, 56)
mySprite2.sayText("can you hear things in space", 5000, false)
pause(2000)
mySprite2.sayText("if you said no then you are correct", 5000, false)
pause(2000)
mySprite2.destroy(effects.clouds, 0)
mySprite = sprites.create(img`
    ..ccc.........fffffff...
    ..f4cc.......ffcc22ff...
    ..f44cc...fffccccfff....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2c.
    f22ccccccc222299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `, SpriteKind.Player)
mySprite.setPosition(28, 55)
mySprite.setStayInScreen(true)
info.setLife(3)
info.setScore(0)
controller.moveSprite(mySprite, 150, 150)
game.onUpdateInterval(5000, function () {
    heart = sprites.create(assets.image`heart`, SpriteKind.heart)
    heart.setPosition(150, randint(5, 155))
    heart.setVelocity(randint(-50, -150), 0)
})
game.onUpdateInterval(500, function () {
    astord = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . c a f b c . . . . . . . 
        . . . . b f f b c c . . . . . . 
        . . . a a f b a b a c . . . . . 
        . . . c a c b b f f b . . . . . 
        . . . . b f f b f a b . . . . . 
        . . . . a f f b b b a . . . . . 
        . . . . . a b b c c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    astord.setFlag(SpriteFlag.AutoDestroy, true)
    astord.setPosition(150, randint(5, 155))
    astord.setVelocity(randint(-70, -125), 0)
})
