function setup() {
  createCanvas(480, 120);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

// https://editor.p5js.org/jht1493/sketches/un2SAKRVm
// Ex_02_02 mouseIsPressed

// https://github.com/lmccart/gswp5.js-code/blob/master/02_Start/Ex_02_02.js
