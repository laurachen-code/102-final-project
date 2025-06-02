// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2400180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010202020300000000000000000000000000000a0000000000010202030000010202020305040404060000000000010203000000000000000000000000050404060000050404040605040404060000000000050406000000000000000001031e00050404060000050404040605040404060102020300050406000000000001020205061e00050404060000050404040605040404060504040600050406000001020307090805061e00070909081d00070909090807090909080709090800050908000007090800000007081e0000000000000000000a000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000a0000000000000000000000000000001e001b0000000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000000000001e1b0000000000000000000000000000000000000000000000000000000e0f00000000001e000000000000000c0e0e0f00001a1616161900000000001600000c000a14001600001616001c000000000014140a0000000000000000000000001616190014141414001600001616000c0e0e0e0e0f14141414000000000b0e0e0e0d00151616000012141413001600001616001214141010131414141400151617000000000000161616190000000000000000000000000000000000001214141300111618000000000e00161616000000000000000a000000000000000000000000000000000000000e0e0e0e140011161800001414140f00161616161616`, img`
....2...............................
....................................
....................................
....................................
....................................
....................................
...........22222....................
2222..222222...2.....222............
...2..2........2.....2.2........22..
...2..2........22222.2.2.....22222..
...2..2............2.2.2..2222...2..
...2..2............2.2.2..2.2....2..
....................................
....................................
....................................
....................................
....................................
...........................22.......
......2222..22222.....2..2..2.2..22.
......22.............2.2.2..2.2..22.
2222222222....22222.2.2..2222.2..22.
......2..2.222.........2............
......2222........2...2.............
..............22222...2..2222.222222
`, [myTiles.transparency16,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles14,myTiles.tile2,sprites.swamp.swampTile4,sprites.swamp.swampTile6,sprites.swamp.swampTile5,sprites.swamp.swampTile7,sprites.swamp.swampTile8,sprites.swamp.swampTile13,sprites.swamp.swampTile18,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.swamp.swampTile9,sprites.swamp.swampTile10,sprites.swamp.swampTile16,sprites.swamp.swampTile11,sprites.swamp.swampTile19,sprites.swamp.swampTile17,sprites.swamp.swampTile15,myTiles.tile3,myTiles.tile4,sprites.builtin.forestTiles0,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
