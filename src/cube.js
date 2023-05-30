THREE.ArcCurve;

console.log(THREE.ArcCurve);

console.log("cube javascript file opens");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const matline = new THREE.LineBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(matline);

camera.position.z = 2;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.002;
  cube.rotation.y += 0.003;

  renderer.render(scene, camera);
}

animate();

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
