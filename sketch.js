const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerb,compb,player,comp;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   
   playerb = new Playerbase(width-400,random(450,height-300),180,150);
   player = new Player(playerb.body.position.x+50,playerb.body.position.y-153,50,180);
   compb = new Computerbase(width-1200,random(450,height-300),180,150);
   comp = new  Computer (compb.body.position.x+50,compb.body.position.y-153,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   playerb.display();
   compb.display();

   //display Player and computerplayer

   player.display();
   comp.display();

}
