import * as THREE from "./build/three.module.js"

let camera, scene, renderer;

init();

function init() {
    //camera 
    camera = new THREE.PerspectiveCamera(40,
        window.innerWidth / innerHeight,
        1,
        15000
    );

    //scene
    scene = new THREE.Scene();

    //geometory
    const size = 250;
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 50, //輝度
    });

    for(let i = 0; i < 2500; i++){
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
        mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
        mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

        scene.add(mesh);
    }

    //平行高原
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.03);
    scene.add(dirLight);

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window,innerHeight);
    document.body.appendChild(renderer.domElement);

    renderer.render(scene, camera);
}