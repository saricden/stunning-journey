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
    this.state.hero = this.add.sprite(50, 50, 'hero')
    this.state.cursors = this.input.keyboard.createCursorKeys();
  }

  update () {
    const gs = this.game.state
    const ls = this.state
    
    if (ls.cursors.left.isDown){
      ls.hero.x -= gs.speed}
    if (ls.cursors.right.isDown){
      ls.hero.x += gs.speed}
    if (ls.cursors.up.isDown){
      ls.hero.y -= gs.speed}
    if (ls.cursors.down.isDown){
      ls.hero.y += gs.speed}

    // Init our brick group
    this.bricks = this.physics.add.staticGroup();

    // Draw some brick islands
    for (let y = 200; y < 1000; y += 200) {
      const xOffset = ((y * 2) - 400);
      for (let x = 0; x < 400; x += 100) {

        this.bricks.create((xOffset + x), y, 'tile-brick');
      }
    }
  }
}


