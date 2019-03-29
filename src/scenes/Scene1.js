import {Scene} from 'phaser';

export default class Scene1 extends Scene {
  constructor() {
    super("scene1");
  }

  create() {
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

  }
}


