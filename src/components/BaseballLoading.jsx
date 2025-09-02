import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from '@react-three/drei';

function BaseballLoading() {
  const dot1Ref = useRef();
  const dot2Ref = useRef();
  const dot3Ref = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    //  dots with staggered bounce
    if (dot1Ref.current) {
      dot1Ref.current.scale.setScalar(0.5 + Math.max(0, Math.sin(time * 3)) * 0.5);
    }
    if (dot2Ref.current) {
      dot2Ref.current.scale.setScalar(0.5 + Math.max(0, Math.sin(time * 3 - 0.5)) * 0.5);
    }
    if (dot3Ref.current) {
      dot3Ref.current.scale.setScalar(0.5 + Math.max(0, Math.sin(time * 3 - 1)) * 0.5);
    }
  });

  return (
    <group>
      {/* Text */}
      <Text
        position={[0, 0.01, 0]}
        fontSize={0.008}
        color="#666666"
        anchorX="center"
        anchorY="center"
      >
        Ball loading
      </Text>
      
      {/* Loading dots */}
      <mesh ref={dot1Ref} position={[-0.008, -0.01, 0]}>
        <sphereGeometry args={[0.002, 8, 8]} />
        <meshBasicMaterial color="#999999" />
      </mesh>
      
      <mesh ref={dot2Ref} position={[0, -0.01, 0]}>
        <sphereGeometry args={[0.002, 8, 8]} />
        <meshBasicMaterial color="#999999" />
      </mesh>
      
      <mesh ref={dot3Ref} position={[0.008, -0.01, 0]}>
        <sphereGeometry args={[0.002, 8, 8]} />
        <meshBasicMaterial color="#999999" />
      </mesh>
    </group>
  );
}

export default BaseballLoading;