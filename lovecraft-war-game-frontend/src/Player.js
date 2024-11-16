import Phaser from "phaser";

class Player {
  constructor(scene, x, y, texture) {
    this.scene = scene;

    // Crear sprite del jugador
    this.sprite = scene.physics.add.sprite(x, y, texture).setScale(1.5);
    this.sprite.setCollideWorldBounds(true);

    // Configurar controles del teclado
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    // Reiniciar velocidad
    this.sprite.setVelocity(0);
  
    // Movimiento
    if (this.cursors.left.isDown) this.sprite.setVelocityX(-200);
    if (this.cursors.right.isDown) this.sprite.setVelocityX(200);
    if (this.cursors.up.isDown) this.sprite.setVelocityY(-200);
    if (this.cursors.down.isDown) this.sprite.setVelocityY(200);
  
    // Usar mana al presionar espacio (ejemplo)
    if (Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
      if (this.scene.playerMana >= 10) {
        this.scene.playerMana -= 10; // Reduce mana
        this.scene.updateHUD(); // Actualiza el HUD
        console.log("¡Habilidad usada!");
      } else {
        console.log("No hay suficiente mana.");
      }
    }
  }
  
}

export default Player;
