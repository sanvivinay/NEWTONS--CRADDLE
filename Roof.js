class Roof{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.body);
    }

    display(){
        var groundPos = this.body.position;
        push();
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(43, 30, 23);
        rect(0,0,this.w,this.h);
        pop();
    }
}