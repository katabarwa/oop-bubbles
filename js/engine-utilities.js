let nextEnemySpot = enemies => {
  let enemySpots = 100;
  let spotsTaken = [];
  let newSpotTaken = () => {
    for (let i = 0; i < 100; i++) {
      spotsTaken.push(false);
    }
  };
  newSpotTaken();
  // console.log("spotstaken", spotsTaken);

  enemies.forEach(enemy => {
    spotsTaken[enemy.spot] = true;
  });
  // console.log("spotsTaken", spotsTaken);
  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    //candidate is a value between 0 and 4
    candidate = Math.floor(Math.random() * enemySpots);
  }
  //   console.log("spotsTaken", spotsTaken);
  //   trackEnemies.push(spotsTaken);

  //   console.log("trackEnemies=>XOXOXOXOX", trackEnemies);

  return candidate;
};
let addBackground = root => {
  let bg = document.createElement("div");
  bg.style.backgroundColor = "white";
  bg.style.border = "black";
  bg.style.height = GAME_HEIGHT + "px";
  bg.style.width = GAME_WIDTH + "px";
  root.append(bg);
  // let whiteBox = document.createElement("div");
  // whiteBox.style.zIndex = 100;
  // whiteBox.style.position = "absolute";
  // whiteBox.style.top = GAME_HEIGHT + "px";
  // whiteBox.style.height = ENEMY_HEIGHT + "px";
  // whiteBox.style.width = GAME_WIDTH + "px";
  // whiteBox.style.background = "#fff";
  // root.append(whiteBox);
};
