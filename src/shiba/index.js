/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: zixisun02 (https://sketchfab.com/dogerlo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c
title: Shiba
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const item = useRef();
  const { nodes, materials } = useGLTF("/shiba/gltf/scene.gltf");

  useFrame((state, delta) => {
    if (props.direction) {
      item.current.rotation.x += 0.01;
    } else {
      item.current.rotation.y += 0.01;
    }
  });
  return (
    <>
      <group ref={item} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            {/* Neck Collar */}
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Group18985_default_0.geometry}
                material={nodes.Group18985_default_0.material}
              />
            </group>
            {/* Shiba */}
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Box002_default_0.geometry}
                material={nodes.Box002_default_0.material}
                onClick={() => alert("Yo hiii")}
              />
            </group>
            {/* Shiba Eyes*/}
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Object001_default_0.geometry}
                material={nodes.Object001_default_0.material}
              />
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/shiba/gltf/scene.gltf");
