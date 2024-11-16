import Enemy from "./index";
import Phaser from "phaser";

class CultistaFanatico extends Enemy {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture, 150, 100, 50);
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
      if (distanceToPlayer <= this.attackRange) {
        this.sprite.setVelocity(0);
      }
    } else if (distanceToPlayer > this.range * 2) {
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
    const player = this.scene.player;
    const distanceToPlayer = Phaser.Math.Distance.Between(
      this.sprite.x,
      this.sprite.y,
      player.sprite.x,
      player.sprite.y
    );

    if (distanceToPlayer <= this.attackRange) {
      const projectile = this.projectiles.create(
        this.sprite.x,
        this.sprite.y,
        "projectile"
      );
      this.scene.physics.moveToObject(projectile, player.sprite, 200);
      this.scene.time.delayedCall(2000, () => projectile.destroy(), [], this);
    }
  }
}

export default CultistaFanatico;
