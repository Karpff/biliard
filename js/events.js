window.addEventListener('wheel',function(e)
{
  cameraDistance += event.deltaY*0.05;
  if(cameraDistance < 10)cameraDistance = 10;
  if(cameraDistance > 300)cameraDistance = 300;
});

window.addEventListener('mousedown',function(e)
{
  if(e.which==1 && !balls[0].falling)
  {
    if(balls.reduce((acc,cur)=>acc+cur.spd.length(),0)+balls[0].spd.length() == 0)
    gatheringForce = true;
  }
  if(e.which==2)
  {
    e.preventDefault();
    middlePressed = true;
    lastMouseX = e.clientX - innerWidth/2;
    lastMouseY = e.clientY - innerWidth/2;
  }
});

window.addEventListener('mouseup',function(e)
{
  if(e.which==1)
  {
    if(balls[0].ball.position.y <= -1 && spiritBall.position.y > 0)
    {
      let allowed = true;
      for(let i=0;i<balls.length;i++)
      {
        if(spiritBall.position.distanceTo(balls[i].ball.position) < 2*ballSize)
        allowed = false;
      }
      if(allowed && (balls.reduce((acc,cur)=>acc+cur.spd.length(),0)+balls[0].spd.length() == 0))
      {
        balls[0].falling = false;
        balls[0].pos.x = spiritBall.position.x;
        balls[0].pos.y = spiritBall.position.z;
        balls[0].ball.position.y = spiritBall.position.y;
        spiritBall.position.set(0,-1,0);
      }
    }
    else if(balls.reduce((acc,cur)=>acc+cur.spd.length(),0)+balls[0].spd.length() == 0)
    {
      let angle = Math.atan2(balls[0].pos.x-mouseHelper.position.x,balls[0].pos.y-mouseHelper.position.z);
      if(forceGathered > 2)forceGathered = 2;
      balls[0].spd.x = Math.sin(angle+Math.PI)*forceGathered;
      balls[0].spd.y = Math.cos(angle+Math.PI)*forceGathered;
      gatheringForce = false;
      forceGathered = 0;
      gatheringCounter = 0
    }
  }
  if(e.which==2)
  {
    e.preventDefault();
    middlePressed = false;
    cameraXangle = currentXangle;
    cameraYangle = currentYangle;
  }
});

var mouse = new THREE.Vector2();

window.addEventListener('mousemove',function(e)
{
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
  if(middlePressed)
  {
    let relX = e.clientX - innerWidth/2;
    let relY = e.clientY - innerWidth/2;
    currentXangle = cameraXangle + (lastMouseX-relX)/5*preciseMode;
    currentYangle = cameraYangle + (lastMouseY-relY)/5*preciseMode;
    if(currentYangle<10)currentYangle = 10;
    if(currentYangle>80)currentYangle = 80;
  }
});

window.addEventListener('keydown',function(e)
{
  if(e.keyCode == '49')shadowQuality = 256;
  if(e.keyCode == '50')shadowQuality = 512;
  if(e.keyCode == '51')shadowQuality = 1024;
  if(e.keyCode == '52')shadowQuality = 2048;
  if(e.keyCode == '53')shadowQuality = 4096;
  if(e.keyCode == '192')shadowQuality = 1;
  light.shadow.mapSize.width = shadowQuality;
  light.shadow.mapSize.height = shadowQuality;
  light.shadow.map = null;

  if(e.keyCode == '98')lightMovement.z.front = 1;
  if(e.keyCode == '100')lightMovement.x.left = 1;
  if(e.keyCode == '102')lightMovement.x.right = 1;
  if(e.keyCode == '104')lightMovement.z.back = 1;
  if(e.keyCode == '105')lightMovement.y.top = 1;
  if(e.keyCode == '99')lightMovement.y.bottom = 1;
  if(e.keyCode == '101')
  {
      if(pointLightHelper.material.opacity == 0.5)pointLightHelper.material.opacity = 0;
      else pointLightHelper.material.opacity = 0.5;
  }

  if(e.keyCode == '37')cameraMovement.x.left = 1;
  if(e.keyCode == '38')cameraMovement.z.front = 1;
  if(e.keyCode == '39')cameraMovement.x.right = 1;
  if(e.keyCode == '40')cameraMovement.z.back = 1;

  if(e.keyCode == '82')resetSettings();

  if(e.keyCode == '107')lightMovement.intensity.up = 0.02;
  if(e.keyCode == '109')lightMovement.intensity.down = 0.02;
  if(e.keyCode == '17')preciseMode = 0.1;

});

window.addEventListener('keyup',function(e)
{
  if(e.keyCode == '98'){lightMovement.z.front = 0;}
  if(e.keyCode == '100'){lightMovement.x.left = 0;}
  if(e.keyCode == '102'){lightMovement.x.right = 0;}
  if(e.keyCode == '104'){lightMovement.z.back = 0;}
  if(e.keyCode == '105'){lightMovement.y.top = 0;}
  if(e.keyCode == '99'){lightMovement.y.bottom = 0;}

  if(e.keyCode == '37'){cameraMovement.x.left = 0;}
  if(e.keyCode == '38'){cameraMovement.z.front = 0;}
  if(e.keyCode == '39'){cameraMovement.x.right = 0;}
  if(e.keyCode == '40'){cameraMovement.z.back = 0;}

  if(e.keyCode == '107')lightMovement.intensity.up = 0;
  if(e.keyCode == '109')lightMovement.intensity.down = 0;
  if(e.keyCode == '17')preciseMode = 1;
});

window.addEventListener('resize',()=>
{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
});
