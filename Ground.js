class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic : true   
        }
        this.bodies = Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.bodies)
        this.w = w;
        this.h = h;
    }

    display(){
        push();
        var pos = this.bodies.position;
        rectMode(CENTER);
        fill("gray");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}