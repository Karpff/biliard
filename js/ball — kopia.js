class Ball
{
  constructor(posX,posY,textureURL)
  {
    this.pos = new THREE.Vector2(posX,posY);
    this.spd = new THREE.Vector2(0,0);
    this.travelAngle = Math.atan2(this.spd.y,this.spd.x);
    let texture = new THREE.TextureLoader().load(textureURL);
    this.ball = new THREE.Mesh(new THREE.SphereGeometry(ballSize,32,32),new THREE.MeshPhysicalMaterial({map: texture}));
    this.ball.position.y = 3;
    this.ball.castShadow = true;
    this.ball.receiveShadow = true;
    this.falling = false;
    scene.add(this.ball);
  }

  update()
  {
    if(!this.falling)
    {
      if(this.pos.x + ballSize/2 > 45.5 && this.spd.x>0)this.spd.x = -0.9*this.spd.x;
      if(this.pos.x - ballSize/2 < -45.5 && this.spd.x<0)this.spd.x = -0.9*this.spd.x;
      if(this.pos.y + ballSize/2 > 20.5 && this.spd.y>0)this.spd.y = -0.9*this.spd.y;
      if(this.pos.y - ballSize/2 < -20.5 && this.spd.y<0)this.spd.y = -0.9*this.spd.y;
      this.pos.add(this.spd);
      this.travelAngle = Math.atan2(this.spd.y,this.spd.x);
      for(let i=0;i<balls.length;i++)
      {
        if(balls[i] != this && !balls[i].falling)
        {
          let distance = this.pos.distanceTo(balls[i].pos);
          if(distance<ballSize*2)
          {
            let collisionAngle = Math.atan2(balls[i].pos.y-this.pos.y,balls[i].pos.x-this.pos.x);
            let directionalForce1 = Math.abs(Math.cos(this.travelAngle - collisionAngle)*this.spd.length());
            let directionalForce2 = Math.abs(Math.cos(balls[i].travelAngle - collisionAngle+Math.PI)*this.spd.length());
            let directionalForce = directionalForce1 + directionalForce2;
            this.spd.add(new THREE.Vector2(Math.cos(collisionAngle+Math.PI),Math.sin(collisionAngle+Math.PI)).multiplyScalar(directionalForce*0.5));
            balls[i].spd.add(new THREE.Vector2(Math.cos(collisionAngle),Math.sin(collisionAngle)).multiplyScalar(directionalForce*0.5));
          }
        }
      }
      this.spd.multiplyScalar(0.99);
      for(let i=0;i<holes.length;i++)
      {
        if(this.pos.distanceTo(holes[i])<4)this.falling=holes[i];
      }
    }
    else
    {
      let angle = Math.atan2(this.falling.y-this.pos.y, this.falling.x-this.pos.x);
      this.pos.x += Math.cos(angle)*0.1;
      this.pos.y += Math.sin(angle)*0.1;
      if(this.ball.position.y>-1)
        this.ball.position.y-=0.1;
    }
    this.ball.position.x = this.pos.x;
    this.ball.position.z = this.pos.y;
  }

}
