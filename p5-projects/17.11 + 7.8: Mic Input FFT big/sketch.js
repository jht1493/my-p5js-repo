let a_fft;
let a_mic;
let a_scale = 8;
let a_bins = 128;
// let a_offset = 0;
let a_offset = 100;
let m_start1 = 20; // Larger for larger center green
let m_stop1 =  256;
let m_start2 = 20;
let m_stop2 = 300*3;
// let s_weight = 1;
let s_weight = 8;
let color_shift = 0; // 100 for blue center

function setup() {
  createCanvas(a_bins*a_scale, a_bins*a_scale);
  colorMode(HSB);
  angleMode(DEGREES);

  a_mic = new p5.AudioIn();
  a_mic.start();

  a_fft = new p5.FFT(0.9, a_bins);
  a_fft.setInput(a_mic);
  
  strokeWeight(s_weight)
}

function draw() {
  background(0);
  let spectrum = a_fft.analyze();
  translate(width / 2, height / 2);
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length - a_offset, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, m_start1, m_stop1, m_start2, m_stop2);
    let x = r * cos(angle);
    let y = r * sin(angle);
    stroke( (i+color_shift) , 255, 255);
    line(0, 0, x, y);
  }
}

// map(value, start1, stop1, start2, stop2, [withinBounds])

// new p5.FFT([smoothing], [bins])
// Must be a power of two between 16 and 1024

// https://github.com/CodingTrain/website/blob/main/
// Tutorials/P5JS/p5.js_sound/
// 17.11_FFT/sketch.js
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4