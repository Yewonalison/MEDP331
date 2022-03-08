function setup() {
  createCanvas(1000, 400);
}

function draw() {
  if (mouseIsPressed) {
    //fill(0);
    ellipse(mouseX, mouseY, 80, 80);
  }
}
