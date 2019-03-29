import style from './main.css';
import Phaser, {Game} from 'phaser';
import PreloaderScene from './scenes/PreloaderScene';

const canvas = document.getElementById('game-canvas');

const config = {
  type: Phaser.WEBGL,
  width: 400,
  height: 300,
  canvas,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: true
    }
  },
  scene: [
    PreloaderScene
  ]
};

const game = new Game(config);