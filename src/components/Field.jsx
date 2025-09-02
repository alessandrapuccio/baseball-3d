import * as THREE from "three";

function Field() {
  return(
    <group>
        {/* Ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, -4]}>
          <planeGeometry args={[200, 100]} /> {/* very tall plane */}
          <meshPhongMaterial color="#489147" />
        </mesh>

        {/* Dirt circle around home plate */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.139, -5.76]}>
          <circleGeometry args={[1, 64]} />
          <meshPhongMaterial color="#DEB887" />
        </mesh>

      {/* Home plate (point faces into the field) */}
      <mesh rotation={[-Math.PI / 2, 0, Math.PI]} position={[0, -1.138, -5.6]}>
        <shapeGeometry args={[
          (() => {
            const s = new THREE.Shape();
            s.moveTo(-0.2, 0.2);
            s.lineTo(0.2, 0.2);
            s.lineTo(0.2, -0.24);
            s.lineTo(0.00, -0.56);   // point into the screen/field
            s.lineTo(-0.2, -0.24);
            s.lineTo(-0.2, 0.2);
            return s;
          })()
        ]} />
        <meshBasicMaterial color="white" />
      </mesh>

        {/* First base line (starts from outside corner of right batter's box closest to viewer) */}
        <mesh rotation={[-Math.PI / 2, 0, -Math.PI / 4]} position={[-3, -1.049, -2.3]}>
          <planeGeometry args={[0.02, 7]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/* Third base line (starts from outside corner of left batter's box closest to viewer) */}
        <mesh rotation={[-Math.PI / 2, 0, Math.PI / 4]} position={[3, -1.049, -2.3]}>
          <planeGeometry args={[0.02, 7]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/* Right batter's box outline (narrower) */}
        <group position={[0.45, -1.137, -5.6]}>
          {/* Top edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Bottom edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Left edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Right edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
        </group>

        {/* Left batter's box outline (narrower) */}
        <group position={[-0.45, -1.137, -5.6]}>
          {/* Top edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Bottom edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Left edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Right edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
        </group>  
      </group>  
  );
}

export default Field;