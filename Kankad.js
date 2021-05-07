class Kankad {
    constructor(x,y) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        };
        this.body = Bodies.circle(x,y,8,options);
        this.radius = 8;
        World.add(world, this.body);
    }

    display() {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(2);
      stroke("blue");
      fill("pink");
      ellipse(0, 0, this.radius);
      pop();
    }
}