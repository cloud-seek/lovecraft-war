import Enemy from "./index";
import Phaser from "phaser";

class CriaturaProfundidad extends Enemy {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture, 200, 150, 100); // Más rápido y con mayor rango
  }

  update(player) {
    const distanceToPlayer = Phaser.Math.Distance.Between(
      this.sprite.x,
      this.sprite.y,
      player.sprite.x,
      player.sprite.y
    );

    if (distanceToPlayer <= this.range) {
      this.scene.physics.moveToObject(this.sprite, player.sprite, this.speed);
    } else if (distanceToPlayer >= this.range * 1.5) {
      this.scene.physics.moveToObject(
        this.sprite,
        this.initialPosition,
        this.speed
      );

      if (
        Phaser.Math.Distance.Between(
          this.sprite.x,
          this.sprite.y,
          this.initialPosition.x,
          this.initialPosition.y
        ) < 10
      ) {
        this.sprite.setVelocity(0);
      }
    } else {
      this.sprite.setVelocity(0);
    }
  }

  shoot() {
    // Opcional: Criatura de profundidad puede no disparar o tener proyectiles diferentes
  }
}

export default CriaturaProfundidad;
