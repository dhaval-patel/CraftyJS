'use strict';

Crafty.c('Player', {
    init: function () {
        this.requires('2D, DOM, Solid, Twoway, Gravity, right0, Collision')
            .gravity("Solid")
            .stopOnSolids()
            .twoway(2, 6);

        this.attr({
            w: Game.cell.width * 3,
            h: Game.cell.height * 3
        });
    },
    at: function (x, y) {
        this.attr({
            x: x,
            y: y
        });

        return this;
    },
    stopOnSolids: function () {
        this.onHit('Solid', this.stopMovement);
        this.bind('hit', function (){
            console.log(this._gy, this._gravityConst);
        });
        return this;
    },
    stopMovement: function (hitData) {
        this._speed = 0;

//        if (this._up || this._falling) {
        this._up = false;
        this._falling = false;
//        }
//        console.log('UP', this._up);
//        console.log('Falling', this._falling);
        if (this._movement) {
            console.log(this._movement.x , this._movement.y);

            if (this._movement.x ===0 && this._movement.y === 0) {
                if (hitData[0].obj._x + hitData[0].obj._w >= this._x && hitData[0].obj._x + hitData[0].obj._w <= this._x + this._w) {
                    this._x += (hitData[0].obj._x + hitData[0].obj._w + 1) - this._x;
                } else  if (hitData[0].obj._x <= this._x + this._w && hitData[0].obj._x + hitData[0].obj._w >= this._x + this._w) {
                    this._x -= (this._x + this._w + 1) - hitData[0].obj.x;
                }
            } else {
                var movementX = this._movement.x;
//            this._movement.x = 0;

                if (movementX < 0) {
//                this._movement.x = 0;
//                this.x -= movementX - 1;
//                    this.attr({
//                        x: this.x - (movementX - 1)
//                    });
                    this._x -= movementX - 1;
                } else if (movementX > 0) {
//                this._movement.x = 0;
//                this.x -= movementX + 1;
//                    this.attr({
//                        x: this.x - (movementX + 1)
//                    });
                    this._x -= movementX + 1;
                }

                var movementY = this._movement.y;
//            this._movement.y = 0;

                if (movementY < 0) {
//                this.y -= movementY;
//                    this.attr({
//                        y: this.y - (movementY)
//                    });
                    this._y -= movementY;
                } else if (movementY > 0) {
//                this.y -= movementY;
//                    this.attr({
//                        y: this.y - (movementY)
//                    });
                    this._y -= movementY;
                }
            }
        }

//        if (this._up || this._falling) {
//            this.y += 5;
//        }
    }
});
