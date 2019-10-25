function createTable()
{
  let g = new THREE.CubeGeometry(1000, 0, 1000);
  let m = new THREE.MeshLambertMaterial({color: 0x000000});
  plane = new THREE.Mesh(g, m);
  plane.position.y = 1;

  g = new THREE.CubeGeometry(100, 3, 50);
  let tableBase = new THREE.Mesh(g, m);

  g = new THREE.CubeGeometry(93, 3, 43);
  m = new THREE.MeshLambertMaterial({color: 0x005511});
  let table = new THREE.Mesh(g, m);
  table.position.y = 0.05;

  g = new THREE.BoxGeometry(103, 8, 3);
  m = new THREE.MeshLambertMaterial({color: 0x331111});

  let side1 = new THREE.Mesh(g, m);
  side1.position.set(0,1,-25);
  let side2 = new THREE.Mesh(g, m);
  side2.position.set(0,1,25);

  g = new THREE.BoxGeometry(3, 8, 53);

  let side3 = new THREE.Mesh(g, m);
  side3.position.set(-50,1,0);
  let side4 = new THREE.Mesh(g, m);
  side4.position.set(50,1,0);

  g = new THREE.BoxGeometry(38,7,2);
  m = new THREE.MeshLambertMaterial({color: 0x005511});

  let sub1 = new THREE.Mesh(g, m);
  sub1.position.set(23,1,-22.5);
  let sub2 = new THREE.Mesh(g, m);
  sub2.position.set(-23,1,-22.5);
  let sub3 = new THREE.Mesh(g, m);
  sub3.position.set(23,1,22.5);
  let sub4 = new THREE.Mesh(g, m);
  sub4.position.set(-23,1,22.5);

  g = new THREE.BoxGeometry(2,7,34);

  let sub5 = new THREE.Mesh(g, m);
  sub5.position.set(47.5,1,0);
  let sub6 = new THREE.Mesh(g, m);
  sub6.position.set(-47.5,1,0);

  g = new THREE.CylinderGeometry(4,4,3,16,16);
  m = new THREE.MeshLambertMaterial({color: 0x000000});

  let hole1 = new THREE.Mesh(g, m);
  hole1.position.set(46,0.1,-21);
  let hole2 = new THREE.Mesh(g, m);
  hole2.position.set(46,0.1,21);
  let hole3 = new THREE.Mesh(g, m);
  hole3.position.set(-46,0.1,-21);
  let hole4 = new THREE.Mesh(g, m);
  hole4.position.set(-46,0.1,21);
  let hole5 = new THREE.Mesh(g, m);
  hole5.position.set(0,0.1,-22);
  let hole6 = new THREE.Mesh(g, m);
  hole6.position.set(0,0.1,22);

  holes.push(new THREE.Vector2(46,-21));
  holes.push(new THREE.Vector2(46,21));
  holes.push(new THREE.Vector2(-46,21));
  holes.push(new THREE.Vector2(-46,-21));
  holes.push(new THREE.Vector2(0,-22));
  holes.push(new THREE.Vector2(0,22));

  side1.castShadow = true;
  side2.castShadow = true;
  side3.castShadow = true;
  side4.castShadow = true;
  sub1.castShadow = true;
  sub2.castShadow = true;
  sub3.castShadow = true;
  sub4.castShadow = true;
  sub5.castShadow = true;
  sub6.castShadow = true;

  table.receiveShadow = true;
  side1.receiveShadow = true;
  side2.receiveShadow = true;
  side3.receiveShadow = true;
  side4.receiveShadow = true;
  sub1.receiveShadow = true;
  sub2.receiveShadow = true;
  sub3.receiveShadow = true;
  sub4.receiveShadow = true;
  sub5.receiveShadow = true;
  sub6.receiveShadow = true;

  scene.add(plane);
  scene.add(tableBase);
  scene.add(table);
  scene.add(side1);
  scene.add(side2);
  scene.add(side3);
  scene.add(side4);
  scene.add(hole1);
  scene.add(hole2);
  scene.add(hole3);
  scene.add(hole4);
  scene.add(hole5);
  scene.add(hole6);
  scene.add(sub1);
  scene.add(sub2);
  scene.add(sub3);
  scene.add(sub4);
  scene.add(sub5);
  scene.add(sub6);
}
