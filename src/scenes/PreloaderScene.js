import {Scene} from 'phaser';

class PreloaderScene extends Scene {
  constructor() {
    super("scene-preloader");
  }

  preload() {
    this.load.image('hero', 'assets/crate.png');
    this.load.image('tile-brick', 'assets/tile-brick.png');
  }

  create() {
    this.scene.start(`scene1`)
  }
}

export default PreloaderScene;