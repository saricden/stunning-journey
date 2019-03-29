import {Scene} from 'phaser';

class PreloaderScene extends Scene {
  constructor() {
    super("scene-preloader");
  }

  create() {
    console.log('hooray! Gr8 success!');
  }
}

export default PreloaderScene;