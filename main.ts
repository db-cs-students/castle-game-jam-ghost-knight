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
    ..............fff.......
    .............f1fffff....
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
    ............................c.............c.....
    .......................c.....c..........c.c....8
    ........c4c......c..c.c.cc.....c......c.c.cc....
    .......c4444c...cc.c........c.c4cc...cc4c4c44c..
    ccccccc444444c4c44c44c4c4cc44c44444c4c44444444cc
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
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccccaaccccccccccccccccccccaccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccaacccccccccccccccccccccccccaacccccccccccccccccccaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacccccccccccccccccaaaaccccccccccccccccccccccccccccccccccccccccccccccccccaacccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccccccccccaaacccccccccccccccccccccccccccccccccccccccccccccccccaaaaccccccccccccccc
    ccccccccccccccccccccccccccccccccccacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaccccccccccccaa
    cccccccccccccccccccccccccccccccccaaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaccccccccccccaa
    cccccccccccccccccccccccccccccccccaaaccccccccccccaacccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaccccccccccccccaacccccccccccccccccccccccccccccaa
    ccccccccccccccccccccccccccccccccaaaaaaccccccccaaaaaccccccccccccccccccccccccacccccccccccccccccccccccccccccccccaaaaacccccccccccccaaccccccccccccccccccccccccccccaaa
    ccccccccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaaccccccccccccccaccccccccccccccccccccccccccccaaa
    ccccccccccccccccccccccccccccaaaaaaaaaaaaaaa999999999999cccccccccccccccccccccccccccccccccccccaaaaaacccccacccccaaaaaacccccccccccccaacccccccacccccccccccccccccccaaa
    9ccccccccccccccccccccccccaaaaaaaaaaaaaaaaaa999999999999aaaaaccccccccccccccccccccccccccaaaaaaaaaaaaaaaacccccccaaaaaaccccccccccccccaccccccccaccccccccccccccccccaaa
    9ccccccccccccccccccccccccaaaa9aaaaaaaaaaaaa9999999999999aaaaaaaccccccccccccccccccccccccaaaaaaaaaaaaacccccccccaaaaaaaccccccccccccccccccccccccccccccccccccccccaaaa
    99999cccccccccccccccccccaaa9d9aaaaaaaaaaaaa9999999999999aaaaaaaaaaaaacccccccccccccccccccaaaaaaaaaacccccccccccaaaaaaaccccccccccccccccccccccccccccccccccccccccaaaa
    99999ccccccccccccccccaa9999dd9aaaaaadaaaaaa9999999999999aaaaaaaaaaaaaaaaaccccccccccccccccccccccccccccccccccccaaaaaaaaaccccccccccccccccccccccccccccccccccccccaaaa
    99999cccccccccccccccaaaa999ddd99999ddaaaa9999999d99999999aaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccccccccaaaaaaaaaaaaccccccccccccccccccccccccccacccccccccaaaa
    99999ccccccccccccccaaaaa99ddddd9999dd9999999999ddd9999999aaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccccccccaaaaaaaaaaaaaaaaaaacccccccccccccccccccaccccccccccaaaaa
    99999ccccccccccccaaaaaaa9ddddddd999dd9999999999ddd9999999aaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccaccccccccccccaaaaaa
    99999accccccccccaaaaaaaa9d9dddd999ddd999999999ddddd999999aaaaaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccccaaaaaaa
    99999aaaaaaaaaaaaaaaaaaa99ddddd999dddd99999999dddddd999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacccccccccccccccccaaaaaaaa
    99999aaaaaaaaaaaaaaaaaaa9ddddddd999dd9999999999dddd9999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa99aaaaaaaaaaaaa9999999999999999cccccccccccccccaaaaaaaaa
    99999aaaaaaaaaaaaaaaaaaa99dddd9dd99ddd9999999dddddd99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999aaaaaaaa9999999999999999999999999999999999cccccccccccccaaaaaaaaaa9
    999999999999999999aaaaaa9dddddd999ddd999999999dddddd99999999aaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999999999999999999999999999cccccccccaaa9999aaaaaa9
    999999999999999999aaaaaadd9ddddd99dddd9999999ddddd9dd999999999aaaaaaaaaaaaaaaaa99aaaaaa9999999999999999999999999999999aaaaa99999999999999cccccc99999999999aaaaa9
    99999999999999999999999999dddddddddddd999999ddddddd999999999999aaaaaaaaaaaaaaa999999999999999999999999999999999999aaaa99999aaa9999999999999999999999999999999999
    9999999999999999999999999ddddddddddddddddddd99dddddd999999999999999aaaaaaaaa9999999999999999999999999999999aaaaaaaa999999999a99999999999aaa999999999999999999999
    9999999999999d9999999999ddddddddddddddddddddd99dddddd9999999999999999999999999999999999999999999999999aaaaa9999aa99a9999999a999999999999aaaa9d9999999aa999999999
    999999999999ddd99999999999ddddddddddddddddddddddd9999999999999999999999999999999999999999999999999999aaaaaaaaaaaa999a999999a99999999999daaaadd999999a9a999999999
    999999999999dd9999999999dddddddddddddddddddddddddd9999999999999999999999999999999999d99999999999999999999999999aaaaaaaaaaaaaaaaa9999999ddaaadd99999a99a999999999
    99999999999ddd999999999dddddddddddddddddddddddddddd999999999999999999999999999999999dd99999999999999aaaaaaaaaaaaaaaaaaa9aa9999999999999ddaaddd99999a99a999999999
    9999999999ddddd999999ddddddddddddddddddddddddddddddd99999999999999999999999999999999dd9999999999999999999999999aaaaaa9aa9999999999d999ddddaddddd999a99a999999999
    99999999999ddd99999dddddddddddddddddddddddddddddddddd999999999999999999999999999999dddd9999999999999999aaaaaaaaaaa999aa9999999999ddd99ddddaadd99999a9a9999999999
    999999999999ddd999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddd9999d99999999aaa999999999a9aaa9a9999999999ddd999ddaadddddd99a9aaaa9999999
    9999999999dddd99ddddddddddddddddddddddddddddddddddddddd999999999999999999999dd999999dd99999d99999999999aaaaa99999aa999a999999999dddd9dddddddddaaaaaaaaada9999999
    99999999999ddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999ddd9999dddddd999dd999999999999999aaaa999aaa999999aaa9adddd9ddddaaaddaaaaaaaadaaaa9999
    999999999999ddddddddddddddddddddddddddddddddddddddddddddd99999999999999999dddd99999dddd9999dd9999999999999999999aaaa99999999a9addddd99dddddaadaaaaaaaaddddaa9999
    999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999ddd9999ddddd99ddd9999999999999d99aaa999999999999aaadddddddddddddadaaaaaaaaadaaaa9999
    99999999999ddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999dddddd9dddddddd9dddd99999999999ddaa9999999999999999aaadddddddddddddddddaaaadddda999999
    9999999999ddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999dddddd9dddddddddd9dd999999999999ddd9999999999999d99aaaddddd99dddddddddddddaaadddaaa9999
    99999999dddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999dddddd99dddd9999ddd9999999999ddddd999999999999d99a9ddddddddddddddddddddddaadddddaa999
    9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddd99dddddd99ddd9999999999ddddddd99999999999dd99999ddddddddddddddddddddddddddaaa999
    999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddd9999999d9dddd999999999999dd9999ddddddddddddddddddddddddddaa999a9
    99999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999ddddddddddddddddddddddd99999ddddd99999999999ddd9999ddddddddddddddddddddddddddaaa99a9
    999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd99ddddddd99999999999d9999ddddddddddddddddddddddddddddaaa9a9
    99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999dddddddddddddddddddddddddddddd9dddd9d9999999999dddd99ddddddddddddddddddddddddddddddaaaa
    9dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999ddddddddddddddddddddddddddddddddddddd999999999999dd99dddddddddddddddddddddddddddddddddaa
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999ddddddddddddddddddddddddddddddddddddddd999999999ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999dddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999dddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
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
