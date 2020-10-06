/** 
Title: Ghost knight
Creators: Prem and Liam
Description:A knight killing the undead

 */
// Setup
info.setLife(3)
info.setScore(0)
info.changeScoreBy(5)
info.highScore()
// sprite
let knight_facing_left = img`
    ........................
    ..............ffff......
    .............f111fff....
    ...........ff1111111ff..
    ..........ff111111111ff.
    ..........f11111111111f.
    .........f1fffffff1111f.
    .........f511f11111555ff
    ..cc.....f111f11111111ff
    ..cdcc...f111f111111111f
    ..ccddcc..f11f11111111f.
    ....cdddcfff111111111f..
    .....ccdcddffffffffff...
    ......cccdd11f111111f...
    .........ffffffffffff...
    .............ff...fff...
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
`
let knight_facing_right = img`
    ........................
    .......fff..............
    ....fffff1f.............
    ..ff1111111ff...........
    .ff111111111ff..........
    .f11111111111f..........
    .f1111fffffff1f.........
    ff555111111f15f.........
    ff111111111f11f.....cc..
    f1111111111f11f...ccdc..
    .f111111111f1f..ccddcc..
    ..f1fffffffffffcdddc....
    ...f1111111ffddcdcc.....
    ...f111111f11ddccc......
    ...ffffffffffff.........
    ...fff...ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
`
let knight = sprites.create(knight_facing_right, SpriteKind.Player)
knight.x = 40
knight.ay = 100
let can_double_jump = true
// sprite controls
controller.player1.moveSprite(knight, 50, 0)
function on_jump() {
    let can_double_jump: boolean;
    if (can_double_jump) {
        can_double_jump = true
    }
    
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function jump() {
    
    if (can_double_jump) {
        knight.vy = -70
        can_double_jump = knight.isHittingTile(CollisionDirection.Bottom)
    }
    
})
game.onUpdate(function on_update() {
    
    if (knight.isHittingTile(CollisionDirection.Bottom)) {
        can_double_jump = true
    }
    
    if (knight.vx < 0) {
        knight.setImage(knight_facing_left)
    } else if (knight.vx > 0) {
        knight.setImage(knight_facing_right)
    }
    
})
// Background and tiles
scene.setTileMap(img`
    ................................................
    ................................................
    ................................................
    .............c..............c.............c.....
    .......................c................c.c....8
    ......c..cc......c..c.c.cc.....c......c.c.cc....
    .....c444444c...cc.c........c.c4cc...cc4c4c44c..
    ccccc4444444cc4c44c44c4c4cc44c44444c4c44444444cc
`)
scene.cameraFollowSprite(knight)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccc111111cccccccccccccccccccccccccc1111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc111111111ccccccccccccccc111ccccc111111111111cccccccccccddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc11111cccc111111111111ccccccccccccccc1111111111111111cccccccccccdddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc1111111111111111c1111ccccccccccccccc1111111111111cccccccccccdddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc11111111111111ccccccccccccccccccccccc1111111111cccccccccccddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccc111111111cccccccccccccccccccccccccccc1111111cccccccccccddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddcccccccccc111ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddccccccccc1111cccccccccccccc1111111111111ccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddccccccccc1111111cccccccc1111111111111111111111ccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddccccccccc1111111111111111111111111111111111111111111cccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccccc111111111111111111ccccccccc111111111111111cccccccccccccc
    ccccccccccccccc111111111cccc11111111111ccccccc11111cccccccccccccdddddddddddddddddddddddddddddddcccccccccccc111111111111cccccccccccccccccc111111111cccccccccccccc
    ccccccccccccccc111111111111111111111111111111111111cccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111111111111111cccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc11111111ccccccc11111111111ccccccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccc2cccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccc22ccccccc2ccccccccccccccccccccccccccccddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccc242ccccc24ccccccccccc2ccccccccccccccccddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccc111cccccccccccccccc
    cccccccccccccccccccccccccc24442cccc24cccccccccc222ccccccccccccccccddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccc1111cccccccccccc111
    ccccccccccccccccccccccccc4244424cccf4cccccccccc244cccccccccccccccccddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc1111111cccccc111111
    ccccccccccccccccccccccccc2cfff2cccfffccccccccc22242cccccccccccccccccdddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccc11111111cc11111111
    ccccccccccccccccccccccccccfffffcccffffccccccccf2ff2fccccccccccccccccccddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111c
    cccccccccccccccccccccccccfffffffcccffccccccccccf2ffccccccccccccccccccccdddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111cccc
    ccccccccccccccccccccccccccffffccfccfffcccccccffffffcccccccccccccccccccccccdddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111cccccc
    cccccccccccccccccccccccccffffffcccfffcccccccccffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111ccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccffcfffffccffffcccccccfffffcffcccccccc111cccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111111ccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccffffff777fffccccccfffffffcccccccccc11111ccccccccccccccccccccccccccccc111ccccccccccc1111111111111111111111ccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccffffff7777777777777ccffffffccccccccc1111111ccccccccccccccccccccccccccc111111ccccc1111111111111ccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccc2ccccccccccfffff7777777777777777ccffffffccccccccc111111111111111111ccccccccccccccc1111111111111111111ccccccccccccccccccccccccccc2cccccccccccccccccc
    cccccccccccc242ccccccccccc77777777777777777777777ccccccccccccccc1111111111111111cccccccccccccccc111111111111111cccccccccccccccccccccccc2cccc22cccccccccccccccccc
    cccccccccccc24cccccccccc77777777777777777777777777cccccccccccccccc11111111111111cccc2cccccccccccccc111111111ccccccccccccccccccccccccccc22ccc24cccccccccccccccccc
    cccccccccccf42ccccccccc7777777777777777777777777777ccccccccccccccccccccccccccccccccc22ccccccccccccccccccccccccccccccccccccccccccccccccc42cc224cccccccccccccccccc
    ccccccccccff2ffcccccc7777777777777777777777777777777cccccccccccccccccccccccccccccccc24cccccccccccccccccccccccccccccccccccccccccccc2ccc2442c44422cccccccccccccccc
    cccccccccccfffccccc7777777777777777777777777777777777cccccccccccccccccccccccccccccc2442cccc2ccccccccccccccccccccccccccccccccccccc222cc4422cc44cccccccccc4ccccccc
    ccccccccccccfffccc777777777777777777777777777777777777cccccccccccccccccccccccccccccf2ffcccc2ccccccccccccccccccccccccccccccccccccc242cccffccffffffcccccc24ccccccc
    ccccccccccffffcc777777777777777777777777777777777777777ccccccccccccccccccccc22ccccccffccccc22ccccccccccccccccccccccccccccccccccc2242cfffffffffccccccccc24ccccccc
    cccccccccccfff777777777777777777777777777777777777777777ccccccccccccccccccc2444cccffffffcc242cccccccccccccccccccccccccccccccccccc2422cffffcccffccccccc222ccccccc
    ccccccccccccf77777777777777777777777777777777777777777777ccccccccccccccccc224242cccffffccc242ccccccccccccccccccccccccccccccccccfff44ccfffffccfcccccccc2442cccccc
    cccccccccccc7777777777777777777777777777777777777777777777cccccccccccccccccc442ccccfffffccf4fccccccccccccc2ccccccccccccccccccccfffffffffffcccfcccccccc2444cccccc
    ccccccccccc77777777777777777777777777777777777777777777777ccccccccccccccccfffff2cffffffffcffffccccccccccc22cccccccccccccccccccccfffffffffffffffffcccc44ffffccccc
    cccccccccc7777777777777777777777777777777777777777777777777ccccccccccccccffffffcffffffffffcffcccccccccccc2442cccccccccccc2cccccfffffccfffff77777777ccffffffccccc
    cccccccc7777777777777777777777777777777777777777777777777777cccccccccccccccffffffccffffccccfffcccccccccc22422cccccccccccc2ccccfffffff777777777777777ccfffffccccc
    ccccccc777777777777777777777777777777777777777777777777777777cccccccccccccffffffcc77f777ccfffccccccccccf2224ffccccccccccc42cccccfff7777777777777777777ffffcccccc
    cccccc77777777777777777777777777777777777777777777777777777777cccccccccccfffffff7777777777777777cccccccfc224fcccccccccccc4fcccc777777777777777777777777ffccccccc
    ccccc7777777777777777777777777777777777777777777777777777777777cccccccccccccfff77777777777777777777cccccff22fcccccccccccfffcccc77777777777777777777777777ccccccc
    ccc7777777777777777777777777777777777777777777777777777777777777ccccccccccc77777777777777777777777777ccfffffffcccccccccccfcccc7777777777777777777777777777cccccc
    cc777777777777777777777777777777777777777777777777777777777777777cccccccc777777777777777777777777777777fffffffccccccccccffffcc777777777777777777777777777777cccc
    c777777777777777777777777777777777777777777777777777777777777777777ccccc77777777777777777777777777777777fffffccccccccccccffcc777777777777777777777777777777777cc
    77777777777777777777777777777777777777777777777777777777777777777777ccc777777777777777777777777777777777777ff7cccccccccfffff777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccccccff77777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccccccccc777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccccccc77777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cccc777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
