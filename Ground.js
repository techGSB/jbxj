class Ground {
    constructor(x,y,width,height) {
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(x,y,width,heght,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
        pop()
    }
}