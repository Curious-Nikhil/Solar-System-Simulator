var data;

function data() {
  this.x = 200,
  this.y = 200,
  this.r = 4
}

function setup() {
  createCanvas(600, 600);
  //earth = new Planet();
  b = new Bubble();
}

function draw() {
  //background(10);
  fill(200);
  b.move();
  b.show();
}
