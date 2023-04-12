import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import ThreeComp from './ThreeComp';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function App() {
  let [scene, setScene] = useState(null);

  useEffect(() => {
    // Set up a new Three.js scene, camera, and renderer
    scene = new THREE.Scene();
    setScene(scene);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    //orbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 0, -5);


    // Configure the renderer size and add it to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Add your Three.js objects to the scene, like geometry, materials, and lights

    // Create a render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update your scene, camera, and objects here

      renderer.render(scene, camera);
    };

    // Handle window resizing
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Add event listener for window resizing
    window.addEventListener('resize', onWindowResize);

    animate();

    return () => {
      // Clean up Three.js resources when the component is unmounted
      renderer.dispose();
      window.cancelAnimationFrame(animate);

      // Remove the event listener
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <>
    <div id="threejs-container" style={{ width: '100%', height: '100%' }}></div>
    <ThreeComp scene={scene} />
    </>
  );
}

export default App;
