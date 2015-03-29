'use strict';

var Game = {
    col: 50,
    row: 30,
    cell: {
        width: 20,
        height: 20
    },

    width: function () {
        return this.col * this.cell.width;
    },

    height: function () {
        return this.row * this.cell.height;
    },

    // Initialize and start our game
    start: function () {
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height(), 'game-container');
        Crafty.background('white');

        // Simply start splashscreen
        //Crafty.scene('Splashscreen');

        Crafty.scene('Scene1');


    }
};

var onLoad = function () {
    Game.start();
//    Crafty.debugBar.show();
} ;

window.addEventListener('load', onLoad);

//Crafty.debugBar.show();