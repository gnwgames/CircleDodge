var CircleDodge = CircleDodge || {};
var keys;

CircleDodge.game = new Phaser.Game(800, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  CircleDodge.game.load.script('Player.js', './objects/Player.js')
  CircleDodge.game.load.script('Circle.js', './objects/Circle.js')
  CircleDodge.game.load.spritesheet('dude', './assets/sprites/dude_spritesheet.png', 128, 128);
  CircleDodge.game.load.spritesheet('circle', './assets/sprites/circle.png',360,360);
}

function create() {
  this.game.physics.startSystem(Phaser.Physics.Arcade);
  this.game.stage.backgroundColor = '#ffffff';

  CircleDodge.player = new Player(this.game, 50, 50);
  var circle = new Circle(this.game,50,50);
  keys = CircleDodge.game.input.keyboard.createCursorKeys();

}

function update() {
  CircleDodge.player.handleInput(keys);
}
