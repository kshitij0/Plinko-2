const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world
var g,d=[],p=[],par=[]
var part
var score=0

function setup() {
  createCanvas(790,800);

  engine=Engine.create()
  world=engine.world

  g=new Ground(450,785,900,30)
  World.add(world,g)

  
  for(var i=10 ;i<900;i=i+128){
    d.push(new Divisions(i,620,8,300))
  }


  for(var i=10;i<900;i=i+45){
    p.push(new Plinko(i,150))
  }

  for(var a=10;a<900;a=a+45){
    p.push(new Plinko(a,220))
  }

  for(var b=10;b<900;b=b+45){
    p.push(new Plinko(b,290))
  }

  for(var c=10;c<900;c=c+45){
    p.push(new Plinko(c,360))
  }



  
 
}

function draw() {
  background(0);  

  Engine.update(engine)
  
  g.display()

  for(var i=0;i<d.length;i++){
    d[i].display()

  }

  for(var i=0;i<p.length;i++){
    p[i].display()
  }

  
  for(var a=0;a<p.length;a++){
    p[a].display()
  }

  
  for(var b=0;b<p.length;b++){
    p[b].display()
  }

  for(var c=0;c<p.length;c++){
    p[c].display()
  }

 
  if(part!=null){
    part.display()

    if(part.body.position.y>700){

      if(part.body.position.x<300){
        score=score+50
        part=null
      }
    else  if(part.body.position.x>300 && part.body.position.x<500){
        score=score+100
        part=null
      }
    else  if(part.body.position.x>500){
        score=score+150
        part=null
      }
 
    }
    

  }
  stroke("white")
  textSize(20)
  text("score " + score , 50,50)

  
  
}

 function mouseDragged(){
   part=new Particles(mouseX,10)
 }