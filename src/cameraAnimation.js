export function autoRotateCamera(camera, time) {
  const radius = 5;
  const speed = 0.001;

  const angle = time * speed;
  camera.position.x = radius * Math.sin(angle);
  camera.position.z = radius * Math.cos(angle);
  camera.lookAt(0, 0, 0);
}
