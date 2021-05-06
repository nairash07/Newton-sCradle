
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var ground;
var roofObject ;
var rope;

var bodyA;
var bodyB;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter = 40;
	var posX = width/2;
	var posY = height/4 + 200;

	//Create the Bodies Here.
	bobObject1=new Bob(300,443,50);
	bobObject2=new Bob(380,450,50);
	bobObject3=new Bob(480,451,50);
	bobObject4=new Bob(600,450,50);
	bobObject5=new Bob(700,443,50);

	roofObject = new Roof(width/2, height/4, 280, 20);

	rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*3,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-bobDiameter*1.5,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,bobDiameter*0,0); 
 	rope4 = new Rope(bobObject4.body,roofObject.body,bobDiameter*1.5,0); 
	rope5 = new Rope(bobObject5.body,roofObject.body,bobDiameter*3,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("teal");
  Engine.update(engine);
  stroke(15)
  fill("purple")
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roofObject.display();


  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,roofObject.body.position,{x:-55,y:-45}); } 

}

	function drawLine(constraint) { 
		bobPosition = constraint.bodyA.position 
		roofPosition = constraint.bodyB.position 
		roofBodyOffset = constraint.pointB; 
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY); 
	}

