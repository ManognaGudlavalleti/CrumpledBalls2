class Paper{
    constructor(x, y, radius){
         
           var options = {
           isStatic:false,
           'restitution':1.3,
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("image/paper.png");
        World.add(world, this.body);

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
       // fill("Pink");
        image(this.image, 0, 0,this.radius, this.radius);
        pop();
    }
}