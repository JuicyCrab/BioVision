//import threejs library 
import * as THREE from 'three';
//allows the camera to move around the screen  
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//allows the gltf.file 
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

// Create the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);


let object;

let controls;

let objToRender = 'Human';

const loader = new GLTFLoader();

loader.load(
  `models/${objToRender}/scene.gltf`,
  function(gltf){

    //file loaded add to scene 
    object = gltf.scene;
    
    object.position.y -= 1.25; // Move model down
    camera.position.y += 1.5;


    scene.add(object);
    


  },
  function(xhr){
    //while loading, log the process 
    console.log((xhr.loaded/ xhr.total * 100) + '% loaded');
  },
  function(error){
    //error log it 
    console.log(error);
  }
);

const renderer = new THREE.WebGLRenderer({alpha: true}); // the background is transparent 
renderer.setSize(window.innerWidth, window.innerHeight);


document.getElementById("container3D").appendChild(renderer.domElement);

camera.position.z = objToRender === "Human" ? 10: 100;

if(objToRender == "Human"){
  controls = new OrbitControls(camera, renderer.domElement);
}

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
}

window.addEventListener("resize", function(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


animate()
















/*  Create the cube
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);


const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry)
const edgesMaterial = new THREE.LineBasicMaterial({color: "black"})
const cubeEdges = new THREE.LineSegments(edgesGeometry, edgesMaterial)
scene.add(cubeEdges)

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 40);
camera.position.z = 5;

// Renderer setup
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// rotational interactivity
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth movement

// Animation 
function animate() {
    requestAnimationFrame(animate);
    
    // cube rotation 
    cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
    cubeEdges.rotation.x += 0.01;
    cubeEdges.rotation.y += 0.01;
    
    controls.update(); 
    renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

//animation
animate();
 
 */



