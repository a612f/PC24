class Stone {
    constructor(x, y) {
      var options = {
        density:12,
        friction: 0.9,
        restitution:0.9
      }
      this.x=x;
	  	this.y=y;
      this.width = 100;
      this.height = 100;
      this.body = Bodies.rectangle(this.x, this.y, 100, 100, options);
      World.add(world, this.body);
    }
    display(){
      var stonepos=this.body.position;		
			push()
			translate(stonepos.x,stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
      rect(stonepos.x, stonepos.y, this.width, this.height);
      pop()
    }
  }