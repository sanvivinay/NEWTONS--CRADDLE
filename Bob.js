class Bob{
    constructor(x,y,r){
        var options ={
            isStatic:false,
             restitution:1.0,
             density:0.8,
             friction:0,
        }

        this.x = x;
        this.y = y;
        this.r = r;  
        this.body= Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
        }
        
        display(){
        var paperpos = this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        fill(2, 255, 255);
        strokeWeight(3);
        circle(0,0, this.r);
        pop();

        }
}