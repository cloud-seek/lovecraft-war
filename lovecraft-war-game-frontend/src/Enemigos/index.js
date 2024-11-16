class Enemy {
  constructor(scene, x, y, texture, range = 150, attackRange = 100, speed = 50) {
    this.scene = scene;

    // Crear el sprite del enemigo
    this.sprite = scene.physics.add.sprite(x, y, texture);
    this.sprite.setCollideWorldBounds(true);

    // Configuración inicial
    this.range = range;
    this.attackRange = attackRange;
    this.speed = speed;
    this.initialPosition = { x, y };

    // Grupo de proyectiles
    this.projectiles = scene.physics.add.group();

    // Temporizador para disparar
    this.shootTimer = scene.time.addEvent({
      delay: 1000, // 1 segundo entre disparos
      loop: true,
      callback: this.shoot,
      callbackScope: this,
    });
  }

  update(player) {
    // Sobrescrito por clases hijas
  }

  shoot() {
    // Sobrescrito por clases hijas
  }
}

export default Enemy;
