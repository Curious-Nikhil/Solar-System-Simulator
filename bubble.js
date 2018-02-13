class Bubble {
  constructor(x, y, r) { //put all the data inside here.
    data.call(this)
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    ellipse(this.x, this.y, this.r*2);
  }
}
