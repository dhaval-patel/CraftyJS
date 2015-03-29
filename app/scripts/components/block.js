'use strict';

Crafty.c('Block', {
    init: function () {
        this.requires('Border');
    },
    size: function (width, height) {
        this.attr({
            w: width,
            h: height
        });

        return this;
    }
});