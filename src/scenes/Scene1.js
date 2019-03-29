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

    // Map collider
    this.physics.add.collider(this.state.hero, this.bricks);


    // Follow the character
    const cam = this.cameras.main
    cam.startFollow(this.state.hero);
    cam.setDeadzone(200, 200)
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
  }
}
