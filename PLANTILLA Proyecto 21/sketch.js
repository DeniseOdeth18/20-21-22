const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj,leftSide,rightSide;
var world;
var radius = 40;

//VARIABLE PELOTA


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//AGREGAR PROPIEDADES A LA VARIABLE BALLS_OPTION, ESTATICO, RESTITUCION,FRICCION, DENSIDAD


	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	//CREAR DOS CUERPOS PARA HACER UN BOTE DE BASURA, LADO DERECHO Y LADO IZQUIERDO
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

//HACER QUE LA PELOTA BRINQUE
