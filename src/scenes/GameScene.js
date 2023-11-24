import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    // Adiciona a bola à cena de jogo
    this.ball = this.physics.add.sprite(400, 300, 'ball');
    //this.ball.setCollideWorldBounds(true);
    //this.ball.setBounce(1);

    // Adiciona um listener de clique na cena
    this.input.on(
      'pointerdown',
      function (pointer) {
        // Move a bola até a posição do clique
        this.moveTo(pointer.x, pointer.y);
      },
      this
    );
  }

  update() {
    // Adicione lógica de atualização aqui, se necessário
  }

  // Função para mover a bola até a posição específica
  moveTo(targetX, targetY) {
    const duration = 500; // Duração da animação em milissegundos

    // Calcula a distância entre a posição atual da bola e a posição do clique
    const distance = Phaser.Math.Distance.Between(
      this.ball.x,
      this.ball.y,
      targetX,
      targetY
    );

    // Calcula a duração com base na distância (velocidade constante)
    const speed = distance / duration;

    // Move a bola até a posição do clique com uma animação
    this.tweens.add({
      targets: this.ball,
      x: targetX,
      y: targetY,
      duration: duration,
      ease: 'Linear',
      onComplete: () => {
        console.log('Bola chegou ao destino!');
        // Adicione qualquer lógica adicional após a chegada da bola ao destino
      },
    });
  }
}
