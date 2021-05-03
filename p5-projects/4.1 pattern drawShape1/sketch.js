function setup() {
  createCanvas(400, 200);
  background(255);
  noFill();

  let x = 0;
  let y = 0;
  let len = 50;

  while (y < height) {
    draw_shape1(x, y, len);
    x = x + len;
    if (x > width) {
      x = 0;
      y = y + len;
    }
  }
}

function draw_shape1(x, y, len) {
  console.log('x=' + x + ' y=' + y+' len='+len);
  circle(x + 25, y + 25, len - 10);
  rect(x, y, len, len);
}

// https://editor.p5js.org/jht1493/sketches/cA_XRhYnI
// 4.1 pattern drawShape1

// https://editor.p5js.org/jht1493/sketches/S9YsVD9gV
// 3.3. pattern while y

// https://editor.p5js.org/jht1493/sketches/QlAHBLxi8e
// 3.3. pattern while

// https://editor.p5js.org/jht1493/sketches/UA_D1rM5A
// 3.3. pattern draw_shape1 save

// https://editor.p5js.org/jht1493/sketches/D34BIqcoE
// 2.5 setup pattern draw_shape1 save

// https://editor.p5js.org/jht1493/sketches/OtE1lw_X2
// 2.5 setup pattern draw_shape1

// https://editor.p5js.org/jht1493/sketches/v9zsQFPqN
// 2.2 variable circleX

// Make Your Own (Make Your Own Variable)
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/2.2-make-your-own.html
// https://youtu.be/dRhXIIFp-ys

// Make Your Own Variable: https://editor.p5js.org/codingtrain/sketches/xPXNdPy17
// Growing Circle Exercise: https://editor.p5js.org/codingtrain/sketches/ehbMJ-otC