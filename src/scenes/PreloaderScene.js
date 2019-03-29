import {Scene} from 'phaser';

class PreloaderScene extends Scene {
  constructor() {
    super("scene-preloader");
  }

  preload() {
    this.load.image('hero', 'assets/crate.png');
    this.load.image('tile-brick', 'assets/tile-brick.png');
    this.load.image('fruit', 'assets/fruit.png');
  }

  create() {
    this.scene.start(`scene-title`)
    this.game.state = {}
    this.game.state.speed = 10
  }
}

export default PreloaderScene;