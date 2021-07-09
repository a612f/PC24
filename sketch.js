const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone,hierro,ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,60);
    hierro = new Hierro(300,219,99,80);
    hammer = new Hammer(300,300);
    rubber = new Rubber(400,100,80);
    stone = new Stone(300,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ground.display();
    hierro.display();
    hammer.display();
    rubber.display();
    stone.display();
 
}