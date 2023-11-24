import 'phaser';

export default class LoadScene extends Phaser.Scene {
  preload() {
    this.load.image('ball', 'assets/orange-ball.png');
    this.load.image('customCursor', 'assets/cursor.png');
  }

  create() {
    // Inicializa o carregamento da próxima cena
    this.scene.start('GameScene');
  }
}
