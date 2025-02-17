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
















