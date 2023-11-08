let A, B, C;
let bugs = [];
let ellipseColor = 0;
let circleX = 400;
let circleY = 400;
let xSpeed = 1;
let ySpeed = 1;

function setup() {
  createCanvas(800,800);
   background (0);
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
 ellipseColor = color(random(255), random(255), random(255))
  if (key == 'a'){
   fill (255);
   stroke(0);
  strokeWeight (5);
  ellipse (400,400, 800, 800);
  ellipse (400,400, 600, 600);
  ellipse (400,400, 400, 400);
 

  fill (0);
  stroke(0);
  strokeWeight (5);
  circle(circleX, circleY, 50);
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;
  if(circleX < 300|| circleX > 500) {
    xSpeed = xSpeed * -1;
  }  
  if(circleY < 300|| circleY > 500) {
    ySpeed = ySpeed * -1;
  }
//  dis(circleX,circleY,400,400);

//  if (dis(circleX, circleY, 400,400)){

//  }
//  using the radius to confine the circle into a smaller space
// use dist() and then use another if statement and make it flip the x and the y values  and then just add random (-1,1 etc) to the velocity
// make sure the smaller circle start in the center by changing initial height and width 
  }
  
 
if (key == ' '){ 
    fill (255);
    strokeWeight (5);
    stroke(0)
    ellipse (400,400, 800, 800);
    ellipse (400,400, 600, 600);
   
  
    A.displayB();
    B.displayB();
    C.displayB();
     
    A.smove();
    print ("A is" + A.x);
    B.smove();
    print("B is" + B.x);
    C.smove();
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




class Rambo{
  constructor(x,y) {
    this.x = random (width);
    this.y = random (height);
    this.diameter = random(100, 200);
    this.speed;
// the above code was based off of a jitter example on the p5 reference website
	
  }
  displayA(){ 
    noStroke();
    fill(ellipseColor);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  displayB(){ 
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
 
  
 
  smove() {
 

 
   
      this.speed=20
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed); 
      // the above code was based off of a jitter example on the p5 reference website
      // make it so this.x is the center of the page again, (and same for y) OR
      // if the x has moved off the page than make it so it shows on the opposite side
      
      if(this.x < 150) {
        this.x = width + this.x
      }  
      if (this.x > 650) {
        this.x = width + this.x
      }
      if(this.y < 150) {
        this.y = height + this.y 
      }
      if (this.y > 650){
        this.y = height + this.y 
      }
       if(this.x < 150) {
        this.x = 150 - this.x
      }  
      if (this.x > 650) {
        this.x = 650 - this.x
      }
      if(this.y < 150) {
        this.y = 150 - this.y 
      }
      if (this.y > 650){
        this.y = 650 - this.y 
      }


      // if (this.x < 0) {
      //   this.x = width + this.x
      // }
      // if (this.y < 0) {
      //   this.y = height + this.y
      // }
      // if (this.x > width) {
      //   this.x = width - this.x
      // }
      // if (this.y > height) {
      //   this.y = height - this.y
      // }
		
			
			
    }
    move() {
 

 
   
      this.speed=50
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed); 
      // the above code was based off of a jitter example on the p5 reference website
      // make it so this.x is the center of the page again, (and same for y) OR
      // if the x has moved off the page than make it so it shows on the opposite side
      
      if(this.x < 150) {
        this.x = width + this.x
      }  
      if (this.x > 650) {
        this.x = width + this.x
      }
      if(this.y < 150) {
        this.y = height + this.y 
      }
      if (this.y > 650){
        this.y = height + this.y 
      }
       if(this.x < 150) {
        this.x = 150 - this.x
      }  
      if (this.x > 650) {
        this.x = 650 - this.x
      }
      if(this.y < 150) {
        this.y = 150 - this.y 
      }
      if (this.y > 650){
        this.y = 650 - this.y 
      }


      // if (this.x < 0) {
      //   this.x = width + this.x
      // }
      // if (this.y < 0) {
      //   this.y = height + this.y
      // }
      // if (this.x > width) {
      //   this.x = width - this.x
      // }
      // if (this.y > height) {
      //   this.y = height - this.y
      // }
		
			
			
    }
  }


 







