import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';

const { scene, camera, renderer, controls } = initScene();
createProduct(scene);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();


