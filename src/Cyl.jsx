/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three/examples/jsm/libs/tween.module.js';


const Cyl = () => {
    let text = useTexture("./girl.png");
    let gyl = useRef(null);
    useFrame((state, delta) => {
        gyl.current.rotation.y += delta;
    });
    return (
        <group rotation={[0, 1.5, 0.5]}>
            <mesh ref={gyl}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshStandardMaterial map={text} side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Cyl
