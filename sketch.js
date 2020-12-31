const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var ball;


function setup(){
 createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true
  }

  var ball_options = {
    restitution:1.0
  }

  ground = Bodies.rectangle(200,350,50,50,ground_options);
  World.add(world,ground);
  //console.log(ground);
  //console.log(ground.position.x);
  
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw(){
 background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

}