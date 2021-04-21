var hr;
var mn;
var sc;
var scAngle;
var mnAngle;
var hrAngle;
function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0);

   fill(255);
  textSize(24);
  textStyle("bold");
  text(hr + ":" + mn + ":" + sc, 100,400); 
  

translate(200,200)
rotate (-90);

   hr = hour();
   mn = minute();
   sc = second();
  
  strokeWeight(8);
  stroke("green");
  noFill();
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("red");
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  
  stroke("blue");
  hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrAngle);
  
  push();
  rotate(scAngle);
  stroke("green");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,50,0);
  pop();
  stroke("Black");
  point (0,0);
  
  

  }
