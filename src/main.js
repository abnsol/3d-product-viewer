import { initScene } from './initScene.js';

const { scene, camera, renderer, controls } = initScene();

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

