import p5 from 'p5';

let sketch = function(p) {
  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(700, 410);
  }

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 100, 100);
  }
}

let myp5 = new p5(sketch);
