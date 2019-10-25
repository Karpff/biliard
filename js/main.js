var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var ballSize = 1.75;
var plane;
var holes = [];
var shadowQuality = 512;
var preciseMode = 1;

//Camera
camera.up = new THREE.Vector3(0,1,0);
var middlePressed = false;
var cameraXangle = 0;
var currentXangle = 0;
var lastMouseX;
var cameraYangle = 40;
var currentYangle = 40;
var lastMouseY;
var cameraDistance = 120;
var cameraDistanceX;
var cameraDistanceZ;
var cameraBasePosition = new THREE.Vector3(0,0,0);
var cameraMovement =
{
  x: {right:0,left:0},
  z: {front:0,back:0}
};

//Light
var lightMovement =
{
  x: {right:0,left:0},
  y: {top:0,bottom:0},
  z: {front:0,back:0},
  intensity: {up:0,down:0}
};

//Shooting
var gatheringForce = false;
var forceGathered = 0;

var maxCharge = 4;
var gatheringFactor = 0.03125;

var maxGatheringCounter = 20;
var gatheringCounter = 0;
var gatheringCounterFactor = 0.3;


function updateCamera()
{
  if(cameraMovement.x.right!=0||cameraMovement.x.left!=0||cameraMovement.z.front!=0||cameraMovement.z.back!=0)
    cameraHelper.material.opacity = 0.3;
  else
    cameraHelper.material.opacity = 0.01;
  cameraHelper.position.set(cameraBasePosition.x,1.75,cameraBasePosition.z);
  cameraBasePosition.x += Math.cos(currentXangle/180*Math.PI)*(cameraMovement.x.right - cameraMovement.x.left)*preciseMode;
  cameraBasePosition.x += Math.sin(currentXangle/180*Math.PI+Math.PI)*(cameraMovement.z.front - cameraMovement.z.back)*preciseMode;
  cameraBasePosition.z += Math.cos(currentXangle/180*Math.PI+Math.PI)*(cameraMovement.z.front - cameraMovement.z.back)*preciseMode;
  cameraBasePosition.z += Math.sin(currentXangle/180*Math.PI+Math.PI)*(cameraMovement.x.right - cameraMovement.x.left)*preciseMode;
  if(cameraBasePosition.x>45)cameraBasePosition.x = 45;
  if(cameraBasePosition.x<-45)cameraBasePosition.x = -45;
  if(cameraBasePosition.z>20)cameraBasePosition.z = 20;
  if(cameraBasePosition.z<-20)cameraBasePosition.z = -20;
  cameraDistanceXZ = Math.sin(currentYangle/180*Math.PI)*cameraDistance;
  cameraDistanceY = Math.cos(currentYangle/180*Math.PI)*cameraDistance;
  camera.position.x = Math.sin(currentXangle/180*Math.PI)*cameraDistanceXZ+cameraBasePosition.x;
  camera.position.z = Math.cos(currentXangle/180*Math.PI)*cameraDistanceXZ+cameraBasePosition.z;
  camera.position.y = cameraDistanceY;
  camera.lookAt(cameraBasePosition);
}

function updateLight()
{
  light.intensity += lightMovement.intensity.up-lightMovement.intensity.down;
  if(light.intensity > 3)light.intensity = 3;
  if(light.intensity < 0.5)light.intensity = 0.5;
  light.position.x += (lightMovement.x.right-lightMovement.x.left)*preciseMode;
  light.position.y += (lightMovement.y.top-lightMovement.y.bottom)*preciseMode;
  light.position.z += (lightMovement.z.front-lightMovement.z.back)*preciseMode;
  if(light.position.x > 100)light.position.x = 100;
  if(light.position.x < -100)light.position.x = -100;
  if(light.position.z > 100)light.position.z = 100;
  if(light.position.z < -100)light.position.z = -100;
  if(light.position.y > 100)light.position.y = 100;
  if(light.position.y < 10)light.position.y = 10;
}

function resetSettings()
{
  light.position.set(50,50,50);
  cameraBasePosition.set(0,0,0);
  cameraXangle = 0;
  currentXangle = 0;
  cameraYangle = 40;
  currentYangle = 40;
  cameraDistance = 120;
  shadowQuality = 512;
  light.intensity = 1.2;
}

var mouseHelper = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.1,16,16),new THREE.MeshMatcapMaterial({color: 0xffffff,transparent:true,opacity:0.3}));
scene.add(mouseHelper);

var spiritBall = new THREE.Mesh(new THREE.SphereGeometry(ballSize,32,32),new THREE.MeshMatcapMaterial({color:0xffffff,transparent:true,opacity:0.5}));
spiritBall.position.y = -1;
scene.add(spiritBall);

let g = new THREE.BoxGeometry(10,0.1,0.5);
let m = new THREE.MeshMatcapMaterial({color:0xffffff,transparent:true,opacity:0.3});
var line = new THREE.Mesh(g,m);
scene.add(line);

let g1 = new THREE.BoxGeometry(0,0.1,0.5);
let m1 = new THREE.MeshMatcapMaterial({color:0xff0000,transparent:true,opacity:1});
var forceLine = new THREE.Mesh(g1,m1);
scene.add(forceLine);

//RayCasting
var raycaster = new THREE.Raycaster();

