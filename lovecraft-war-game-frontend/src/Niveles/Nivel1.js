import CultistaFanatico from "../Enemigos/CultistaFanatico";
import CriaturaProfundidad from "../Enemigos/CriaturaProfundidad";
import Phaser from "phaser";

class Nivel {
  constructor(scene) {
    this.scene = scene;
    this.enemies = []; // Arreglo para guardar todos los enemigos del nivel
  }

  setup() {
    // Crear Cultistas Fanáticos dispersos
    for (let i = 0; i < 8; i++) {
      const x = Phaser.Math.Between(100, 700);
      const y = Phaser.Math.Between(100, 500);
      const cultista = new CultistaFanatico(this.scene, x, y, "enemy");
      this.enemies.push(cultista);
    }

    // Crear Criaturas de la Profundidad en el centro
    for (let i = 0; i < 2; i++) {
      const x = 400 + i * 50; // Separación mínima
      const y = 300 + i * 50;
      const criatura = new CriaturaProfundidad(this.scene, x, y, "enemy");
      this.enemies.push(criatura);
    }
  }

  getEnemies() {
    return this.enemies;
  }
}

export default Nivel;
