var thrash;
var box1,box2,box3;
var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  
  thrash = new Garbage(100,650,30);

  box1 = new Rect(540,600,20,100);
	box2 = new Rect(600,640,100,20);
  box3 = new Rect(650,600,20,100);
  
  ground = new Floor(400,660,1000,20);

  

	Engine.run(engine);
  
}  


function draw() {
  rectMode(CENTER);
  background(0);
   
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  thrash.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(thrash.body,thrash.body.position,{x:150,y:-125});
  
  }
}



