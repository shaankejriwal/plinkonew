class Ball2 {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.005
      }
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      if(this.body.position.x < 150 && this.body.position.y > 400 && this.body.position.y < 550){
        score++;
      }
      if(this.body.position.x > 150 && this.body.position.y > 400 && this.body.position.y < 550){
        score+500;
      }
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      strokeWeight(4);
      stroke("blue");
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }