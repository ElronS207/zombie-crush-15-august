class Stone{
    constructor(x,y,w){
        let options = {
            isStatic:true
        };

        this.body = Bodies.circle(x,y,w,options);
        this.w = w;
        World.add(world,this.body);
    }

    
    show() {
        let pos = this.body.position;
        push();
        ellipseMode(CENTER);
        noStroke();
        fill(148,127,146);
        ellipse(pos.x,pos.y, this.w,this.w);
        pop();
      }

}

