import 'phaser';
import LoadScene from './scenes/LoadScene';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [LoadScene, GameScene],
};

const game = new Phaser.Game(config);
