class Plinko{
    constructor(x,y){
        var ops={
            isStatic:true,
            friction:1.0,
            density:0.1
        }
        this.body=Bodies.circle(x,y,10,ops)
        World.add(world,this.body)


    }
    display(){
        var pos=this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("white")
        ellipseMode(RADIUS)
       ellipse(0,0,10)
        pop();

    }
}