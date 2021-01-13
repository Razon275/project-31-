
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles=[];
var plinkos=[];
var divisions=[];
var ground;
var divsionheight=300;
function preload()
{
	
}

function setup() {
	createCanvas(480,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(240,590,600,10)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  for(var k  =0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divsionheight/2,10,divsionheight))
  }
  
  ground.display()
  drawSprites();
 
}
