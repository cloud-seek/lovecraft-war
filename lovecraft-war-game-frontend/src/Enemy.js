import Phaser from "phaser";

class Enemy {
  constructor(scene, x, y, texture, range = 150, attackRange = 100, speed = 50) {
    this.scene = scene;

    // Crear el sprite del enemigo
    this.sprite = scene.physics.add.sprite(x, y, texture);
    this.sprite.setCollideWorldBounds(true);

    // Configuración inicial
    this.range = range; // Rango de detección
    this.attackRange = attackRange; // Rango de ataque
    this.speed = speed; // Velocidad de movimiento
    this.initialPosition = { x, y }; // Posición inicial del enemigo

    // Grupo de proyectiles
    this.projectiles = scene.physics.add.group();

    // Configurar temporizador para disparar
    this.shootTimer = scene.time.addEvent({
      delay: 1000, // 1 segundo entre disparos
      loop: true,
      callback: this.shoot,
      callbackScope: this,
    });
  }

  update(player) {
    const distanceToPlayer = Phaser.Math.Distance.Between(
      this.sprite.x,
      this.sprite.y,
      player.sprite.x,
      player.sprite.y
    );

    if (distanceToPlayer <= this.range) {
      // Si el jugador está en rango, perseguir
      this.scene.physics.moveToObject(this.sprite, player.sprite, this.speed);

      if (distanceToPlayer <= this.attackRange) {
        // Detenerse dentro del rango de ataque
        this.sprite.setVelocity(0);
      }
    } else if (distanceToPlayer > this.range * 2) {
      // Si el jugador está fuera del rango extendido, regresar a la posición inicial
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
      // Detenerse si no hay interacción
      this.sprite.setVelocity(0);
    }
  }

  shoot() {
    // Disparar un proyectil si el jugador está en rango de ataque
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

      // Mover el proyectil hacia el jugador
      this.scene.physics.moveToObject(projectile, player.sprite, 200);

      // Destruir el proyectil después de un tiempo
      this.scene.time.delayedCall(2000, () => projectile.destroy(), [], this);
    }
  }
}

export default Enemy;
