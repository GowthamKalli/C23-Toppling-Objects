const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,90);
    box2 = new Box(230,100,40,90);

    ground = new Ground(200,370);
}

function draw(){
    background(0);

    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
   
}