
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1, b2, b3, b4, b5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(250, 550, 50)
	b2 = new Bob(300, 550, 50)
	b3 = new Bob(350, 550, 50)
	b4 = new Bob(400, 550, 50)
	b5 = new Bob(450, 550, 50)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

}



