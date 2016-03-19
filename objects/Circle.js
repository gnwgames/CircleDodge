var Circle = function (game, x, y, key) {
    Phaser.Sprite.call(this, game, x, y, key);
    this.game.physics.arcade.enable(this);
    this.body.gravity.y = 300;
};

Circle.prototype = Object.create(Phaser.Sprite.prototype);
Circle.prototype.constructor = Circle;
