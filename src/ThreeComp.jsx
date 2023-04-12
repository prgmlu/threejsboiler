// a comp
import React, { useEffect } from 'react';
import * as THREE from 'three';

let ThreeComp = ({scene}) => {
    useEffect(() => {
        if(!scene) return;
        //cube
        debugger;
        let geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        
    },[scene])
    return null
    }

export default ThreeComp;