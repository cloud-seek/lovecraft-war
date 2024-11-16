import Phaser from "phaser";
import Player from "./Player";
import Nivel from "./Niveles/Nivel1";

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("player", "https://via.placeholder.com/32x32?text=P");
    this.load.image("enemy", "https://via.placeholder.com/32x32?text=E");
    this.load.image("projectile", "https://via.placeholder.com/16x16?text=X");
  }

  create() {
    // Configuración inicial del jugador
    this.playerName = "John Doe";
    this.playerLevel = 1;
    this.playerHealth = 100;
    this.playerMana = 50;

    // Mostrar datos iniciales en el HUD
    this.updateHUD();

    // Crear jugador
    this.player = new Player(this, 400, 300, "player");

    // Configurar nivel
    this.nivel = new Nivel(this);
    this.nivel.setup();

    // Obtener enemigos del nivel
    this.enemies = this.nivel.getEnemies();

    // Colisiones y detección de impacto con proyectiles
    this.enemies.forEach((enemy) => {
      this.physics.add.overlap(
        this.player.sprite,
        enemy.projectiles,
        this.hitByProjectile,
        null,
        this
      );
    });

    // Puntaje (agregado al HUD)
    this.score = 0;

    // Pausar el juego al presionar botones
    const menuButtons = document.querySelectorAll(".menu-button");
    menuButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.scene.pause(); // Pausa el juego
        this.showPopup(button.textContent); // Muestra el popup
      });
    });
  }

  update() {
    this.player.update();
    this.enemies.forEach((enemy) => enemy.update(this.player));
  }

  hitByProjectile(player, projectile) {
    projectile.destroy();

    // Reducir vida del jugador al ser golpeado
    this.playerHealth -= 10;
    if (this.playerHealth <= 0) {
      console.log("El jugador ha sido derrotado.");
      this.playerHealth = 0;
    }
    this.updateHUD();
  }

  updateHUD() {
    // Actualizar los valores del HUD
    document.getElementById("player-name").textContent = this.playerName;
    document.getElementById("player-level").textContent = this.playerLevel;
    document.getElementById("player-health").textContent = this.playerHealth;
    document.getElementById("player-mana").textContent = this.playerMana;
  }

  showPopup(option) {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
    popup.querySelector(".popup-content").textContent = `Opción seleccionada: ${option}`;
  }
}

export default GameScene;
