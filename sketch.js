var ship;
var shipImg;
var sea;
var seaImg;


function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  
  
  sea = createSprite(200,200,200,200);
  sea.addImage(seaImg);
  sea.scale = 0.4;

  ship = createSprite(150,200,50,50);
  ship.addAnimation("ship", shipImg);
  ship.scale = 0.3;
  
  
}

function draw() {
  background("blue");
  
  sea.velocityX = -2;
  
  if(sea.x < -400){
  sea.x = 800;
}
console.log(sea.x);
  
  drawSprites();
}