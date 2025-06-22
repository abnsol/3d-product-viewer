import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { autoRotateCamera } from './cameraAnimation.js';

const { scene, camera, renderer, controls } = initScene();

const { seat } = createProduct(scene);       
addLighting(scene);                          
setupInteraction(renderer, scene, camera);   

let start = Date.now();

function animate() {
  requestAnimationFrame(animate);

  const elapsed = Date.now() - start;

  autoRotateCamera(camera, elapsed);         

  
  seat.scale.y = 1 + 0.05 * Math.sin(elapsed * 0.005);

  controls.update();
  renderer.render(scene, camera);
}
animate();

