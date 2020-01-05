class Text {
  constructor(root, xPos, yPos) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = xPos;
    div.style.top = yPos;
    div.style.color = "black";
    div.style.font = "bold 300px arial";
    div.style.zIndex = 2;
    div.style.transform = "scale(1,1)";
    // div.style.transform = "scaleX(0.3)";
    root.appendChild(div);
    this.domElement = div;
  }
  update = txt => {
    this.domElement.innerText = txt;
  };
}
