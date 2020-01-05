class Engine {
  gameLoop = () => {
    // this.score += 1;
    // this.gameScore.update("" + this.score);

    //this.lasframe is = undefined the first time we call gameLoop at main.js
    //this.lastFrame is updated with a new time
    if (this.lastFrame === undefined) this.lastFrame = new Date().getTime();
    //we assign the difference between current time and this.lastFrame to a value timeDiff
    //
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.enemies.forEach(enemy => {
      enemy.update(timeDiff);
    });
    //the  array of enemies = all the enemies that are not destroyed
    this.enemies = this.enemies.filter(enemy => {
      return !enemy.destroyed;
    });
    //This is for checking if theres is a lane available to
    //populate by an enemy
    while (this.enemies.length < this.maxEnemies) {
      //let spot evaluate to whatever nextEnemySpot(this.enemies) at engine-utilities.js
      //spot is basically candidate which is a number between 0 an 4
      let spot = nextEnemySpot(this.enemies);
      // console.log(this.enemies);
      //we push a new Enemy to the this.enemies array
      this.enemies.push(new Enemy(this.root, spot));
    }
    // throw message game over if player is dead
    // if (this.isPlayerDead()) {
    //   window.alert("Game over \n your score is " + this.score);
    //   return;
    // }
    // this.collision();
    //call gameloop every 20 milliseconds, not sure why it does it in a loop rather than once
    //cause the setTimeout is inside the function its calling
    setTimeout(this.gameLoop, 20);
  };
  //method to be completed in exercises

  maxEnemiesUpdate = () => {
    // console.log("maxEnemies", this.maxEnemies);
    if (this.maxEnemies < 100) {
      this.maxEnemies += 1;
      setTimeout(this.maxEnemiesUpdate, 1000);
    }
  };

  // collision = () => {
  //   this.enemies.forEach(enemy => {
  //     let enemyTop = enemy.y;
  //     let enemyBottom = enemy.y + ENEMY_DIAMETER;
  //     let enemyLeft = enemy.x;
  //     let enemyRight = enemy.x + ENEMY_DIAMETER;
  //     let playerTop = this.player.y;
  //     let playerBottom = this.player.y + this.player.diameter;
  //     let playerRight = this.player.x + this.player.diameter;
  //     let playerLeft = this.player.x;
  //     // console.log("enemy", enemy);

  //     if (
  //       enemyBottom > playerTop &&
  //       enemyTop < playerBottom &&
  //       enemyRight > playerLeft &&
  //       enemyLeft < playerRight
  //     ) {
  //       enemy.wasHit();
  //       if (enemy.effect === "grow") {
  //         console.log("call grow");
  //         this.player.grow();
  //       }
  //       if (enemy.effect === "shrink") {
  //         this.player.shrink();
  //       }
  //     }
  //   });
  // };

  //create an instance of the root and the player i think
  constructor(theRoot) {
    // this.score = 0;
    this.root = theRoot;
    this.maxEnemies = MAX_ENEMIES;
    this.title2 = new Text(this.root, 0, 0);
    this.title = new Text(this.root, -1010, 100);
    // this.gameScore.update("" + this.score);
    // this.player = new Player(this.root);
    this.enemies = [];
    addBackground(this.root);
  }
}
