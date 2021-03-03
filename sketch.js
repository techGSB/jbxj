const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg;
var fly;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15;

var h;
var gr;
var monster;

function preload() {
//preload the images here
bg = loadImage("GamingBackground.png");


}

function setup() {
  createCanvas(1365, 657);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  
  h = new Hero (400,300,350,200);
  b1 = new Block (800,500,90,90);
  b2 = new Block (800,410,90,90);
  b3 = new Block (800,320,90,90);
  b4 = new Block (800,230,90,90);
  b5 = new Block (800,140,90,90);
  b6 = new Block (890,50,90,90);
  b7 = new Block (890,500,90,90);
  b8 = new Block (890,410,90,90);
  b9 = new Block (890,320,90,90);
  b10 = new Block (890,230,90,90);
  b11 = new Block (980,140,90,90);
  b12 = new Block (980,50,90,90);
  b13 = new Block (980,410,90,90);
  b14 = new Block (980,320,90,90);
  b15 = new Block (980,230,90,90);
  gr = new g(500,600,1900,10);
  monster = new Monster(1200,300,300,300);
  fly = new Fly (h.body,{x:400,y:280,});
  
  Engine.run(engine);

}

function draw() {

 
  background(bg);
  Engine.update(engine);
  h.display();
  fly.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  gr.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(h.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  fly.detach();
}