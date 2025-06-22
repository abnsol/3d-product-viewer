import * as THREE from 'three';

export function createProduct(scene) {
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xff4444 });
  const topMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

  // Rocket body
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 3, 32), bodyMaterial);
  scene.add(body);

  // Rocket cone
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1, 32), topMaterial);
  cone.position.y = 2;
  scene.add(cone);

  // Fins
  const finMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
  for (let i = 0; i < 3; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 1), finMaterial);
    fin.position.set(Math.sin(i * 2 * Math.PI / 3) * 0.6, -1, Math.cos(i * 2 * Math.PI / 3) * 0.6);
    fin.rotation.y = i * 2 * Math.PI / 3;
    scene.add(fin);
  }

  body.name = "Rocket Body";
  cone.name = "Nose Cone";

  return { seat: body }; 
}
