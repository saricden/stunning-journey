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

    const xSteps = (window.innerWidth / 100);
    const ySteps = (window.innerHeight / 100);
    this.fruits = [];

    for (let x = 0; x < xSteps; x++) {
      const xOffset = (x * 100);
      for (let y = 0; y < ySteps; y++) {
        const yOffset = (y * 100);
        const fruit = this.add.image(xOffset, yOffset, 'fruit');
        fruit.setAlpha(0.4);
        fruit.setDepth(1);
        fruit.rotSpeed = (Math.random() / 15);
        this.fruits = [
          ...this.fruits,
          fruit
        ];
      }
    }

    // Depths
    this.title.setDepth(2);
    this.playBtn.setDepth(3);

    this.playBtn.setInteractive();
    this.playBtn.on('pointerdown', this.playGame.bind(this));
  }

  update() {
    this.fruits.forEach((fruit) => {
      fruit.setRotation(fruit.rotation + fruit.rotSpeed);
    });
  }

  playGame() {
    this.scene.start("scene1");
  }
}

export default TitleScene;