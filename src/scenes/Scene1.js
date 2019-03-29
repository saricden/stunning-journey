import {Scene} from 'phaser';

export default class Scene1 extends Scene {
  constructor() {
    super("scene1");
  }

  create() {
    // Add background color
    this.cameras.main.setBackgroundColor('#CCE');
    
  	console.log('creating Scene1')
    this.state = {}
    this.state.hero = this.physics.add.sprite(50, 50, 'hero')
    this.state.cursors = this.input.keyboard.createCursorKeys();

    // Init our brick group
    this.bricks = this.physics.add.staticGroup();

    // Draw some brick islands
    for (let y = 200; y < 1000; y += 200) {
      const xOffset = ((y * 2) - 400);
      for (let x = 0; x < 400; x += 100) {

        this.bricks.create((xOffset + x), y, 'tile-brick');
      }
    }

    // Add some fruits
    this.fruitsArr = [];
    for (let x = 100; x < 1000; x += 100) {
      const fruit = this.physics.add.sprite(x, 0, 'fruit');
      fruit.setScale(0.3);
      this.fruitsArr = [
        ...this.fruitsArr,
        fruit
      ];
    }

    this.fruits = this.physics.add.group(this.fruitsArr, {});

    // Map collider
    this.physics.add.collider(this.state.hero, this.bricks);
    this.physics.add.collider(this.fruits, this.bricks);
    this.physics.add.overlap(this.state.hero, this.fruits, this.collectFruit.bind(this));


    // Follow the character
    const cam = this.cameras.main
    cam.startFollow(this.state.hero);
    cam.setDeadzone(200, 200)

    // Score config
    this.score = 0;

    // Score text box
    this.scoreText = this.add.text(0, 0, '...', {
      fontFamily: 'Sans Serif',
      fontSize: 20,
      padding: 10,
      color: '#000'
    });
    this.scoreText.setScrollFactor(0);
  }

  collectFruit(hero, fruit) {
    this.score += 10;
    fruit.destroy();
  }

  update () {
    if (this.state.cursors.left.isDown){
      this.state.hero.setVelocityX(-this.game.state.speed)}
    if (this.state.cursors.right.isDown){
      this.state.hero.setVelocityX(this.game.state.speed)}
    if (!this.state.cursors.right.isDown && !this.state.cursors.left.isDown){
          this.state.hero.setVelocityX(0)}
    if (this.state.cursors.up.isDown && this.state.hero.body.blocked.down){
      this.state.hero.setVelocityY(-this.game.state.jumpForce)}
    if (this.state.cursors.down.isDown){
      this.state.hero.body.checkCollision.down = false}
    else {
      this.state.hero.body.checkCollision.down = true}

    this.scoreText.setText('Score: '+this.score+'pts');
  }
}
