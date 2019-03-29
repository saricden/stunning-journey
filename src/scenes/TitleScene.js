import {Scene} from 'phaser';

class TitleScene extends Scene {
  constructor() {
    super("scene-title");
  }

  create() {
    this.title = this.add.text(0, 0, 'Stunning Journey', {
      fontFamily: 'Serif',
      fontSize: 42,
      color: '#FFF',
      padding: 40
    });

    this.playBtn = this.add.text(0, (window.innerHeight / 2), 'Play Game', {
      fontFamily: 'Sans Serif',
      fontSize: 18,
      color: '#FFF',
      padding: 40
    });

    this.playBtn.setInteractive();
    this.playBtn.on('pointerdown', this.playGame.bind(this));
  }

  playGame() {
    this.scene.start("scene1");
  }
}

export default TitleScene;