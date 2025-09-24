import React, { useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import Rod from './Rod';


function BaseballModel({ spinRate, playing, spinAxis, currentSeamLat, currentSeamLon, useSeamOrientation, resetSpin, showRod }) {
  // const gltf = useLoader(GLTFLoader, "/models/baseball-v2.glb");
  const gltf = useLoader(
    GLTFLoader,
    "/models/baseball-v2.glb",
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );
  const spinGroupRef = React.useRef();
  const modelGroupRef = React.useRef();
  const rodGroupRef = React.useRef();
  const { invalidate } = useThree();
 
  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, (3 * Math.PI) / 2, 0);
    }
  }, [gltf]);

  useEffect(() => {
    if (spinGroupRef.current) {
      spinGroupRef.current.quaternion.identity();
      invalidate();
    }
  }, [resetSpin, invalidate]);

  // Direct seam orientation from lat/lon values
  useEffect(() => {
    if (!modelGroupRef.current) return;

    // Start from identity
    modelGroupRef.current.quaternion.identity();

    // Apply seam orientation directly from current lat/lon values
    if (
      useSeamOrientation &&
      currentSeamLat != null &&
      currentSeamLon != null &&
      !isNaN(currentSeamLat) &&
      !isNaN(currentSeamLon)
    ) {
      const lat = THREE.MathUtils.degToRad(currentSeamLat);
      const lon = THREE.MathUtils.degToRad(currentSeamLon);

      const x = Math.cos(lat) * Math.sin(lon);
      const y = Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lon);

      const surfaceVector = new THREE.Vector3(-x, y, z).normalize();
      const defaultRodVector = new THREE.Vector3(1, 0, 0);

      const quat = new THREE.Quaternion().setFromUnitVectors(
        defaultRodVector,
        surfaceVector
      );

      modelGroupRef.current.quaternion.copy(quat);
    }

    invalidate();
  }, [useSeamOrientation, currentSeamLat, currentSeamLon, invalidate]);


  // Updated spin axis rod orientation
  useEffect(() => {
    if (rodGroupRef.current && spinAxis) {
      const defaultAxis = new THREE.Vector3(1, 0, 0);
      const q = new THREE.Quaternion().setFromUnitVectors(
        defaultAxis,
        spinAxis.clone().normalize()
      );
      rodGroupRef.current.quaternion.copy(q);
      invalidate();
    }
  }, [spinAxis, invalidate]);

  // Spin animation
  useFrame((_, delta) => {
    if (playing && spinGroupRef.current) {
      const radPerSec = (spinRate * 2 * Math.PI) / 60;
      const angle = radPerSec * delta;
      const localX = new THREE.Vector3(1, 0, 0);
      const qSpin = new THREE.Quaternion();
      qSpin.setFromAxisAngle(localX, angle);
      spinGroupRef.current.quaternion.multiplyQuaternions(qSpin, spinGroupRef.current.quaternion);
    }
  });

  return (
    <group>
      <group ref={rodGroupRef}>
        
        {(() => {
          return showRod ?  <Rod /> : null;
        })()}

        <group ref={spinGroupRef}>
          <group ref={modelGroupRef}>
            <primitive object={gltf.scene} scale={2.2} />
          </group>
        </group>
      </group>
    </group>
  );
}

export default BaseballModel;