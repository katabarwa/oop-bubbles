// class Player {
//   //every class in our program have the same root? what is the difference in an argument
//   //called root and theRoot they refer to the root node but how come sometimes its root and sometime
//   //theRoot. is it because player and enemies need each one they're parent node?
//   constructor(root) {
//     //why 2 times player width? is it related that the burger moves incrementally?
//     //position initially to the middle
//     this.x = 2 * PLAYER_DIAMETER;
//     //leave a 10 px space below the burger
//     this.y = GAME_HEIGHT;
//     //create an img dom node
//     this.domElement = document.createElement("div");
//     this.diameter = PLAYER_DIAMETER;
//     this.domElement.style.height = this.diameter + "px";
//     this.domElement.style.width = this.diameter + "px";
//     this.domElement.style.backgroundColor = "black";
//     this.domElement.style.borderRadius = this.diameter + "px";
//     this.domElement.style.position = "absolute";
//     this.domElement.style.left = this.x + "px";
//     this.domElement.style.top = this.y + "px";
//     this.domElement.style.zIndex = "10";
//     //append img dom to the root dom
//     root.appendChild(this.domElement);
//   }
//   moveLeft() {
//     if (this.x > 0) {
//       this.x = this.x - 100;
//     }
//     this.domElement.style.left = this.x + "px";
//   }
//   moveRight() {
//     if (this.x + this.diameter < GAME_WIDTH) {
//       this.x = this.x + 100;
//     }
//     this.domElement.style.left = this.x + "px";
//   }

//   moveUp() {
//     if (this.y > 0) {
//       this.y = this.y - 100;
//     }
//     this.domElement.style.top = this.y + "px";
//   }

//   moveDown() {
//     if (this.y < GAME_HEIGHT) {
//       this.y = this.y + 100;
//     }
//     this.domElement.style.top = this.y + "px";
//   }
//   grow = () => {
//     if (this.diameter < 10000) {
//       this.diameter += 10;
//       this.domElement.style.height = this.diameter + "px";
//       this.domElement.style.width = this.diameter + "px";
//       this.domElement.style.borderRadius = this.diameter + "px";
//     } else {
//       window.alert("Game over \n you won! ;)");
//     }
//   };
//   shrink = () => {
//     this.diameter -= 40;
//     if (this.diameter < 10) {
//       window.alert("Game over \n you lost! ;)");
//     }
//     this.domElement.style.height = this.diameter + "px";
//     this.domElement.style.width = this.diameter + "px";
//     this.domElement.style.borderRadius = this.diameter + "px";
//   };
// }
