var m;

function setup() {
  createCanvas(600,600);
  m = new Mover();
}

function draw() {
  background(230, 230, 250);

  if (mouseIsPressed){
  	m.wind();
  } 

  m.show();
  m.update();
  m.edges();
  
} 