class Hierro {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 99;
      this.height = 80;
      World.add(world, this.body);
    }
    
    display(){
      var hierropos = this.body.position;		
			push()
			translate(hierropos.x,hierropos.y);
			rectMode(CENTER)
			fill("gray");
      rect(hierropos.x, hierropos.y, this.width, this.height);
      pop()
    }
  };