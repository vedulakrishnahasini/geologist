
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var grounds;

function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;
	
	grounds = new Ground(790,690);
	ground = new Ground(790,680);
	//Creating the Bodies.
	//creating the hammer.
	hammer = new Hamer(100,20);
		
	//creating stones.
    Stone1 = new Stone(90,350);
    Stone2 = new Stone(730,220);

  //Creating rubbers
	  Rubber1 = new Rubber(700,320);
    Rubber2 = new Rubber(620,320);
    Rubber3 = new Rubber(700,240);
    Rubber4 = new Rubber(520,240);
    Rubber5 = new Rubber(80,160);

  //Creating pebbles
    Kankad1 = new Kankad(390,300);
    Kankad2 = new Kankad(400,390);
    Kankad3 = new Kankad(500,400);
    Kankad4 = new Kankad(550,490);
    Kankad5 = new Kankad(650,500);
    Kankad6 = new Kankad(750,590);
    Kankad7 = new Kankad(250,600);
    Kankad8 = new Kankad(150,690);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  Engine.update(engine);
  
  drawSprites();

  hammer.display();

  Stone1.display();
  Stone2.display();

  grounds.display();	
  ground.display();

  Rubber1.display();
  Rubber2.display();
  Rubber3.display();
  Rubber4.display();
  Rubber5.display();

  Kankad1.display();
  Kankad2.display();
  Kankad3.display();
  Kankad4.display();
  Kankad5.display();
  Kankad6.display();
  Kankad7.display();
  Kankad8.display();
}