function raycasting()
{
  raycaster.setFromCamera(mouse,camera);
  var int = raycaster.intersectObjects(scene.children);
  let onTable = false;
  for(let i=0;i<int.length;i++)
  {
    if(int[i].object==plane)
    {
      if(balls[0].ball.position.y <= -1)
      {
        if(int[i].point.x+ballSize/2<45.5 && int[i].point.x-ballSize/2>-45.5 && int[i].point.z+ballSize/2<20.5 &&int[i].point.z-ballSize/2>-20.5)
        spiritBall.position.set(int[i].point.x,ballSize*2,int[i].point.z);
        else
          spiritBall.position.set(0,-1,0);
        onTable = false;
      }
      else
      {
        mouseHelper.position.set(int[i].point.x,1.75,int[i].point.z);

        let a = Math.atan2(balls[0].pos.x - int[i].point.x, balls[0].pos.y - int[i].point.z);
        let x = Math.sin(a+Math.PI)*5+balls[0].pos.x;
        let z = Math.cos(a+Math.PI)*5+balls[0].pos.y;
        line.position.set(x,1.75,z);
        line.rotation.y = a+Math.PI/2;

        let a1 = Math.atan2(balls[0].pos.x - int[i].point.x, balls[0].pos.y - int[i].point.z);
        let x1 = Math.sin(a1+Math.PI)*forceGathered/maxCharge*5+balls[0].pos.x;
        let z1 = Math.cos(a1+Math.PI)*forceGathered/maxCharge*5+balls[0].pos.y;
        forceLine.position.set(x1,1.75,z1);
        forceLine.rotation.y = a1+Math.PI/2;
        forceLine.geometry = new THREE.BoxGeometry(forceGathered/maxCharge*10,0.15,0.55);
        if(forceGathered == 0)forceLine.material.opacity = 0;
        else forceLine.material.opacity = 1;
        onTable = true;
      }
    }
  }
  if(!onTable)
  {
    mouseHelper.position.set(0,-1,0);
  }
}

createTable();

var balls = [];
balls.push(new Ball(-25,0,textures.ball0));
balls.push(new Ball(19,0,textures.ball1));
balls.push(new Ball(22,1.75,textures.ball6));
balls.push(new Ball(22,-1.75,textures.ball13));
balls.push(new Ball(25,3.5,textures.ball12));
balls.push(new Ball(25,0,textures.ball8)); //czarna
balls.push(new Ball(25,-3.5,textures.ball5));
balls.push(new Ball(28,-1.75,textures.ball14));
balls.push(new Ball(28,1.75,textures.ball7));
balls.push(new Ball(28,-5.25,textures.ball9));
balls.push(new Ball(28,5.25,textures.ball2));
balls.push(new Ball(31,0,textures.ball11));
balls.push(new Ball(31,-3.5,textures.ball4));
balls.push(new Ball(31,3.5,textures.ball3));
balls.push(new Ball(31,-7,textures.ball10));
balls.push(new Ball(31,7,textures.ball15));

var light = new THREE.PointLight(0xffffff, 1.2, 0, 2);
light.position.set(50,50,50);
light.castShadow = true;
light.shadow.mapSize.width = shadowQuality;
light.shadow.mapSize.height = shadowQuality;
scene.add(light);

var pointLightHelper = new THREE.PointLightHelper( light, 1 );
pointLightHelper.material.transparent = true;
pointLightHelper.material.opacity = 0.5;
scene.add( pointLightHelper );

var cameraHelper = new THREE.Mesh(new THREE.CylinderGeometry(1,1,0.1,16,16),new THREE.MeshMatcapMaterial({color: 0xffffff,transparent:true,opacity:0.01}));
cameraHelper.position.y = 1.75;
scene.add(cameraHelper);

var ambientLight = new THREE.AmbientLight(0x444444);
scene.add(ambientLight);

function createLabel(text, sx, sy)
{
	var canvas = document.createElement("canvas");
  var c = canvas.getContext("2d");
  c.font = '64px Arial';
  canvas.width = c.measureText(text).width;
  canvas.height = 64;
  c.font = '64px Arial';
  c.textBaseline = "top";
	c.fillStyle = "white";
	c.fillText(text, 0, 0);
	var texture = new THREE.CanvasTexture(canvas);
  var material = new THREE.MeshBasicMaterial({map: texture,transparent: true, opacity:0.1});
	var mesh = new THREE.Mesh(new THREE.PlaneGeometry(sx, sy, 10, 10), material);
	return mesh;
}

function animate()
{
  updateLight();
  updateCamera();
  if(gatheringForce)
  {
    //forceGathered+=gatheringFactor;
    // if(forceGathered >= maxCharge && gatheringFactor > 0)gatheringFactor*=-1;
    // if(forceGathered <= 0 && gatheringFactor < 0)gatheringFactor*=-1;
    gatheringCounter+=gatheringCounterFactor;
    forceGathered = gatheringCounter*gatheringCounter/100;
    if(gatheringCounter >= maxGatheringCounter && gatheringCounterFactor > 0)gatheringCounterFactor*=-1;
    if(gatheringCounter <= 0 && gatheringCounterFactor < 0)gatheringCounterFactor*=-1;
  }
  for(let i=0;i<balls.length;i++)balls[i].calculateForces();
  for(let i=0;i<balls.length;i++)balls[i].updatePosition();
  for(let i=0;i<balls.length;i++)balls[i].ignoring = [];
  raycasting();
  renderer.render( scene, camera );
  window.requestAnimationFrame(animate);
}
animate();
