const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let myEngine;
let myWorld;
var ground,leftWall,rightWall,topWall;
var ball;
var button1,button2;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  
  myWorld = myEngine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(200,390,400,30);
  leftWall = new Ground(10,200,30,400);
  rightWall = new Ground(390,200,30,400);
  topWall = new Ground(200,10,400,30);

  var ball_options = {
    restitution : 0.7
  }
  ball = Bodies.circle(100,200,17,ball_options);
  World.add(myWorld,ball);
  
  button1 = createImg("right.png");
  button1.position(200,30);
  button1.size(50,50);
  button1.mouseClicked(hForce);

  button2 = createImg("up.png");
  button2.position(100,30);
  button2.size(40,40);
  button2.mouseClicked(vForce);
}

function draw() 
{
  background(51);
  Engine.update(myEngine);

  ground.display();
  leftWall.display();
  rightWall.display();
  topWall.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,17,17);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:- 0.05})
}