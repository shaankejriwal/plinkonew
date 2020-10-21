const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balls = [];
var plinkos = [];
var divisons = [];

var score = 0;

var engine, world;

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,590,400,20);
    ground2 = new Ground(10,300,20,600);
    ground3 = new Ground(390,300,20,600);

    divison1 = new Divisons(30,500,10,200);
    divison2 = new Divisons(90,500,10,200);
    divison3 = new Divisons(150,500,10,200);
    divison4 = new Divisons(210,500,10,200);
    divison5 = new Divisons(270,500,10,200);
    divison6 = new Divisons(330,500,10,200);

    ball1 = new Ball(30,300,20,20);
    ball2 = new Ball(90,300,20,20);
    ball3 = new Ball(150,300,20,20);
    ball4 = new Ball(210,300,20,20);
    ball5 = new Ball(270,300,20,20);
    ball6 = new Ball(330,300,20,20);

    ball7 = new Ball(60,250,20,20);
    ball8 = new Ball(120,250,20,20);
    ball9 = new Ball(180,250,20,20);
    ball10 = new Ball(240,250,20,20);
    ball11 = new Ball(300,250,20,20);

    ball12 = new Ball2(50,100,20,20);
    ball13 = new Ball2(110,100,20,20);
    ball14 = new Ball2(170,100,20,20);
    ball15 = new Ball2(230,100,20,20);
    ball16 = new Ball2(290,100,20,20);
    ball17 = new Ball2(350,100,20,20);
}

function draw(){
    background(0);
    
    noStroke();
    textSize(30);
    fill("white");
    text("score: "+score,width-300,50);
    
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();
    divison1.display();
    divison2.display();
    divison3.display();
    divison4.display();
    divison5.display();
    divison6.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    ball11.display();
    ball12.display();
    ball13.display();
    ball14.display();
    ball15.display();
    ball16.display();
    ball17.display();
}
