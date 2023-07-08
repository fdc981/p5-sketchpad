# p5-sketchpad

A sketchpad for p5, enabling creation of fullscreen sketches within a text editor with live preview provided by webpack's Live Reload.

## Installation 

```sh
npm install
```

## Creating and bundling a sketch

You can create a sketch within `src/sketch.p5.js`. This sketch should contain p5.js code. For example:

``` js
// src/sketch.p5.js

function setup() {
  createCanvas(200, 200);
  
  noLoop();
}

function draw() {
  rect(10, 10, 30, 30);
}
```

To view the sketch, first run

``` sh
npm webpack
```

Then, the HTML file displaying the sketch is `dist/index.html`; you can open it with a web browser to display it.

### Bundle a sketch other than `sketch.p5.js`

You can specify the sketch you want to preview. For example, if `src/anotherSketch.p5.js` was to be previewed:

``` sh
npm webpack --env sketch=anotherSketch
```

## Live preview

```sh
npx webpack serve
```
