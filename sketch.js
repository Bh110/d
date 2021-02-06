const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function preload(){
    thunder1= loadImage("images/1.png");
    thunder2= loadImage("images/2.png");
    thunder3= loadImage("images/3.png");
    thunder4= loadImage("images/4.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    drop= new drops(200,50,10);
man= new umbrella( this.width/2,390);
}

function draw(){
    background( "black");
    drop.display();
    man.display();

    
    
    
    thunder.display();
    
    Engine.update(engine);
    if ( this.drops.position.x> height){
        Matter.Body.setPosition( this.rain,{x:random(0,400),y:random( 0,400)})
}
}
function thunder(){ 
rand=Math.round( random( 1,4));
        if ( framCount%80===0){
 thunderCreatedFrame=frameCount;
 thunder=createSprite( random( 10,370),random( 10,30),10,10);
 switch( rand){
     case 1:thunder.addImage( thunder1);
     break;
     case 2: thunder.addImage( thunder2);
     break;
     default:break;     
 }
thunder.scale=random( 0.3,0.6);
        }}
