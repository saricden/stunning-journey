import {Scene} from 'phaser';

export default class Scene1 extends Scene {
  constructor() {
    super("scene1");
  }

  create() {
    // Add background color
    this.cameras.main.setBackgroundColor('#CCE');
    
  	console.log('creating Scene1')
    const hero = this.add.sprite(50, 50, 'hero') 

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


