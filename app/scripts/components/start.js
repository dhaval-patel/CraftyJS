'use strict';

Crafty.c('Start', {
    init: function () {
        this.requires('Block')
            .size(5 * Game.cell.width, Game.cell.height);
    }
});