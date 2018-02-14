function data() {
  this.x = 200,
  this.y = 200,
  this.r = 40
}

function setup() {
  createCanvas(600, 600);
  b = new Bubble();
  //b1 = new Bubble(data1);
  print(b);
}

function draw() {
  background(10);
  fill(200);
  b.move();
  b.show();
//  b1.move();
//  b1.show();
}
