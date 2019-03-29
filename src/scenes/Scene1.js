import {Scene} from 'phaser';

export default class Scene1 extends Scene {
  constructor() {
    super("scene1");
  }

  create() {
  	console.log('creating Scene1')
    const hero = this.add.sprite(50, 50, 'hero') 
  }
}