`)
game.splash("press a to start")
game.splash("press a to jump")
function death() {
    info.changeLifeBy(-1)
}

scene.setTile(12, img`
    a a a c c a a a a a a c c a a a
    c c c c c c c c c c c c c c c c
    a a a a c a a c a c a a a a a c
    a a c a a a c a a a a c a c a a
    c c c c c c c c c c c c c c c c
    c a a a c a a a a c a a a a c a
    c c a a a a c a c a a c a a a a
    c c c c c c c c c c a a c a c c
    a c a a c a c a a c c c c c c c
    a a c a a a c a a c a c a a c a
    c c c c c c c c c c a a a c c c
    c a a a a a a a a a c c c a a c
    c c c c c c c c c c c c c c c c
    a a c c a a a a a a c c a a a a
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
`, true)
scene.setTile(3, img`
    a a a c c a a a a a a c c a a a
    3 3 3 3 c 3 3 3 3 3 3 3 c 3 3 3
    3 3 3 3 a 3 3 3 3 3 3 3 a 3 3 3
    a a 3 3 a 3 3 3 3 3 3 3 a c a a
    c a a a a a 3 4 3 3 a a a a c c
    c 3 3 3 3 3 3 4 4 3 3 3 3 3 3 a
    c c 3 3 3 3 4 5 5 4 3 3 3 3 3 a
    c c c a 3 a 4 1 1 4 3 3 a a a c
    a a 3 3 3 3 c 4 4 4 3 3 3 3 a a
    a a a 3 3 3 a e e a 3 3 3 a a a
    c c c c 3 a a c c a a 3 a c c c
    c a a a a a a a a a a a a a a c
    c c c c c c c c c c c c c c c c
    a a c c a a a a a a c c a a a a
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
`, true)
scene.setTile(4, img`
    5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4
    4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5
    4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5
    2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4
    2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4
    4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2
    2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2
    4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4
    5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4
    4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5
    4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5
    5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5
    5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4
    4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4
    4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4
    4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4
`, true)
scene.onHitTile(SpriteKind.Player, 4, function on_hit_tile(sprite: Sprite) {
    sprite.setPosition(sprite.x - 20, sprite.y - 20)
    scene.cameraShake()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    sprite.say("ouch")
})
