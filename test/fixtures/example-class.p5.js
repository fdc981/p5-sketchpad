class GlowBox {
  posX;
  posY;
  boxWidth;
  boxHeight;
  glowAmount;

  constructor(posX, posY, boxWidth, boxHeight, glowAmount) {
    this.posX = posX;
    this.posY = posY;
    this.boxWidth = boxWidth;
    this.boxHeight = boxHeight;
    this.glowAmount = glowAmount;
  }

  display() {
    drawingContext.shadowColor = "white";
    drawingContext.shadowBlur = this.glowAmount;
    drawingContext.fillRect(this.posX,
                            this.posY,
                            this.boxWidth,
                            this.boxHeight);
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("black");
  noLoop();
}

function draw() {
  stroke("white");
  fill("white");

  let gbox = new GlowBox(width / 2 - 25, height / 2 - 25,
                         50, 50,
                         10);
  gbox.display();
}
