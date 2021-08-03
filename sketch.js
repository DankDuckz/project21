var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

class ground {
	constructor(x,y,w,h) {
		var options = {
			isStatic: true
		}
		this.body = Bodies.rectangle(x,y,w,h,options)
		this.w = w
		this.h = h
		World.add(world,this.body)
	}
	display() {
		var pos = this.body.position
		rect(pos.x,pos.y,this.w,this.h)
	}
}

function setup() {
	createCanvas(800, 400);
	
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		density : 1.2,
		friction : 0
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(50,0,15,ball_options)
	World.add(world,ball)

	fill("red")
	groundObj = new ground(400,350,800,15)
	leftSide = new ground(500,290,5,100)
	rightSide = new ground(700,290,5,100)

	wallD = new ground(400,400,800,25)
	wallU = new ground(400,0,800,25)
	wallR = new ground(0,200,25,400)
	wallL = new ground(800,200,25,400)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("white")
  ellipse(ball.position.x,ball.position.y,15,15)

  fill("red")
  groundObj.display()
  leftSide.display()
  rightSide.display()

  wallU.display()
  wallD.display()
  wallL.display()
  wallR.display()

  if (keyDown("UP_ARROW")) {
	  Body.applyForce(ball,{x:0,y:0},{x:5,y:2})
  }

  Engine.update(engine)

  
  drawSprites();
 
}



