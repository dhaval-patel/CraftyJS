'use strict';

Crafty.c('Border', {
    init: function () {
        this.requires('Actor, Color, Solid')
            .color('black');
    }
});