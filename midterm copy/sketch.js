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
  background(0);
  A.display(c);   
  B.display(c);  
  C.display(c); 
    ellipseColor = color(random(255), random(255), random(255));
  A.move();
  print ("A is" + A.x);
  B.move();
  print("B is" + B.x);
  C.move();
  print ("C is" + C.x);
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].display(c);
    bugs[i].move();
    ellipse(bugs[i].xpos, bugs[i].ypos, 50, 25);
    bugs[i].ypos += 1;
  }  

}
function mouseDragged(){
  push();
  translate(mouseX, mouseY);
  for(let j = 0; j< 5; j++){
    let s = random(.2, 2);
    scale(s);
    rotate(radians(80));
    myPatternsugar();
  }  
}

function myPatternsugar(){
for( let y = 40; y<= height ; y+= height/2){
  for (let x = 40; x<=width; x+= width/2) {
   fill (255);
   ellipse (10,10,2,2);
  }
}
}

function doubleClicked (){
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].display(r);
    bugs[i].jump();
    ellipse(bugs[i].xpos, bugs[i].ypos, 50, 25);
    bugs[i].ypos += 1;
  }  
  A.jump();
  print ("A is" + A.x);
  B.jump();
  print("B is" + B.x);
  C.jump();
  print ("C is" + C.x);
}
class Rambo{
  display(c){ 
    noStroke();
    fill(c);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    // make little people

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




