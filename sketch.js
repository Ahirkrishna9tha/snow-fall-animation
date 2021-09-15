const Engine = Matter.Engine;
 const World = Matter.World;
  const Events = Matter.Events;
 const Bodies = Matter.Bodies;

var backgroundImg;
var penguin;
var snow=[]

function preload(){
  bgImg = loadImage("snow2.jpg");
  penguinImg=loadImage("pengiun.png")
}

function setup() {
  createCanvas(800,400);
  penguin=createSprite(400, 300, 50, 50);
  penguin.addImage(penguinImg)
  penguin.scale=0.25;
  engine = Engine.create();
  world = engine.world;
}


function draw() {
  Engine.update(engine)
  background(bgImg);
  drawSprites();
  if (keyDown("right")) {
    penguin.x+=5
  }
  if (keyDown("left")) {
   penguin.x-=5 
  }
  if(frameCount%60===0){
    snow.push(new Snow(random(0,800),0))
  }
  
     
  for(var k = 0; k < snow.length; k++ ){
    snow[k].display();
  }
  
}