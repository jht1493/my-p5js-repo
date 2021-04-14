// Are there 2 or 3 colors?

// Background and foreground hues
let bg1, bg2, fg;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(400, 300);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  bg1 = 330;
  bg2 = 23; // 383 % 360;
  calcfg();
  init_ui();
}

// Calculate foreground hue to be
// in between the background hues
function calcfg() {
  // fg = (bg1 + bg2) / 2;
  fg = ((bg1 + bg2) / 2) % 360;
}

function draw() {

  // Move the backgrounds and foregrounds
  // bg1 += 0.1;
  // bg2 += 0.1;

  calcfg();

  // Background top
  fill(bg1 % 360, 54, 36);
  rect(width / 2, height / 4, width, height / 2);

  // Background bottom
  fill(bg2 % 360, 66, 31);
  rect(width / 2, 3 * height / 4, width, height / 2);

  // Foreground top
  fill(fg % 360, 46, 34);
  rect(width / 2, height / 4, width / 6, height / 6);

  // Foreground bottom
  fill(fg % 360, 46, 34);
  rect(width / 2, 3 * height / 4, width / 6, height / 6);

  show_num('bg1', bg1);
  show_num('bg2', bg2);
  show_num('fg', fg);
}

// https://editor.p5js.org/icm4.0/sketches/4MpL1NJtd
