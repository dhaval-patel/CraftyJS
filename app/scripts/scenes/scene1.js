'use strict';

Crafty.scene('Scene1', function () {
        // draw border for scene
        for (var i = 0; i < Game.col; i++) {
            Crafty.e('Border').at(i, 0);
            Crafty.e('Border').at(i, Game.row - 1);
        }

//        for (var i = 1; i < Game.row - 1; i++) {
//            Crafty.e('Border').at(0, i);
//            Crafty.e('Border').at(Game.col - 1, i);
//        }


        // Create some blocks in air where player can jump.

        Crafty.e('Start').at(4, 7);
        Crafty.e('2D, Canvas, Text')
            .attr({
                x: 6 * Game.cell.width,
                y: 7 * Game.cell.height,
                h: Game.cell.height,
                w: Game.cell.width
            })
            .text('Start')
            .textColor('white');

        Crafty.e('End').at(Game.col - 7, Game.row - 3);
        Crafty.e('2D, Canvas, Text')
            .attr({
                x: (Game.col - 5) * Game.cell.width,
                y: (Game.row - 3) * Game.cell.height,
                h: Game.cell.height,
                w: Game.cell.width
            })
            .text('End')
            .textColor('white');

        Crafty.e('Player').at(6 * Game.cell.width, 15 * Game.cell.height);

        Crafty.e('2D, DOM, Text')
            .attr({
                x: (Game.col - 15) * Game.cell.width,
                y: 3 * Game.cell.height,
                h: 100,
                w: 500
            })
            .text('Let\'s do some practice')
            .textColor('Black');

        Crafty.e('Block')
            .at(20, Game.row - 4)
            .size (3 * Game.cell.width, 3 * Game.cell.height);

        Crafty.e('Block')
            .at(23, Game.row - 7)
            .size (3 * Game.cell.width, 6 * Game.cell.height);

    }, function () {

    }
);