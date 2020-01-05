class Enemy {
  // this method make the enemies goes down at a random speed
  //timeDiff is update every 20 milliseconds from engine setTimeout
  update(timeDiff) {
    this.domElement.style.top = this.y + "px";
    this.domElement.style.left = this.x + "px";

    if (this.x > GAME_WIDTH - ENEMY_DIAMETER) {
      this.direction = "left";
    }
    if (this.x < 0) {
      this.direction = "right";
    }
    if (this.direction === "left") {
      this.x = this.x - timeDiff * this.speed;
    }
    if (this.direction === "right") {
      this.x = this.x + timeDiff * this.speed;
    }
    if (this.y > GAME_HEIGHT - ENEMY_DIAMETER) {
      this.ydirection = "top";
    }
    if (this.y < 0) {
      this.ydirection = "bottom";
    }
    if (this.ydirection === "top") {
      this.y = this.y - timeDiff * this.speed;
    }
    if (this.ydirection === "bottom") {
      this.y = this.y + timeDiff * this.speed;
    }
  }
  wasHit = () => {
    if (this.destroyed === false) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  };

  // randomColor = () => {
  //   let randomNumber = Math.floor(Math.random() * 4);
  //   if (randomNumber === 0) {
  //     return "red";
  //   }
  //   if (randomNumber === 1) {
  //     return "blue";
  //   }
  //   if (randomNumber === 2) {
  //     return "black";
  //   }
  //   if (randomNumber === 3) {
  //     return "green";
  //   }
  // };
  randomColorHex = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    // console.log("randomNumber", randomNumber);
    if (randomNumber === 0) {
      return "rgba(255,0,0,100)";
    }
    if (randomNumber === 1) {
      return "rgba(0,0,255,100)";
    }
    if (randomNumber === 2) {
      return "rgba(0,255,0,100)";
    }
    if (randomNumber === 3) {
      return "rgba(0,0,0,100)";
    }
  };

  randomEffect = () => {
    let randomNumber = Math.floor(Math.random() * 4);
    console.log("randomEffect Random number", randomNumber);
    if (randomNumber === 0) return "shrink";
    else return "grow";
  };

  //this contructor is never called but each time we create a new
  //instance of the class enemy we call the constructor
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    //enemySpot is a value between 0 and 4
    this.x = enemySpot * 10;
    //gotta start outside the game window
    this.y = 0;
    this.effect = this.randomEffect();
    this.destroyed = false;
    this.domElement = document.createElement("div");
    this.domElement.style.backgroundColor =
      this.effect === "shrink" ? "rgba(0,0,0,100)" : this.randomColorHex();
    this.domElement.style.border = this.randomColorHex();
    this.domElement.style.boxShadow =
      "0px 0px 100px 100px " + this.randomColorHex();
    this.domElement.style.borderRadius = "100px";
    this.domElement.style.width = "100px";
    this.domElement.style.height = "100px";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 8;
    this.direction = Math.floor(Math.random * 100) > 50 ? "left" : "right";
    this.ydirection = Math.floor(Math.random * 100) > 50 ? "top" : "bottom";
  }
}
