import Phaser from "phaser";
import GameScene from "./GameScene";

class PhaserGame {
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      parent: "game-container",
      backgroundColor: "#87CEEB",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
      scale: {
        mode: Phaser.Scale.FIT, // Ajusta el canvas para que se adapte al tamaño del contenedor
        autoCenter: Phaser.Scale.CENTER_BOTH, // Centra el canvas automáticamente
        width: window.innerWidth, // Ancho inicial del canvas (tamaño de la ventana)
        height: window.innerHeight, // Alto inicial del canvas (tamaño de la ventana)
      },
      scene: [GameScene],
    };

    this.game = new Phaser.Game(this.config);

    // Escuchar cambios en el tamaño de la ventana y ajustar el canvas
    window.addEventListener("resize", this.resize.bind(this));
  }

  // Ajustar el tamaño del juego cuando se cambia el tamaño de la ventana
  resize() {
    if (this.game.isBooted) {
      this.game.scale.resize(window.innerWidth, window.innerHeight);
    }
  }

  destroy() {
    this.game.destroy(true);
  }
}

export default PhaserGame;
