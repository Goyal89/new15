function setup() {
  createCanvas(700, 480);
  
  //R G & B values
  background(0, 23, 255 );
  
 
}

function draw() {
//declare variables
   // take a big brush
  strokeWeight(10);
  //dip it in color blue
  stroke("pink");
  frameRate(20);
  let posY= mouseY;
  let posX= mouseX;
  //declare a dot on a screen
  point(posX, posY);
  
}