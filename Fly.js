class Fly{
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0,
            length:10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
         World.add(world,this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    detach(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(5);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
    }
}