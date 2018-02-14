
class Bubble {
  constructor(x, y, r) { //put all the data inside here.
    data.call(this)
    /*this.x = 200,
    this.y = 100,
    this.r = 10*/
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    ellipse(this.x, this.y, this.r*2);
  }
}

/*
class Bubble {
  constructor(params) {
    const defaultParams = {
      x: 0,
      y: 0,
      r: 0
    }
    Object.assign(this, defaultParams, params)
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    ellipse(this.x, this.y, this.r * 2);
  }
}


function data1() {
  x = 150,
  y = 150,
  r = 50
 }
*/
