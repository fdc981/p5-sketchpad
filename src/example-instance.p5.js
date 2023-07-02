import p5 from 'p5';

let sketch = function(p) {
  let x = 100;
  let y = 100;

  function setup() {
    createCanvas(700, 410);
  }

  function draw() {
    background(0);
    fill(255);
    rect(x, y, 100, 100);
  }
}

let myp5 = new p5(sketch);
