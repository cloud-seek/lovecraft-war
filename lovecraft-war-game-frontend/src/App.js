import React, { useEffect } from "react";
import PhaserGame from "./PhaserGame";
import "./App.css"; // Agrega estilos

const App = () => {
  useEffect(() => {
    const game = new PhaserGame();

    return () => {
      game.destroy();
    };
  }, []);

  const closePopup = () => {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
  };

  return (
    <div>
      <div id="hud">
        <div className="hud-item">Jugador: <span id="player-name">John Doe</span></div>
        <div className="hud-item">Nivel: <span id="player-level">1</span></div>
        <div className="hud-item">Vida: <span id="player-health">100</span></div>
        <div className="hud-item">Mana: <span id="player-mana">50</span></div>
      </div>
      
      <div id="game-container"></div>

      {/* Menú inferior */}
      <div className="menu">
        <button className="menu-button">Invocaciones</button>
        <button className="menu-button">Puntaje</button>
        <button className="menu-button">Mundos</button>
        <button className="menu-button">Lanzar Hechizo</button>
        <button className="menu-button">Inventario</button>
      </div>

      {/* Pop-up */}
      <div id="popup" className="popup">
        <div className="popup-content">
          <p>Contenido del popup</p>
          <button onClick={closePopup}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default App;
