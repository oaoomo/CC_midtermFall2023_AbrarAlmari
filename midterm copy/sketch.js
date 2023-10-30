let A, B, C;
let bugs = [];
let ellipseColor = 0;
function setup() {
  createCanvas(800,800);
   background (255);
  A = new Rambo(400,400);
  B = new Rambo(200,200);
  C = new Rambo(100,100);
  ellipseColor = random(255);
 for (let i = 0; i < 50; i++) {
  bugs.push (new Rambo(300,300));
 }
}
function draw (){
  background(255);
  A.display(color(ellipseColor));   
  B.display(color(ellipseColor));  
  C.display(color(ellipseColor)); 
  if(mouseIsPressed){
    ellipseColor = color(random(255), random(255), random(255));
  }
  A.move();
  print ("A is" + A.x);
  B.move();
  print("B is" + B.x);
  C.move();
  print ("C is" + C.x);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].display(color(ellipseColor));
    bugs[i].move();
    ellipse(bugs[i].xpos, bugs[i].ypos, 50, 25);
    bugs[i].ypos += 1;
  }  
}
class Rambo{
  display(c){ 
    noStroke();
    fill(c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  constructor() {
    this.x = random (width);
    this.y = random (height);
    this.diameter = random(100, 200);
    this.speed = 50;
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
}

// how to reach 100 lines of code?
// increase interactivity?
// maybe make the speed and duplication a buildup?
// add to graphics




