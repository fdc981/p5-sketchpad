/**
 * Draws a polygon centered at x, y, with given radius and number of sides
 * numSides.
 */
function polygon(x, y, radius, numSides) {
  beginShape();
  for (let i = 0; i < numSides; i++) {
    vertex(x + radius * Math.cos(2 * Math.PI / numSides * i),
           y + radius * Math.sin(2 * Math.PI / numSides * i));
  }
  endShape(CLOSE);
}

function setup() {
  createCanvas(200, 200);
  noLoop();
}

function draw() {
  polygon(100, 100, 40, 5);
}
