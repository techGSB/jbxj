class Monster {
    constructor(x,y,width,height) {
        var options = {
            "density":1,
           
            "restitution":2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        this.image = loadImage("Monster-01.png");
        
 
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
       
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}