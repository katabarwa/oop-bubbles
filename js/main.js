let gameEngine = new Engine(document.getElementById("app"));
let keydownHandler = event => {
  // console.log("event====>", event);
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
  if (event.code === "ArrowUp") {
    gameEngine.player.moveUp();
  }
  if (event.code === "ArrowDown") {
    gameEngine.player.moveDown();
  }
};
document.addEventListener("keydown", keydownHandler);
gameEngine.gameLoop();
gameEngine.maxEnemiesUpdate();
gameEngine.enemies.effect;
console.log("gameEngine", gameEngine);
// gameEngine.title2.update("JESSE");
// gameEngine.title.update("KATABARWA");
