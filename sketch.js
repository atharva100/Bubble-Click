let bubbles = []
let bgimg;

function preload(){
  bgimg = loadImage('water6.jfif');
}
function setup(){
  createCanvas(600,600);  
  
}


function mousePressed(){
  let r=random(10,50);
  let b = new Bubble(mouseX,mouseY,r);
  bubbles.push(b);
}

function draw(){
  background(bgimg);
  for(i=0;i<bubbles.length;i++){
    bubble1= new Bubble();
    bubbles[i].move()
    bubbles[i].show();
  }

}

class Bubble{
  constructor(){
  this.x=mouseX;
  this.y=mouseY;
  }

  show(){
    // noFill();
    noFill();
    stroke(255);
    strokeWeight(4);
    circle(this.x,this.y,40);
  }
  move(){
    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5)
    }  
}


