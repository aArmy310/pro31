
var particle = [];
var plinko = [];
var division =[];
var divisionHeight = 300;

function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}


if (frameCount % 60 === 0 ) {
  particle.push(new particle(random(width/2-10, width/2+10), 10,10));
}
function draw() {
  background(255,255,255);  
  drawSprites();
}
