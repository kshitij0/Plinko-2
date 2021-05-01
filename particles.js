class Particles{
    constructor(x,y){
        var ops={
            restitution:0.4
        }
        this.body=Bodies.circle(x,y,10,ops)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,10)
        pop()
    }
}