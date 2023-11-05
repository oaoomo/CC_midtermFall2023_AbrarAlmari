let A, B, C;
let AA,BB,CC;
let bugs = [];
let ellipseColor = 0;
let circleX = 100;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 1;

function setup() {
  createCanvas(800,800);
   background (0);
  A = new Rambo(400,400);
  B = new Rambo(200,200);
  C = new Rambo(100,100);
  AA = new stationary(100,700);
  BB = new stationary(400,700);
  CC = new stationary (600,700);
  ellipseColor = random(255);
 for (let i = 0; i < 50; i++) {
  bugs.push (new Rambo(300,300));
 }
}

function draw (){
  background(0);
  fill (255);
  strokeWeight (5);
  ellipse (400,400, 800, 800);
  ellipse (400,400, 600, 600);
  ellipse (400,400, 400, 400);
  ellipseColor = color(random(255), random(255), random(255))

  fill (255);
  strokeWeight (5);
  ellipse (400,400, 400, 400);
  circle(circleX, circleY, 50);
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;
  if(circleX < 0 || circleX > width) {
    xSpeed = xSpeed * -1;
  }  
  if(circleY < 0 || circleY > height) {
    ySpeed = ySpeed * -1;
  }
 
 
if (key == ' '){ 
    fill (255);
    strokeWeight (5);
    ellipse (400,400, 800, 800);
    ellipse (400,400, 600, 600);
  
    A.displayA();
    B.displayA();
    C.displayA();
     
    A.move();
    print ("A is" + A.x);
    B.move();
    print("B is" + B.x);
    C.move();
    print ("C is" + C.x);
  }  
  else if (keyCode === ENTER){
    fill (255);
    strokeWeight (5);
    ellipse (400,400, 800, 800);
    for (let i = 0; i < bugs.length-1; i++) {
      bugs[i].displayA();
      bugs[i].move();
      ellipse(bugs[i].xpos, bugs[i].ypos, 50, 25);
      bugs[i].ypos += 1;
    }  
}
} 


function mouseDragged(){
  push();
  translate(mouseX, mouseY);
  for(let j = 0; j< 5; j++){
    let s = random(3, 2);
    scale(s);
    rotate(radians(0));
    myPatternsugar();
  }  
  pop();

  push();
  translate(mouseX, mouseY);
  for(let j = 0; j< 5; j++){
    // this is the magic spot to play!
    let s = random(3, 2);
    scale(s);
    rotate(radians(0));
    myPatternsugar();
    // how can i get a tighter spiral?
  }
  pop();
}

function myPatternsugar(){
  for( let y = 40; y<= height ; y+= height/2){
    for (let x = 40; x<=width; x+= width/2) {
     fill (0);
     ellipse (10,10,2,2);
    }
  }
}


class stationary{
  constructor(x,y) {
    this.x = x
    this.y = 400
   
  }
  display(){ 
    strokeWeight(5);
    fill(0);
    ellipse(this.x+10, this.y, 40, 40);
  }
 
}



class Rambo{
  constructor(x,y) {
    this.x = random (width);
    this.y = random (height);
    this.diameter = random(100, 200);
    this.speed;

			// this.currentTime; //millus();
			// this.lastTime = 0;
			// this.interval = 5000;
			// this.born = true;
  }
  displayA(){ 
    noStroke();
    fill(ellipseColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  // displayB(){ 
  //   noStroke();
  //   fill(ellipseColor);
  //   ellipse(this.x, this.y, this.diameter, this.diameter);
  // }
  
 
  move() {
 

 
    // this.currentTime = millis(); // take a time stamp
    // if (key == ' '){ 
		// if(this.currentTime - this.lastTime > this.interval){
		  
      this.displayA();
      this.speed=50
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
		
			
			// this.lastTime = this.currentTime;
		
			// this.currentTime = 0;
    }
  }


 







