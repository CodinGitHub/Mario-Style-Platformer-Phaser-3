// create a new scene
let gameScene = new Phaser.Scene('Game');

// some parameters for our scene
gameScene.init = function() {
  //player parametres for our scene
  this.playerSpeed = 150;
  this.jumpSpeed = -200;
};

// load asset files for our game
gameScene.preload = function() {

  // load images
  this.load.image('ground', 'assets/images/ground.png');
  this.load.image('platform', 'assets/images/platform.png');
  this.load.image('block', 'assets/images/block.png');
  this.load.image('goal', 'assets/images/gorilla3.png');
  this.load.image('barrel', 'assets/images/barrel.png');

  // load spritesheets
  this.load.spritesheet('player', 'assets/images/player_spritesheet.png', {
    frameWidth: 28,
    frameHeight: 30,
    margin: 1,
    spacing: 1
  });

  this.load.spritesheet('fire', 'assets/images/fire_spritesheet.png', {
    frameWidth: 20,
    frameHeight: 21,
    margin: 1,
    spacing: 1
  });
};

// executed once, after assets were loaded
gameScene.create = function() {
  //1) adding existing sprites to the physics system
  //Sprite creation
  let barrel = this.physics.add.sprite(180, 50, 'barrel');
  
  this.platforms = this.add.group();

  //2)creating and adding sprites to th physics system
  let ground = this.add.sprite(180,400,'ground');
  //add sprite to the physics system
  this.physics.add.existing(ground, true);
  //disable gravity
  // ground.body.allowGravity = false;
  //make it immovable
  // ground.body.immovable = true;
  this.platforms.add(ground);

  // Crating a platform
  let platform = this.add.tileSprite(180, 300, 4*36,1*30, 'block');
  this.physics.add.existing(platform, true);
  this.platforms.add(platform)

  //Player
  this.player = this.add.sprite(180,100,'player',3);
  this.physics.add.existing(this.player);

  //Create walking animation
  this.anims.create({
    key: 'walking',
    frames: this.anims.generateFrameNames('player',{
      frames:[0,1,2]
    }),
    frameRate:12,
    yoyo: true,
    repeat:-1
  });


  //Collision detection
  this.physics.add.collider(barrel, ground)
  this.physics.add.collider(barrel, platform)
  // this.physics.add.collider(this.player, ground)
  // this.physics.add.collider(this.player, platform)
  this.physics.add.collider(this.player, this.platforms)

  //enable cursor keys
  this.cursors = this.input.keyboard.createCursorKeys();
  console.log(this.player);
};

//executed on every frame
gameScene.update = function(){
  if(this.cursors.left.isDown){
    this.player.body.setVelocityX(-this.playerSpeed);

    this.player.flipX = false;

    if(!this.player.anims.isPlaying){
      this.player.anims.play('walking');
    }
    
  }else if(this.cursors.right.isDown){
    this.player.body.setVelocityX(this.playerSpeed);

    this.player.flipX = true;

    if(!this.player.anims.isPlaying){
      this.player.anims.play('walking');
    }
  }else if(this.cursors.space.isDown){
    this.player.body.setVelocityY(this.jumpSpeed);
  }else{
    // make the player stop
    this.player.body.setVelocityX(0);

    // stop walking animation
    this.player.anims.stop('walking');

    //set default frame
    this.player.setFrame(3);
  }
}

// our game's configuration
let config = {
  type: Phaser.AUTO,
  width: 360,
  height: 640,
  scene: gameScene,
  title: 'Monster Kong',
  pixelArt: false,
  physics:{
    default: 'arcade',
    arcade: {
      gravity: {y:1000},
      debug: true
    }
  }
};

// create the game, and pass it the configuration
let game = new Phaser.Game(config);
