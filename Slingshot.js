class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //loaded all of the sling shot images
        this.image1 = loadImage ("sprites/sling1.png")
        this.image2 = loadImage ("sprites/sling2.png")
        this.image3 = loadImage ("sprites/sling3.png")
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            //it was made so if  the the bird was heald farther beahind the sling shot the line would become thiner
            if(this.sling.bodyA.position.x < 145){
                strokeWeight(3);
                stroke(48, 22, 8);
                line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+5);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y+5);
                //image(this.image3,pointA.x-25, pointA.y, 10, 30);
            }
            //it makes it so that the line will become thicker if the line is pulled infront of the sling shot.
           else{
            strokeWeight(6);
            stroke(48, 22, 8);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+5);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y+5);
            //image(this.image3,pointA.x-25, pointA.y, 10, 30);
           }
        }
        //right of the sling shot
        image(this.image1,170,25)
        //Left of the sling shot
        image(this.image2,145,25)
        
    }
    
}