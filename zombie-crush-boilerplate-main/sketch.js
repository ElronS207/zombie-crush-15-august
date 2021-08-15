const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
  var base1 
  var base2
  var bridge1
  var stones = []


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  base1 = new Base(width-100,height-300,200,height/2 + 100);
  base2 = new Base(100,height-300,200,height/2 + 100);
  bridge1 = new Bridge(30,{x:60,y:height/2 - 140});
  jointPoint= new Base(width - 250,height/2 - 100,40,20);
  Matter.Composite.add(bridge1.body,jointPoint);
  jointLink = new Link(bridge1,jointPoint);
  for(i = 0; i < 8; i++){
    var x = random(width/2 -200,width/2 +300)
    var y = random(-100,100)
    var stone = new Stone(x,y,80)
    stones.push(stone)
  }
}

function draw() {
  background(51);
  for(var s in stones){
    s.show();
  }
  Engine.update(engine);
  base1.show();
  base2.show()
  bridge1.show()
}
