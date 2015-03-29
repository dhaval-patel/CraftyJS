'use strict';

Crafty.c('Cell', {
    init: function () {
        this.attr({
            w: Game.cell.width,
            h: Game.cell.height
        });
    },
    at: function (x, y) {
        this.attr({
            x: x * Game.cell.width,
            y: y * Game.cell.height
        });

        return this;
    }
});
