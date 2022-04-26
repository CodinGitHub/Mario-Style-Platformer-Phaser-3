# Mario Style Platformer Game made in Phaser3

1. [Starting](#1.-Starting)
2. [Arcade Basics](#Arcade-Basics)
3. [Static and dinamic bodies](#Static-and-dinamic-bodies)
4. [Player wlaking](#Player-wlaking)
5. [Player jumping](#player-jumping)
6. [Level data en json](#level-data-en-json)
7. [Fire and position](#fire-and-position)
8. [Detecting overlap](#detecting-overlap)
9. [Generatin barrils](#generatin-barrils)
10. [Pool of objects](#Pool-of-objects)

## 1. Starting

- create a new scene
~~~
let gameScene = new Phaser.Scene('Game');
~~~

- some parameters for our scene
~~~
gameScene.init = function() {};
~~~

- load asset files for our game
~~~
gameScene.preload = function() {

  // load images
  this.load.image('ground', 'assets/images/ground.png');

  // load spritesheets
  this.load.spritesheet('player', 'assets/images/player_spritesheet.png', {
    frameWidth: 28,
    frameHeight: 30,
    margin: 1,
    spacing: 1
  });

};
~~~

- executed once, after assets were loaded
~~~
gameScene.create = function() {};
~~~

- our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  scene: gameScene,
  title: 'Monster Kong',
  pixelArt: false
};

- create the game, and pass it the configuration
~~~
let game = new Phaser.Game(config);
~~~
2. ## Arcade Basics
3. ## Static and dinamic bodies
4. ## Player wlaking
## Player jumping
## Level data en json
## Fire and position
## Detecting overlap
## Generatin barrils
10. ## Pool of objects