import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { autoRotateCamera } from './cameraAnimation.js';

const { scene, camera, renderer, controls } = initScene();

const { seat } = createProduct(scene);       // <-- Step 6
addLighting(scene);                          // <-- Step 7
setupInteraction(renderer, scene, camera);   // <-- Step 8

let start = Date.now();

function animate() {
  requestAnimationFrame(animate);

  const elapsed = Date.now() - start;

  autoRotateCamera(camera, elapsed);         // <-- Step 9

  // Step 10: Seat pulsing animation
  seat.scale.y = 1 + 0.05 * Math.sin(elapsed * 0.005);

  controls.update();
  renderer.render(scene, camera);
}
animate();

