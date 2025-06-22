import * as THREE from 'three';

export function createProduct(scene) {
  const material = new THREE.MeshStandardMaterial({ color: 0x8b4513 });

  // Chair seat
  const seat = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 2), material);
  seat.name = "Seat";
  scene.add(seat);

  // Chair back
  const back = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 0.2), material);
  back.position.y = 1;
  back.position.z = -0.9;
  back.name = "Back";
  scene.add(back);

  // Chair legs
  const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);
  const legs = [];

  const positions = [
    [-0.9, -1, -0.9],
    [0.9, -1, -0.9],
    [-0.9, -1, 0.9],
    [0.9, -1, 0.9],
  ];

  for (let i = 0; i < 4; i++) {
    const leg = new THREE.Mesh(legGeometry, material);
    leg.position.set(...positions[i]);
    leg.name = `Leg ${i + 1}`;
    legs.push(leg);
    scene.add(leg);
  }
}
