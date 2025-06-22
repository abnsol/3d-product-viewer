import * as THREE from 'three';

export function setupInteraction(renderer, scene, camera) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const clicked = intersects[0].object;
      console.log("Clicked on:", clicked.name);

      // Highlight effect
      const originalColor = clicked.material.color.getHex();
      clicked.material.color.setHex(0xff0000);
      setTimeout(() => clicked.material.color.setHex(originalColor), 300);
    }
  });
}
