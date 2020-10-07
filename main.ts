/** 
Title: Ghost knight
Creators: Prem and Liam
Description:A knight killing the undead

 */
// Setup
info.setLife(3)
info.startCountdown(20)
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
    .............c....................c.......c.....
    .......c...............c.........c......c.c....8
    ......c44444.....c..c...cc......c.....c.c.cc....
    .....c44444444..cc.c......444444cc444cc4c4c44c..
    ccccc44444444444444444444444444444444444444444cc
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
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111ccccdddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccc111111cccccccccccccccccccccccccc1111111111cccdddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc111111111ccccccccccccccc111ccccc111111111111ccdddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc11111cccc111111111111ccccccccccccccc1111111111111111cccccdddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc1111111111111111c1111ccccccccccccccc1111111111111cccccccdddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc11111111111111ccccccccccccccccccccccc1111111111cccccccccdddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccc111111111cccccccccccccccccccccccccccc1111111cccccccccdddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccc111ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccc1111cccccccccccccc1111111111111ccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccc1111111cccccccc1111111111111111111111ccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddcccccccc1111111111111111111111111111111111111111111cccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccccc111111111111111111ccccccccc111111111111111cccccccccccccc
    ccccccccccccccc111111111cccc11111111111ccccccc11111cccccccccccccdddddddddddddddddddddddddddddddcccccccccccc111111111111cccccccccccccccccc111111111cccccccccccccc
    ccccccccccccccc111111111111111111111111111111111111cccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc111111111111111111111111111111111111cccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc11111111ccccccc11111111111ccccccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccc2ccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccc22ccccccc2ccccccccccccccccccccccccccccdddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccc242ccccc24ccccccccccc2cccccccccccccccccdddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc111cccccccccccccccc
    cccccccccccccccccccccccccc24442cccc24cccccccccc222ccccccccccccccccdddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc1111cccccccccccc111
    ccccccccccccccccccccccccc4244424cccf4cccccccccc244cccccccccccccccccdddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccc1111111cccccc111111
    ccccccccccccccccccccccccc2cfff2cccfffccccccccc22242cccccccccccccccccdddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccc11111111cc11111111
    ccccccccccccccccccccccccccfffffcccffffccccccccf2ff2fcccccccccccccccccdddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111c
    cccccccccccccccccccccccccfffffffcccffccccccccccf2ffcccccccccccccccccccdddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111cccc
    ccccccccccccccccccccccccccffffccfccfffcccccccffffffcccccccccccccccccccccdddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111cccccc
    cccccccccccccccccccccccccffffffcccfffcccccccccffffffccccccccccccccccccccccdddddddddddcccccccccccccccccccccccccccccccc11111111111111ccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccffcfffffccffffcccccccfffffcffcccccccc111cccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111111ccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccffffffbbbfffccccccfffffffcccccccccc11111ccccccccccccccccccccccccccccc111ccccccccccc1111111111111111111111ccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccffffffbbcbbbbbbbbbbccffffffccccccccc1111111ccccccccccccccccccccccccccc111111ccccc1111111111111ccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccc2ccccccccccfffffbbbcccccccccccbbccffffffccccccccc111111111111111111ccccccccccccccc1111111111111111111ccccccccccccccccccccccccccc2cccccccccccccccccc
    cccccccccccc242cccccccccccbbbbcccaaaaaaaaaccbbbbbccccccccccccccc1111111111111111cccccccccccccccc111111111111111cccccccccccccccccccccccc2cccc22cccccccccccccccccc
    cccccccccccc24ccccccccccbbbccccaaaaaaaaaaaacccccbbcccccccccccccccc11111111111111cccc2cccccccccccccc111111111ccccccccccccccccccccccccccc22ccc24cccccccccccccccccc
    cccccccccccf42cccccccccbbcccaaaaaaaaaaaaaaaaaaaccbbccccccccccccccccccccccccccccccccc22ccccccccccccccccccccccccccccccccccccccccccccccccc42cc224cccccccccccccccccc
    ccccccccccff2ffccccccbbbccaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccccccccccccccccccccccc24cccccccccccccccccccccccccccccccccccccccccccc2ccc2442c44422cccccccccccccccc
    cccccccccccfffcccccbbbcccaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccccccccccccccccccccc2442cccc2ccccccccccccccccccccccccccccccccccccc222cc4422cc44cccccccccc4ccccccc
    ccccccccccccfffcccbbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccccccccccccccccccccf2ffcccc2ccccccccccccccccccccccccccccccccccccc242cccffccffffffcccccc24ccccccc
    ccccccccccffffccbbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbccccccccccccccccccccc22ccccccffccccc22ccccccccccccccccccccccccccccccccccc2242cfffffffffccccccccc24ccccccc
    cccccccccccfffbbbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbccccccccccccccccccc2444cccffffffcc242cccccccccccccccccccccccccccccccccccc2422cffffcccffccccccc222ccccccc
    ccccccccccccfbbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbccccccccccccccccc224242cccffffccc242ccccccccccccccccccccccccccccccccccfff44ccfffffccfcccccccc2442cccccc
    ccccccccccccbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccccccccc442ccccfffffccf4fccccccccccccc2ccccccccccccccccccccfffffffffffcccfcccccccc2444cccccc
    cccccccccccbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbccccccccccccccccfffff2cffffffffcffffccccccccccc22cccccccccccccccccccccfffffffffffffffffcccc44ffffccccc
    ccccccccccbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacbbccccccccccccccffffffcffffffffffcffcccccccccccc2442cccccccccccc2cccccfffffccfffffbbbbbbbbbcffffffccccc
    ccccccccbbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccccccffffffccffffccccfffcccccccccc22422cccccccccccc2ccccfffffffbbbbbbbaaaaaaabccfffffccccc
    cccccccbbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccccffffffccbbfbbbccfffccccccccccf2224ffccccccccccc42cccccfffbbbaaaaaaaaaaaaabbbffffcccccc
    ccccccbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccfffffffbbbbbbcbbbbbbbbbcccccccfc224fcccccccccccc4fccccbbbbbaaaaaaaaaaaaaaaaabbffccccccc
    cccccbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccccfffbbccccccccccccccbbbbcccccff22fcccccccccccfffccccbaaaaaaaaaaaaaaaaaaaaaabbbccccccc
    cccbbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccccccbbbbbccaaaaaaaaaaaaccccbbbccfffffffcccccccccccfccccbbaaaaaaaaaaaaaaaaaaaaaaaabbcccccc
    ccbbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbccccccccbbbcccccaaaaaaaaaaaaaaaacccbbbfffffffccccccccccffffccbaaaaaaaaaaaaaaaaaaaaaaaaaabbbcccc
    cbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbbcccccbbcccaaaaaaaaaaaaaaaaaaaaaacccbbfffffccccccccccccffccbbcaaaaaaaaaaaaaaaaaaaaaaaaaaabbbcc
    bbcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccbbcccbbccaaaaaaaaaaaaaaaaaaaaaaaaaaccbbbbffbcccccccccfffffbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb
    cccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbbbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccbbbbccccccccccffbbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccbbccccccccccbbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbcccccccbbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccbbbccccbbbccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccbbbbbbcccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
// Collectable 
// End goal 
scene.setTile(8, img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ........fcdb1bdf........
    .........cbfbfc.........
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
`, true)
scene.onHitTile(SpriteKind.Player, 8, function on_win(sprite: Sprite) {
    game.over(true)
})
